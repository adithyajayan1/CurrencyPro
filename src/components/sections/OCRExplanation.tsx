
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Brain, Zap, Target } from "lucide-react";

const OCRExplanation = () => {
  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Advanced OCR",
      description: "Optical Character Recognition technology that can read text from images with 99%+ accuracy, even in challenging lighting conditions."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Smart Processing",
      description: "Neural networks trained on millions of currency images to recognize patterns, denominations, and country-specific features."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Analysis",
      description: "Lightning-fast processing that delivers results in under 2 seconds, optimized for mobile and desktop environments."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "High Precision",
      description: "Multiple validation layers ensure accurate currency identification with confidence scoring for each detection."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Optical Character Recognition Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our OCR system combines state-of-the-art computer vision with advanced machine learning to extract and interpret currency information from any image or document.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Languages Supported</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99.2%</div>
                  <div className="text-muted-foreground">OCR Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">&lt;2s</div>
                  <div className="text-muted-foreground">Average Processing Time</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OCRExplanation;
