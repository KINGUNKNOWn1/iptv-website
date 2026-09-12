import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Scale, CreditCard, Clock, Shield, AlertTriangle, Globe } from 'lucide-react';

const AlgemeneVoorwaarden = () => {
  return (
    <>
      <Helmet>
        <title>Algemene Voorwaarden - Stream Holland</title>
        <meta name="description" content="Algemene voorwaarden van Stream Holland IPTV diensten. Lees de voorwaarden voor gebruik van onze IPTV service." />
        <link rel="canonical" href="https://streamholland.com/algemene-voorwaarden" />
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
              <Scale className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">Nederlands Recht</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Algemene Voorwaarden
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, bestellingen, overeenkomsten en leveringen van Stream Holland.
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
                    <FileText className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">1. Definities</h2>
                    <div className="space-y-3">
                      <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                        <p className="text-gray-300"><strong className="text-white">Dienstverlener:</strong> Stream Holland, gevestigd in Rotterdam, Nederland</p>
                      </div>
                      <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                        <p className="text-gray-300"><strong className="text-white">Klant:</strong> Natuurlijke of rechtspersoon die gebruik maakt van de diensten</p>
                      </div>
                      <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                        <p className="text-gray-300"><strong className="text-white">Diensten:</strong> IPTV abonnementen en bijbehorende dienstverlening</p>
                      </div>
                      <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                        <p className="text-gray-300"><strong className="text-white">Overeenkomst:</strong> De tussen Stream Holland en Klant gesloten overeenkomst</p>
                      </div>
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
                <h2 className="text-2xl font-bold mb-4">2. Toepasselijkheid</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, bestellingen, overeenkomsten en leveringen van Stream Holland, tenzij uitdrukkelijk schriftelijk anders is overeengekomen.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Door gebruik te maken van onze diensten gaat u akkoord met deze voorwaarden. Afwijkende voorwaarden van de klant worden uitdrukkelijk van de hand gewezen.
                </p>
              </motion.div>

              {/* Section 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">3. Diensten & Beschikbaarheid</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Stream Holland biedt IPTV diensten aan via internet. De dienstverlening omvat:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-orange mt-1">•</span>
                      <span>Toegang tot 30.500+ live TV kanalen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-orange mt-1">•</span>
                      <span>Video on Demand (VOD) bibliotheek</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-orange mt-1">•</span>
                      <span>24/7 Nederlandse klantenservice</span>
                    </li>
                  </ul>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-4">
                    <p className="text-gray-300 text-sm">
                      <strong className="text-yellow-400">Let op:</strong> Beschikbaarheid van specifieke kanalen kan wijzigen zonder voorafgaande kennisgeving. Stream Holland is afhankelijk van derden voor content levering.
                    </p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    De klant is verantwoordelijk voor een geschikte internetverbinding (minimaal 10 Mbps voor HD, 25 Mbps voor 4K) en compatibele apparatuur.
                  </p>
                </div>
              </motion.div>

              {/* Section 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">4. Bestellen & Betaling</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      <strong className="text-white">Prijzen:</strong> Alle vermelde prijzen zijn inclusief BTW, tenzij anders aangegeven.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      <strong className="text-white">Betaling:</strong> Betaling dient volledig vooruit te geschieden via de aangeboden betaalmethoden (iDEAL, Bancontact, credit card). Abonnementen worden pas geactiveerd na ontvangst van de betaling.
                    </p>
                    <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                      <p className="text-gray-300">
                        <strong className="text-white">Niet-betaling:</strong> Bij niet-tijdige betaling behoudt Stream Holland zich het recht voor om de dienstverlening op te schorten of te beëindigen zonder voorafgaande waarschuwing.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 5 */}
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
                    <h2 className="text-2xl font-bold mb-4">5. Looptijd & Beëindiging</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Abonnementen worden aangeboden voor vaste perioden:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30 text-center">
                        <div className="text-2xl font-bold text-brand-orange mb-1">3 maanden</div>
                        <div className="text-sm text-gray-400">Korte test periode</div>
                      </div>
                      <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30 text-center">
                        <div className="text-2xl font-bold text-brand-orange mb-1">6 maanden</div>
                        <div className="text-sm text-gray-400">Populaire keuze</div>
                      </div>
                      <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30 text-center">
                        <div className="text-2xl font-bold text-brand-orange mb-1">12 maanden</div>
                        <div className="text-sm text-gray-400">Beste prijs</div>
                      </div>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <p className="text-gray-300">
                        <strong className="text-green-400">Geen automatische verlenging:</strong> Abonnementen worden NIET automatisch verlengd. Na afloop van de gekozen periode stopt de dienstverlening automatisch. U kunt altijd handmatig verlengen.
                      </p>
                    </div>
                    <p className="text-gray-300 leading-relaxed mt-4">
                      <strong className="text-white">Beëindiging door aanbieder:</strong> Stream Holland kan de overeenkomst onmiddellijk beëindigen bij misbruik, fraude, doorverkoop of schending van deze voorwaarden.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">6. Gebruik & Verantwoordelijkheden</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      <strong className="text-white">Toegestaan gebruik:</strong>
                    </p>
                    <ul className="space-y-2 text-gray-300 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Persoonlijk, niet-commercieel gebruik</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Gebruik binnen uw huishouden</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Maximaal 1 gelijktijdige stream (tenzij anders vermeld)</span>
                      </li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      <strong className="text-white">Verboden:</strong>
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✗</span>
                        <span>Delen van inloggegevens met derden</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✗</span>
                        <span>Doorverkoop of commercieel gebruik</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✗</span>
                        <span>Gebruik van VPN's die de service verstoren</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✗</span>
                        <span>Reverse engineering of hacking van de dienst</span>
                      </li>
                    </ul>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-4">
                      <p className="text-gray-300 text-sm">
                        <strong className="text-red-400">Waarschuwing:</strong> Schending van deze gebruiksvoorwaarden leidt tot onmiddellijke beëindiging van het abonnement zonder restitutie.
                      </p>
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
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">7. Aansprakelijkheid & Garanties</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Stream Holland spant zich in om een betrouwbare dienst te leveren, maar:
                    </p>
                    <ul className="space-y-2 text-gray-300 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>Aansprakelijkheid is beperkt tot het bedrag dat de klant heeft betaald voor het betreffende abonnement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>Stream Holland is niet verantwoordelijk voor verstoringen, technische problemen of dataverlies veroorzaakt door externe factoren (internet, stroomuitval, externe servers)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>Stream Holland garandeert een uptime van 99.9%, maar kan niet aansprakelijk worden gesteld voor tijdelijke onderbrekingen</span>
                      </li>
                    </ul>
                    <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                      <p className="text-gray-300">
                        <strong className="text-white">Force majeure:</strong> Stream Holland is niet aansprakelijk bij overmacht, waaronder begrepen: oorlog, natuurrampen, stroomuitval, internetuitval, acties van derden en overheidsmaatregelen.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 8 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">8. Intellectueel Eigendom</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Alle content, materialen en intellectuele eigendomsrechten blijven eigendom van de respectievelijke rechthebbenden. Het is de klant niet toegestaan om:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Content te kopiëren, distribueren of openbaar te maken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Merken, logo's of andere beschermde materialen te gebruiken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>De software of technologie achter de dienst te reverse engineeren</span>
                  </li>
                </ul>
              </motion.div>

              {/* Section 9 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">9. Privacy & Gegevensbescherming</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Stream Holland verwerkt persoonsgegevens in overeenstemming met de AVG (GDPR). Voor meer informatie over hoe wij uw gegevens verwerken, zie ons <a href="/privacybeleid" className="text-brand-orange hover:underline">Privacybeleid</a>.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Wij implementeren passende technische en organisatorische maatregelen om uw gegevens te beschermen.
                </p>
              </motion.div>

              {/* Section 10 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">10. Toepasselijk Recht & Geschillen</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Op deze algemene voorwaarden en alle overeenkomsten tussen Stream Holland en de klant is <strong className="text-white">Nederlands recht</strong> van toepassing.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Geschillen worden voorgelegd aan de bevoegde rechter in <strong className="text-white">Rotterdam, Nederland</strong>, tenzij dwingend recht anders voorschrijft.
                    </p>
                    <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                      <p className="text-gray-300">
                        <strong className="text-white">Geschillenregeling:</strong> Wij streven ernaar om eventuele geschillen in onderling overleg op te lossen. Neem eerst contact op met onze klantenservice voordat u juridische stappen onderneemt.
                      </p>
                    </div>
                  </div>
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
                  Stream Holland behoudt zich het recht voor om deze algemene voorwaarden te wijzigen. Wijzigingen worden op deze pagina gepubliceerd en treden in werking 30 dagen na publicatie. Bestaande overeenkomsten blijven onderworpen aan de voorwaarden die golden op het moment van afsluiting.
                </p>
              </motion.div>

              {/* Section 12 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">12. Contact</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Voor vragen over deze algemene voorwaarden kunt u contact opnemen met:
                </p>
                <div className="bg-brand-black/50 rounded-lg p-4 border border-brand-gray/30">
                  <p className="text-gray-300">
                    <strong className="text-white">Stream Holland</strong><br />
                    Rotterdam, Nederland<br />
                    E-mail: <a href="mailto:support@streamholland.com" className="text-brand-orange hover:underline">support@streamholland.com</a><br />
                    WhatsApp: <a href="https://wa.me/18653169315" className="text-brand-orange hover:underline">+1 8653169315</a>
                  </p>
                </div>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-brand-orange/20 to-blue-500/20 backdrop-blur-sm border border-brand-orange/30 rounded-2xl p-8 text-center"
              >
                <FileText className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Vragen over onze voorwaarden?</h2>
                <p className="text-gray-300 mb-6">
                  Ons team staat klaar om u te helpen. Neem gerust contact op.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:support@streamholland.com"
                    className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    E-mail Support
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

export default AlgemeneVoorwaarden;
