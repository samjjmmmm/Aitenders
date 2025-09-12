// client/src/App.tsx
import React, { useEffect, Suspense } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import your page components
import Home from "@/pages/home";
import UC2Page from "@/pages/uc2";
import UC7Page from "@/pages/uc7";
import UC8Page from "@/pages/uc8";
import WordAddonPage from "@/pages/word-addon";
import PrivacyPage from "@/pages/privacy";
import SecurityPage from "@/pages/security";
import SimulatorAdmin from "@/pages/simulator-admin";
import MailingAdmin from "@/pages/mailing-admin";
import NotFound from "@/pages/not-found";
import UC2TestPage from "@/pages/uc2test"; 
import UC1Page from "@/pages/UC-1";
import UC3Page from "@/pages/UC-3";
import UC4Page from "@/pages/UC-4";
import UC5Page from "@/pages/UC-5";
import UC6Page from "@/pages/UC-6";
import ProductPage from "@/pages/Product-page";
import AdminTestPage from "@/pages/admin-test";

// --- THE CORRECT IMPORT ---
// We are importing the file you created: AdminPage.tsx
import AdminPage from "./pages/AdminPage"; 

import "./index.css"; 

function RouterContent() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      {/* --- ADMIN ROUTES --- */}
      {/* This route now correctly points to /admin and uses the correct component */}
      <Route path="/admin" component={AdminPage} /> 
      <Route path="/admin/simulator" component={SimulatorAdmin} />
      <Route path="/admin/mailing" component={MailingAdmin} />

      {/* --- PUBLIC ROUTES --- */}
      <Route path="/" component={Home} />
      <Route path="/uc-1" component={UC1Page} />
      <Route path="/uc2" component={UC2Page} />
      <Route path="/uc2test" component={UC2TestPage} /> 
      <Route path="/uc-3" component={UC3Page} />
      <Route path="/uc-4" component={UC4Page} />
      <Route path="/uc-5" component={UC5Page} />
      <Route path="/uc-6" component={UC6Page} />
      <Route path="/uc7" component={UC7Page} />
      <Route path="/uc8" component={UC8Page} />
      <Route path="/product" component={ProductPage} />
      <Route path="/word-addon" component={WordAddonPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/security" component={SecurityPage} />
      <Route path="/admin-test" component={AdminTestPage} /> 

      {/* Fallback for any other path */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Suspense fallback={<div />}>
          <RouterContent /> 
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;