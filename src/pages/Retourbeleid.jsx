import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { RotateCcw, Info, Clock, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

const Retourbeleid = () => {
  return (
    <>
      <Helmet>
        <title>Retourbeleid - Stream Holland</title>
        <meta name="description" content="Retourbeleid van Stream Holland. Informatie over herroepingsrecht en restitutie bij digitale dienstverlening." />
        <link rel="canonical" href="https://streamholland.com/retourbeleid" />
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
              <RotateCcw className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">Digitale Dienstverlening</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Retourbeleid
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Informatie over herroepingsrecht en restitutie voor Stream Holland IPTV diensten.
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
              {/* Important Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-blue-500/10 border-2 border-blue-500/30 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">Belangrijke Informatie</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Stream Holland biedt <strong className="text-white">digitale diensten</strong> aan (IPTV streaming). Voor digitale diensten gelden andere regels dan voor fysieke producten.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Zodra de IPTV dienst wordt geactiveerd en u toegang krijgt tot de streaming content, vervalt het herroepingsrecht volgens de <strong className="text-white">Wet koop op afstand</strong> (artikel 6:230p lid 13 BW).
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">1. Herroepingsrecht</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  In principe heeft u als consument een bedenktijd van <strong className="text-white">14 dagen</strong> bij aankoop op afstand (via internet). Deze bedenktijd begint op de dag van aankoop.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">Echter:</strong> Bij Stream Holland vervalt dit herroepingsrecht zodra:
                </p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Uw IPTV abonnement wordt geactiveerd</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>U toegang krijgt tot de streaming dienst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>U de inloggegevens ontvangt en kunt inloggen</span>
                  </li>
                </ul>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-yellow-400">Let op:</strong> Door de aankoop en activatie te bevestigen, geeft u uitdrukkelijk toestemming dat de dienst direct start en begrijpt u dat het herroepingsrecht hierdoor vervalt (conform artikel 6:230p lid 13 BW).
                  </p>
                </div>
              </motion.div>

              {/* Section 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">2. Annulering Vóór Activatie</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Heeft u betaald maar is uw abonnement <strong className="text-white">nog niet geactiveerd</strong>? Dan kunt u binnen 14 dagen kosteloos annuleren.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">Annulering mogelijk:</h3>
                      <p className="text-gray-300 text-sm">Betaling ontvangen, maar abonnement nog niet geactiveerd binnen 14 dagen → volledige restitutie mogelijk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <XCircle className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">Annulering niet mogelijk:</h3>
                      <p className="text-gray-300 text-sm">Abonnement al geactiveerd en u heeft toegang gekregen → geen restitutie mogelijk</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mt-4">
                  <strong className="text-white">Hoe annuleren?</strong> Stuur een e-mail naar <a href="mailto:support@streamholland.com" className="text-brand-orange hover:underline">support@streamholland.com</a> of neem contact op via WhatsApp.
                </p>
              </motion.div>

              {/* Section 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">3. Restitutie</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Als u recht heeft op restitutie (zie punt 2), dan:
                    </p>
                    <ul className="space-y-2 text-gray-300 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Wordt het volledige bedrag teruggestort</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Terugbetaling vindt plaats binnen 14 dagen na annulering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Restitutie via dezelfde betaalmethode als uw betaling</span>
                      </li>
                    </ul>
                    <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                      <p className="text-gray-300 text-sm">
                        <strong className="text-white">Let op:</strong> Transactiekosten van betaalproviders (zoals iDEAL of Bancontact) kunnen niet worden terugbetaald, deze zijn kosten van de bank/betaalprovider.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">4. Technische Problemen</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Ondervindt u technische problemen met de dienst? Dan kunt u <strong className="text-white">geen restitutie</strong> claimen, maar wel een <strong className="text-white">oplossing</strong> verwachten.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">Onze verplichting:</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">→</span>
                        <span>24/7 Nederlandse support voor technische hulp</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">→</span>
                        <span>Actieve ondersteuning bij installatie en configuratie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">→</span>
                        <span>Oplossen van server-gerelateerde problemen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">→</span>
                        <span>Bij aanhoudende problemen: compensatie in de vorm van verlengde looptijd</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">Belangrijk:</strong> Stream Holland is niet verantwoordelijk voor problemen veroorzaakt door uw internet provider, apparatuur, of externe factoren buiten onze controle.
                  </p>
                </div>
              </motion.div>

              {/* Section 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">5. Geen Automatische Verlenging</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Stream Holland hanteert <strong className="text-white">geen automatische verlenging</strong>. Dit betekent:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-300">Uw abonnement stopt automatisch na 3, 6 of 12 maanden</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-300">U hoeft niet op te zeggen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-300">Geen verrassingen of ongewenste verlengingen</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Wilt u verlengen? Dat kan eenvoudig via onze website of door contact op te nemen met de klantenservice.
                </p>
              </motion.div>

              {/* Section 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">6. Uitzonderingen</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  In de volgende gevallen is <strong className="text-white">geen restitutie mogelijk</strong>:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Abonnement is al geactiveerd en u heeft toegang gehad tot de dienst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>U heeft de algemene voorwaarden geschonden (delen account, doorverkoop, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>U bent niet tevreden over content beschikbaarheid (dit kan wijzigen)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Problemen veroorzaakt door uw internet, apparatuur of externe factoren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Meer dan 14 dagen na aankoop (en geen activatie)</span>
                  </li>
                </ul>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Veelgestelde Vragen</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                    <h3 className="font-bold text-white mb-2">Kan ik mijn geld terug als de dienst niet werkt?</h3>
                    <p className="text-gray-300 text-sm">Nee, maar wij zijn verplicht om het probleem op te lossen via onze 24/7 support. Bij langdurige problemen aan onze kant bieden wij compensatie in de vorm van looptijdverlenging.</p>
                  </div>

                  <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                    <h3 className="font-bold text-white mb-2">Wat als ik per ongeluk het verkeerde pakket heb gekocht?</h3>
                    <p className="text-gray-300 text-sm">Als uw account nog niet is geactiveerd, neem dan direct contact op. Wij kunnen dit dan aanpassen of terugbetalen. Na activatie is dit helaas niet meer mogelijk.</p>
                  </div>

                  <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                    <h3 className="font-bold text-white mb-2">Kan ik tussentijds opzeggen en een deel terugkrijgen?</h3>
                    <p className="text-gray-300 text-sm">Nee. U betaalt eenmalig voor een vaste periode (3, 6 of 12 maanden). Tussentijdse opzegging met terugbetaling is niet mogelijk. Het abonnement blijft actief tot het einde van de gekozen periode.</p>
                  </div>

                  <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                    <h3 className="font-bold text-white mb-2">Hoe lang duurt een restitutie?</h3>
                    <p className="text-gray-300 text-sm">Als u recht heeft op restitutie, wordt deze binnen 14 dagen verwerkt naar dezelfde betaalmethode als uw betaling. Het kan 3-5 werkdagen duren voordat het bedrag zichtbaar is op uw rekening.</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-brand-orange/20 to-blue-500/20 backdrop-blur-sm border border-brand-orange/30 rounded-2xl p-8 text-center"
              >
                <RotateCcw className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Vragen over ons retourbeleid?</h2>
                <p className="text-gray-300 mb-6">
                  Neem contact op met onze klantenservice. Wij helpen u graag verder.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:support@streamholland.com"
                    className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    E-mail Support
                  </a>
                  <a
                    href="https://wa.me/31612345678"
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

export default Retourbeleid;
