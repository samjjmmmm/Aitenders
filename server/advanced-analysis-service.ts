/**
 * Advanced Analysis Service - Manages detailed 15+ question analysis
 * Integrates with the advanced tender calculator for comprehensive ROI insights
 */

import { advancedTenderCalculator } from './advanced-tender-calculator';

interface AdvancedSession {
  sessionId: string;
  currentQuestionIndex: number;
  responses: Record<string, any>;
  startTime: Date;
  completed: boolean;
  category: string;
}

class AdvancedAnalysisService {
  private sessions: Map<string, AdvancedSession> = new Map();
  private questions: any[] = [];

  constructor() {
    this.questions = advancedTenderCalculator.getQuestions();
  }

  // Démarrer une nouvelle session d'analyse avancée
  async startSession(sessionId: string): Promise<string> {
    const session: AdvancedSession = {
      sessionId,
      currentQuestionIndex: 0,
      responses: {},
      startTime: new Date(),
      completed: false,
      category: 'tender_profile'
    };
    
    this.sessions.set(sessionId, session);
    
    const firstQuestion = this.questions[0];
    if (!firstQuestion) {
      return "❌ Aucune question disponible dans l'analyse avancée.";
    }

    return this.formatQuestion(firstQuestion, 1, this.questions.length);
  }

  // Formatter une question avec contexte
  private formatQuestion(question: any, index: number, total: number): string {
    let formatted = `**Question ${index}/${total} :** ${question.question}`;
    
    if (question.helpText) {
      formatted += `\n\n*${question.helpText}*`;
    }

    // Ajouter des contraintes de validation
    if (question.questionType === 'number') {
      if (question.validationRules.min !== undefined || question.validationRules.max !== undefined) {
        formatted += `\n\n📊 Valeur entre ${question.validationRules.min || 'min'} et ${question.validationRules.max || 'max'}`;
      }
    } else if (question.questionType === 'choice') {
      formatted += `\n\n**Options :**\n${question.validationRules.choices.map((c: string, i: number) => `${i + 1}. ${c}`).join('\n')}`;
    } else if (question.questionType === 'multiple_choice') {
      formatted += `\n\n**Choisissez jusqu'à ${question.validationRules.maxSelections || 3} options :**\n${question.validationRules.choices.map((c: string, i: number) => `${i + 1}. ${c}`).join('\n')}`;
      formatted += `\n\n*Séparez vos réponses par des virgules (ex: 1,3,5)*`;
    }

    return formatted;
  }

  // Traiter une réponse
  async processAnswer(sessionId: string, answer: string): Promise<{ nextQuestion?: string; completed?: boolean; message?: string; error?: string }> {
    const session = this.sessions.get(sessionId);
    if (!session || session.completed) {
      return { error: "❌ Session d'analyse non trouvée ou déjà terminée." };
    }

    const currentQuestion = this.questions[session.currentQuestionIndex];
    if (!currentQuestion) {
      return { error: "❌ Question non trouvée." };
    }

    // Valider et traiter la réponse
    let processedAnswer: any = answer.trim();
    
    try {
      if (currentQuestion.questionType === 'number') {
        processedAnswer = parseFloat(answer);
        if (isNaN(processedAnswer)) {
          return { error: "❌ Veuillez entrer un nombre valide." };
        }
      } else if (currentQuestion.questionType === 'choice') {
        // Gérer réponse par numéro ou par texte
        const choices = currentQuestion.validationRules.choices;
        const answerNum = parseInt(answer);
        
        if (answerNum >= 1 && answerNum <= choices.length) {
          processedAnswer = choices[answerNum - 1];
        } else if (choices.some((c: string) => c.toLowerCase().includes(answer.toLowerCase()))) {
          processedAnswer = choices.find((c: string) => c.toLowerCase().includes(answer.toLowerCase()));
        } else {
          return { error: `❌ Veuillez choisir parmi : ${choices.join(', ')}` };
        }
      } else if (currentQuestion.questionType === 'multiple_choice') {
        // Gérer réponses multiples séparées par virgules
        const numbers = answer.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
        const choices = currentQuestion.validationRules.choices;
        
        if (numbers.length === 0) {
          return { error: "❌ Veuillez entrer des numéros séparés par des virgules (ex: 1,3,5)." };
        }
        
        const maxSelections = currentQuestion.validationRules.maxSelections || choices.length;
        if (numbers.length > maxSelections) {
          return { error: `❌ Maximum ${maxSelections} sélections autorisées.` };
        }
        
        const invalidNumbers = numbers.filter(n => n < 1 || n > choices.length);
        if (invalidNumbers.length > 0) {
          return { error: `❌ Numéros invalides : ${invalidNumbers.join(', ')}. Choisissez entre 1 et ${choices.length}.` };
        }
        
        processedAnswer = numbers.map(n => choices[n - 1]);
      }

      // Valider avec le calculateur avancé
      const validation = advancedTenderCalculator.validateResponse(currentQuestion.id, processedAnswer);
      if (!validation.valid) {
        return { error: `❌ ${validation.error}` };
      }

      // Ajouter la réponse
      const addResult = advancedTenderCalculator.addResponse(currentQuestion.id, validation.parsedValue);
      if (!addResult.success) {
        return { error: `❌ ${addResult.error}` };
      }

      // Enregistrer dans la session
      session.responses[currentQuestion.id] = validation.parsedValue;
      session.currentQuestionIndex++;

      // Vérifier si terminé
      if (session.currentQuestionIndex >= this.questions.length) {
        session.completed = true;
        
        // Générer le rapport complet
        const report = advancedTenderCalculator.generateDetailedReport('fr');
        return {
          completed: true,
          message: `✅ Réponse enregistrée !\n\n${report}\n\n**🎉 Veuillez fournir vos informations pour recevoir votre rapport détaillé !**`
        };
      }

      // Question suivante
      const nextQuestion = this.questions[session.currentQuestionIndex];
      const formattedNext = this.formatQuestion(nextQuestion, session.currentQuestionIndex + 1, this.questions.length);

      return {
        nextQuestion: formattedNext,
        message: `✅ Réponse enregistrée ! Question suivante :\n\n${formattedNext}`
      };

    } catch (error) {
      console.error('Error processing advanced analysis answer:', error);
      return { error: "❌ Erreur lors du traitement de la réponse." };
    }
  }

  // Obtenir les informations de session
  getSessionInfo(sessionId: string): AdvancedSession | undefined {
    return this.sessions.get(sessionId);
  }

  // Obtenir la question courante
  getCurrentQuestion(sessionId: string): string | null {
    const session = this.sessions.get(sessionId);
    if (!session || session.completed) {
      return null;
    }

    const question = this.questions[session.currentQuestionIndex];
    if (!question) {
      return null;
    }

    return this.formatQuestion(question, session.currentQuestionIndex + 1, this.questions.length);
  }

  // Redémarrer une session
  async restartSession(sessionId: string): Promise<string> {
    this.sessions.delete(sessionId);
    return await this.startSession(sessionId);
  }
}

export const advancedAnalysisService = new AdvancedAnalysisService();