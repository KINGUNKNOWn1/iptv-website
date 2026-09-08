import React from 'react';
import { motion } from 'framer-motion';
import { FaTv, FaMobileAlt, FaTabletAlt, FaLaptop, FaCheckCircle, FaApple, FaAndroid, FaAmazon, FaWindows } from 'react-icons/fa';
import { SiSamsung, SiLg, SiXiaomi } from 'react-icons/si';

const DeviceCompatibility = () => {
  const devices = [
    {
      icon: SiSamsung,
      name: 'Samsung TV',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: SiLg,
      name: 'LG Smart TV',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FaAndroid,
      name: 'Android TV',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: FaApple,
      name: 'iPhone & iPad',
      color: 'from-gray-600 to-gray-700',
      bgColor: 'bg-gray-50'
    },
    {
      icon: FaAmazon,
      name: 'Fire TV Stick',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FaTabletAlt,
      name: 'Android Tablet',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: FaLaptop,
      name: 'PC & Mac',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: SiXiaomi,
      name: 'Xiaomi Mi Box',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                Geen Extra Hardware Nodig
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Geen extra IPTV box nodig.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Compatibel met je huidige apparaten.
              </span>
            </h2>

            <div className="space-y-5 text-gray-600 text-lg mb-10 leading-relaxed">
              <p>
                Met een IPTV4K abonnement kies je zelf op welk apparaat je kijkt: je Samsung of LG Smart TV, je iPhone of Android telefoon, je laptop of Amazon Fire TV Stick. <span className="font-semibold text-gray-800">Geen extra hardware of technische kennis nodig.</span>
              </p>
              <p>
                Installeer IPTV Smarters Pro of SS IPTV, voer je inloggegevens in en klaar! <span className="font-semibold text-gray-800">Gemiddeld ben je binnen vijf minuten</span> aan het kijken naar je eerste kanaal.
              </p>
              <p>
                Wil je liever een IPTV abonnement kopen met een externe box voor een stabielere 4K verbinding? Dat kan. Amazon Fire TV Stick, Formuler Z11 en Xsarius zijn compatibel. <span className="font-semibold text-gray-800">We adviseren je gratis via WhatsApp</span> welke het beste past bij jouw televisie en internetverbinding.
              </p>
            </div>

            {/* Devices Grid */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500" />
                Compatibele Apparaten
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {devices.map((device, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
                    whileHover={{ scale: 1.08, y: -8 }}
                    className="group relative"
                  >
                    {/* Hover glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${device.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl`} />

                    <div className="relative bg-white rounded-2xl p-5 border-2 border-gray-100 group-hover:border-transparent group-hover:shadow-xl transition-all duration-300">
                      <div className={`w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${device.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                        <device.icon className="text-white text-2xl" />
                      </div>
                      <p className="text-xs text-center text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">
                        {device.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Setup Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <FaCheckCircle className="text-white text-2xl" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Actief binnen 5 minuten</p>
                <p className="text-sm text-gray-600">Geen extra hardware nodig</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Device Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
              className="absolute -top-6 -right-6 z-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-3xl px-8 py-6 shadow-2xl border-4 border-white"
            >
              <div className="text-center">
                <p className="text-5xl font-bold mb-1">8+</p>
                <p className="text-sm font-semibold opacity-90">Compatibele apparaten</p>
              </div>
            </motion.div>

            {/* Main Device Image Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 shadow-2xl"
            >
              {/* TV Screen */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative bg-black rounded-3xl overflow-hidden border-[6px] border-gray-700 mb-6 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80"
                  alt="Soccer on TV"
                  className="w-full aspect-video object-cover"
                />
                {/* Live Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                  className="absolute top-6 left-6 flex items-center gap-2 px-5 py-2.5 bg-red-600 rounded-full shadow-lg backdrop-blur-sm"
                >
                  <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-white tracking-wide">LIVE</span>
                </motion.div>

                {/* Quality Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg">
                  <span className="text-xs font-bold text-white">4K UHD</span>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Mobile & Tablet Devices */}
              <div className="grid grid-cols-3 gap-5">
                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-4 border-gray-700 shadow-xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80"
                    alt="Phone"
                    className="w-full aspect-[9/16] object-cover"
                  />
                </motion.div>

                {/* Tablet */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-4 border-gray-700 col-span-2 shadow-xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80"
                    alt="Tablet"
                    className="w-full aspect-video object-cover"
                  />
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-orange-500/30 rounded-full blur-3xl animate-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeviceCompatibility;
