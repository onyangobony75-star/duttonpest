import { Shield, Award, Users, Clock, Leaf, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import teamImage from "@/assets/team-image.jpg";

const TrustSection = () => {
  const trustBadges = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed pest control professionals with comprehensive insurance coverage"
    },
    {
      icon: Award,
      title: "Certified Technicians",
      description: "State-certified professionals with ongoing training and safety certifications"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Safe, environmentally responsible treatments that protect your family and pets"
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency services for urgent pest control situations"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown",
      rating: 5,
      text: "Dutton Pest Control saved our home from a serious termite problem. Professional, fast, and the treatment was completely safe for our kids and pets.",
      service: "Termite Control"
    },
    {
      name: "Mike Rodriguez",
      location: "Suburbs",
      rating: 5,
      text: "Excellent service! They eliminated our rodent problem in just one visit and provided great advice on prevention. Highly recommend!",
      service: "Rodent Control"
    },
    {
      name: "Emily Chen",
      location: "City Center",
      rating: 5,
      text: "The team was punctual, professional, and very knowledgeable. They explained everything clearly and the results were immediate.",
      service: "General Pest Control"
    }
  ];

  const guarantees = [
    "100% Satisfaction Guarantee",
    "Free Follow-up Inspections",
    "Warranty on All Services",
    "No Hidden Fees Policy"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Trust Badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustBadges.map((badge, index) => (
            <Card 
              key={badge.title} 
              className="text-center p-6 hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <badge.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </Card>
          ))}
        </div>

        {/* Main Trust Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image and Stats */}
          <div className="space-y-6 animate-fade-in">
            <div className="relative">
              <img
                src={teamImage}
                alt="Professional pest control team"
                className="w-full h-[400px] object-cover rounded-2xl shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl" />
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-card p-4 rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-primary">Dutton Pest</span> Control?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 15 years of experience protecting families and businesses, 
                we're your trusted local pest control experts committed to safe, 
                effective, and environmentally responsible solutions.
              </p>
            </div>

            {/* Guarantees */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">Our Guarantees:</h3>
              {guarantees.map((guarantee) => (
                <div key={guarantee} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success shrink-0" />
                  <span className="text-foreground font-medium">{guarantee}</span>
                </div>
              ))}
            </div>

            <div className="bg-success/10 border border-success/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-6 w-6 text-success" />
                <h4 className="font-bold text-success">100% Safe & Eco-Friendly</h4>
              </div>
              <p className="text-success/80">
                All our treatments are family and pet-safe, using the latest 
                eco-friendly methods and products that protect both your home and the environment.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Our <span className="text-primary">Customers</span> Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it - see what our satisfied customers have to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="p-6 animate-fade-in hover:shadow-medium transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="text-trust text-lg">★</div>
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.service}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;