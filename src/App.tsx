import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contactanos from "./pages/Contactame";
import NotFound from "./pages/NotFound";
import EsclavasVips from "./pages/EsclavasVips";
import EsclavaBuscanAmo from "./pages/EsclavaBuscanAmo";
import SumisionOnline from "./pages/SumisionOnline";
import Presentacion from "./pages/Presentacion";
import Condiciones from "./pages/Condiciones";
import Privacidad from "./pages/Privacidad";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contactame" element={<Contactanos />} />
          <Route path="/presentacion" element={<Presentacion />} />
          <Route path="/esclavas-vips" element={<EsclavasVips />} />
          <Route path="/esclavas-buscan-amo" element={<EsclavaBuscanAmo />} />
          <Route path="/sumision-online" element={<SumisionOnline />} />
          <Route path="/condiciones" element={<Condiciones />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
