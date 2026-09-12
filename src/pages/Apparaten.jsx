import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaMobileAlt, FaTv, FaLaptop, FaTabletAlt, FaGamepad, FaApple, FaAndroid, FaWindows } from 'react-icons/fa';
import SEO from '../components/SEO';
import DeviceCompatibility from '../components/DeviceCompatibility';

const Apparaten = () => {
  const devices = [
    {
      icon: <FaTv className="text-6xl" />,
      name: "Smart TV",
      compatibility: "100%",
      color: "from-blue-500 to-brand-orange",
      brands: ["Samsung", "LG", "Sony", "Philips", "TCL", "Hisense"],
      apps: ["IPTV Smarters Pro", "SS IPTV", "TiviMate"],
      link: "/apparaten/samsung-tv",
      description: "4K Ultra HD streaming op je Smart TV"
    },
    {
      icon: <FaMobileAlt className="text-6xl" />,
      name: "Smartphone",
      compatibility: "100%",
      color: "from-green-500 to-green-600",
      brands: ["iPhone", "Samsung", "Huawei", "Xiaomi", "OnePlus"],
      apps: ["IPTV Smarters Pro", "GSE Smart IPTV", "Perfect Player"],
      link: "#",
      description: "Kijk overal, altijd op je telefoon"
    },
    {
      icon: <FaTabletAlt className="text-6xl" />,
      name: "Tablet",
      compatibility: "100%",
      color: "from-purple-500 to-purple-600",
      brands: ["iPad", "Samsung Tab", "Huawei Pad", "Lenovo Tab"],
      apps: ["IPTV Smarters Pro", "GSE Smart IPTV"],
      link: "#",
      description: "Perfect formaat voor thuis en onderweg"
    },
    {
      icon: <FaGamepad className="text-6xl" />,
      name: "Set-Top Box",
      compatibility: "100%",
      color: "from-orange-500 to-orange-600",
      brands: ["MAG", "Formuler", "Dreambox", "Android TV Box"],
      apps: ["Native Apps", "IPTV Smarters", "TiviMate"],
      link: "#",
      description: "Dedicated IPTV ervaring"
    },
    {
      icon: <FaLaptop className="text-6xl" />,
      name: "Computer",
      compatibility: "100%",
      color: "from-red-500 to-red-600",
      brands: ["Windows PC", "MacBook", "Linux"],
      apps: ["VLC Player", "Kodi", "MyIPTV Player"],
      link: "#",
      description: "Stream op je desktop of laptop"
    },
    {
      icon: <FaApple className="text-6xl" />,
      name: "Apple TV",
      compatibility: "100%",
      color: "from-indigo-500 to-indigo-600",
      brands: ["Apple TV 4K", "Apple TV HD"],
      apps: ["IPTV Smarters Pro", "GSE Smart IPTV"],
      link: "#",
      description: "Premium IPTV op Apple TV"
    }
  ];

  const platforms = [
    { icon: <FaAndroid />, name: "Android", version: "5.0+" },
    { icon: <FaApple />, name: "iOS", version: "12.0+" },
    { icon: <FaWindows />, name: "Windows", version: "10+" },
    { icon: <FaApple />, name: "macOS", version: "10.14+" },
    { icon: <FaTv />, name: "Android TV", version: "7.0+" },
    { icon: <FaTv />, name: "webOS", version: "4.0+" },
    { icon: <FaTv />, name: "Tizen", version: "5.0+" },
    { icon: <FaGamepad />, name: "Fire TV", version: "Alle" }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Download de App",
      description: "Download IPTV Smarters Pro of een andere compatibele app uit je app store"
    },
    {
      step: "2",
      title: "Voer Gegevens In",
      description: "Open de app en voer de login gegevens in die je per email hebt ontvangen"
    },
    {
      step: "3",
      title: "Begin met Kijken",
      description: "Geniet van 30.500+ kanalen op je favoriete apparaat"
    }
  ];

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-brand-black text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-black via-purple-900 to-brand-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  IPTV op Elk Apparaat
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Kijk IPTV op je <strong>Smart TV, smartphone, tablet, computer</strong> en meer.
                Compatible met 99% van alle apparaten. Onbeperkt aantal apparaten tegelijk.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#devices"
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Bekijk Apparaten
                </a>
                <Link
                  to="/iptv-kopen"
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  IPTV Kopen
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Devices Grid */}
        <section className="py-20 bg-brand-black/90/30" id="devices">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Ondersteunde <span className="text-purple-400">Apparaten</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devices.map((device, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={device.link}
                    className={`block relative bg-gradient-to-br ${device.color} p-8 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]`}
                  >
                    {/* Glossy overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* 3D depth shadow */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-black/20 to-transparent rounded-2xl -z-10 blur-xl" />

                    {/* Icon with floating animation */}
                    <div className="relative mb-6">
                      <div className="text-white transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {device.icon}
                      </div>
                      {/* Glow effect behind icon */}
                      <div className="absolute inset-0 bg-white/30 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-2 text-white">{device.name}</h3>
                      <p className="text-white/90 text-sm mb-4 font-medium">{device.description}</p>

                      {/* Compatibility badge */}
                      <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                        <FaCheckCircle className="text-white mr-2" />
                        <span className="text-white font-bold">{device.compatibility} Compatible</span>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-white/80 font-semibold mb-2 flex items-center">
                          <span className="w-1 h-4 bg-white/60 rounded mr-2" />
                          Ondersteunde Merken:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {device.brands.map((brand, i) => (
                            <span
                              key={i}
                              className="text-xs bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white font-medium hover:bg-white/40 transition-colors"
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-white/80 font-semibold mb-2 flex items-center">
                          <span className="w-1 h-4 bg-white/60 rounded mr-2" />
                          Aanbevolen Apps:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {device.apps.map((app, i) => (
                            <span
                              key={i}
                              className="text-xs bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white font-medium hover:bg-white/40 transition-colors"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View guide link for devices with pages */}
                      {device.link !== "#" && (
                        <div className="mt-6 pt-4 border-t border-white/20">
                          <span className="text-white font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                            Bekijk Installatiehandleiding
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full transform translate-x-12 -translate-y-12" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-20 bg-brand-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Alle <span className="text-purple-400">Platformen</span> Ondersteund
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Stream Holland werkt op vrijwel elk modern apparaat
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-brand-black/90 p-6 rounded-lg text-center hover:bg-slate-700 transition-all"
                >
                  <div className="text-4xl text-purple-400 mb-3 flex justify-center">{platform.icon}</div>
                  <h3 className="text-lg font-bold mb-1">{platform.name}</h3>
                  <p className="text-sm text-gray-400">{platform.version}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Device Compatibility Component */}
        <section className="py-20 bg-brand-black/90/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <DeviceCompatibility />
          </div>
        </section>

        {/* Setup Guide */}
        <section className="py-20 bg-brand-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              IPTV Installeren in <span className="text-purple-400">3 Stappen</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Zo eenvoudig is het om te beginnen met Stream Holland
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {setupSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Hulp Nodig bij Installatie?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Onze Nederlandse support helpt je graag. Binnen 5 minuten actief!
              </p>
              <a
                href="https://wa.me/18653169315?text=Ik%20heb%20hulp%20nodig%20bij%20installatie"
                className="inline-block px-8 py-3 bg-brand-black text-purple-600 font-semibold rounded-lg hover:bg-white/5 transition-all"
              >
                WhatsApp Support
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-brand-black/90/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Waarom Stream Holland op <span className="text-purple-400">Alle Apparaten</span> Werkt
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-brand-black p-6 rounded-lg">
                <FaCheckCircle className="text-3xl text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Onbeperkt Apparaten</h3>
                <p className="text-gray-400">
                  Kijk op zoveel apparaten tegelijk als je wilt. Perfect voor gezinnen.
                </p>
              </div>

              <div className="bg-brand-black p-6 rounded-lg">
                <FaCheckCircle className="text-3xl text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Multi-Platform</h3>
                <p className="text-gray-400">
                  Werkt op Android, iOS, Windows, macOS, Smart TV en meer.
                </p>
              </div>

              <div className="bg-brand-black p-6 rounded-lg">
                <FaCheckCircle className="text-3xl text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Makkelijke Setup</h3>
                <p className="text-gray-400">
                  Download app, voer gegevens in, en begin direct met kijken.
                </p>
              </div>

              <div className="bg-brand-black p-6 rounded-lg">
                <FaCheckCircle className="text-3xl text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">HD/4K Kwaliteit</h3>
                <p className="text-gray-400">
                  Optimale beeldkwaliteit op elk apparaat, automatisch aangepast.
                </p>
              </div>

              <div className="bg-brand-black p-6 rounded-lg">
                <FaCheckCircle className="text-3xl text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Geen Extra Hardware</h3>
                <p className="text-gray-400">
                  Gebruik gewoon je bestaande apparaten. Geen dure boxen nodig.
                </p>
              </div>

              <div className="bg-brand-black p-6 rounded-lg">
                <FaCheckCircle className="text-3xl text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-400">
                  Nederlandse klantenservice helpt bij installatie op elk apparaat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-black to-brand-black/90">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Klaar om IPTV op Je Apparaten te Kijken?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Begin vandaag nog. Compatible met je{' '}
              <Link to="/apparaten" className="text-purple-400 underline">smart TV, smartphone, tablet en meer</Link>.
              Vanaf €4 per maand.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/iptv-abonnement"
                className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Bekijk Abonnementen
              </Link>
              <a
                href="https://wa.me/18653169315?text=Welke%20apparaten%20zijn%20compatible?"
                className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Vragen? WhatsApp Ons
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              📱 Alle apparaten • 🔄 Onbeperkt tegelijk • ⚡ Makkelijke setup • 🇳🇱 Nederlandse support
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Apparaten;
