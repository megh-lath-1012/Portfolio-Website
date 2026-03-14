"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { projects } from "@/data/projects";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function TechnicalPortfolio() {
  return (
    <section id="work" className="py-10 md:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Case Studies
            </h2>
            <p className="text-xl text-text-body">
              A selection of SDKs, core libraries, and architectural components designed for scale and developer experience.
            </p>
          </div>
          <Link
            href="https://github.com/megh-lath-1012"
            target="_blank"
            className="hidden md:inline-flex items-center text-primary font-semibold hover:text-orange-600 transition-colors mt-6 md:mt-0"
          >
            View all on GitHub <ArrowUpRight className="ml-1 w-5 h-5" />
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              className="group flex flex-col h-full bg-background border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
            >
              {/* Abstract Representation / Diagram Area */}
              <div className={`h-48 w-full ${project.bgColor} dark:bg-opacity-5 relative overflow-hidden border-b border-gray-100 dark:border-gray-800`}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="flex gap-2 opacity-60 items-center justify-center h-full">
                    <div className="w-16 h-16 rounded shadow-sm bg-white/80 border border-gray-200"></div>
                    <div className="w-16 h-16 rounded shadow-sm bg-white/80 border border-gray-200"></div>
                    <div className="w-16 h-16 rounded shadow-sm bg-white/80 border border-gray-200"></div>
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-primary transition-colors cursor-pointer">
                  {project.title}
                </h3>
                <p className="text-text-body mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100 mt-auto flex justify-between items-center">
                   <Link
                    href={`https://github.com/${project.githubRepo}`}
                    target="_blank"
                    className="inline-flex items-center text-sm font-medium text-navy hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Repository
                  </Link>
                  <Link
                    href={`/work/${project.id}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-orange-600 transition-colors"
                  >
                    Tech Specs
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 md:hidden">
            <Link
            href="https://github.com/meghlath"
            target="_blank"
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-200 rounded-full text-navy font-semibold hover:bg-gray-50 transition-colors"
          >
            View all on GitHub <ArrowUpRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
