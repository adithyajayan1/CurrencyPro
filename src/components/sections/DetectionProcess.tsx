
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Scan, DollarSign, CheckCircle } from "lucide-react";

const DetectionProcess = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Upload Image",
      description: "Upload a photo containing currency or paste text with currency information.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Scan className="w-8 h-8" />,
      title: "AI Analysis",
      description: "Our advanced AI analyzes the image using OCR and machine learning models.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Currency Detection",
      description: "The system identifies currency types, denominations, and provides exchange rates.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Instant Results",
      description: "Get accurate results with confidence scores and conversion options.",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Currency Detection Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our sophisticated process combines optical character recognition, computer vision, and machine learning to deliver accurate currency identification.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <CardContent className="p-8 text-center">
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetectionProcess;
