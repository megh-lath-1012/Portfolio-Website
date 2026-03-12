import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, Cpu, Code2, Layers, Smartphone } from "lucide-react";
import Navigation from "@/components/Navigation";
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
      <Navigation />
      
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
      
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
