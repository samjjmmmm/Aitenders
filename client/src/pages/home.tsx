import { useState } from "react";
import Header from "@/components/header";
import ClientLogos from "@/components/client-logos";
import ContactSection from "@/components/contact-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";
import { ChartLine, Search, File, Lightbulb, TrendingUp, Shield, Users, Send, Bot, FileText, Settings, Award, Target, Clock, CheckCircle, UserCheck, Edit } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  message: string;
  response?: string;
  createdAt: Date;
}

interface SelectionCard {
  id: string;
  title: string;
  description?: string;
  icon: any;
  color: string;
  useCases?: string[];
  nextStep?: string;
  redirectTo?: string;
}

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState<string[]>([]);
  const [availableUCs, setAvailableUCs] = useState<string[]>([]);
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: messages = [], isLoading } = useQuery<ChatMessage[]>({
    queryKey: ["/api/chat"],
  });

  const sendMessageMutation = useMutation({
    mutationFn: async (messageText: string) => {
      const response = await apiRequest("POST", "/api/chat", { message: messageText });
      return response.json();
    },
    onSuccess: () => {
      setMessage("");
      queryClient.invalidateQueries({ queryKey: ["/api/chat"] });
      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll respond shortly.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessageMutation.mutate(message);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Step 1: Current Situation
  const step1Cards: SelectionCard[] = [
    {
      id: "preparing-bid",
      title: "I am preparing a bid or proposal to submit",
      icon: FileText,
      color: "bg-blue-500/10 text-blue-600",
      useCases: ["UC1", "UC2", "UC3", "UC7"],
      nextStep: "bid"
    },
    {
      id: "managing-execution",
      title: "I am managing a project that is already in execution",
      icon: Settings,
      color: "bg-green-500/10 text-green-600",
      useCases: ["UC4", "UC5", "UC6", "UC8"],
      nextStep: "execution"
    },
    {
      id: "drafting-compliance",
      title: "I need support to draft documents and prove compliance",
      icon: Award,
      color: "bg-purple-500/10 text-purple-600",
      useCases: ["UC7", "UC8"],
      nextStep: "drafting"
    },
    {
      id: "exploring-aitenders",
      title: "I am exploring how Aitenders can help before deciding",
      icon: Target,
      color: "bg-orange-500/10 text-orange-600",
      redirectTo: "/uc1"
    }
  ];

  // Step 2: The Type of Project You Handle
  const step2Cards: { [key: string]: SelectionCard[] } = {
    bid: [
      {
        id: "small-frequent",
        title: "I handle small, frequent projects that need fast validation",
        icon: Clock,
        color: "bg-blue-500/10 text-blue-600",
        useCases: ["UC1"]
      },
      {
        id: "midsize-clauses",
        title: "I work on mid-size projects with multiple clauses and risks",
        icon: CheckCircle,
        color: "bg-green-500/10 text-green-600",
        useCases: ["UC2"]
      },
      {
        id: "large-complex",
        title: "I lead large, complex tenders with many contributors",
        icon: Users,
        color: "bg-purple-500/10 text-purple-600",
        useCases: ["UC3"]
      },
      {
        id: "structured-drafting",
        title: "I mainly need structured drafting support for my responses",
        icon: Edit,
        color: "bg-orange-500/10 text-orange-600",
        useCases: ["UC7"]
      }
    ],
    execution: [
      {
        id: "small-straightforward",
        title: "I run small, straightforward projects that require quick answers",
        icon: Target,
        color: "bg-blue-500/10 text-blue-600",
        useCases: ["UC4"]
      },
      {
        id: "midsize-evolving",
        title: "I manage mid-size projects with evolving commitments",
        icon: UserCheck,
        color: "bg-green-500/10 text-green-600",
        useCases: ["UC5"]
      },
      {
        id: "large-multidiscipline",
        title: "I oversee large, multi-discipline projects with high risk",
        icon: Shield,
        color: "bg-purple-500/10 text-purple-600",
        useCases: ["UC6"]
      },
      {
        id: "compliance-execution",
        title: "I need help drafting and justifying compliance during execution",
        icon: Award,
        color: "bg-orange-500/10 text-orange-600",
        useCases: ["UC8"]
      }
    ],
    drafting: [
      {
        id: "bid-coverage",
        title: "I draft responses for bids and need full coverage proof",
        icon: Edit,
        color: "bg-blue-500/10 text-blue-600",
        useCases: ["UC7"]
      },
      {
        id: "execution-traceability",
        title: "I draft deliverables during execution and need traceability",
        icon: Award,
        color: "bg-green-500/10 text-green-600",
        useCases: ["UC8"]
      }
    ]
  };

  // Step 3: Your Main Priority
  const step3Cards: SelectionCard[] = [
    {
      id: "save-time-decide",
      title: "I need to save time and reach decisions faster",
      icon: Clock,
      color: "bg-blue-500/10 text-blue-600",
      useCases: ["UC1", "UC2"]
    },
    {
      id: "guarantee-compliance",
      title: "I need to guarantee compliance and avoid rejections",
      icon: Shield,
      color: "bg-green-500/10 text-green-600",
      useCases: ["UC2", "UC3", "UC6", "UC8"]
    },
    {
      id: "improve-collaboration",
      title: "I need to improve collaboration across multiple teams",
      icon: Users,
      color: "bg-purple-500/10 text-purple-600",
      useCases: ["UC3", "UC5", "UC6"]
    },
    {
      id: "deliver-documents",
      title: "I need to deliver documents that cover everything, with proof",
      icon: Edit,
      color: "bg-orange-500/10 text-orange-600",
      useCases: ["UC7", "UC8"]
    }
  ];

  // Step 4: Who Will Use Aitenders Most
  const step4Cards: SelectionCard[] = [
    {
      id: "offer-bid-team",
      title: "My offer management or bid team",
      icon: FileText,
      color: "bg-blue-500/10 text-blue-600",
      useCases: ["UC1", "UC2", "UC3", "UC7"]
    },
    {
      id: "contract-managers",
      title: "My contract or project managers",
      icon: Settings,
      color: "bg-green-500/10 text-green-600",
      useCases: ["UC5", "UC6"]
    },
    {
      id: "field-operations",
      title: "My field or site operations team",
      icon: Target,
      color: "bg-purple-500/10 text-purple-600",
      useCases: ["UC4"]
    },
    {
      id: "compliance-writers",
      title: "My compliance or technical writers",
      icon: Edit,
      color: "bg-orange-500/10 text-orange-600",
      useCases: ["UC7", "UC8"]
    }
  ];

  // Step 5: The Outcome You Expect
  const step5Cards: SelectionCard[] = [
    {
      id: "validated-bid-analysis",
      title: "A validated bid analysis ready to present to management",
      icon: ChartLine,
      color: "bg-blue-500/10 text-blue-600",
      useCases: ["UC1", "UC2"]
    },
    {
      id: "compliance-matrix",
      title: "A complete compliance matrix with risks under control",
      icon: Shield,
      color: "bg-green-500/10 text-green-600",
      useCases: ["UC3", "UC6"]
    },
    {
      id: "contract-assistant",
      title: "A live contract assistant accessible to my field teams",
      icon: Users,
      color: "bg-purple-500/10 text-purple-600",
      useCases: ["UC4", "UC5"]
    },
    {
      id: "drafted-deliverables",
      title: "Drafted deliverables with traceability and proof of coverage",
      icon: Edit,
      color: "bg-orange-500/10 text-orange-600",
      useCases: ["UC7", "UC8"]
    }
  ];

  // UC to page mapping
  const ucToPageMapping: { [key: string]: string } = {
    "UC1": "/uc1",
    "UC2": "/uc2", 
    "UC3": "/uc3",
    "UC4": "/uc4",
    "UC5": "/uc5",
    "UC6": "/uc6",
    "UC7": "/uc7",
    "UC8": "/uc8"
  };

  const handleCardSelection = (card: SelectionCard) => {
    const newSelections = [...selections, card.id];
    setSelections(newSelections);

    // Track analytics for sales qualification - log selection path
    console.log("User selection path:", {
      step: currentStep,
      selections: newSelections,
      currentCard: card.id,
      timestamp: new Date().toISOString()
    });

    if (card.redirectTo) {
      // Direct redirect for exploration option
      toast({
        title: "See My Recommended Solution",
        description: "Redirecting to exploration page...",
      });
      setTimeout(() => setLocation(card.redirectTo!), 1000);
      return;
    }

    // Update available UCs based on current selection
    let newAvailableUCs = [...availableUCs];
    
    if (currentStep === 1) {
      // Initialize available UCs from step 1 selection
      newAvailableUCs = card.useCases || [];
      setAvailableUCs(newAvailableUCs);
      setCurrentStep(2);
      return;
    }

    if (currentStep >= 2) {
      // Filter UCs based on intersection with current card's UCs
      if (card.useCases) {
        newAvailableUCs = availableUCs.filter(uc => card.useCases!.includes(uc));
        setAvailableUCs(newAvailableUCs);
      }

      // Check if we have a single UC match - if so, redirect immediately
      if (newAvailableUCs.length === 1) {
        const finalUC = newAvailableUCs[0];
        
        // Log final UC analytics (hidden from user)
        console.log("FINAL UC DETERMINATION:", {
          finalUC: finalUC,
          completePath: newSelections,
          stepsCompleted: currentStep,
          decisionPoint: "single_match_found",
          timestamp: new Date().toISOString(),
          redirectTo: ucToPageMapping[finalUC]
        });
        
        toast({
          title: "See My Recommended Solution",
          description: `Perfect match found: ${finalUC}`,
        });
        setTimeout(() => setLocation(ucToPageMapping[finalUC]), 1000);
        return;
      }

      // Continue to next step if we haven't reached step 5 and have multiple UCs
      if (currentStep < 5 && newAvailableUCs.length > 1) {
        setCurrentStep(currentStep + 1);
        return;
      }

      // At step 5 or if only one UC remains, make final decision
      if (newAvailableUCs.length > 0) {
        const finalUC = newAvailableUCs[0]; // Take the first remaining UC
        
        // Log final UC analytics (hidden from user)
        console.log("FINAL UC DETERMINATION:", {
          finalUC: finalUC,
          completePath: newSelections,
          stepsCompleted: currentStep,
          decisionPoint: "end_of_flow",
          remainingUCs: newAvailableUCs,
          timestamp: new Date().toISOString(),
          redirectTo: ucToPageMapping[finalUC]
        });
        
        toast({
          title: "See My Recommended Solution",
          description: `Final recommendation: ${finalUC}`,
        });
        setTimeout(() => setLocation(ucToPageMapping[finalUC]), 1000);
      }
    }
  };

  const getCurrentCards = (): SelectionCard[] => {
    if (currentStep === 1) {
      return step1Cards;
    }
    
    if (currentStep === 2 && selections.length > 0) {
      const firstSelection = step1Cards.find(card => card.id === selections[0]);
      if (firstSelection?.nextStep && step2Cards[firstSelection.nextStep]) {
        return step2Cards[firstSelection.nextStep];
      }
    }
    
    if (currentStep === 3) {
      // Filter step 3 cards to only show those with UCs that match available UCs
      return step3Cards.filter(card => 
        card.useCases?.some(uc => availableUCs.includes(uc))
      );
    }
    
    if (currentStep === 4) {
      // Filter step 4 cards to only show those with UCs that match available UCs
      return step4Cards.filter(card => 
        card.useCases?.some(uc => availableUCs.includes(uc))
      );
    }
    
    if (currentStep === 5) {
      // Filter step 5 cards to only show those with UCs that match available UCs
      return step5Cards.filter(card => 
        card.useCases?.some(uc => availableUCs.includes(uc))
      );
    }
    
    return step1Cards;
  };

  const getStepTitle = (): string => {
    if (currentStep === 1) return "What describes your current situation?";
    if (currentStep === 2) return "What type of project do you handle?";
    if (currentStep === 3) return "What is your main priority?";
    if (currentStep === 4) return "Who will use Aitenders most?";
    if (currentStep === 5) return "What outcome do you expect?";
    return "";
  };

  const resetSelection = () => {
    setCurrentStep(1);
    setSelections([]);
    setAvailableUCs([]);
  };

  const stats = [
    {
      icon: TrendingUp,
      title: "+50% Productivity",
      description: "Reduce time on each step of the tender process and detect information 95% faster",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Shield,
      title: "Better Quality",
      description: "Improve the quality of review and deliverables with full traceability",
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Users,
      title: "Team Efficiency",
      description: "Staff are less stressed and meetings are more focused on key subjects",
      color: "bg-purple-500/10 text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-12">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Aitenders,<br />
              <span className="text-blue-600">How can we help you?</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
              Transform complex tender and project contractual documents into intelligence with our AI-powered platform.
            </p>
          </div>

          {/* Dynamic Selection Cards */}
          <div className="mb-12 max-w-3xl mx-auto">
            {/* Step Progress Indicator */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-sm text-gray-500">
                Step {currentStep} of 5
              </div>
              {currentStep > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetSelection}
                  className="text-blue-600 hover:text-blue-700 transition-all duration-200"
                >
                  Start Over
                </Button>
              )}
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="h-1 bg-gray-200 rounded-full">
                <div 
                  className="h-1 bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${(currentStep / 5) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Step Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {getStepTitle()}
            </h2>

            {/* Selection Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getCurrentCards().map((card, index) => {
                const Icon = card.icon;
                return (
                  <Card
                    key={card.id}
                    onClick={() => handleCardSelection(card)}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md cursor-pointer border border-gray-100 hover:border-blue-500 transition-all duration-200 ease-in-out hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.color}`}>
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-medium text-gray-800 leading-relaxed">
                          {card.title}
                        </h3>
                        {card.description && (
                          <p className="text-sm text-gray-600 mt-1">{card.description}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Selection Path Display */}
            {selections.length > 0 && (
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-sm text-gray-700 mb-3 font-medium">Your Selection Path:</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selections.map((selectionId, index) => {
                    const allCards = [...step1Cards, ...Object.values(step2Cards).flat(), ...step3Cards, ...step4Cards, ...step5Cards];
                    const selectedCard = allCards.find(c => c.id === selectionId);
                    return (
                      <span
                        key={selectionId}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-white text-gray-700 border border-gray-200 shadow-sm"
                      >
                        {index + 1}. {selectedCard?.title.substring(0, 25)}...
                      </span>
                    );
                  })}
                </div>
                {availableUCs.length > 0 && (
                  <p className="text-xs text-gray-500">
                    Matching use cases: {availableUCs.join(', ')}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Chat UI */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Input
                type="text"
                placeholder="How can I help you today?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-6 pr-16 py-4 text-base bg-white border border-gray-200 rounded-full shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                disabled={sendMessageMutation.isPending}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Button
                  onClick={handleSendMessage}
                  disabled={!message.trim() || sendMessageMutation.isPending}
                  size="icon"
                  className="h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </Button>
              </div>
            </div>
            
            {/* Messages Display - Only show when there are messages */}
            {messages.length > 0 && (
              <div className="mt-6 space-y-4 max-h-64 overflow-y-auto">
                {messages.map((msg) => (
                  <div key={msg.id} className="space-y-3">
                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-xs">
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    </div>
                    {msg.response && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-tl-sm max-w-xs">
                          <p className="text-sm">{msg.response}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Client Logos */}
      <ClientLogos />

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Aitenders?</h2>
            <p className="text-lg text-gray-600">See the measurable impact on your tender management process</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto ${stat.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{stat.title}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}