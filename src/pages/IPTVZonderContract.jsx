import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheck, FiX, FiShield, FiClock, FiDollarSign, FiHeart } from 'react-icons/fi';

import LightweightBackground from "../components/LightweightBackground";

const IPTVZonderContract = () => {
  const noContractSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'IPTV Zonder Contract - Flexibel & Vrijblijvend',
    description: 'IPTV zonder contract vanaf €23. Geen automatische verlenging, geen opzegtermijn. Stop wanneer je wilt. iDEAL betaling. Bestel vrijblijvend.',
    url: 'https://streamholland.com/iptv-zonder-contract',
    provider: {
      '@type': 'Organization',
      name: 'Stream Holland'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wat betekent IPTV zonder contract?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IPTV zonder contract betekent dat je geen langdurige verplichting aangaat. Bij Stream Holland koop je IPTV voor 3, 6 of 12 maanden. Na afloop stopt het abonnement automatisch - geen verlenging, geen opzegtermijn, geen verrassingen.'
        }
      },
      {
        '@type': 'Question',
        name: 'Moet ik opzeggen bij Stream Holland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nee, opzeggen is niet nodig. Je abonnement stopt automatisch na de gekozen periode (3, 6 of 12 maanden). Wil je verlengen? Dan kun je dit eenvoudig doen, maar het gebeurt nooit automatisch.'
        }
      },
      {
        '@type': 'Question',
        name: 'Kan ik tussentijds stoppen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Je betaalt eenmalig voor de gekozen periode. Tussentijds stoppen is niet mogelijk, maar je zit ook niet vast aan automatische verlenging. Kies daarom de periode die bij je past: 3 maanden voor een korte test, of 12 maanden voor de beste prijs.'
        }
      },
      {
        '@type': 'Question',
        name: 'Wat is het verschil met een IPTV contract?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bij traditionele IPTV aanbieders sluit je vaak een contract van 12-24 maanden met automatische verlenging. Stream Holland werkt zonder contract: betaal eenmalig, geniet van IPTV, en stop automatisch. Geen verrassing facturen, geen opzegtermijn van 1 maand.'
        }
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://streamholland.com' },
    { name: 'IPTV Zonder Contract', url: 'https://streamholland.com/iptv-zonder-contract' }
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };

  const benefits = [
    {
      icon: <FiX className="w-8 h-8" />,
      title: 'Geen Automatische Verlenging',
      description: 'Je abonnement stopt automatisch na de gekozen periode. Geen verrassingen, geen gedoe.'
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: 'Geen Opzegtermijn',
      description: 'Opzeggen is niet eens nodig. Na 3, 6 of 12 maanden stopt alles vanzelf.'
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: 'Betaal Alleen Wat Je Gebruikt',
      description: 'Eenmalige betaling met iDEAL. Geen maandelijkse afschrijvingen, geen verborgen kosten.'
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'Volledige Controle',
      description: 'Jij bepaalt of en wanneer je verlengt. Wij dwingen niks, wij leveren gewoon topservice.'
    }
  ];

  const comparison = [
    { feature: 'Looptijd', streamHolland: 'Kies 3, 6 of 12 maanden', traditional: '12-24 maanden verplicht' },
    { feature: 'Automatische verlenging', streamHolland: 'Nee, nooit', traditional: 'Ja, standaard' },
    { feature: 'Opzegtermijn', streamHolland: 'Niet nodig', traditional: '1 maand van tevoren' },
    { feature: 'Opzeggen vergeten?', streamHolland: 'Geen probleem!', traditional: 'Nog een jaar vast' },
    { feature: 'Betaling', streamHolland: 'Eenmalig met iDEAL', traditional: 'Maandelijks automatisch' },
    { feature: 'Flexibiliteit', streamHolland: 'Maximaal', traditional: 'Beperkt' },
    { feature: 'Verborgen kosten', streamHolland: 'Geen', traditional: 'Activatiekosten, beheerkosten' },
    { feature: 'Prijs', streamHolland: 'Vanaf €4/mnd', traditional: '€8-15/mnd' }
  ];

  const pricingOptions = [
    {
      period: '3 Maanden',
      total: '€23',
      monthly: '€7,67/mnd',
      description: 'Perfect om te testen',
      popular: false
    },
    {
      period: '6 Maanden',
      total: '€32',
      monthly: '€5,33/mnd',
      description: 'Goede prijs-kwaliteit',
      popular: false
    },
    {
      period: '12 Maanden',
      total: '€48',
      monthly: '€4,00/mnd',
      description: 'Beste deal!',
      popular: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>IPTV Zonder Contract - Geen Verplichtingen vanaf €4/mnd | Stream Holland</title>
        <meta
          name="description"
          content="IPTV zonder contract vanaf €23. Geen automatische verlenging, geen opzegtermijn. Stop wanneer je wilt. 30.500+ kanalen, iDEAL betaling. Bestel vrijblijvend ➜"
        />
        <meta
          name="keywords"
          content="iptv zonder contract, iptv geen contract, iptv prepaid, iptv vrijblijvend, iptv flexibel, geen abonnement, iptv opzegbaar"
        />
        <link rel="canonical" href="https://streamholland.com/iptv-zonder-contract" />

        {/* Open Graph */}
        <meta property="og:title" content="IPTV Zonder Contract - Geen Verplichtingen | Stream Holland" />
        <meta property="og:description" content="IPTV zonder contract vanaf €4/mnd. Geen automatische verlenging, geen opzegtermijn. Bestel vrijblijvend." />
        <meta property="og:url" content="https://streamholland.com/iptv-zonder-contract" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(noContractSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-brand-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Three.js Animated Background */}
          <Suspense fallback={null}>
            <LightweightBackground variant="hero" />
          </Suspense>

          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto relative z-10"
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ✓ 100% Vrijblijvend
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                IPTV Zonder Contract
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400 mt-2">
                  Flexibel & Vrijblijvend
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Geen automatische verlenging. Geen opzegtermijn. Geen gedoe.<br/>
                <span className="text-white font-semibold">Stop wanneer je wilt - of eigenlijk: het stopt vanzelf.</span>
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a
                  href="https://wa.me/31612345678?text=Ik%20wil%20IPTV%20zonder%20contract%20bestellen"
                  className="bg-gradient-to-r from-brand-orange to-brand-orange hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Bestel Zonder Contract via WhatsApp
                </a>
                <Link
                  to="/prijzen"
                  className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Bekijk Prijzen
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-green-400">
                  <FiCheck className="w-5 h-5" />
                  <span>Binnen 5 min actief</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <FiCheck className="w-5 h-5" />
                  <span>iDEAL betaling</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <FiCheck className="w-5 h-5" />
                  <span>30.500+ kanalen</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Waarom Zonder Contract Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Waarom IPTV Zonder Contract?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-brand-black/80 to-brand-black/90 p-6 rounded-xl border border-brand-gray/30 hover:border-brand-orange transition-all duration-300"
                >
                  <div className="text-brand-orange mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Hoe Werkt Het?
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Kies Je Periode',
                  description: 'Selecteer 3, 6 of 12 maanden. Hoe langer, hoe goedkoper per maand. Maar zelfs 3 maanden bindt je nergens aan.'
                },
                {
                  step: '2',
                  title: 'Betaal Eenmalig met iDEAL',
                  description: 'Veilige betaling via iDEAL. Eén keer betalen, klaar. Geen automatische incasso, geen maandelijkse afschrijving.'
                },
                {
                  step: '3',
                  title: 'Geniet van 30.500+ Kanalen',
                  description: 'Binnen 5 minuten actief. Kijk op elk apparaat. 4K kwaliteit. Nederlandse support 24/7.'
                },
                {
                  step: '4',
                  title: 'Contract Stopt Automatisch',
                  description: 'Na 3, 6 of 12 maanden stopt alles vanzelf. Geen opzegtermijn, geen verlenging, geen verrassingen. Wil je verlengen? Dat kan altijd, maar het gebeurt nooit automatisch.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 bg-slate-800/50 p-6 rounded-xl border border-slate-700"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              Stream Holland vs Traditionele IPTV Contracten
            </h2>
            <p className="text-slate-300 text-center mb-12 text-lg">
              Zie het verschil tussen vrijheid en vastzitten
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-slate-800 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-700">
                    <th className="px-6 py-4 text-left text-white font-bold">Feature</th>
                    <th className="px-6 py-4 text-center text-white font-bold">
                      <div className="flex items-center justify-center gap-2">
                        <FiShield className="w-5 h-5 text-green-400" />
                        Stream Holland
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-white font-bold">Traditionele IPTV</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className="border-t border-slate-700 hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 text-slate-300 font-medium">{item.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-2 text-green-400 font-semibold">
                          <FiCheck className="w-5 h-5" />
                          {item.streamHolland}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-2 text-red-400">
                          <FiX className="w-5 h-5" />
                          {item.traditional}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              Kies Je Periode - Geen Contract
            </h2>
            <p className="text-slate-300 text-center mb-12 text-lg">
              Betaal eenmalig, geniet van IPTV, stop automatisch
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-gradient-to-br from-brand-black/80 to-brand-black/90 p-8 rounded-xl border-2 ${
                    option.popular ? 'border-brand-orange' : 'border-brand-gray/30'
                  } hover:border-brand-orange transition-all duration-300`}
                >
                  {option.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-brand-orange to-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                        MEEST GEKOZEN
                      </span>
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{option.period}</h3>
                    <p className="text-slate-400 mb-4">{option.description}</p>
                    <div className="mb-6">
                      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
                        {option.total}
                      </div>
                      <div className="text-slate-300 mt-2">
                        = {option.monthly}
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/31612345678?text=Ik%20wil%20het%20${option.period}%20pakket%20zonder%20contract%20bestellen`}
                      className={`block w-full py-3 rounded-full font-bold transition-all duration-300 ${
                        option.popular
                          ? 'bg-gradient-to-r from-brand-orange to-brand-orange hover:from-orange-600 hover:to-orange-700 text-white'
                          : 'bg-slate-600 hover:bg-slate-500 text-white'
                      }`}
                    >
                      Bestel via WhatsApp
                    </a>

                    <div className="mt-4 text-xs text-slate-400">
                      Geen auto-verlenging • Stopt automatisch
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-300 mb-4">
                💡 <strong className="text-white">Tip:</strong> Kies 12 maanden voor de beste prijs (slechts €4/mnd), maar weet dat je ook na 12 maanden nergens aan vast zit.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Veelgestelde Vragen
            </h2>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-xl border border-slate-700"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.name}</h3>
                  <p className="text-slate-300">{faq.acceptedAnswer.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Waarom Klanten Kiezen voor Stream Holland
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Meer dan 15.000 tevreden klanten vertrouwen op onze service zonder contract
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-brand-orange mb-2">15.000+</div>
                <div className="text-slate-300">Tevreden Klanten</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-brand-orange mb-2">99.9%</div>
                <div className="text-slate-300">Uptime Garantie</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-brand-orange mb-2">24/7</div>
                <div className="text-slate-300">Nederlandse Support</div>
              </div>
            </div>

            <a
              href="https://wa.me/31612345678?text=Ik%20wil%20IPTV%20zonder%20contract%20bestellen"
              className="inline-block bg-gradient-to-r from-brand-orange to-brand-orange hover:from-orange-600 hover:to-orange-700 text-white px-12 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Nu Zonder Contract
            </a>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Meer Informatie
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <Link to="/iptv-kopen" className="bg-slate-700 hover:bg-slate-600 p-4 rounded-lg text-white text-center transition-colors">
                IPTV Kopen
              </Link>
              <Link to="/prijzen" className="bg-slate-700 hover:bg-slate-600 p-4 rounded-lg text-white text-center transition-colors">
                Prijzen Bekijken
              </Link>
              <Link to="/apparaten" className="bg-slate-700 hover:bg-slate-600 p-4 rounded-lg text-white text-center transition-colors">
                Compatibele Apparaten
              </Link>
              <Link to="/veelgestelde-vragen" className="bg-slate-700 hover:bg-slate-600 p-4 rounded-lg text-white text-center transition-colors">
                Alle FAQ's
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPTVZonderContract;
