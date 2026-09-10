import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-brand-black flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.6, 0.05, 0.01, 0.9]
          }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          {/* Play button icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-16 h-16 bg-black rounded-full flex items-center justify-center"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              style={{ marginLeft: '3px' }}
            >
              <path
                d="M8 5v14l11-7L8 5z"
                fill="#FF6B2C"
              />
            </svg>
          </motion.div>

          {/* streamholland text */}
          <h1
            className="text-5xl font-bold text-white"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            streamholland
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-sm mb-8"
        >
          Premium Streaming Service
        </motion.p>

        {/* Loading Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-12 h-12 mx-auto"
        >
          <svg viewBox="0 0 50 50">
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="#FF6B2C"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="31.415, 31.415"
              transform="rotate(-90 25 25)"
            />
          </svg>
        </motion.div>

        {/* Pulsing Dots */}
        <div className="flex gap-2 justify-center mt-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: i * 0.2
              }}
              className="w-2 h-2 bg-brand-orange rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
