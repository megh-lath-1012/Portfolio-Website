"use client";

import { useEffect } from "react";

import Link from "next/link";
import { ArrowLeft, BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { articles } from "@/data/articles";
// import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function ArticlesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background flex flex-col dark:bg-background-primary transition-colors duration-300">
      <div className="pt-24 pb-12 bg-background-muted dark:bg-background-muted/10 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            href="/#articles" 
            className="inline-flex items-center text-primary font-medium mb-8 hover:translate-x-[-4px] transition-transform"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl font-bold text-navy dark:text-white mb-4">All Technical Articles</h1>
              <p className="text-xl text-text-body max-w-2xl">
                A collection of deep dives into Android engineering, SDK architecture, and high-performance mobile systems.
              </p>
            </div>
            <Link
              href="https://canopas.com/author/megh-l"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-background-muted border border-gray-200 dark:border-gray-700 rounded-full text-navy dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm"
            >
              Follow on Canopas <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-20 flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.map((article, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href={article.link}
                  target="_blank"
                  className="group flex flex-col h-full bg-white dark:bg-background-muted rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {article.coverImage ? (
                      <Image 
                        src={article.coverImage} 
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50 dark:bg-gray-900">
                        <BookOpen className="w-12 h-12" />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 dark:bg-background-muted/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full shadow-sm">
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
                    
                    <h3 className="text-xl font-bold text-navy dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
