import React from 'react';
import { motion } from 'framer-motion';

/**
 * Lightweight Background - CSS-only alternative to ParticleBackground & AnimatedGradientMesh
 * No Three.js, 50x faster, no rendering issues
 */
const LightweightBackground = ({ variant = 'default' }) => {
  const variants = {
    default: {
      gradient: 'from-brand-black via-gray-900 to-brand-black',
      orbs: [
        { size: 'w-96 h-96', color: 'bg-brand-orange/10', position: 'top-20 -left-20', delay: 0 },
        { size: 'w-[500px] h-[500px]', color: 'bg-orange-600/5', position: 'bottom-40 -right-40', delay: 2 },
      ]
    },
    hero: {
      gradient: 'from-brand-black to-gray-900',
      orbs: [
        { size: 'w-[600px] h-[600px]', color: 'bg-brand-orange/15', position: 'top-0 right-0', delay: 0 },
        { size: 'w-96 h-96', color: 'bg-blue-500/10', position: 'bottom-0 left-0', delay: 1.5 },
        { size: 'w-80 h-80', color: 'bg-brand-orange/10', position: 'top-1/2 left-1/4', delay: 3 },
      ]
    },
    minimal: {
      gradient: 'from-brand-black to-brand-black',
      orbs: [
        { size: 'w-64 h-64', color: 'bg-brand-orange/5', position: 'top-10 right-10', delay: 0 },
      ]
    }
  };

  const config = variants[variant] || variants.default;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient}`} />

      {/* Animated gradient orbs */}
      {config.orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.color} rounded-full blur-3xl ${orb.position}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Floating dots (replaces particles) */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-orange/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Grid overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-brand-black/50" />
    </div>
  );
};

export default LightweightBackground;
