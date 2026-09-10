import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'IPTV kopen in Nederland: Complete Gids 2026',
      excerpt: 'Alles wat je moet weten over IPTV kopen in Nederland. Van providers vergelijken tot installatie tips.',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
      author: 'Stream Holland Team',
      date: '5 maart 2026',
      readTime: '8 min',
      category: 'Gids'
    },
    {
      id: 2,
      title: 'Top 10 Sport Kanalen op IPTV in 2026',
      excerpt: 'Ontdek welke sport kanalen je absoluut niet mag missen met je IPTV abonnement.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
      author: 'Stream Holland Team',
      date: '1 maart 2026',
      readTime: '6 min',
      category: 'Sport'
    },
    {
      id: 3,
      title: 'IPTV Installeren op Samsung Smart TV',
      excerpt: 'Stap-voor-stap handleiding om IPTV te installeren op je Samsung Smart TV.',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
      author: 'Stream Holland Team',
      date: '25 februari 2026',
      readTime: '5 min',
      category: 'Tutorial'
    },
    {
      id: 4,
      title: 'Nederlandse Zenders via IPTV Kijken',
      excerpt: 'Alle Nederlandse zenders in één overzicht. NPO, RTL, SBS en meer via IPTV.',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80',
      author: 'Stream Holland Team',
      date: '20 februari 2026',
      readTime: '7 min',
      category: 'Kanalen'
    },
    {
      id: 5,
      title: '4K IPTV: Is het de Upgrade Waard?',
      excerpt: 'Alles over 4K IPTV streaming. Voordelen, nadelen en wat je nodig hebt.',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
      author: 'Stream Holland Team',
      date: '15 februari 2026',
      readTime: '6 min',
      category: 'Technologie'
    },
    {
      id: 6,
      title: 'IPTV vs Kabel: Wat is Beter in 2026?',
      excerpt: 'Vergelijking tussen IPTV en traditionele kabel TV. Kosten, kanalen en kwaliteit.',
      image: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=800&q=80',
      author: 'Stream Holland Team',
      date: '10 februari 2026',
      readTime: '9 min',
      category: 'Vergelijking'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-brand-black via-slate-800 to-brand-black">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            IPTV Blog & Nieuws
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tips, guides en het laatste nieuws over IPTV in Nederland
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-brand-black/90 rounded-2xl overflow-hidden border border-slate-700 hover:border-brand-orange transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brand-orange text-white text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <FaClock className="text-xs" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUser className="text-xs" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-blue-500 hover:text-brand-orange font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Lees meer
                    <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-black/90 hover:bg-slate-700 text-white font-bold rounded-xl transition-all border border-slate-700 hover:border-brand-orange"
          >
            Bekijk Alle Artikelen
            <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
