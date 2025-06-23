
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Heart, Download, Bell } from "lucide-react";

const ConversionFeatures = () => {
  const features = [
    {
      icon: <History className="w-6 h-6" />,
      title: "Historical Rates",
      description: "Access historical exchange rates and track currency trends over time."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Favorite Conversions",
      description: "Save your most-used currency pairs for quick access and faster conversions."
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Export Data",
      description: "Download conversion results and historical data in CSV or PDF format."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Rate Alerts",
      description: "Set up notifications when currencies reach your target exchange rates."
    }
  ];

  return (
    <section className="py-24 feature-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced Conversion Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Go beyond basic conversion with powerful tools designed for professional traders and frequent travelers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConversionFeatures;
