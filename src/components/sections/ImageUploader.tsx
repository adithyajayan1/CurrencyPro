import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Camera, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

interface DetectionResult {
  currency: string;
  code: string;
  confidence: number;
  denomination?: string;
  region?: string;
  text?: string;
}

const ImageUploader = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<DetectionResult[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 10MB",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        analyzeImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const detectCurrencyFromText = (text: string): DetectionResult | null => {
    // Common currency patterns and their codes
    const currencyPatterns = [
      { pattern: /\b(USD|US Dollar|United States Dollar|Federal Reserve Note|America|The United States of America)\b/i, code: 'USD', name: 'US Dollar' },
      { pattern: /\b(EUR|Euro)\b/i, code: 'EUR', name: 'Euro' },
      { pattern: /\b(GBP|British Pound|Pound Sterling)\b/i, code: 'GBP', name: 'British Pound' },
      { pattern: /\b(JPY|Japanese Yen)\b/i, code: 'JPY', name: 'Japanese Yen' },
      { pattern: /\b(CAD|Canadian Dollar|Canada)\b/i, code: 'CAD', name: 'Canadian Dollar' },
      { pattern: /\b(AUD|Australian Dollar|Australia)\b/i, code: 'AUD', name: 'Australian Dollar' },
      { pattern: /\b(CHF|Swiss Franc|Switzerland)\b/i, code: 'CHF', name: 'Swiss Franc' },
      { pattern: /\b(CNY|Chinese Yuan|Renminbi|China)\b/i, code: 'CNY', name: 'Chinese Yuan' },
      { pattern: /\b(INR|Indian Rupee|India|Rupee)\b/i, code: 'INR', name: 'Indian Rupee' },
      { pattern: /\b(KRW|South Korean Won|Won|Korea)\b/i, code: 'KRW', name: 'South Korean Won' },
      { pattern: /\b(ONE|FIVE|TEN|TWENTY|FIFTY|HUNDRED)\b/i, code: 'USD', name: 'US Dollar' },
    ];

    // Look for denomination patterns
    const denominationPattern = /\b(ONE|FIVE|TEN|TWENTY|FIFTY|HUNDRED|1|5|10|20|50|100|500|2000)\b/i;
    const denominationMatch = text.match(denominationPattern);

    // Find matching currency
    for (const { pattern, code, name } of currencyPatterns) {
      if (pattern.test(text)) {
        return {
          currency: name,
          code,
          confidence: 85, // Base confidence
          denomination: denominationMatch ? denominationMatch[1] : undefined,
          text: text
        };
      }
    }

    return null;
  };

  const analyzeImage = async (file: File) => {
    setIsAnalyzing(true);
    setResults([]);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('OCREngine', '2'); // Use the best engine
      formData.append('apikey', 'K85433012488957'); // <-- your real API key here

      const response = await axios.post(
        'https://api.ocr.space/parse/image',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const parsedResults = response.data.ParsedResults;
      if (parsedResults && parsedResults.length > 0) {
        const text = parsedResults[0].ParsedText;
        console.log('OCR text:', text);
        const detection = detectCurrencyFromText(text);
        if (detection) {
          setResults([detection]);
          toast({
            title: "Analysis Complete",
            description: `Detected ${detection.currency} with confidence ${detection.confidence}%`,
          });
        } else {
          toast({
            title: "No Currency Detected",
            description: "Could not detect any currency in the image. Please try a clearer image.",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Detection Error",
          description: "No text detected in the image.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Detection error:', error);
      toast({
        title: "Detection Error",
        description: "Failed to analyze the image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleConvertCurrency = (currencyCode: string) => {
    navigate(`/convert?from=${currencyCode}`);
  };

  return (
    <section className="py-24 feature-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upload & Detect
            </h2>
            <p className="text-xl text-muted-foreground">
              Upload an image of currency and our AI will detect the type and denomination.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Image Detection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-muted/50 transition-colors">
                  {uploadedImage ? (
                    <div className="space-y-4">
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded currency" 
                        className="max-w-full h-48 object-contain mx-auto rounded-lg"
                      />
                      <Button 
                        variant="outline" 
                        onClick={() => fileInputRef.current?.click()}
                      >
                        Upload Different Image
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                      <div>
                        <p className="font-medium">Click to upload an image</p>
                        <p className="text-sm text-muted-foreground">
                          PNG, JPG up to 10MB
                        </p>
                      </div>
                      <Button onClick={() => fileInputRef.current?.click()}>
                        Choose File
                      </Button>
                    </div>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
                
                {isAnalyzing && (
                  <div className="text-center py-8">
                    <Loader2 className="w-8 h-8 mx-auto animate-spin mb-4" />
                    <p className="text-muted-foreground">Analyzing image...</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {results.length > 0 && !isAnalyzing && (
              <Card className="mt-8 shadow-xl">
                <CardHeader>
                  <CardTitle>Detected Currencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {results.map((item, index) => (
                      <div key={index} className="p-4 bg-muted rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <span className="font-medium">{item.currency}</span>
                            {item.denomination && (
                              <span className="ml-2 text-sm text-muted-foreground">
                                ({item.denomination})
                              </span>
                            )}
                          </div>
                          <Button 
                            onClick={() => handleConvertCurrency(item.code)}
                            className="currency-gradient text-white"
                          >
                            Convert
                          </Button>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <div>Confidence: {item.confidence}%</div>
                          {item.region && <div>Region: {item.region}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUploader;
