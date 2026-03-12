import HeroSection from "@/components/HeroSection";
import CoreExpertise from "@/components/CoreExpertise";
import TechnicalPortfolio from "@/components/TechnicalPortfolio";
import CareerPath from "@/components/CareerPath";
import ArticleList from "@/components/ArticleList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-orange-200 selection:text-navy">
      <HeroSection />
      <CoreExpertise />
      <TechnicalPortfolio />
      <CareerPath />
      <ArticleList />
      <Footer />
    </main>
  );
}
