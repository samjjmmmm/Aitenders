import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import BidEvaluation from "@/pages/use-cases/bid-evaluation";
import RequirementsExtraction from "@/pages/use-cases/requirements-extraction";
import ContractManagement from "@/pages/use-cases/contract-management";
import TenderIntelligence from "@/pages/use-cases/tender-intelligence";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/use-cases/bid-evaluation" component={BidEvaluation} />
      <Route path="/use-cases/requirements-extraction" component={RequirementsExtraction} />
      <Route path="/use-cases/contract-management" component={ContractManagement} />
      <Route path="/use-cases/tender-intelligence" component={TenderIntelligence} />
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
