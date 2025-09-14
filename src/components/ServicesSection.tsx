import { Bug, Home, Rat, Bed, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Bug,
      title: "Termite Control",
      description: "Comprehensive termite inspection and treatment to protect your property foundation.",
      features: ["Pre-treatment", "Post-construction", "Annual inspections"],
      href: "/services/termites"
    },
    {
      icon: Rat,
      title: "Rodent Control",
      description: "Safe and effective removal of rats, mice, and other rodents from your property.",
      features: ["Humane removal", "Entry point sealing", "Prevention plans"],
      href: "/services/rodents"
    },
    {
      icon: Bed,
      title: "Bed Bug Treatment",
      description: "Complete bed bug elimination using advanced heat treatment and eco-friendly solutions.",
      features: ["Heat treatment", "Chemical-free options", "Follow-up service"],
      href: "/services/bed-bugs"
    },
    {
      icon: Home,
      title: "Cockroach Control",
      description: "Eliminate cockroach infestations with targeted treatments and preventive measures.",
      features: ["Gel baiting", "Crack & crevice treatment", "Ongoing monitoring"],
      href: "/services/cockroaches"
    },
    {
      icon: Zap,
      title: "General Pest Control",
      description: "Comprehensive pest management for ants, spiders, flies, and other common pests.",
      features: ["Monthly treatments", "Seasonal protection", "Emergency service"],
      href: "/services/general-pest"
    },
    {
      icon: Bug,
      title: "Commercial Services",
      description: "Professional pest control solutions for businesses, restaurants, and office buildings.",
      features: ["Customized plans", "Discreet service", "Compliance documentation"],
      href: "/services/commercial"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Professional</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From termites to rodents, we provide comprehensive pest control solutions 
            tailored to your specific needs with eco-friendly and family-safe methods.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-2">
                  <Button asChild variant="default" size="sm" className="flex-1">
                    <Link to={service.href}>
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/quote">Get Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Service Banner */}
        <Card className="bg-gradient-emergency text-emergency-foreground p-8 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Need Emergency Pest Control?</h3>
            <p className="text-emergency-foreground/90 mb-6">
              We're available 24/7 for urgent pest control situations. Don't wait - contact us now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="bg-white text-emergency hover:bg-gray-100">
                <Zap className="h-5 w-5" />
                Emergency Service
              </Button>
              <Button variant="outline" className="bg-white text-emergency hover:bg-gray-100">
                Call (123) 456-7890
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;