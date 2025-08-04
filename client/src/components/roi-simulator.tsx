import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Loader2, Send, Download, Calculator, TrendingUp, Clock, Euro } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';

interface ROISimulatorProps {
  useCase: string;
  className?: string;
}

interface ROIResults {
  timeSavings: number;
  efficiencyGains: number;
  costReduction: number;
  totalSavings: number;
  roi: number;
  projectBudget: number;
  projectDuration: number;
}

interface SimulationStep {
  id: string;
  type: 'question' | 'result' | 'email-gate';
  content: string;
  timestamp: Date;
  data?: any;
}

export function ROISimulator({ useCase, className = '' }: ROISimulatorProps) {
  const [steps, setSteps] = useState<SimulationStep[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [projectBudget, setProjectBudget] = useState('');
  const [projectDuration, setProjectDuration] = useState('');
  const [businessSize, setBusinessSize] = useState('');
  const [urgency, setUrgency] = useState('');
  const [currentResults, setCurrentResults] = useState<ROIResults | null>(null);
  const [simulationId, setSimulationId] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [sessionId] = useState(() => `roi-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
  const [userInput, setUserInput] = useState('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [steps]);

  useEffect(() => {
    // Auto-start the advanced ROI simulator immediately
    startAdvancedSimulator();
  }, [useCase]);

  const startAdvancedSimulator = async () => {
    setIsCalculating(true);
    
    try {
      // Send "simulateur" command to start the advanced ROI calculator
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
      console.error('Error starting advanced simulator:', error);
      // Fallback to simple welcome message
      const welcomeMessage = getWelcomeMessage(useCase);
      setSteps([{
        id: '1',
        type: 'question',
        content: welcomeMessage,
        timestamp: new Date()
      }]);
    } finally {
      setIsCalculating(false);
    }
  };

  const getWelcomeMessage = (useCase: string) => {
    const messages = {
      'UC1': 'Bienvenue dans le simulateur ROI pour les projets < 1M€. Je vais vous aider à calculer le retour sur investissement potentiel avec Aitenders. Commençons par quelques questions simples.',
      'UC2': 'Bienvenue dans le simulateur ROI pour les projets de 1-10M€. Découvrons ensemble les économies possibles avec notre solution d\'analyse intelligente des appels d\'offres.',
      'UC3': 'Bienvenue dans le simulateur ROI pour les grands projets > 10M€. Évaluons l\'impact transformationnel d\'Aitenders sur vos opérations d\'appels d\'offres.',
      'UC4': 'Simulateur ROI pour la gestion de petits volumes documentaires. Calculons les gains d\'efficacité pour vos processus d\'analyse.',
      'UC5': 'Simulateur ROI pour 10-500 documents. Estimons l\'optimisation de vos workflows d\'appels d\'offres.',
      'UC6': 'Simulateur ROI pour les volumes documentaires complexes. Mesurons l\'impact sur vos projets d\'envergure.'
    };
    return messages[useCase as keyof typeof messages] || messages['UC1'];
  };

  const questions = [
    {
      key: 'budget',
      label: 'Quel est le budget moyen de vos projets ?',
      component: (
        <Select value={projectBudget} onValueChange={setProjectBudget}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez une tranche" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="100000">100k€ - 500k€</SelectItem>
            <SelectItem value="500000">500k€ - 1M€</SelectItem>
            <SelectItem value="2000000">1M€ - 5M€</SelectItem>
            <SelectItem value="7500000">5M€ - 10M€</SelectItem>
            <SelectItem value="15000000">10M€ - 25M€</SelectItem>
            <SelectItem value="50000000">25M€+</SelectItem>
          </SelectContent>
        </Select>
      )
    },
    {
      key: 'duration',
      label: 'Quelle est la durée typique de vos projets ?',
      component: (
        <Select value={projectDuration} onValueChange={setProjectDuration}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez une durée" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3">3 mois</SelectItem>
            <SelectItem value="6">6 mois</SelectItem>
            <SelectItem value="12">1 an</SelectItem>
            <SelectItem value="18">18 mois</SelectItem>
            <SelectItem value="24">2 ans</SelectItem>
            <SelectItem value="36">3 ans+</SelectItem>
          </SelectContent>
        </Select>
      )
    },
    {
      key: 'size',
      label: 'Quelle est la taille de votre équipe projet ?',
      component: (
        <Select value={businessSize} onValueChange={setBusinessSize}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez la taille" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">1-5 personnes</SelectItem>
            <SelectItem value="medium">6-20 personnes</SelectItem>
            <SelectItem value="large">21-50 personnes</SelectItem>
            <SelectItem value="enterprise">50+ personnes</SelectItem>
          </SelectContent>
        </Select>
      )
    },
    {
      key: 'urgency',
      label: 'Quel est le niveau d\'urgence de vos besoins d\'optimisation ?',
      component: (
        <Select value={urgency} onValueChange={setUrgency}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez l'urgence" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Amélioration continue</SelectItem>
            <SelectItem value="medium">Besoin à court terme</SelectItem>
            <SelectItem value="high">Priorité immédiate</SelectItem>
            <SelectItem value="critical">Besoin critique</SelectItem>
          </SelectContent>
        </Select>
      )
    }
  ];

  const handleUserResponse = async (userInput: string) => {
    if (!userInput.trim()) return;

    setIsCalculating(true);

    // Add user message to steps
    setSteps(prev => [...prev, {
      id: `user-${Date.now()}`,
      type: 'question',
      content: `👤 ${userInput}`,
      timestamp: new Date()
    }]);

    try {
      // Send response to advanced simulator
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput, sessionId })
      });

      const data = await response.json();

      if (data.response) {
        setSteps(prev => [...prev, {
          id: `bot-${Date.now()}`,
          type: 'question',
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
      setIsCalculating(false);
    }
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentStep];
    if (!currentQuestion) return;

    // Add user response to steps
    let responseText = '';
    switch (currentQuestion.key) {
      case 'budget':
        responseText = `Budget sélectionné: ${formatCurrency(parseInt(projectBudget))}`;
        break;
      case 'duration':
        responseText = `Durée sélectionnée: ${projectDuration} mois`;
        break;
      case 'size':
        responseText = `Taille d'équipe: ${businessSize}`;
        break;
      case 'urgency':
        responseText = `Urgence: ${urgency}`;
        break;
    }

    setSteps(prev => [...prev, {
      id: `response-${currentStep}`,
      type: 'question',
      content: `✓ ${responseText}`,
      timestamp: new Date()
    }]);

    if (currentStep < questions.length - 1) {
      // Move to next question
      setCurrentStep(currentStep + 1);
      setTimeout(() => {
        setSteps(prev => [...prev, {
          id: `q-${currentStep + 1}`,
          type: 'question',
          content: questions[currentStep + 1].label,
          timestamp: new Date()
        }]);
      }, 500);
    } else {
      // All questions answered, calculate ROI
      calculateROI();
    }
  };

  const calculateROI = async () => {
    setIsCalculating(true);
    
    try {
      const inputs = {
        projectBudget,
        projectDuration,
        businessSize,
        urgency
      };

      const response = await fetch('/api/roi/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          useCase,
          projectBudget,
          projectDuration,
          inputs
        })
      });

      const data = await response.json();

      if (data.success) {
        setCurrentResults(data.results);
        setSimulationId(data.simulationId);
        
        // Add calculation step
        setSteps(prev => [...prev, {
          id: 'calculation',
          type: 'result',
          content: 'Calcul terminé ! Voici vos résultats personnalisés :',
          timestamp: new Date(),
          data: data.results
        }]);

        // Add email gate step
        setTimeout(() => {
          setSteps(prev => [...prev, {
            id: 'email-gate',
            type: 'email-gate',
            content: 'Pour télécharger votre rapport ROI détaillé au format PDF, veuillez renseigner votre adresse email :',
            timestamp: new Date()
          }]);
        }, 1000);
      }
    } catch (error) {
      console.error('ROI calculation error:', error);
      setSteps(prev => [...prev, {
        id: 'error',
        type: 'question',
        content: 'Une erreur est survenue lors du calcul. Veuillez réessayer.',
        timestamp: new Date()
      }]);
    } finally {
      setIsCalculating(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!simulationId || !email) return;
    
    setIsDownloading(true);
    
    try {
      const response = await fetch(`/api/roi/download/${simulationId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (data.success) {
        setSteps(prev => [...prev, {
          id: 'download-success',
          type: 'question',
          content: `✓ Parfait ! Votre rapport ROI a été préparé. Un email de confirmation a été envoyé à ${email}.`,
          timestamp: new Date()
        }]);
        
        // Simulate PDF download (in real implementation, this would trigger actual download)
        const link = document.createElement('a');
        link.href = 'data:text/plain;charset=utf-8,ROI Report Generated';
        link.download = `aitenders-roi-report-${useCase}.pdf`;
        link.click();
      }
    } catch (error) {
      console.error('PDF download error:', error);
      setSteps(prev => [...prev, {
        id: 'download-error',
        type: 'question',
        content: 'Une erreur est survenue lors de la préparation du téléchargement. Veuillez réessayer.',
        timestamp: new Date()
      }]);
    } finally {
      setIsDownloading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const isCurrentQuestionAnswered = () => {
    const question = questions[currentStep];
    if (!question) return false;
    
    switch (question.key) {
      case 'budget': return projectBudget !== '';
      case 'duration': return projectDuration !== '';
      case 'size': return businessSize !== '';
      case 'urgency': return urgency !== '';
      default: return false;
    }
  };

  return (
    <div className={`roi-simulator ${className}`}>
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
                Cas d'usage: {useCase} • Simulation interactive
              </p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="space-y-3">
                {/* Message */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3880E8] flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-[#F5F9FE] rounded-lg p-4 border border-[#EBF2FD]">
                      <p className="text-[#112646]">{step.content}</p>
                      
                      {/* ROI Results Display */}
                      {step.type === 'result' && step.data && (
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4 border border-[#C3D9F8]">
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="w-5 h-5 text-[#3880E8]" />
                              <span className="font-medium text-[#112646]">Économies de temps</span>
                            </div>
                            <p className="text-2xl font-bold text-[#3880E8]">
                              {formatCurrency(step.data.timeSavings)}
                            </p>
                          </div>
                          
                          <div className="bg-white rounded-lg p-4 border border-[#C3D9F8]">
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="w-5 h-5 text-[#3880E8]" />
                              <span className="font-medium text-[#112646]">Gains d'efficacité</span>
                            </div>
                            <p className="text-2xl font-bold text-[#3880E8]">
                              {formatCurrency(step.data.efficiencyGains)}
                            </p>
                          </div>
                          
                          <div className="bg-white rounded-lg p-4 border border-[#C3D9F8]">
                            <div className="flex items-center gap-2 mb-2">
                              <Euro className="w-5 h-5 text-[#3880E8]" />
                              <span className="font-medium text-[#112646]">Réduction des coûts</span>
                            </div>
                            <p className="text-2xl font-bold text-[#3880E8]">
                              {formatCurrency(step.data.costReduction)}
                            </p>
                          </div>
                          
                          <div className="bg-gradient-to-r from-[#3880E8] to-[#112646] rounded-lg p-4 text-white">
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="w-5 h-5" />
                              <span className="font-medium">ROI Total</span>
                            </div>
                            <p className="text-2xl font-bold">
                              {step.data.roi.toFixed(1)}%
                            </p>
                            <p className="text-sm opacity-90 mt-1">
                              {formatCurrency(step.data.totalSavings)} d'économies
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Email Gate */}
                      {step.type === 'email-gate' && (
                        <div className="mt-4 space-y-3">
                          <div className="flex gap-2">
                            <Input
                              type="email"
                              placeholder="votre@email.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="flex-1"
                            />
                            <Button
                              onClick={handleDownloadPDF}
                              disabled={!email || isDownloading}
                              className="bg-[#3880E8] hover:bg-[#112646] text-white"
                            >
                              {isDownloading ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : (
                                <Download className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                          <p className="text-xs text-gray-500">
                            En téléchargeant, vous acceptez de recevoir des informations d'Aitenders.
                          </p>
                        </div>
                      )}
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
            
            {/* Current Question Input */}
            {currentStep < questions.length && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-gray-600">?</span>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <Label className="text-[#112646] font-medium mb-3 block">
                      {questions[currentStep].label}
                    </Label>
                    {questions[currentStep].component}
                    <Button
                      onClick={handleNextQuestion}
                      disabled={!isCurrentQuestionAnswered()}
                      className="mt-3 bg-[#3880E8] hover:bg-[#112646] text-white"
                    >
                      Suivant <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Calculating indicator */}
            {isCalculating && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3880E8] flex items-center justify-center flex-shrink-0">
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                </div>
                <div className="flex-1">
                  <div className="bg-[#F5F9FE] rounded-lg p-4 border border-[#EBF2FD]">
                    <p className="text-[#112646]">
                      Calcul en cours de votre ROI personnalisé...
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* User Input Field for Advanced Simulator */}
          <div className="border-t pt-4">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Tapez votre réponse ici..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !isCalculating) {
                    handleUserResponse(userInput);
                    setUserInput('');
                  }
                }}
                className="flex-1"
                disabled={isCalculating}
              />
              <Button
                onClick={() => {
                  handleUserResponse(userInput);
                  setUserInput('');
                }}
                disabled={!userInput.trim() || isCalculating}
                className="bg-[#3880E8] hover:bg-[#112646] text-white"
              >
                {isCalculating ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}