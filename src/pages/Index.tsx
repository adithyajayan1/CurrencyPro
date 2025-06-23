
import HeroSection from "@/components/sections/HeroSection";
import FeatureCards from "@/components/sections/FeatureCards";
import FeaturesList from "@/components/sections/FeaturesList";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureCards />
      <FeaturesList />
      <TeamSection />
      <CTASection />
    </div>
  );
};

export default Index;
