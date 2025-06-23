import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Camera, Zap } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Real-time Rates",
      description: "Get the most accurate, up-to-date currency exchange rates from trusted financial sources.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Image-based Detection",
      description: "Upload images or scan text to automatically detect and identify currencies using advanced AI.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Experience instant conversions and detections with our optimized algorithms and infrastructure.",
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  const analyzeImage = async (imageData: string) => {
    setIsAnalyzing(true);

    try {
      const worker = await createWorker({
        workerPath: '/tesseract-worker.min.js',
        logger: m => console.log(m)
      });

      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      const { data: { text } } = await worker.recognize(imageData);
      await worker.terminate();

      console.log('Extracted text:', text);

      // ...rest of your detection logic...
    } catch (error) {
      console.error('Detection error:', error);
      toast({
        title: "Detection Error",
        description: "Could not detect any currencies in the image. Please try a clearer image or ensure the currency symbol or amount is visible.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose CurrencyPro?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful features that make our currency converter the best choice for professionals and individuals alike.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
