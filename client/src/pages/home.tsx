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

  // Step 1: Choose Your Goal
  const step1Cards: SelectionCard[] = [
    {
      id: "bid-preparation",
      title: "Bid Preparation",
      description: "I'm preparing a tender response",
      icon: FileText,
      color: "bg-blue-500/10 text-blue-600",
      useCases: ["UC1", "UC2", "UC3", "UC7"],
      nextStep: "offer"
    },
    {
      id: "project-execution",
      title: "Project Execution",
      description: "I'm managing an ongoing project",
      icon: Settings,
      color: "bg-green-500/10 text-green-600",
      useCases: ["UC4", "UC5", "UC6", "UC8"],
      nextStep: "execution"
    },
    {
      id: "drafting-compliance",
      title: "Drafting & Compliance Proof",
      description: "I need help with structured writing and compliance",
      icon: Award,
      color: "bg-purple-500/10 text-purple-600",
      useCases: ["UC7", "UC8"],
      nextStep: "drafting"
    },
    {
      id: "explore-first",
      title: "Explore Aitenders First",
      description: "I want to see what you can do before choosing",
      icon: Target,
      color: "bg-orange-500/10 text-orange-600",
      redirectTo: "/use-cases/bid-evaluation" // LAND process simulation
    }
  ];

  // Step 2: Define Project Complexity
  const step2Cards: { [key: string]: SelectionCard[] } = {
    offer: [
      {
        id: "small-quick",
        title: "Small, quick projects",
        description: "Fast turnaround bids with standard requirements",
        icon: Clock,
        color: "bg-blue-500/10 text-blue-600",
        redirectTo: "/use-cases/bid-evaluation" // UC1
      },
      {
        id: "medium-complex",
        title: "Medium projects with complex clauses",
        description: "Moderate complexity with critical compliance requirements",
        icon: CheckCircle,
        color: "bg-green-500/10 text-green-600",
        redirectTo: "/use-cases/requirements-extraction" // UC2
      },
      {
        id: "large-multi",
        title: "Large multi-discipline tenders",
        description: "Complex bids involving multiple stakeholders and disciplines",
        icon: Users,
        color: "bg-purple-500/10 text-purple-600",
        redirectTo: "/use-cases/contract-management" // UC3
      },
      {
        id: "oneoff-drafting",
        title: "One-off support for drafting responses",
        description: "Specialized help with writing structured responses",
        icon: Edit,
        color: "bg-orange-500/10 text-orange-600",
        redirectTo: "/use-cases/tender-intelligence" // UC7
      }
    ],
    execution: [
      {
        id: "simple-small",
        title: "Simple small-scale projects",
        description: "Straightforward project management needs",
        icon: Target,
        color: "bg-blue-500/10 text-blue-600",
        redirectTo: "/use-cases/bid-evaluation" // UC4
      },
      {
        id: "medium-evolving",
        title: "Medium projects with multiple evolving commitments",
        description: "Projects with changing requirements and stakeholders",
        icon: UserCheck,
        color: "bg-green-500/10 text-green-600",
        redirectTo: "/use-cases/requirements-extraction" // UC5
      },
      {
        id: "large-highrisk",
        title: "Large, high-risk projects across disciplines",
        description: "Complex multi-disciplinary projects with high stakes",
        icon: Shield,
        color: "bg-purple-500/10 text-purple-600",
        redirectTo: "/use-cases/contract-management" // UC6
      },
      {
        id: "execution-drafting",
        title: "Execution support with structured drafting",
        description: "Project execution with documentation and compliance needs",
        icon: Award,
        color: "bg-orange-500/10 text-orange-600",
        redirectTo: "/use-cases/tender-intelligence" // UC8
      }
    ],
    drafting: [
      {
        id: "bid-drafting",
        title: "Bid response drafting support",
        description: "Help with writing and structuring tender responses",
        icon: Edit,
        color: "bg-blue-500/10 text-blue-600",
        redirectTo: "/use-cases/tender-intelligence" // UC7
      },
      {
        id: "execution-compliance",
        title: "Execution compliance documentation",
        description: "Support with project execution documentation and proof",
        icon: Award,
        color: "bg-green-500/10 text-green-600",
        redirectTo: "/use-cases/tender-intelligence" // UC8
      }
    ]
  };

  // Step 3: Identify Your Priority
  const step3Cards: SelectionCard[] = [
    {
      id: "save-time",
      title: "Save time & decide faster",
      description: "Focus on speed and efficiency in decision-making",
      icon: Clock,
      color: "bg-blue-500/10 text-blue-600",
      useCases: ["UC1", "UC2"]
    },
    {
      id: "ensure-compliance",
      title: "Ensure compliance & avoid rejections",
      description: "Prioritize accuracy and regulatory compliance",
      icon: Shield,
      color: "bg-green-500/10 text-green-600",
      useCases: ["UC2", "UC3", "UC6"]
    },
    {
      id: "improve-collaboration",
      title: "Improve collaboration & alignment",
      description: "Enhance team coordination and stakeholder alignment",
      icon: Users,
      color: "bg-purple-500/10 text-purple-600",
      useCases: ["UC3", "UC5", "UC6"]
    },
    {
      id: "draft-deliverables",
      title: "Draft deliverables without missing anything",
      description: "Comprehensive documentation and structured writing",
      icon: Edit,
      color: "bg-orange-500/10 text-orange-600",
      useCases: ["UC7", "UC8"]
    }
  ];

  // UC to page mapping
  const ucToPageMapping: { [key: string]: string } = {
    "UC1": "/use-cases/bid-evaluation",
    "UC2": "/use-cases/requirements-extraction", 
    "UC3": "/use-cases/contract-management",
    "UC4": "/use-cases/bid-evaluation",
    "UC5": "/use-cases/requirements-extraction",
    "UC6": "/use-cases/contract-management",
    "UC7": "/use-cases/tender-intelligence",
    "UC8": "/use-cases/tender-intelligence"
  };

  const handleCardSelection = (card: SelectionCard) => {
    const newSelections = [...selections, card.id];
    setSelections(newSelections);

    // Track analytics for sales qualification
    console.log("User path:", newSelections);

    if (card.redirectTo) {
      // Direct redirect (immediate UC identification)
      toast({
        title: "See My Recommended Solution",
        description: "Redirecting to your optimal use case...",
      });
      setTimeout(() => setLocation(card.redirectTo!), 1000);
      return;
    }

    if (card.nextStep) {
      // Move to next step
      if (card.nextStep === "drafting") {
        // Special case: Drafting & Compliance goes to step 2 with limited choices
        setCurrentStep(2);
      } else {
        setCurrentStep(2);
      }
      return;
    }

    // Step 3: Priority selection - filter UCs based on all previous choices
    if (currentStep === 3) {
      const finalUC = determineFinalUC(newSelections);
      if (finalUC) {
        toast({
          title: "See My Recommended Solution",
          description: `Redirecting to ${finalUC}...`,
        });
        setTimeout(() => setLocation(ucToPageMapping[finalUC]), 1000);
      }
      return;
    }

    // If we reach here from step 2 without redirect, go to step 3
    if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  const determineFinalUC = (userSelections: string[]): string | null => {
    // Get possible UCs from first selection
    const firstCard = step1Cards.find(card => card.id === userSelections[0]);
    if (!firstCard?.useCases) return null;

    // Get UCs from priority selection
    const priorityCard = step3Cards.find(card => card.id === userSelections[userSelections.length - 1]);
    if (!priorityCard?.useCases) return null;

    // Find intersection of UCs
    const validUCs = firstCard.useCases.filter(uc => priorityCard.useCases?.includes(uc));

    if (validUCs.length === 1) {
      return validUCs[0];
    } else if (validUCs.length === 2) {
      // Return higher-complexity UC according to the rules
      const complexityOrder = ["UC1", "UC4", "UC2", "UC5", "UC3", "UC6", "UC7", "UC8"];
      return validUCs.sort((a, b) => complexityOrder.indexOf(b) - complexityOrder.indexOf(a))[0];
    }

    // Fallback - shouldn't happen with proper logic
    return validUCs[0] || null;
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
      return step3Cards;
    }
    return step1Cards;
  };

  const getStepTitle = (): string => {
    if (currentStep === 1) return "Choose Your Goal";
    if (currentStep === 2) return "Define Project Complexity";
    if (currentStep === 3) return "Identify Your Priority";
    return "";
  };

  const resetSelection = () => {
    setCurrentStep(1);
    setSelections([]);
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
    <div className="min-h-screen gradient-bg">
      <Header />
      
      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to Aitenders,<br />
              <span className="text-blue-600">How can we help you?</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform complex tender and project contractual documents into intelligence with our AI-powered platform.
            </p>
          </div>

          {/* Dynamic Selection Cards */}
          <div className="mb-8 max-w-3xl mx-auto">
            {/* Step Progress Indicator */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-600">
                Step {currentStep} of 3
              </div>
              {currentStep > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetSelection}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Start Over
                </Button>
              )}
            </div>

            {/* Step Title */}
            <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              {getStepTitle()}
            </h2>

            {/* Selection Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getCurrentCards().map((card, index) => {
                const Icon = card.icon;
                return (
                  <Card
                    key={card.id}
                    onClick={() => handleCardSelection(card)}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md card-hover cursor-pointer border border-gray-200 hover:border-blue-300 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm leading-tight">
                          {card.title}
                        </h3>
                        {card.description && (
                          <p className="text-xs text-gray-600">{card.description}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Selection Path Display */}
            {selections.length > 0 && (
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-800 mb-2">Your Selection Path:</p>
                <div className="flex flex-wrap gap-2">
                  {selections.map((selectionId, index) => {
                    const allCards = [...step1Cards, ...Object.values(step2Cards).flat(), ...step3Cards];
                    const selectedCard = allCards.find(c => c.id === selectionId);
                    return (
                      <span
                        key={selectionId}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
                      >
                        {index + 1}. {selectedCard?.title.substring(0, 30)}...
                      </span>
                    );
                  })}
                </div>
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
                className="w-full pl-6 pr-24 py-4 text-base bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm focus:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                disabled={sendMessageMutation.isPending}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-gray-100"
                  disabled={sendMessageMutation.isPending}
                >
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </Button>
                <Button
                  onClick={handleSendMessage}
                  disabled={!message.trim() || sendMessageMutation.isPending}
                  size="icon"
                  className="h-8 w-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
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