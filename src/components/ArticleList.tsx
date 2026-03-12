"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Understanding Android Memory Management",
    date: "March 15, 2026",
    readTime: "8 min read",
    link: "#",
  },
  {
    title: "Building an offline-first architecture with Room",
    date: "February 22, 2026",
    readTime: "12 min read",
    link: "#",
  },
  {
    title: "Migrating from XML to Jetpack Compose: A Guide",
    date: "January 10, 2026",
    readTime: "15 min read",
    link: "#",
  },
];

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
              Thoughts on Android architecture, performance, and best practices.
            </p>
          </div>
          <Link
            href="/articles"
            className="hidden md:inline-flex items-center text-primary font-semibold hover:text-orange-600 transition-colors mt-6 md:mt-0"
          >
            Read all articles <ArrowRight className="ml-1 w-5 h-5" />
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {articles.map((article, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={article.link}
                className="group block bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-navy mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-sm text-text-body space-x-4">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1.5" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-gray-100 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-colors text-text-body">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 md:hidden">
          <Link
            href="/articles"
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-200 rounded-full text-navy font-semibold hover:bg-gray-50 transition-colors"
          >
            Read all articles <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
