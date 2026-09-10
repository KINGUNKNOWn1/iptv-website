import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after 1 second delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);

    // Initialize analytics/marketing if accepted
    if (consent.analytics) {
      // TODO: Initialize Google Analytics
      console.log('Analytics enabled');
    }
    if (consent.marketing) {
      // TODO: Initialize marketing pixels
      console.log('Marketing enabled');
    }
  };

  const acceptEssential = () => {
    const consent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const savePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
    setShowSettings(false);

    // Initialize based on preferences
    if (preferences.analytics) {
      console.log('Analytics enabled');
    }
    if (preferences.marketing) {
      console.log('Marketing enabled');
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            onClick={() => setShowBanner(false)}
          />

          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
          >
            <div className="max-w-6xl mx-auto bg-brand-black border-2 border-brand-orange/30 rounded-2xl shadow-2xl overflow-hidden">
              {!showSettings ? (
                // Main Banner
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Cookie className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        🍪 Deze Website Gebruikt Cookies
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Wij gebruiken cookies om uw ervaring te verbeteren, onze website te analyseren en gepersonaliseerde content te tonen.
                        Essentiële cookies zijn noodzakelijk voor het functioneren van de website.
                        Andere cookies worden alleen geplaatst met uw toestemming.
                      </p>
                      <Link
                        to="/cookie-beleid"
                        className="text-brand-orange hover:underline text-sm mt-2 inline-block"
                        onClick={() => setShowBanner(false)}
                      >
                        Lees ons Cookie Beleid →
                      </Link>
                    </div>
                    <button
                      onClick={() => setShowBanner(false)}
                      className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={acceptAll}
                      className="flex-1 bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Check className="w-5 h-5" />
                      Accepteer Alle Cookies
                    </button>
                    <button
                      onClick={acceptEssential}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-white/20"
                    >
                      Alleen Essentieel
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="sm:w-auto bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-white/10 flex items-center justify-center gap-2"
                    >
                      <Settings className="w-5 h-5" />
                      Instellingen
                    </button>
                  </div>
                </div>
              ) : (
                // Settings Panel
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        Cookie Voorkeuren
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Kies welke cookies u wilt accepteren
                      </p>
                    </div>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    {/* Essential Cookies */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                            <Check className="w-5 h-5 text-green-400" />
                          </div>
                          <h4 className="font-bold text-white">Essentiële Cookies</h4>
                        </div>
                        <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                          Altijd Actief
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm ml-10">
                        Noodzakelijk voor het functioneren van de website. Kunnen niet worden uitgeschakeld.
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <Settings className="w-5 h-5 text-blue-400" />
                          </div>
                          <h4 className="font-bold text-white">Analytische Cookies</h4>
                        </div>
                        <button
                          onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                          className={`relative w-14 h-7 rounded-full transition-colors ${
                            preferences.analytics ? 'bg-brand-orange' : 'bg-gray-600'
                          }`}
                        >
                          <div
                            className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                              preferences.analytics ? 'transform translate-x-7' : ''
                            }`}
                          />
                        </button>
                      </div>
                      <p className="text-gray-400 text-sm ml-10">
                        Helpen ons begrijpen hoe bezoekers de website gebruiken (Google Analytics).
                      </p>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                            <Cookie className="w-5 h-5 text-purple-400" />
                          </div>
                          <h4 className="font-bold text-white">Marketing Cookies</h4>
                        </div>
                        <button
                          onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                          className={`relative w-14 h-7 rounded-full transition-colors ${
                            preferences.marketing ? 'bg-brand-orange' : 'bg-gray-600'
                          }`}
                        >
                          <div
                            className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                              preferences.marketing ? 'transform translate-x-7' : ''
                            }`}
                          />
                        </button>
                      </div>
                      <p className="text-gray-400 text-sm ml-10">
                        Gebruikt voor gerichte advertenties (Facebook Pixel, Google Ads).
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={savePreferences}
                      className="flex-1 bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                    >
                      Voorkeuren Opslaan
                    </button>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-white/20"
                    >
                      Annuleren
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
