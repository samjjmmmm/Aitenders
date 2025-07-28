import { useState } from "react";
import Header from "@/components/header";
import ClientLogos from "@/components/client-logos";
import ContactSection from "@/components/contact-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { ChartLine, Search, File, Lightbulb, TrendingUp, Shield, Users, Send, Bot } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  message: string;
  response?: string;
  createdAt: Date;
}

export default function HomePage() {
  const [message, setMessage] = useState("");
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

  const pathwayOptions = [
    {
      title: "I need help with bid evaluation",
      description: "Automate bid analysis and qualification",
      icon: ChartLine,
      href: "/use-cases/bid-evaluation",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "I want to extract requirements",
      description: "Extract and manage requirements efficiently",
      icon: Search,
      href: "/use-cases/requirements-extraction",
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "I need contract management support",
      description: "Streamline contract lifecycle management",
      icon: File,
      href: "/use-cases/contract-management",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "I'm looking for tender intelligence",
      description: "Get insights and market intelligence",
      icon: Lightbulb,
      href: "/use-cases/tender-intelligence",
      color: "bg-orange-500/10 text-orange-600",
    },
  ];

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

          {/* Pathway Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
            {pathwayOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Link key={index} href={option.href}>
                  <Card className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md card-hover cursor-pointer border border-gray-200 hover:border-blue-300">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${option.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{option.title}</h3>
                        <p className="text-sm text-gray-600">{option.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Chat UI */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 px-6 py-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-white font-medium">Ask our AI Assistant</span>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="h-64 overflow-y-auto p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                    <p className="text-gray-800">
                      Hello! I'm here to help you with tender management questions. How can I assist you today?
                    </p>
                  </div>
                </div>

                {messages.map((msg) => (
                  <div key={msg.id} className="space-y-3">
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                        <p className="text-white">{msg.message}</p>
                      </div>
                    </div>
                    {msg.response && (
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                          <p className="text-gray-800">{msg.response}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Chat Input */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex space-x-3">
                  <Input
                    type="text"
                    placeholder="Ask about tender management, requirements extraction, or our platform..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 rounded-full"
                    disabled={sendMessageMutation.isPending}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim() || sendMessageMutation.isPending}
                    size="icon"
                    className="rounded-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
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