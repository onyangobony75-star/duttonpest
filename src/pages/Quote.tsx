import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { Phone, Clock, CheckCircle } from "lucide-react";

const Quote = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get Your <span className="text-primary">Free</span> Pest Control Quote
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              No hidden fees, no surprises. Get an honest, detailed quote for your pest control needs. 
              Our licensed professionals will provide a comprehensive assessment and solution.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Quick Response</h3>
                <p className="text-sm text-muted-foreground">We'll contact you within 24 hours</p>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="bg-primary/10 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Honest Pricing</h3>
                <p className="text-sm text-muted-foreground">No hidden fees or surprises</p>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Fast Service</h3>
                <p className="text-sm text-muted-foreground">Emergency service available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <QuoteForm />
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                How Our <span className="text-primary">Quote Process</span> Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple, fast, and transparent - get your quote in 3 easy steps
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold text-foreground">Submit Your Request</h3>
                <p className="text-muted-foreground">
                  Fill out our simple form with your contact information and pest problem details.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold text-foreground">Free Inspection</h3>
                <p className="text-muted-foreground">
                  Our certified technician visits your property for a thorough, free inspection.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground">Detailed Quote</h3>
                <p className="text-muted-foreground">
                  Receive a comprehensive quote with treatment options and pricing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quote;