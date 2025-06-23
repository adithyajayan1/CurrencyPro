
import { Button } from "@/components/ui/button";
import { ArrowDown, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 currency-gradient rounded-2xl flex items-center justify-center animate-pulse">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Smart Currency
            <br />
            Conversion & Detection
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience the future of currency exchange with real-time conversion rates and AI-powered currency detection from images and text.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/convert">
              <Button size="lg" className="currency-gradient text-white px-8 py-4 text-lg">
                Start Converting
              </Button>
            </Link>
            <Link to="/detect">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Try Detection
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Currencies Supported</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Real-time Updates</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
