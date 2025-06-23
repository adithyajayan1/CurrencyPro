
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 currency-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your
            <br />
            Currency Experience?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already discovered the power of intelligent currency conversion and detection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/convert">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                Start Converting Now
              </Button>
            </Link>
            <Link to="/detect">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary">
                Try Detection Free
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-2xl font-bold mb-2">Free to Start</div>
              <div className="opacity-80">No credit card required</div>
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold mb-2">Instant Setup</div>
              <div className="opacity-80">Ready in under 30 seconds</div>
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold mb-2">24/7 Support</div>
              <div className="opacity-80">Always here to help</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowUp className="w-6 h-6 opacity-60" />
      </div>
    </section>
  );
};

export default CTASection;
