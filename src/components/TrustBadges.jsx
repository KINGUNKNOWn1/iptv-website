import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaShieldAlt, FaHeadset, FaCreditCard, FaCheckCircle, FaAward } from 'react-icons/fa';

const TrustBadges = () => {
  const badges = [
    {
      icon: FaLock,
      title: 'SSL Beveiligd',
      description: '256-bit encryptie',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaShieldAlt,
      title: 'GDPR Compliant',
      description: 'Privacy gegarandeerd',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaCreditCard,
      title: 'Veilig Betalen',
      description: 'iDEAL & Bancontact',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Nederlandse hulp',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FaCheckCircle,
      title: '99.9% Uptime',
      description: 'Betrouwbaarheid',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: FaAward,
      title: '24u Gratis Test',
      description: 'Test de kwaliteit',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-brand-black mb-2">
            Waarom Stream Holland Vertrouwen?
          </h3>
          <p className="text-gray-600">
            Veilig, betrouwbaar en altijd bereikbaar
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center`}>
                <badge.icon className="text-white text-2xl" />
              </div>
              <h4 className="font-bold text-brand-black text-sm mb-1">{badge.title}</h4>
              <p className="text-xs text-gray-600">{badge.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4 font-semibold">Veilig betalen met:</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* iDEAL */}
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="font-bold text-purple-600 text-xl">iDEAL</span>
            </div>

            {/* Bancontact */}
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="font-bold text-blue-600 text-xl">Bancontact</span>
            </div>

            {/* PayPal */}
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="font-bold text-blue-700 text-xl">PayPal</span>
            </div>

            {/* Visa/Mastercard */}
            <div className="bg-white px-6 py-3 rounded-lg shadow-md flex items-center gap-2">
              <span className="font-bold text-blue-800">VISA</span>
              <span className="text-gray-300">|</span>
              <span className="font-bold text-red-600">Mastercard</span>
            </div>
          </div>
        </motion.div>

        {/* Security Seals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600"
        >
          <div className="flex items-center gap-2">
            <FaLock className="text-green-600" />
            <span>256-bit SSL Encryptie</span>
          </div>
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-blue-600" />
            <span>GDPR Privacy Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" />
            <span>Veilige Betalingen</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
