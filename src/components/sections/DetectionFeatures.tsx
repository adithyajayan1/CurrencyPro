
import { CheckCircle } from "lucide-react";

const DetectionFeatures = () => {
  const capabilities = [
    "Banknote recognition for 150+ currencies",
    "Coin identification and denomination detection",
    "Multi-currency image processing",
    "Damaged or worn currency detection",
    "Confidence scoring for each detection",
    "Batch processing for multiple images",
    "Real-time camera integration",
    "Historical currency support",
    "Counterfeit detection alerts",
    "Mobile-optimized processing",
    "Offline detection capabilities",
    "API integration for developers"
  ];

  const denominations = [
    "US Dollar (all denominations)",
    "Euro (€5, €10, €20, €50, €100, €200, €500)",
    "British Pound (£5, £10, £20, £50)",
    "Japanese Yen (¥1000, ¥2000, ¥5000, ¥10000)",
    "Canadian Dollar (all polymer series)",
    "Australian Dollar (all polymer notes)",
    "Swiss Franc (CHF 10, 20, 50, 100, 200, 1000)",
    "Chinese Yuan (¥1, ¥5, ¥10, ¥20, ¥50, ¥100)",
    "Indian Rupee (₹10, ₹20, ₹50, ₹100, ₹200, ₹500, ₹2000)",
    "And 140+ more currencies worldwide"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Detection Capabilities
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive currency recognition covering banknotes, coins, and denominations from around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Detection Features</h3>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8">Supported Denominations</h3>
              <div className="grid grid-cols-1 gap-4">
                {denominations.map((denomination, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{denomination}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetectionFeatures;
