"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import ElasticBackground from "@/components/ElasticBackground";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroSection() {

  return (
    <section className="relative pt-16 pb-10 md:pt-24 md:pb-16 overflow-hidden">
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
            className="mb-12 flex flex-col items-start md:flex-row md:items-end gap-4 md:gap-6"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/20 p-1.5 bg-background shadow-xl scale-100 hover:scale-105 transition-transform duration-500 flex-shrink-0">
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

            {/* Availability Badge next to image (desktop) / below image (mobile) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-orange-100 dark:border-orange-900/30 shadow-lg text-primary text-xs font-semibold whitespace-nowrap mb-0 md:mb-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Accepting Project Inquiries for PixelPulse Services</span>
            </motion.div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-foreground dark:text-foreground"
          >
            Engineering High-Performance Mobile Ecosystems.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            transition={{ delay: 1.5 }}
            className="text-xl mb-12 max-w-2xl leading-relaxed text-text-body"
          >
            PixelPulse is a boutique engineering studio led by Megh Lath. With 4 years of experience, we specialize in building robust Android SDKs, Flutter applications, and full-stack business systems designed for industrial scale.
          </motion.p>
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
