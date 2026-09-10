import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Interactive3DTV from '../components/Interactive3DTV';
import ChannelGrid from '../components/ChannelGrid';
import DeviceCompatibility from '../components/DeviceCompatibility';
import LimitedOfferBanner from '../components/CountdownTimer';
import Pricing from '../components/Pricing';
import ComparisonTable from '../components/ComparisonTable';
import Testimonials from '../components/Testimonials';
import TrustBadges from '../components/TrustBadges';
import Blog from '../components/Blog';
import About from '../components/About';
import CEOSection from '../components/CEOSection';
import FAQ from '../components/FAQ';
import LightweightTV from '../components/LightweightTV';

const Home = () => {
  return (
    <>
      <Hero />
      <SocialProof />

      {/* TV Showcase */}
      <section className="py-20 bg-brand-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ervaar <span className="text-brand-orange">Premium IPTV</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Kristalheldere 4K IPTV service op elk apparaat
            </p>
          </div>

          <LightweightTV />
        </div>
      </section>

      <Interactive3DTV />
      <ChannelGrid />
      <DeviceCompatibility />
      <LimitedOfferBanner />
      <Pricing />
      <ComparisonTable />
      <Testimonials />
      <TrustBadges />
      <Blog />
      <CEOSection />
      <About />
      <FAQ />
    </>
  );
};

export default Home;
