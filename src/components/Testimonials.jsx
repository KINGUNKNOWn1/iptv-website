import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      location: 'Rotterdam',
      rating: 5,
      date: '2 weken geleden',
      text: 'Eindelijk een betrouwbare IPTV dienst! Alle Arabische zenders werken perfect en de beeldkwaliteit is uitstekend. Support reageert snel en helpt je in het Nederlands. Echt een aanrader!',
      plan: '12 Maanden',
      avatar: '👨🏽'
    },
    {
      id: 2,
      name: 'Lisa van der Berg',
      location: 'Amsterdam',
      rating: 5,
      date: '1 week geleden',
      text: 'Super tevreden! Alle Nederlandse zenders, sport kanalen en zelfs Netflix series. De kwaliteit is beter dan bij mijn vorige provider en het is een stuk goedkoper. Binnen 5 minuten actief na betaling.',
      plan: '6 Maanden',
      avatar: '👩🏼'
    },
    {
      id: 3,
      name: 'Mehmet Yilmaz',
      location: 'Den Haag',
      rating: 5,
      date: '3 dagen geleden',
      text: 'Alle Turkse zenders in HD kwaliteit! TRT, Show TV, Kanal D allemaal zonder buffering. De VOD bibliotheek is enorm en je kan oude afleveringen terugkijken. Echt 10/10!',
      plan: '12 Maanden',
      avatar: '👨🏻'
    },
    {
      id: 4,
      name: 'Sarah Peeters',
      location: 'Utrecht',
      rating: 5,
      date: '5 dagen geleden',
      text: 'Mijn kinderen zijn dol op alle Disney kanalen en ik kan eindelijk alle voetbalwedstrijden kijken! Geen automatische verlenging is ook een groot pluspunt. Echt aan te raden voor families.',
      plan: '3 Maanden',
      avatar: '👩🏻'
    },
    {
      id: 5,
      name: 'Omar Benzema',
      location: 'Eindhoven',
      rating: 5,
      date: '1 week geleden',
      text: 'Beste IPTV service die ik tot nu toe heb gehad. Stabiele verbinding, HD kwaliteit, en alle sport kanalen. De EPG werkt perfect en het is makkelijk te installeren op alle devices.',
      plan: '12 Maanden',
      avatar: '👨🏽'
    },
    {
      id: 6,
      name: 'Emma Janssen',
      location: 'Groningen',
      rating: 5,
      date: '4 dagen geleden',
      text: 'Ik was eerst sceptisch maar ben nu super blij! Alle series en films die ik wil kijken in 4K kwaliteit. De support heeft me goed geholpen met installeren. Top service!',
      plan: '6 Maanden',
      avatar: '👱🏻‍♀️'
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meer dan 24.000+ tevreden klanten in Nederland
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-2xl" />
              ))}
            </div>
            <span className="text-3xl font-bold text-white">4.9/5.0</span>
            <span className="text-gray-400">(2,847 beoordelingen)</span>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute inset-0"
                onHoverStart={() => setAutoPlay(false)}
                onHoverEnd={() => setAutoPlay(true)}
              >
                <div className="h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl">
                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-4xl text-blue-600/30 mb-6" />

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-xl" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 italic">
                    "{currentTestimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-3xl shadow-lg">
                        {currentTestimonial.avatar}
                      </div>

                      {/* Name & Location */}
                      <div>
                        <p className="text-white font-bold text-lg">{currentTestimonial.name}</p>
                        <p className="text-gray-400 text-sm">{currentTestimonial.location}</p>
                        <p className="text-gray-500 text-xs mt-1">{currentTestimonial.date}</p>
                      </div>
                    </div>

                    {/* Plan Badge */}
                    <div className="px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-lg">
                      <p className="text-sm text-blue-400 font-semibold">{currentTestimonial.plan}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center border border-slate-700 transition-colors"
            >
              <FaChevronLeft />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? 'w-8 h-2 bg-blue-600'
                      : 'w-2 h-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center border border-slate-700 transition-colors"
            >
              <FaChevronRight />
            </motion.button>
          </div>

          {/* Review Sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6 mt-12 flex-wrap"
          >
            <p className="text-gray-400 text-sm">Beoordeeld op:</p>
            {['Trustpilot', 'Google Reviews', 'Facebook'].map((platform, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50"
              >
                <span className="text-white font-semibold text-sm">{platform}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
