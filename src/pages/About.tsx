import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Users, Award, Clock, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import teamImage from "@/assets/team-image.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize the safety of your family, pets, and the environment in every treatment we perform."
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction is our top priority. We work closely with you to solve your pest problems."
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Our certified technicians bring expertise and professionalism to every job."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Count on us for prompt, reliable service when you need it most, including emergencies."
    }
  ];

  const certifications = [
    "EPA Certified Pest Control",
    "State Licensed #PC-12345",
    "Better Business Bureau A+",
    "Integrated Pest Management Certified",
    "OSHA Safety Compliant",
    "Eco-Friendly Practices Certified"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  About <span className="text-primary">Dutton</span> Pest Erradication
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  For over 15 years, we've been protecting families and businesses throughout 
                  the greater metro area with safe, effective, and environmentally responsible 
                  pest control solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="lg">
                    <Phone className="h-5 w-5" />
                    Contact Us Today
                  </Button>
                  <Button variant="outline" size="lg">
                    View Our Services
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-scale-in">
                <img
                  src={teamImage}
                  alt="Dutton Pest Control Team"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-strong"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2009 by Mike Dutton, our company began with a simple mission: to provide 
                safe, effective pest control services that protect families and businesses without 
                compromising their health or the environment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a small, local operation has grown into the region's most trusted 
                pest control service, serving over 1,000 satisfied customers. Our commitment to 
                excellence, safety, and customer satisfaction has made us the go-to choice for 
                pest control in our community.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to innovate and improve our services, using the latest 
                eco-friendly technologies and methods to ensure your property stays pest-free 
                while keeping your family and pets safe.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Core Values</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                These principles guide everything we do and define who we are
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={value.title} 
                  className="text-center p-6 hover:shadow-medium transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Stats */}
              <div className="space-y-8 animate-fade-in">
                <h2 className="text-3xl font-bold text-foreground">
                  By the <span className="text-primary">Numbers</span>
                </h2>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center bg-card p-6 rounded-lg shadow-soft">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-muted-foreground">Years of Experience</div>
                  </div>
                  <div className="text-center bg-card p-6 rounded-lg shadow-soft">
                    <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-muted-foreground">Happy Customers</div>
                  </div>
                  <div className="text-center bg-card p-6 rounded-lg shadow-soft">
                    <div className="text-3xl font-bold text-primary mb-2">5★</div>
                    <div className="text-muted-foreground">Average Rating</div>
                  </div>
                  <div className="text-center bg-card p-6 rounded-lg shadow-soft">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-muted-foreground">Emergency Service</div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold text-foreground">
                  <span className="text-primary">Licensed</span> & Certified
                </h2>
                <p className="text-lg text-muted-foreground">
                  We maintain the highest industry standards and certifications to ensure 
                  safe, effective, and compliant pest control services.
                </p>
                
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success shrink-0" />
                      <span className="text-foreground font-medium">{cert}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-success/10 border border-success/20 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="h-6 w-6 text-success" />
                    <h4 className="font-bold text-success">Fully Insured & Bonded</h4>
                  </div>
                  <p className="text-success/80">
                    Your property is protected with comprehensive liability insurance 
                    and bonding for complete peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Protect Your Property?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Contact us today for a free inspection and quote. Our friendly, professional 
              team is ready to solve your pest problems quickly and safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Phone className="h-5 w-5" />
                Call (123) 456-7890
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get Free Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;