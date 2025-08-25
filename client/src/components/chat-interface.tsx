import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdSend, MdSettings, MdBarChart, MdExpandMore, MdExpandLess, MdClose, MdContentCopy, MdDelete, MdCalculate, MdSecurity, MdTrendingUp, MdContactMail, MdPlayArrow, MdStarOutline, MdAnalytics } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
// Toast removed to prevent UI blocking
import { BrowserFingerprint } from "@/lib/browser-fingerprint";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation(); // Initialize translation hook
  const [message, setMessage] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [browserFingerprint, setBrowserFingerprint] = useState<string | null>(null);
  const [sessionInitialized, setSessionInitialized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [copyData, setCopyData] = useState("");
  const [email, setEmail] = useState("");
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', company: '' });
  const [simulatorForm, setSimulatorForm] = useState<Record<string, string>>({});
  const [showSimulatorForm, setShowSimulatorForm] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState<string>('');
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to scroll chat to bottom
  const scrollToBottom = () => {
    setTimeout(() => {
      const chatContainer = document.querySelector('.chat-messages-container');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 50); // Reduced timeout for faster scrolling
  };

  // Function to focus input field without scrolling page
  const focusInput = () => {
    setTimeout(() => {
      if (inputRef.current && !isClosed) {
        inputRef.current.focus({ preventScroll: true });
      }
    }, 100);
  };

  const { data: messages = [] } = useQuery<ChatMessage[]>({
    queryKey: ["/api/chat", browserFingerprint],
    enabled: !!browserFingerprint, // Only run when fingerprint is available
    queryFn: async () => {
      const response = await apiRequest("GET", "/api/chat", undefined, {
        'x-browser-fingerprint': browserFingerprint || ""
      });
      return response.json();
    }
  });

  // Auto-scroll to bottom whenever messages change (without auto-focus on load)
  useEffect(() => {
    if (messages && messages.length > 0) {
      scrollToBottom();
      // Only focus input if chat is actively being used (not on initial page load)
      if (!isClosed && isExpanded) {
        focusInput();
      }
    }
  }, [messages]);

  // Focus input when chat opens or expands
  useEffect(() => {
    if (!isClosed) {
      focusInput();
    }
  }, [isClosed, isExpanded]);

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

  // Mutation to submit user info for simulator
  const submitUserInfoMutation = useMutation({
    mutationFn: async (userData: { name: string; email: string; company: string }) => {
      const response = await apiRequest("POST", "/api/simulator/user-info", {
        ...userData,
        fingerprint: browserFingerprint
      });
      return response.json();
    },
    onSuccess: (data) => {
      console.log('User info submitted successfully:', data);
      setShowUserInfoModal(false);
      setUserInfo({ name: '', email: '', company: '' });
      // Send confirmation message to chat
      const confirmationMessage = `✅ Merci ${userInfo.name} ! Votre rapport ROI personnalisé sera envoyé à ${userInfo.email}. Vous devriez le recevoir dans quelques minutes.`;
      // Add confirmation message to chat
      queryClient.refetchQueries({ queryKey: ["/api/chat", browserFingerprint] });
    },
    onError: (error) => {
      console.error('Failed to submit user info:', error);
      alert('Erreur lors de l\'envoi des informations. Veuillez réessayer.');
    }
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

  // Track page changes without clearing chat - maintain context across pages
  useEffect(() => {
    const handlePageChange = () => {
      const newPage = window.location.pathname;
      if (currentPage && currentPage !== newPage) {
        // Just update current page, don't clear chat
        console.log(`Page changed: ${currentPage} → ${newPage} (chat context preserved)`);
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
  }, [currentPage]);

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
      // Auto-scroll to bottom and focus input after response
      setTimeout(() => {
        scrollToBottom();
        focusInput();
      }, 100);
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

  // Direct simulator start function
  const startSimulator = () => {
    sendMessageMutation.mutate("simulateur");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Handle clear chat
  const clearChat = () => {
    if (messages.length === 0) {
      return;
    }

    if (window.confirm(language === 'fr' ? 'Êtes-vous sûr de vouloir vider le chat ?' : 'Are you sure you want to clear the chat?')) {
      clearChatMutation.mutate();
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
        "Simulation / ROI": "simulateur",
        "AI Agents": "Comment fonctionnent les agents IA d'Aitenders et que peuvent-ils faire ?",
        "Data Security": "Que fait Aitenders pour la sécurité des données ?",
        "Contactez nous": "Comment puis-je contacter l'équipe Aitenders pour une démonstration ?",
        "Demo UC3": "Comment Aitenders gère-t-il les appels d'offres complexes multi-lots ?",
        "ROI Calculator": "simulateur",
        "Contact Expert": "Comment obtenir l'aide d'un expert en gestion d'appels d'offres ?",
        "Outils": "Quels outils et fonctionnalités propose Aitenders ?"
      },
      en: {
        "Our Use Cases": "What are all the use cases available on Aitenders?",
        "Nos Cas d'Usage": "What are all the use cases available on Aitenders?",
        "Simulation / ROI": "simulateur",
        "AI Agents": "How do Aitenders AI agents work and what can they do?",
        "Data Security": "What does Aitenders do for data security?",
        "Contact us": "How can I contact the Aitenders team for a demonstration?",
        "Demo UC3": "How does Aitenders handle complex multi-lot tenders?",
        "ROI Calculator": "simulateur",
        "Contact Expert": "How to get help from a tender management expert?",
        "Tools": "What tools and features does Aitenders offer?"
      }
    };

    return questions[language]?.[buttonLabel as keyof typeof questions[typeof language]] || "";
  };

  // Dynamic actions based on current page
  const getPageSpecificActions = () => {
    const currentPath = currentPage || window.location.pathname;

    // Home page actions
    if (currentPath === '/') {
      return [
        {
          label: language === 'fr' ? 'Nos Cas d\'Usage' : 'Our Use Cases',
          icon: <span className="text-gray-400">+</span>,
          onClick: () => {
            setIsExpanded(true);
            sendMessageMutation.mutate("Quels sont l'ensemble des cas d'usage disponibles sur Aitenders ?");
          }
        },
        {
          label: "Simulation / ROI",
          icon: <MdSettings className="w-3 h-3 text-gray-400" />,
          onClick: () => {
            setIsExpanded(true);
            startSimulator();
          }
        },
        {
          label: "AI Agents",
          icon: <MdStarOutline className="w-3 h-3 text-gray-400" />,
          onClick: () => {
            setIsExpanded(true);
            sendMessageMutation.mutate("Comment fonctionnent les agents IA d'Aitenders et que peuvent-ils faire ?");
          }
        },
        {
          label: "Data Security",
          icon: <MdSecurity className="w-3 h-3 text-gray-400" />,
          onClick: () => {
            setIsExpanded(true);
            sendMessageMutation.mutate("Que fait Aitenders pour la sécurité des données ?");
          }
        }
      ];
    }

    // UC1 page actions
    if (currentPath === '/uc1') {
      return [
        {
          label: "Nos cas d'usage",
          icon: <span className="text-gray-400">+</span>,
          onClick: () => {
            setIsExpanded(true);
            sendMessageMutation.mutate("Quels sont l'ensemble des cas d'usage disponibles sur Aitenders ?");
          }
        },
        {
          label: "Demo UC1",
          icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
          onClick: () => {
            setIsExpanded(true);
            sendMessageMutation.mutate("Comment Aitenders aide-t-il dans l'analyse et la réponse aux appels d'offres simples ?");
          }
        },
        {
          label: "ROI Calculator",
          icon: <MdAnalytics className="w-3 h-3 text-gray-400" />,
          onClick: () => {
            setIsExpanded(true);
            startSimulator();
          }
        },
        {
          label: "Contact Expert",
          icon: <MdContactMail className="w-3 h-3 text-gray-400" />,
          onClick: () => {
            setIsExpanded(true);
            sendMessageMutation.mutate("Comment obtenir l'aide d'un expert en gestion d'appels d'offres ?");
          }
        }
      ];
    }

    // UC2 page actions
    if (currentPath === '/uc2') {
      return [
        {
          label: "Nos cas d'usage",
          icon: <span className="text-gray-400">+</span>,
          onClick: () => {
            setIsExpanded(true);
            sendMessageMutation.mutate("Quels sont l'ensemble des cas d'usage disponibles sur Aitenders ?");
          }
        },
        {
          label: "Demo UC2",
          icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
          onClick: () => {
            setIsExpanded(true);
            sendMessageMutation.mutate("Comment Aitenders aide-t-il dans la gestion collaborative des appels d'offres ?");
          }
        },
        {
          label: "ROI Calculator",
          icon: <MdAnalytics className="w-3 h-3 text-gray-400" />,
          onClick: () => {
            setIsExpanded(true);
            startSimulator();
          }
        },
        {
          label: "Contact Expert",
          icon: <MdContactMail className="w-3 h-3 text-gray-400" />,
          onClick: () => {
            setIsExpanded(true);
            sendMessageMutation.mutate("Comment obtenir l'aide d'un expert en gestion d'appels d'offres ?");
          }
        }
      ];
    }

    // UC3 page actions
    if (currentPath === '/uc3') {
      return [
        {
          label: "Nos cas d'usage",
          icon: <span className="text-gray-400">+</span>,
          onClick: () => {
            setIsExpanded(true);
            sendMessageMutation.mutate("Quels sont l'ensemble des cas d'usage disponibles sur Aitenders ?");
          }
        },
        {
          label: "Demo UC3",
          icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
          onClick: () => {
            setIsExpanded(true);
            sendMessageMutation.mutate("Comment Aitenders gère-t-il les appels d'offres complexes multi-lots ?");
          }
        },
        {
          label: "ROI Calculator",
          icon: <MdAnalytics className="w-3 h-3 text-gray-400" />,
          onClick: () => {
            setIsExpanded(true);
            startSimulator();
          }
        },
        {
          label: "Contact Expert",
          icon: <MdContactMail className="w-3 h-3 text-gray-400" />,
          onClick: () => {
            setIsExpanded(true);
            sendMessageMutation.mutate("Comment obtenir l'aide d'un expert en gestion d'appels d'offres ?");
          }
        }
      ];
    }

    // UC4-UC8 page actions (template for other use cases)
    if (currentPath.startsWith('/uc') && ['4', '5', '6', '7', '8'].includes(currentPath.slice(-1))) {
      const ucNumber = currentPath.slice(-1);
      return [
        {
          label: "Nos cas d'usage",
          icon: <span className="text-gray-400">+</span>,
          onClick: () => {
            setIsExpanded(true);
            sendMessageMutation.mutate("Quels sont l'ensemble des cas d'usage disponibles sur Aitenders ?");
          }
        },
        {
          label: `Demo UC${ucNumber}`,
          icon: <MdPlayArrow className="w-3 h-3 text-gray-400" />,
          onClick: () => {
            setIsExpanded(true);
            sendMessageMutation.mutate(`Comment Aitenders aide-t-il dans le cas d'usage UC${ucNumber} ?`);
          }
        },
        {
          label: "ROI Calculator",
          icon: <MdAnalytics className="w-3 h-3 text-gray-400" />,
          onClick: () => {
            setIsExpanded(true);
            startSimulator();
          }
        },
        {
          label: "Contact Expert",
          icon: <MdContactMail className="w-3 h-3 text-gray-400" />,
          onClick: () => {
            setIsExpanded(true);
            sendMessageMutation.mutate("Comment obtenir l'aide d'un expert en gestion d'appels d'offres ?");
          }
        }
      ];
    }

    // Default actions for other pages
    return [
      {
        label: language === 'fr' ? 'Simulateur ROI' : 'ROI Simulator',
        icon: <MdCalculate className="w-3 h-3 text-gray-400" />,
        onClick: () => {
          setIsExpanded(true);
          startSimulator();
        }
      },
      {
        label: language === 'fr' ? 'Sécurité' : 'Security',
        icon: <MdSecurity className="w-3 h-3 text-gray-400" />,
        onClick: () => {
          setIsExpanded(true);
          sendMessageMutation.mutate("Que fait Aitenders pour la sécurité des données ?");
        }
      },
      {
        label: 'ROI',
        icon: <MdTrendingUp className="w-3 h-3 text-gray-400" />,
        onClick: () => {
          setIsExpanded(true);
          startSimulator();
        }
      },
      {
        label: 'Contact',
        icon: <MdContactMail className="w-3 h-3 text-gray-400" />,
        onClick: () => {
          setIsExpanded(true);
          sendMessageMutation.mutate("Comment contacter l'équipe Aitenders pour une démonstration ?");
        }
      }
    ];
  };

  // Enhanced actions with questions
  const enhancedCustomActions = customActions.map(action => ({
    ...action,
    onClick: () => {
      // Auto-expand chat when button is clicked
      setIsExpanded(true);

      // Special handling for simulator button
      if (action.label.toLowerCase().includes('simulateur') ||
          action.label.toLowerCase().includes('simulator') ||
          action.label.toLowerCase().includes('roi') ||
          action.label.toLowerCase().includes('simulation')) {
        startSimulator();
        return;
      }

      const question = getButtonQuestion(action.label);
      if (question) {
        if (question === "simulateur") {
          startSimulator();
        } else {
          sendMessageMutation.mutate(question);
        }
      } else {
        action.onClick();
      }
    }
  }));

  // Use custom actions if provided, otherwise use page-specific actions
  const actions = customActions.length > 0 ? enhancedCustomActions : getPageSpecificActions();

  // Format AI response for display
  const formatResponse = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
        // Add unique id for each link to handle clicks properly
        const linkId = `chat-link-${Math.random().toString(36).substr(2, 9)}`;
        // Store the click handler globally
        setTimeout(() => {
          const linkElement = document.getElementById(linkId);
          if (linkElement) {
            linkElement.addEventListener('click', (e) => {
              e.preventDefault();
              window.location.href = url;
            });
          }
        }, 100);

        return `<a id="${linkId}" href="${url}" class="text-aitenders-primary-blue hover:text-aitenders-dark-blue underline font-medium cursor-pointer inline-block px-2 py-1 bg-aitenders-primary-blue/10 rounded hover:bg-aitenders-primary-blue/20 transition-colors">${linkText}</a>`;
      })
      .replace(/\n_____\n?/g, '<br/>') // Hide the trigger marker
      .replace(/^_____\n?/g, '') // Hide if at start
      .replace(/_____$/g, '') // Hide if at end
      .replace(/\n/g, '<br/>')
      .replace(/•/g, '&bull;');
  };

  // Check if response should be completely hidden (simulator with only quick form)
  const shouldHideResponse = (text: string) => {
    // Hide if it's just a question title followed by trigger marker
    const cleanText = text.replace(/\*\*/g, '').replace(/_____/g, '').trim();
    return cleanText.match(/^Question \d+\/\d+ : .+$/) && text.includes('_____');
  };

  // Détecter si c'est une question de simulateur avec champs structurés
  const detectSimulatorQuestion = (text: string): { isSimulator: boolean; questionId: string; fields: Array<{label: string; placeholder: string; key: string; suffix: string}>; bgColor: string; borderColor: string; textColor: string } => {
    if (!text.includes('**Question') || !text.includes('_____')) {
      return { isSimulator: false, questionId: '', fields: [], bgColor: '', borderColor: '', textColor: '' };
    }

    const questionPatterns = [
      {
        id: 'tender_profile_combined',
        pattern: /Profil de vos appels d'offres/,
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-800',
        fields: [
          { label: '#AO', placeholder: 'ex: 300', key: 'nb_ao', suffix: 'appels d\'offres par an' },
          { label: 'Valeur moyenne', placeholder: 'ex: 10M', key: 'valeur_moyenne', suffix: '€' },
          { label: 'Durée préparation', placeholder: 'ex: 6-8', key: 'duree_prep', suffix: 'semaines' }
        ]
      },
      {
        id: 'document_complexity_combined',
        pattern: /Complexité documentaire/,
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-800',
        fields: [
          { label: 'Documents par AO', placeholder: 'ex: 15', key: 'docs_par_ao', suffix: 'documents' },
          { label: 'Pages par document', placeholder: 'ex: 30', key: 'pages_par_doc', suffix: 'pages' },
          { label: 'Versions avant soumission', placeholder: 'ex: 3', key: 'versions', suffix: 'versions' }
        ]
      },
      {
        id: 'qa_management_combined',
        pattern: /Gestion Q&A/,
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        textColor: 'text-purple-800',
        fields: [
          { label: 'Cycles Q&A par AO', placeholder: 'ex: 2', key: 'cycles_qa', suffix: 'cycles' },
          { label: 'Heures par cycle', placeholder: 'ex: 8', key: 'heures_cycle', suffix: 'heures' }
        ]
      },
      {
        id: 'contract_admin_combined',
        pattern: /Administration contrats/,
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        textColor: 'text-orange-800',
        fields: [
          { label: 'Contrats gérés/an', placeholder: 'ex: 50', key: 'contrats_an', suffix: 'contrats' },
          { label: 'Heures setup initial', placeholder: 'ex: 40', key: 'heures_setup', suffix: 'heures par contrat' }
        ]
      },
      {
        id: 'knowledge_management_combined',
        pattern: /Gestion des connaissances/,
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-200',
        textColor: 'text-indigo-800',
        fields: [
          { label: '% Réutilisation', placeholder: 'ex: 70', key: 'pct_reutilisation', suffix: '%' },
          { label: '% Créés from scratch', placeholder: 'ex: 25', key: 'pct_nouveau', suffix: '%' }
        ]
      },
      {
        id: 'business_profile_combined',
        pattern: /Profil d'entreprise/,
        bgColor: 'bg-pink-50',
        borderColor: 'border-pink-200',
        textColor: 'text-pink-800',
        fields: [
          { label: 'Secteur', placeholder: 'ex: Construction', key: 'secteur', suffix: '' },
          { label: 'CA annuel', placeholder: 'ex: 50M', key: 'ca_annuel', suffix: '€' },
          { label: 'Taux réussite', placeholder: 'ex: 35', key: 'taux_reussite', suffix: '%' },
          { label: 'Priorités', placeholder: 'ex: réduire coûts, améliorer conformité', key: 'priorites', suffix: '' }
        ]
      }
    ];

    for (const pattern of questionPatterns) {
      if (pattern.pattern.test(text)) {
        return {
          isSimulator: true,
          questionId: pattern.id,
          fields: pattern.fields,
          bgColor: pattern.bgColor,
          borderColor: pattern.borderColor,
          textColor: pattern.textColor
        };
      }
    }

    return { isSimulator: false, questionId: '', fields: [], bgColor: '', borderColor: '', textColor: '' };
  };

  // Soumettre le formulaire structuré du simulateur
  const submitSimulatorForm = () => {
    const formValues = Object.entries(simulatorForm).map(([key, value]) => value).join(', ');
    const message = formValues || 'Formulaire vide';
    sendMessageMutation.mutate(message);
    setSimulatorForm({});
    setShowSimulatorForm(false);
  };

  // Effect to hide header when chat is expanded
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      if (isExpanded) {
        header.style.display = 'none';
        document.body.style.paddingTop = '0';
      } else {
        header.style.display = 'block';
        document.body.style.paddingTop = '';
      }
    }

    // Cleanup function to restore header when component unmounts
    return () => {
      if (header) {
        header.style.display = 'block';
        document.body.style.paddingTop = '';
      }
    };
  }, [isExpanded]);

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
    <div className={`fixed ${isExpanded ? 'inset-0' : 'bottom-0 left-0 right-0'} z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-2xl`}>
      <div className={`${isExpanded ? 'w-[98%] h-[95vh] mt-4' : 'max-w-4xl'} mx-auto ${isExpanded ? 'p-2 flex flex-col' : ''}`}>
        <div className={`${isExpanded ? 'bg-white rounded-2xl h-full flex flex-col shadow-2xl border border-gray-300' : ''} p-3 relative`}>
          {/* Expand/Collapse Button */}
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
              // Scroll to bottom when expanding
              if (!isExpanded) {
                setTimeout(() => scrollToBottom(), 150);
              }
            }}
            className="absolute top-3 left-3 p-1 hover:opacity-80 transition-opacity z-10"
            title={isExpanded ? (language === 'fr' ? 'Réduire' : 'Collapse') : (language === 'fr' ? 'Agrandir' : 'Expand')}
          >
            {isExpanded ? (
              <MdExpandMore className="w-4 h-4 text-purple-600 font-bold" style={{strokeWidth: '4'}} />
            ) : (
              <MdExpandLess className="w-4 h-4 text-purple-600 font-bold" style={{strokeWidth: '4'}} />
            )}
          </button>
          {/* Recent Messages Display */}
          {messages.length > 0 && (
            <div className={`chat-messages-container mb-4 ${isExpanded ? 'flex-1 min-h-0 max-h-none overflow-y-scroll scrollbar-visible' : 'max-h-40 overflow-y-auto'} space-y-2 ${isExpanded ? 'mt-12 pr-2' : ''}`}>
              {(isExpanded ? messages : messages.slice(-2)).map((msg) => (
                <div key={msg.id} className="space-y-2">
                  <div className="text-right">
                    <div className={`inline-block bg-aitenders-primary-blue text-white px-3 py-2 rounded-2xl rounded-tr-sm text-sm ${isExpanded ? 'max-w-lg' : 'max-w-xs'}`}>
                      {msg.message}
                    </div>
                  </div>
                  {msg.response && (
                    <div className="text-left">
                      {(() => {
                        const simulatorData = detectSimulatorQuestion(msg.response || '');
                        const hideMainResponse = shouldHideResponse(msg.response);

                        return (
                          <div className={`inline-block ${hideMainResponse ? '' : 'bg-aitenders-pale-blue text-aitenders-dark-blue px-3 py-2 rounded-2xl rounded-tl-sm text-sm'} ${isExpanded ? 'max-w-5xl w-full' : 'max-w-md'}`}>
                            {!hideMainResponse && (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: formatResponse(msg.response)
                                }}
                              />
                            )}

                            {/* Show Inline Structured Form for Simulator Questions */}
                            {simulatorData.isSimulator && (
                              <div className={`mt-4 p-4 ${simulatorData.bgColor} rounded-lg border ${simulatorData.borderColor}`}>
                                <div className={`text-sm font-medium ${simulatorData.textColor} mb-3`}>
                                  ⚡ Saisie rapide (optionnel)
                                </div>
                                <div className="space-y-3">
                                  {simulatorData.fields.map((field) => (
                                    <div key={field.key} className="flex items-center gap-2 text-sm flex-wrap">
                                      <span className={`font-medium ${simulatorData.textColor}`}>
                                        {field.label}:
                                      </span>
                                      <Input
                                        type="text"
                                        placeholder={field.placeholder}
                                        value={simulatorForm[field.key] || ''}
                                        onChange={(e) => setSimulatorForm({
                                          ...simulatorForm,
                                          [field.key]: e.target.value
                                        })}
                                        className="h-8 text-sm w-24 border-b-2 border-blue-300 bg-white rounded-md focus:border-blue-500"
                                      />
                                      {field.suffix && (
                                        <span className={simulatorData.textColor}>{field.suffix}</span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                                <div className="flex gap-2 mt-4">
                                  <Button
                                    size="sm"
                                    onClick={submitSimulatorForm}
                                    disabled={Object.values(simulatorForm).every(v => !v.trim())}
                                    className="bg-aitenders-primary-blue hover:bg-aitenders-dark-blue text-white text-xs"
                                  >
                                    ✅ Valider la réponse
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => setSimulatorForm({})}
                                    className="text-xs"
                                  >
                                    🗑️ Vider
                                  </Button>
                                </div>
                                <div className="text-xs text-gray-500 mt-2">
                                  💬 Sinon, écrivez votre réponse détaillée comme l'exemple :
                                  <span className="italic">" Nous traitons 300 appels d'offres complexes par an, 10 complexes en JV, 100 moyen et 400 petits valeur moyenne respective 100M€, 10M€, 1 M€, préparation 6-8 semaines pour les petits à 1 an pour les grands"</span>
                                </div>
                              </div>
                            )}

                            {/* Show User Info Button when simulator completed */}
                            {msg.response.includes('Veuillez fournir vos informations') && (
                              <div className="mt-3 pt-3 border-t border-aitenders-light-blue">
                                <Button
                                  onClick={() => setShowUserInfoModal(true)}
                                  size="sm"
                                  className="bg-aitenders-primary-blue hover:bg-aitenders-dark-blue text-white text-xs"
                                >
                                  📧 Saisir mes informations
                                </Button>
                              </div>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Input Field */}
          <div className={`flex items-start gap-3 mb-3 ${isExpanded ? 'mt-auto' : ''}`}>
            <Input
              ref={inputRef}
              type="text"
              placeholder={language === 'fr' ? "       Poser une question" : "      Ask a question"}
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

            {/* Right Side - Action Buttons */}
            <div className="flex items-center gap-2">
              {messages.length > 0 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearChat}
                    className="h-8 px-3 text-xs text-red-600 hover:text-red-900 hover:bg-red-50 rounded-lg flex items-center gap-1"
                    title={language === 'fr' ? 'Vider le chat' : 'Clear chat'}
                  >
                    <MdDelete className="w-3 h-3" />
                    {language === 'fr' ? 'Vider' : 'Clear'}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopyConversation}
                    className="h-8 px-3 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg flex items-center gap-1"
                    title={language === 'fr' ? 'Copier la conversation complète' : 'Copy full conversation'}
                  >
                    <MdContentCopy className="w-3 h-3" />
                    {t('chat.copy', language === 'fr' ? 'Copier' : 'Copy')}
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* User Info Modal for Simulator */}
      {showUserInfoModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <h3 className="text-lg font-semibold text-aitenders-dark-blue mb-4">
              📊 Recevoir votre rapport ROI personnalisé
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Merci d'avoir terminé le simulateur ! Veuillez fournir vos informations pour recevoir votre rapport détaillé par email.
            </p>

            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Nom complet"
                value={userInfo.name}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                className="w-full"
                autoFocus
              />
              <Input
                type="email"
                placeholder="votre@email.com"
                value={userInfo.email}
                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                className="w-full"
              />
              <Input
                type="text"
                placeholder="Nom de votre entreprise"
                value={userInfo.company}
                onChange={(e) => setUserInfo({ ...userInfo, company: e.target.value })}
                className="w-full"
              />
            </div>

            <div className="flex gap-3 justify-end mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setShowUserInfoModal(false);
                  setUserInfo({ name: '', email: '', company: '' });
                }}
                disabled={submitUserInfoMutation.isPending}
              >
                Annuler
              </Button>
              <Button
                onClick={() => {
                  if (userInfo.name && userInfo.email && userInfo.company) {
                    submitUserInfoMutation.mutate(userInfo);
                  } else {
                    alert('Veuillez remplir tous les champs obligatoires.');
                  }
                }}
                disabled={submitUserInfoMutation.isPending || !userInfo.name || !userInfo.email || !userInfo.company}
                className="bg-aitenders-primary-blue hover:bg-aitenders-dark-blue"
              >
                {submitUserInfoMutation.isPending ? 'Envoi...' : '📧 Recevoir le rapport'}
              </Button>
            </div>
          </div>
        </div>
      )}

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
                {t('chat.copy', language === 'fr' ? 'Copier' : 'Copy')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}