import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaHeart, FaShieldAlt, FaUsers, FaClock, FaAward } from 'react-icons/fa';
import SEO from '../components/SEO';

const OverOns = () => {
  const values = [
    {
      icon: <FaHeart className="text-5xl" />,
      title: "Klantgericht",
      description: "Jouw tevredenheid staat altijd voorop. 24/7 Nederlandse support en persoonlijke service.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: "Betrouwbaar",
      description: "99.9% uptime garantie. Stabiele service waar je op kunt vertrouwen, dag in dag uit.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaRocket className="text-5xl" />,
      title: "Innovatief",
      description: "Altijd voorop met de nieuwste technologie en features voor de beste kijkervaring.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <FaAward className="text-5xl" />,
      title: "Kwaliteit",
      description: "HD, UHD en 4K kwaliteit. Het grootste aanbod aan kanalen en content in Nederland.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "24.587+", label: "Tevreden Klanten" },
    { number: "30.500+", label: "Live Kanalen" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.9/5", label: "Klantbeoordeling" }
  ];

  const teamFeatures = [
    { icon: <FaClock />, text: "24/7 Nederlandse Klantenservice" },
    { icon: <FaUsers />, text: "Ervaren Team van IPTV Specialisten" },
    { icon: <FaShieldAlt />, text: "Veilige Betaling & Privacy" },
    { icon: <FaRocket />, text: "Snelle Activering (5 minuten)" }
  ];

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-brand-black text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-black via-blue-900 to-brand-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Over <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Stream Holland
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                De beste <strong>Nederlandse IPTV aanbieder</strong>. Wij maken hoogwaardige televisie
                toegankelijk voor iedereen. Met passie voor technologie en service.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-brand-black/90/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Ons <span className="text-brand-orange">Verhaal</span>
            </h2>

            <div className="prose prose-invert max-w-none">
              <div className="bg-brand-black p-8 rounded-xl mb-8">
                <p className="text-lg text-gray-300 mb-4">
                  Stream Holland is ontstaan uit frustratie met bestaande IPTV aanbieders. Slechte kwaliteit,
                  onbetrouwbare diensten, geen Nederlandse support, en hoge prijzen. We dachten: dit kan beter.
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  In 2020 startten we met een missie: <strong>de beste IPTV service van Nederland bouwen</strong>.
                  Een service waar kwaliteit, betrouwbaarheid en klanttevredenheid voorop staan.
                </p>
                <p className="text-lg text-gray-300">
                  Vandaag de dag serveren we meer dan <strong>24.000 tevreden klanten</strong> in Nederland
                  en daarbuiten. Met trots leveren we dagelijks de beste IPTV ervaring, tegen een eerlijke prijs,
                  met persoonlijke Nederlandse support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-brand-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Stream Holland in <span className="text-brand-orange">Cijfers</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-brand-black/90/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Onze <span className="text-brand-orange">Kernwaarden</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              De principes die ons dagelijks drijven
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${value.color} p-8 rounded-xl text-center hover:scale-105 transition-transform`}
                >
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white/90">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-brand-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Waarom Kiezen voor <span className="text-brand-orange">Stream Holland</span>?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-orange">Wat Ons Uniek Maakt</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Grootste Aanbod:</strong> 30.500+ kanalen en 150.000+ VOD titels.
                      Meer dan welke concurrent dan ook.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Beste Prijs:</strong> Vanaf €4 per maand. Geen verborgen kosten,
                      geen automatische verlenging.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Nederlandse Service:</strong> Volledige klantenservice in het Nederlands,
                      24/7 bereikbaar via WhatsApp.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>99.9% Uptime:</strong> Ultieme betrouwbaarheid. Onze servers zijn
                      altijd beschikbaar.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Eenvoudige Setup:</strong> Binnen 5 minuten actief, op elk apparaat,
                      zonder technische kennis.
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-orange">Onze Belofte aan Jou</h3>
                <div className="bg-gradient-to-br from-brand-orange to-purple-600 p-8 rounded-xl">
                  <ul className="space-y-4 text-white/95">
                    <li className="flex items-center gap-3">
                      <FaClock className="text-2xl flex-shrink-0" />
                      <span>24/7 Support in het Nederlands</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaShieldAlt className="text-2xl flex-shrink-0" />
                      <span>14 dagen geld-terug-garantie</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaRocket className="text-2xl flex-shrink-0" />
                      <span>Binnen 5 minuten actief</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaHeart className="text-2xl flex-shrink-0" />
                      <span>Eerlijke prijzen, geen verborgen kosten</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaUsers className="text-2xl flex-shrink-0" />
                      <span>Persoonlijke service & aandacht</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Features */}
        <section className="py-20 bg-brand-black/90/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Ons <span className="text-brand-orange">Team</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-brand-black p-6 rounded-lg text-center hover:bg-brand-black/90 transition-all"
                >
                  <div className="text-4xl text-brand-orange mb-4 flex justify-center">{feature.icon}</div>
                  <p className="text-gray-300">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-brand-black p-8 rounded-xl text-center">
              <p className="text-lg text-gray-300 mb-4">
                Ons team bestaat uit gepassioneerde IPTV specialisten, tech experts en klantenservice professionals.
                Samen werken we elke dag aan de beste IPTV ervaring voor jou.
              </p>
              <p className="text-gray-400">
                🇳🇱 Volledig Nederlands team • 💼 Professioneel • 🚀 Gedreven • 🤝 Klantgericht
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-black to-brand-black/90">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Klaar om te Starten met Stream Holland?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Sluit je aan bij 24.587+ tevreden klanten. Ervaar zelf waarom wij de{' '}
              <Link to="/iptv-nederland" className="text-brand-orange underline">beste Nederlandse IPTV aanbieder</Link> zijn.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/iptv-abonnement"
                className="px-10 py-4 bg-brand-orange hover:bg-[#E85D00] text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Bekijk Abonnementen
              </Link>
              <a
                href="https://wa.me/31612345678?text=Ik%20wil%20graag%20meer%20weten%20over%20Stream Holland"
                className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Chat met Ons
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              ✅ 24.587+ tevreden klanten • ⭐ 4.9/5 beoordeling • 🇳🇱 100% Nederlands
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default OverOns;
