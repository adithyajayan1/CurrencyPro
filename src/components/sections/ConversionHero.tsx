
import { Button } from "@/components/ui/button";
import { TrendingUp, Globe, Zap } from "lucide-react";

const ConversionHero = () => {
  return (
    <section className="hero-gradient py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 currency-gradient rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Currency Conversion
            <br />
            Made Simple
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience lightning-fast currency conversion with real-time rates, historical data, and the most accurate exchange information available.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-background/50">
              <Globe className="w-6 h-6 text-primary" />
              <span className="font-medium">150+ Currencies</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-background/50">
              <Zap className="w-6 h-6 text-primary" />
              <span className="font-medium">Real-time Updates</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-background/50">
              <TrendingUp className="w-6 h-6 text-primary" />
              <span className="font-medium">Bank-grade Accuracy</span>
            </div>
          </div>
          
          <Button size="lg" className="currency-gradient text-white px-8 py-4 text-lg">
            Start Converting Below
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConversionHero;
