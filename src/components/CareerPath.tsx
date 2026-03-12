"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Android SDK Engineer",
    company: "TechMobility Systems",
    period: "2022 - Present",
    description: "Lead developer for the Core Mobility SDK, used by 50+ enterprise clients. Focused on binary compatibility, security auditing, and automated testing frameworks.",
    achievements: [
      "Reduced SDK footprint by 35% through advanced ProGuard/R8 configurations.",
      "Implemented a comprehensive modularization strategy using Gradle Convention Plugins.",
      "Developed a custom CI/CD pipeline for multi-variant SDK distribution."
    ]
  },
  {
    role: "Android Developer",
    company: "DataStream Apps",
    period: "2020 - 2022",
    description: "Developed and maintained feature modules for a high-traffic data visualization app. Specialized in custom view components and background synchronization.",
    achievements: [
      "Optimized data syncing logic, reducing battery consumption by 20%.",
      "Migrated 80% of the codebase from XML/View system to Jetpack Compose.",
      "Integrated complex biometric authentication flows for sensitive data access."
    ]
  },
  {
    role: "Junior Mobile Engineer",
    company: "Innovate Solutions",
    period: "2019 - 2020",
    description: "Assisted in the development of various client-facing Android applications. Gained deep experience in Android fundamentals and Clean Architecture.",
    achievements: [
      "Authored unit and UI tests for critical user flows, reaching 70% coverage.",
      "Created a reusable networking module used across multiple client projects.",
      "Contributed to open-source Android libraries maintained by the company."
    ]
  }
];

export default function CareerPath() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Technical Career Path
          </h2>
          <p className="text-xl text-text-body max-w-2xl mx-auto">
            From building fundamental features to architecting industrial-grade SDKs.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-background-muted p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm font-bold text-primary tracking-widest uppercase mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold text-navy mb-1">{exp.role}</h3>
                    <p className="text-lg font-medium text-text-body mb-4">{exp.company}</p>
                    <p className="text-text-body leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      {exp.achievements.map((achievement, aIndex) => (
                        <li key={aIndex} className={`flex items-start text-sm text-gray-600 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <div className={`h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0 ${index % 2 === 0 ? 'md:ml-3' : 'md:mr-3'}`} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Dot on centerline */}
                <div className="hidden md:flex relative z-10 w-2/12 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm ring-4 ring-orange-50" />
                </div>
                
                {/* Spacer for other side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
