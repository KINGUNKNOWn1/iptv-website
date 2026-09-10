import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaShieldAlt, FaTv, FaRocket, FaWhatsapp } from 'react-icons/fa';
import SEO from '../components/SEO';

const IPTVKopen = () => {
  const benefits = [
    {
      icon: FaTv,
      title: '30.500+ Live Kanalen',
      description: 'Toegang tot meer dan 30.500 live zenders wereldwijd, inclusief alle Nederlandse kanalen zoals NPO, RTL, en SBS.'
    },
    {
      icon: FaShieldAlt,
      title: 'Betrouwbare Service',
      description: '99.9% uptime garantie met servers in Nederland. Geen buffering, altijd kristalhelder beeld in HD, UHD en 4K kwaliteit.'
    },
    {
      icon: FaRocket,
      title: 'Direct Actief',
      description: 'Bestel nu en ontvang je inloggegevens binnen 5 minuten. Begin direct met kijken op al je apparaten.'
    },
    {
      icon: FaWhatsapp,
      title: 'Nederlandse Support 24/7',
      description: 'Hulp nodig? Onze Nederlandstalige support is 24/7 bereikbaar via WhatsApp. Geen wachttijden, directe hulp.'
    }
  ];

  const features = [
    'IPTV kopen zonder gedoe - iDEAL betaling mogelijk',
    'Geen automatische verlenging of verborgen kosten',
    'Kijk op onbeperkt aantal apparaten tegelijk',
    '150.000+ films en series on-demand',
    'EPG (elektronische programmagids) inbegrepen',
    'Catch-up TV functie voor gemiste programma\'s',
    'Premium sportzenders (Ziggo Sport, Fox Sports)',
    'Arabische, Turkse en internationale kanalen'
  ];

  const steps = [
    {
      number: '1',
      title: 'Kies je abonnement',
      description: 'Selecteer een <link-prijzen>IPTV abonnement</link-prijzen> dat bij jou past: 3, 6 of 12 maanden.'
    },
    {
      number: '2',
      title: 'Betaal veilig met iDEAL',
      description: 'Betaal eenvoudig en veilig via iDEAL, de meest gebruikte betaalmethode in Nederland.'
    },
    {
      number: '3',
      title: 'Ontvang inloggegevens',
      description: 'Binnen 5 minuten ontvang je je persoonlijke inloggegevens via WhatsApp.'
    },
    {
      number: '4',
      title: 'Begin met kijken',
      description: 'Installeer de <link-apparaten>IPTV app op je apparaat</link-apparaten> en log in. Klaar!'
    }
  ];

  return (
    <>
      <SEO
        title="IPTV Kopen Nederland | Premium IPTV Abonnement vanaf €48/jaar - Stream Holland"
        description="IPTV kopen in Nederland? Kies Stream Holland voor 30.500+ kanalen, 4K kwaliteit, Nederlandse support 24/7. Geen automatische verlenging. Bestel direct via iDEAL."
        keywords="iptv kopen, iptv kopen nederland, iptv abonnement kopen, iptv aanbieder, nederlandse iptv"
      />

      <div className="min-h-screen bg-brand-black">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2000"
              alt="IPTV kopen Nederland"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/80 to-brand-black/60"></div>
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                IPTV Kopen in Nederland
                <br />
                <span className="text-blue-500">Betrouwbaar & Betaalbaar</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
                Op zoek naar waar je <strong>IPTV kopen</strong> kunt in Nederland? Stream Holland is dé betrouwbare IPTV aanbieder met 30.500+ kanalen, 4K kwaliteit en Nederlandse support. Geen automatische verlenging, iDEAL betaling mogelijk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/prijzen"
                  className="btn-primary text-center"
                >
                  Bekijk IPTV Abonnement Prijzen
                </Link>
                <Link
                  to="/contact"
                  className="btn-secondary text-center"
                >
                  <FaWhatsapp className="inline mr-2" />
                  Bestel via WhatsApp
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Stream Holland */}
        <section className="py-20 bg-brand-black/90">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Waarom IPTV kopen bij Stream Holland?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Als je op zoek bent naar een <Link to="/iptv-abonnement" className="text-brand-orange hover:text-[#E85D00] underline">betrouwbaar IPTV abonnement</Link>, ben je bij ons aan het juiste adres.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-brand-black border border-slate-700 rounded-xl p-6 hover:border-brand-orange transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-orange to-[#E85D00] flex items-center justify-center mb-4">
                    <benefit.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-20 bg-brand-black">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Wat krijg je bij een IPTV abonnement kopen?
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Bij Stream Holland krijg je toegang tot het meest complete IPTV aanbod van Nederland. Bekijk <Link to="/kanalen" className="text-brand-orange hover:text-[#E85D00] underline">alle beschikbare Nederlandse IPTV kanalen</Link> en meer.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=800"
                  alt="IPTV abonnement features"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-brand-black/90 to-brand-black">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Hoe werkt IPTV kopen bij Stream Holland?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                In 4 simpele stappen begin je met kijken
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-brand-black/90 border border-slate-700 rounded-xl p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-orange to-[#E85D00] flex items-center justify-center mb-4 text-white text-2xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">
                      {step.description.includes('<link-prijzen>') ? (
                        <>
                          {step.description.split('<link-prijzen>')[0]}
                          <Link to="/prijzen" className="text-brand-orange hover:text-[#E85D00] underline">
                            {step.description.split('<link-prijzen>')[1].split('</link-prijzen>')[0]}
                          </Link>
                          {step.description.split('</link-prijzen>')[1]}
                        </>
                      ) : step.description.includes('<link-apparaten>') ? (
                        <>
                          {step.description.split('<link-apparaten>')[0]}
                          <Link to="/apparaten" className="text-brand-orange hover:text-[#E85D00] underline">
                            {step.description.split('<link-apparaten>')[1].split('</link-apparaten>')[0]}
                          </Link>
                          {step.description.split('</link-apparaten>')[1]}
                        </>
                      ) : step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 text-brand-orange text-3xl">→</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-black">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-brand-orange to-[#E85D00] rounded-2xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Klaar om IPTV te kopen?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Kies het <Link to="/iptv-abonnement" className="text-white underline font-semibold">beste IPTV abonnement voor Nederland</Link> en begin binnen 5 minuten met kijken. Vanaf slechts €48 per jaar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/prijzen"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-black text-brand-orange font-bold rounded-xl hover:bg-white/5 transition-all shadow-lg"
                >
                  Bekijk Alle Prijzen
                </Link>
                <Link
                  to="/veelgestelde-vragen"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-800 text-white font-bold rounded-xl hover:bg-blue-900 transition-all"
                >
                  Veelgestelde Vragen
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPTVKopen;
