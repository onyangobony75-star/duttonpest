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
  Phone, 
  Star,
  Home,
  Leaf,
  Zap,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const GeneralPest = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-background to-secondary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  <Bug className="h-4 w-4 mr-2" />
                  Comprehensive Pest Control
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Complete 
                  <span className="text-primary"> Pest Protection</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Protect your property from all common pests with our comprehensive general pest control service. One treatment covers multiple pest problems.
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
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Shield className="h-6 w-6 mr-2" />
                      Complete Protection Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center text-sm">
                        <Target className="h-4 w-4 mr-2 text-primary" />
                        Targets 15+ Common Pests
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        Quarterly Service Programs
                      </div>
                      <div className="flex items-center text-sm">
                        <Leaf className="h-4 w-4 mr-2 text-primary" />
                        Eco-Friendly Solutions
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pests Covered Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pests We Control
              </h2>
              <p className="text-xl text-muted-foreground">
                Our general pest control service protects against these common invaders
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: "Crawling Insects",
                  pests: ["Ants", "Cockroaches", "Spiders", "Silverfish", "Beetles"]
                },
                {
                  category: "Flying Insects",
                  pests: ["Flies", "Mosquitoes", "Gnats", "Moths", "Wasps"]
                },
                {
                  category: "Occasional Invaders",
                  pests: ["Centipedes", "Millipedes", "Crickets", "Earwigs", "Sowbugs"]
                },
                {
                  category: "Stored Product Pests",
                  pests: ["Pantry moths", "Weevils", "Indian meal moths", "Flour beetles", "Grain beetles"]
                }
              ].map((category, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.pests.map((pest, pestIndex) => (
                        <li key={pestIndex} className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                          <span className="text-sm">{pest}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Plans */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Protection Plan
              </h2>
              <p className="text-xl text-muted-foreground">
                Flexible service options to fit your needs and budget
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">One-Time Service</CardTitle>
                  <CardDescription className="text-lg">
                    Single treatment for immediate pest problems
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-3xl font-bold text-primary">$119 - $179</div>
                  <ul className="space-y-3">
                    {[
                      "Comprehensive property inspection",
                      "Interior and exterior treatment",
                      "Targets all common pests",
                      "30-day service guarantee",
                      "Treatment report provided"
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

              <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5 relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl">Quarterly Program</CardTitle>
                  <CardDescription className="text-lg">
                    Year-round protection with seasonal treatments
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-3xl font-bold text-primary">$89/visit</div>
                  <div className="text-sm text-muted-foreground">($356/year, paid quarterly)</div>
                  <ul className="space-y-3">
                    {[
                      "4 treatments per year",
                      "Free re-services between visits",
                      "Seasonal pest adjustments",
                      "Priority scheduling",
                      "Detailed service reports",
                      "Money-back guarantee"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 mr-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/quote">Start Protection</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Zap className="h-6 w-6 mr-2 text-primary" />
                    Bi-Monthly Plan
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Enhanced protection for high-activity areas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-3xl font-bold text-primary">$79/visit</div>
                  <div className="text-sm text-muted-foreground">($474/year, 6 treatments)</div>
                  <ul className="space-y-3">
                    {[
                      "6 treatments per year",
                      "Enhanced monitoring",
                      "Free emergency services",
                      "24/7 customer support",
                      "Digital service tracking",
                      "Satisfaction guaranteed"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 mr-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/quote">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Treatment Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Systematic approach for maximum effectiveness
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Property Inspection",
                  description: "Thorough inspection to identify pest problems, entry points, and conducive conditions"
                },
                {
                  step: "2",
                  title: "Custom Treatment Plan",
                  description: "Develop targeted treatment strategy based on your specific pest issues and property needs"
                },
                {
                  step: "3",
                  title: "Interior Treatment",
                  description: "Apply treatments to baseboards, corners, and other interior areas where pests hide"
                },
                {
                  step: "4",
                  title: "Exterior Protection",
                  description: "Create protective barrier around your property's perimeter to prevent pest entry"
                }
              ].map((process, index) => (
                <Card key={index} className="text-center border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {process.step}
                    </div>
                    <CardTitle className="text-lg">{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Our General Pest Control?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Comprehensive Coverage",
                      description: "One service protects against multiple pest types, saving you time and money"
                    },
                    {
                      title: "Preventive Approach",
                      description: "Stop pest problems before they start with our proactive treatment methods"
                    },
                    {
                      title: "Safe & Eco-Friendly",
                      description: "Family and pet-safe treatments that are effective against pests, not your loved ones"
                    },
                    {
                      title: "Experienced Technicians",
                      description: "Licensed professionals with extensive training in integrated pest management"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 mr-3 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Ready for Pest-Free Living?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/quote">Get Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link to="/contact">
                      <Phone className="h-5 w-5 mr-2" />
                      Call: (555) 123-4567
                    </Link>
                  </Button>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <Star className="h-5 w-5 mx-auto text-primary mb-1" />
                      <div className="text-sm font-semibold">Licensed</div>
                      <div className="text-xs text-muted-foreground">& Insured</div>
                    </div>
                    <div className="text-center">
                      <Shield className="h-5 w-5 mx-auto text-primary mb-1" />
                      <div className="text-sm font-semibold">Guaranteed</div>
                      <div className="text-xs text-muted-foreground">Results</div>
                    </div>
                  </div>
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

export default GeneralPest;