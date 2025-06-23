
import ConversionHero from "@/components/sections/ConversionHero";
import CurrencyConverter from "@/components/sections/CurrencyConverter";
import ConversionFeatures from "@/components/sections/ConversionFeatures";
import CTASection from "@/components/sections/CTASection";

const CurrencyConversion = () => {
  return (
    <div className="min-h-screen">
      <ConversionHero />
      <CurrencyConverter />
      <ConversionFeatures />
      <CTASection />
    </div>
  );
};

export default CurrencyConversion;
