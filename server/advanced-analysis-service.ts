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
    let formatted = `**Question ${index}/${total} :** **${question.question}**`;
    
    if (question.helpText) {
      formatted += `\n\n*${question.helpText}*`;
    }

    // Ajouter des exemples de réponses naturelles au lieu de contraintes de validation
    if (question.questionType === 'number') {
      const examples = this.getExampleForQuestion(question.id);
      if (examples) {
        formatted += `\n\n📊 Exemple de réponse: ${examples}`;
      }
    } else if (question.questionType === 'choice') {
      formatted += `\n\n**Options :**\n${question.validationRules.choices.map((c: string, i: number) => `${i + 1}. ${c}`).join('\n')}`;
    } else if (question.questionType === 'multiple_choice') {
      formatted += `\n\n**Choisissez jusqu'à ${question.validationRules.maxSelections || 3} options :**\n${question.validationRules.choices.map((c: string, i: number) => `${i + 1}. ${c}`).join('\n')}`;
      formatted += `\n\n*Séparez vos réponses par des virgules (ex: 1,3,5)*`;
    }

    return formatted;
  }

  // Obtenir des exemples naturels par question
  private getExampleForQuestion(questionId: string): string | null {
    const examples: Record<string, string> = {
      'tenders_per_year': 'environ 250, entre 100 et 200',
      'avg_tender_value': '500000€, entre 200K et 2M€',
      'response_weeks': '4 semaines, entre 2 et 6',
      'docs_per_tender': 'environ 15, entre 5 et 25',
      'pages_per_doc': '30 pages, entre 10 et 50',
      'versions_per_doc': '3 versions, entre 2 et 5',
      'qa_rounds': '2 rounds, entre 1 et 4',
      'hours_per_qa': '8 heures, entre 4 et 15',
      'contracts_to_track': '50 contrats, entre 20 et 100',
      'setup_hours': '40h, entre 20 et 80',
      'reuse_frequency': '60%, entre 30 et 80%',
      'from_scratch': '25%, entre 10 et 40%'
    };
    
    return examples[questionId] || null;
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

    // Vérification de cohérence pour les réponses illisibles ou incohérentes
    if (question.questionType === 'number') {
      const hasIncoherentChars = /[àæøœç:;]{2,}|[^\w\s€$KkMm.,\-àé]+/.test(cleanAnswer);
      const hasRandomSymbols = /[:;]{2,}|[àà]{2,}/.test(cleanAnswer);
      
      if (hasIncoherentChars || hasRandomSymbols) {
        return { error: `🔴 **Réponse illisible "${cleanAnswer}" - Pouvez-vous reformuler ?**\n\n${this.formatQuestion(question, 0, 0).replace(/\*\*Question.*?\*\*/, '**Question**')}` };
      }
    }
    
    // Validation par type de question
    if (question.questionType === 'number') {
      // Fonction pour convertir les abréviations (K, M, €) en nombres
      const parseValueWithSuffix = (value: string): number => {
        const cleanValue = value.replace(/[€$,]/g, '').trim();
        const match = cleanValue.match(/(\d+(?:\.\d+)?)\s*([KkMm])?/);
        if (!match) return NaN;
        
        const baseValue = parseFloat(match[1]);
        const suffix = match[2]?.toUpperCase();
        
        if (suffix === 'K') return baseValue * 1000;
        if (suffix === 'M') return baseValue * 1000000;
        return baseValue;
      };

      // Détecter les plages de valeurs avec support des abréviations
      const rangePatterns = [
        /entre\s+([0-9.,KkMm€$\s]+)\s+et\s+([0-9.,KkMm€$\s]+)/i,
        /de\s+([0-9.,KkMm€$\s]+)\s+[àa]\s+([0-9.,KkMm€$\s]+)/i,
        /([0-9.,KkMm€$\s]+)\s*[-–]\s*([0-9.,KkMm€$\s]+)/i,
        /([0-9.,KkMm€$\s]+)\s*[,;]\s*([0-9.,KkMm€$\s]+)/i
      ];
      
      for (const pattern of rangePatterns) {
        const rangeMatch = cleanAnswer.match(pattern);
        if (rangeMatch) {
          const minValue = parseValueWithSuffix(rangeMatch[1]);
          const maxValue = parseValueWithSuffix(rangeMatch[2]);
          
          if (!isNaN(minValue) && !isNaN(maxValue) && minValue <= maxValue) {
            return { 
              value: { 
                type: 'range', 
                min: minValue, 
                max: maxValue,
                average: (minValue + maxValue) / 2
              } 
            };
          }
        }
      }
      
      // Essayer d'extraire un nombre unique avec support des abréviations
      let numValue = parseValueWithSuffix(cleanAnswer);
      
      // Si parsing échoue, essayer d'extraire juste le nombre
      if (isNaN(numValue)) {
        numValue = parseFloat(cleanAnswer.replace(/[^0-9.]/g, ''));
      }
      
      if (isNaN(numValue)) {
        return { error: "❌ Veuillez entrer un nombre valide ou une plage (ex: 'entre 3 et 7')." };
      }

      // Validation de cohérence contextuelle
      const coherenceCheck = this.checkAnswerCoherence(question.id, numValue, cleanAnswer);
      if (coherenceCheck.needsConfirmation) {
        return { error: coherenceCheck.message };
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

  // Vérifier la cohérence contextuelle des réponses
  private checkAnswerCoherence(questionId: string, value: number, originalAnswer: string): { needsConfirmation: boolean; message?: string } {
    const coherenceRules: Record<string, { min?: number; max?: number; unit?: string }> = {
      'tenders_per_year': { min: 1, max: 2000 },
      'avg_tender_value': { min: 1000, max: 1000000000 },
      'response_weeks': { min: 0.1, max: 104 }, // 2 ans max
      'docs_per_tender': { min: 1, max: 500 },
      'pages_per_doc': { min: 1, max: 2000 },
      'versions_per_doc': { min: 1, max: 50 },
      'qa_rounds': { min: 0, max: 50 },
      'hours_per_qa': { min: 0.5, max: 200 },
      'contracts_to_track': { min: 0, max: 10000 },
      'setup_hours': { min: 1, max: 1000 },
      'win_rate': { min: 0, max: 100 }
    };

    const rule = coherenceRules[questionId];
    if (!rule) return { needsConfirmation: false };

    if ((rule.min !== undefined && value < rule.min) || (rule.max !== undefined && value > rule.max)) {
      return {
        needsConfirmation: true,
        message: `🟡 **Valeur "${originalAnswer}" inhabituelle - Confirmez-vous cette réponse ?**`
      };
    }

    return { needsConfirmation: false };
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