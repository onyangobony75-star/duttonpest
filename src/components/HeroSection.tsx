import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-background to-primary-light/20">
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              <span>Licensed, Insured & Eco-Friendly</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Fast, Safe, and{" "}
              <span className="text-primary">Affordable</span>{" "}
              <span className="text-accent">Pest Control</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Protect your family and property with our professional pest control services. 
              100% safe, eco-friendly solutions with guaranteed results.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-medium">Same Day Service</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-medium">Family & Pet Safe</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-medium">100% Guarantee</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="hero" size="lg" className="group">
              <Link to="/quote">
                Book Free Inspection
                <Phone className="h-5 w-5 group-hover:animate-pulse" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="group">
              <MessageCircle className="h-5 w-5" />
              Chat With Expert
            </Button>
          </div>

          {/* Emergency Contact */}
          <Card className="p-6 bg-emergency/5 border-emergency/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-emergency text-lg">Emergency Pest Control</h3>
                <p className="text-muted-foreground">Available 24/7 for urgent situations</p>
              </div>
              <Button variant="emergency" className="shrink-0">
                Call Now
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Image */}
        <div className="relative lg:order-2 animate-scale-in">
          <div className="relative overflow-hidden rounded-2xl shadow-strong">
            <img
              src={heroImage}
              alt="Professional pest control technician"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          
          {/* Floating Trust Badge */}
          <div className="absolute -bottom-6 -left-6 bg-trust text-trust-foreground p-4 rounded-xl shadow-medium animate-fade-in">
            <div className="text-center">
              <div className="text-2xl font-bold">5★</div>
              <div className="text-sm font-medium">Rated Service</div>
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-medium animate-fade-in">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground font-medium">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;