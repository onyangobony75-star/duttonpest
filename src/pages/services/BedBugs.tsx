import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bed, CheckCircle, Phone, AlertTriangle, Shield, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const BedBugs = () => {
  const treatmentOptions = [
    {
      title: "Heat Treatment",
      description: "Chemical-free elimination using controlled high temperatures",
      features: ["100% chemical-free", "Single treatment solution", "Kills all life stages", "No preparation required"],
      price: "Starting at $499"
    },
    {
      title: "Integrated Pest Management",
      description: "Combination of heat, targeted chemicals, and monitoring",
      features: ["Multi-approach strategy", "Reduced chemical use", "Long-term monitoring", "Follow-up included"],
      price: "Starting at $399"
    },
    {
      title: "Steam Treatment",
      description: "Eco-friendly steam application for targeted areas",
      features: ["Eco-friendly method", "Safe for sensitive areas", "Immediate results", "No chemicals"],
      price: "Starting at $299"
    }
  ];

  const signs = [
    "Small, dark or rust-colored stains on sheets",
    "Sweet musty odor in bedrooms",
    "Small blood spots on pillowcases",
    "Red, itchy welts on skin (often in lines)",
    "Dark spots or stains on mattresses",
    "Live bugs in mattress seams or furniture"
  ];

  const preparation = [
    "Wash all bedding and clothes in hot water (120°F+)",
    "Dry on high heat for 30+ minutes",
    "Vacuum all areas thoroughly",
    "Remove clutter from around beds",
    "Bag and seal items if heavily infested",
    "Allow access to all affected rooms"
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
                    <Bed className="h-8 w-8 text-accent" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                    <span className="text-accent">Bed Bug</span> Treatment
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Complete bed bug elimination using advanced heat treatment and eco-friendly methods. 
                  Our certified technicians provide fast, effective solutions with guaranteed results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="cta" size="lg">
                    <Link to="/quote">
                      <Phone className="h-5 w-5" />
                      Get Free Inspection
                    </Link>
                  </Button>
                  <Button variant="emergency" size="lg">
                    <AlertTriangle className="h-5 w-5" />
                    Same Day Service
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-scale-in">
                <Card className="bg-accent/5 border-accent/20 p-6">
                  <div className="text-center space-y-4">
                    <Thermometer className="h-16 w-16 text-accent mx-auto" />
                    <h3 className="text-2xl font-bold text-accent">Heat Treatment</h3>
                    <p className="text-lg text-foreground">120°F+ eliminates all bed bugs</p>
                    <p className="text-muted-foreground">
                      Our chemical-free heat treatment kills bed bugs in all life stages, 
                      including eggs, in just one treatment
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Signs & Identification */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Signs of <span className="text-accent">Bed Bug Infestation</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Early detection is key to preventing a small problem from becoming a major infestation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {signs.map((sign, index) => (
                <Card key={sign} className="p-6 hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-accent mt-1 shrink-0" />
                    <p className="text-foreground font-medium">{sign}</p>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-emergency/5 border-emergency/20 p-6">
              <div className="text-center">
                <AlertTriangle className="h-12 w-12 text-emergency mx-auto mb-4" />
                <h3 className="text-xl font-bold text-emergency mb-2">Don't Wait - Act Fast!</h3>
                <p className="text-emergency/80">
                  Bed bugs multiply rapidly. A small infestation can become a major problem in just weeks. 
                  Contact us immediately if you suspect bed bugs.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Bed Bug Treatment</span> Methods
              </h2>
              <p className="text-lg text-muted-foreground">
                Advanced, proven methods for complete bed bug elimination
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {treatmentOptions.map((option, index) => (
                <Card key={option.title} className="hover:shadow-strong transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{option.title}</CardTitle>
                    <p className="text-muted-foreground">{option.description}</p>
                    <div className="text-2xl font-bold text-accent">{option.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {option.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="default" className="w-full">
                      <Link to="/quote">Get Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Preparation & Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Preparation */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold text-foreground">
                  <span className="text-primary">Preparation</span> Guidelines
                </h2>
                <p className="text-lg text-muted-foreground">
                  Proper preparation ensures maximum treatment effectiveness
                </p>
                <div className="space-y-4">
                  {preparation.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-0.5 shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-foreground">{step}</p>
                    </div>
                  ))}
                </div>
                <Card className="bg-primary/5 border-primary/20 p-4">
                  <p className="text-primary font-medium">
                    <strong>Note:</strong> Our team will provide detailed preparation instructions 
                    specific to your treatment method and situation.
                  </p>
                </Card>
              </div>

              {/* Why Choose Our Service */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold text-foreground">
                  Why Choose <span className="text-primary">Our Service</span>?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Thermometer className="h-6 w-6 text-success mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Advanced Heat Treatment</h3>
                      <p className="text-muted-foreground">Chemical-free method that kills all life stages in one treatment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-success mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">100% Guarantee</h3>
                      <p className="text-muted-foreground">We guarantee complete elimination or we return for free</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Follow-up Included</h3>
                      <p className="text-muted-foreground">Free follow-up inspections to ensure complete elimination</p>
                    </div>
                  </div>
                </div>

                <Card className="bg-success/5 border-success/20 p-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-success">Same Day Service Available</h3>
                    <p className="text-muted-foreground">
                      We understand the urgency of bed bug problems. Same-day service 
                      available for emergency situations.
                    </p>
                    <Button asChild variant="emergency" size="lg" className="w-full">
                      <Link to="/quote">Schedule Emergency Service</Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BedBugs;