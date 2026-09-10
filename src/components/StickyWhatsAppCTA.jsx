import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const StickyWhatsAppCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Show after scrolling down 300px
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hoi! Ik ben geïnteresseerd in een Stream Holland abonnement. Kan ik meer informatie krijgen?'
    );
    window.open(`https://wa.me/31612345678?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-40"
        >
          {/* Expanded Message Card */}
          <AnimatePresence>
            {isExpanded && !isMobile && (
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 20, y: 10 }}
                className="absolute bottom-full right-0 mb-4 w-72"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200 relative">
                  {/* Close button */}
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center text-xs"
                  >
                    <FaTimes />
                  </button>

                  {/* Content */}
                  <div className="pr-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                        <FaWhatsapp className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">Stream Holland Support</p>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-xs text-gray-600">Online nu</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 mb-3">
                      👋 Hallo! Heb je vragen over onze IPTV dienst? Chat direct met ons via WhatsApp!
                    </p>

                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors text-sm"
                    >
                      Start Chat
                    </button>

                    <p className="text-xs text-gray-500 text-center mt-2">
                      Reactie binnen 2 minuten
                    </p>
                  </div>

                  {/* Tail */}
                  <div className="absolute bottom-0 right-8 transform translate-y-full">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main WhatsApp Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={isMobile ? handleWhatsAppClick : () => setIsExpanded(!isExpanded)}
            onHoverStart={() => !isMobile && setIsExpanded(true)}
            className="relative group"
          >
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-75" />

            {/* Button */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-green-700 shadow-2xl flex items-center justify-center hover:shadow-green-600/50 transition-shadow">
              <FaWhatsapp className="text-white text-3xl" />

              {/* Unread Badge */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">1</span>
              </div>
            </div>
          </motion.button>

          {/* Mobile Tooltip */}
          {isMobile && isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap"
            >
              Chat met ons!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900" />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyWhatsAppCTA;
