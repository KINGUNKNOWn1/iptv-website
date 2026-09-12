import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTv, FaFootballBall, FaFilm, FaNewspaper } from 'react-icons/fa';
import SEO from '../components/SEO';

const IPTVNederland = () => {
  const dutchChannels = [
    { category: "Nederlandse Zenders", count: "80+", icon: <FaTv />, examples: "NPO 1, NPO 2, NPO 3, RTL 4, RTL 5, SBS6, Veronica, Net5" },
    { category: "Sport Kanalen", count: "250+", icon: <FaFootballBall />, examples: "ESPN, FOX Sports, Ziggo Sport, Eurosport" },
    { category: "Film & Series", count: "150+", icon: <FaFilm />, examples: "Film1, HBO, Netflix content, Amazon Prime content" },
    { category: "Nieuws & Documentaires", count: "50+", icon: <FaNewspaper />, examples: "RTL Nieuws, NOS, BBC News, CNN" }
  ];

  const features = [
    "Alle Nederlandse TV-zenders in HD kwaliteit",
    "Volledige EPG (elektronische programmagids) in het Nederlands",
    "Nederlandse ondertiteling op internationale content",
    "Lokale sport kanalen (Eredivisie, Formule 1, Tennis)",
    "On-demand Nederlandse films en series",
    "Nederlandse klantenservice 24/7",
    "Optimale servers voor Nederland (snelste verbinding)",
    "Compatibel met alle Nederlandse smart TV's",
    "Betalen met iDEAL (Nederlandse betaalmethode)",
    "Geen VPN nodig - werkt direct in Nederland"
  ];

  const popularChannels = [
    "NPO 1", "NPO 2", "NPO 3", "RTL 4", "RTL 5", "RTL 7", "RTL 8",
    "SBS6", "Veronica", "Net5", "Comedy Central", "Discovery Channel",
    "National Geographic", "ESPN", "FOX Sports", "Ziggo Sport Voetbal",
    "Ziggo Sport Racing", "Ziggo Sport Golf", "Eurosport 1", "Eurosport 2",
    "Film1 Premiere", "Film1 Action", "Film1 Family", "Film1 Drama"
  ];

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-brand-black text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-600 via-brand-black to-brand-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-6xl mb-6">🇳🇱</div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  IPTV Nederland
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                De beste <strong>Nederlandse IPTV aanbieder</strong>. Alle Nederlandse zenders, sport,
                films en series. Optimaal voor kijkers in Nederland.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#channels"
                  className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Bekijk Nederlandse Kanalen
                </a>
                <Link
                  to="/prijzen"
                  className="px-8 py-4 bg-brand-orange hover:bg-[#E85D00] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Bekijk Prijzen
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Channel Categories */}
        <section className="py-20 bg-brand-black/90/50" id="channels">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Nederlandse <span className="text-orange-400">IPTV Kanalen</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dutchChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-brand-black p-6 rounded-lg hover:bg-brand-black/90 transition-all"
                >
                  <div className="text-4xl text-orange-500 mb-4">{channel.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{channel.category}</h3>
                  <div className="text-3xl font-bold text-orange-400 mb-3">{channel.count}</div>
                  <p className="text-sm text-gray-400">{channel.examples}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Dutch Channels */}
        <section className="py-20 bg-brand-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Populaire <span className="text-orange-400">Nederlandse Zenders</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Alle Nederlandse TV-zenders in HD/UHD kwaliteit
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
              {popularChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  className="bg-gradient-to-br from-brand-black/90 to-brand-black p-4 rounded-lg text-center hover:from-orange-600 hover:to-orange-700 transition-all cursor-pointer"
                >
                  <span className="text-sm font-semibold">{channel}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-orange-600/20 to-brand-orange/20 p-6 rounded-xl">
              <p className="text-xl font-semibold mb-2">
                + 30.420 internationale kanalen
              </p>
              <p className="text-gray-400">
                Inclusief Arabische, Turkse, Engelse, Duitse, Franse en veel meer zenders
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-brand-black/90/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Waarom Stream Holland de Beste <span className="text-orange-400">Nederlandse IPTV</span> Is
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 bg-brand-black p-4 rounded-lg"
                >
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sport Section */}
        <section className="py-20 bg-brand-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              <span className="text-orange-400">Nederlandse Sport</span> in HD
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-brand-black/90 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">⚽ Voetbal</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Eredivisie (alle wedstrijden)</li>
                  <li>• Champions League</li>
                  <li>• Premier League</li>
                  <li>• La Liga, Serie A, Bundesliga</li>
                  <li>• Oranje (Nederlands Elftal)</li>
                </ul>
              </div>

              <div className="bg-brand-black/90 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">🏎️ Formule 1</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Alle Formule 1 races live</li>
                  <li>• Kwalificaties en vrije trainingen</li>
                  <li>• Max Verstappen coverage</li>
                  <li>• Formule 2 & Formule 3</li>
                  <li>• MotoGP races</li>
                </ul>
              </div>

              <div className="bg-brand-black/90 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">🎾 Meer Sporten</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Tennis (Grand Slams)</li>
                  <li>• Wielrennen (Tour de France)</li>
                  <li>• Schaatsen & IJshockey</li>
                  <li>• Golf, Darts, Boksen</li>
                  <li>• Olympische Spelen</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Benefits */}
        <section className="py-20 bg-brand-black/90/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Speciaal voor <span className="text-orange-400">Nederland</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-8 rounded-xl text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-2xl font-bold mb-3">iDEAL Betaling</h3>
                <p className="text-white/90">
                  Betaal veilig met iDEAL, de meest gebruikte betaalmethode in Nederland
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-orange to-[#E85D00] p-8 rounded-xl text-center">
                <div className="text-4xl mb-4">🇳🇱</div>
                <h3 className="text-2xl font-bold mb-3">Nederlandse Support</h3>
                <p className="text-white/90">
                  24/7 klantenservice in het Nederlands via WhatsApp en email
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-xl text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-3">Snelste Servers</h3>
                <p className="text-white/90">
                  Servers geoptimaliseerd voor Nederland - geen buffering, altijd stabiel
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="py-20 bg-gradient-to-br from-brand-black to-brand-black/90">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Start met de Beste <span className="text-orange-400">IPTV Nederland</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Vanaf €4 per maand. Alle Nederlandse zenders + 30.500+ internationale kanalen.
              Binnen 5 minuten actief.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/iptv-abonnement"
                className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Bekijk Abonnementen
              </Link>
              <a
                href="https://wa.me/18653169315?text=Ik%20wil%20graag%20IPTV%20Nederland%20bestellen"
                className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Bestel via WhatsApp
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              🇳🇱 Gemaakt voor Nederland • ✅ Alle Nederlandse zenders • ⚡ Binnen 5 min actief
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPTVNederland;
