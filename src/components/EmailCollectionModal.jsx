import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaTimes, FaWhatsapp } from 'react-icons/fa';

const EmailCollectionModal = ({ isOpen, onClose, onSubmit, planName }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }

    setIsSubmitting(true);

    const newLead = {
      email,
      plan: planName,
      source: 'pricing_page',
      visitorId: localStorage.getItem('visitor_id') || null
    };

    // Send to backend database
    try {
      const response = await fetch('http://localhost:3002/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead)
      });

      if (!response.ok) {
        throw new Error('Failed to save lead');
      }

      const data = await response.json();
      console.log('Lead saved to database:', data);

      // Also keep local backup
      const existingEmails = JSON.parse(localStorage.getItem('streamholland_leads') || '[]');
      existingEmails.push({
        ...newLead,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('streamholland_leads', JSON.stringify(existingEmails));

      setIsSubmitting(false);
      onSubmit(email);
    } catch (error) {
      console.error('Error saving lead:', error);

      // If backend fails, still save locally and continue
      const existingEmails = JSON.parse(localStorage.getItem('streamholland_leads') || '[]');
      existingEmails.push({
        ...newLead,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('streamholland_leads', JSON.stringify(existingEmails));

      setIsSubmitting(false);
      onSubmit(email);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
              aria-label="Sluiten"
            >
              <FaTimes className="text-gray-600 text-lg" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-brand-orange to-[#E85D00] p-8 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <FaEnvelope className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Laatste Stap!</h3>
                  <p className="text-white/90 text-sm">Vul je email in om verder te gaan</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-orange-50 text-brand-orange rounded-full text-sm font-semibold mb-4">
                  {planName}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Voer je e-mailadres in om je bestelling af te ronden via WhatsApp.
                  We sturen je de toegangscodes direct na betaling.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mailadres *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setIsValid(true);
                      }}
                      placeholder="jouw@email.nl"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none ${
                        isValid
                          ? 'border-gray-200 focus:border-brand-orange'
                          : 'border-red-500 focus:border-red-500'
                      }`}
                      required
                    />
                    <FaEnvelope className={`absolute right-4 top-1/2 -translate-y-1/2 ${
                      isValid ? 'text-gray-400' : 'text-red-500'
                    }`} />
                  </div>
                  {!isValid && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      Voer een geldig e-mailadres in
                    </p>
                  )}
                </div>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-500">
                  Je e-mailadres wordt alleen gebruikt voor het verzenden van je IPTV-toegang.
                  Zie ons <a href="/privacybeleid" className="text-brand-orange hover:underline">privacybeleid</a>.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-orange to-[#E85D00] hover:from-[#E85D00] hover:to-brand-orange text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Verwerken...</span>
                    </>
                  ) : (
                    <>
                      <FaWhatsapp className="text-2xl" />
                      <span>Doorgaan naar WhatsApp</span>
                    </>
                  )}
                </button>
              </form>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-4 justify-center text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>100% Veilig</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Geen Spam</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Direct Actief</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EmailCollectionModal;
