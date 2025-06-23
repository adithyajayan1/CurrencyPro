
import { Link } from "react-router-dom";
import { DollarSign } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 currency-gradient rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">CurrencyPro</span>
            </div>
            <p className="text-muted-foreground">
              The most advanced currency converter with AI-powered detection capabilities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/convert" className="hover:text-foreground transition-colors">Currency Conversion</Link></li>
              <li><Link to="/detect" className="hover:text-foreground transition-colors">Image Detection</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Real-time Rates</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Historical Data</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 CurrencyPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
