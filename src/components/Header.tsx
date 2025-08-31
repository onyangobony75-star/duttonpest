import { useState } from "react";
import { Phone, MessageCircle, Mail, Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <div className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <span className="hidden sm:block">•</span>
            <span className="font-medium">24/7 Emergency Service</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-primary-light transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-bold">(123) 456-7890</span>
            </a>
            <a href="https://wa.me/1234567890" className="flex items-center gap-1 hover:text-primary-light transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <a href="mailto:info@duttonpest.com" className="flex items-center gap-1 hover:text-primary-light transition-colors">
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">DUTTON</h1>
              <p className="text-sm text-muted-foreground font-medium">PEST ERRADICATION</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary font-medium transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary font-medium transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline">
              Get Free Quote
            </Button>
            <Button variant="emergency">
              Emergency Service
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-foreground hover:text-primary font-medium transition-colors py-2">
                Home
              </Link>
              <Link to="/services" className="text-foreground hover:text-primary font-medium transition-colors py-2">
                Services
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary font-medium transition-colors py-2">
                About Us
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary font-medium transition-colors py-2">
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" className="w-full">
                  Get Free Quote
                </Button>
                <Button variant="emergency" className="w-full">
                  Emergency Service
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;