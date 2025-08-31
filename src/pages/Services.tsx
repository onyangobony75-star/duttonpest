import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bug, Home, Rat, Bed, Zap, ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Bug,
      title: "Termite Control",
      description: "Comprehensive termite inspection and treatment to protect your property foundation from costly damage.",
      features: ["Pre-construction treatment", "Post-construction barriers", "Annual inspections", "Baiting systems"],
      price: "Starting at $299",
      href: "/services/termites"
    },
    {
      icon: Rat,
      title: "Rodent Control",
      description: "Safe and effective removal of rats, mice, and other rodents with humane and eco-friendly methods.",
      features: ["Humane removal", "Entry point sealing", "Exclusion methods", "Prevention plans"],
      price: "Starting at $199",
      href: "/services/rodents"
    },
    {
      icon: Bed,
      title: "Bed Bug Treatment",
      description: "Complete bed bug elimination using advanced heat treatment and chemical-free solutions.",
      features: ["Heat treatment", "Chemical-free options", "Follow-up inspections", "Preparation guidance"],
      price: "Starting at $499",
      href: "/services/bed-bugs"
    },
    {
      icon: Home,
      title: "Cockroach Control",
      description: "Eliminate cockroach infestations with targeted treatments and long-term prevention strategies.",
      features: ["Gel baiting", "Crack & crevice treatment", "Ongoing monitoring", "Sanitation advice"],
      price: "Starting at $149",
      href: "/services/cockroaches"
    },
    {
      icon: Zap,
      title: "General Pest Control",
      description: "Comprehensive pest management for ants, spiders, flies, and other common household pests.",
      features: ["Monthly treatments", "Seasonal protection", "Interior/exterior service", "Emergency calls"],
      price: "Starting at $99/month",
      href: "/services/general-pests"
    },
    {
      icon: Bug,
      title: "Commercial Services",
      description: "Professional pest control solutions for businesses, restaurants, and office buildings.",
      features: ["Customized plans", "Discreet service", "Compliance documentation", "Regular inspections"],
      price: "Custom pricing",
      href: "/services/commercial"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional <span className="text-primary">Pest Control</span> Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From termites to rodents, we provide comprehensive pest control solutions 
              tailored to your specific needs with eco-friendly and family-safe methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                <Phone className="h-5 w-5" />
                Get Free Quote Today
              </Button>
              <Button variant="outline" size="lg">
                Emergency Service 24/7
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                        <div className="text-lg font-bold text-accent">{service.price}</div>
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex gap-3">
                      <Button asChild variant="default" className="flex-1">
                        <Link to={service.href}>
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline">
                        Get Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Our <span className="text-primary">Pest Control</span> Services?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Licensed & Insured", desc: "Fully certified professionals" },
                { title: "Eco-Friendly", desc: "Safe for family and pets" },
                { title: "24/7 Emergency", desc: "Available when you need us" },
                { title: "100% Guarantee", desc: "Satisfaction guaranteed" }
              ].map((benefit) => (
                <Card key={benefit.title} className="text-center p-6">
                  <h3 className="font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;