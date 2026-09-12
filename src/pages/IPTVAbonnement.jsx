import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCrown, FaPlay, FaTv, FaUsers, FaHeadset } from 'react-icons/fa';
import SEO from '../components/SEO';
import Pricing from '../components/Pricing';

const IPTVAbonnement = () => {
  const features = [
    {
      icon: <FaTv className="text-4xl text-blue-500" />,
      title: "30.500+ Live Kanalen",
      description: "Alle Nederlandse, internationale, sport, films en series kanalen"
    },
    {
      icon: <FaPlay className="text-4xl text-green-500" />,
      title: "150.000+ VOD Titels",
      description: "On-demand films en series in HD/UHD/4K kwaliteit"
    },
    {
      icon: <FaUsers className="text-4xl text-purple-500" />,
      title: "Multi-device",
      description: "Kijk op onbeperkt aantal apparaten tegelijk"
    },
    {
      icon: <FaHeadset className="text-4xl text-orange-500" />,
      title: "24/7 Nederlandse Support",
      description: "Altijd bereikbaar via WhatsApp en email"
    }
  ];

  const plans = [
    {
      duration: "3 Maanden",
      price: "€23",
      perMonth: "€7,67/maand",
      popular: false
    },
    {
      duration: "6 Maanden",
      price: "€32",
      perMonth: "€5,33/maand",
      popular: false
    },
    {
      duration: "12 Maanden",
      price: "€48",
      perMonth: "€4,00/maand",
      popular: true,
      savings: "Bespaar €44"
    }
  ];

  const benefits = [
    "Geen verborgen kosten of extra toeslagen",
    "Geen automatische verlenging - volledige controle",
    "Binnen 5 minuten actief na betaling",
    "14 dagen geld-terug-garantie",
    "Betaal veilig via iDEAL",
    "Stabiele 99.9% uptime",
    "HD, UHD en 4K kwaliteit",
    "Nederlandse, Arabische, Turkse en internationale kanalen",
    "EPG (elektronische programmagids) inbegrepen",
    "Regelmatige updates met nieuwe content"
  ];

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-brand-black text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-black via-slate-800 to-brand-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  IPTV Abonnement Kopen
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Het beste <strong>IPTV abonnement</strong> van Nederland. 30.500+ kanalen, 150.000+ films en series.
                Vanaf €4 per maand. Geen automatische verlenging.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#pricing"
                  className="px-8 py-4 bg-brand-orange hover:bg-[#E85D00] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Bekijk Abonnementen
                </a>
                <a
                  href="https://wa.me/18653169315"
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Direct Bestellen via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-brand-black/90/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Wat Krijg Je met Ons <span className="text-brand-orange">IPTV Abonnement</span>?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-brand-black p-6 rounded-lg text-center hover:bg-brand-black/90 transition-all"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans Comparison */}
        <section className="py-20 bg-brand-black" id="pricing">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Kies Je <span className="text-brand-orange">IPTV Abonnement</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Alle abonnementen bevatten hetzelfde aanbod. Kies alleen de duur die bij je past.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-brand-black/90 rounded-xl p-8 relative ${
                    plan.popular ? 'border-2 border-blue-500 shadow-lg shadow-blue-500/20' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <FaCrown /> MEEST GEKOZEN
                      </span>
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{plan.duration}</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-brand-orange">{plan.price}</span>
                      <p className="text-gray-400 mt-2">{plan.perMonth}</p>
                    </div>

                    {plan.savings && (
                      <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg mb-4 font-semibold">
                        {plan.savings}
                      </div>
                    )}

                    <a
                      href="https://wa.me/18653169315"
                      className={`block w-full py-3 rounded-lg font-semibold transition-all ${
                        plan.popular
                          ? 'bg-brand-orange hover:bg-[#E85D00] text-white'
                          : 'bg-slate-700 hover:bg-slate-600 text-white'
                      }`}
                    >
                      Nu Bestellen
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-brand-black/90/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Waarom Kiezen voor <span className="text-brand-orange">Stream Holland Abonnement</span>?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 bg-brand-black p-4 rounded-lg"
                >
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-brand-orange to-purple-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Start Vandaag met Je IPTV Abonnement
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Binnen 5 minuten actief. 14 dagen geld-terug-garantie. Geen risico.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/prijzen"
                  className="px-8 py-3 bg-brand-black text-brand-orange font-semibold rounded-lg hover:bg-white/5 transition-all"
                >
                  Alle Prijzen Bekijken
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-brand-black hover:text-brand-orange transition-all"
                >
                  Vragen? Neem Contact Op
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-brand-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Veelgestelde Vragen over <span className="text-brand-orange">IPTV Abonnementen</span>
            </h2>

            <div className="space-y-6">
              <div className="bg-brand-black/90 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-brand-orange">
                  Wat is het verschil tussen de abonnementen?
                </h3>
                <p className="text-gray-300">
                  Alle abonnementen bevatten exact hetzelfde aanbod: 30.500+ kanalen en 150.000+ VOD titels.
                  Het enige verschil is de looptijd. Langere abonnementen zijn goedkoper per maand.
                </p>
              </div>

              <div className="bg-brand-black/90 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-brand-orange">
                  Verlengd mijn IPTV abonnement automatisch?
                </h3>
                <p className="text-gray-300">
                  Nee! Bij Stream Holland is er <strong>geen automatische verlenging</strong>. Je hebt volledige controle.
                  We sturen je een herinnering voordat je abonnement afloopt, en je kunt dan zelf beslissen of je wilt verlengen.
                </p>
              </div>

              <div className="bg-brand-black/90 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-brand-orange">
                  Hoe snel is mijn IPTV abonnement actief?
                </h3>
                <p className="text-gray-300">
                  Je <Link to="/iptv-kopen" className="text-brand-orange hover:underline">IPTV abonnement</Link> is binnen
                  <strong> 5 minuten actief</strong> na betaling via iDEAL. Je ontvangt direct je inloggegevens via email.
                </p>
              </div>

              <div className="bg-brand-black/90 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-brand-orange">
                  Kan ik mijn IPTV abonnement annuleren?
                </h3>
                <p className="text-gray-300">
                  Binnen de eerste 14 dagen bieden we een <strong>geld-terug-garantie</strong>. Daarna loopt je abonnement
                  automatisch af aan het einde van de gekozen periode zonder verlenging.
                </p>
              </div>

              <div className="bg-brand-black/90 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-brand-orange">
                  Op hoeveel apparaten kan ik kijken?
                </h3>
                <p className="text-gray-300">
                  Met één Stream Holland abonnement kun je op <strong>onbeperkt aantal apparaten tegelijk</strong> kijken.
                  Perfect voor gezinnen! Bekijk alle{' '}
                  <Link to="/apparaten" className="text-brand-orange hover:underline">ondersteunde apparaten</Link>.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Meer vragen over IPTV abonnementen?</p>
              <Link
                to="/veelgestelde-vragen"
                className="text-brand-orange hover:text-[#E85D00] font-semibold underline"
              >
                Bekijk alle veelgestelde vragen →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-black/90 to-brand-black">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Klaar om te Beginnen met IPTV?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Kies je <Link to="/iptv-abonnement" className="text-brand-orange underline font-semibold">IPTV abonnement</Link>,
              betaal via iDEAL, en begin binnen 5 minuten met kijken.
            </p>
            <a
              href="https://wa.me/18653169315?text=Ik%20wil%20graag%20een%20IPTV%20abonnement%20bestellen"
              className="inline-block px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Bestel Nu via WhatsApp
            </a>
            <p className="text-sm text-gray-400 mt-4">
              Binnen 5 minuten actief • 14 dagen geld-terug-garantie • Geen automatische verlenging
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPTVAbonnement;
