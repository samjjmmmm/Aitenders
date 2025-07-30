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

  // Valider et gérer les incertitudes pour une réponse
  private validateAnswer(question: any, answer: string): { value?: any; error?: string } {
    const cleanAnswer = answer.trim();
    
    // Patterns d'incertitude
    const unknownAnswers = ['je ne sais pas', 'aucune idee', 'aucune idée', 'je sais pas', 'sais pas', 'pas sur', 'pas sûr', 'don\'t know', 'no idea', 'not sure', 'pas certain', 'incertain'];
    const normalizeText = (text: string) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const normalizedAnswer = normalizeText(cleanAnswer);
    
    // Vérifier si c'est une expression d'incertitude
    if (unknownAnswers.some(phrase => normalizedAnswer.includes(normalizeText(phrase)))) {
      return { error: `💡 **Nous comprenons que vous n'êtes pas certain.**\n\nPouvez-vous donner une **estimation approximative** ?\n\nMême une estimation vous aidera à obtenir une analyse plus précise.\n\n${this.formatQuestion(question, 0, 0).replace(/\*\*Question.*?\*\*/, '**Question**')}` };
    }
    
    // Validation par type de question
    if (question.questionType === 'number') {
      // Essayer d'extraire un nombre même avec des mots approximatifs
      let numValue = parseFloat(cleanAnswer);
      
      // Si parsing direct échoue, essayer avec regex pour extraire le nombre
      if (isNaN(numValue)) {
        const numberMatch = cleanAnswer.match(/(\d+(?:\.\d+)?)/);
        if (numberMatch) {
          numValue = parseFloat(numberMatch[1]);
        }
      }
      
      if (isNaN(numValue)) {
        return { error: "❌ Veuillez entrer un nombre valide." };
      }
      if (question.validationRules.min !== undefined && numValue < question.validationRules.min) {
        return { error: `❌ La valeur doit être au minimum ${question.validationRules.min}.` };
      }
      if (question.validationRules.max !== undefined && numValue > question.validationRules.max) {
        return { error: `❌ La valeur doit être au maximum ${question.validationRules.max}.` };
      }
      return { value: numValue };
    }
    
    if (question.questionType === 'choice') {
      // Vérifier si la réponse correspond à une option ou à un numéro
      const choices = question.validationRules.choices || [];
      
      // Essayer de matcher directement
      const directMatch = choices.find((choice: string) => 
        normalizeText(choice).includes(normalizedAnswer) || 
        normalizedAnswer.includes(normalizeText(choice))
      );
      if (directMatch) return { value: directMatch };
      
      // Essayer de matcher par numéro
      const numChoice = parseInt(cleanAnswer);
      if (!isNaN(numChoice) && numChoice >= 1 && numChoice <= choices.length) {
        return { value: choices[numChoice - 1] };
      }
      
      return { error: `❌ Veuillez choisir une option valide (1-${choices.length}) ou tapez le nom de l'option.` };
    }
    
    if (question.questionType === 'multiple_choice') {
      const choices = question.validationRules.choices || [];
      const maxSelections = question.validationRules.maxSelections || 3;
      
      // Parser les réponses multiples (séparées par virgules)
      const answers = cleanAnswer.split(',').map(a => a.trim());
      const selectedChoices = [];
      
      for (const ans of answers) {
        const numChoice = parseInt(ans);
        if (!isNaN(numChoice) && numChoice >= 1 && numChoice <= choices.length) {
          selectedChoices.push(choices[numChoice - 1]);
        } else {
          // Essayer de matcher par nom
          const directMatch = choices.find((choice: string) => 
            normalizeText(choice).includes(normalizeText(ans))
          );
          if (directMatch) selectedChoices.push(directMatch);
        }
      }
      
      if (selectedChoices.length === 0) {
        return { error: `❌ Veuillez choisir au moins une option valide (1-${choices.length}).` };
      }
      if (selectedChoices.length > maxSelections) {
        return { error: `❌ Vous ne pouvez choisir que ${maxSelections} options maximum.` };
      }
      
      return { value: selectedChoices };
    }
    
    if (question.questionType === 'text') {
      if (question.validationRules.maxLength && cleanAnswer.length > question.validationRules.maxLength) {
        return { error: `❌ Le texte ne peut pas dépasser ${question.validationRules.maxLength} caractères.` };
      }
      return { value: cleanAnswer };
    }
    
    return { value: cleanAnswer };
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

    // Utiliser la nouvelle validation avec gestion d'incertitude
    const validation = this.validateAnswer(currentQuestion, answer);
    if (validation.error) {
      return { error: validation.error };
    }

    // Ajouter la réponse au calculateur avancé
    const addResult = advancedTenderCalculator.addResponse(currentQuestion.id, validation.value);
    if (!addResult.success) {
      return { error: `❌ ${addResult.error}` };
    }

    // Enregistrer dans la session
    session.responses[currentQuestion.id] = validation.value;
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