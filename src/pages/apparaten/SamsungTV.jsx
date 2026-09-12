import React, { useState, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Tv,
  Download,
  Settings,
  Play,
  Check,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Smartphone,
  Wifi,
  Shield,
  Zap,
  Star,
  Phone,
  ExternalLink,
  HelpCircle
} from 'lucide-react';

import LightweightBackground from "../../components/LightweightBackground";

const SamsungTV = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'IPTV Installeren op Samsung TV',
    description: 'Stap-voor-stap handleiding om IPTV te installeren op je Samsung Smart TV. Werkt voor alle modellen vanaf 2016.',
    totalTime: 'PT5M',
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Samsung Smart TV (2016 of nieuwer)'
      },
      {
        '@type': 'HowToTool',
        name: 'Internetverbinding'
      },
      {
        '@type': 'HowToTool',
        name: 'Stream Holland IPTV abonnement'
      }
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Open Smart Hub',
        text: 'Druk op de Home knop op je Samsung afstandsbediening om de Smart Hub te openen.',
        image: 'https://streamholland.com/images/samsung-step1.jpg'
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Zoek naar IPTV app',
        text: 'Ga naar "Apps" en zoek in de Samsung App Store naar "IPTV" of "Smart IPTV". Download de app van je voorkeur.',
        image: 'https://streamholland.com/images/samsung-step2.jpg'
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Installeer de app',
        text: 'Klik op "Installeren" en wacht tot de app volledig is gedownload en geïnstalleerd op je Samsung TV.',
        image: 'https://streamholland.com/images/samsung-step3.jpg'
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Open de IPTV app',
        text: 'Open de geïnstalleerde IPTV app. Je ziet nu een MAC-adres of activatiecode op het scherm.',
        image: 'https://streamholland.com/images/samsung-step4.jpg'
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Voer je abonnement in',
        text: 'Neem contact op via WhatsApp met je MAC-adres. We activeren je abonnement binnen 1 minuut.',
        image: 'https://streamholland.com/images/samsung-step5.jpg'
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Start met kijken',
        text: 'Herstart de app. Je Stream Holland IPTV abonnement is nu actief en je kunt direct beginnen met kijken!',
        image: 'https://streamholland.com/images/samsung-step6.jpg'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Werkt Stream Holland IPTV op alle Samsung TV\'s?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stream Holland IPTV werkt op alle Samsung Smart TV\'s vanaf model jaar 2016 en nieuwer. Dit omvat alle Samsung Tizen OS televisies. Heb je een ouder model? Je kunt alsnog IPTV kijken via een Android TV Box of Amazon Fire Stick.'
        }
      },
      {
        '@type': 'Question',
        name: 'Welke IPTV apps kan ik gebruiken op Samsung TV?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'De meest gebruikte apps voor Samsung TV zijn: Smart IPTV, IPTV Smarters Pro, GSE Smart IPTV, en TiviMate. We raden Smart IPTV of IPTV Smarters Pro aan voor de beste ervaring op Samsung. Bij aankoop krijg je uitgebreide installatie-instructies voor je favoriete app.'
        }
      },
      {
        '@type': 'Question',
        name: 'Hoe lang duurt het installeren van IPTV op Samsung TV?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'De installatie duurt gemiddeld 5 minuten. Je downloadt de IPTV app uit de Samsung App Store, voert je MAC-adres in via WhatsApp, en binnen 1 minuut is je abonnement geactiveerd. Daarna kun je direct beginnen met kijken.'
        }
      },
      {
        '@type': 'Question',
        name: 'Wat is het MAC-adres en waar vind ik die?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Het MAC-adres is een unieke code die je IPTV app identificeert. Je vindt het MAC-adres direct op het scherm wanneer je de IPTV app voor het eerst opent. Het is een reeks van 12 cijfers en letters (bijvoorbeeld: 00:1A:79:XX:XX:XX). Stuur dit adres via WhatsApp en wij activeren je abonnement.'
        }
      },
      {
        '@type': 'Question',
        name: 'Kan ik 4K kijken op mijn Samsung TV?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja! Stream Holland biedt duizenden zenders in 4K Ultra HD kwaliteit. Als je een 4K Samsung TV hebt en een internetsnelheid van minimaal 25 Mbps, kun je genieten van kristalheldere 4K IPTV content. Alle premium sport, films en series zijn beschikbaar in 4K.'
        }
      },
      {
        '@type': 'Question',
        name: 'Wat als de IPTV app niet werkt op mijn Samsung?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Als de app niet werkt: (1) Controleer je internetverbinding, (2) Herstart je Samsung TV volledig, (3) Update je TV naar de nieuwste firmware, (4) Verwijder en installeer de app opnieuw. Werkt het nog steeds niet? Neem contact op via WhatsApp voor directe hulp van onze Nederlandse support.'
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
        name: 'Apparaten',
        item: 'https://streamholland.com/apparaten'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Samsung TV',
        item: 'https://streamholland.com/apparaten/samsung-tv'
      }
    ]
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'IPTV Installeren op Samsung TV - Handleiding 2026',
    description: 'Installeer IPTV op je Samsung Smart TV in 5 minuten. Stap-voor-stap handleiding voor alle Samsung modellen vanaf 2016.',
    url: 'https://streamholland.com/apparaten/samsung-tv'
  };

  const compatibleModels = [
    { series: 'Samsung QLED (2016-2026)', supported: true },
    { series: 'Samsung Crystal UHD (2019-2026)', supported: true },
    { series: 'Samsung Neo QLED (2021-2026)', supported: true },
    { series: 'Samsung The Frame (2017-2026)', supported: true },
    { series: 'Samsung The Serif (2019-2026)', supported: true },
    { series: 'Samsung The Sero (2020-2026)', supported: true },
    { series: 'Samsung UHD 4K (2016-2026)', supported: true },
    { series: 'Samsung Smart TV Tizen (2016+)', supported: true },
    { series: 'Samsung oudere modellen (<2016)', supported: false, alternative: 'Gebruik Android TV Box' }
  ];

  const installationSteps = [
    {
      number: 1,
      title: 'Open Smart Hub',
      description: 'Druk op de Home knop (huis-icoon) op je Samsung afstandsbediening. Dit opent de Smart Hub waar je toegang hebt tot alle apps.',
      icon: Tv,
      time: '30 seconden',
      difficulty: 'Makkelijk'
    },
    {
      number: 2,
      title: 'Zoek IPTV App',
      description: 'Navigeer naar "Apps" in het menu. Gebruik de zoekfunctie en typ "IPTV" of "Smart IPTV". Je ziet meerdere IPTV apps verschijnen.',
      icon: Download,
      time: '1 minuut',
      difficulty: 'Makkelijk'
    },
    {
      number: 3,
      title: 'Installeer de App',
      description: 'Selecteer de IPTV app van je voorkeur (Smart IPTV of IPTV Smarters aanbevolen). Klik op "Installeren" en wacht tot de download compleet is.',
      icon: Settings,
      time: '2 minuten',
      difficulty: 'Makkelijk'
    },
    {
      number: 4,
      title: 'Open & Noteer MAC-adres',
      description: 'Open de app. Je ziet een welkomstscherm met je unieke MAC-adres (12 cijfers/letters). Noteer of fotografeer dit adres.',
      icon: Smartphone,
      time: '30 seconden',
      difficulty: 'Makkelijk'
    },
    {
      number: 5,
      title: 'Activeer via WhatsApp',
      description: 'Stuur je MAC-adres via WhatsApp naar ons. We activeren je Stream Holland abonnement binnen 1 minuut. Je ontvangt een bevestiging.',
      icon: Phone,
      time: '1 minuut',
      difficulty: 'Makkelijk'
    },
    {
      number: 6,
      title: 'Start met Kijken!',
      description: 'Herstart de IPTV app op je Samsung TV. Je abonnement is nu actief. Geniet van 25.000+ zenders in HD en 4K kwaliteit!',
      icon: Play,
      time: '30 seconden',
      difficulty: 'Makkelijk'
    }
  ];

  const troubleshooting = [
    {
      problem: 'App niet beschikbaar in Samsung App Store',
      solution: 'Sommige landen/regio\'s hebben beperkte app stores. Wijzig je TV regio naar Nederland of Duitsland via Settings > General > System Manager > Location. Alternatief: gebruik een Android TV Box.',
      icon: AlertCircle
    },
    {
      problem: 'Buffering of haperende beelden',
      solution: 'Controleer je internetsnelheid (minimaal 10 Mbps voor HD, 25 Mbps voor 4K). Sluit je TV aan via ethernet kabel in plaats van WiFi voor stabielere verbinding. Herstart je router.',
      icon: Wifi
    },
    {
      problem: 'MAC-adres wordt niet geaccepteerd',
      solution: 'Controleer of je het juiste MAC-adres hebt gekopieerd (12 karakters). Sommige apps tonen meerdere adressen - gebruik het "Device MAC Address". Neem contact op via WhatsApp als het probleem blijft.',
      icon: Shield
    },
    {
      problem: 'Geen geluid bij sommige zenders',
      solution: 'Ga naar TV Settings > Sound > Expert Settings > Digital Output Audio Format. Zet dit op "PCM" in plaats van "Auto" of "Bitstream". Dit lost de meeste geluidsproblemen op.',
      icon: Settings
    },
    {
      problem: 'App crasht of sluit automatisch',
      solution: 'Update je Samsung TV firmware: Settings > Support > Software Update > Update Now. Verwijder de IPTV app volledig en installeer opnieuw. Clear cache via Settings > Apps > IPTV App > Storage.',
      icon: Zap
    }
  ];

  const recommendedApps = [
    {
      name: 'Smart IPTV',
      rating: 4.8,
      features: ['Meest stabiel', 'EPG ondersteuning', 'Favorieten', 'Ouderlijk toezicht'],
      cost: 'Eenmalig €5.49 (apart)',
      recommended: true
    },
    {
      name: 'IPTV Smarters Pro',
      rating: 4.7,
      features: ['Gratis', 'Multi-screen', 'Catch-up TV', 'VOD ondersteuning'],
      cost: 'Gratis',
      recommended: true
    },
    {
      name: 'GSE Smart IPTV',
      rating: 4.5,
      features: ['Gratis', 'Veel opties', 'Chromecast', 'EPG'],
      cost: 'Gratis',
      recommended: false
    },
    {
      name: 'TiviMate',
      rating: 4.6,
      features: ['Premium UI', 'DVR', 'Multiple playlists', 'Premium features'],
      cost: 'Gratis (Premium €4/jr)',
      recommended: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Snel Geïnstalleerd',
      description: 'Binnen 5 minuten volledig werkend IPTV op je Samsung TV'
    },
    {
      icon: Star,
      title: '4K HDR Ondersteuning',
      description: 'Geniet van kristalheldere 4K beelden op je Samsung QLED/UHD TV'
    },
    {
      icon: Shield,
      title: 'Veilig & Betrouwbaar',
      description: '99.9% uptime, Nederlandse servers, geen buffering'
    },
    {
      icon: Phone,
      title: 'Nederlandse Support',
      description: '24/7 hulp via WhatsApp in het Nederlands'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>IPTV Installeren op Samsung TV - Handleiding 2026 | Stream Holland</title>
        <meta
          name="description"
          content="IPTV installeren op Samsung Smart TV in 5 minuten ✓ Stap-voor-stap handleiding ✓ Alle Samsung modellen vanaf 2016 ✓ 4K ondersteuning ✓ Nederlandse support. Werkt gegarandeerd!"
        />
        <meta
          name="keywords"
          content="iptv samsung, iptv samsung tv, samsung tv iptv, iptv installeren samsung, samsung smart tv iptv, iptv app samsung, samsung iptv setup, samsung tv iptv app"
        />
        <link rel="canonical" href="https://streamholland.com/apparaten/samsung-tv" />

        {/* Open Graph */}
        <meta property="og:title" content="IPTV Installeren op Samsung TV - Complete Handleiding 2026" />
        <meta property="og:description" content="Installeer IPTV op je Samsung Smart TV in 5 minuten. Werkt op alle modellen vanaf 2016. Inclusief 4K ondersteuning." />
        <meta property="og:url" content="https://streamholland.com/apparaten/samsung-tv" />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPTV Installeren op Samsung TV" />
        <meta name="twitter:description" content="5 minuten installatie ✓ 4K ondersteuning ✓ Alle Samsung modellen" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        {/* Three.js Animated Background */}
        <Suspense fallback={null}>
          <LightweightBackground variant="hero" />
        </Suspense>

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 opacity-10">
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
            className="text-center text-white max-w-4xl mx-auto"
          >
            {/* Device Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
            >
              <Tv className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Samsung Smart TV - Alle Modellen vanaf 2016</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              IPTV Installeren op
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">
                Samsung Smart TV
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Installeer Stream Holland IPTV in slechts <span className="font-bold text-blue-400">5 minuten</span> op je Samsung TV.
              Stap-voor-stap handleiding met Nederlandse support.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">5 min</div>
                <div className="text-sm text-gray-300">Installatietijd</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">25.000+</div>
                <div className="text-sm text-gray-300">Zenders</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">4K</div>
                <div className="text-sm text-gray-300">Ultra HD</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-gray-300">NL Support</div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/18653169315?text=Hoi%2C%20ik%20wil%20IPTV%20installeren%20op%20mijn%20Samsung%20TV"
                className="bg-gradient-to-r from-brand-orange to-brand-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Direct Hulp via WhatsApp
              </a>
              <a
                href="/prijzen"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Bekijk Prijzen
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-brand-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-brand-black/80 rounded-xl p-6 shadow-md"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Installatie in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange">6 Stappen</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Volg deze eenvoudige stappen en kijk binnen 5 minuten IPTV op je Samsung TV
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {installationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    {/* Step Number */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 text-blue-500" />
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4">{step.description}</p>
                      <div className="flex gap-4 text-sm">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                          ⏱️ {step.time}
                        </span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                          ✓ {step.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA after steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6 text-lg">
              Klaar om te beginnen? Bestel je Stream Holland abonnement en start direct!
            </p>
            <a
              href="https://wa.me/18653169315?text=Hoi%2C%20ik%20wil%20IPTV%20bestellen%20voor%20mijn%20Samsung%20TV"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-orange to-brand-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Bestel Nu via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Compatible Models */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Compatibele <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Samsung Modellen</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stream Holland IPTV werkt op vrijwel alle Samsung Smart TV's
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {compatibleModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-6 rounded-xl border-2 ${
                  model.supported
                    ? 'bg-green-900/20 border-green-500'
                    : 'bg-orange-900/20 border-orange-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{model.series}</h3>
                    {model.alternative && (
                      <p className="text-sm text-gray-400 mt-1">{model.alternative}</p>
                    )}
                  </div>
                  {model.supported ? (
                    <Check className="w-8 h-8 text-green-400" />
                  ) : (
                    <AlertCircle className="w-8 h-8 text-orange-400" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mt-8"
          >
            Niet zeker of jouw model compatibel is? <a href="https://wa.me/18653169315" className="text-blue-400 underline">Vraag het ons via WhatsApp</a>
          </motion.p>
        </div>
      </section>

      {/* Recommended Apps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Aanbevolen <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange">IPTV Apps</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Deze IPTV apps werken perfect met Stream Holland op Samsung TV
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {recommendedApps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 ${
                  app.recommended ? 'border-blue-500 shadow-xl' : 'border-brand-gray/30'
                } relative`}
              >
                {app.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-orange to-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold">
                    AANBEVOLEN
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2 mt-2">{app.name}</h3>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(app.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-400 ml-1">{app.rating}</span>
                </div>

                <ul className="space-y-2 mb-4">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-brand-gray/30">
                  <p className="text-sm font-semibold text-white">{app.cost}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            {/* Background text "Probleem?" */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <span className="text-[120px] md:text-[180px] font-bold text-gray-200/40 select-none">
                Probleem?
              </span>
            </div>

            {/* Main title "Oplossen" */}
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600">
                  Oplossen
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Veelvoorkomende problemen en hun oplossingen
              </p>
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {troubleshooting.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-brand-black/80 rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-red-600">
                        Probleem: {item.problem}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="font-semibold text-green-600">Oplossing:</span> {item.solution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">Staat jouw probleem er niet tussen?</p>
            <a
              href="https://wa.me/18653169315?text=Hoi%2C%20ik%20heb%20een%20probleem%20met%20IPTV%20op%20mijn%20Samsung%20TV"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-orange to-brand-orange text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Neem Contact Op via WhatsApp
            </a>
          </motion.div>
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
              Alles wat je moet weten over IPTV op Samsung TV
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-brand-gray/30 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-brand-black transition-colors"
                >
                  <h3 className="font-bold text-lg pr-4">{faq.name}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/veelgestelde-vragen"
              className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:underline"
            >
              Bekijk Alle Veelgestelde Vragen
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Related Devices CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Andere Apparaten
            </h2>
            <p className="text-xl text-gray-300">
              Stream Holland IPTV werkt op alle apparaten
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'LG TV', url: '/apparaten/lg-tv' },
              { name: 'Android TV', url: '/apparaten/android-tv' },
              { name: 'Amazon Fire Stick', url: '/apparaten/fire-stick' }
            ].map((device, index) => (
              <motion.a
                key={index}
                href={device.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <Tv className="w-12 h-12 mx-auto mb-3 text-blue-400" />
                <h3 className="font-bold text-lg">{device.name}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Klaar om te Beginnen?
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Installeer Stream Holland IPTV op je Samsung TV in 5 minuten.
              15.000+ tevreden klanten gingen je voor!
            </p>

            <a
              href="https://wa.me/18653169315?text=Hoi%2C%20ik%20wil%20IPTV%20bestellen%20voor%20Samsung%20TV"
              className="inline-flex items-center gap-2 bg-brand-black text-blue-500 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all"
            >
              <Phone className="w-6 h-6" />
              Bestel Nu via WhatsApp
            </a>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>5 minuten installatie</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>4K ondersteuning</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>24/7 Nederlandse support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Geen contract</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SamsungTV;
