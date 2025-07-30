import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdSend, MdSettings, MdBarChart } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  message: string;
  response?: string;
  createdAt: Date;
}

interface ChatInterfaceProps {
  language?: 'en' | 'fr';
  onMessageSend?: (message: string) => void;
  customActions?: Array<{
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
  }>;
  transparent?: boolean;
}

export default function ChatInterface({ 
  language = 'fr', 
  onMessageSend,
  customActions = [],
  transparent = false
}: ChatInterfaceProps) {
  const [message, setMessage] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [currentIP, setCurrentIP] = useState<string | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: messages = [] } = useQuery<ChatMessage[]>({
    queryKey: ["/api/chat"],
  });

  // Mutation to clear chat
  const clearChatMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/chat/clear", {});
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/chat"] });
      toast({
        title: language === 'fr' ? "Session nettoyée" : "Session cleared",
        description: language === 'fr' 
          ? "Nouvelle session détectée - données du chat effacées automatiquement"
          : "New session detected - chat data cleared automatically",
      });
    },
  });

  // Clear chat on page change
  useEffect(() => {
    const handlePageChange = () => {
      const newPage = window.location.pathname;
      if (currentPage && currentPage !== newPage) {
        // Clear chat when page changes
        clearChatMutation.mutate();
        console.log(`Chat cleared due to page change: ${currentPage} → ${newPage}`);
      }
      setCurrentPage(newPage);
    };

    // Set initial page
    if (!currentPage) {
      setCurrentPage(window.location.pathname);
    }

    // Listen for page changes
    window.addEventListener('popstate', handlePageChange);
    
    // Listen for navigation changes (wouter)
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      handlePageChange();
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      handlePageChange();
    };

    return () => {
      window.removeEventListener('popstate', handlePageChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, [currentPage, clearChatMutation]);

  // Monitor IP address changes
  useEffect(() => {
    const checkIPAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const newIP = data.ip;
        
        if (currentIP && currentIP !== newIP) {
          clearChatMutation.mutate();
          console.log(`Chat cleared due to IP change: ${currentIP} → ${newIP}`);
        }
        setCurrentIP(newIP);
      } catch (error) {
        console.warn('Failed to check IP address:', error);
      }
    };

    // Check IP immediately
    checkIPAddress();

    // Check IP every 30 seconds
    const ipInterval = setInterval(checkIPAddress, 30000);

    return () => {
      clearInterval(ipInterval);
    };
  }, [currentIP, clearChatMutation]);

  const sendMessageMutation = useMutation({
    mutationFn: async (messageText: string) => {
      // Send to backend with OpenAI integration
      const response = await apiRequest("POST", "/api/chat", { 
        message: messageText,
        language: language 
      });
      return response.json();
    },
    onSuccess: () => {
      setMessage("");
      queryClient.invalidateQueries({ queryKey: ["/api/chat"] });
      if (onMessageSend) {
        onMessageSend(message);
      }
      toast({
        title: language === 'fr' ? "Réponse générée" : "Response generated",
        description: language === 'fr' 
          ? "Votre question a été traitée par le Copilote d'Aitenders."
          : "Your question has been processed by Aitenders Copilot.",
      });
    },
    onError: () => {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr'
          ? "Échec de l'envoi du message. Veuillez réessayer."
          : "Failed to send message. Please try again.",
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

  // Button questions that users would naturally ask
  const getButtonQuestion = (buttonLabel: string) => {
    const questions = {
      fr: {
        "Nos cas d'usage": "Quels sont l'ensemble des cas d'usage disponibles sur Aitenders ?",
        "Nos Cas d'Usage": "Quels sont l'ensemble des cas d'usage disponibles sur Aitenders ?",
        "Simulation / ROI": "Comment calculer le retour sur investissement d'Aitenders pour mon organisation ?",
        "AI Agents": "Comment fonctionnent les agents IA d'Aitenders et que peuvent-ils faire ?",
        "Data Security": "Que fait Aitenders pour la sécurité des données ?",
        "Contactez nous": "Comment puis-je contacter l'équipe Aitenders pour une démonstration ?",
        "Demo UC3": "Comment Aitenders gère-t-il les appels d'offres complexes multi-lots ?",
        "ROI Calculator": "Quels bénéfices financiers puis-je attendre avec Aitenders ?",
        "Contact Expert": "Comment obtenir l'aide d'un expert en gestion d'appels d'offres ?",
        "Outils": "Quels outils et fonctionnalités propose Aitenders ?"
      },
      en: {
        "Our Use Cases": "What are all the use cases available on Aitenders?",
        "Nos Cas d'Usage": "What are all the use cases available on Aitenders?",
        "Simulation / ROI": "How to calculate the ROI of Aitenders for my organization?",
        "AI Agents": "How do Aitenders AI agents work and what can they do?",
        "Data Security": "What does Aitenders do for data security?",
        "Contact us": "How can I contact the Aitenders team for a demonstration?",
        "Demo UC3": "How does Aitenders handle complex multi-lot tenders?",
        "ROI Calculator": "What financial benefits can I expect with Aitenders?",
        "Contact Expert": "How to get help from a tender management expert?",
        "Tools": "What tools and features does Aitenders offer?"
      }
    };
    
    return questions[language]?.[buttonLabel as keyof typeof questions[typeof language]] || "";
  };

  // Default actions
  const defaultActions = [
    {
      label: language === 'fr' ? "Nos Cas d'Usage" : "Our Use Cases",
      icon: <span className="text-gray-400">+</span>,
      onClick: () => {
        const question = getButtonQuestion(language === 'fr' ? "Nos cas d'usage" : "Our Use Cases");
        setMessage(question);
      }
    },
    {
      label: "Outils",
      icon: <MdSettings className="w-3 h-3 text-gray-400" />,
      onClick: () => {
        const question = getButtonQuestion("Outils");
        setMessage(question);
      }
    }
  ];

  // Enhanced actions with questions
  const enhancedCustomActions = customActions.map(action => ({
    ...action,
    onClick: () => {
      const question = getButtonQuestion(action.label);
      if (question) {
        setMessage(question);
      } else {
        action.onClick();
      }
    }
  }));

  const actions = customActions.length > 0 ? enhancedCustomActions : defaultActions;

  // Format AI response for display
  const formatResponse = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>')
      .replace(/•/g, '&bull;');
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 ${transparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-2xl'}`}>
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white border border-gray-300 rounded-3xl shadow-lg p-4">
          {/* Recent Messages Display */}
          {messages.length > 0 && (
            <div className="mb-4 max-h-40 overflow-y-auto space-y-2">
              {messages.slice(-2).map((msg) => (
                <div key={msg.id} className="space-y-2">
                  <div className="text-right">
                    <div className="inline-block bg-aitenders-primary-blue text-white px-3 py-2 rounded-2xl rounded-tr-sm text-sm max-w-xs">
                      {msg.message}
                    </div>
                  </div>
                  {msg.response && (
                    <div className="text-left">
                      <div className="inline-block bg-aitenders-pale-blue text-aitenders-dark-blue px-3 py-2 rounded-2xl rounded-tl-sm text-sm max-w-md">
                        <div 
                          dangerouslySetInnerHTML={{ 
                            __html: formatResponse(msg.response) 
                          }} 
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {/* Input Field */}
          <div className="flex items-start gap-3 mb-3">
            <Input
              type="text"
              placeholder={language === 'fr' ? "Poser une question" : "Ask a question"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 text-base bg-transparent border-0 focus:ring-0 focus:outline-none placeholder:text-gray-500 min-h-[24px]"
              disabled={sendMessageMutation.isPending}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!message.trim() || sendMessageMutation.isPending}
              size="sm"
              className="h-8 w-8 rounded-lg bg-aitenders-primary-blue hover:bg-aitenders-dark-blue text-white shadow-sm transition-all"
            >
              <MdSend className="w-4 h-4" />
            </Button>
          </div>

          {/* Action Buttons Row */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-3">
            {/* Left Side - Main Actions */}
            <div className="flex items-center gap-2">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={action.onClick}
                  className="h-8 px-3 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg flex items-center gap-1"
                >
                  {action.icon}
                  {action.label}
                </Button>
              ))}
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}