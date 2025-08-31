import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bug, CheckCircle, Phone, AlertTriangle, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Termites = () => {
  const treatmentOptions = [
    {
      title: "Pre-Construction Treatment",
      description: "Soil treatment before construction for new buildings",
      features: ["Soil barrier application", "5-year warranty", "Prevents future infestations"],
      price: "Starting at $299"
    },
    {
      title: "Post-Construction Treatment",
      description: "Chemical barrier treatment for existing structures",
      features: ["Perimeter treatment", "Interior injection", "Annual monitoring"],
      price: "Starting at $599"
    },
    {
      title: "Baiting Systems",
      description: "Advanced termite monitoring and elimination stations",
      features: ["24/7 monitoring", "Eco-friendly option", "Colony elimination"],
      price: "Starting at $899"
    }
  ];

  const signs = [
    "Mud tubes on exterior walls",
    "Swarmers (winged termites)",
    "Discarded wings near doors/windows", 
    "Hollow-sounding wood",
    "Tight-fitting doors or windows",
    "Buckling paint or tiny holes in drywall"
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
                    <Bug className="h-8 w-8 text-accent" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                    <span className="text-accent">Termite</span> Control
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Protect your property investment with our comprehensive termite control solutions. 
                  We use advanced detection methods and proven treatments to eliminate termites and 
                  prevent future infestations.
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
                    Emergency Service
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-scale-in">
                <Card className="bg-accent/5 border-accent/20 p-6">
                  <div className="text-center space-y-4">
                    <AlertTriangle className="h-16 w-16 text-accent mx-auto" />
                    <h3 className="text-2xl font-bold text-accent">Termites Cause $5 Billion</h3>
                    <p className="text-lg text-foreground">in property damage annually in the US</p>
                    <p className="text-muted-foreground">
                      Don't wait - early detection and treatment can save thousands in repairs
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Warning Signs of <span className="text-accent">Termite Infestation</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Early detection is crucial - look for these signs around your property
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
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Termite Treatment</span> Options
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive solutions tailored to your specific termite problem
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

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold text-foreground">
                  Why Choose <span className="text-primary">Dutton</span> for Termite Control?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-success mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Licensed & Certified</h3>
                      <p className="text-muted-foreground">State-licensed technicians with specialized termite training</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Proven Methods</h3>
                      <p className="text-muted-foreground">Latest technology and EPA-approved treatments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-success mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Long-term Protection</h3>
                      <p className="text-muted-foreground">Warranties and ongoing monitoring included</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-primary/5 border-primary/20 p-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-primary">Free Termite Inspection</h3>
                  <p className="text-muted-foreground">
                    Our certified specialists will thoroughly inspect your property and provide 
                    a detailed report with treatment recommendations.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-foreground">No obligation</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-foreground">Comprehensive report</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-foreground">Treatment options</span>
                    </div>
                  </div>
                  <Button asChild variant="cta" size="lg" className="w-full">
                    <Link to="/quote">Schedule Inspection</Link>
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

export default Termites;