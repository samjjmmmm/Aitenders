import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdSend, MdSettings, MdBarChart, MdExpandMore, MdExpandLess, MdClose, MdContentCopy } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
// Toast removed to prevent UI blocking
import { BrowserFingerprint } from "@/lib/browser-fingerprint";

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
  const [browserFingerprint, setBrowserFingerprint] = useState<string | null>(null);
  const [sessionInitialized, setSessionInitialized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [copyData, setCopyData] = useState("");
  const [email, setEmail] = useState("");
  const queryClient = useQueryClient();

  const { data: messages = [] } = useQuery<ChatMessage[]>({
    queryKey: ["/api/chat", browserFingerprint],
    enabled: !!browserFingerprint, // Only run when fingerprint is available
    queryFn: async () => {
      const response = await apiRequest("GET", "/api/chat", undefined, {
        'x-browser-fingerprint': browserFingerprint
      });
      return response.json();
    }
  });

  // Initialize browser fingerprint
  useEffect(() => {
    const initFingerprint = async () => {
      try {
        const fingerprint = await BrowserFingerprint.getFingerprint();
        setBrowserFingerprint(fingerprint);
        console.log('Browser fingerprint initialized:', fingerprint.slice(0, 8) + '...');
      } catch (error) {
        console.error('Failed to generate browser fingerprint:', error);
      }
    };

    initFingerprint();
  }, []);

  // Mutation to clear chat for this specific session
  const clearChatMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/chat/clear", {
        fingerprint: browserFingerprint
      });
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.refetchQueries({ queryKey: ["/api/chat", browserFingerprint] });
      console.log('Session cleared:', data.sessionId);
    },
  });

  // Clear session only on new browser fingerprint (different user/device)
  useEffect(() => {
    if (browserFingerprint && !sessionInitialized) {
      const lastFingerprint = localStorage.getItem('lastBrowserFingerprint');
      
      if (lastFingerprint && lastFingerprint !== browserFingerprint) {
        // Different user/device detected
        clearChatMutation.mutate();
        console.log('Different user detected - clearing session');
      }
      
      localStorage.setItem('lastBrowserFingerprint', browserFingerprint);
      setSessionInitialized(true);
    }
  }, [browserFingerprint, sessionInitialized, clearChatMutation]);

  // Clear chat on page navigation only
  useEffect(() => {
    const handlePageChange = () => {
      const newPage = window.location.pathname;
      if (currentPage && currentPage !== newPage) {
        // Clear chat when navigating to different pages
        clearChatMutation.mutate();
        console.log(`Chat cleared due to page change: ${currentPage} → ${newPage}`);
      }
      setCurrentPage(newPage);
    };

    // Set initial page
    if (!currentPage) {
      setCurrentPage(window.location.pathname);
    }

    // Listen for page changes (navigation only)
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

  const sendMessageMutation = useMutation({
    mutationFn: async (messageText: string) => {
      // Send to backend with OpenAI integration and browser fingerprint
      const response = await apiRequest("POST", "/api/chat", { 
        message: messageText,
        language: language,
        fingerprint: browserFingerprint
      });
      return response.json();
    },
    onSuccess: () => {
      setMessage("");
      // Use refetch instead of invalidate to avoid blocking UI
      queryClient.refetchQueries({ queryKey: ["/api/chat", browserFingerprint] });
      if (onMessageSend) {
        onMessageSend(message);
      }
    },
    onError: (error) => {
      console.error('Message send error:', error);
      // Error handling without blocking toast
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

  // Handle copy entire conversation with email validation
  const handleCopyConversation = () => {
    if (messages.length === 0) {
      alert(language === 'fr' ? 'Aucune conversation à copier' : 'No conversation to copy');
      return;
    }
    
    // Format entire conversation
    const conversationText = messages.map((msg, index) => {
      const questionText = `Q${index + 1}: ${msg.message}`;
      const responseText = msg.response ? `R${index + 1}: ${msg.response.replace(/<[^>]*>/g, '').replace(/&bull;/g, '•')}` : '';
      return responseText ? `${questionText}\n\n${responseText}` : questionText;
    }).join('\n\n---\n\n');
    
    setCopyData(conversationText);
    setShowEmailModal(true);
  };

  const handleEmailSubmit = async () => {
    if (!email.trim() || !email.includes('@')) {
      alert(language === 'fr' ? 'Veuillez saisir une adresse email valide' : 'Please enter a valid email address');
      return;
    }
    
    try {
      // Copy to clipboard
      await navigator.clipboard.writeText(copyData);
      
      // Log the email for tracking (optional backend call)
      await apiRequest("POST", "/api/copy-tracking", {
        email: email.trim(),
        content: copyData.substring(0, 100) + '...', // Only store preview
        fingerprint: browserFingerprint
      });
      
      // Success feedback
      alert(language === 'fr' ? 'Données copiées avec succès!' : 'Data copied successfully!');
      
      // Reset modal
      setShowEmailModal(false);
      setEmail("");
      setCopyData("");
    } catch (error) {
      console.error('Copy failed:', error);
      alert(language === 'fr' ? 'Échec de la copie' : 'Copy failed');
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

  // Don't render if closed
  if (isClosed) {
    return (
      <button
        onClick={() => setIsClosed(false)}
        className="fixed bottom-6 right-6 z-50 bg-aitenders-primary-blue hover:bg-aitenders-dark-blue text-white p-3 rounded-full shadow-lg transition-all"
        title={language === 'fr' ? 'Ouvrir le chat' : 'Open chat'}
      >
        <FaRobot className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className={`fixed ${isExpanded ? 'top-0 left-0 right-0 bottom-0' : 'bottom-0 left-0 right-0'} z-50 ${transparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-2xl'}`}>
      <div className={`${isExpanded ? 'w-[70%] h-full' : 'max-w-4xl'} mx-auto p-6 ${isExpanded ? 'flex flex-col' : ''}`}>
        <div className={`bg-white border border-gray-300 ${isExpanded ? 'rounded-2xl flex-1 flex flex-col' : 'rounded-3xl'} shadow-lg p-4 relative`}>
          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute top-3 left-3 p-3 hover:bg-yellow-100 rounded-lg transition-colors z-10 bg-yellow-50"
            title={isExpanded ? (language === 'fr' ? 'Réduire' : 'Collapse') : (language === 'fr' ? 'Agrandir' : 'Expand')}
          >
            {isExpanded ? (
              <MdExpandMore className="w-6 h-6 text-yellow-600" />
            ) : (
              <MdExpandLess className="w-6 h-6 text-yellow-600" />
            )}
          </button>
          {/* Recent Messages Display */}
          {messages.length > 0 && (
            <div className={`mb-4 ${isExpanded ? 'flex-1 max-h-none' : 'max-h-40'} overflow-y-auto space-y-2 ${isExpanded ? 'mt-12' : ''}`}>
              {(isExpanded ? messages : messages.slice(-2)).map((msg) => (
                <div key={msg.id} className="space-y-2">
                  <div className="text-right">
                    <div className={`inline-block bg-aitenders-primary-blue text-white px-3 py-2 rounded-2xl rounded-tr-sm text-sm ${isExpanded ? 'max-w-lg' : 'max-w-xs'}`}>
                      {msg.message}
                    </div>
                  </div>
                  {msg.response && (
                    <div className="text-left">
                      <div className={`inline-block bg-aitenders-pale-blue text-aitenders-dark-blue px-3 py-2 rounded-2xl rounded-tl-sm text-sm ${isExpanded ? 'max-w-2xl' : 'max-w-md'}`}>
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
          <div className={`flex items-start gap-3 mb-3 ${isExpanded ? 'mt-auto' : ''}`}>
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

            {/* Right Side - Copy Button */}
            <div className="flex items-center gap-2">
              {messages.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyConversation}
                  className="h-8 px-3 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg flex items-center gap-1"
                  title={language === 'fr' ? 'Copier la conversation complète' : 'Copy full conversation'}
                >
                  <MdContentCopy className="w-3 h-3" />
                  {language === 'fr' ? 'Copier' : 'Copy'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Email Modal for Copy */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <h3 className="text-lg font-semibold text-aitenders-dark-blue mb-4">
              {language === 'fr' ? 'Adresse email requise' : 'Email address required'}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              {language === 'fr' 
                ? 'Veuillez saisir votre adresse email pour copier l\'ensemble de la conversation.'
                : 'Please enter your email address to copy the full conversation.'
              }
            </p>
            <Input
              type="email"
              placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleEmailSubmit()}
              className="mb-4"
              autoFocus
            />
            <div className="flex gap-3 justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setShowEmailModal(false);
                  setEmail("");
                  setCopyData("");
                }}
                className="px-4 py-2"
              >
                {language === 'fr' ? 'Annuler' : 'Cancel'}
              </Button>
              <Button
                onClick={handleEmailSubmit}
                disabled={!email.trim()}
                className="px-4 py-2 bg-aitenders-primary-blue hover:bg-aitenders-dark-blue text-white"
              >
                {language === 'fr' ? 'Copier' : 'Copy'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}