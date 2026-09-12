import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Cookie, Shield, BarChart, Settings, Eye, Trash2, CheckCircle } from 'lucide-react';

const CookieBeleid = () => {
  const [acceptedCookies, setAcceptedCookies] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  });

  const cookieTypes = [
    {
      id: 'essential',
      title: 'Essentiële Cookies',
      icon: Shield,
      required: true,
      description: 'Noodzakelijk voor het functioneren van de website. Deze cookies kunnen niet worden uitgeschakeld.',
      examples: [
        'Sessie cookies voor inloggen',
        'Winkelwagen functionaliteit',
        'Beveiligings cookies',
        'Cookie voorkeur onthouden'
      ],
      duration: 'Sessie tot 1 jaar',
      color: 'green'
    },
    {
      id: 'analytics',
      title: 'Analytische Cookies',
      icon: BarChart,
      required: false,
      description: 'Helpen ons begrijpen hoe bezoekers de website gebruiken, zodat wij de gebruikerservaring kunnen verbeteren.',
      examples: [
        'Google Analytics',
        'Paginaweergaven en bezoektijd',
        'Bronnen van verkeer',
        'Populaire pagina\'s'
      ],
      duration: 'Tot 2 jaar',
      color: 'blue'
    },
    {
      id: 'marketing',
      title: 'Marketing Cookies',
      icon: Eye,
      required: false,
      description: 'Gebruikt voor gerichte advertenties en het volgen van de effectiviteit van marketingcampagnes.',
      examples: [
        'Facebook Pixel',
        'Google Ads conversies',
        'Retargeting campagnes',
        'Sociale media integraties'
      ],
      duration: 'Tot 1 jaar',
      color: 'purple'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Beleid - Stream Holland</title>
        <meta name="description" content="Cookie beleid van Stream Holland. Informatie over welke cookies wij gebruiken en waarom." />
        <link rel="canonical" href="https://streamholland.com/cookie-beleid" />
      </Helmet>

      <div className="min-h-screen bg-brand-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-brand-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6"
            >
              <Cookie className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">GDPR Compliant</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Cookie Beleid
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Stream Holland gebruikt cookies om uw ervaring te verbeteren en onze website te optimaliseren. Hier leest u welke cookies wij gebruiken en waarom.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-gray-400 mt-4"
            >
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* What are cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Wat zijn cookies?</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Cookies zijn kleine tekstbestanden die op uw computer of mobiele apparaat worden geplaatst wanneer u een website bezoekt. Cookies worden veel gebruikt om websites efficiënt te laten werken en om informatie te verstrekken aan de eigenaren van de website.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Stream Holland gebruikt cookies om:
                    </p>
                    <ul className="space-y-2 text-gray-300 mt-4">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>De website goed te laten functioneren</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Uw voorkeuren te onthouden</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Te begrijpen hoe bezoekers onze website gebruiken</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Relevante content en advertenties te tonen</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Cookie Types */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-center mb-8">Welke Cookies Gebruiken Wij?</h2>
                {cookieTypes.map((type, index) => {
                  const Icon = type.icon;
                  const colorClasses = {
                    green: 'from-green-500/20 to-green-500/10 border-green-500/30',
                    blue: 'from-blue-500/20 to-blue-500/10 border-blue-500/30',
                    purple: 'from-purple-500/20 to-purple-500/10 border-purple-500/30'
                  };

                  return (
                    <motion.div
                      key={type.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-gradient-to-br ${colorClasses[type.color]} backdrop-blur-sm border rounded-2xl p-8`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 bg-${type.color}-500/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-7 h-7 text-${type.color}-400`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold">{type.title}</h3>
                            {type.required ? (
                              <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm font-semibold">
                                Verplicht
                              </span>
                            ) : (
                              <span className="bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-semibold">
                                Optioneel
                              </span>
                            )}
                          </div>

                          <p className="text-gray-300 leading-relaxed mb-4">
                            {type.description}
                          </p>

                          <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30 mb-4">
                            <h4 className="font-bold text-white mb-2">Voorbeelden:</h4>
                            <ul className="space-y-1 text-gray-300 text-sm">
                              {type.examples.map((example, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-brand-orange mt-0.5">•</span>
                                  <span>{example}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <p className="text-sm text-gray-400">
                            <strong className="text-white">Bewaartermijn:</strong> {type.duration}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* How to manage cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Cookies Beheren</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      U heeft verschillende opties om cookies te beheren en te verwijderen:
                    </p>

                    <div className="space-y-4">
                      <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                        <h3 className="font-bold text-white mb-2">1. Via deze website</h3>
                        <p className="text-gray-300 text-sm mb-3">
                          U kunt uw cookie voorkeuren aanpassen via de cookie banner die verschijnt bij uw eerste bezoek, of via de instellingen hieronder.
                        </p>
                        <button className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors text-sm">
                          Cookie Voorkeuren Aanpassen
                        </button>
                      </div>

                      <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                        <h3 className="font-bold text-white mb-2">2. Via uw browser</h3>
                        <p className="text-gray-300 text-sm mb-3">
                          De meeste browsers staan u toe om cookies te blokkeren of te verwijderen:
                        </p>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-brand-orange mt-0.5">•</span>
                            <span><strong className="text-white">Chrome:</strong> Instellingen → Privacy en beveiliging → Cookies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-brand-orange mt-0.5">•</span>
                            <span><strong className="text-white">Firefox:</strong> Opties → Privacy & Beveiliging → Cookies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-brand-orange mt-0.5">•</span>
                            <span><strong className="text-white">Safari:</strong> Voorkeuren → Privacy → Cookies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-brand-orange mt-0.5">•</span>
                            <span><strong className="text-white">Edge:</strong> Instellingen → Privacy en services → Cookies</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <p className="text-gray-300 text-sm">
                          <strong className="text-yellow-400">Let op:</strong> Als u cookies blokkeert, kunnen sommige delen van onze website mogelijk niet goed functioneren.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Third-party cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">Cookies van Derden</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Naast onze eigen cookies kunnen derden ook cookies plaatsen op uw apparaat wanneer u onze website bezoekt:
                </p>
                <div className="space-y-3">
                  <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                    <h3 className="font-bold text-white mb-2">Google Analytics</h3>
                    <p className="text-gray-300 text-sm">
                      Om te begrijpen hoe bezoekers onze website gebruiken. Wij hebben een verwerkersovereenkomst met Google en hebben IP-anonimisering ingeschakeld.
                    </p>
                  </div>
                  <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                    <h3 className="font-bold text-white mb-2">Google Ads / Facebook Pixel</h3>
                    <p className="text-gray-300 text-sm">
                      Voor het tonen van relevante advertenties. Deze cookies worden alleen geplaatst met uw toestemming.
                    </p>
                  </div>
                  <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                    <h3 className="font-bold text-white mb-2">Sociale Media</h3>
                    <p className="text-gray-300 text-sm">
                      Als u sociale media buttons gebruikt (delen op Facebook, Twitter, etc.), plaatsen deze platforms mogelijk cookies.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Your rights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Uw Rechten</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      U heeft de volgende rechten met betrekking tot cookies:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong className="text-white">Toestemming intrekken:</strong> U kunt uw toestemming voor cookies op elk moment intrekken</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong className="text-white">Cookies verwijderen:</strong> U kunt bestaande cookies op elk moment verwijderen via uw browser</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong className="text-white">Cookies blokkeren:</strong> U kunt cookies geheel blokkeren via uw browserinstellingen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong className="text-white">Inzage:</strong> U kunt opvragen welke gegevens via cookies zijn verzameld</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Updates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">Wijzigingen Cookie Beleid</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Wij kunnen dit cookie beleid van tijd tot tijd aanpassen, bijvoorbeeld wanneer wij nieuwe cookies gaan gebruiken of wanneer wetgeving verandert.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  De meest recente versie is altijd te vinden op deze pagina. Bij belangrijke wijzigingen zullen wij u via de website of e-mail informeren.
                </p>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-brand-orange/20 to-blue-500/20 backdrop-blur-sm border border-brand-orange/30 rounded-2xl p-8 text-center"
              >
                <Cookie className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Vragen over cookies?</h2>
                <p className="text-gray-300 mb-6">
                  Heeft u vragen over ons gebruik van cookies? Neem gerust contact op.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:privacy@streamholland.com"
                    className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    E-mail Privacy Team
                  </a>
                  <a
                    href="https://wa.me/18653169315"
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-colors border border-white/20"
                  >
                    WhatsApp Contact
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CookieBeleid;
