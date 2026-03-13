"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Mobile SDK Lead",
    company: "Nami ML",
    period: "05/2025 - Present",
    description: "Directed an AI-first implementation model, governing agentic AI workflows to audit and optimize complex SDK modules across Android and iOS.",
    achievements: [
      "Led the development of modular SDK architecture using Kotlin and Jetpack Compose for enterprise-scale deployments.",
      "Oversaw platform parity between Android and iOS SDK functionalities, ensuring seamless logic synchronization.",
      "Supervised AI-driven review cycles to resolve deep-level rendering bottlenecks, achieving fluid UI performance."
    ]
  },
  {
    role: "Mobile Application Team Leader",
    company: "Canopas",
    period: "01/2022 - 05/2025",
    description: "Spearheaded a cross-functional team in developing high-performance apps using Kotlin and Flutter, while managing cross-stack refactoring.",
    achievements: [
      "Architected automated CI/CD pipelines using Fastlane and GitHub Actions, reducing manual release efforts by 40%.",
      "Managed full-lifecycle development using Wi-Fi P2P, Google Maps SDK, and real-time analytics to enhance user engagement.",
      "Led technical mentorship and code reviews for a team of junior developers, ensuring adherence to modern mobile standards."
    ]
  },
  {
    role: "Bachelor of Computer Applications",
    company: "SRIMCA, Uka Tarsadia University",
    period: "07/2017 - 01/2021",
    description: "Focused on core computer science principles, software development lifecycle, and modern programming paradigms.",
    achievements: [
      "Graduated with a GPA of 9.10 / 10.0, placing in the top percentile of the cohort.",
      "Developed several academic projects focused on database management and mobile application fundamentals."
    ]
  }
];

export default function CareerPath() {
  return (
    <section id="about" className="py-24 overflow-hidden">
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
