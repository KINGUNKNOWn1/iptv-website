import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import SEO from '../components/SEO';

const Contact = () => {
  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      description: '+31 6 12 34 56 78',
      detail: 'Snelste manier om te bestellen',
      link: 'https://wa.me/31612345678',
      primary: true
    },
    {
      icon: FaEnvelope,
      title: 'E-mail',
      description: 'info@iptv4k.nl',
      detail: 'We reageren binnen 1 uur',
      link: 'mailto:info@iptv4k.nl',
      primary: false
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Locatie',
      description: 'Rotterdam, Nederland',
      detail: 'Gevestigd in Nederland',
      link: null,
      primary: false
    },
    {
      icon: FaClock,
      title: 'Support Tijden',
      description: '24/7 Beschikbaar',
      detail: 'Ook in het weekend',
      link: null,
      primary: false
    }
  ];

  const orderSteps = [
    'Neem contact op via WhatsApp',
    'Kies je gewenste abonnement (3, 6 of 12 maanden)',
    'Betaal veilig met iDEAL',
    'Ontvang je inloggegevens binnen 5 minuten',
    'Installeer de app en begin met kijken'
  ];

  const supportTopics = [
    'Bestellen van een IPTV abonnement',
    'Vragen over prijzen en betaling',
    'Hulp bij installatie op je apparaat',
    'Technische ondersteuning',
    'Vragen over kanalen en functies',
    'Problemen met inloggen of kijken'
  ];

  return (
    <>
      <SEO
        title="Contact | IPTV Bestellen via WhatsApp - IPTV4K"
        description="Neem contact op met IPTV4K via WhatsApp of e-mail. Nederlandse support 24/7. Bestel je IPTV abonnement en ontvang inloggegevens binnen 5 minuten."
        keywords="iptv contact, iptv bestellen whatsapp, iptv aanbieder contact, iptv klantenservice"
      />

      <div className="min-h-screen bg-slate-900 pt-32">
        {/* Header */}
        <section className="pb-12">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Contact & Bestellen
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Bestel je <Link to="/iptv-abonnement" className="text-blue-400 hover:text-blue-300 underline">IPTV abonnement</Link> direct via WhatsApp of neem contact op voor vragen.
                Nederlandse support 24/7 beschikbaar.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="pb-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-slate-800 border ${method.primary ? 'border-blue-600' : 'border-slate-700'} rounded-xl p-6 ${method.link ? 'hover:border-blue-600 cursor-pointer' : ''} transition-all group`}
                  onClick={() => method.link && window.open(method.link, '_blank')}
                >
                  <div className={`w-14 h-14 rounded-xl ${method.primary ? 'bg-gradient-to-br from-green-600 to-green-700' : 'bg-gradient-to-br from-blue-600 to-blue-700'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-300 mb-1 font-semibold">
                    {method.description}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {method.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="pb-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center"
            >
              <FaWhatsapp className="text-white text-6xl mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Bestel Direct via WhatsApp
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                De snelste manier om je <Link to="/iptv-kopen" className="text-white underline font-semibold">IPTV te kopen</Link>.
                Stuur ons een bericht en we helpen je direct verder.
              </p>
              <a
                href="https://wa.me/31612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg text-lg"
              >
                <FaWhatsapp className="text-2xl" />
                Open WhatsApp Chat
              </a>
            </motion.div>
          </div>
        </section>

        {/* Order Process */}
        <section className="py-20 bg-slate-800">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Bestelproces in 5 stappen
              </h2>
              <p className="text-xl text-gray-400">
                Bekijk eerst onze <Link to="/prijzen" className="text-blue-400 hover:text-blue-300 underline">IPTV prijzen</Link> en kies je abonnement
              </p>
            </motion.div>

            <div className="space-y-4">
              {orderSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-slate-900 border border-slate-700 rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 text-lg">{step}</p>
                  </div>
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Topics */}
        <section className="py-20 bg-slate-900">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Waarmee kunnen we je helpen?
              </h2>
              <p className="text-xl text-gray-400">
                Onze Nederlandse support helpt je met
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {supportTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-xl p-4"
                >
                  <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                  <span className="text-gray-300">{topic}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">
                Heb je vragen over de service? Bekijk onze
              </p>
              <Link
                to="/veelgestelde-vragen"
                className="text-blue-400 hover:text-blue-300 underline text-lg"
              >
                Veelgestelde Vragen →
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-slate-800">
          <div className="container-custom max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 border border-slate-700 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Nieuwe klant?
                </h3>
                <p className="text-gray-400 mb-6">
                  Lees meer over onze service en waarom klanten kiezen voor IPTV4K als hun betrouwbare <Link to="/iptv-nederland" className="text-blue-400 hover:text-blue-300 underline">Nederlandse IPTV aanbieder</Link>.
                </p>
                <Link
                  to="/over-ons"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Meer over IPTV4K →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 border border-slate-700 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Compatibiliteit checken?
                </h3>
                <p className="text-gray-400 mb-6">
                  Wil je weten of IPTV4K werkt op jouw apparaat? Bekijk onze lijst met ondersteunde <Link to="/apparaten" className="text-blue-400 hover:text-blue-300 underline">apparaten</Link>.
                </p>
                <Link
                  to="/apparaten"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Bekijk apparaten →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
