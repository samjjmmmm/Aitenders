import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { storage } from './storage';
import { hubspotService } from './hubspot-service';
import { tenderTimeCalculator } from './tender-time-calculator';
import { advancedTenderCalculator } from './advanced-tender-calculator';

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
  async startSession(sessionId: string): Promise<string> {
    const session: SimulatorSession = {
      sessionId,
      currentQuestionIndex: 0,
      responses: [],
      startTime: new Date(),
      completed: false
    };
    
    this.sessions.set(sessionId, session);
    
    // Sauvegarder en base de données
    try {
      await storage.createSimulatorSession({
        sessionId,
        responses: [],
        completed: false
      });
    } catch (error) {
      console.error('Error saving simulator session to database:', error);
    }
    
    const firstQuestion = this.config.questions[0];
    if (!firstQuestion) {
      return "❌ Aucune question disponible dans le simulateur.";
    }

    return this.formatQuestion(firstQuestion, 1, this.config.questions.length);
  }

  // Redémarrer le simulateur (effacer la session et recommencer)
  async restartSession(sessionId: string): Promise<string> {
    // Effacer la session existante
    this.sessions.delete(sessionId);
    
    // Effacer en base de données
    try {
      await storage.deleteSimulatorSession(sessionId);
    } catch (error) {
      console.error('Error deleting simulator session from database:', error);
    }
    
    console.log(`Simulator session ${sessionId} restarted`);
    
    // Redémarrer une nouvelle session
    return await this.startSession(sessionId);
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
  async processAnswer(sessionId: string, answer: string): Promise<{ nextQuestion?: string; completed?: boolean; message?: string; error?: string }> {
    const session = this.sessions.get(sessionId);
    if (!session || session.completed) {
      return { error: "❌ Session non trouvée ou déjà terminée." };
    }

    const currentQuestion = this.config.questions[session.currentQuestionIndex];
    if (!currentQuestion) {
      return { error: "❌ Question non trouvée." };
    }

    console.log(`Processing question ${session.currentQuestionIndex + 1}/${this.config.questions.length}: ${currentQuestion.text}`);
    console.log(`User answer: ${answer}`);

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
    console.log(`Response saved for question ${currentQuestion.id}:`, response);
    
    // Sauvegarder les réponses en base de données
    try {
      await storage.updateSimulatorSession(sessionId, {
        responses: session.responses
      });
    } catch (error) {
      console.error('Error updating simulator session in database:', error);
    }
    
    session.currentQuestionIndex++;

    // Vérifier si c'est la dernière question
    if (session.currentQuestionIndex >= this.config.questions.length) {
      session.completed = true;
      
      // Marquer comme terminé en base
      try {
        await storage.updateSimulatorSession(sessionId, {
          completed: true,
          completedAt: new Date()
        });
      } catch (error) {
        console.error('Error marking simulator session as completed:', error);
      }
      
      console.log(`Simulator completed! Total questions answered: ${session.responses.length}`);
      return { 
        completed: true, 
        message: this.getCompletionMessage(sessionId) 
      };
    }

    // Passer à la question suivante
    const nextQuestion = this.config.questions[session.currentQuestionIndex];
    console.log(`Moving to next question ${session.currentQuestionIndex + 1}/${this.config.questions.length}`);
    
    return { 
      nextQuestion: `✅ Réponse enregistrée ! (${session.currentQuestionIndex}/${this.config.questions.length})\n\n${this.formatQuestion(nextQuestion, session.currentQuestionIndex + 1, this.config.questions.length)}` 
    };
  }

  // Valider et convertir une réponse
  private validateAndConvertAnswer(question: SimulatorQuestion, answer: string): {
    value?: string | number | boolean;
    numericValue?: number;
    error?: string;
  } {
    const cleanAnswer = answer.trim();
    console.log(`[VALIDATION DEBUG] Question type: ${question.type}, Answer: "${cleanAnswer}"`);

    // Pour les questions optionnelles, permettre de passer avec "passer", "skip", etc.
    if (!question.required) {
      const skipAnswers = ['passer', 'skip', 'suivant', 'next', '-', ''];
      if (skipAnswers.includes(cleanAnswer.toLowerCase())) {
        console.log(`[VALIDATION DEBUG] Skipping optional question`);
        return { value: undefined, numericValue: 0 };
      }
    }

    console.log(`[VALIDATION DEBUG] Processing question type: ${question.type}`);
    switch (question.type) {
      case 'select':
        // Gestion des réponses "je ne sais pas" ou équivalent
        const unknownAnswers = ['je ne sais pas', 'aucune idee', 'aucune idée', 'je sais pas', 'sais pas', 'pas sur', 'pas sûr', 'don\'t know', 'no idea', 'not sure', 'pas certain', 'incertain'];
        // Normalize both the answer and patterns to handle accents
        const normalizeTextSelect = (text: string) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const normalizedAnswerSelect = normalizeTextSelect(cleanAnswer);
        if (unknownAnswers.some(phrase => normalizedAnswerSelect.includes(normalizeTextSelect(phrase)))) {
          console.log(`User doesn't know select answer, asking for estimation`);
          return { error: `💡 **Nous comprenons que vous n'êtes pas certain.**\n\nPouvez-vous donner une **estimation approximative** ?\n\nMême une estimation vous aidera à obtenir un calcul ROI plus précis.\n\n${this.formatQuestion(question, 0, 0).replace(/📊.*?Obligatoire\*\*\n\n/, '')}` };
        }

        // Vérification directe d'abord
        if (question.options?.includes(cleanAnswer)) {
          const numericValue = question.mapping?.[cleanAnswer];
          return { value: cleanAnswer, numericValue };
        }

        // Si pas de correspondance exacte, essayer de mapper la réponse
        const mappedOption = this.mapAnswerToOption(cleanAnswer, question);
        if (mappedOption) {
          const numericValue = question.mapping?.[mappedOption];
          return { value: mappedOption, numericValue };
        }

        const optionalNote = !question.required ? ' (ou "passer" pour ignorer)' : '';
        return { error: `Veuillez choisir une option parmi: ${question.options?.join(', ')}${optionalNote}\n\n💡 Si vous ne savez pas, vous pouvez dire "je ne sais pas" et nous utiliserons une valeur par défaut.` };

      case 'number':
        console.log(`[DEBUG] Processing numeric answer: "${cleanAnswer}"`);
        
        // Try to extract time values and convert to hours first
        const timeValue = this.parseTimeToHours(cleanAnswer);
        console.log(`[DEBUG] parseTimeToHours result: ${timeValue}`);
        if (timeValue !== null) {
          if (question.min !== undefined && timeValue < question.min) {
            return { error: `La valeur doit être supérieure ou égale à ${question.min} heures.` };
          }
          if (question.max !== undefined && timeValue > question.max) {
            return { error: `La valeur doit être inférieure ou égale à ${question.max} heures.` };
          }
          return { value: timeValue, numericValue: timeValue };
        }

        // Try to parse as regular number
        const num = parseFloat(cleanAnswer);
        console.log(`[DEBUG] parseFloat result: ${num} (isNaN: ${isNaN(num)})`);
        if (!isNaN(num)) {
          if (question.min !== undefined && num < question.min) {
            return { error: `La valeur doit être supérieure ou égale à ${question.min}.` };
          }
          if (question.max !== undefined && num > question.max) {
            return { error: `La valeur doit être inférieure ou égale à ${question.max}.` };
          }
          return { value: num, numericValue: num };
        }

        // Gestion des réponses "je ne sais pas" (après avoir essayé de parser)
        const unknownNumAnswers = ['je ne sais pas', 'aucune idee', 'aucune idée', 'je sais pas', 'sais pas', 'pas sur', 'pas sûr', 'pas certain', 'incertain', 'don\'t know', 'no idea', 'not sure'];
        console.log(`Checking numeric answer "${cleanAnswer}" against unknown patterns:`, unknownNumAnswers);
        // Normalize both the answer and patterns to handle accents
        const normalizeText = (text: string) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const normalizedAnswer = normalizeText(cleanAnswer);
        console.log(`Normalized answer: "${normalizedAnswer}"`);
        const hasUnknownPattern = unknownNumAnswers.some(phrase => {
          const normalizedPhrase = normalizeText(phrase);
          const match = normalizedAnswer.includes(normalizedPhrase);
          console.log(`  Testing "${phrase}" (normalized: "${normalizedPhrase}") -> ${match}`);
          return match;
        });
        console.log(`Unknown pattern detected: ${hasUnknownPattern}`);
        if (hasUnknownPattern) {
          console.log(`User doesn't know numeric answer, asking for estimation`);
          return { error: `💡 **Nous comprenons que vous n'êtes pas certain.**\n\nPouvez-vous donner une **estimation approximative** ?\n\nMême une estimation vous aidera à obtenir un calcul ROI plus précis.\n\n${this.formatQuestion(question, 0, 0).replace(/📊.*?Obligatoire\*\*\n\n/, '')}` };
        }

        // Si rien ne fonctionne, retourner l'erreur
        const numOptionalNote = !question.required ? ' (ou "passer" pour ignorer)' : '';
        return { error: `Veuillez saisir un nombre valide ou une durée (ex: "6 mois", "200h")${numOptionalNote}.\n\n💡 Si vous ne savez pas, vous pouvez dire "je ne sais pas".` };

      case 'range':
        console.log(`[DEBUG] Processing range answer: "${cleanAnswer}"`);
        
        // Try to extract time values and convert to hours for range questions too
        const rangeTimeValue = this.parseTimeToHours(cleanAnswer);
        console.log(`[DEBUG] parseTimeToHours result for range: ${rangeTimeValue}`);
        if (rangeTimeValue !== null) {
          if (question.min !== undefined && rangeTimeValue < question.min) {
            return { error: `La valeur doit être entre ${question.min} et ${question.max} heures.` };
          }
          if (question.max !== undefined && rangeTimeValue > question.max) {
            return { error: `La valeur doit être entre ${question.min} et ${question.max} heures.` };
          }
          return { value: rangeTimeValue, numericValue: rangeTimeValue };
        }

        // Try to parse as regular number
        const rangeNum = parseFloat(cleanAnswer);
        console.log(`[DEBUG] parseFloat result for range: ${rangeNum} (isNaN: ${isNaN(rangeNum)})`);
        if (!isNaN(rangeNum)) {
          if (question.min !== undefined && rangeNum < question.min) {
            return { error: `La valeur doit être entre ${question.min} et ${question.max}.` };
          }
          if (question.max !== undefined && rangeNum > question.max) {
            return { error: `La valeur doit être entre ${question.min} et ${question.max}.` };
          }
          return { value: rangeNum, numericValue: rangeNum };
        }

        // Gestion des réponses "je ne sais pas" pour les questions de type range
        const unknownRangeAnswers = ['je ne sais pas', 'aucune idee', 'aucune idée', 'je sais pas', 'sais pas', 'pas sur', 'pas sûr', 'pas certain', 'incertain', 'don\'t know', 'no idea', 'not sure'];
        console.log(`Checking range answer "${cleanAnswer}" against unknown patterns:`, unknownRangeAnswers);
        // Normalize both the answer and patterns to handle accents
        const normalizeTextRange = (text: string) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const normalizedRangeAnswer = normalizeTextRange(cleanAnswer);
        console.log(`Normalized range answer: "${normalizedRangeAnswer}"`);
        const hasUnknownRangePattern = unknownRangeAnswers.some(phrase => {
          const normalizedPhrase = normalizeTextRange(phrase);
          const match = normalizedRangeAnswer.includes(normalizedPhrase);
          console.log(`  Testing "${phrase}" (normalized: "${normalizedPhrase}") -> ${match}`);
          return match;
        });
        console.log(`Unknown range pattern detected: ${hasUnknownRangePattern}`);
        if (hasUnknownRangePattern) {
          console.log(`User doesn't know range answer, asking for estimation`);
          return { error: `💡 **Nous comprenons que vous n'êtes pas certain.**\n\nPouvez-vous donner une **estimation approximative** ?\n\nMême une estimation vous aidera à obtenir un calcul ROI plus précis.\n\n${this.formatQuestion(question, 0, 0).replace(/📊.*?Obligatoire\*\*\n\n/, '')}` };
        }

        // Si rien ne fonctionne, retourner l'erreur
        const rangeOptionalNote = !question.required ? ' (ou "passer" pour ignorer)' : '';
        return { error: `Veuillez saisir un nombre valide ou une durée (ex: "6 mois", "200h")${rangeOptionalNote}.\n\n💡 Si vous ne savez pas, vous pouvez dire "je ne sais pas".` };

      case 'boolean':
        const boolAnswer = cleanAnswer.toLowerCase();
        if (['oui', 'yes', 'true', '1'].includes(boolAnswer)) {
          return { value: true, numericValue: 1 };
        }
        if (['non', 'no', 'false', '0'].includes(boolAnswer)) {
          return { value: false, numericValue: 0 };
        }
        const boolOptionalNote = !question.required ? ' (ou "passer" pour ignorer)' : '';
        return { error: `Veuillez répondre par "oui" ou "non"${boolOptionalNote}.` };

      default:
        return { error: 'Type de question non supporté.' };
    }
  }

  // Parse time expressions and convert to hours
  private parseTimeToHours(input: string): number | null {
    const cleanInput = input.toLowerCase().trim();
    
    // Look for patterns like "6 mois", "3 semaines", "200 heures", etc.
    const patterns = [
      // Months patterns
      { regex: /(\d+(?:\.\d+)?)\s*mois?/i, multiplier: 160 }, // ~160h per month (4 weeks * 40h)
      { regex: /(\d+(?:\.\d+)?)\s*m$/i, multiplier: 160 }, // "6m" = 6 months
      
      // Weeks patterns  
      { regex: /(\d+(?:\.\d+)?)\s*semaines?/i, multiplier: 40 }, // 40h per week
      { regex: /(\d+(?:\.\d+)?)\s*sem/i, multiplier: 40 },
      { regex: /(\d+(?:\.\d+)?)\s*w/i, multiplier: 40 }, // "2w" = 2 weeks
      
      // Days patterns
      { regex: /(\d+(?:\.\d+)?)\s*jours?/i, multiplier: 8 }, // 8h per day
      { regex: /(\d+(?:\.\d+)?)\s*j$/i, multiplier: 8 }, // "15j" = 15 days
      { regex: /(\d+(?:\.\d+)?)\s*d$/i, multiplier: 8 }, // "15d" = 15 days
      
      // Hours patterns
      { regex: /(\d+(?:\.\d+)?)\s*heures?/i, multiplier: 1 },
      { regex: /(\d+(?:\.\d+)?)\s*h$/i, multiplier: 1 }, // "200h"
      { regex: /(\d+(?:\.\d+)?)\s*hrs?$/i, multiplier: 1 },
    ];

    for (const pattern of patterns) {
      const match = cleanInput.match(pattern.regex);
      if (match) {
        const value = parseFloat(match[1]);
        if (!isNaN(value)) {
          return value * pattern.multiplier;
        }
      }
    }

    return null;
  }

  // Formater une question pour l'affichage
  private formatQuestion(question: SimulatorQuestion, questionNumber: number, totalQuestions: number): string {
    const requiredLabel = question.required ? '**Obligatoire**' : '*Optionnelle*';
    let formatted = `📊 **Question ${questionNumber}/${totalQuestions}** - ${requiredLabel}\n\n`;
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

    if (!question.required) {
      formatted += `\n💡 *Cette question est optionnelle. Vous pouvez taper "passer" pour l'ignorer.*\n`;
    }

    return formatted;
  }

  // Message de fin de simulateur avec calculs avancés
  private getCompletionMessage(sessionId: string): string {
    const session = this.sessions.get(sessionId);
    if (!session || session.responses.length === 0) {
      return `🎉 **Simulateur terminé !**\n\n**Veuillez fournir vos informations pour recevoir votre rapport détaillé !**`;
    }

    // Extraire les réponses
    const responses = session.responses;
    const averageTenderValue = responses.find(r => r.questionId === '1')?.numericValue || 0;
    const tendersPerMonth = responses.find(r => r.questionId === '2')?.numericValue || 0;
    const hoursPerTender = responses.find(r => r.questionId === '3')?.numericValue || 0;
    const teamSize = responses.find(r => r.questionId === '4')?.numericValue || 1;
    const currentSuccessRate = responses.find(r => r.questionId === '5')?.numericValue || 0;
    const hasCurrentTools = responses.find(r => r.questionId === '6')?.numericValue === 1;

    try {
      // Utiliser le calculateur avancé de perte de temps intégré
      const metrics = tenderTimeCalculator.calculateMetrics(
        averageTenderValue,
        tendersPerMonth,
        hoursPerTender,
        teamSize,
        currentSuccessRate,
        hasCurrentTools
      );

      // Générer le rapport détaillé avec les nouvelles métriques
      const basicReport = tenderTimeCalculator.generateAnalysisReport(metrics, 'fr');
      
      // Ajouter une option pour un rapport plus détaillé
      return `${basicReport}

🎉 **Veuillez fournir vos informations pour recevoir votre rapport détaillé !**

**🔬 ANALYSE AVANCÉE DISPONIBLE**
Pour une analyse encore plus poussée avec 15+ questions détaillées et recommandations personnalisées par industrie, tapez "**analyse avancée**"`;
    } catch (error) {
      console.error('Error calculating advanced metrics:', error);
      return `🎉 **Simulateur terminé !**\n\n**📋 Vos réponses ont été enregistrées avec succès !**\n\n**Veuillez fournir vos informations pour recevoir votre rapport ROI détaillé !**`;
    }
  }

  // Traiter les informations utilisateur et générer le rapport
  async processUserInfo(sessionId: string, userInfo: { name: string; email: string; company: string }): Promise<{
    success: boolean;
    message: string;
    reportData?: any;
  }> {
    const session = this.sessions.get(sessionId);
    if (!session || !session.completed) {
      return { success: false, message: "Session non trouvée ou non terminée." };
    }

    session.userInfo = userInfo;
    
    // Calculer les résultats
    const results = this.calculateResults(session);
    
    let hubspotContactId: string | null = null;
    let hubspotDealId: string | null = null;

    try {
      // Créer le contact dans HubSpot avec toutes les réponses du simulateur
      const hubspotContactData = {
        email: userInfo.email,
        firstName: userInfo.name.split(' ')[0],
        lastName: userInfo.name.split(' ').slice(1).join(' ') || '',
        company: userInfo.company,
        leadSource: 'Simulateur ROI',
        customProperties: {
          simulator_completed: 'true',
          simulator_responses: JSON.stringify(session.responses),
          simulator_results: JSON.stringify(results),
          roi_calculated: results.find(r => r.id === '6')?.value.toString() || '0',
          project_value: this.extractProjectValue(session.responses),
          completion_date: new Date().toISOString()
        }
      };

      // Créer ou mettre à jour le contact
      const hubspotContact = await hubspotService.createOrUpdateContact(hubspotContactData);
      hubspotContactId = hubspotContact.id;

      // Créer un deal pour ce simulateur
      const dealValue = results.find(r => r.id === '5')?.value || 150000; // Revenue additionnel ou valeur par défaut
      const deal = await hubspotService.createDeal(
        hubspotContactData, 
        `Simulateur ROI - ${userInfo.company}`, 
        dealValue
      );
      hubspotDealId = deal.id;

      console.log(`HubSpot integration successful: Contact ${hubspotContactId}, Deal ${hubspotDealId}`);
    } catch (error) {
      console.error('Error creating HubSpot contact/deal:', error);
    }

    // Sauvegarder les informations utilisateur et les résultats en base
    try {
      await storage.updateSimulatorSession(sessionId, {
        userName: userInfo.name,
        userEmail: userInfo.email,
        userCompany: userInfo.company,
        hubspotContactId,
        hubspotDealId,
        calculatedResults: results
      });
    } catch (error) {
      console.error('Error updating simulator session with user info:', error);
    }
    
    return {
      success: true,
      message: `✅ Rapport généré avec succès ! Vous recevrez bientôt vos résultats par email à ${userInfo.email}.`,
      reportData: {
        session,
        results,
        userInfo,
        hubspotContactId,
        hubspotDealId
      }
    };
  }

  // Extraire la valeur du projet depuis les réponses
  private extractProjectValue(responses: SimulatorResponse[]): string {
    // Chercher la première question (montant des projets)
    const firstResponse = responses.find(r => r.questionId === '1');
    if (firstResponse && typeof firstResponse.answer === 'string') {
      return firstResponse.answer;
    }
    return 'Non spécifié';
  }

  // Mapper une réponse utilisateur à une option valide
  private mapAnswerToOption(answer: string, question: SimulatorQuestion): string | null {
    const answerLower = answer.toLowerCase();
    
    // Pour la première question sur les montants
    if (question.id === "1") {
      // Extraire les nombres de la réponse
      const millions = answerLower.match(/(\d+(?:\.\d+)?)\s*(?:millions?|m)/);
      const milliers = answerLower.match(/(\d+(?:\.\d+)?)\s*(?:k|milliers?)/);
      
      if (millions) {
        const value = parseFloat(millions[1]) * 1000000;
        if (value < 100000) return "< 100K€";
        if (value <= 500000) return "100K-500K€";
        if (value <= 2000000) return "500K-2M€";
        if (value <= 10000000) return "2M-10M€";
        return "> 10M€";
      }
      
      if (milliers) {
        const value = parseFloat(milliers[1]) * 1000;
        if (value < 100000) return "< 100K€";
        if (value <= 500000) return "100K-500K€";
        if (value <= 2000000) return "500K-2M€";
        if (value <= 10000000) return "2M-10M€";
        return "> 10M€";
      }
      
      // Essayer de parser directement comme nombre
      const num = parseFloat(answerLower.replace(/[^\d.]/g, ''));
      if (!isNaN(num)) {
        if (num < 100000) return "< 100K€";
        if (num <= 500000) return "100K-500K€";
        if (num <= 2000000) return "500K-2M€";
        if (num <= 10000000) return "2M-10M€";
        return "> 10M€";
      }
    }
    
    // Pour les autres questions avec des options textuelles
    if (question.options) {
      for (const option of question.options) {
        if (option.toLowerCase().includes(answerLower) || answerLower.includes(option.toLowerCase())) {
          return option;
        }
      }
    }
    
    return null;
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