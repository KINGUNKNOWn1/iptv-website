import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaLinkedin } from 'react-icons/fa';

const CEOSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: CEO Image & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* CEO Photo Container */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-brand-orange shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-brand-black via-brand-gray to-brand-black">
                  {/* Professional CEO photo */}
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&q=80"
                    alt="Pieter van der Berg - CEO"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Orange accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-brand-orange"></div>
              </div>

              {/* Info Card */}
              <div className="absolute -bottom-6 -right-6 bg-white border border-brand-gray-border rounded-xl p-6 shadow-xl max-w-xs">
                <h3 className="text-2xl font-bold text-brand-black mb-1">
                  Pieter van der Berg
                </h3>
                <p className="text-brand-orange font-semibold mb-3">
                  Founder & CEO
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-brand-orange hover:bg-[#E85D00] flex items-center justify-center transition-colors"
                  >
                    <FaLinkedin className="text-white text-xl" />
                  </a>
                  <span className="text-brand-gray text-sm">
                    Rotterdam, NL
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Message & Quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Section Label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
                <span className="text-brand-orange font-semibold text-sm">
                  LEADERSHIP
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
                Onze Visie voor de Toekomst
              </h2>

              {/* Quote */}
              <div className="relative pl-8 mb-8">
                <FaQuoteLeft className="absolute left-0 top-0 text-4xl text-brand-orange opacity-20" />
                <blockquote className="text-xl text-brand-gray italic leading-relaxed">
                  "Bij Stream Holland geloven we dat iedereen toegang moet hebben tot hoogwaardige televisie,
                  zonder complexe contracten of verborgen kosten. Onze missie is simpel: de beste IPTV-ervaring
                  leveren met Nederlandse service waar je op kunt vertrouwen."
                </blockquote>
              </div>

              {/* Mission Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-brand-black mb-1">
                      Transparantie Voorop
                    </h4>
                    <p className="text-brand-gray">
                      Geen verborgen kosten, geen automatische verlengingen. Wat je ziet is wat je krijgt.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-brand-black mb-1">
                      Kwaliteit Gegarandeerd
                    </h4>
                    <p className="text-brand-gray">
                      99.9% uptime, 30.500+ kanalen in HD/4K kwaliteit, en 24/7 Nederlandse support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-brand-black mb-1">
                      Klantgericht Denken
                    </h4>
                    <p className="text-brand-gray">
                      Van Rotterdam tot heel Nederland - we zijn er altijd voor je, via WhatsApp of telefoon.
                    </p>
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="pt-6 border-t border-brand-gray-border">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    {/* Signature placeholder */}
                    <div className="text-3xl font-brand italic text-brand-orange">
                      Pieter van der Berg
                    </div>
                  </div>
                </div>
                <p className="text-brand-gray text-sm mt-2">
                  Founder & CEO, Stream Holland
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
