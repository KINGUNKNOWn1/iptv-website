import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import StickyWhatsAppCTA from './components/StickyWhatsAppCTA';
import CookieConsent from './components/CookieConsent';
import PageTransition from './components/PageTransition';
import LoadingScreen from './components/LoadingScreen';
import SmoothScroll from './components/SmoothScroll';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const IPTVKopen = lazy(() => import('./pages/IPTVKopen'));
const Prijzen = lazy(() => import('./pages/Prijzen'));
const Contact = lazy(() => import('./pages/Contact'));
const IPTVAbonnement = lazy(() => import('./pages/IPTVAbonnement'));
const IPTVNederland = lazy(() => import('./pages/IPTVNederland'));
const Kanalen = lazy(() => import('./pages/Kanalen'));
const Apparaten = lazy(() => import('./pages/Apparaten'));
const VeelgesteldeVragen = lazy(() => import('./pages/VeelgesteldeVragen'));
const OverOns = lazy(() => import('./pages/OverOns'));
const IPTVZonderContract = lazy(() => import('./pages/IPTVZonderContract'));
const IPTVHolland = lazy(() => import('./pages/IPTVHolland'));

// Lazy load device pages
const SamsungTV = lazy(() => import('./pages/apparaten/SamsungTV'));

// Lazy load blog pages
const IPTVKopenNederlandGids = lazy(() => import('./pages/blog/IPTVKopenNederlandGids'));
const BesteIPTVApps2024 = lazy(() => import('./pages/blog/BesteIPTVApps2024'));
const IsIPTVLegaalNederland = lazy(() => import('./pages/blog/IsIPTVLegaalNederland'));
const IPTVInstallerenSamsungTV = lazy(() => import('./pages/blog/IPTVInstallerenSamsungTV'));
const NederlandseIPTVKanalenLijst = lazy(() => import('./pages/blog/NederlandseIPTVKanalenLijst'));

// Lazy load legal pages
const Privacybeleid = lazy(() => import('./pages/Privacybeleid'));
const AlgemeneVoorwaarden = lazy(() => import('./pages/AlgemeneVoorwaarden'));
const Retourbeleid = lazy(() => import('./pages/Retourbeleid'));
const CookieBeleid = lazy(() => import('./pages/CookieBeleid'));

// Lazy load error pages
const NotFound = lazy(() => import('./pages/NotFound'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  useEffect(() => {
    // Initialize Lenis smooth scroll with optimized settings for performance
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      // Performance optimization
      lerp: 0.1,
      syncTouch: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          lenis.scrollTo(target, { offset: -80 });
        }
      });
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-black">
      <Navigation />
      <ScrollToTop />
      <SmoothScroll />
      <Suspense fallback={<LoadingScreen />}>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/iptv-kopen" element={<IPTVKopen />} />
            <Route path="/prijzen" element={<Prijzen />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/iptv-abonnement" element={<IPTVAbonnement />} />
            <Route path="/iptv-nederland" element={<IPTVNederland />} />
            <Route path="/iptv-zonder-contract" element={<IPTVZonderContract />} />
            <Route path="/iptv-holland" element={<IPTVHolland />} />
            <Route path="/kanalen" element={<Kanalen />} />
            <Route path="/apparaten" element={<Apparaten />} />
            <Route path="/apparaten/samsung-tv" element={<SamsungTV />} />
            <Route path="/veelgestelde-vragen" element={<VeelgesteldeVragen />} />
            <Route path="/over-ons" element={<OverOns />} />
            {/* Blog Routes */}
            <Route path="/blog/iptv-kopen-nederland-complete-gids" element={<IPTVKopenNederlandGids />} />
            <Route path="/blog/beste-iptv-apps-2024" element={<BesteIPTVApps2024 />} />
            <Route path="/blog/is-iptv-legaal-nederland" element={<IsIPTVLegaalNederland />} />
            <Route path="/blog/iptv-installeren-samsung-tv" element={<IPTVInstallerenSamsungTV />} />
            <Route path="/blog/nederlandse-iptv-kanalen-lijst" element={<NederlandseIPTVKanalenLijst />} />
            {/* Legal Routes */}
            <Route path="/privacybeleid" element={<Privacybeleid />} />
            <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
            <Route path="/retourbeleid" element={<Retourbeleid />} />
            <Route path="/cookie-beleid" element={<CookieBeleid />} />
            {/* 404 Catch-all Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </Suspense>
      <Footer />
      <StickyWhatsAppCTA />
      <CookieConsent />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
