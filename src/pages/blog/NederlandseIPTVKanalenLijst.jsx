import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTv, FaFootballBall, FaFilm, FaNewspaper, FaChild, FaMusic, FaWhatsapp } from 'react-icons/fa';
import SEO from '../../components/SEO';

const NederlandseIPTVKanalenLijst = () => {
  const seoData = {
    title: 'Nederlandse IPTV Kanalen Lijst 2024: 80+ NL Zenders Overzicht',
    description: 'Complete lijst van Nederlandse IPTV kanalen 2024. NPO, RTL, SBS, regionale en sport zenders. Alle 80+ Nederlandse TV kanalen overzichtelijk.',
    keywords: 'nederlandse iptv kanalen, nl zenders, npo live, rtl iptv, nederlandse tv kanalen lijst',
    ogType: 'article'
  };

  const channels = [
    {
      category: 'Publieke Omroep',
      icon: <FaTv />,
      channels: ['NPO 1', 'NPO 2', 'NPO 3', 'NPO Zapp', 'NPO Zappelin', 'NPO Nieuws', 'NPO Politiek', 'NPO Best', 'NPO Doc', 'NPO Start']
    },
    {
      category: 'Commercieel',
      icon: <FaTv />,
      channels: ['RTL 4', 'RTL 5', 'RTL 7', 'RTL 8', 'RTL Z', 'SBS6', 'NET5', 'Veronica', 'SBS9']
    },
    {
      category: 'Sport',
      icon: <FaFootballBall />,
      channels: ['ESPN 1-4', 'FOX Sports 1-6', 'Ziggo Sport', 'Ziggo Sport Racing', 'Ziggo Sport Voetbal', 'Ziggo Sport Golf', 'Eurosport 1-2']
    },
    {
      category: 'Film & Entertainment',
      icon: <FaFilm />,
      channels: ['Film1 Premiere', 'Film1 Action', 'Film1 Drama', 'Film1 Family', 'Comedy Central', 'Spike', 'TLC', '24Kitchen']
    },
    {
      category: 'Nieuws',
      icon: <FaNewspaper />,
      channels: ['CNN International', 'BBC World News', 'Al Jazeera', 'Euronews', 'RTL Z', 'BNR Nieuwsradio']
    },
    {
      category: 'Kinderen',
      icon: <FaChild />,
      channels: ['Nickelodeon', 'Disney Channel', 'Disney XD', 'Disney Junior', 'Cartoon Network', 'Boomerang', 'NPO Zapp', 'NPO Zappelin']
    },
    {
      category: 'Muziek',
      icon: <FaMusic />,
      channels: ['MTV', 'MTV Music', 'MTV Hits', 'TMF', 'VH1', 'Stingray Music']
    },
    {
      category: 'Regionaal',
      icon: <FaTv />,
      channels: ['RTV Noord', 'RTV Oost', 'Omroep Brabant', 'Omroep Zeeland', 'Omroep West', 'NH Nieuws', 'RTV Utrecht', 'Omroep Gelderland', 'L1', 'Omroep Flevoland', 'RTV Drenthe', 'AT5']
    }
  ];

  return (
    <>
      <SEO {...seoData} />
      <div className="min-h-screen bg-brand-black text-white pt-20">
        <section className="py-16 bg-gradient-to-br from-brand-black via-orange-900 to-brand-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                🇳🇱 Nederlandse <span className="text-orange-400">IPTV Kanalen</span> Lijst 2024
              </h1>
              <p className="text-xl text-gray-300 mb-4">Complete overzicht van 80+ Nederlandse TV zenders beschikbaar via IPTV</p>
              <p className="text-sm text-gray-400">📅 September 2026 • 📺 80+ Kanalen</p>
            </motion.div>
          </div>
        </section>

        <article className="py-12 bg-brand-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <section className="mb-12">
              <div className="bg-orange-900/30 border-l-4 border-orange-500 p-6 rounded">
                <p className="text-white font-semibold mb-2">🔥 Stream Holland Voordeel</p>
                <p className="text-gray-300">Met <Link to="/" className="text-orange-400 underline">Stream Holland</Link> krijg je ALLE Nederlandse kanalen hieronder + 30.500 internationale zenders voor maar €4/maand!</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-orange-400">Volledige Kanalenlijst</h2>
              <div className="space-y-6">
                {channels.map((cat, idx) => (
                  <div key={idx} className="bg-brand-black/90 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl text-orange-400">{cat.icon}</div>
                      <h3 className="text-2xl font-bold">{cat.category}</h3>
                      <span className="ml-auto bg-orange-600 px-3 py-1 rounded-full text-sm">{cat.channels.length} kanalen</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {cat.channels.map((ch, i) => (
                        <div key={i} className="bg-slate-700 p-3 rounded text-sm flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          {ch}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-orange-400">Veelgestelde Vragen</h2>
              <div className="space-y-4">
                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Krijg ik alle Nederlandse kanalen?</h3>
                  <p className="text-gray-300">Ja! Met <Link to="/iptv-abonnement" className="text-orange-400 underline">Stream Holland</Link> krijg je alle 80+ Nederlandse zenders inclusief NPO, RTL, SBS, sport en regionale kanalen.</p>
                </div>
                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Werken NPO en RTL kanalen?</h3>
                  <p className="text-gray-300">Ja, alle publieke (NPO) en commerciële (RTL, SBS) Nederlandse kanalen werken perfect. Live en in HD kwaliteit.</p>
                </div>
                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Kan ik Eredivisie kijken?</h3>
                  <p className="text-gray-300">Ja! Alle ESPN en FOX Sports kanalen zijn beschikbaar, inclusief alle Eredivisie wedstrijden live.</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Alle Nederlandse Kanalen + 30.500 Meer!</h2>
              <p className="text-xl mb-6">Start met Stream Holland en kijk alle Nederlandse zenders + duizenden internationale kanalen</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/iptv-abonnement" className="px-8 py-4 bg-brand-orange text-white font-bold rounded-lg hover:bg-orange-600">Bekijk Abonnementen</Link>
                <a href="https://wa.me/18653169315" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg"><FaWhatsapp className="inline mr-2" /> WhatsApp Ons</a>
              </div>
            </section>
          </div>
        </article>

        <section className="py-12 bg-brand-black/90/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">📖 Gerelateerde Artikelen</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/blog/iptv-kopen-nederland-complete-gids" className="bg-brand-black p-4 rounded-lg hover:bg-brand-black/90"><h3 className="font-bold mb-2">IPTV Kopen Nederland</h3><p className="text-sm text-gray-400">Complete gids →</p></Link>
              <Link to="/blog/beste-iptv-apps-2024" className="bg-brand-black p-4 rounded-lg hover:bg-brand-black/90"><h3 className="font-bold mb-2">Beste IPTV Apps</h3><p className="text-sm text-gray-400">App reviews →</p></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NederlandseIPTVKanalenLijst;
