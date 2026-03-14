"use client";

import { LayoutTemplate, Code2, Cpu } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    title: "Custom SDK Development",
    description: "Designing clean, intuitive API surfaces and bridges for native Android and cross-platform (Flutter/RN) libraries.",
    icon: LayoutTemplate,
  },
  {
    title: "Enterprise Mobility Solutions",
    description: "End-to-end development of business-critical apps using Flutter and React Native, focused on performance and scale.",
    icon: Code2,
  },
  {
    title: "Technical Architecture Consulting",
    description: "Deep-dive audits into memory management, data integrity (ACID compliance), and CI/CD automation for existing products.",
    icon: Cpu,
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
            Professional Services
          </h2>
          <p className="text-xl text-text-body max-w-2xl">
            Delivering high-fidelity technical architecture and seamless mobile integration for local and global enterprises.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-background p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-4">
                {service.title}
              </h3>
              <p className="text-text-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
