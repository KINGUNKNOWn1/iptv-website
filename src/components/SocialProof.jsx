import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaStar, FaShieldAlt, FaTrophy, FaFire } from 'react-icons/fa';

const SocialProof = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotification, setShowNotification] = useState(true);
  const [customerCount, setCustomerCount] = useState(24587);

  const notifications = [
    { name: 'Mohammed A.', location: 'Rotterdam', time: '2 minuten geleden', plan: '12 maanden' },
    { name: 'Lisa V.', location: 'Amsterdam', time: '5 minuten geleden', plan: '6 maanden' },
    { name: 'Ahmed K.', location: 'Den Haag', time: '8 minuten geleden', plan: '12 maanden' },
    { name: 'Sarah B.', location: 'Utrecht', time: '12 minuten geleden', plan: '3 maanden' },
    { name: 'Hassan M.', location: 'Eindhoven', time: '15 minuten geleden', plan: '12 maanden' },
    { name: 'Emma J.', location: 'Groningen', time: '18 minuten geleden', plan: '6 maanden' },
    { name: 'Fatima D.', location: 'Tilburg', time: '22 minuten geleden', plan: '12 maanden' },
    { name: 'Pieter S.', location: 'Almere', time: '25 minuten geleden', plan: '3 maanden' },
  ];

  // Cycle through notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(false);
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
        setShowNotification(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [notifications.length]);

  // Increment customer count periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setCustomerCount(prev => prev + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: FaUsers,
      value: customerCount.toLocaleString(),
      label: 'Tevreden Klanten',
      gradient: 'from-blue-500 via-blue-600 to-cyan-500',
      shadowColor: 'shadow-blue-500/50',
      glowColor: 'bg-blue-500',
      iconBg: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaStar,
      value: '4.9/5.0',
      label: 'Gemiddelde Beoordeling',
      gradient: 'from-yellow-500 via-orange-500 to-orange-600',
      shadowColor: 'shadow-orange-500/50',
      glowColor: 'bg-orange-500',
      iconBg: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaShieldAlt,
      value: '99.9%',
      label: 'Uptime Garantie',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      shadowColor: 'shadow-green-500/50',
      glowColor: 'bg-green-500',
      iconBg: 'from-green-500 to-emerald-500'
    },
  ];

  const currentNotif = notifications[currentNotification];

  return (
    <>
      {/* Floating Notification */}
      <div className="fixed bottom-24 left-4 z-50 max-w-sm">
        <AnimatePresence mode="wait">
          {showNotification && (
            <motion.div
              key={currentNotification}
              initial={{ x: -400, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -400, opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur-xl opacity-30" />

              {/* Card */}
              <div className="relative bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-4 border border-green-100">
                <div className="flex items-start gap-3">
                  {/* Success Icon with animation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', delay: 0.1 }}
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/50"
                  >
                    <FaCheckCircle className="text-white text-xl" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 flex items-center gap-2">
                      {currentNotif.name} uit {currentNotif.location}
                      <FaFire className="text-orange-500 text-xs animate-pulse" />
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      heeft zojuist een <span className="font-bold text-blue-600">{currentNotif.plan}</span> abonnement besteld
                    </p>
                    <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      {currentNotif.time}
                    </p>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setShowNotification(false)}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Animated Progress bar */}
                <motion.div
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                  className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-3"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-4"
            >
              <FaTrophy className="text-yellow-500" />
              <span className="text-sm font-semibold text-gray-300">Vertrouwd door duizenden</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Bewezen <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Prestaties</span>
            </h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>

          {/* Trust Badges Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6"
          >
            {[
              { text: 'iDEAL Betaling', icon: '💳', gradient: 'from-pink-500 to-rose-500' },
              { text: 'Geen Auto-Verlenging', icon: '🔒', gradient: 'from-green-500 to-emerald-500' },
              { text: '14 Dagen Garantie', icon: '✓', gradient: 'from-blue-500 to-cyan-500' },
              { text: 'SSL Beveiligd', icon: '🛡️', gradient: 'from-purple-500 to-indigo-500' },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                {/* Glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${badge.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

                <div className="relative flex items-center gap-3 px-6 py-3 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700/50 group-hover:border-transparent transition-all">
                  <span className="text-2xl">{badge.icon}</span>
                  <span className="text-sm text-gray-300 font-semibold group-hover:text-white transition-colors">
                    {badge.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Separate component for stat cards with advanced animations
const StatCard = ({ stat, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Animated Glow Effect */}
      <motion.div
        animate={{
          opacity: isHovered ? [0.4, 0.6, 0.4] : 0,
          scale: isHovered ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-xl ${stat.shadowColor}`}
      />

      {/* Card */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative h-full"
      >
        <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-800/95 to-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 group-hover:border-transparent transition-all duration-300 overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }} />
          </div>

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

          {/* Icon Container with 3D effect */}
          <motion.div
            animate={{
              rotateY: isHovered ? [0, 360] : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut"
            }}
            className={`relative inline-flex p-5 rounded-2xl bg-gradient-to-br ${stat.iconBg} mb-6 ${stat.shadowColor} shadow-xl`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <stat.icon className="text-4xl text-white relative z-10" />

            {/* Icon Glow */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                opacity: isHovered ? [0.5, 0.8, 0.5] : 0.3,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
              }}
              className={`absolute inset-0 bg-gradient-to-br ${stat.iconBg} rounded-2xl blur-md`}
            />
          </motion.div>

          {/* Value with CountUp Effect */}
          <motion.div
            key={stat.value}
            initial={{ scale: 1 }}
            animate={{
              scale: isHovered ? [1, 1.05, 1] : 1,
            }}
            transition={{
              duration: 0.3,
              repeat: isHovered ? Infinity : 0,
              repeatDelay: 1
            }}
            className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3 relative z-10`}
          >
            {stat.value}
          </motion.div>

          {/* Label */}
          <p className="text-gray-400 font-semibold text-lg group-hover:text-gray-300 transition-colors relative z-10">
            {stat.label}
          </p>

          {/* Decorative Elements */}
          <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${stat.gradient} opacity-5 rounded-bl-full transform group-hover:scale-110 transition-transform duration-500`} />

          {/* Shine Effect on Hover */}
          <motion.div
            animate={{
              x: isHovered ? ['-100%', '200%'] : '-100%',
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          />

          {/* Corner Accent */}
          <div className="absolute bottom-0 left-0 w-20 h-20 opacity-20 group-hover:opacity-30 transition-opacity">
            <div className={`w-full h-full rounded-tr-full bg-gradient-to-tr ${stat.gradient}`} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SocialProof;
