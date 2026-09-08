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
import Blog from '../components/Blog';
import About from '../components/About';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
