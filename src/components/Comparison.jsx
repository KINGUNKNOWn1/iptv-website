import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Comparison = () => {
  const features = [
    { name: 'Live Kanalen', holland: '30.500+', competitor1: '15.000', competitor2: '20.000' },
    { name: 'Films & Series', holland: '150.000+', competitor1: '50.000', competitor2: '80.000' },
    { name: 'Gelijktijdige Schermen', holland: '4', competitor1: '2', competitor2: '3' },
    { name: 'Terugkijk Dagen', holland: '14', competitor1: '7', competitor2: '10' },
    { name: 'Uptime Garantie', holland: '99.9%', competitor1: '98%', competitor2: '97%' },
    { name: 'Nederlandse Support', holland: true, competitor1: false, competitor2: false },
    { name: 'Turks & Arabisch Standaard', holland: true, competitor1: false, competitor2: true },
    { name: 'Geen Auto-Verlenging', holland: true, competitor1: false, competitor2: false },
  ];

  const renderCell = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <FaCheckCircle className="text-green-500 text-2xl mx-auto" />
      ) : (
        <FaTimesCircle className="text-red-500 text-2xl mx-auto" />
      );
    }
    return <span className="text-lg font-semibold">{value}</span>;
  };

  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
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
            Waarom zijn wij{' '}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              De Beste?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Vergelijk onze service met andere providers en zie het verschil
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center bg-primary-500/20">
                    <div className="font-bold text-xl">Holland IPTV</div>
                    <div className="text-sm text-gray-400">Ons Product</div>
                  </th>
                  <th className="p-4 text-center">
                    <div className="font-bold text-lg">Concurrent A</div>
                  </th>
                  <th className="p-4 text-center">
                    <div className="font-bold text-lg">Concurrent B</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4 font-medium text-gray-300">{feature.name}</td>
                    <td className="p-4 text-center bg-primary-500/10">
                      {renderCell(feature.holland)}
                    </td>
                    <td className="p-4 text-center text-gray-400">
                      {renderCell(feature.competitor1)}
                    </td>
                    <td className="p-4 text-center text-gray-400">
                      {renderCell(feature.competitor2)}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
