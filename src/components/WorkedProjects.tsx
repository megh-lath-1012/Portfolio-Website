"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const workedProjects = [
  {
    title: "Justly",
    description: "Transitioned this premium habit-tracker from Native to Flutter, boosting performance by 30% and user engagement by 25%.",
    link: "https://justly.life/",
    tags: ["Flutter", "Analytics", "Scaling"],
    color: "emerald",
    image: "/projects/justly.png"
  },
  {
    title: "Triple O's",
    description: "Refined background task processing and resolved Play Store compliance issues for a major burger chain's ordering app.",
    link: "https://www.tripleos.com/",
    tags: ["Native Android", "Bug Fixes", "QSR"],
    color: "red",
    image: "/projects/tripleos.png"
  },
  {
    title: "GroupTrack",
    description: "Architected a high-precision location tracking engine using Google Maps SDK and Firestore for real-time group safety.",
    link: "https://grouptrack.canopas.com/",
    tags: ["Maps SDK", "Real-time", "Safety"],
    color: "indigo",
    image: "/projects/grouptrack.png"
  },
  {
    title: "Rich Editor",
    description: "An open-source Jetpack Compose WYSIWYG editor library focusing on cross-stack UX parity and performant text processing.",
    link: "https://github.com/canopas/rich-editor-compose",
    tags: ["Open Source", "Compose", "Kotlin"],
    color: "purple",
    image: "/projects/richeditor.png"
  }
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

const itemVariants: Variants = {
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

export default function WorkedProjects() {
  return (
    <section id="projects" className="py-24 bg-gray-50/50 dark:bg-gray-950/20 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Worked Projects
          </h2>
          <p className="text-xl text-text-body max-w-3xl">
            A track record of delivering production-grade applications that solve real-world problems and delight millions of users.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {workedProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-background dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col h-full"
            >
              {/* Project Image Header */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className={`w-12 h-12 rounded-2xl bg-${project.color}-50 dark:bg-${project.color}-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={`w-2 h-2 rounded-full bg-${project.color}-500`} />
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-3">
                  {project.title}
                </h3>
              
              <p className="text-text-body text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={project.link}
                target="_blank"
                className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all mt-auto"
              >
                Launch Project 
                <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
