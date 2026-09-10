import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCheckCircle, FaStar, FaCreditCard, FaHeadset, FaTrophy } from 'react-icons/fa';
import EmailCollectionModal from './EmailCollectionModal';

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const handleOrderClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleEmailSubmit = (email) => {
    if (selectedPlan) {
      // Redirect to WhatsApp with email included in message
      const message = `${selectedPlan.whatsapp}\n\nE-mail: ${email}`;
      window.open(
        `https://wa.me/31612345678?text=${encodeURIComponent(message)}`,
        '_blank',
        'noopener,noreferrer'
      );
    }
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const plans = [
    {
      name: 'IPTV Premium',
      duration: '3 maanden',
      price: '23',
      period: '/ 3 maanden',
      popular: false,
      features: [
        '24 uur gratis proefperiode',
        'HD - UHD - SHD',
        'Meer dan 30.500 kanalen live',
        'Meer dan 150.000 films en series',
        'Compatibel met alle apparaten',
        'Toegang tot alle sportkanalen',
        'TV-gids met EPG-ondersteuning',
        'Uitgesteld kijken via Replay en Catchup',
        'Betrouwbare beschikbaarheid van 99,9%',
        'Automatische software-updates',
        'Klantenservice 24/7',
      ],
      whatsapp: 'Ik wil het IPTV Premium 3 maanden abonnement bestellen',
    },
    {
      name: 'IPTV Premium',
      duration: '12 maanden',
      price: '48',
      period: '/ 12 maanden',
      popular: true,
      savings: 'Bespaar €28 - Beste Deal!',
      features: [
        '24 uur gratis proefperiode',
        'HD - UHD - SHD',
        'Meer dan 30.500 kanalen live',
        'Meer dan 150.000 films en series',
        'Compatibel met alle apparaten',
        'Toegang tot alle sportkanalen',
        'TV-gids met EPG-ondersteuning',
        'Uitgesteld kijken via Replay en Catchup',
        'Betrouwbare beschikbaarheid van 99,9%',
        'Automatische software-updates',
        'Prioriteit klantenservice 24/7',
      ],
      whatsapp: 'Ik wil het IPTV Premium 12 maanden abonnement bestellen',
    },
    {
      name: 'IPTV Premium',
      duration: '6 maanden',
      price: '32',
      period: '/ 6 maanden',
      popular: false,
      savings: 'Bespaar €14',
      features: [
        '24 uur gratis proefperiode',
        'HD - UHD - SHD',
        'Meer dan 30.500 kanalen live',
        'Meer dan 150.000 films en series',
        'Compatibel met alle apparaten',
        'Toegang tot alle sportkanalen',
        'TV-gids met EPG-ondersteuning',
        'Uitgesteld kijken via Replay en Catchup',
        'Betrouwbare beschikbaarheid van 99,9%',
        'Automatische software-updates',
        'Klantenservice 24/7',
      ],
      whatsapp: 'Ik wil het IPTV Premium 6 maanden abonnement bestellen',
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-navy-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange text-lg mb-4 font-semibold"
          >
            Vanaf 23€ - zonder automatische verlenging
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kies uw{' '}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Abonnement
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Transparante prijzen, geen verborgen kosten, geen auto-verlenging
          </p>

          {/* Benefit Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            {[
              {
                icon: FaCreditCard,
                text: 'Eenmalige Betaling',
                gradient: 'from-brand-orange to-[#E85D00]',
                iconBg: 'bg-brand-offwhite',
                iconColor: 'text-brand-orange'
              },
              {
                icon: FaHeadset,
                text: '24/7 Support',
                gradient: 'from-brand-orange to-[#E85D00]',
                iconBg: 'bg-brand-offwhite',
                iconColor: 'text-brand-orange'
              },
              {
                icon: FaTrophy,
                text: 'Uitstekende Prijs/Kwaliteit',
                gradient: 'from-brand-orange to-[#E85D00]',
                iconBg: 'bg-brand-offwhite',
                iconColor: 'text-brand-orange'
              },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${badge.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

                <div className="relative flex flex-col items-center gap-3 p-6 bg-brand-black/50 backdrop-blur-sm rounded-2xl border border-brand-gray/30 group-hover:border-transparent transition-all min-w-[180px]">
                  <div className={`w-14 h-14 rounded-full ${badge.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <badge.icon className={`text-2xl ${badge.iconColor}`} />
                  </div>
                  <p className="text-sm font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all text-center">
                    {badge.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-brand-orange via-[#E85D00] to-brand-orange border-2 border-brand-orange md:scale-110 md:-mt-8 z-10'
                  : 'bg-brand-offwhite border border-brand-gray-border'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 right-6">
                  <div className="bg-white px-4 py-2 rounded-b-lg flex items-center gap-2 shadow-lg">
                    <FaStar className="text-brand-orange" />
                  </div>
                </div>
              )}

              {/* Savings Badge */}
              {plan.savings && (
                <div className="absolute -top-3 -right-3">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                    plan.popular ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'
                  }`}>
                    {plan.savings}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <p className={`text-lg font-bold mb-3 ${plan.popular ? 'text-white' : 'text-brand-orange'}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className={`text-5xl md:text-6xl font-bold ${
                    plan.popular ? 'text-white' : 'text-brand-black'
                  }`}>
                    {plan.price} €
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-brand-offwhite' : 'text-brand-gray'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-white' : 'bg-brand-orange'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${plan.popular ? 'bg-brand-orange' : 'bg-white'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-brand-black'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleOrderClick(plan)}
                className={`block w-full text-center px-6 py-4 rounded-xl font-bold transition-all ${
                  plan.popular
                    ? 'bg-white hover:bg-brand-offwhite text-brand-orange shadow-lg'
                    : 'border-2 border-brand-orange text-brand-orange hover:bg-brand-offwhite'
                }`}
              >
                Passer la commande
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect p-6 rounded-2xl text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <span className="text-gray-300">Geen Auto-Verlenging</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <span className="text-gray-300">5 Minuten Activatie</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <span className="text-gray-300">iDEAL & Bancontact</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <span className="text-gray-300">Gratis Proefperiode</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Email Collection Modal */}
      <EmailCollectionModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPlan(null);
        }}
        onSubmit={handleEmailSubmit}
        planName={selectedPlan ? `${selectedPlan.name} - ${selectedPlan.duration}` : ''}
      />
    </section>
  );
};

export default Pricing;
