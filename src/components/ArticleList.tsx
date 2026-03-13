"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { articles } from "@/data/articles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    } as any,
  },
};

export default function ArticleList() {
  const displayedArticles = articles.slice(0, 6);

  return (
    <section id="articles" className="py-24 bg-background-muted">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Technical Deep Dives
            </h2>
            <p className="text-xl text-text-body max-w-2xl">
              Insights on Android architecture, performance optimization, and premium UI patterns in Jetpack Compose.
            </p>
          </div>
          <Link
            href="https://canopas.com/author/megh-l"
            target="_blank"
            className="hidden md:inline-flex items-center text-primary font-semibold hover:text-orange-600 transition-colors mt-6 md:mt-0"
          >
            Read more on Canopas <ExternalLink className="ml-1 w-5 h-5" />
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedArticles.map((article, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={article.link}
                target="_blank"
                className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  {article.coverImage ? (
                    <img 
                      src={article.coverImage} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                      <BookOpen className="w-12 h-12" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-text-body space-x-3 mb-4">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="flex items-center">
                      <BookOpen className="w-3.5 h-3.5 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-text-body line-clamp-3 mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-50 flex items-center text-primary font-bold text-sm">
                    Read Article <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {articles.length > 6 && (
          <div className="mt-16 flex justify-center">
            <Link
              href="/articles"
              className="px-10 py-4 bg-white text-navy border border-gray-200 font-bold rounded-full hover:bg-navy hover:text-white transition-all shadow-sm hover:shadow-lg flex items-center group"
            >
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        <div className="mt-8 md:hidden">
          <Link
            href="https://canopas.com/author/megh-l"
            target="_blank"
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-200 rounded-full text-navy font-semibold hover:bg-gray-50 transition-colors"
          >
            Read more on Canopas <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
