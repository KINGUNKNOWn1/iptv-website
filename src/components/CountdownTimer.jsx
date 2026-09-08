import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaFire } from 'react-icons/fa';

const CountdownTimer = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const difference = endTime - new Date().getTime();

    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const TimeUnit = ({ value, label }) => (
    <motion.div
      key={value}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg shadow-red-600/30 border border-red-500/50">
          <span className="text-2xl md:text-3xl font-bold text-white">
            {String(value).padStart(2, '0')}
          </span>
        </div>
        {/* Shine effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
      </div>
      <span className="text-xs md:text-sm text-gray-400 mt-2 font-semibold uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );

  return (
    <div className="w-full">
      {/* Timer Display */}
      <div className="flex items-center justify-center gap-3 md:gap-4">
        <TimeUnit value={timeLeft.hours} label="Uren" />
        <div className="text-3xl text-red-600 font-bold mb-6">:</div>
        <TimeUnit value={timeLeft.minutes} label="Minuten" />
        <div className="text-3xl text-red-600 font-bold mb-6">:</div>
        <TimeUnit value={timeLeft.seconds} label="Seconden" />
      </div>
    </div>
  );
};

const LimitedOfferBanner = () => {
  // Set end time to 24 hours from now
  const [endTime] = useState(() => {
    const end = new Date();
    end.setHours(end.getHours() + 24);
    return end.getTime();
  });

  return (
    <section className="py-12 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Fire Icon & Label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaFire className="text-white text-2xl animate-pulse" />
            <span className="text-white font-bold text-sm md:text-base uppercase tracking-wider">
              Beperkte Tijd Actie
            </span>
            <FaFire className="text-white text-2xl animate-pulse" />
          </div>

          {/* Offer Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            MEGA KORTING: Tot 40% Voordeel!
          </h2>

          <p className="text-white/90 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Bestel nu en profiteer van onze grootste korting ooit. Deze aanbieding eindigt over:
          </p>

          {/* Countdown Timer */}
          <div className="mb-8">
            <CountdownTimer endTime={endTime} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl text-lg"
            >
              Claim Jouw Korting Nu!
            </a>

            <div className="flex items-center gap-2 text-white text-sm">
              <FaClock />
              <span>Nog maar {Math.floor(Math.random() * 20) + 10} plaatsen beschikbaar</span>
            </div>
          </div>

          {/* Social Proof */}
          <p className="text-white/80 text-sm mt-6">
            ⭐ Al 127 mensen hebben vandaag deze aanbieding geclaimd
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LimitedOfferBanner;
export { CountdownTimer };
