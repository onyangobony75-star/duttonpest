import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    urgency: "normal"
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll contact you within 2 hours during business hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "", urgency: "normal" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-8 w-8" />
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-white/30">
              24/7 Emergency Service
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact DUTTON PEST ERRADICATION
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Fast Response • Licensed & Insured • 100% Satisfaction Guaranteed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Call (123) 456-7890
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white/30 text-primary-foreground hover:bg-white/10">
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Need immediate pest control? We're here to help! Contact us 24/7 for emergency services or schedule a free inspection.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="border-l-4 border-l-emergency">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-emergency">
                      <Phone className="h-6 w-6" />
                      Emergency Hotline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-foreground">(123) 456-7890</p>
                    <p className="text-muted-foreground">Available 24/7 for urgent pest problems</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3">
                      <Mail className="h-6 w-6 text-primary" />
                      Email Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">info@duttonpest.com</p>
                    <p className="text-muted-foreground">We respond within 2 hours</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-primary" />
                      Service Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">Greater Metro Area</p>
                    <p className="text-muted-foreground">Downtown, Suburbs, Rural Areas</p>
                    <p className="text-sm text-muted-foreground mt-2">Free estimates within 50 miles</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-primary" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <p><span className="font-semibold">Mon-Fri:</span> 7:00 AM - 7:00 PM</p>
                      <p><span className="font-semibold">Saturday:</span> 8:00 AM - 5:00 PM</p>
                      <p><span className="font-semibold">Sunday:</span> Emergency Only</p>
                    </div>
                    <Badge variant="secondary" className="mt-3">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Same-Day Service Available
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">Get a free quote or schedule an inspection</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="urgency" className="block text-sm font-semibold text-foreground mb-2">
                        Urgency Level
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="normal">Normal - Schedule within a week</option>
                        <option value="urgent">Urgent - Need service within 24 hours</option>
                        <option value="emergency">Emergency - Need immediate help</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g., Termite inspection needed"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Describe your pest problem, property type, and any specific concerns..."
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message & Get Free Quote
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      * Required fields. We typically respond within 2 hours during business hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-muted/50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-muted-foreground">Fully licensed pest control professionals with comprehensive insurance coverage</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Satisfaction</h3>
              <p className="text-muted-foreground">We guarantee our work. If pests return, so do we - at no extra cost</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Response</h3>
              <p className="text-muted-foreground">Same-day service available. Emergency response within 2 hours</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;