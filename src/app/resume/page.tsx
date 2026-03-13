"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileDown } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                href="/" 
                className="inline-flex items-center text-sm font-medium text-text-body hover:text-navy transition-colors mb-2"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
              <h1 className="text-3xl font-bold text-navy">Professional Resume</h1>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="/Megh-Resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg"
            >
              <FileDown className="w-5 h-5 mr-2" />
              Download PDF
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden h-[800px] md:h-[1000px] relative"
        >
          <iframe
            src="/Megh-Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
            className="w-full h-full border-none"
            title="Megh Lath Resume"
          />
        </motion.div>
      </div>
    </main>
  );
}
