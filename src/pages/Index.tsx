import { Background } from "@/components/Background";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturesBar } from "@/components/FeaturesBar";
import { UseCasesSection } from "@/components/UseCasesSection";
import { BusinessSection } from "@/components/BusinessSection";
import { ProofSection } from "@/components/ProofSection";
import { HowValydWorks } from "@/components/HowValydWorks";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Background />
      <Navigation />
      <Hero />
      <FeaturesBar />
      
      <ProofSection />
      <HowValydWorks />
      <BusinessSection />
      <FinalCTA />
      <Footer />
    </div>;
};
export default Index;