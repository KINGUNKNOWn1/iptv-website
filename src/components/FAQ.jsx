import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Hoe start ik met Holland IPTV?',
      answer: 'Het is heel eenvoudig! Neem contact met ons op via WhatsApp, kies uw gewenste pakket, betaal veilig via iDEAL of Bancontact, en ontvang binnen 5 minuten uw inloggegevens. U kunt dan direct beginnen met kijken op al uw apparaten.',
    },
    {
      question: 'Op hoeveel apparaten kan ik tegelijk kijken?',
      answer: 'Met alle onze pakketten kunt u op maximaal 4 apparaten tegelijk kijken. Perfect voor het hele gezin! Elk scherm ontvangt dezelfde hoge kwaliteit.',
    },
    {
      question: 'Welke kanalen zijn beschikbaar?',
      answer: 'Wij bieden 30.500+ live kanalen aan, inclusief Nederlandse, Turkse, Arabische, Engelse en vele andere internationale zenders. Daarnaast heeft u toegang tot 150.000+ films en series on-demand.',
    },
    {
      question: 'Hoe werkt de terugkijk functie?',
      answer: 'Met onze 14-dagen terugkijk functie (Catch-Up TV) kunt u gemiste programma\'s tot 14 dagen terug bekijken. Gemist programma\'s zijn direct beschikbaar in de EPG gids.',
    },
    {
      question: 'Welke betaalmethoden accepteren jullie?',
      answer: 'Wij accepteren iDEAL en Bancontact voor veilige en gemakkelijke betalingen. Na betaling ontvangt u direct uw inloggegevens via WhatsApp.',
    },
    {
      question: 'Is er een gratis proefperiode?',
      answer: 'Ja! Wij bieden een gratis proefperiode aan zodat u onze service kunt testen voordat u een abonnement neemt. Neem contact met ons op via WhatsApp om uw gratis proef te starten - geen creditcard vereist.',
    },
    {
      question: 'Wat gebeurt er na afloop van mijn abonnement?',
      answer: 'Wij werken NIET met auto-verlenging. Uw abonnement stopt automatisch na de gekozen periode. U ontvangt een herinnering wanneer uw abonnement bijna afloopt, zodat u kunt verlengen als u dat wilt.',
    },
    {
      question: 'Krijg ik Nederlandse support?',
      answer: 'Absoluut! Wij zijn een Nederlands bedrijf gevestigd in Rotterdam en bieden 24/7 support in het Nederlands via WhatsApp en e-mail. Ons team staat altijd voor u klaar.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-navy-800 relative overflow-hidden">
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
            Veelgestelde{' '}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Vragen
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Alles wat u moet weten over Holland IPTV
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <FaChevronDown className="text-primary-500 text-xl" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="glass-effect p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold mb-4">Heeft u nog vragen?</h3>
            <p className="text-gray-400 mb-6">
              Ons team staat 24/7 voor u klaar via WhatsApp
            </p>
            <a
              href="https://wa.me/31612345678?text=Ik%20heb%20een%20vraag%20over%20Holland%20IPTV"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Neem Contact Op
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
