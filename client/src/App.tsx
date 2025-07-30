import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { sessionManager } from "@/lib/session-manager";
import Home from "@/pages/home";
import UC1Page from "@/pages/uc1";
import UC2Page from "@/pages/uc2";
import UC3Page from "@/pages/uc3";
import UC4Page from "@/pages/uc4";
import UC5Page from "@/pages/uc5";
import UC6Page from "@/pages/uc6";
import UC7Page from "@/pages/uc7";
import UC8Page from "@/pages/uc8";
import SimulatorAdmin from "@/pages/simulator-admin";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/uc1" component={UC1Page} />
      <Route path="/uc2" component={UC2Page} />
      <Route path="/uc3" component={UC3Page} />
      <Route path="/uc4" component={UC4Page} />
      <Route path="/uc5" component={UC5Page} />
      <Route path="/uc6" component={UC6Page} />
      <Route path="/uc7" component={UC7Page} />
      <Route path="/uc8" component={UC8Page} />
      <Route path="/admin/simulator" component={SimulatorAdmin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
