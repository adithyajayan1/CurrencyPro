
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How accurate is the currency detection?",
      answer: "Our AI model achieves over 97% accuracy for currency recognition and 94% for denomination detection. The system provides confidence scores for each detection to help you assess the reliability of results."
    },
    {
      question: "What image formats are supported?",
      answer: "We support all common image formats including JPG, PNG, WEBP, and HEIC. Images can be up to 10MB in size and we recommend clear, well-lit photos for best results."
    },
    {
      question: "How long does the detection process take?",
      answer: "Most images are processed in under 2 seconds. Processing time may vary slightly based on image size and complexity, but our optimized algorithms ensure fast, real-time results."
    },
    {
      question: "Can the system detect multiple currencies in one image?",
      answer: "Yes! Our advanced AI can identify and separate multiple currencies and denominations within a single image, providing individual confidence scores for each detection."
    },
    {
      question: "Is my data secure when using the detection feature?",
      answer: "Absolutely. All images are processed with end-to-end encryption and are immediately discarded after analysis. We never store your images or any sensitive financial information."
    },
    {
      question: "What should I do if the detection seems incorrect?",
      answer: "If you notice incorrect detections, please use our feedback system to report the issue. This helps us continuously improve our AI models. You can also try retaking the photo with better lighting or a different angle."
    },
    {
      question: "Can I use this feature offline?",
      answer: "Currently, our detection feature requires an internet connection for real-time processing. However, we're working on offline capabilities for mobile apps in future updates."
    },
    {
      question: "Are there any limitations on usage?",
      answer: "Free users can process up to 50 images per day. Premium users have unlimited access plus additional features like batch processing and API access for developers."
    }
  ];

  return (
    <section className="py-24 feature-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our currency detection technology.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
