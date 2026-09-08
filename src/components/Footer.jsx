import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPlay, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Abonnementen', href: '#pricing' },
    { name: 'Functies', href: '#features' },
    { name: 'Apparaten', href: '#devices' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  const legalLinks = [
    { name: 'Privacybeleid', href: '#privacy' },
    { name: 'Algemene Voorwaarden', href: '#terms' },
    { name: 'Retourbeleid', href: '#returns' },
    { name: 'Cookie Beleid', href: '#cookies' },
  ];

  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaPlay className="text-primary-500 text-2xl" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Holland IPTV
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              De meest betrouwbare IPTV service in Nederland. 30.500+ kanalen, 150.000+ films en series, en 24/7 Nederlandse support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Snelle Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Juridisch</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span>
                  Rotterdam<br />
                  Nederland
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaWhatsapp className="text-primary-500 flex-shrink-0" />
                <a href="https://wa.me/31612345678" className="hover:text-primary-400 transition-colors">
                  +31 6 12345678
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <a href="mailto:info@holland-iptv.nl" className="hover:text-primary-400 transition-colors">
                  info@holland-iptv.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Holland IPTV. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-4">
              <div className="glass-effect px-4 py-2 rounded-full text-sm">
                <span className="text-gray-400">Veilig betalen met</span>
                <span className="ml-2 font-semibold text-primary-400">iDEAL & Bancontact</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-glow"></div>
            <span>99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-glow"></div>
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-glow"></div>
            <span>Geen Auto-Verlenging</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-glow"></div>
            <span>Nederlandse Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
