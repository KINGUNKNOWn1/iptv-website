import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  const badges = [
    '30.500+ live zenders',
    'HD, UHD en 4K kwaliteit',
    'Geen automatische verlenging',
    'Actief binnen 5 minuten',
    'Nederlandstalige support 24/7'
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Using Unsplash for sports/racing background */}
        <img
          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000"
          alt="Racing background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
      </div>

      {/* Content */}
      <div className="container-custom section-padding relative z-10 pt-32">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full mb-8"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-300">Gevestigd in Rotterdam, actief door heel Nederland</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">IPTV Kopen in Nederland</span>
            <br />
            <span className="text-white">IPTV4K Abonnement</span>
            <br />
            <span className="text-red-600">vanaf 48€ per jaar</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl"
          >
            IPTV4K is een betrouwbare IPTV aanbieder gevestigd in Rotterdam. We leveren IPTV abonnement aan klanten door heel Nederland: van Amsterdam tot Den Haag, van Rotterdam tot Utrecht. Nederlandstalige zenders, sportzenders, Arabische en Turkse kanalen, allemaal in één abonnement. Geen automatische verlenging, betaling via iDEAL.
          </motion.p>

          {/* Feature Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:bg-slate-800/70 transition-colors"
              >
                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-200">{badge}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/prijzen"
              className="btn-primary text-center"
            >
              Bekijk IPTV Abonnement Prijzen
            </Link>
            <Link
              to="/contact"
              className="btn-secondary text-center"
            >
              Bestel via WhatsApp
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-0"></div>
    </section>
  );
};

export default Hero;
