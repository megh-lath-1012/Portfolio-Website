"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="max-w-3xl">
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-primary text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Available for new opportunities</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-navy tracking-tight leading-[1.1] mb-8">
            I build robust mobile experiences at scale.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl text-text-body mb-12 max-w-2xl leading-relaxed">
            Hi, I&apos;m Megh. I&apos;m an Android SDK Engineer with 4 years of experience specializing in developer tools, system architecture, and performance optimization.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <MagneticButton>
              <Link
                href="#work"
                className="px-8 py-4 bg-navy text-white font-medium rounded-full hover:bg-gray-800 transition-colors flex items-center shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="https://github.com/meghlath"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-navy border border-gray-200 font-medium rounded-full hover:bg-gray-50 transition-colors w-full sm:w-auto text-center block"
              >
                GitHub Profile
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Decorative abstract elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-tr from-orange-50 to-transparent rounded-full blur-3xl pointer-events-none" 
      />
    </section>
  );
}
