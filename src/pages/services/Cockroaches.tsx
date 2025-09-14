import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bug, 
  Shield, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Phone, 
  Star,
  Zap,
  Home,
  Building2
} from "lucide-react";
import { Link } from "react-router-dom";

const Cockroaches = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-background to-secondary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/20">
                  <Bug className="h-4 w-4 mr-2" />
                  Cockroach Control Experts
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Professional Cockroach 
                  <span className="text-primary"> Elimination</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fast, effective cockroach control with guaranteed results. We eliminate infestations and prevent future problems with our comprehensive treatment programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link to="/quote">Get Free Inspection</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">
                      <Phone className="h-5 w-5 mr-2" />
                      Call (555) 123-4567
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <Card className="border-2 border-destructive/20 bg-gradient-to-br from-background to-destructive/5">
                  <CardHeader>
                    <CardTitle className="flex items-center text-destructive">
                      <AlertTriangle className="h-6 w-6 mr-2" />
                      Emergency Cockroach Service
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        Same-Day Service Available
                      </div>
                      <div className="flex items-center text-sm">
                        <Shield className="h-4 w-4 mr-2 text-primary" />
                        100% Satisfaction Guarantee
                      </div>
                      <div className="flex items-center text-sm">
                        <Zap className="h-4 w-4 mr-2 text-primary" />
                        Fast-Acting Treatment
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Signs of Cockroach Infestation
              </h2>
              <p className="text-xl text-muted-foreground">
                Early detection is crucial for effective cockroach control
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Live Cockroaches",
                  description: "Seeing cockroaches, especially during daylight hours, indicates a significant infestation",
                  icon: Bug
                },
                {
                  title: "Cockroach Droppings",
                  description: "Small, dark, cylindrical droppings resembling coffee grounds or black pepper",
                  icon: AlertTriangle
                },
                {
                  title: "Musty Odor",
                  description: "Strong, oily, musty smell that gets worse with larger infestations",
                  icon: AlertTriangle
                },
                {
                  title: "Egg Cases",
                  description: "Brown, oval-shaped egg cases (oothecae) in hidden areas like cabinets and cracks",
                  icon: AlertTriangle
                },
                {
                  title: "Shed Skins",
                  description: "Molted cockroach skins found near nesting areas and hiding spots",
                  icon: AlertTriangle
                },
                {
                  title: "Grease Marks",
                  description: "Dark smear marks along walls and surfaces where cockroaches travel regularly",
                  icon: AlertTriangle
                }
              ].map((sign, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <sign.icon className="h-5 w-5 mr-2 text-destructive" />
                      {sign.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{sign.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Cockroach Control Methods
              </h2>
              <p className="text-xl text-muted-foreground">
                Advanced treatments tailored to eliminate all cockroach species
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardHeader>
                  <Badge className="w-fit mb-2">Most Popular</Badge>
                  <CardTitle className="text-2xl">Gel Bait Treatment</CardTitle>
                  <CardDescription className="text-lg">
                    Targeted cockroach elimination with professional-grade gel baits
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-3xl font-bold text-primary">$89 - $149</div>
                  <ul className="space-y-3">
                    {[
                      "Strategic gel bait placement",
                      "Targets entire colony",
                      "Safe for families and pets",
                      "Long-lasting protection",
                      "Follow-up service included"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 mr-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/quote">Choose This Treatment</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Zap className="h-6 w-6 mr-2 text-destructive" />
                    Spray Treatment
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Immediate knockdown with residual protection
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-3xl font-bold text-primary">$69 - $119</div>
                  <ul className="space-y-3">
                    {[
                      "Fast-acting insecticide spray",
                      "Immediate results",
                      "Crack and crevice treatment",
                      "Prevents re-infestation",
                      "30-day guarantee"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 mr-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/quote">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Cockroach Prevention Tips
              </h2>
              <p className="text-xl text-muted-foreground">
                Keep your property cockroach-free with these proven strategies
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Eliminate Food Sources",
                  tips: ["Clean up crumbs immediately", "Store food in sealed containers", "Empty trash regularly", "Clean grease buildup"]
                },
                {
                  title: "Remove Water Sources",
                  tips: ["Fix leaky pipes", "Dry sinks and tubs", "Empty pet water bowls", "Use dehumidifiers"]
                },
                {
                  title: "Seal Entry Points",
                  tips: ["Caulk cracks and crevices", "Weather-strip doors", "Screen vents", "Seal around pipes"]
                },
                {
                  title: "Reduce Hiding Places",
                  tips: ["Declutter storage areas", "Remove cardboard boxes", "Clean behind appliances", "Trim vegetation"]
                }
              ].map((category, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Professional Cockroach Control
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our experienced technicians provide effective cockroach control for both residential and commercial properties. We use integrated pest management techniques to ensure long-lasting results.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <Home className="h-5 w-5 mr-2 text-primary" />
                    <span>Residential Properties</span>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 mr-2 text-primary" />
                    <span>Commercial Buildings</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-primary" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-primary" />
                    <span>Satisfaction Guaranteed</span>
                  </div>
                </div>
              </div>
              <Card className="border-2 border-destructive/20 bg-gradient-to-br from-background to-destructive/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Ready to Get Started?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/quote">Schedule Free Inspection</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link to="/contact">
                      <Phone className="h-5 w-5 mr-2" />
                      Call Now: (555) 123-4567
                    </Link>
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Same-day service available • Licensed & insured • 100% satisfaction guarantee
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cockroaches;