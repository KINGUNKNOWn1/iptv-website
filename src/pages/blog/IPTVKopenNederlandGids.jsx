import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaShieldAlt, FaTv, FaEuroSign, FaWhatsapp, FaPlayCircle } from 'react-icons/fa';
import SEO from '../../components/SEO';

const IPTVKopenNederlandGids = () => {
  const seoData = {
    title: 'IPTV Kopen Nederland 2024: Complete Gids + Beste Aanbieders',
    description: 'Complete gids voor IPTV kopen in Nederland 2024. Ontdek de beste aanbieders, prijzen vanaf €4/maand, installatie tips en alles wat je moet weten over IPTV abonnementen.',
    keywords: 'iptv kopen nederland, iptv abonnement nederland, beste iptv aanbieder, iptv prijzen, iptv bestellen',
    ogType: 'article'
  };

  const tableOfContents = [
    { title: 'Wat is IPTV?', id: 'wat-is-iptv' },
    { title: 'Waarom IPTV Kopen?', id: 'waarom-iptv' },
    { title: 'Beste IPTV Aanbieders 2024', id: 'beste-aanbieders' },
    { title: 'IPTV Prijzen Vergelijken', id: 'prijzen' },
    { title: 'Hoe IPTV Bestellen?', id: 'bestellen' },
    { title: 'Waar Op Letten?', id: 'waar-op-letten' },
    { title: 'Veelgestelde Vragen', id: 'faq' }
  ];

  const benefits = [
    { icon: <FaTv />, title: '30.500+ Kanalen', desc: 'Grootste aanbod van Nederland' },
    { icon: <FaEuroSign />, title: 'Vanaf €4/maand', desc: 'Tot 10x goedkoper dan kabel-TV' },
    { icon: <FaPlayCircle />, title: '150.000+ VOD', desc: 'Films en series on-demand' },
    { icon: <FaShieldAlt />, title: '99.9% Uptime', desc: 'Stabiele, betrouwbare service' }
  ];

  const providers = [
    {
      name: 'Stream Holland',
      rating: '4.9/5',
      price: '€4/maand',
      channels: '30.500+',
      quality: '4K/HD',
      trial: '24 uur gratis',
      pros: ['Grootste kanaalaanbod', 'Nederlandse support 24/7', 'Snelle activering'],
      recommended: true
    },
    {
      name: 'Concurrent A',
      rating: '4.2/5',
      price: '€8/maand',
      channels: '12.000',
      quality: 'HD',
      trial: 'Nee',
      pros: ['Goede kwaliteit', 'Redelijke prijs'],
      recommended: false
    },
    {
      name: 'Concurrent B',
      rating: '3.8/5',
      price: '€15/maand',
      channels: '8.000',
      quality: 'HD',
      trial: 'Nee',
      pros: ['Bekend merk'],
      recommended: false
    }
  ];

  return (
    <>
      <SEO {...seoData} />
      <div className="min-h-screen bg-brand-black text-white pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-brand-black via-blue-900 to-brand-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                IPTV Kopen Nederland 2024: <span className="text-brand-orange">Complete Gids</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Alles wat je moet weten over IPTV kopen in Nederland. Beste aanbieders, prijzen, tips en meer.
              </p>
              <p className="text-sm text-gray-400">
                📅 Laatst bijgewerkt: September 2026 • ⏱️ Leestijd: 8 minuten
              </p>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-8 bg-brand-black/90/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-brand-black p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">📋 Inhoudsopgave</h2>
              <ul className="grid md:grid-cols-2 gap-2">
                {tableOfContents.map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.id}`} className="text-brand-orange hover:text-[#E85D00] transition-colors">
                      {index + 1}. {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-12 bg-brand-black">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Wat is IPTV */}
            <section id="wat-is-iptv" className="mb-16">
              <h2 className="text-3xl font-heading font-bold mb-6 text-brand-orange">Wat is IPTV?</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 mb-4">
                  <strong>IPTV (Internet Protocol Television)</strong> is televisie kijken via internet in plaats van via kabel, satelliet of digitenne. Met IPTV kun je live TV kijken, films en series streamen, en programma's terugkijken - allemaal via je internetverbinding.
                </p>
                <p className="text-gray-300 mb-4">
                  Het grote voordeel van IPTV is dat je toegang hebt tot <strong>duizenden internationale zenders</strong>, veel meer dan bij traditionele TV-aanbieders. Bovendien is IPTV vaak <strong>veel goedkoper</strong> dan een standaard TV-abonnement.
                </p>
                <div className="bg-blue-900/30 border-l-4 border-blue-500 p-6 my-6 rounded">
                  <p className="text-white font-semibold mb-2">💡 Wist je dat?</p>
                  <p className="text-gray-300">
                    Met IPTV kun je kijken op elk apparaat met internet: Smart TV, telefoon, tablet, laptop, of Fire Stick. Je bent niet meer gebonden aan één TV-toestel!
                  </p>
                </div>
              </div>
            </section>

            {/* Waarom IPTV */}
            <section id="waarom-iptv" className="mb-16">
              <h2 className="text-3xl font-heading font-bold mb-6 text-brand-orange">Waarom IPTV Kopen?</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-brand-black/90 p-6 rounded-lg">
                    <div className="text-4xl text-brand-orange mb-3">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.desc}</p>
                  </div>
                ))}
              </div>
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold mb-4">Voordelen van IPTV:</h3>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>✅ <strong>Enorm kanaalaanbod:</strong> 30.500+ zenders uit 100+ landen</li>
                  <li>✅ <strong>Goedkoper:</strong> Tot 10x goedkoper dan Ziggo, KPN of Odido</li>
                  <li>✅ <strong>Flexibel:</strong> Kijk op elk apparaat, overal ter wereld</li>
                  <li>✅ <strong>HD/4K kwaliteit:</strong> Kristalhelder beeld en geluid</li>
                  <li>✅ <strong>Geen installateur:</strong> Zelf installeren in 5 minuten</li>
                  <li>✅ <strong>VOD-bibliotheek:</strong> 150.000+ films en series on-demand</li>
                  <li>✅ <strong>Timeshift & Catch-up:</strong> Terugkijken tot 7 dagen</li>
                </ul>
              </div>
            </section>

            {/* Beste Aanbieders */}
            <section id="beste-aanbieders" className="mb-16">
              <h2 className="text-3xl font-heading font-bold mb-6 text-brand-orange">Beste IPTV Aanbieders Nederland 2024</h2>
              <p className="text-gray-300 mb-8">
                We hebben de top IPTV-aanbieders in Nederland getest en vergeleken op prijs, kanaalaanbod, kwaliteit en klantenservice:
              </p>

              <div className="space-y-6">
                {providers.map((provider, index) => (
                  <div
                    key={index}
                    className={`bg-brand-black/90 p-6 rounded-lg border-2 ${
                      provider.recommended ? 'border-blue-500' : 'border-transparent'
                    }`}
                  >
                    {provider.recommended && (
                      <div className="bg-brand-orange text-white px-4 py-1 rounded-full inline-block mb-4 text-sm font-semibold">
                        🏆 Onze #1 Keuze
                      </div>
                    )}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">{provider.name}</h3>
                        <p className="text-yellow-400">⭐ {provider.rating}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-brand-orange">{provider.price}</p>
                        <p className="text-sm text-gray-400">12 maanden</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-400">Kanalen</p>
                        <p className="font-bold">{provider.channels}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Kwaliteit</p>
                        <p className="font-bold">{provider.quality}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Proefperiode</p>
                        <p className="font-bold">{provider.trial}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">Voordelen:</p>
                      <ul className="space-y-1">
                        {provider.pros.map((pro, i) => (
                          <li key={i} className="text-gray-300 flex items-center gap-2">
                            <FaCheckCircle className="text-green-400" /> {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {provider.recommended && (
                      <Link
                        to="/iptv-abonnement"
                        className="block w-full text-center bg-brand-orange hover:bg-[#E85D00] text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                      >
                        Bekijk Abonnementen →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Prijzen */}
            <section id="prijzen" className="mb-16">
              <h2 className="text-3xl font-heading font-bold mb-6 text-brand-orange">IPTV Prijzen Vergelijken</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-brand-black/90 rounded-lg">
                  <thead className="bg-slate-700">
                    <tr>
                      <th className="p-4 text-left">Looptijd</th>
                      <th className="p-4 text-left">Stream Holland</th>
                      <th className="p-4 text-left">Ziggo</th>
                      <th className="p-4 text-left">KPN</th>
                      <th className="p-4 text-left">Besparing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-slate-700">
                      <td className="p-4">3 maanden</td>
                      <td className="p-4 font-bold text-brand-orange">€23 (€7,67/m)</td>
                      <td className="p-4">€75</td>
                      <td className="p-4">€90</td>
                      <td className="p-4 text-green-400">€52-67</td>
                    </tr>
                    <tr className="border-t border-slate-700">
                      <td className="p-4">6 maanden</td>
                      <td className="p-4 font-bold text-brand-orange">€32 (€5,33/m)</td>
                      <td className="p-4">€150</td>
                      <td className="p-4">€180</td>
                      <td className="p-4 text-green-400">€118-148</td>
                    </tr>
                    <tr className="border-t border-slate-700 bg-blue-900/20">
                      <td className="p-4">12 maanden</td>
                      <td className="p-4 font-bold text-brand-orange">€48 (€4,00/m)</td>
                      <td className="p-4">€300</td>
                      <td className="p-4">€360</td>
                      <td className="p-4 text-green-400 font-bold">€252-312</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                * Prijzen zijn indicatief en kunnen variëren. Traditionele aanbieders bieden vaak minder kanalen dan Stream Holland.
              </p>
            </section>

            {/* Bestellen */}
            <section id="bestellen" className="mb-16">
              <h2 className="text-3xl font-heading font-bold mb-6 text-brand-orange">Hoe IPTV Bestellen? (5 Minuten)</h2>
              <div className="space-y-6">
                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                    <h3 className="text-xl font-bold">Kies Je Abonnement</h3>
                  </div>
                  <p className="text-gray-300">
                    Bekijk onze <Link to="/iptv-abonnement" className="text-brand-orange underline">abonnementspagina</Link> en kies de looptijd die bij je past. We adviseren 12 maanden voor de beste prijs.
                  </p>
                </div>

                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                    <h3 className="text-xl font-bold">Neem Contact Op</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Stuur ons een WhatsApp-bericht met je gekozen abonnement. Onze klantenservice helpt je direct verder.
                  </p>
                  <a
                    href="https://wa.me/18653169315?text=Ik%20wil%20graag%20IPTV%20bestellen"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                  >
                    <FaWhatsapp className="text-xl" /> Bestel via WhatsApp
                  </a>
                </div>

                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                    <h3 className="text-xl font-bold">Betaal Veilig</h3>
                  </div>
                  <p className="text-gray-300">
                    Betaal veilig via iDEAL, creditcard of andere methoden. Direct na betaling ontvang je je inloggegevens.
                  </p>
                </div>

                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                    <h3 className="text-xl font-bold">Installeer & Kijk</h3>
                  </div>
                  <p className="text-gray-300">
                    Download de app op je apparaat, log in met je gegevens, en begin met kijken. Binnen 5 minuten actief!
                  </p>
                </div>
              </div>
            </section>

            {/* Waar op letten */}
            <section id="waar-op-letten" className="mb-16">
              <h2 className="text-3xl font-heading font-bold mb-6 text-brand-orange">Waar Op Letten Bij IPTV Kopen?</h2>
              <div className="prose prose-invert max-w-none">
                <div className="bg-yellow-900/30 border-l-4 border-yellow-500 p-6 my-6 rounded">
                  <p className="text-white font-semibold mb-2">⚠️ Let Op Deze Punten:</p>
                  <ul className="text-gray-300 space-y-2">
                    <li><strong>Kanaalaanbod:</strong> Controleer of alle kanalen die je wilt hebben beschikbaar zijn</li>
                    <li><strong>Kwaliteit:</strong> Vraag naar HD/4K-beschikbaarheid en uptime-garantie</li>
                    <li><strong>Nederlandse support:</strong> Belangrijk voor hulp bij problemen</li>
                    <li><strong>Proefperiode:</strong> Test eerst voordat je langdurig abonnement neemt</li>
                    <li><strong>Apparaten:</strong> Werkt het op jouw TV/apparaten?</li>
                    <li><strong>Geen automatische verlenging:</strong> Voorkom verrassingen</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mb-4 mt-8">Vereisten voor IPTV:</h3>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>✅ <strong>Internetverbinding:</strong> Minimaal 25 Mbps voor HD, 50+ Mbps voor 4K</li>
                  <li>✅ <strong>Compatibel apparaat:</strong> Smart TV, Fire Stick, Android box, etc.</li>
                  <li>✅ <strong>IPTV-app:</strong> Meestal gratis te downloaden</li>
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-heading font-bold mb-6 text-brand-orange">Veelgestelde Vragen</h2>
              <div className="space-y-4">
                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Is IPTV legaal in Nederland?</h3>
                  <p className="text-gray-300">
                    Het gebruik van IPTV-diensten is legaal in Nederland. Zorg wel dat je een betrouwbare aanbieder kiest met de juiste licenties. Lees meer in ons <Link to="/blog/is-iptv-legaal-nederland" className="text-brand-orange underline">artikel over IPTV legaliteit</Link>.
                  </p>
                </div>

                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Wat is de beste IPTV-aanbieder?</h3>
                  <p className="text-gray-300">
                    <Link to="/" className="text-brand-orange underline">Stream Holland</Link> is de beste keuze met 30.500+ kanalen, 99.9% uptime, Nederlandse support 24/7 en prijzen vanaf €4/maand.
                  </p>
                </div>

                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Kan ik IPTV uitproberen?</h3>
                  <p className="text-gray-300">
                    Ja! Stream Holland biedt een 24-uurs gratis proefperiode. Test het risico vrij voordat je een abonnement afsluit.
                  </p>
                </div>

                <div className="bg-brand-black/90 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Hoeveel apparaten kan ik gebruiken?</h3>
                  <p className="text-gray-300">
                    Standaard 1 apparaat tegelijk. Meerdere apparaten? Vraag naar multi-device opties via <Link to="/contact" className="text-brand-orange underline">contact</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-brand-orange to-purple-600 p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Klaar om IPTV te Bestellen?</h2>
              <p className="text-xl mb-6">
                Start vandaag nog met Stream Holland en geniet van 30.500+ kanalen voor maar €4/maand!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/iptv-abonnement"
                  className="px-8 py-4 bg-brand-black text-brand-orange font-bold rounded-lg hover:bg-white/5 transition-all transform hover:scale-105"
                >
                  Bekijk Abonnementen
                </Link>
                <a
                  href="https://wa.me/18653169315?text=Ik%20wil%20meer%20weten%20over%20IPTV"
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all transform hover:scale-105"
                >
                  <FaWhatsapp className="inline mr-2" /> Vraag Advies
                </a>
              </div>
            </section>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-12 bg-brand-black/90/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">📖 Gerelateerde Artikelen</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/blog/beste-iptv-apps-2024" className="bg-brand-black p-4 rounded-lg hover:bg-brand-black/90 transition-colors">
                <h3 className="font-bold mb-2">Beste IPTV Apps 2024</h3>
                <p className="text-sm text-gray-400">Ontdek welke apps het best werken voor IPTV →</p>
              </Link>
              <Link to="/blog/is-iptv-legaal-nederland" className="bg-brand-black p-4 rounded-lg hover:bg-brand-black/90 transition-colors">
                <h3 className="font-bold mb-2">Is IPTV Legaal in Nederland?</h3>
                <p className="text-sm text-gray-400">Alles over de legaliteit van IPTV →</p>
              </Link>
              <Link to="/blog/iptv-installeren-samsung-tv" className="bg-brand-black p-4 rounded-lg hover:bg-brand-black/90 transition-colors">
                <h3 className="font-bold mb-2">IPTV Installeren op Samsung TV</h3>
                <p className="text-sm text-gray-400">Stap-voor-stap installatie handleiding →</p>
              </Link>
              <Link to="/blog/nederlandse-iptv-kanalen-lijst" className="bg-brand-black p-4 rounded-lg hover:bg-brand-black/90 transition-colors">
                <h3 className="font-bold mb-2">Nederlandse IPTV Kanalen Lijst</h3>
                <p className="text-sm text-gray-400">Complete lijst van Nederlandse zenders →</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPTVKopenNederlandGids;
