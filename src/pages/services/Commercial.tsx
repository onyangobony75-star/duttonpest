import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Shield, 
  Clock, 
  CheckCircle2, 
  Phone, 
  Star,
  FileText,
  Users,
  Zap,
  Calendar,
  AlertTriangle,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const Commercial = () => {
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
                  <Building2 className="h-4 w-4 mr-2" />
                  Commercial Pest Solutions
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Professional 
                  <span className="text-primary"> Commercial</span>
                  <br />Pest Management
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Protect your business reputation and ensure regulatory compliance with our comprehensive commercial pest control programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link to="/quote">Request Commercial Quote</Link>
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
                      <Award className="h-6 w-6 mr-2" />
                      Commercial Excellence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center text-sm">
                        <FileText className="h-4 w-4 mr-2 text-primary" />
                        Compliance Documentation
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        24/7 Emergency Response
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        Dedicated Account Manager
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-muted-foreground">
                Specialized pest control solutions for every type of business
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  industry: "Food Service",
                  description: "Restaurants, cafeterias, food processing facilities",
                  specialties: ["HACCP compliance", "Health department prep", "Sensitive area treatments"]
                },
                {
                  industry: "Healthcare",
                  description: "Hospitals, clinics, long-term care facilities",
                  specialties: ["Patient safety protocols", "Medical-grade treatments", "Infection control"]
                },
                {
                  industry: "Retail & Shopping",
                  description: "Stores, malls, shopping centers",
                  specialties: ["Discreet service", "Minimal disruption", "Customer safety focus"]
                },
                {
                  industry: "Office Buildings",
                  description: "Corporate offices, business complexes",
                  specialties: ["After-hours service", "Professional appearance", "Minimal odor treatments"]
                },
                {
                  industry: "Manufacturing",
                  description: "Warehouses, factories, production facilities",
                  specialties: ["Industrial-strength solutions", "Equipment protection", "Worker safety"]
                },
                {
                  industry: "Education",
                  description: "Schools, universities, daycare centers",
                  specialties: ["Child-safe methods", "Scheduled treatments", "IPM programs"]
                }
              ].map((industry, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{industry.industry}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {industry.specialties.map((specialty, specialtyIndex) => (
                        <li key={specialtyIndex} className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                          <span className="text-sm">{specialty}</span>
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
                Commercial Service Programs
              </h2>
              <p className="text-xl text-muted-foreground">
                Flexible programs designed for business needs and budgets
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">Basic Protection</CardTitle>
                  <CardDescription className="text-lg">
                    Essential pest control for small businesses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-3xl font-bold text-primary">Starting at $149/month</div>
                  <ul className="space-y-3">
                    {[
                      "Monthly inspections & treatments",
                      "Interior & exterior service",
                      "Common pest control",
                      "Service documentation",
                      "Emergency call-backs"
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
                  <CardTitle className="text-2xl">Comprehensive Care</CardTitle>
                  <CardDescription className="text-lg">
                    Full-service pest management program
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-3xl font-bold text-primary">Starting at $249/month</div>
                  <ul className="space-y-3">
                    {[
                      "Bi-weekly service visits",
                      "Specialized treatments",
                      "Compliance documentation",
                      "Dedicated account manager",
                      "24/7 emergency response",
                      "Pest monitoring stations"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 mr-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/quote">Start Program</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Zap className="h-6 w-6 mr-2 text-primary" />
                    Premium Solution
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Advanced IPM for high-risk facilities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-3xl font-bold text-primary">Custom Pricing</div>
                  <ul className="space-y-3">
                    {[
                      "Weekly service & monitoring",
                      "Advanced IPM protocols",
                      "Regulatory compliance support",
                      "Real-time reporting portal",
                      "Staff training programs",
                      "Audit preparation assistance"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 mr-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/quote">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Businesses Choose Us
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional pest management that protects your business
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Protect Your Reputation",
                  description: "Prevent pest-related negative reviews and maintain customer confidence"
                },
                {
                  icon: FileText,
                  title: "Regulatory Compliance",
                  description: "Stay compliant with health department and industry regulations"
                },
                {
                  icon: Clock,
                  title: "Minimal Disruption",
                  description: "Flexible scheduling that works around your business operations"
                },
                {
                  icon: Users,
                  title: "Professional Service",
                  description: "Uniformed, trained technicians who represent your business well"
                }
              ].map((benefit, index) => (
                <Card key={index} className="text-center border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Compliance & Documentation
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We understand the importance of regulatory compliance in commercial settings. Our services include comprehensive documentation and reporting to help you meet industry standards.
                </p>
                <div className="space-y-4">
                  {[
                    "HACCP compliance documentation",
                    "Health department inspection preparation",
                    "Detailed service reports and logs",
                    "Pest monitoring and trending data",
                    "Certificate of service completion",
                    "Regulatory update notifications"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Ready to Protect Your Business?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/quote">Request Commercial Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link to="/contact">
                      <Phone className="h-5 w-5 mr-2" />
                      Call: (555) 123-4567
                    </Link>
                  </Button>
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mt-4">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="h-5 w-5 mr-2 text-destructive" />
                      <span className="font-semibold text-destructive">Emergency Service</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      24/7 emergency pest control available for urgent business situations
                    </p>
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

export default Commercial;