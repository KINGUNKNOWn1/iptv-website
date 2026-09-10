import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaCheckCircle } from 'react-icons/fa';
import SEO from '../components/SEO';

const VeelgesteldeVragen = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Algemeen",
      questions: [
        {
          q: "Wat is IPTV?",
          a: "IPTV staat voor Internet Protocol Television. Het is een manier om televisie te kijken via je internetverbinding in plaats van via traditionele satellit of kabel. Met Stream Holland krijg je toegang tot 30.500+ kanalen en 150.000+ films en series via internet."
        },
        {
          q: "Is Stream Holland legaal?",
          a: "Ja, Stream Holland is een legale IPTV aanbieder. We bieden een betrouwbare service met officiële content en volledige klantenondersteuning. IPTV legaal kopen betekent kiezen voor een vertrouwde aanbieder zoals Stream Holland."
        },
        {
          q: "Welke internetsnelheid heb ik nodig?",
          a: "Voor SD kwaliteit: minimaal 3 Mbps, HD kwaliteit: 5-8 Mbps, UHD/4K kwaliteit: 15-25 Mbps. Een stabiele internetverbinding is belangrijker dan de snelheid."
        }
      ]
    },
    {
      category: "Bestellen & Betalen",
      questions: [
        {
          q: "Hoe kan ik IPTV kopen?",
          a: "Je kunt direct online IPTV kopen via WhatsApp of onze website. Kies je abonnement, betaal via iDEAL, en je bent binnen 5 minuten actief. Geen gedoe, geen wachttijd."
        },
        {
          q: "Welke betaalmethoden accepteren jullie?",
          a: "We accepteren iDEAL (meest populair), creditcard, PayPal en bankoverschrijving. Voor Nederlandse klanten raden we iDEAL aan voor de snelste activering."
        },
        {
          q: "Wat kost een IPTV abonnement?",
          a: "Onze abonnementen starten vanaf €23 voor 3 maanden (€7,67/maand), €32 voor 6 maanden (€5,33/maand), of €48 voor 12 maanden (€4/maand). Geen verborgen kosten of automatische verlenging."
        },
        {
          q: "Krijg ik een factuur?",
          a: "Ja, je ontvangt automatisch een factuur per email na je betaling. Deze kun je gebruiken voor je administratie of zakelijke doeleinden."
        }
      ]
    },
    {
      category: "Activering & Installatie",
      questions: [
        {
          q: "Hoe snel is mijn IPTV abonnement actief?",
          a: "Je Stream Holland abonnement is binnen 5 minuten actief na betaling via iDEAL. Je ontvangt direct je inloggegevens via email en kunt meteen beginnen met kijken."
        },
        {
          q: "Hoe installeer ik IPTV op mijn apparaat?",
          a: "Installatie is super eenvoudig: 1) Download een IPTV app zoals IPTV Smarters Pro, 2) Voer de login gegevens in die je per email hebt ontvangen, 3) Begin met kijken! We sturen gedetailleerde instructies per email."
        },
        {
          q: "Op hoeveel apparaten kan ik kijken?",
          a: "Met één Stream Holland abonnement kun je op onbeperkt aantal apparaten tegelijk kijken. Perfect voor gezinnen! Geen extra kosten voor extra apparaten."
        },
        {
          q: "Werkt IPTV op mijn Smart TV?",
          a: "Ja! Stream Holland werkt op vrijwel alle Smart TV's: Samsung, LG, Sony, Philips, TCL, Hisense en meer. Ook op Android TV, Apple TV, Fire TV en andere streaming apparaten."
        }
      ]
    },
    {
      category: "Kanalen & Content",
      questions: [
        {
          q: "Hoeveel kanalen biedt Stream Holland?",
          a: "Stream Holland biedt meer dan 30.500 live zenders in verschillende talen, waaronder 80+ Nederlandse kanalen. Daarnaast hebben we 150.000+ films en series on-demand."
        },
        {
          q: "Welke Nederlandse kanalen zijn beschikbaar?",
          a: "Alle populaire Nederlandse zenders: NPO 1, NPO 2, NPO 3, RTL 4, RTL 5, RTL 7, RTL 8, SBS6, Veronica, Net5, en veel meer. Plus alle sport kanalen zoals ESPN, FOX Sports en Ziggo Sport."
        },
        {
          q: "Kan ik Eredivisie voetbal kijken?",
          a: "Ja! We hebben alle Nederlandse en internationale sportkanalen, inclusief Eredivisie, Champions League, Premier League, en meer. Ook Formule 1, tennis, en andere sporten."
        },
        {
          q: "Zijn er ook films en series on-demand?",
          a: "Absoluut! We hebben 150.000+ films en series on-demand. Van nieuwste bioscoophits tot klassiekers, Nederlandse producties tot internationale blockbusters. Alles in HD/UHD/4K."
        }
      ]
    },
    {
      category: "Abonnement & Verlenging",
      questions: [
        {
          q: "Verlengd mijn abonnement automatisch?",
          a: "Nee! Bij Stream Holland is er geen automatische verlenging. Je hebt volledige controle. We sturen je een herinnering voordat je abonnement afloopt, zodat je zelf kunt beslissen of je wilt verlengen."
        },
        {
          q: "Kan ik mijn abonnement annuleren?",
          a: "Binnen de eerste 14 dagen bieden we een geld-terug-garantie. Na 14 dagen loopt je abonnement gewoon af aan het einde van de gekozen periode, zonder automatische verlenging."
        },
        {
          q: "Kan ik upgraden naar een langer abonnement?",
          a: "Ja, je kunt altijd upgraden. Het verschil betaal je bij en je nieuwe periode start direct. Neem contact op via WhatsApp voor hulp bij upgraden."
        }
      ]
    },
    {
      category: "Technische Vragen",
      questions: [
        {
          q: "Wat moet ik doen bij buffering?",
          a: "Buffering komt zelden voor maar kan door een trage internetverbinding komen. Check je internetsnelheid (min. 5 Mbps voor HD), herstart je router, of schakel naar een andere server in de app. Onze support helpt je graag verder."
        },
        {
          q: "Heb ik een VPN nodig?",
          a: "Nee, je hebt geen VPN nodig. Stream Holland werkt direct in Nederland zonder extra software. Voor privacy kun je optioneel een VPN gebruiken, maar het is niet verplicht."
        },
        {
          q: "Werkt IPTV ook in het buitenland?",
          a: "Ja, je kunt Stream Holland wereldwijd gebruiken. Je abonnement werkt overal waar je internet hebt. Perfect voor vakanties of als je in het buitenland woont."
        },
        {
          q: "Wat is EPG?",
          a: "EPG (Electronic Program Guide) is de elektronische programmagids. Je ziet welke programma's nu en later op elk kanaal komen, net als bij gewone TV. Onze EPG is volledig in het Nederlands."
        }
      ]
    },
    {
      category: "Support & Service",
      questions: [
        {
          q: "Hoe kan ik contact opnemen met support?",
          a: "We bieden 24/7 Nederlandse klantenservice via WhatsApp (+31612345678) en email (support@streamholland.com). WhatsApp is het snelst voor directe hulp."
        },
        {
          q: "Is de support in het Nederlands?",
          a: "Ja! Onze volledige klantenservice is in het Nederlands. We spreken ook Engels, Arabisch en Turks voor onze internationale klanten."
        },
        {
          q: "Wat als ik technische problemen heb?",
          a: "Neem direct contact op via WhatsApp. Onze technische support helpt je binnen enkele minuten. We lossen 95% van de problemen op afstand op."
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-brand-black text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-black via-blue-900 to-brand-black">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Veelgestelde Vragen
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Alle antwoorden op je vragen over Stream Holland. Kan je vraag er niet tussen vinden?
                Neem contact op via WhatsApp!
              </p>
              <a
                href="https://wa.me/31612345678?text=Ik%20heb%20een%20vraag%20over%20IPTV"
                className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all"
              >
                Stel Je Vraag via WhatsApp
              </a>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 bg-brand-black">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-heading font-bold mb-6 text-brand-orange">
                  {category.category}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <motion.div
                        key={questionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: questionIndex * 0.05 }}
                        className="bg-brand-black/90 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-700 transition-colors"
                        >
                          <span className="font-semibold text-lg pr-8">{faq.q}</span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaChevronDown className="text-brand-orange flex-shrink-0" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-6 pb-4 text-gray-300 border-t border-slate-700 pt-4">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-brand-black/90/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Meer Informatie
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/iptv-kopen"
                className="bg-gradient-to-br from-brand-orange to-[#E85D00] p-8 rounded-xl hover:scale-105 transition-transform"
              >
                <FaCheckCircle className="text-4xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">IPTV Kopen</h3>
                <p className="text-white/90">
                  Lees meer over hoe je IPTV kunt kopen en wat je krijgt
                </p>
              </Link>

              <Link
                to="/kanalen"
                className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-xl hover:scale-105 transition-transform"
              >
                <FaCheckCircle className="text-4xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">Kanalen</h3>
                <p className="text-white/90">
                  Bekijk alle 30.500+ kanalen en VOD content
                </p>
              </Link>

              <Link
                to="/apparaten"
                className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-xl hover:scale-105 transition-transform"
              >
                <FaCheckCircle className="text-4xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">Apparaten</h3>
                <p className="text-white/90">
                  Check of jouw apparaat compatible is
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-gradient-to-br from-brand-black to-brand-black/90">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Vraag Niet Beantwoord?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Onze Nederlandse klantenservice staat 24/7 voor je klaar. Stel je vraag via WhatsApp
              en krijg binnen enkele minuten antwoord.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/31612345678?text=Ik%20heb%20een%20vraag%20over%20Stream Holland"
                className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                WhatsApp Ons
              </a>
              <Link
                to="/contact"
                className="px-10 py-4 bg-brand-orange hover:bg-[#E85D00] text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Contactformulier
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              📞 24/7 support • 🇳🇱 Nederlands • ⚡ Snelle respons • 💬 WhatsApp of Email
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default VeelgesteldeVragen;
