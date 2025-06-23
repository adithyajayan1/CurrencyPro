import DetectionHero from "@/components/sections/DetectionHero";
import DetectionProcess from "@/components/sections/DetectionProcess";
import ImageUploader from "@/components/sections/ImageUploader";
import OCRExplanation from "@/components/sections/OCRExplanation";
import DetectionFeatures from "@/components/sections/DetectionFeatures";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const CurrencyDetection = () => {
  return (
    <div className="min-h-screen">
      <DetectionHero />
      <DetectionProcess />
      <ImageUploader />
      <OCRExplanation />
      <DetectionFeatures />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default CurrencyDetection;
