import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaMobileAlt, FaTv, FaStar, FaAndroid, FaApple, FaWhatsapp } from 'react-icons/fa';
import SEO from '../../components/SEO';

const BesteIPTVApps2024 = () => {
  const seoData = {
    title: 'Beste IPTV Apps 2024: Top 10 Apps voor Android, iOS & Smart TV',
    description: 'Ontdek de beste IPTV apps van 2024. Vergelijk IPTV Smarters, TiviMate, GSE Smart IPTV en meer. Gratis downloads, installatie tips en reviews.',
    keywords: 'beste iptv app, iptv smarters, tivimate, gse smart iptv, iptv app android, iptv app ios',
    ogType: 'article'
  };

  const apps = [
    {
      name: 'IPTV Smarters Pro',
      rating: 4.8,
      platforms: ['Android', 'iOS', 'Fire Stick', 'Smart TV'],
      price: 'Gratis',
      pros: ['Gebruiksvriendelijk', 'EPG ondersteuning', 'Multi-scherm', 'Ouderlijk toezicht'],
      cons: ['Advertenties in gratis versie'],
      recommended: true,
      icon: <FaMobileAlt />
    },
    {
      name: 'TiviMate IPTV Player',
      rating: 4.9,
      platforms: ['Android', 'Fire Stick', 'Android TV'],
      price: '€4,99/jaar',
      pros: ['Beste interface', 'EPG tijdsverschuiving', 'Opname functie', 'Meerdere playlists'],
      cons: ['Alleen Android', 'Premium voor alle functies'],
      recommended: true,
      icon: <FaTv />
    },
    {
      name: 'GSE Smart IPTV',
      rating: 4.6,
      platforms: ['iOS', 'Apple TV', 'macOS'],
      price: 'Gratis',
      pros: ['Beste iOS app', 'Chromecast ondersteuning', 'M3U/Xtream API', 'Regelmatige updates'],
      cons: ['Complexe interface voor beginners'],
      recommended: true,
      icon: <FaApple />
    },
    {
      name: 'Perfect Player',
      rating: 4.5,
      platforms: ['Android', 'Fire Stick'],
      price: 'Gratis',
      pros: ['Licht en snel', 'Veel aanpassingen', 'Gratis zonder beperkingen'],
      cons: ['Gedateerde interface', 'Minder gebruiksvriendelijk'],
      recommended: false,
      icon: <FaAndroid />
    }
  ];

  return (
    <>
      <SEO {...seoData} />
      <div className="min-h-screen bg-brand-black text-white pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-brand-black via-purple-900 to-brand-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Beste IPTV Apps <span className="text-purple-400">2024</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Vergelijk de top IPTV apps voor Android, iOS, Fire Stick en Smart TV. Uitgebreide reviews en installatie-instructies.
              </p>
              <p className="text-sm text-gray-400">📅 Laatst bijgewerkt: September 2026 • ⏱️ Leestijd: 6 minuten</p>
            </motion.div>
          </div>
        </section>

        <article className="py-12 bg-brand-black">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Intro */}
            <section className="mb-12">
              <p className="text-lg text-gray-300 mb-4">
                Een goede <strong>IPTV app</strong> maakt het verschil tussen frustratie en genieten van je favoriete content. We hebben de populairste IPTV apps getest en vergeleken op gebruiksgemak, functies, en compatibiliteit.
              </p>
              <div className="bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded">
                <p className="text-white font-semibold mb-2">💡 Wist je dat?</p>
                <p className="text-gray-300">
                  Met <Link to="/" className="text-purple-400 underline">Stream Holland</Link> werken alle apps hieronder perfect. Ontvang direct je M3U-link en Xtream API codes bij aanmelding!
                </p>
              </div>
            </section>

            {/* Top Apps */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-purple-400">Top 10 IPTV Apps 2024</h2>
              <div className="space-y-6">
                {apps.map((app, index) => (
                  <div key={index} className={`bg-brand-black/90 p-6 rounded-lg border-2 ${app.recommended ? 'border-purple-500' : 'border-transparent'}`}>
                    {app.recommended && (
                      <div className="bg-purple-600 text-white px-4 py-1 rounded-full inline-block mb-4 text-sm font-semibold">
                        ⭐ Top Keuze
                      </div>
                    )}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl text-purple-400">{app.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold">{app.name}</h3>
                          <p className="text-yellow-400">
                            {'⭐'.repeat(Math.floor(app.rating))} {app.rating}/5
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-purple-400">{app.price}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-400 mb-2">Platforms:</p>
                      <div className="flex flex-wrap gap-2">
                        {app.platforms.map((platform, i) => (
                          <span key={i} className="bg-slate-700 px-3 py-1 rounded text-sm">{platform}</span>
                        ))}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-green-400 mb-2">✅ Voordelen:</p>
                        <ul className="space-y-1 text-sm">
                          {app.pros.map((pro, i) => (
                            <li key={i} className="text-gray-300">• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-orange-400 mb-2">⚠️ Nadelen:</p>
                        <ul className="space-y-1 text-sm">
                          {app.cons.map((con, i) => (
                            <li key={i} className="text-gray-300">• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Choose */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-purple-400">Hoe de Juiste IPTV App Kiezen?</h2>
              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-bold mb-4">Let op deze factoren:</h3>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>✅ <strong>Platform:</strong> Werkt de app op jouw apparaat? (Android/iOS/Fire Stick)</li>
                  <li>✅ <strong>Gebruiksgemak:</strong> Is de interface intuïtief en overzichtelijk?</li>
                  <li>✅ <strong>EPG-ondersteuning:</strong> Elektronische programma gids voor overzicht</li>
                  <li>✅ <strong>Multi-scherm:</strong> Meerdere streams tegelijk bekijken</li>
                  <li>✅ <strong>Ouderlijk toezicht:</strong> Belangrijk bij kinderen in huis</li>
                  <li>✅ <strong>Updates:</strong> Regelmatige updates en bug fixes</li>
                </ul>

                <div className="bg-brand-black/90 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-4">Onze Aanbevelingen per Apparaat:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li><strong className="text-purple-400">Android:</strong> TiviMate (beste interface) of IPTV Smarters (gratis)</li>
                    <li><strong className="text-purple-400">iOS/Apple TV:</strong> GSE Smart IPTV (beste iOS app)</li>
                    <li><strong className="text-purple-400">Fire Stick:</strong> TiviMate of IPTV Smarters</li>
                    <li><strong className="text-purple-400">Smart TV:</strong> IPTV Smarters (meest compatibel)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Installation Guide */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-purple-400">IPTV App Installeren (3 Stappen)</h2>
              <div className="space-y-4">
                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold">1</div>
                    <h3 className="text-xl font-bold">Download de App</h3>
                  </div>
                  <p className="text-gray-300">
                    Download je gekozen app uit de App Store, Google Play, of Amazon App Store. Alle apps hierboven zijn gratis te downloaden.
                  </p>
                </div>
                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold">2</div>
                    <h3 className="text-xl font-bold">Voeg je IPTV-gegevens Toe</h3>
                  </div>
                  <p className="text-gray-300">
                    Open de app en voeg je M3U-link of Xtream API codes toe. Deze ontvang je van je <Link to="/iptv-abonnement" className="text-purple-400 underline">IPTV-aanbieder</Link>.
                  </p>
                </div>
                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold">3</div>
                    <h3 className="text-xl font-bold">Begin met Kijken!</h3>
                  </div>
                  <p className="text-gray-300">
                    Je kanalen worden geladen. Kies een zender en geniet van je content in HD of 4K kwaliteit!
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-purple-400">Veelgestelde Vragen</h2>
              <div className="space-y-4">
                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Welke IPTV app is het beste?</h3>
                  <p className="text-gray-300">
                    <strong>TiviMate</strong> heeft de beste interface en functies, maar is alleen voor Android. Voor iOS is <strong>GSE Smart IPTV</strong> de beste keuze. <strong>IPTV Smarters</strong> werkt uitstekend op alle platforms en is gratis.
                  </p>
                </div>
                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Zijn IPTV apps gratis?</h3>
                  <p className="text-gray-300">
                    Ja, de meeste IPTV apps zijn gratis te downloaden. Sommige zoals TiviMate hebben een betaalde premium versie (€5/jaar) met extra functies. Je hebt wel een IPTV-abonnement nodig voor de content zelf.
                  </p>
                </div>
                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Werkt elke IPTV app met Stream Holland?</h3>
                  <p className="text-gray-300">
                    Ja! <Link to="/" className="text-purple-400 underline">Stream Holland</Link> werkt met alle populaire IPTV apps. Je ontvangt zowel M3U-links als Xtream API codes, compatibel met TiviMate, IPTV Smarters, GSE en meer.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-purple-600 to-brand-orange p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Klaar om te Beginnen met IPTV?</h2>
              <p className="text-xl mb-6">
                Bestel Stream Holland en ontvang direct je inloggegevens voor elke IPTV app!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/iptv-abonnement" className="px-8 py-4 bg-brand-black text-purple-600 font-bold rounded-lg hover:bg-white/5 transition-all">
                  Bekijk Abonnementen
                </Link>
                <a href="https://wa.me/31612345678" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all">
                  <FaWhatsapp className="inline mr-2" /> WhatsApp Advies
                </a>
              </div>
            </section>
          </div>
        </article>

        {/* Related */}
        <section className="py-12 bg-brand-black/90/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">📖 Gerelateerde Artikelen</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/blog/iptv-kopen-nederland-complete-gids" className="bg-brand-black p-4 rounded-lg hover:bg-brand-black/90 transition-colors">
                <h3 className="font-bold mb-2">IPTV Kopen Nederland Complete Gids</h3>
                <p className="text-sm text-gray-400">Alles over IPTV kopen in Nederland →</p>
              </Link>
              <Link to="/blog/iptv-installeren-samsung-tv" className="bg-brand-black p-4 rounded-lg hover:bg-brand-black/90 transition-colors">
                <h3 className="font-bold mb-2">IPTV Installeren op Samsung TV</h3>
                <p className="text-sm text-gray-400">Stap-voor-stap handleiding →</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BesteIPTVApps2024;
