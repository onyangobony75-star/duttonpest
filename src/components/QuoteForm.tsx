import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, CheckCircle, Clock } from "lucide-react";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pestType: "",
    urgency: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Quote request submitted:", formData);
    alert("Thank you! We'll contact you within 24 hours with your free quote.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-medium">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-foreground">Get Your Free Quote</CardTitle>
          <p className="text-muted-foreground">
            Fill out the form below and we'll contact you within 24 hours with a detailed quote
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Property Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                required
                placeholder="123 Main St, City, State"
              />
            </div>

            {/* Service Details */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pestType">Type of Pest Problem *</Label>
                <Select onValueChange={(value) => handleChange("pestType", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pest type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="termites">Termites</SelectItem>
                    <SelectItem value="rodents">Rodents (Rats/Mice)</SelectItem>
                    <SelectItem value="bed-bugs">Bed Bugs</SelectItem>
                    <SelectItem value="cockroaches">Cockroaches</SelectItem>
                    <SelectItem value="ants">Ants</SelectItem>
                    <SelectItem value="spiders">Spiders</SelectItem>
                    <SelectItem value="general">General Pest Control</SelectItem>
                    <SelectItem value="commercial">Commercial Service</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="urgency">Urgency Level *</Label>
                <Select onValueChange={(value) => handleChange("urgency", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="How urgent?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency">Emergency (Same Day)</SelectItem>
                    <SelectItem value="urgent">Urgent (Within 2-3 Days)</SelectItem>
                    <SelectItem value="normal">Normal (Within a Week)</SelectItem>
                    <SelectItem value="flexible">Flexible Timing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Problem Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Please describe your pest problem, where you've seen the pests, severity, etc."
                rows={4}
              />
            </div>

            <Button type="submit" variant="cta" size="lg" className="w-full">
              <Mail className="h-5 w-5" />
              Get My Free Quote
            </Button>
          </form>

          {/* Contact Options */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="text-center mb-4">
              <p className="text-muted-foreground">Prefer to speak with us directly?</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="flex-1">
                <Phone className="h-5 w-5" />
                Call (123) 456-7890
              </Button>
              <Button variant="emergency" className="flex-1">
                <Clock className="h-5 w-5" />
                Emergency Service
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="h-6 w-6 text-success" />
              <span className="text-sm text-muted-foreground">Free Quotes</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="h-6 w-6 text-success" />
              <span className="text-sm text-muted-foreground">Licensed & Insured</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="h-6 w-6 text-success" />
              <span className="text-sm text-muted-foreground">Eco-Friendly</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="h-6 w-6 text-success" />
              <span className="text-sm text-muted-foreground">24/7 Emergency</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteForm;