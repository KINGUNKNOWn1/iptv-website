import React from 'react';
import { motion } from 'framer-motion';
import { FaTv, FaGlobe, FaClock, FaShieldAlt, FaHeadset, FaSync } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: FaTv,
      title: '30.500+ Live Kanalen',
      description: 'Toegang tot duizenden kanalen uit Nederland, Turkije, Arabische landen en wereldwijd',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FaGlobe,
      title: 'Meertalige Content',
      description: 'Nederlands, Turks, Arabisch, Engels en meer talen in één pakket',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FaClock,
      title: '14 Dagen Terugkijken',
      description: 'Mis nooit meer je favoriete programma\'s met onze catch-up functie',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FaShieldAlt,
      title: '99.9% Uptime Garantie',
      description: 'Betrouwbare service met minimale onderbrekingen en maximale kijkplezier',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: FaHeadset,
      title: '24/7 Nederlandse Support',
      description: 'Altijd hulp beschikbaar in het Nederlands via WhatsApp en e-mail',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: FaSync,
      title: 'Automatische Updates',
      description: 'Zenderlijst wordt automatisch bijgewerkt, altijd de nieuwste kanalen',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="features" className="section-padding bg-navy-800 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Waarom kiezen voor{' '}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Holland IPTV?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            De meest complete IPTV service in Nederland met topkwaliteit en betrouwbaarheid
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-6 rounded-2xl hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 group"
            >
              <div className="relative">
                {/* Icon Container */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-3xl text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-2xl transition-all duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 glass-effect p-8 rounded-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-2">
                30.5K+
              </div>
              <div className="text-gray-400">Live Kanalen</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-2">
                150K+
              </div>
              <div className="text-gray-400">Films & Series</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-2">
                4.9/5
              </div>
              <div className="text-gray-400">Klant Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
