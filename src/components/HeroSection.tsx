"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ElasticBackground from "@/components/ElasticBackground";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    } as any,
  },
};

export default function HeroSection() {

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <ElasticBackground />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="max-w-3xl">
          <motion.div 
            variants={itemVariants}
            className="mb-8 relative inline-block"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/20 p-1.5 bg-background shadow-xl scale-100 hover:scale-105 transition-transform duration-500">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile.jpeg"
                  alt="Megh Lath"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-full border border-primary/10 pointer-events-none" />
            </div>

            {/* Availability Badge next to image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-1 -right-4 flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-orange-100 dark:border-orange-900/30 shadow-lg text-primary text-xs font-semibold whitespace-nowrap z-20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Available for new opportunities</span>
            </motion.div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-foreground dark:text-foreground"
          >
            I build robust mobile experiences at scale.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            transition={{ delay: 1.5 }}
            className="text-xl mb-12 max-w-2xl leading-relaxed text-text-body"
          >
            Hi, I&apos;m Megh. I&apos;m a Mobile/Android SDK Engineer with 4 years of experience specializing in developer tools, system architecture, and performance optimization.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="#work"
              className="px-8 py-4 bg-navy text-white font-medium rounded-full hover:bg-gray-800 transition-colors flex items-center shadow-lg hover:shadow-xl w-full sm:w-auto justify-center dark:bg-primary dark:hover:bg-orange-600"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              href="https://github.com/megh-lath-1012"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-background text-foreground border border-gray-300 font-medium rounded-full hover:bg-gray-100 hover:text-navy transition-colors w-full sm:w-auto text-center block dark:bg-transparent dark:text-foreground dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              GitHub Profile
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Decorative abstract elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-tr from-orange-50 dark:from-orange-900/10 to-transparent rounded-full blur-3xl pointer-events-none" 
      />
    </section>
  );
}
