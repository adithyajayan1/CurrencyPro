
import { CheckCircle } from "lucide-react";

const FeaturesList = () => {
  const features = [
    "Support for 150+ global currencies",
    "Real-time exchange rates from multiple sources",
    "Historical rate tracking and analysis",
    "AI-powered currency detection from images",
    "OCR text recognition for currency identification",
    "Batch conversion capabilities",
    "Custom rate alerts and notifications",
    "Export data to CSV and PDF formats",
    "Mobile-responsive design",
    "API access for developers",
    "Multi-language support",
    "Bank-grade security encryption"
  ];

  return (
    <section className="py-24 feature-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Currency Solution
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for currency conversion and detection in one powerful platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
