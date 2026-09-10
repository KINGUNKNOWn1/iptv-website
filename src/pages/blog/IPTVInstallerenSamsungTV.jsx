import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTv, FaMobileAlt, FaDownload, FaWhatsapp, FaCog } from 'react-icons/fa';
import SEO from '../../components/SEO';

const IPTVInstallerenSamsungTV = () => {
  const seoData = {
    title: 'IPTV Installeren op Samsung TV: Complete Handleiding 2024',
    description: 'Leer IPTV installeren op je Samsung Smart TV in 5 minuten. Stap-voor-stap handleiding voor Tizen OS, Smart Hub en alle Samsung TV modellen.',
    keywords: 'iptv samsung tv, samsung smart tv iptv, iptv installeren samsung, tizen iptv, smart hub iptv',
    ogType: 'article'
  };

  const steps = [
    { num: 1, title: 'Open Smart Hub', desc: 'Druk op de Smart Hub knop op je afstandsbediening' },
    { num: 2, title: 'Download IPTV App', desc: 'Zoek "IPTV Smarters" in de app store' },
    { num: 3, title: 'Installeer de App', desc: 'Klik op installeren en wacht tot het klaar is' },
    { num: 4, title: 'Voeg Login Toe', desc: 'Open app en voer je IPTV gegevens in' },
    { num: 5, title: 'Begin met Kijken', desc: 'Kies een kanaal en geniet!' }
  ];

  return (
    <>
      <SEO {...seoData} />
      <div className="min-h-screen bg-brand-black text-white pt-20">
        <section className="py-16 bg-gradient-to-br from-brand-black via-blue-900 to-brand-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                IPTV Installeren op <span className="text-brand-orange">Samsung TV</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">Complete stap-voor-stap handleiding voor alle Samsung Smart TV modellen (2016-2024)</p>
              <p className="text-sm text-gray-400">📅 September 2026 • ⏱️ 5 minuten</p>
            </motion.div>
          </div>
        </section>

        <article className="py-12 bg-brand-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <section className="mb-12">
              <div className="bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mb-8">
                <p className="text-white font-semibold mb-2">⚡ Snel Overzicht</p>
                <p className="text-gray-300">Installeer IPTV op je Samsung TV in <strong>5 minuten</strong>. Werkt op alle Samsung Smart TV's vanaf 2016 met Tizen OS.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-brand-orange">Vereisten</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-brand-black/90 p-6 rounded-lg text-center">
                  <FaTv className="text-4xl text-brand-orange mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Samsung Smart TV</h3>
                  <p className="text-sm text-gray-400">Model 2016 of nieuwer</p>
                </div>
                <div className="bg-brand-black/90 p-6 rounded-lg text-center">
                  <FaMobileAlt className="text-4xl text-brand-orange mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Internetverbinding</h3>
                  <p className="text-sm text-gray-400">WiFi of ethernet (25+ Mbps)</p>
                </div>
                <div className="bg-brand-black/90 p-6 rounded-lg text-center">
                  <FaCheckCircle className="text-4xl text-brand-orange mx-auto mb-3" />
                  <h3 className="font-bold mb-2">IPTV Abonnement</h3>
                  <p className="text-sm text-gray-400">Login gegevens klaar</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-brand-orange">Stap-voor-Stap Installatie</h2>
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.num} className="bg-brand-black/90 p-6 rounded-lg">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-2xl font-bold">{step.num}</div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 ml-16">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12 relative">
              {/* Background text "Probleem?" */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-10">
                <span className="text-[120px] md:text-[180px] font-bold text-white select-none">
                  Probleem?
                </span>
              </div>

              {/* Main title */}
              <div className="relative z-10 text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-orange">
                    Oplossen
                  </span>
                </h2>
                <p className="text-gray-400">Veelvoorkomende problemen en hun oplossingen</p>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="bg-brand-black/90 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-bold mb-2 text-red-400">App niet beschikbaar in Smart Hub?</h3>
                  <p className="text-gray-300"><span className="text-green-400 font-semibold">Oplossing:</span> Wissel van regio in TV instellingen naar Nederland/België, of gebruik de alternatieve app "SS IPTV".</p>
                </div>
                <div className="bg-brand-black/90 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-bold mb-2 text-red-400">Buffering of laadproblemen?</h3>
                  <p className="text-gray-300"><span className="text-green-400 font-semibold">Oplossing:</span> Check je internetsnelheid (min. 25 Mbps). Gebruik bij voorkeur ethernet kabel i.p.v. WiFi.</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-brand-orange to-purple-600 p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Nog Geen IPTV Abonnement?</h2>
              <p className="text-xl mb-6">Start met Stream Holland: 30.500+ kanalen, werkt perfect op Samsung TV!</p>
              <Link to="/iptv-abonnement" className="inline-block px-8 py-4 bg-brand-orange text-white font-bold rounded-lg hover:bg-orange-600">Bekijk Abonnementen</Link>
            </section>
          </div>
        </article>

        <section className="py-12 bg-brand-black/90/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">📖 Gerelateerde Artikelen</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/blog/beste-iptv-apps-2024" className="bg-brand-black p-4 rounded-lg hover:bg-brand-black/90 transition-colors">
                <h3 className="font-bold mb-2">Beste IPTV Apps 2024</h3>
                <p className="text-sm text-gray-400">Vergelijk alle IPTV apps →</p>
              </Link>
              <Link to="/blog/iptv-kopen-nederland-complete-gids" className="bg-brand-black p-4 rounded-lg hover:bg-brand-black/90 transition-colors">
                <h3 className="font-bold mb-2">IPTV Kopen Nederland</h3>
                <p className="text-sm text-gray-400">Complete koop gids →</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPTVInstallerenSamsungTV;
