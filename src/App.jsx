import React, { useEffect } from 'react';
import Lenis from 'lenis';
import SEO from './components/SEO';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Interactive3DTV from './components/Interactive3DTV';
import ChannelGrid from './components/ChannelGrid';
import DeviceCompatibility from './components/DeviceCompatibility';
import SocialProof from './components/SocialProof';
import LimitedOfferBanner from './components/CountdownTimer';
import Pricing from './components/Pricing';
import ComparisonTable from './components/ComparisonTable';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyWhatsAppCTA from './components/StickyWhatsAppCTA';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

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
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <Hero />
        <SocialProof />
        <Interactive3DTV />
        <ChannelGrid />
        <DeviceCompatibility />
        <LimitedOfferBanner />
        <Pricing />
        <ComparisonTable />
        <Testimonials />
        <Blog />
        <About />
        <FAQ />
        <Footer />
        <StickyWhatsAppCTA />
      </div>
    </>
  );
}

export default App;
