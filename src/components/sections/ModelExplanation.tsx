
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Database, Shield, TrendingUp } from "lucide-react";

const ModelExplanation = () => {
  return (
    <section className="py-24 feature-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Model Architecture
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our currency detection system leverages cutting-edge deep learning models, trained on diverse datasets to ensure robust performance across different currencies and conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-primary" />
                    Neural Network Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our model combines Convolutional Neural Networks (CNNs) for image feature extraction with Transformer architectures for sequence understanding, enabling accurate currency detection and denomination recognition.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Database className="w-6 h-6 text-primary" />
                    Training Dataset
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Trained on over 10 million currency images from 150+ countries, including various lighting conditions, angles, and wear patterns to ensure robust real-world performance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Security & Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    All image processing happens securely with end-to-end encryption. Images are processed and immediately discarded - we never store your sensitive financial data.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Model Performance</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Currency Recognition</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-[97%] h-full bg-primary rounded-full"></div>
                        </div>
                        <span className="font-bold">97%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Denomination Detection</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-[94%] h-full bg-primary rounded-full"></div>
                        </div>
                        <span className="font-bold">94%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Multi-Currency Images</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-[91%] h-full bg-primary rounded-full"></div>
                        </div>
                        <span className="font-bold">91%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    Our models are continuously updated with new currency designs and improved with user feedback to maintain the highest accuracy standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelExplanation;
