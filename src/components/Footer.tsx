import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary-foreground/10 p-2 rounded-lg">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">DUTTON</h3>
                <p className="text-sm text-primary-foreground/80">PEST ERRADICATION</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted local pest control experts providing safe, effective, 
              and eco-friendly solutions for over 15 years.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                All Services
              </Link>
              <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Our Services</h4>
            <div className="space-y-3">
              <Link to="/services/termites" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Termite Control
              </Link>
              <Link to="/services/rodents" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Rodent Control
              </Link>
              <Link to="/services/bed-bugs" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Bed Bug Treatment
              </Link>
              <Link to="/services/cockroaches" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Cockroach Control
              </Link>
              <Link to="/services/general-pests" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                General Pest Control
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-primary-foreground/60" />
                <div>
                  <p className="font-medium">(123) 456-7890</p>
                  <p className="text-sm text-primary-foreground/80">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-primary-foreground/60" />
                <div>
                  <p className="font-medium">info@duttonpest.com</p>
                  <p className="text-sm text-primary-foreground/80">Email Support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary-foreground/60" />
                <div>
                  <p className="font-medium">Serving Greater Metro Area</p>
                  <p className="text-sm text-primary-foreground/80">Licensed in all counties</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-primary-foreground/60" />
                <div>
                  <p className="font-medium">Mon-Fri: 7:00 AM - 7:00 PM</p>
                  <p className="text-sm text-primary-foreground/80">Sat-Sun: 8:00 AM - 5:00 PM</p>
                  <p className="text-sm text-accent font-medium">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Banner */}
      <div className="bg-primary-dark py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>EPA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Better Business Bureau A+</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>State Licensed #PC-12345</span>
              </div>
            </div>
            <div className="text-sm text-primary-foreground/80">
              <span className="font-medium text-accent">Special Offer:</span> 10% off first service for new customers
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-dark border-t border-primary-foreground/10 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 Dutton Pest Erradication. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="hover:text-primary-foreground transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;