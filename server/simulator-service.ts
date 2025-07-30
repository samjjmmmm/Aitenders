import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface SimulatorQuestion {
  id: string;
  text: string;
  type: 'select' | 'number' | 'range' | 'boolean';
  options?: string[];
  min?: number;
  max?: number;
  unit?: string;
  weight: number;
  category: string;
  required: boolean;
  mapping?: Record<string, number>;
}

interface SimulatorResponse {
  questionId: string;
  answer: string | number | boolean;
  numericValue?: number;
}

interface SimulatorSession {
  sessionId: string;
  currentQuestionIndex: number;
  responses: SimulatorResponse[];
  startTime: Date;
  completed: boolean;
  userInfo?: {
    name: string;
    email: string;
    company: string;
  };
}

interface CalculationResult {
  id: string;
  name: string;
  value: number;
  unit: string;
  description: string;
}

class SimulatorService {
  private config: any = {};
  private sessions: Map<string, SimulatorSession> = new Map();

  constructor() {
    this.loadConfig();
  }

  private loadConfig(): void {
    try {
      const configPath = path.join(__dirname, 'simulator-config.json');
      const data = fs.readFileSync(configPath, 'utf8');
      this.config = JSON.parse(data);
      console.log('Simulator config loaded successfully');
    } catch (error) {
      console.error('Error loading simulator config:', error);
      this.config = { questions: [], calculationRules: [], settings: {} };
    }
  }

  // Démarrer une nouvelle session de simulateur
  startSession(sessionId: string): string {
    const session: SimulatorSession = {
      sessionId,
      currentQuestionIndex: 0,
      responses: [],
      startTime: new Date(),
      completed: false
    };
    
    this.sessions.set(sessionId, session);
    
    const firstQuestion = this.config.questions[0];
    if (!firstQuestion) {
      return "❌ Aucune question disponible dans le simulateur.";
    }

    return this.formatQuestion(firstQuestion, 1, this.config.questions.length);
  }

  // Obtenir la question courante
  getCurrentQuestion(sessionId: string): string | null {
    const session = this.sessions.get(sessionId);
    if (!session || session.completed) {
      return null;
    }

    const question = this.config.questions[session.currentQuestionIndex];
    if (!question) {
      return null;
    }

    return this.formatQuestion(question, session.currentQuestionIndex + 1, this.config.questions.length);
  }

  // Traiter une réponse à une question
  processAnswer(sessionId: string, answer: string): { nextQuestion?: string; completed?: boolean; message?: string; error?: string } {
    const session = this.sessions.get(sessionId);
    if (!session || session.completed) {
      return { error: "❌ Session non trouvée ou déjà terminée." };
    }

    const currentQuestion = this.config.questions[session.currentQuestionIndex];
    if (!currentQuestion) {
      return { error: "❌ Question non trouvée." };
    }

    // Valider et convertir la réponse
    const validatedAnswer = this.validateAndConvertAnswer(currentQuestion, answer);
    if (validatedAnswer.error) {
      return { error: `❌ ${validatedAnswer.error}` };
    }

    // Enregistrer la réponse
    const response: SimulatorResponse = {
      questionId: currentQuestion.id,
      answer: validatedAnswer.value!,
      numericValue: validatedAnswer.numericValue
    };
    
    session.responses.push(response);
    session.currentQuestionIndex++;

    // Vérifier si c'est la dernière question
    if (session.currentQuestionIndex >= this.config.questions.length) {
      session.completed = true;
      return { 
        completed: true, 
        message: this.getCompletionMessage() 
      };
    }

    // Passer à la question suivante
    const nextQuestion = this.config.questions[session.currentQuestionIndex];
    return { 
      nextQuestion: `✅ Réponse enregistrée !\n\n${this.formatQuestion(nextQuestion, session.currentQuestionIndex + 1, this.config.questions.length)}` 
    };
  }

  // Valider et convertir une réponse
  private validateAndConvertAnswer(question: SimulatorQuestion, answer: string): {
    value?: string | number | boolean;
    numericValue?: number;
    error?: string;
  } {
    const cleanAnswer = answer.trim();

    switch (question.type) {
      case 'select':
        if (!question.options?.includes(cleanAnswer)) {
          return { error: `Veuillez choisir une option parmi: ${question.options?.join(', ')}` };
        }
        const numericValue = question.mapping?.[cleanAnswer];
        return { value: cleanAnswer, numericValue };

      case 'number':
        const num = parseFloat(cleanAnswer);
        if (isNaN(num)) {
          return { error: 'Veuillez saisir un nombre valide.' };
        }
        if (question.min !== undefined && num < question.min) {
          return { error: `La valeur doit être supérieure ou égale à ${question.min}.` };
        }
        if (question.max !== undefined && num > question.max) {
          return { error: `La valeur doit être inférieure ou égale à ${question.max}.` };
        }
        return { value: num, numericValue: num };

      case 'range':
        const rangeNum = parseFloat(cleanAnswer);
        if (isNaN(rangeNum)) {
          return { error: 'Veuillez saisir un nombre valide.' };
        }
        if (question.min !== undefined && rangeNum < question.min) {
          return { error: `La valeur doit être entre ${question.min} et ${question.max}.` };
        }
        if (question.max !== undefined && rangeNum > question.max) {
          return { error: `La valeur doit être entre ${question.min} et ${question.max}.` };
        }
        return { value: rangeNum, numericValue: rangeNum };

      case 'boolean':
        const boolAnswer = cleanAnswer.toLowerCase();
        if (['oui', 'yes', 'true', '1'].includes(boolAnswer)) {
          return { value: true, numericValue: 1 };
        }
        if (['non', 'no', 'false', '0'].includes(boolAnswer)) {
          return { value: false, numericValue: 0 };
        }
        return { error: 'Veuillez répondre par "oui" ou "non".' };

      default:
        return { error: 'Type de question non supporté.' };
    }
  }

  // Formater une question pour l'affichage
  private formatQuestion(question: SimulatorQuestion, questionNumber: number, totalQuestions: number): string {
    let formatted = `📊 **Question ${questionNumber}/${totalQuestions}**\n\n`;
    formatted += `**${question.text}**\n\n`;

    switch (question.type) {
      case 'select':
        formatted += `Choisissez une option:\n`;
        question.options?.forEach((option, index) => {
          formatted += `• ${option}\n`;
        });
        break;

      case 'number':
        formatted += `Saisissez un nombre`;
        if (question.min !== undefined || question.max !== undefined) {
          formatted += ` (entre ${question.min || 'min'} et ${question.max || 'max'})`;
        }
        if (question.unit) {
          formatted += ` en ${question.unit}`;
        }
        formatted += `\n`;
        break;

      case 'range':
        formatted += `Saisissez une valeur entre ${question.min} et ${question.max}`;
        if (question.unit) {
          formatted += ` ${question.unit}`;
        }
        formatted += `\n`;
        break;

      case 'boolean':
        formatted += `Répondez par "oui" ou "non"\n`;
        break;
    }

    return formatted;
  }

  // Message de fin de simulateur
  private getCompletionMessage(): string {
    return `🎉 **Simulateur terminé !**\n\nPour recevoir votre rapport personnalisé avec vos résultats ROI détaillés, veuillez fournir vos informations :\n\n**Format requis :**\n- Nom: [Votre nom]\n- Email: [votre@email.com]\n- Entreprise: [Nom de votre entreprise]\n\n📧 Votre rapport sera envoyé par email avec tous les calculs et recommandations personnalisés !`;
  }

  // Traiter les informations utilisateur et générer le rapport
  processUserInfo(sessionId: string, userInfo: { name: string; email: string; company: string }): {
    success: boolean;
    message: string;
    reportData?: any;
  } {
    const session = this.sessions.get(sessionId);
    if (!session || !session.completed) {
      return { success: false, message: "Session non trouvée ou non terminée." };
    }

    session.userInfo = userInfo;
    
    // Calculer les résultats
    const results = this.calculateResults(session);
    
    return {
      success: true,
      message: `✅ Rapport généré avec succès ! Vous recevrez bientôt vos résultats par email à ${userInfo.email}.`,
      reportData: {
        session,
        results,
        userInfo
      }
    };
  }

  // Calculer les résultats basés sur les réponses
  private calculateResults(session: SimulatorSession): CalculationResult[] {
    const results: CalculationResult[] = [];
    const questionValues: Record<string, number> = {};
    const calculationValues: Record<string, number> = {};

    // Extraire les valeurs numériques des réponses
    session.responses.forEach(response => {
      if (response.numericValue !== undefined) {
        questionValues[`questions.${response.questionId}`] = response.numericValue;
      }
    });

    // Appliquer les règles de calcul
    this.config.calculationRules?.forEach((rule: any) => {
      if (!rule.active) return;

      try {
        // Vérifier les conditions
        const conditionsMet = rule.conditions?.every((condition: string) => {
          return this.evaluateCondition(condition, questionValues, calculationValues);
        }) ?? true;

        if (conditionsMet) {
          const value = this.evaluateFormula(rule.formula, questionValues, calculationValues);
          calculationValues[`calculationRules.${rule.id}`] = value;
          
          results.push({
            id: rule.id,
            name: rule.name,
            value: Math.round(value * 100) / 100, // Arrondir à 2 décimales
            unit: rule.outputUnit || '',
            description: rule.description || ''
          });
        }
      } catch (error) {
        console.error(`Error calculating rule ${rule.id}:`, error);
      }
    });

    return results;
  }

  // Évaluer une condition
  private evaluateCondition(condition: string, questionValues: Record<string, number>, calculationValues: Record<string, number>): boolean {
    try {
      // Remplacer les références par les valeurs
      let evaluableCondition = condition;
      
      Object.keys(questionValues).forEach(key => {
        evaluableCondition = evaluableCondition.replace(new RegExp(key, 'g'), questionValues[key].toString());
      });
      
      Object.keys(calculationValues).forEach(key => {
        evaluableCondition = evaluableCondition.replace(new RegExp(key, 'g'), calculationValues[key].toString());
      });

      // Évaluation sécurisée (basique)
      return eval(evaluableCondition);
    } catch (error) {
      console.error('Error evaluating condition:', condition, error);
      return false;
    }
  }

  // Évaluer une formule
  private evaluateFormula(formula: string, questionValues: Record<string, number>, calculationValues: Record<string, number>): number {
    let evaluableFormula = formula;
    
    Object.keys(questionValues).forEach(key => {
      evaluableFormula = evaluableFormula.replace(new RegExp(key, 'g'), questionValues[key].toString());
    });
    
    Object.keys(calculationValues).forEach(key => {
      evaluableFormula = evaluableFormula.replace(new RegExp(key, 'g'), calculationValues[key].toString());
    });

    try {
      return eval(evaluableFormula);
    } catch (error) {
      console.error('Error evaluating formula:', formula, error);
      return 0;
    }
  }

  // Obtenir les statistiques
  getSessionInfo(sessionId: string): SimulatorSession | null {
    return this.sessions.get(sessionId) || null;
  }

  // Nettoyer les sessions expirées (appelé périodiquement)
  cleanupExpiredSessions(): void {
    const now = new Date();
    const maxAge = 30 * 60 * 1000; // 30 minutes

    this.sessions.forEach((session, sessionId) => {
      if (now.getTime() - session.startTime.getTime() > maxAge) {
        this.sessions.delete(sessionId);
      }
    });
  }
}

export const simulatorService = new SimulatorService();