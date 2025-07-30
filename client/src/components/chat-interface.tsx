import { useState } from "react";
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
}

export default function ChatInterface({ 
  language = 'fr', 
  onMessageSend,
  customActions = []
}: ChatInterfaceProps) {
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: messages = [] } = useQuery<ChatMessage[]>({
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
      if (onMessageSend) {
        onMessageSend(message);
      }
      toast({
        title: language === 'fr' ? "Message envoyé" : "Message sent",
        description: language === 'fr' 
          ? "Merci pour votre message. Nous répondrons rapidement."
          : "Thank you for your message. We'll respond shortly.",
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

  // Default actions
  const defaultActions = [
    {
      label: language === 'fr' ? "Nos Cas d'Usage" : "Our Use Cases",
      icon: <span className="text-gray-400">+</span>,
      onClick: () => setMessage(language === 'fr' ? "Nos Cas d'Usage" : "Our Use Cases")
    },
    {
      label: "Outils",
      icon: <MdSettings className="w-3 h-3 text-gray-400" />,
      onClick: () => setMessage(language === 'fr' ? "Processus d'Appel d'Offres" : "Tender Process")
    }
  ];

  const actions = customActions.length > 0 ? customActions : defaultActions;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-2xl">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white border border-gray-300 rounded-3xl shadow-lg p-4">
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

            {/* Right Side - Utility Icons */}
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <FaRobot className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <MdBarChart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}