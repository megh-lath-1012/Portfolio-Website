import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, Cpu, Code2, Layers, Smartphone } from "lucide-react";
import Footer from "@/components/Footer";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            href="/#work" 
            className="inline-flex items-center text-sm font-medium text-text-body hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-navy mb-8 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-text-body leading-relaxed mb-10">
                {project.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`https://github.com/${project.githubRepo}`}
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white font-medium rounded-full hover:bg-gray-800 transition-colors shadow-lg"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Repository
                </Link>
              </div>
            </div>
            
            <div className="bg-background-muted rounded-3xl p-8 md:p-12 border border-gray-100">
              <h2 className="text-2xl font-bold text-navy mb-8">Technical Specifications</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="flex items-center text-primary mb-1">
                    <Code2 className="h-5 w-5 mr-2" />
                    <span className="text-xs font-bold uppercase tracking-widest">Language</span>
                  </div>
                  <p className="text-lg font-semibold text-navy">{project.techSpecs.language}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-primary mb-1">
                    <Layers className="h-5 w-5 mr-2" />
                    <span className="text-xs font-bold uppercase tracking-widest">Architecture</span>
                  </div>
                  <p className="text-lg font-semibold text-navy">{project.techSpecs.architecture}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-primary mb-1">
                    <Cpu className="h-5 w-5 mr-2" />
                    <span className="text-xs font-bold uppercase tracking-widest">Key Interface</span>
                  </div>
                  <p className="text-lg font-semibold text-navy">{project.techSpecs.keyLibrary}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-primary mb-1">
                    <Smartphone className="h-5 w-5 mr-2" />
                    <span className="text-xs font-bold uppercase tracking-widest">Platform</span>
                  </div>
                  <p className="text-lg font-semibold text-navy">{project.techSpecs.platform}</p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-bold uppercase tracking-widest text-text-body mb-6">Key Engineering Achievements</h3>
                <ul className="space-y-4">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Deep Dive Section */}
      {project.technicalChallenges && project.technicalChallenges.length > 0 && (
        <section className="py-24 bg-navy relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Technical Deep Dives
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                A granular analysis of the engineering hurdles encountered during development and the architectural decisions made to resolve them at scale.
              </p>
            </div>

            <div className="space-y-24">
              {project.technicalChallenges.map((challenge, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-8">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest">
                      Challenge 0{index + 1}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {challenge.title}
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="group">
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center">
                          <span className="w-4 h-px bg-gray-500 mr-2" /> The Problem
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {challenge.problem}
                        </p>
                      </div>

                      <div className="group">
                        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2 flex items-center">
                          <span className="w-4 h-px bg-primary mr-2" /> Engineering Decision
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {challenge.decision}
                        </p>
                      </div>

                      <div className="group">
                        <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2 flex items-center">
                          <span className="w-4 h-px bg-emerald-500 mr-2" /> Implementation
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {challenge.implementation}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    {/* Glassmorphic Code Block */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                      <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
                          <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/30" />
                          <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
                        </div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                          Tech Stack snippet
                        </div>
                      </div>
                      <div className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
                        <pre className="text-gray-300">
                          <code>{challenge.codeSnippet}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* This empty div keeps the layout consistent or can be used for more bottom content */}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
