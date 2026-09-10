import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCreditCard, FaRocket } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: FaWhatsapp,
      title: 'Stap 1: Bestel via WhatsApp',
      description: 'Neem contact met ons op via WhatsApp en kies uw gewenste pakket. Wij begeleiden u door het proces.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FaCreditCard,
      title: 'Stap 2: Betaal Veilig',
      description: 'Betaal eenvoudig via iDEAL of Bancontact. Uw betaalgegevens zijn 100% veilig en beschermd.',
      color: 'from-blue-500 to-brand-orange',
    },
    {
      icon: FaRocket,
      title: 'Stap 3: Start Direct',
      description: 'Ontvang binnen 5 minuten uw inloggegevens en start direct met kijken op al uw apparaten.',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section className="section-padding bg-navy-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>

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
            Hoe het{' '}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Werkt
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            In 3 eenvoudige stappen aan de slag met Holland IPTV
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="glass-effect p-8 rounded-2xl hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 mt-4 mx-auto`}>
                  <step.icon className="text-4xl text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                <p className="text-gray-400 text-center leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/31612345678?text=Ik%20wil%20graag%20meer%20informatie"
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            <FaWhatsapp className="text-2xl" />
            Start Nu via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
