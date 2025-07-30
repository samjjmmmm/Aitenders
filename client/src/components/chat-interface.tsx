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
  transparent?: boolean;
}

export default function ChatInterface({ 
  language = 'fr', 
  onMessageSend,
  customActions = [],
  transparent = false
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

  // Button descriptions for different actions
  const getButtonDescription = (buttonLabel: string) => {
    const descriptions = {
      fr: {
        "Nos cas d'usage": "Découvrez notre gamme complète de cas d'usage : gestion de projets simples, moyens et complexes, avec des solutions adaptées à chaque niveau de complexité et phase du processus d'appel d'offres.",
        "Simulation / ROI": "Calculez le retour sur investissement de notre plateforme pour votre organisation. Obtenez une estimation personnalisée des gains de temps, réduction des coûts et amélioration de la productivité.",
        "AI Agents": "Nos agents IA spécialisés vous accompagnent dans l'analyse documentaire, l'extraction d'exigences, la rédaction de réponses et la gestion des conformités réglementaires.",
        "Data Security": "Sécurité by design : chiffrement end-to-end, conformité RGPD, hébergement sécurisé en Europe, contrôles d'accès granulaires et pistes d'audit complètes pour protéger vos données sensibles.",
        "Contactez nous": "Notre équipe d'experts est à votre disposition pour une démonstration personnalisée, une évaluation de vos besoins ou pour répondre à toutes vos questions sur notre plateforme.",
        "Demo UC3": "Découvrez comment gérer efficacement vos appels d'offres complexes multi-lots avec coordination d'équipes pluridisciplinaires, gestion des conformités et collaboration en temps réel.",
        "ROI Calculator": "Estimez les bénéfices financiers concrets : réduction du temps de préparation des offres, amélioration du taux de succès, optimisation des ressources et gains de productivité mesurables.",
        "Contact Expert": "Échangez directement avec nos spécialistes en gestion d'appels d'offres pour une consultation personnalisée et des conseils adaptés à votre secteur d'activité."
      },
      en: {
        "Our Use Cases": "Discover our comprehensive range of use cases: simple, medium and complex project management, with solutions adapted to each level of complexity and phase of the tendering process.",
        "Simulation / ROI": "Calculate the return on investment of our platform for your organization. Get a personalized estimate of time savings, cost reduction and productivity improvement.",
        "AI Agents": "Our specialized AI agents assist you in document analysis, requirements extraction, response writing and regulatory compliance management.",
        "Data Security": "Security by design: end-to-end encryption, GDPR compliance, secure hosting in Europe, granular access controls and complete audit trails to protect your sensitive data.",
        "Contact us": "Our team of experts is at your disposal for a personalized demonstration, an assessment of your needs or to answer all your questions about our platform.",
        "Demo UC3": "Discover how to efficiently manage your complex multi-lot tenders with multidisciplinary team coordination, compliance management and real-time collaboration.",
        "ROI Calculator": "Estimate concrete financial benefits: reduced tender preparation time, improved success rate, resource optimization and measurable productivity gains.",
        "Contact Expert": "Connect directly with our tender management specialists for personalized consultation and advice tailored to your industry."
      }
    };
    
    return descriptions[language][buttonLabel] || "";
  };

  // Default actions
  const defaultActions = [
    {
      label: language === 'fr' ? "Nos Cas d'Usage" : "Our Use Cases",
      icon: <span className="text-gray-400">+</span>,
      onClick: () => {
        const description = getButtonDescription(language === 'fr' ? "Nos cas d'usage" : "Our Use Cases");
        setMessage(description);
      }
    },
    {
      label: "Outils",
      icon: <MdSettings className="w-3 h-3 text-gray-400" />,
      onClick: () => setMessage(language === 'fr' ? "Processus d'Appel d'Offres" : "Tender Process")
    }
  ];

  // Enhanced actions with descriptions
  const enhancedCustomActions = customActions.map(action => ({
    ...action,
    onClick: () => {
      const description = getButtonDescription(action.label);
      if (description) {
        setMessage(description);
      } else {
        action.onClick();
      }
    }
  }));

  const actions = customActions.length > 0 ? enhancedCustomActions : defaultActions;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 ${transparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-2xl'}`}>
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


          </div>
        </div>
      </div>
    </div>
  );
}