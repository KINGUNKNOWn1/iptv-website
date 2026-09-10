import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGift, FaClock, FaWhatsapp } from 'react-icons/fa';

const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Check if mouse is leaving from the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Add event listener after 5 seconds (to avoid annoying immediate visitors)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClaim = () => {
    // Redirect to WhatsApp with special offer message
    const message = encodeURIComponent(
      'Hoi! Ik wil graag gebruik maken van de 10% korting actie voor nieuwe klanten!'
    );
    window.open(`https://wa.me/31612345678?text=${message}`, '_blank');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-br from-brand-black/90 to-brand-black rounded-3xl max-w-2xl w-full overflow-hidden border-2 border-brand-orange/50 shadow-2xl shadow-blue-600/20"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-700/50 hover:bg-slate-600 text-white flex items-center justify-center transition-colors"
              >
                <FaTimes />
              </button>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-orange via-purple-600 to-pink-600" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-orange rounded-full opacity-20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600 rounded-full opacity-20 blur-3xl" />

              {/* Content */}
              <div className="relative p-8 md:p-12">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg"
                >
                  <FaGift className="text-white text-3xl" />
                </motion.div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                  Wacht Even! 🎉
                </h2>

                <p className="text-xl text-gray-300 text-center mb-6">
                  Voordat je gaat, hier is een <span className="text-yellow-500 font-bold">exclusieve aanbieding</span> voor je!
                </p>

                {/* Offer Box */}
                <div className="bg-gradient-to-r from-brand-orange/20 to-purple-600/20 border-2 border-brand-orange/50 rounded-2xl p-6 mb-6">
                  <div className="text-center mb-4">
                    <p className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
                      10% KORTING
                    </p>
                    <p className="text-gray-300 text-lg">
                      Op jouw eerste abonnement!
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {[
                      '30.500+ live zenders in HD/4K',
                      '150.000+ films en series',
                      'Actief binnen 5 minuten',
                      'Geen automatische verlenging',
                      '14 dagen geld-terug-garantie'
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-2 text-gray-200"
                      >
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Timer */}
                <div className="flex items-center justify-center gap-2 mb-6 text-orange-500">
                  <FaClock className="animate-pulse" />
                  <span className="font-semibold">Deze aanbieding vervalt over 10 minuten!</span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleClaim}
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-green-600/50 text-lg"
                  >
                    <FaWhatsapp className="text-xl" />
                    Claim 10% Korting Nu!
                  </button>

                  <button
                    onClick={handleClose}
                    className="px-6 py-4 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Nee bedankt, ik betaal liever vol tarief
                  </button>
                </div>

                {/* Trust Badge */}
                <p className="text-center text-xs text-gray-500 mt-4">
                  🔒 Veilig betalen met iDEAL • Geen abonnement • 24/7 Support
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;
