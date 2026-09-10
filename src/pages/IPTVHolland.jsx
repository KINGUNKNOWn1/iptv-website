import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  MapPin,
  Globe,
  Tv,
  Check,
  Star,
  Users,
  Shield,
  Zap,
  Award,
  TrendingUp,
  Heart,
  Phone
} from 'lucide-react';

import LightweightBackground from "../components/LightweightBackground";

const IPTVHolland = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Waarom Stream Holland kiezen voor IPTV in Nederland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stream Holland is gevestigd in Rotterdam en gespecialiseerd in de Nederlandse markt. We bieden Nederlandse zenders, iDEAL betaling, Nederlandse klantenservice en servers geoptimaliseerd voor Holland. Met 15.000+ tevreden klanten in Nederland zijn we de betrouwbare keuze voor IPTV Holland.'
        }
      },
      {
        '@type': 'Question',
        name: 'Welke Nederlandse zenders krijg ik met IPTV Holland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Je krijgt alle populaire Nederlandse zenders zoals NPO 1, NPO 2, NPO 3, RTL 4, RTL 5, RTL 7, RTL 8, SBS6, Veronica, NET5, en nog veel meer. Ook regionale zenders en Vlaamse zenders zijn beschikbaar. In totaal meer dan 25.000 zenders waaronder alle Nederlandse content.'
        }
      },
      {
        '@type': 'Question',
        name: 'Werkt IPTV Holland overal in Nederland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, onze IPTV service werkt overal in Nederland waar je een internetverbinding hebt. Of je nu in Amsterdam, Rotterdam, Den Haag, Utrecht of een kleiner dorp woont - Stream Holland werkt perfect. We hebben servers in Europa voor optimale snelheid in Nederland.'
        }
      },
      {
        '@type': 'Question',
        name: 'Kan ik betalen met iDEAL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, Stream Holland accepteert iDEAL, de meest gebruikte betaalmethode in Nederland. Daarnaast accepteren we ook creditcard en andere Europese betaalmethoden. Betalen is veilig en binnen 1 minuut geregeld.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is IPTV legaal in Nederland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Het gebruik van IPTV-technologie zelf is volkomen legaal in Nederland. Stream Holland biedt een wettige IPTV service aan met officiële content en betaalde licenties. We opereren volgens Nederlandse wetgeving en zijn een geregistreerd Nederlands bedrijf.'
        }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://streamholland.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'IPTV Holland',
        item: 'https://streamholland.com/iptv-holland'
      }
    ]
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'IPTV Holland - Nederlandse IPTV Provider | Stream Holland',
    description: 'IPTV Holland: 15.000+ klanten in Nederland ✓ Nederlandse zenders ✓ iDEAL betaling ✓ Servers in Europa ✓ Nederlandse support. Vanaf €4/mnd.',
    url: 'https://streamholland.com/iptv-holland'
  };

  const benefits = [
    {
      icon: MapPin,
      title: 'Gevestigd in Rotterdam',
      description: 'Nederlands bedrijf, Nederlandse service, Nederlandse garanties'
    },
    {
      icon: Globe,
      title: 'Servers in Europa',
      description: 'Ultrasnelle verbinding in heel Nederland, geen buffering'
    },
    {
      icon: Tv,
      title: '25.000+ Zenders',
      description: 'Alle Nederlandse, Vlaamse en internationale zenders'
    },
    {
      icon: Shield,
      title: 'iDEAL Betaling',
      description: 'Veilig betalen met de meest gebruikte Nederlandse betaalmethode'
    },
    {
      icon: Users,
      title: '15.000+ Nederlandse Klanten',
      description: 'Marktleider in Nederland met hoogste klanttevredenheid'
    },
    {
      icon: Zap,
      title: '99.9% Uptime',
      description: 'Betrouwbare service die altijd werkt wanneer jij het nodig hebt'
    }
  ];

  const dutchCities = [
    'Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht', 'Eindhoven',
    'Groningen', 'Tilburg', 'Almere', 'Breda', 'Nijmegen',
    'Apeldoorn', 'Haarlem', 'Arnhem', 'Zaanstad', 'Amersfoort'
  ];

  const dutchChannels = [
    { name: 'NPO 1', category: 'Publieke omroep' },
    { name: 'NPO 2', category: 'Publieke omroep' },
    { name: 'NPO 3', category: 'Publieke omroep' },
    { name: 'RTL 4', category: 'Commercieel' },
    { name: 'RTL 5', category: 'Commercieel' },
    { name: 'RTL 7', category: 'Commercieel' },
    { name: 'RTL 8', category: 'Commercieel' },
    { name: 'SBS6', category: 'Commercieel' },
    { name: 'Veronica', category: 'Commercieel' },
    { name: 'NET5', category: 'Commercieel' },
    { name: 'Fox', category: 'Commercieel' },
    { name: 'Comedy Central', category: 'Entertainment' },
    { name: 'Ziggo Sport', category: 'Sport' },
    { name: 'ESPN', category: 'Sport' },
    { name: 'Discovery Channel', category: 'Documentaire' },
    { name: 'National Geographic', category: 'Documentaire' }
  ];

  const pricingOptions = [
    {
      duration: '1 maand',
      price: '€23',
      features: [
        'Alle 25.000+ zenders',
        'Nederlandse zenders in HD/4K',
        'iDEAL betaling',
        'Geen contract',
        '99.9% uptime garantie',
        '24/7 Nederlandse support'
      ],
      popular: false
    },
    {
      duration: '3 maanden',
      price: '€45',
      pricePerMonth: '€15/mnd',
      savings: 'Bespaar €24',
      features: [
        'Alle 25.000+ zenders',
        'Nederlandse zenders in HD/4K',
        'iDEAL betaling',
        'Geen contract',
        '99.9% uptime garantie',
        '24/7 Nederlandse support',
        'Prioriteit support'
      ],
      popular: true
    },
    {
      duration: '12 maanden',
      price: '€120',
      pricePerMonth: '€10/mnd',
      savings: 'Bespaar €156',
      features: [
        'Alle 25.000+ zenders',
        'Nederlandse zenders in HD/4K',
        'iDEAL betaling',
        'Geen contract',
        '99.9% uptime garantie',
        '24/7 Nederlandse support',
        'VIP support',
        'Gratis extra apparaat'
      ],
      popular: false
    }
  ];

  const whyChooseHolland = [
    {
      icon: Award,
      title: 'Marktleider in Nederland',
      description: 'Met 15.000+ tevreden klanten zijn we de grootste IPTV provider van Nederland. Onze ervaring met de Nederlandse markt garandeert de beste service.'
    },
    {
      icon: TrendingUp,
      title: 'Optimaal voor Nederlandse Internetproviders',
      description: 'Onze servers zijn geoptimaliseerd voor KPN, Ziggo, T-Mobile, Odido en alle andere Nederlandse internetproviders. Dit betekent sneller streamen en minder buffering.'
    },
    {
      icon: Heart,
      title: 'Nederlandse Content Eerst',
      description: 'We begrijpen wat Nederlandse kijkers willen: Eredivisie, Formule 1, Nederlandse films en series, regionale zenders - alles is beschikbaar in topkwaliteit.'
    },
    {
      icon: Shield,
      title: 'Voldoet aan Nederlandse Wetgeving',
      description: 'Als geregistreerd Nederlands bedrijf voldoen we aan alle Nederlandse wet- en regelgeving. Je koopt bij een betrouwbare, legale Nederlandse onderneming.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>IPTV Holland - #1 Nederlandse IPTV Provider vanaf €4/mnd | Stream Holland</title>
        <meta
          name="description"
          content="IPTV Holland: 15.000+ klanten in Nederland ✓ Nederlandse zenders (NPO, RTL, SBS) ✓ iDEAL betaling ✓ Servers in Europa ✓ Nederlandse support ✓ Gevestigd in Rotterdam. Vanaf €4/mnd."
        />
        <meta
          name="keywords"
          content="iptv holland, iptv netherlands, iptv nederland, iptv rotterdam, iptv amsterdam, iptv den haag, nederlandse iptv, iptv dutch, iptv ideal, iptv nl"
        />
        <link rel="canonical" href="https://streamholland.com/iptv-holland" />

        {/* Open Graph */}
        <meta property="og:title" content="IPTV Holland - #1 Nederlandse IPTV Provider | Stream Holland" />
        <meta property="og:description" content="15.000+ Nederlandse klanten ✓ Alle Nederlandse zenders ✓ iDEAL betaling ✓ Gevestigd in Rotterdam ✓ 99.9% uptime. Vanaf €4/mnd." />
        <meta property="og:url" content="https://streamholland.com/iptv-holland" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPTV Holland - Nederlandse IPTV Provider" />
        <meta name="twitter:description" content="15.000+ klanten ✓ Nederlandse zenders ✓ iDEAL betaling ✓ 99.9% uptime" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-brand-black">
        {/* Three.js Animated Background */}
        <Suspense fallback={null}>
          <LightweightBackground variant="hero" />
        </Suspense>

        <div className="absolute inset-0 bg-black/30" />

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
            >
              <MapPin className="w-5 h-5 text-orange-400" />
              <span className="font-medium">Gevestigd in Rotterdam, Nederland</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              IPTV Holland
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 mt-2">
                #1 in Nederland
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              15.000+ tevreden klanten in Nederland. Alle Nederlandse zenders, iDEAL betaling,
              servers in Europa en 24/7 Nederlandse klantenservice. Vanaf €10/maand.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <Users className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-3xl font-bold">15.000+</div>
                <div className="text-sm text-gray-300">Nederlandse klanten</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <Tv className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-3xl font-bold">25.000+</div>
                <div className="text-sm text-gray-300">Zenders</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <Zap className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm text-gray-300">Uptime</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <Star className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-sm text-gray-300">Klantbeoordeling</div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="https://wa.me/31612345678?text=Hoi%2C%20ik%20wil%20graag%20IPTV%20Holland%20bestellen"
                className="group bg-gradient-to-r from-brand-orange to-brand-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Bestel Nu via WhatsApp
              </a>
              <a
                href="/prijzen"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Bekijk Prijzen
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-brand-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Waarom <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange">Stream Holland</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              De Nederlandse IPTV provider waar 15.000+ klanten voor kozen
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-brand-black/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Holland Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              IPTV speciaal voor <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange">Nederland</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Als Nederlands bedrijf begrijpen we de Nederlandse markt het beste.
              Onze service is volledig afgestemd op Nederlandse kijkers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyChooseHolland.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-brand-black rounded-2xl p-8 border border-brand-gray/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dutch Channels Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Alle <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">Nederlandse Zenders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              NPO, RTL, SBS en meer - alle zenders die je kent en waardeert
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
            {dutchChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 flex items-center justify-between"
              >
                <div>
                  <div className="font-semibold">{channel.name}</div>
                  <div className="text-sm text-gray-400">{channel.category}</div>
                </div>
                <Check className="w-5 h-5 text-green-400" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-300 mb-6">
              + 25.000 extra zenders uit Nederland, België, Europa en de hele wereld
            </p>
            <a
              href="/kanalen"
              className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Bekijk Volledige Zenderlijst
            </a>
          </motion.div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Beschikbaar in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange">heel Nederland</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Van grote steden tot kleine dorpen - Stream Holland werkt overal waar je internet hebt
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {dutchCities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-r from-brand-orange to-brand-orange text-white px-6 py-3 rounded-full font-medium shadow-lg"
              >
                {city}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mt-8 text-lg"
          >
            En nog veel meer steden en dorpen in heel Nederland
          </motion.p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-brand-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Eerlijke <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange">Nederlandse Prijzen</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Geen verborgen kosten, betaal veilig met iDEAL
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-brand-black/80 rounded-2xl p-8 shadow-lg ${
                  option.popular ? 'ring-4 ring-orange-500 scale-105' : ''
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-orange to-brand-orange text-white px-6 py-2 rounded-full font-semibold text-sm">
                    Meest Gekozen
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{option.duration}</h3>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange mb-2">
                    {option.price}
                  </div>
                  {option.pricePerMonth && (
                    <div className="text-gray-400">{option.pricePerMonth}</div>
                  )}
                  {option.savings && (
                    <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mt-2">
                      {option.savings}
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/31612345678?text=Hoi%2C%20ik%20wil%20graag%20het%20${option.duration}%20pakket%20bestellen`}
                  className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    option.popular
                      ? 'bg-gradient-to-r from-brand-orange to-brand-orange text-white hover:shadow-xl'
                      : 'bg-white/5 text-white hover:bg-gray-200'
                  }`}
                >
                  Bestel via WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Veelgestelde <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange">Vragen</span>
            </h2>
            <p className="text-xl text-gray-400">
              Alles wat je moet weten over IPTV Holland
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-brand-black rounded-2xl p-8 border border-brand-gray/30"
              >
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <span className="text-orange-500 flex-shrink-0">Q:</span>
                  {faq.name}
                </h3>
                <p className="text-gray-300 leading-relaxed pl-8">
                  {faq.acceptedAnswer.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6">Heb je nog andere vragen?</p>
            <a
              href="/veelgestelde-vragen"
              className="inline-block bg-gradient-to-r from-brand-orange to-brand-orange text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Bekijk Alle Veelgestelde Vragen
            </a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Sluit je aan bij 15.000+ Nederlandse klanten
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Start vandaag nog met de beste IPTV service van Nederland.
              Bestel in 1 minuut via WhatsApp met iDEAL betaling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/31612345678?text=Hoi%2C%20ik%20wil%20graag%20IPTV%20Holland%20bestellen"
                className="group bg-brand-black text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Bestel Nu via WhatsApp
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="/prijzen"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Bekijk Prijzen
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>iDEAL betaling</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Geen contract</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Direct actief</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>24/7 Nederlandse support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Footer */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-400">15.000+</div>
              <div className="text-sm text-gray-400">Tevreden klanten</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-700" />
            <div>
              <div className="text-3xl font-bold text-orange-400">99.9%</div>
              <div className="text-sm text-gray-400">Uptime garantie</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-700" />
            <div>
              <div className="text-3xl font-bold text-orange-400">24/7</div>
              <div className="text-sm text-gray-400">Nederlandse support</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-700" />
            <div>
              <div className="text-3xl font-bold text-orange-400">4.9/5</div>
              <div className="text-sm text-gray-400">Klantbeoordeling</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IPTVHolland;
