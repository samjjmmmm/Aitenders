import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  message: string;
  response?: string;
  createdAt: Date;
}

export default function ChatSection() {
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

  return (
    <section className="bg-white/50 backdrop-blur-sm py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Chat with Our AI Assistant</h2>
          <p className="text-lg text-gray-600">
            Get instant answers about tender management and our platform capabilities
          </p>
        </div>
        
        <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden max-w-2xl mx-auto">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 px-6 py-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <span className="text-white font-medium">Aitenders AI Assistant</span>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="h-80 overflow-y-auto p-6 space-y-4">
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
    </section>
  );
}
