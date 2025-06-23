
import { Button } from "@/components/ui/button";
import { Camera, Scan, Zap } from "lucide-react";

const DetectionHero = () => {
  return (
    <section className="hero-gradient py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 currency-gradient rounded-2xl flex items-center justify-center">
              <Camera className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            AI-Powered Currency
            <br />
            Detection
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Upload images or scan text to automatically detect and identify currencies using cutting-edge AI and machine learning technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-background/50">
              <Camera className="w-6 h-6 text-primary" />
              <span className="font-medium">Image Recognition</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-background/50">
              <Scan className="w-6 h-6 text-primary" />
              <span className="font-medium">OCR Technology</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-background/50">
              <Zap className="w-6 h-6 text-primary" />
              <span className="font-medium">Instant Results</span>
            </div>
          </div>
          
          <Button size="lg" className="currency-gradient text-white px-8 py-4 text-lg">
            Try Detection Below
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DetectionHero;
