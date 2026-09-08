import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Reviews = () => {
  const reviews = [
    {
      name: 'Ahmed K.',
      location: 'Amsterdam',
      rating: 5,
      text: 'Geweldige service! Alle Turkse kanalen die ik wilde hebben en de kwaliteit is uitstekend. Support reageert super snel via WhatsApp.',
      date: '2 weken geleden',
    },
    {
      name: 'Lisa van D.',
      location: 'Rotterdam',
      rating: 5,
      text: 'Eindelijk een betrouwbare IPTV dienst. Geen buffering, mooie beeldkwaliteit en een eerlijke prijs. Echt een aanrader!',
      date: '1 maand geleden',
    },
    {
      name: 'Mohammed A.',
      location: 'Den Haag',
      rating: 5,
      text: 'Perfect voor mijn gezin. Iedereen kan kijken wat hij/zij wil op 4 verschillende apparaten. Arabische zenders zijn top!',
      date: '3 weken geleden',
    },
    {
      name: 'Jan P.',
      location: 'Utrecht',
      rating: 5,
      text: 'Makkelijk te installeren en werkt op al mijn apparaten. De terugkijk functie is heel handig. Zeer tevreden!',
      date: '2 maanden geleden',
    },
    {
      name: 'Fatma Y.',
      location: 'Eindhoven',
      rating: 5,
      text: 'Beste IPTV die ik heb gehad. Stabiele verbinding en veel zenders. De Nederlandse klantenservice is een grote plus.',
      date: '1 week geleden',
    },
    {
      name: 'Kevin S.',
      location: 'Groningen',
      rating: 5,
      text: 'Top service voor een geweldige prijs. Alle sportwedstrijden in HD kwaliteit. Bestel proces via WhatsApp was super makkelijk.',
      date: '3 maanden geleden',
    },
  ];

  const totalReviews = 127;
  const averageRating = 4.9;

  return (
    <section id="reviews" className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-700/10 rounded-full filter blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Wat onze{' '}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Klanten Zeggen
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-2xl" />
              ))}
            </div>
            <span className="text-3xl font-bold">{averageRating}/5</span>
          </div>
          <p className="text-xl text-gray-400">
            Gebaseerd op {totalReviews}+ geverifieerde reviews
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-effect p-6 rounded-2xl hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-primary-500 text-3xl mb-4 opacity-50" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 mb-4 leading-relaxed">{review.text}</p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <div className="font-bold">{review.name}</div>
                  <div className="text-sm text-gray-400">{review.location}</div>
                </div>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="glass-effect p-6 rounded-2xl inline-block">
            <div className="flex items-center gap-4">
              <div className="text-left">
                <div className="text-sm text-gray-400">Geverifieerde Reviews</div>
                <div className="text-2xl font-bold">100% Authentiek</div>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <FaStar className="text-3xl text-white" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
