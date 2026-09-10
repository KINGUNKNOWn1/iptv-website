import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaCrown } from 'react-icons/fa';

const ComparisonTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const features = [
    { name: 'Aantal Live Zenders', streamholland: '30.500+', competitor1: '15.000', competitor2: '10.000', competitor3: '8.500' },
    { name: 'Films & Series (VOD)', streamholland: '150.000+', competitor1: '50.000', competitor2: '30.000', competitor3: '25.000' },
    { name: '4K/UHD Kwaliteit', streamholland: true, competitor1: true, competitor2: false, competitor3: false },
    { name: 'HD Kwaliteit', streamholland: true, competitor1: true, competitor2: true, competitor3: true },
    { name: 'Nederlandstalige Support 24/7', streamholland: true, competitor1: false, competitor2: false, competitor3: true },
    { name: 'iDEAL Betaling', streamholland: true, competitor1: false, competitor2: true, competitor3: false },
    { name: 'Geen Automatische Verlenging', streamholland: true, competitor1: false, competitor2: false, competitor3: false },
    { name: 'Uptime Garantie', streamholland: '99.9%', competitor1: '99%', competitor2: '98%', competitor3: '97%' },
    { name: 'Actief binnen', streamholland: '5 minuten', competitor1: '24 uur', competitor2: '1-2 uur', competitor3: '12 uur' },
    { name: 'Arabische Zenders', streamholland: '2000+', competitor1: '500', competitor2: '300', competitor3: '400' },
    { name: 'Turkse Zenders', streamholland: '1500+', competitor1: '400', competitor2: '200', competitor3: '300' },
    { name: 'Sportzenders', streamholland: '2500+', competitor1: '800', competitor2: '500', competitor3: '600' },
    { name: 'EPG (Elektronische Programmagids)', streamholland: true, competitor1: true, competitor2: false, competitor3: true },
    { name: 'Catch-up TV', streamholland: true, competitor1: false, competitor2: false, competitor3: false },
    { name: 'Multi-device Support', streamholland: 'Onbeperkt', competitor1: '2 apparaten', competitor2: '3 apparaten', competitor3: '2 apparaten' },
    { name: 'Prijs per jaar (vanaf)', streamholland: '€50', competitor1: '€80', competitor2: '€120', competitor3: '€95' },
  ];

  const renderCell = (value, isStreamHolland = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <FaCheckCircle className={`text-2xl mx-auto ${isStreamHolland ? 'text-green-500' : 'text-green-600/70'}`} />
      ) : (
        <FaTimesCircle className="text-2xl text-red-500/70 mx-auto" />
      );
    }
    return (
      <span className={`font-semibold ${isStreamHolland ? 'text-white text-lg' : 'text-gray-400'}`}>
        {value}
      </span>
    );
  };

  return (
    <section id="comparison" className="py-20 bg-gradient-to-b from-brand-black via-slate-800 to-brand-black">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Waarom Stream Holland De Beste Keuze Is
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vergelijk ons met andere aanbieders en zie waarom duizenden Nederlanders voor ons kiezen
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-2xl border border-slate-700">
              <table className="min-w-full divide-y divide-slate-700">
                {/* Table Header */}
                <thead>
                  <tr className="bg-brand-black/90">
                    <th className="px-6 py-5 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      Kenmerken
                    </th>
                    <th className="px-6 py-5 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2">
                          <FaCrown className="text-yellow-500 text-xl" />
                          <span className="text-lg font-bold text-white">Stream Holland</span>
                        </div>
                        <span className="px-3 py-1 bg-gradient-to-r from-brand-orange to-[#E85D00] text-white text-xs font-bold rounded-full">
                          AANBEVOLEN
                        </span>
                      </div>
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-gray-400">
                      Concurrent A
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-gray-400">
                      Concurrent B
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-gray-400">
                      Concurrent C
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="bg-brand-black divide-y divide-slate-700/50">
                  {features.map((feature, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      onHoverStart={() => setHoveredRow(index)}
                      onHoverEnd={() => setHoveredRow(null)}
                      className={`transition-colors duration-200 ${
                        hoveredRow === index ? 'bg-brand-black/90/50' : ''
                      }`}
                    >
                      <td className="px-6 py-4 text-sm text-gray-300 font-medium">
                        {feature.name}
                      </td>

                      {/* Stream Holland Column (Highlighted) */}
                      <td className="px-6 py-4 text-center bg-gradient-to-r from-brand-orange/10 to-[#E85D00]/10 border-x-2 border-blue-500/30">
                        {renderCell(feature.streamholland, true)}
                      </td>

                      <td className="px-6 py-4 text-center">
                        {renderCell(feature.competitor1)}
                      </td>

                      <td className="px-6 py-4 text-center">
                        {renderCell(feature.competitor2)}
                      </td>

                      <td className="px-6 py-4 text-center">
                        {renderCell(feature.competitor3)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Duidelijk de beste keuze? Bestel nu en ontvang je toegang binnen 5 minuten!
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-orange to-[#E85D00] text-white font-bold rounded-xl hover:from-[#E85D00] hover:to-blue-800 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 text-lg"
          >
            <FaCrown />
            Kies Voor De Beste - Vanaf €50/jaar
          </a>
        </motion.div>

        {/* Trust Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-green-600/10 border border-green-600/30 rounded-xl">
            <FaCheckCircle className="text-green-500 text-2xl" />
            <div className="text-left">
              <p className="text-white font-bold">14 Dagen Geld-Terug-Garantie</p>
              <p className="text-sm text-gray-400">Niet tevreden? Krijg je geld terug, geen vragen gesteld</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
