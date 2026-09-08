import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaShieldAlt, FaUsers, FaClock, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaShieldAlt,
      title: 'Betrouwbaarheid',
      description: 'Gevestigd in Rotterdam sinds 2021. We zijn transparant over wie we zijn en publiceren ons privacybeleid.'
    },
    {
      icon: FaUsers,
      title: '24.000+ Klanten',
      description: '99,9% uptime op alle schermen. We investeren in schaalbaarheid, geen multi-screen aanbieders.'
    },
    {
      icon: FaClock,
      title: 'Flexibiliteit',
      description: 'Geen jaarcontract verplicht. Kies je looptijd: 3, 6 of 12 maanden. Stop wanneer je wilt.'
    },
    {
      icon: FaWhatsapp,
      title: 'Nederlandse Support',
      description: 'Bestellen via WhatsApp. iDEAL betaling. Inloggegevens binnen 5 minuten. NL support 24/7.'
    }
  ];

  const features = [
    'Gevestigd in Rotterdam, actief door heel Nederland',
    'Geen anoniem reseller-paneel',
    'Transparant over onze identiteit',
    'Publiek privacybeleid',
    'Persoonlijk bereikbaar via WhatsApp',
    '99,9% uptime garantie',
    'iDEAL betaling mogelijk',
    'Geen automatische verlenging'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Over IPTV4K
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Betrouwbare IPTV aanbieder gevestigd in Rotterdam, Nederland
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&q=80"
                alt="Rotterdam"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

              {/* Location Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Gevestigd in Rotterdam</p>
                      <p className="text-gray-300 text-sm">Actief door heel Nederland</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Zes redenen om <Link to="/iptv-kopen" className="text-blue-400 hover:text-blue-300 underline">IPTV kopen</Link> bij IPTV4K te doen
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              Niet wat elke aanbieder belooft. Wat wij concreet anders doen. Bekijk onze <Link to="/prijzen" className="text-blue-400 hover:text-blue-300 underline">transparante prijzen</Link> zonder verborgen kosten.
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-600 transition-all group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="text-white text-2xl" />
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-white mb-2">
                {value.title}
              </h4>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Klaar om te starten met IPTV4K?
          </h3>
          <p className="text-gray-400 mb-6">
            Actief binnen 5 minuten. Geen automatische verlenging. <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline">Bestel nu via WhatsApp</Link>.
          </p>
          <Link
            to="/prijzen"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-600/30"
          >
            Bekijk IPTV Abonnement Prijzen
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
