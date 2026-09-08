import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaTv, FaTabletAlt, FaLaptop, FaGamepad, FaApple, FaAndroid, FaAmazon } from 'react-icons/fa';
import { SiLg, SiSamsung } from 'react-icons/si';

const Devices = () => {
  const devices = [
    { icon: FaMobileAlt, name: 'Smartphone', description: 'iOS & Android' },
    { icon: FaTv, name: 'Smart TV', description: 'Samsung, LG, Android TV' },
    { icon: FaTabletAlt, name: 'Tablet', description: 'iPad & Android Tablets' },
    { icon: FaLaptop, name: 'Computer', description: 'Windows, Mac, Linux' },
    { icon: FaGamepad, name: 'Consoles', description: 'PlayStation, Xbox' },
    { icon: FaAmazon, name: 'Fire Stick', description: 'Amazon Fire TV' },
    { icon: FaApple, name: 'Apple TV', description: 'tvOS Devices' },
    { icon: FaAndroid, name: 'Android Box', description: 'Alle Android Boxes' },
  ];

  const platforms = [
    { icon: FaApple, name: 'iOS', color: 'text-gray-300' },
    { icon: FaAndroid, name: 'Android', color: 'text-green-400' },
    { icon: SiSamsung, name: 'Samsung', color: 'text-blue-400' },
    { icon: SiLg, name: 'LG', color: 'text-red-400' },
    { icon: FaAmazon, name: 'Fire TV', color: 'text-orange-400' },
  ];

  return (
    <section id="devices" className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-700/10 rounded-full filter blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kijk op{' '}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Elk Apparaat
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Geniet van uw favoriete content op alle apparaten, waar u ook bent
          </p>
        </motion.div>

        {/* Devices Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {devices.map((device, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-6 rounded-2xl text-center group hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <device.icon className="text-3xl text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors">
                {device.name}
              </h3>
              <p className="text-sm text-gray-400">{device.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Platform Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Compatibel met alle platforms
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2 group"
              >
                <platform.icon className={`text-5xl ${platform.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm text-gray-400">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Multi-Screen Feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="glass-effect p-8 rounded-2xl inline-block">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">4</span>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-bold">Gelijktijdige Schermen</h4>
                <p className="text-gray-400">Kijk op 4 apparaten tegelijk met één abonnement</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Devices;
