import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MdChat, MdClose, MdSend, MdSmartToy, MdOutlineQuestionAnswer 
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ChatMessage {
  id: number;
  message: string;
  timestamp: string;
  isUser: boolean;
}

const PRESET_QUESTIONS = [
  "Nos Cas d'Usage",
  "Processus d'Appel d'Offres", 
  "Planifier une Démo"
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const queryClient = useQueryClient();

  // Fetch chat messages
  const { data: messages = [] } = useQuery<ChatMessage[]>({
    queryKey: ["/api/chat"],
    enabled: isOpen
  });

  // Send message mutation
  const sendMessageMutation = useMutation({
    mutationFn: (message: string) => 
      apiRequest("POST", "/api/chat", { message, isUser: true }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/chat"] });
      setNewMessage("");
      
      // Simulate AI response after a delay
      setIsTyping(true);
      setTimeout(() => {
        const responses = [
          "Merci pour votre question ! Aitenders propose des solutions d'IA pour optimiser vos processus d'appels d'offres complexes.",
          "Excellent ! Je peux vous expliquer comment notre plateforme transforme la gestion des exigences et améliore la conformité.",
          "Parfait ! Contactez-nous pour une démonstration personnalisée de nos fonctionnalités avancées."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        apiRequest("POST", "/api/chat", { message: randomResponse, isUser: false }).then(() => {
          queryClient.invalidateQueries({ queryKey: ["/api/chat"] });
          setIsTyping(false);
        });
      }, 1500);
    }
  });

  const handleSendMessage = (message: string) => {
    if (message.trim()) {
      sendMessageMutation.mutate(message.trim());
    }
  };

  const handlePresetClick = (preset: string) => {
    handleSendMessage(preset);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <MdChat className="w-7 h-7" />
        </Button>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-purple-600 opacity-30 animate-ping"></div>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center md:justify-end p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl w-full md:w-96 h-[600px] md:mr-4 md:mb-4 flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <MdSmartToy className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Chat avec l'Assistant IA</h3>
                    <p className="text-purple-100 text-sm">Comment puis-je vous aider aujourd'hui ?</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full w-8 h-8 p-0"
                >
                  <MdClose className="w-5 h-5" />
                </Button>
              </div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {/* Welcome Message */}
                {messages.length === 0 && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MdOutlineQuestionAnswer className="w-8 h-8 text-purple-600" />
                    </div>
                    <p className="text-gray-600 mb-6">Start a conversation by typing your question above</p>
                    
                    {/* Preset Questions */}
                    <div className="space-y-2">
                      {PRESET_QUESTIONS.map((question, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handlePresetClick(question)}
                          className="w-full text-left justify-start bg-white hover:bg-purple-50 border-gray-200 hover:border-purple-200 text-gray-700"
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Chat Messages */}
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.isUser
                          ? 'bg-purple-600 text-white rounded-br-sm'
                          : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.message}</p>
                      <p className={`text-xs mt-2 opacity-70 ${message.isUser ? 'text-purple-100' : 'text-gray-500'}`}>
                        {new Date(message.timestamp).toLocaleTimeString('fr-FR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-2xl rounded-bl-sm shadow-sm border p-3 max-w-[80%]">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage(newMessage);
                      }
                    }}
                    placeholder="Tapez votre message..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    disabled={sendMessageMutation.isPending}
                  />
                  <Button
                    onClick={() => handleSendMessage(newMessage)}
                    disabled={!newMessage.trim() || sendMessageMutation.isPending}
                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-4 py-3"
                  >
                    <MdSend className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}