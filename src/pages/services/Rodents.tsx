import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Rat, CheckCircle, Phone, AlertTriangle, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Rodents = () => {
  const treatmentOptions = [
    {
      title: "Inspection & Assessment",
      description: "Thorough property inspection to identify entry points and nesting areas",
      features: ["Complete property survey", "Entry point identification", "Damage assessment"],
      price: "Free with service"
    },
    {
      title: "Humane Removal",
      description: "Safe, humane trapping and removal of rodents",
      features: ["Live trapping methods", "Safe disposal", "Minimal stress to animals"],
      price: "Starting at $199"
    },
    {
      title: "Exclusion & Prevention",
      description: "Seal entry points and implement long-term prevention strategies",
      features: ["Entry point sealing", "Mesh installation", "Prevention advice"],
      price: "Starting at $299"
    }
  ];

  const signs = [
    "Droppings in cabinets or drawers",
    "Gnaw marks on food packaging",
    "Scratching sounds in walls/ceiling",
    "Grease marks along baseboards",
    "Nesting materials (shredded paper)",
    "Strong ammonia-like odor"
  ];

  const healthRisks = [
    "Salmonella and other bacterial infections",
    "Hantavirus (from deer mice)",
    "Leptospirosis",
    "Tularemia",
    "Contamination of food and surfaces"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-accent/10 to-primary/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Rat className="h-8 w-8 text-accent" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                    <span className="text-accent">Rodent</span> Control
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Safe, humane, and effective rodent removal and prevention. We eliminate rats, mice, 
                  and other rodents while preventing future infestations through comprehensive exclusion methods.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="cta" size="lg">
                    <Link to="/quote">
                      <Phone className="h-5 w-5" />
                      Get Free Quote
                    </Link>
                  </Button>
                  <Button variant="emergency" size="lg">
                    <AlertTriangle className="h-5 w-5" />
                    Emergency Service
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-scale-in">
                <Card className="bg-accent/5 border-accent/20 p-6">
                  <div className="text-center space-y-4">
                    <AlertTriangle className="h-16 w-16 text-accent mx-auto" />
                    <h3 className="text-2xl font-bold text-accent">Health Risk Alert</h3>
                    <p className="text-lg text-foreground">Rodents can spread over 35 diseases</p>
                    <p className="text-muted-foreground">
                      Immediate professional removal is essential for your family's health and safety
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Signs & Health Risks */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Warning Signs */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Signs of <span className="text-accent">Rodent Activity</span>
                </h2>
                <div className="space-y-4">
                  {signs.map((sign, index) => (
                    <div key={sign} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <AlertTriangle className="h-5 w-5 text-accent mt-1 shrink-0" />
                      <p className="text-foreground">{sign}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Health Risks */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  <span className="text-accent">Health</span> Risks
                </h2>
                <div className="space-y-4">
                  {healthRisks.map((risk, index) => (
                    <div key={risk} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <AlertTriangle className="h-5 w-5 text-accent mt-1 shrink-0" />
                      <p className="text-foreground">{risk}</p>
                    </div>
                  ))}
                </div>
                <Card className="mt-6 bg-emergency/5 border-emergency/20 p-4">
                  <p className="text-emergency font-medium">
                    <strong>Important:</strong> If you suspect rodent activity, contact us immediately. 
                    Quick action prevents health risks and property damage.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Rodent Control</span> Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Humane, effective, and comprehensive rodent elimination
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {treatmentOptions.map((option, index) => (
                <Card key={option.title} className="hover:shadow-strong transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardHeader>
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <CardTitle className="text-xl text-foreground">{option.title}</CardTitle>
                    <p className="text-muted-foreground">{option.description}</p>
                    <div className="text-2xl font-bold text-accent">{option.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {option.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="cta" size="lg">
                <Link to="/quote">Get Complete Rodent Solution</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Our Methods */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold text-foreground">
                  Why Our <span className="text-primary">Humane Approach</span> Works
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-success mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Family & Pet Safe</h3>
                      <p className="text-muted-foreground">No harmful chemicals or dangerous traps around children and pets</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Long-term Solution</h3>
                      <p className="text-muted-foreground">Focus on exclusion prevents future infestations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-success mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Fast Results</h3>
                      <p className="text-muted-foreground">Most infestations resolved within 1-2 weeks</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-primary/5 border-primary/20 p-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-primary">Emergency Rodent Service</h3>
                  <p className="text-muted-foreground">
                    Rodent problems can't wait. We offer same-day emergency service for 
                    severe infestations that pose immediate health risks.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-foreground">Same-day service available</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-foreground">24/7 emergency hotline</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-foreground">Immediate health risk assessment</span>
                    </div>
                  </div>
                  <Button variant="emergency" size="lg" className="w-full">
                    <Phone className="h-5 w-5" />
                    Call Emergency Line
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rodents;