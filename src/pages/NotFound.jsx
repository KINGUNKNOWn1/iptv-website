import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft, Tv } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 blur-3xl opacity-30">
              <div className="text-[200px] md:text-[300px] font-bold text-brand-orange">
                404
              </div>
            </div>
            {/* Main text */}
            <div className="relative text-[200px] md:text-[300px] font-bold leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-500 to-red-500">
                404
              </span>
            </div>
          </div>
        </motion.div>

        {/* Error message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pagina Niet Gevonden
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            De pagina die je zoekt bestaat niet of is verplaatst.
          </p>
        </motion.div>

        {/* TV Icon Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="mb-12 flex justify-center"
        >
          <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center border-2 border-white/10">
            <Tv className="w-16 h-16 text-brand-orange" />
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Terug naar Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/20"
          >
            <Search className="w-5 h-5" />
            Contact Opnemen
          </Link>
        </motion.div>

        {/* Helpful links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400 mb-4">Of probeer een van deze pagina's:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/prijzen"
              className="text-gray-300 hover:text-brand-orange transition-colors"
            >
              Prijzen
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              to="/iptv-kopen"
              className="text-gray-300 hover:text-brand-orange transition-colors"
            >
              IPTV Kopen
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              to="/apparaten"
              className="text-gray-300 hover:text-brand-orange transition-colors"
            >
              Apparaten
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              to="/veelgestelde-vragen"
              className="text-gray-300 hover:text-brand-orange transition-colors"
            >
              FAQ
            </Link>
          </div>
        </motion.div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <ArrowLeft className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-left">
              <h3 className="text-white font-bold mb-1">Wist je dat?</h3>
              <p className="text-gray-400 text-sm">
                Stream Holland biedt 30.500+ kanalen, 150.000+ films en series, en werkt op alle apparaten. Bekijk onze{' '}
                <Link to="/prijzen" className="text-brand-orange hover:underline">
                  prijzen
                </Link>{' '}
                en start vandaag nog!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
