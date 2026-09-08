import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Pricing from '../components/Pricing';
import ComparisonTable from '../components/ComparisonTable';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

const Prijzen = () => {
  const guarantees = [
    'Geen automatische verlenging - je abonnement stopt automatisch na de gekozen looptijd',
    'iDEAL betaling - betaal veilig met de meest gebruikte Nederlandse betaalmethode',
    'Direct actief - ontvang je inloggegevens binnen 5 minuten na betaling',
    '30.500+ kanalen - toegang tot alle Nederlandse en internationale zenders',
    '99.9% uptime garantie - betrouwbare service zonder buffering',
    'Nederlandse support 24/7 - hulp via WhatsApp wanneer je die nodig hebt'
  ];

  return (
    <>
      <SEO
        title="IPTV Prijzen Nederland | Abonnement vanaf €48/jaar - IPTV4K"
        description="IPTV abonnement prijzen: 3 maanden €23, 6 maanden €32, 12 maanden €48. Geen automatische verlenging. iDEAL betaling. 30.500+ kanalen. Bestel nu!"
        keywords="iptv prijzen, iptv abonnement prijzen, iptv kopen prijs, goedkope iptv, iptv kosten"
      />

      <div className="min-h-screen bg-slate-900 pt-32">
        {/* Header */}
        <section className="pb-12">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IPTV Abonnement Prijzen
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transparante prijzen zonder verborgen kosten. Kies de looptijd die bij jou past.
                Bekijk onze <Link to="/iptv-kopen" className="text-blue-400 hover:text-blue-300 underline">IPTV kopen</Link> pagina voor meer informatie over wat je krijgt.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Component */}
        <Pricing />

        {/* Comparison Table */}
        <ComparisonTable />

        {/* What You Get */}
        <section className="py-20 bg-slate-800">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Wat krijg je bij elk IPTV abonnement?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Ongeacht welk <Link to="/iptv-abonnement" className="text-blue-400 hover:text-blue-300 underline">IPTV abonnement</Link> je kiest, je krijgt altijd toegang tot ons volledige aanbod
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-slate-900 border border-slate-700 rounded-xl p-6"
                >
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-xl" />
                  <span className="text-gray-300">{guarantee}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Snippet */}
        <section className="py-20 bg-slate-900">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Veelgestelde vragen over prijzen
              </h2>
            </motion.div>

            <div className="space-y-6">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Wat is de goedkoopste optie?
                </h3>
                <p className="text-gray-400">
                  Het 12 maanden abonnement is de voordeligste optie: slechts €48 per jaar (€4 per maand).
                  Dat is goedkoper dan de meeste <Link to="/iptv-nederland" className="text-blue-400 hover:text-blue-300 underline">Nederlandse IPTV aanbieders</Link>.
                </p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Kan ik betalen met iDEAL?
                </h3>
                <p className="text-gray-400">
                  Ja, we accepteren iDEAL als betaalmethode. Dit is de veiligste en meest gebruikte betaalmethode in Nederland.
                  Neem <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline">contact</Link> op via WhatsApp om te bestellen.
                </p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Wordt mijn abonnement automatisch verlengd?
                </h3>
                <p className="text-gray-400">
                  Nee, absoluut niet. Je abonnement stopt automatisch na de gekozen looptijd. Geen verrassingen, geen ongewenste verlengingen.
                </p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Op hoeveel apparaten kan ik kijken?
                </h3>
                <p className="text-gray-400">
                  Je kunt op onbeperkt aantal <Link to="/apparaten" className="text-blue-400 hover:text-blue-300 underline">apparaten</Link> tegelijk kijken.
                  Smart TV, telefoon, tablet, laptop - geen beperkingen.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/veelgestelde-vragen"
                className="text-blue-400 hover:text-blue-300 underline text-lg"
              >
                Bekijk alle veelgestelde vragen →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Klaar om te starten?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Bestel nu en ontvang je inloggegevens binnen 5 minuten. Begin direct met kijken naar 30.500+ kanalen.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg text-lg"
              >
                <FaWhatsapp className="text-2xl" />
                Bestel via WhatsApp
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Prijzen;
