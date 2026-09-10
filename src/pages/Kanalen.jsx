import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaTv, FaGlobe, FaFootballBall, FaFilm, FaNewspaper, FaChild, FaMusic } from 'react-icons/fa';
import SEO from '../components/SEO';
import ChannelGrid from '../components/ChannelGrid';

const Kanalen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      icon: <FaTv className="text-5xl" />,
      name: "Nederlandse Kanalen",
      count: "80+",
      color: "from-orange-500 to-orange-600",
      examples: ["NPO 1", "NPO 2", "RTL 4", "SBS6"]
    },
    {
      icon: <FaFootballBall className="text-5xl" />,
      name: "Sport",
      count: "250+",
      color: "from-green-500 to-green-600",
      examples: ["ESPN", "FOX Sports", "Ziggo Sport", "Eurosport"]
    },
    {
      icon: <FaFilm className="text-5xl" />,
      name: "Films & Series",
      count: "150+",
      color: "from-purple-500 to-purple-600",
      examples: ["HBO", "Film1", "Comedy Central"]
    },
    {
      icon: <FaGlobe className="text-5xl" />,
      name: "Internationaal",
      count: "28.000+",
      color: "from-blue-500 to-brand-orange",
      examples: ["BBC", "CNN", "Al Jazeera", "TRT"]
    },
    {
      icon: <FaNewspaper className="text-5xl" />,
      name: "Nieuws",
      count: "120+",
      color: "from-red-500 to-red-600",
      examples: ["NOS", "RTL Nieuws", "Sky News"]
    },
    {
      icon: <FaChild className="text-5xl" />,
      name: "Kids",
      count: "80+",
      color: "from-pink-500 to-pink-600",
      examples: ["Nickelodeon", "Disney", "Cartoon Network"]
    },
    {
      icon: <FaMusic className="text-5xl" />,
      name: "Muziek",
      count: "50+",
      color: "from-yellow-500 to-yellow-600",
      examples: ["MTV", "VH1", "Trace"]
    },
    {
      icon: <FaTv className="text-5xl" />,
      name: "Entertainment",
      count: "200+",
      color: "from-indigo-500 to-indigo-600",
      examples: ["Discovery", "National Geographic", "TLC"]
    }
  ];

  const languageGroups = [
    { language: "🇳🇱 Nederlands", channels: "80+ kanalen" },
    { language: "🇬🇧 Engels", channels: "8.500+ kanalen" },
    { language: "🇸🇦 Arabisch", channels: "4.200+ kanalen" },
    { language: "🇹🇷 Turks", channels: "2.800+ kanalen" },
    { language: "🇩🇪 Duits", channels: "1.200+ kanalen" },
    { language: "🇫🇷 Frans", channels: "950+ kanalen" },
    { language: "🇪🇸 Spaans", channels: "1.100+ kanalen" },
    { language: "🇮🇹 Italiaans", channels: "650+ kanalen" },
    { language: "🇵🇹 Portugees", channels: "420+ kanalen" },
    { language: "🇵🇱 Pools", channels: "380+ kanalen" },
    { language: "🇷🇴 Roemeens", channels: "290+ kanalen" },
    { language: "🇷🇺 Russisch", channels: "540+ kanalen" }
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  30.500+ IPTV Kanalen
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                De grootste kanalenlijst van Nederland. Alle Nederlandse zenders + wereldwijd entertainment,
                sport, films en series in HD/UHD/4K.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#categories"
                  className="px-8 py-4 bg-brand-orange hover:bg-[#E85D00] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Bekijk Categorieën
                </a>
                <Link
                  to="/iptv-kopen"
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  IPTV Kopen
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
                <div className="bg-brand-black/90/50 p-6 rounded-lg backdrop-blur">
                  <div className="text-4xl font-bold text-brand-orange">30.500+</div>
                  <div className="text-gray-400 mt-2">Live Kanalen</div>
                </div>
                <div className="bg-brand-black/90/50 p-6 rounded-lg backdrop-blur">
                  <div className="text-4xl font-bold text-purple-400">150.000+</div>
                  <div className="text-gray-400 mt-2">VOD Titels</div>
                </div>
                <div className="bg-brand-black/90/50 p-6 rounded-lg backdrop-blur">
                  <div className="text-4xl font-bold text-green-400">80+</div>
                  <div className="text-gray-400 mt-2">Nederlandse TV</div>
                </div>
                <div className="bg-brand-black/90/50 p-6 rounded-lg backdrop-blur">
                  <div className="text-4xl font-bold text-orange-400">4K</div>
                  <div className="text-gray-400 mt-2">UHD Kwaliteit</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-brand-black/90/30" id="categories">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              IPTV Kanalen per <span className="text-brand-orange">Categorie</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Ontdek ons complete aanbod verdeeld over populaire categorieën
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${category.color} p-6 rounded-xl text-white hover:scale-105 transition-transform cursor-pointer`}
                >
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <div className="text-3xl font-bold mb-3">{category.count}</div>
                  <div className="text-sm opacity-90">
                    {category.examples.map((ex, i) => (
                      <span key={i}>
                        {ex}
                        {i < category.examples.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Language Groups */}
        <section className="py-20 bg-brand-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Kanalen in <span className="text-brand-orange">Jouw Taal</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Wereldwijde content in meer dan 40 talen
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {languageGroups.map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-brand-black/90 p-4 rounded-lg hover:bg-slate-700 transition-all"
                >
                  <div className="text-xl font-bold mb-1">{group.language}</div>
                  <div className="text-gray-400 text-sm">{group.channels}</div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-400">
                + 30+ andere talen beschikbaar
              </p>
            </div>
          </div>
        </section>

        {/* Channel Grid Component */}
        <section className="py-20 bg-brand-black/90/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Ontdek Onze <span className="text-brand-orange">Kanalenlijst</span>
            </h2>
            <ChannelGrid />
          </div>
        </section>

        {/* VOD Section */}
        <section className="py-20 bg-brand-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              + 150.000 <span className="text-purple-400">Films & Series</span> On-Demand
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-xl">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold mb-3">Films</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Nieuwste bioscoophits</li>
                  <li>• Hollywood classics</li>
                  <li>• Nederlandse films</li>
                  <li>• Internationaal cinema</li>
                  <li>• 4K UHD kwaliteit</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-brand-orange to-[#E85D00] p-8 rounded-xl">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-2xl font-bold mb-3">Series</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Complete seizoenen</li>
                  <li>• Nederlandse series</li>
                  <li>• Top US/UK shows</li>
                  <li>• K-Drama, Anime</li>
                  <li>• Weekly updates</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-xl">
                <div className="text-4xl mb-4">🎪</div>
                <h3 className="text-2xl font-bold mb-3">Extra Content</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Documentaires</li>
                  <li>• Stand-up comedy</li>
                  <li>• Concerts & muziek</li>
                  <li>• Kinderprogramma's</li>
                  <li>• Reality shows</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-black to-brand-black/90">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Krijg Toegang tot 30.500+ Kanalen
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Alle <Link to="/iptv-nederland" className="text-brand-orange underline">Nederlandse IPTV kanalen</Link> +
              wereldwijd entertainment. Vanaf €4 per maand.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/iptv-abonnement"
                className="px-10 py-4 bg-brand-orange hover:bg-[#E85D00] text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Bekijk Abonnementen
              </Link>
              <a
                href="https://wa.me/31612345678?text=Ik%20wil%20graag%20meer%20info%20over%20de%20kanalen"
                className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Vragen? WhatsApp Ons
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              📺 30.500+ kanalen • 🎬 150.000+ VOD • ⚡ HD/UHD/4K • 🇳🇱 Nederlandse support
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Kanalen;
