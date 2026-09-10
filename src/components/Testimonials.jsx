import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jan de Vries',
      location: 'Amsterdam',
      rating: 5,
      text: 'Geweldige service! De kwaliteit is uitstekend en de prijs is zeer redelijk. Geen buffering, zelfs niet tijdens drukke wedstrijden. Absoluut aan te raden!',
      plan: 'IPTV Premium 12 maanden',
      initials: 'JV'
    },
    {
      name: 'Sophie Bakker',
      location: 'Rotterdam',
      rating: 5,
      text: 'Eindelijk een betrouwbare IPTV aanbieder! Installatie was super eenvoudig op mijn Samsung TV. De Nederlandse support reageert binnen een paar minuten via WhatsApp.',
      plan: 'IPTV Premium 6 maanden',
      initials: 'SB'
    },
    {
      name: 'Mohamed Ali',
      location: 'Utrecht',
      rating: 5,
      text: 'Beste IPTV die ik ooit heb gehad. Alle Arabische en Nederlandse kanalen in perfecte kwaliteit. Mijn hele familie is tevreden. Zeker 5 sterren waard!',
      plan: 'IPTV Premium 12 maanden',
      initials: 'MA'
    },
    {
      name: 'Emma Jansen',
      location: 'Den Haag',
      rating: 5,
      text: 'Super blij met Stream Holland! Ik kan nu al mijn favoriete series en films kijken zonder gedoe. De app werkt vlekkeloos op mijn iPhone en iPad.',
      plan: 'IPTV Premium 3 maanden',
      initials: 'EJ'
    },
    {
      name: 'Mehmet Yilmaz',
      location: 'Eindhoven',
      rating: 5,
      text: 'Zeer tevreden! Alle Turkse kanalen beschikbaar in HD kwaliteit. De prijs is eerlijk en er zijn geen verborgen kosten. Aanrader voor iedereen!',
      plan: 'IPTV Premium 12 maanden',
      initials: 'MY'
    },
    {
      name: 'Lisa van Dam',
      location: 'Groningen',
      rating: 5,
      text: 'Perfect voor sportliefhebbers! Alle voetbalwedstrijden live in 4K. De replay functie is ook erg handig als je een wedstrijd gemist hebt.',
      plan: 'IPTV Premium 6 maanden',
      initials: 'LV'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-brand-orange font-bold text-sm">KLANTERVARINGEN</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Wat Onze Klanten{' '}
            <span className="bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent">
              Zeggen
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ontdek waarom duizenden Nederlanders kiezen voor Stream Holland
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-orange-100">
                <FaQuoteLeft className="text-5xl" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-orange-500 text-lg" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Plan Badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-orange-50 text-brand-orange text-xs font-semibold rounded-full">
                  {testimonial.plan}
                </span>
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center text-white font-bold shadow-lg">
                  {testimonial.initials}
                </div>

                <div>
                  <p className="font-bold text-brand-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>

                {/* Verified Badge */}
                <div className="ml-auto">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <p className="text-4xl font-bold text-brand-orange mb-2">4.9/5</p>
            <p className="text-gray-600">Gemiddelde Score</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-brand-orange mb-2">15.000+</p>
            <p className="text-gray-600">Tevreden Klanten</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-brand-orange mb-2">99.9%</p>
            <p className="text-gray-600">Uptime Garantie</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-brand-orange mb-2">24/7</p>
            <p className="text-gray-600">Nederlandse Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
