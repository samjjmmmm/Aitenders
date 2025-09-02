// client/src/App.tsx
import React, { useEffect, useState } from "react"; // Ensure React and useState are imported
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { sessionManager } from "@/lib/session-manager"; // Assuming sessionManager is correctly defined/used elsewhere

// Import your page components
import Home from "@/pages/home";
import UC1Page from "@/pages/uc1";
import UC2Page from "@/pages/uc2";
import UC3Page from "@/pages/uc3";
import UC4Page from "@/pages/uc4";
import { UC5 } from "@/pages/uc5"; // Assuming UC5 is a named export
import UC6Page from "@/pages/uc6";
import UC7Page from "@/pages/uc7";
import UC8Page from "@/pages/uc8";
import WordAddonPage from "@/pages/word-addon";
import ProductPage from "@/pages/product";
import PrivacyPage from "@/pages/privacy";
import SecurityPage from "@/pages/security";
import SimulatorAdmin from "@/pages/simulator-admin";
import MailingAdmin from "@/pages/mailing-admin";
import NotFound from "@/pages/not-found";
// Corrected import for your Figma design page (assuming uc2test.tsx is the final name)
import UC2TestPage from "@/pages/uc2test"; 

// Force global CSS import (content should be in this index.css)
import "./index.css"; 

function RouterContent() { // Renamed from Router to avoid confusion with wouter's Router
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    // The <Switch> component is crucial here to ensure only one route renders at a time
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/uc1" component={UC1Page} />
      <Route path="/uc2" component={UC2Page} />
      {/* THIS IS THE CRUCIAL LINE - ENSURE IT'S DIRECTLY WITHIN <Switch> */}
      <Route path="/uc2test" component={UC2TestPage} /> 
      <Route path="/uc3" component={UC3Page} />
      <Route path="/uc4" component={UC4Page} />
      <Route path="/uc5" component={UC5} />
      <Route path="/uc6" component={UC6Page} />
      <Route path="/uc7" component={UC7Page} />
      <Route path="/uc8" component={UC8Page} />
      <Route path="/word-addon" component={WordAddonPage} />
      <Route path="/product" component={ProductPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/security" component={SecurityPage} />
      <Route path="/admin/simulator" component={SimulatorAdmin} />
      <Route path="/admin/mailing" component={MailingAdmin} />
      {/* This is the catch-all route for any undefined paths */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TranslationProvider>
        <TooltipProvider>
          <Toaster />
          {/* Render your RouterContent here */}
          <RouterContent /> 
        </TooltipProvider>
      </TranslationProvider>
    </QueryClientProvider>
  );
}

export default App;