import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Settings, Save, Calculator, TestTube } from 'lucide-react';

export default function SimulatorAdmin() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [testAnswers, setTestAnswers] = useState<Record<string, any>>({
    '1': '500K-2M€',
    '2': '8',
    '3': '40',
    '4': '3-5 personnes',
    '5': '25',
    '6': true
  });

  // Fetch simulator configuration
  const { data: config, isLoading } = useQuery({
    queryKey: ['/api/simulator/config'],
    retry: false,
  });

  // Test calculation mutation
  const testCalculation = useMutation({
    mutationFn: async (answers: Record<string, any>) => {
      const response = await fetch('/api/simulator/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers }),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Calcul réussi",
        description: `ROI calculé : ${data.summary.roi}x`,
      });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Impossible d'effectuer le calcul.",
        variant: "destructive",
      });
    },
  });

  const handleTestCalculation = () => {
    testCalculation.mutate(testAnswers);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-aitenders-pale-blue to-aitenders-pastel-blue p-6">
        <div className="max-w-6xl mx-auto">
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
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="h-8 w-8 text-aitenders-primary-blue" />
            <h1 className="text-3xl font-bold text-aitenders-dark-blue">
              Administration du Simulateur ROI
            </h1>
          </div>
          <p className="text-aitenders-dark-blue/70">
            Gérez la configuration et testez les calculs du simulateur d'économies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configuration actuelle */}
          <div className="space-y-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-aitenders-dark-blue flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Configuration Actuelle
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-aitenders-dark-blue">Questions configurées</Label>
                  <p className="text-2xl font-bold text-aitenders-primary-blue">
                    {config?.questions?.length || 0}
                  </p>
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-aitenders-dark-blue">Règles de calcul</Label>
                  <p className="text-2xl font-bold text-aitenders-primary-blue">
                    {config?.calculationRules?.length || 0}
                  </p>
                </div>

                <div>
                  <Label className="text-sm font-medium text-aitenders-dark-blue">Catégories</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {config?.categories?.map((cat: string) => (
                      <Badge key={cat} variant="secondary" className="bg-aitenders-pastel-blue text-aitenders-dark-blue">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Label className="text-sm font-medium text-aitenders-dark-blue">Paramètres</Label>
                  <div className="mt-2 space-y-1 text-sm text-aitenders-dark-blue/70">
                    <p>Score maximum : {config?.settings?.maxScore || 100}</p>
                    <p>Seuil de réussite : {config?.settings?.passingThreshold || 60}%</p>
                    <p>Coût horaire : {config?.settings?.costPerHour || 85}€/h</p>
                    <p>Amélioration efficacité : {((config?.settings?.efficiencyImprovement || 0.35) * 100)}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Questions */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-aitenders-dark-blue">Questions du Simulateur</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {config?.questions?.map((q: any, i: number) => (
                    <div key={q.id} className="p-3 bg-aitenders-pale-blue rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-aitenders-dark-blue">Q{i+1}</span>
                        <Badge variant="outline" className="text-xs">
                          {q.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-aitenders-dark-blue">{q.text}</p>
                      <div className="mt-2 text-xs text-aitenders-dark-blue/60">
                        Type: {q.type} | Poids: {q.weight}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Test du calculateur */}
          <div className="space-y-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-aitenders-dark-blue flex items-center gap-2">
                  <TestTube className="h-5 w-5" />
                  Test du Calculateur
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <Label className="text-sm font-medium">Montant moyen AO</Label>
                    <select 
                      className="w-full mt-1 p-2 border rounded-md bg-white"
                      value={testAnswers['1']}
                      onChange={(e) => setTestAnswers({...testAnswers, '1': e.target.value})}
                    >
                      <option value="< 100K€">{'< 100K€'}</option>
                      <option value="100K-500K€">100K-500K€</option>
                      <option value="500K-2M€">500K-2M€</option>
                      <option value="2M-10M€">2M-10M€</option>
                      <option value="> 10M€">{'> 10M€'}</option>
                    </select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">AO par mois</Label>
                    <Input
                      type="number"
                      value={testAnswers['2']}
                      onChange={(e) => setTestAnswers({...testAnswers, '2': e.target.value})}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Temps par AO (heures)</Label>
                    <Input
                      type="number"
                      value={testAnswers['3']}
                      onChange={(e) => setTestAnswers({...testAnswers, '3': e.target.value})}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Taille équipe</Label>
                    <select 
                      className="w-full mt-1 p-2 border rounded-md bg-white"
                      value={testAnswers['4']}
                      onChange={(e) => setTestAnswers({...testAnswers, '4': e.target.value})}
                    >
                      <option value="1-2 personnes">1-2 personnes</option>
                      <option value="3-5 personnes">3-5 personnes</option>
                      <option value="6-10 personnes">6-10 personnes</option>
                      <option value="11-20 personnes">11-20 personnes</option>
                      <option value="> 20 personnes">{'> 20 personnes'}</option>
                    </select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Taux de succès actuel (%)</Label>
                    <Input
                      type="number"
                      value={testAnswers['5']}
                      onChange={(e) => setTestAnswers({...testAnswers, '5': e.target.value})}
                      className="mt-1"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="tools"
                      checked={testAnswers['6']}
                      onChange={(e) => setTestAnswers({...testAnswers, '6': e.target.checked})}
                      className="rounded"
                    />
                    <Label htmlFor="tools" className="text-sm">Outils AO actuels</Label>
                  </div>
                </div>

                <Button
                  onClick={handleTestCalculation}
                  disabled={testCalculation.isPending}
                  className="w-full bg-aitenders-primary-blue hover:bg-aitenders-primary-blue/90"
                >
                  {testCalculation.isPending ? 'Calcul...' : 'Tester le Calcul'}
                </Button>

                {/* Résultats */}
                {testCalculation.data && (
                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3">Résultats du test</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Économies annuelles:</span>
                        <span className="font-semibold">
                          {testCalculation.data.summary.totalSavings?.toLocaleString()}€
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>CA supplémentaire:</span>
                        <span className="font-semibold">
                          {testCalculation.data.summary.additionalRevenue?.toLocaleString()}€
                        </span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-semibold">ROI Aitenders:</span>
                        <span className="font-bold text-green-700">
                          {testCalculation.data.summary.roi}x
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}