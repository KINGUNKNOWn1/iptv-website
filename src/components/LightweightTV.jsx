import React from 'react';
import { motion } from 'framer-motion';

/**
 * Lightweight TV Component - CSS-only alternative to ThreeDTV
 * 10x faster, no Three.js bundle, no rendering artifacts
 */
const LightweightTV = ({ imageUrl = 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&q=80' }) => {
  return (
    <div className="w-full h-[600px] relative overflow-hidden bg-gradient-to-b from-brand-black to-gray-900">
      {/* Ambient glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* TV Container */}
      <div className="relative h-full flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* TV Frame with 3D effect */}
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl">
            {/* Screen glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-blue-500/20 rounded-3xl blur-xl" />

            {/* Screen */}
            <div className="relative">
              <div className="w-[700px] h-[400px] bg-black rounded-2xl overflow-hidden shadow-inner">
                {/* Content Image */}
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  src={imageUrl}
                  alt="IPTV Content"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(1.1) contrast(1.1)',
                  }}
                />

                {/* Screen shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
              </div>

              {/* Power indicator */}
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </div>

            {/* TV Stand */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-3xl shadow-lg" />
          </div>

          {/* Floating particles effect (CSS only) */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-brand-orange/60 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 left-8 z-10"
      >
        <div className="bg-brand-black/90 backdrop-blur-md border border-brand-orange/30 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-300">LIVE IN 4K</span>
          </div>
          <h3 className="text-2xl font-bold text-white">30.500+ Kanalen</h3>
          <p className="text-gray-400">Bekijk op elk apparaat</p>
        </div>
      </motion.div>
    </div>
  );
};

export default LightweightTV;
