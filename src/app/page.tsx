import HeroSection from "@/components/HeroSection";
import CoreExpertise from "@/components/CoreExpertise";
import TechnicalPortfolio from "@/components/TechnicalPortfolio";
import WorkedProjects from "@/components/WorkedProjects";
import CareerPath from "@/components/CareerPath";
import ArticleList from "@/components/ArticleList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-orange-200 selection:text-navy">
      <HeroSection />
      <CoreExpertise />
      <TechnicalPortfolio />
      <WorkedProjects />
      <CareerPath />
      <ArticleList />
      <Footer />
    </main>
  );
}
