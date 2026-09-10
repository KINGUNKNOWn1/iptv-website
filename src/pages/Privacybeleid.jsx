import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Mail, Clock, Lock, Eye, Users } from 'lucide-react';

const Privacybeleid = () => {
  return (
    <>
      <Helmet>
        <title>Privacybeleid - Stream Holland</title>
        <meta name="description" content="Privacybeleid van Stream Holland. Lees hoe wij uw persoonsgegevens beschermen en verwerken volgens de AVG/GDPR wetgeving." />
        <link rel="canonical" href="https://streamholland.com/privacybeleid" />
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
              <Shield className="w-6 h-6 text-green-400" />
              <span className="font-semibold">GDPR Compliant</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Privacybeleid
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Uw privacy is belangrijk voor ons. Hier leest u hoe Stream Holland uw persoonsgegevens beschermt en verwerkt.
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
              {/* Section 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">1. Verwerkingsverantwoordelijke</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Stream Holland, gevestigd in Rotterdam, Nederland, is verantwoordelijk voor de verwerking van uw persoonsgegevens zoals beschreven in dit privacybeleid.
                    </p>
                    <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                      <p className="text-gray-300"><strong className="text-white">Contact:</strong></p>
                      <p className="text-gray-300">E-mail: support@streamholland.com</p>
                      <p className="text-gray-300">Privacy: privacy@streamholland.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">2. Toepassingsgebied</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Dit privacybeleid is van toepassing op:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Bezoekers van onze website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Gebruikers van onze IPTV diensten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Abonnees van onze nieuwsbrief</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Personen die contact met ons opnemen</span>
                  </li>
                </ul>
              </motion.div>

              {/* Section 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">3. Welke gegevens verzamelen wij?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Wij verzamelen de volgende categorieën persoonsgegevens:
                </p>

                <div className="space-y-4">
                  <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                    <h3 className="font-bold text-white mb-2">Accountinformatie</h3>
                    <p className="text-gray-300 text-sm">Naam, e-mailadres, wachtwoord (versleuteld), locatie</p>
                  </div>
                  <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                    <h3 className="font-bold text-white mb-2">Contactgegevens</h3>
                    <p className="text-gray-300 text-sm">E-mail, WhatsApp nummer, supportberichten</p>
                  </div>
                  <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                    <h3 className="font-bold text-white mb-2">Transactie- en factureringsgegevens</h3>
                    <p className="text-gray-300 text-sm">Betalingsinformatie, factuurgegevens (via externe betaalproviders)</p>
                  </div>
                  <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                    <h3 className="font-bold text-white mb-2">Technische gegevens</h3>
                    <p className="text-gray-300 text-sm">IP-adres, gebruikslogs, apparaatinformatie, MAC-adres</p>
                  </div>
                  <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                    <h3 className="font-bold text-white mb-2">Cookiegegevens</h3>
                    <p className="text-gray-300 text-sm">Zie ons Cookie Beleid voor details</p>
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
                <h2 className="text-2xl font-bold mb-4">4. Rechtsgrondslag (AVG/GDPR)</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Wij verwerken uw persoonsgegevens op basis van:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong className="text-white">Uitvoering van de overeenkomst:</strong> Voor levering van IPTV diensten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong className="text-white">Gerechtvaardigd belang:</strong> Voor klantenservice en verbetering van diensten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong className="text-white">Wettelijke verplichting:</strong> Voor belastingadministratie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong className="text-white">Toestemming:</strong> Voor marketing en nieuwsbrieven</span>
                  </li>
                </ul>
              </motion.div>

              {/* Section 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">5. Delen van gegevens</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Wij delen persoonsgegevens alleen wanneer noodzakelijk met:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Verwerkers en dienstverleners (hosting, support software)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Betaalproviders (iDEAL, Bancontact)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Autoriteiten indien wettelijk verplicht</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Bij bedrijfsoverdracht (fusie, overname)</span>
                  </li>
                </ul>
              </motion.div>

              {/* Section 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">6. Bewaartermijnen</h2>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-brand-gray/30 pb-2">
                        <span className="text-gray-300">Accountgegevens</span>
                        <span className="text-white font-semibold">Tijdens abonnement + 24 maanden</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-brand-gray/30 pb-2">
                        <span className="text-gray-300">Boekhoudgegevens</span>
                        <span className="text-white font-semibold">7 jaar (fiscale verplichting)</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-brand-gray/30 pb-2">
                        <span className="text-gray-300">Support tickets</span>
                        <span className="text-white font-semibold">24 maanden</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Technische logs</span>
                        <span className="text-white font-semibold">12 maanden</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 7 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Wij gebruiken functionele cookies die noodzakelijk zijn voor het functioneren van de website. Analytics en marketing cookies worden alleen geplaatst met uw toestemming.
                </p>
                <a href="/cookie-beleid" className="text-brand-orange hover:underline font-semibold">
                  Lees ons volledige Cookie Beleid →
                </a>
              </motion.div>

              {/* Section 8 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">8. Uw rechten</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Op grond van de AVG heeft u de volgende rechten:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong className="text-white">Inzage:</strong> Opvragen welke gegevens wij van u verwerken</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong className="text-white">Correctie:</strong> Onjuiste gegevens laten corrigeren</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong className="text-white">Verwijdering:</strong> Uw gegevens laten verwijderen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong className="text-white">Dataportabiliteit:</strong> Uw gegevens in een leesbaar formaat ontvangen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong className="text-white">Bezwaar:</strong> Bezwaar maken tegen verwerking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong className="text-white">Beperking:</strong> Verwerking laten beperken</span>
                      </li>
                    </ul>
                    <div className="mt-4 bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                      <p className="text-gray-300">
                        <strong className="text-white">Uitoefenen van uw rechten?</strong><br />
                        Neem contact op via <a href="mailto:privacy@streamholland.com" className="text-brand-orange hover:underline">privacy@streamholland.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 9 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">9. Beveiliging</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies, misbruik en ongeautoriseerde toegang:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>SSL/TLS encryptie voor alle verbindingen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Versleutelde opslag van wachtwoorden</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Regelmatige security audits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Toegangscontrole en logging</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Section 10 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">10. Klachten</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Heeft u een klacht over de verwerking van uw persoonsgegevens? Neem dan eerst contact met ons op via privacy@streamholland.com.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens:
                </p>
                <div className="mt-4 bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                  <p className="text-gray-300">
                    <strong className="text-white">Autoriteit Persoonsgegevens</strong><br />
                    Website: <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">autoriteitpersoonsgegevens.nl</a><br />
                    Telefoon: 088 - 1805 250
                  </p>
                </div>
              </motion.div>

              {/* Section 11 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">11. Wijzigingen</h2>
                <p className="text-gray-300 leading-relaxed">
                  Wij kunnen dit privacybeleid van tijd tot tijd aanpassen. De meest recente versie is altijd te vinden op deze pagina. Bij belangrijke wijzigingen zullen wij u actief informeren.
                </p>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-brand-orange/20 to-blue-500/20 backdrop-blur-sm border border-brand-orange/30 rounded-2xl p-8 text-center"
              >
                <Mail className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Vragen over uw privacy?</h2>
                <p className="text-gray-300 mb-6">
                  Neem gerust contact met ons op. Wij helpen u graag verder.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:privacy@streamholland.com"
                    className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    E-mail Privacy Team
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

export default Privacybeleid;
