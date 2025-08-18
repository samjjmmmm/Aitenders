import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Send, Calculator } from 'lucide-react';

interface AitendersSimulatorFinalProps {
  useCase: string;
  className?: string;
}

interface SimulationStep {
  id: string;
  type: 'question' | 'user' | 'result';
  content: string;
  timestamp: Date;
}

export function AitendersSimulatorFinal({ useCase, className = '' }: AitendersSimulatorFinalProps) {
  const [steps, setSteps] = useState<SimulationStep[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [sessionId] = useState(() => `aitenders-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    // Disabled auto-scroll to prevent page-level scrolling issues
    // Users can manually scroll within the simulator if needed
  };

  useEffect(() => {
    // Disabled auto-scroll to prevent page jumping to simulator on load
    // scrollToBottom();
  }, [steps]);

  useEffect(() => {
    // Auto-start the Aitenders simulator immediately
    startSimulator();
  }, [useCase]);

  const startSimulator = async () => {
    setIsProcessing(true);
    
    try {
      // Send "simulateur" command to start the Aitenders ROI calculator
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'simulateur', sessionId })
      });

      const data = await response.json();

      if (data.response) {
        setSteps([{
          id: '1',
          type: 'question',
          content: data.response,
          timestamp: new Date()
        }]);
      }
    } catch (error) {
      console.error('Error starting Aitenders simulator:', error);
      // Fallback message
      setSteps([{
        id: '1',
        type: 'question',
        content: '❌ Erreur lors du démarrage du simulateur. Veuillez rafraîchir la page.',
        timestamp: new Date()
      }]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleUserResponse = async (userInput: string) => {
    if (!userInput.trim()) return;

    setIsProcessing(true);

    // Add user message to steps
    setSteps(prev => [...prev, {
      id: `user-${Date.now()}`,
      type: 'user',
      content: userInput,
      timestamp: new Date()
    }]);

    try {
      // Send response to simulator
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput, sessionId })
      });

      const data = await response.json();

      if (data.response) {
        const messageType = data.response.includes('✅ Simulation terminée') ? 'result' : 'question';
        
        setSteps(prev => [...prev, {
          id: `bot-${Date.now()}`,
          type: messageType,
          content: data.response,
          timestamp: new Date()
        }]);
      }
    } catch (error) {
      console.error('Error processing response:', error);
      setSteps(prev => [...prev, {
        id: `error-${Date.now()}`,
        type: 'question',
        content: '❌ Erreur lors du traitement de votre réponse. Veuillez réessayer.',
        timestamp: new Date()
      }]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSendMessage = () => {
    if (userInput.trim() && !isProcessing) {
      handleUserResponse(userInput);
      setUserInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isProcessing) {
      handleSendMessage();
    }
  };

  return (
    <div className={`aitenders-simulator-final ${className}`}>
      <Card className="w-full max-w-4xl mx-auto bg-white border shadow-lg">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b">
            <Calculator className="w-8 h-8 text-[#3880E8]" />
            <div>
              <h3 className="text-xl font-semibold text-[#112646]">
                Simulateur ROI Aitenders
              </h3>
              <p className="text-gray-600 text-sm">
                Cas d'usage: {useCase} • Simulation Multi-Projets
              </p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
            {steps.map((step) => (
              <div key={step.id} className="space-y-3">
                {/* Message */}
                <div className="flex gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    step.type === 'user' 
                      ? 'bg-gray-100' 
                      : step.type === 'result'
                      ? 'bg-green-500'
                      : 'bg-[#3880E8]'
                  }`}>
                    {step.type === 'user' ? (
                      <span className="text-sm font-medium text-gray-600">👤</span>
                    ) : step.type === 'result' ? (
                      <span className="text-white text-sm">✓</span>
                    ) : (
                      <Calculator className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className={`rounded-lg p-4 border ${
                      step.type === 'user'
                        ? 'bg-gray-50 border-gray-200'
                        : step.type === 'result'
                        ? 'bg-green-50 border-green-200'
                        : 'bg-[#F5F9FE] border-[#EBF2FD]'
                    }`}>
                      <div className={`whitespace-pre-wrap ${
                        step.type === 'user' ? 'text-gray-700' : 'text-[#112646]'
                      }`}>
                        {step.content}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {step.timestamp.toLocaleTimeString('fr-FR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Processing indicator */}
            {isProcessing && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3880E8] flex items-center justify-center flex-shrink-0">
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                </div>
                <div className="flex-1">
                  <div className="bg-[#F5F9FE] rounded-lg p-4 border border-[#EBF2FD]">
                    <p className="text-[#112646]">
                      Traitement en cours...
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* User Input Field */}
          <div className="border-t pt-4">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Tapez votre réponse ici..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
                disabled={isProcessing}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!userInput.trim() || isProcessing}
                className="bg-[#3880E8] hover:bg-[#112646] text-white"
              >
                {isProcessing ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              💡 Vous pouvez répondre en langage naturel ou utiliser les formats suggérés
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}