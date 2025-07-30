import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Settings, Plus, Trash2, Edit, Save, Calculator, HelpCircle } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';

interface SimulatorQuestion {
  id: string;
  text: string;
  type: 'select' | 'number' | 'boolean' | 'range';
  options?: string[];
  min?: number;
  max?: number;
  unit?: string;
  weight: number;
  category: string;
  required: boolean;
}

interface CalculationRule {
  id: string;
  name: string;
  formula: string;
  description: string;
  outputUnit: string;
  conditions: string[];
  active: boolean;
}

interface SimulatorConfig {
  questions: SimulatorQuestion[];
  calculationRules: CalculationRule[];
  categories: string[];
  settings: {
    maxScore: number;
    passingThreshold: number;
    showDetailedResults: boolean;
    allowSkipQuestions: boolean;
  };
}

export default function SimulatorConfig() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState('questions');
  const [editingQuestion, setEditingQuestion] = useState<SimulatorQuestion | null>(null);
  const [editingRule, setEditingRule] = useState<CalculationRule | null>(null);

  // Fetch simulator configuration
  const { data: config, isLoading } = useQuery({
    queryKey: ['/api/simulator/config'],
    retry: false,
  });

  // Save configuration mutation
  const saveConfigMutation = useMutation({
    mutationFn: async (newConfig: Partial<SimulatorConfig>) => {
      const response = await fetch('/api/simulator/config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newConfig),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Configuration sauvegardée",
        description: "Les paramètres du simulateur ont été mis à jour avec succès.",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/simulator/config'] });
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder la configuration.",
        variant: "destructive",
      });
    },
  });

  const defaultConfig: SimulatorConfig = {
    questions: [
      {
        id: '1',
        text: 'Quel est le montant moyen de vos appels d\'offres ?',
        type: 'select',
        options: ['< 100K€', '100K-500K€', '500K-2M€', '2M-10M€', '> 10M€'],
        weight: 10,
        category: 'projet',
        required: true
      },
      {
        id: '2',
        text: 'Combien d\'appels d\'offres traitez-vous par mois ?',
        type: 'number',
        min: 1,
        max: 100,
        unit: 'AO/mois',
        weight: 8,
        category: 'volume',
        required: true
      },
      {
        id: '3',
        text: 'Temps moyen passé sur un appel d\'offres',
        type: 'range',
        min: 10,
        max: 200,
        unit: 'heures',
        weight: 9,
        category: 'temps',
        required: true
      }
    ],
    calculationRules: [
      {
        id: '1',
        name: 'Économie de temps annuelle',
        formula: 'questions.volume * questions.temps * 0.4 * 12',
        description: 'Calcule les heures économisées par an (40% d\'amélioration)',
        outputUnit: 'heures/an',
        conditions: ['questions.volume > 0', 'questions.temps > 0'],
        active: true
      },
      {
        id: '2',
        name: 'Économie financière',
        formula: 'calculationRules.1 * 75',
        description: 'Convert les heures économisées en économies financières (75€/h)',
        outputUnit: '€/an',
        conditions: ['calculationRules.1 > 0'],
        active: true
      }
    ],
    categories: ['projet', 'volume', 'temps', 'équipe', 'processus'],
    settings: {
      maxScore: 100,
      passingThreshold: 60,
      showDetailedResults: true,
      allowSkipQuestions: false
    }
  };

  const currentConfig = config || defaultConfig;

  const handleSaveConfig = () => {
    saveConfigMutation.mutate(currentConfig);
  };

  const addQuestion = () => {
    const newQuestion: SimulatorQuestion = {
      id: Date.now().toString(),
      text: 'Nouvelle question',
      type: 'select',
      options: ['Option 1', 'Option 2'],
      weight: 5,
      category: 'général',
      required: false
    };
    setEditingQuestion(newQuestion);
  };

  const addCalculationRule = () => {
    const newRule: CalculationRule = {
      id: Date.now().toString(),
      name: 'Nouvelle règle',
      formula: 'questions.1 * 1.5',
      description: 'Description de la règle',
      outputUnit: 'unité',
      conditions: [],
      active: true
    };
    setEditingRule(newRule);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-aitenders-pale-blue to-aitenders-pastel-blue p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-white rounded-lg w-1/3"></div>
            <div className="h-96 bg-white rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-aitenders-pale-blue to-aitenders-pastel-blue">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="h-8 w-8 text-aitenders-primary-blue" />
            <h1 className="text-3xl font-bold text-aitenders-dark-blue">
              Configuration du Simulateur
            </h1>
          </div>
          <p className="text-aitenders-dark-blue/70">
            Configurez les questions, les calculs et les paramètres du simulateur ROI.
          </p>
        </div>

        {/* Main Configuration Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="questions" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Questions
            </TabsTrigger>
            <TabsTrigger value="calculations" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Calculs
            </TabsTrigger>
            <TabsTrigger value="categories" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Catégories
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Paramètres
            </TabsTrigger>
          </TabsList>

          {/* Questions Tab */}
          <TabsContent value="questions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-aitenders-dark-blue">
                Questions du Simulateur
              </h2>
              <Button onClick={addQuestion} className="bg-aitenders-primary-blue hover:bg-aitenders-primary-blue/90">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter une Question
              </Button>
            </div>

            <div className="grid gap-6">
              {currentConfig.questions?.map((question: any, index: number) => (
                <Card key={question.id} className="bg-white shadow-sm border-aitenders-light-blue/20">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-aitenders-dark-blue">
                          Question {index + 1}
                        </CardTitle>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="secondary" className="bg-aitenders-pastel-blue text-aitenders-dark-blue">
                            {question.category}
                          </Badge>
                          <Badge variant="outline" className="border-aitenders-light-blue">
                            Poids: {question.weight}
                          </Badge>
                          {question.required && (
                            <Badge className="bg-red-100 text-red-800">
                              Obligatoire
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingQuestion(question)}
                          className="border-aitenders-light-blue text-aitenders-primary-blue hover:bg-aitenders-pale-blue"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-red-200 text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-aitenders-dark-blue font-medium mb-3">{question.text}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm text-aitenders-dark-blue/70">
                      <div>
                        <span className="font-medium">Type:</span> {question.type}
                      </div>
                      {question.unit && (
                        <div>
                          <span className="font-medium">Unité:</span> {question.unit}
                        </div>
                      )}
                      {question.options && (
                        <div className="col-span-2">
                          <span className="font-medium">Options:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {question.options.map((option: any, i: number) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {option}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Calculations Tab */}
          <TabsContent value="calculations" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-aitenders-dark-blue">
                Règles de Calcul
              </h2>
              <Button onClick={addCalculationRule} className="bg-aitenders-primary-blue hover:bg-aitenders-primary-blue/90">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter une Règle
              </Button>
            </div>

            <div className="grid gap-6">
              {currentConfig.calculationRules?.map((rule: any, index: number) => (
                <Card key={rule.id} className="bg-white shadow-sm border-aitenders-light-blue/20">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-aitenders-dark-blue flex items-center gap-2">
                          {rule.name}
                          <Switch checked={rule.active} className="ml-auto" />
                        </CardTitle>
                        <p className="text-aitenders-dark-blue/70 mt-1">{rule.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingRule(rule)}
                          className="border-aitenders-light-blue text-aitenders-primary-blue hover:bg-aitenders-pale-blue"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-red-200 text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-aitenders-pale-blue p-4 rounded-lg">
                      <Label className="text-sm font-medium text-aitenders-dark-blue">Formule:</Label>
                      <code className="block mt-1 text-sm font-mono bg-white p-2 rounded border">
                        {rule.formula}
                      </code>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                      <div>
                        <span className="font-medium text-aitenders-dark-blue">Unité de sortie:</span>
                        <span className="ml-2 text-aitenders-dark-blue/70">{rule.outputUnit}</span>
                      </div>
                      <div>
                        <span className="font-medium text-aitenders-dark-blue">Conditions:</span>
                        <span className="ml-2 text-aitenders-dark-blue/70">
                          {rule.conditions.length || 'Aucune'}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Categories Tab */}
          <TabsContent value="categories" className="space-y-6">
            <h2 className="text-2xl font-semibold text-aitenders-dark-blue">
              Catégories de Questions
            </h2>
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {currentConfig.categories?.map((category: any) => (
                    <Badge
                      key={category}
                      variant="secondary"
                      className="bg-aitenders-pastel-blue text-aitenders-dark-blue px-3 py-1"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-semibold text-aitenders-dark-blue">
              Paramètres Généraux
            </h2>
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Score Maximum</Label>
                    <Input
                      type="number"
                      value={currentConfig.settings?.maxScore || 100}
                      className="border-aitenders-light-blue focus:border-aitenders-primary-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Seuil de Réussite (%)</Label>
                    <Input
                      type="number"
                      value={currentConfig.settings?.passingThreshold || 60}
                      className="border-aitenders-light-blue focus:border-aitenders-primary-blue"
                    />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Afficher les résultats détaillés</Label>
                      <p className="text-sm text-aitenders-dark-blue/70">
                        Montrer le détail des calculs aux utilisateurs
                      </p>
                    </div>
                    <Switch checked={currentConfig.settings?.showDetailedResults || true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Autoriser ignorer les questions</Label>
                      <p className="text-sm text-aitenders-dark-blue/70">
                        Permettre aux utilisateurs de passer certaines questions
                      </p>
                    </div>
                    <Switch checked={currentConfig.settings?.allowSkipQuestions || false} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <div className="flex justify-end mt-8">
          <Button
            onClick={handleSaveConfig}
            disabled={saveConfigMutation.isPending}
            className="bg-aitenders-primary-blue hover:bg-aitenders-primary-blue/90 px-8"
          >
            <Save className="h-4 w-4 mr-2" />
            {saveConfigMutation.isPending ? 'Sauvegarde...' : 'Sauvegarder la Configuration'}
          </Button>
        </div>
      </div>
    </div>
  );
}