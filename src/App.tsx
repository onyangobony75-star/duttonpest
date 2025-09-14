import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import Termites from "./pages/services/Termites";
import Rodents from "./pages/services/Rodents";
import BedBugs from "./pages/services/BedBugs";
import Cockroaches from "./pages/services/Cockroaches";
import GeneralPest from "./pages/services/GeneralPest";
import Commercial from "./pages/services/Commercial";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/termites" element={<Termites />} />
          <Route path="/services/rodents" element={<Rodents />} />
          <Route path="/services/bed-bugs" element={<BedBugs />} />
          <Route path="/services/cockroaches" element={<Cockroaches />} />
          <Route path="/services/general-pest" element={<GeneralPest />} />
          <Route path="/services/commercial" element={<Commercial />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
