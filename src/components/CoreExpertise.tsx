"use client";

import { Smartphone, Puzzle, Cloud, Layers, Monitor } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    title: "Mobile App Development",
    description: "Building high-performance, native applications with a focus on Clean Architecture, offline-first functionality, and seamless UX.",
    icon: Smartphone,
    tag: null
  },
  {
    title: "SDK & Library Development",
    description: "Designing robust, scalable SDKs for third-party integration, prioritizing modularity, clear documentation, and developer experience.",
    icon: Puzzle,
    tag: "SDK"
  },
  {
    title: "SaaS Development",
    description: "Engineering end-to-end cloud-based solutions, including user management, scalable backend integration, and subscription workflows.",
    icon: Cloud,
    tag: "SaaS"
  },
  {
    title: "Cross-Platform Solutions",
    description: "Leveraging Flutter and React Native to deliver consistent, high-quality experiences across iOS and Android from a single codebase.",
    icon: Layers,
    tag: null
  },
  {
    title: "Web Development",
    description: "Creating responsive, modern web dashboards and SEO-optimized platforms to complement mobile ecosystems.",
    icon: Monitor,
    tag: null
  },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function CoreExpertise() {
  return (
    <section id="expertise" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Services
          </h2>
          <p className="text-xl text-text-body max-w-2xl font-semibold text-primary mb-2">
            Expertise & Solutions
          </p>
          <p className="text-lg text-text-body max-w-2xl">
            Delivering high-fidelity technical architecture and seamless mobile integration for local and global enterprises.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-background p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all group relative flex flex-col"
            >
              <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-navy">
                  {service.title}
                </h3>
                {service.tag && (
                  <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-wider">
                    {service.tag}
                  </span>
                )}
              </div>
              <p className="text-text-body leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
