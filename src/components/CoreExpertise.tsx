"use client";

import { LayoutTemplate, Code2, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "SDK Architecture & Design",
    description: "Designing clean, intuitive API surfaces for reliable and scalable Android library consumption.",
    icon: LayoutTemplate,
  },
  {
    title: "Developer Experience (DX)",
    description: "Creating comprehensive documentation, sample apps, and streamlined integration flows for external developers.",
    icon: Code2,
  },
  {
    title: "Performance Optimization",
    description: "Deep dive into Android core vitals, memory management, and multi-threading for battery-efficient libraries.",
    icon: Cpu,
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    } as any,
  },
};

export default function CoreExpertise() {
  return (
    <section id="expertise" className="py-24 bg-background-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Core Expertise
          </h2>
          <p className="text-xl text-text-body max-w-2xl">
            Bridging the gap between robust system architecture and seamless developer integration.
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
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
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
