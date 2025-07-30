/**
 * Advanced Tender Calculator - Full LLM Integration
 * Ported from Python to TypeScript for our Node.js application
 */

interface QuestionConfig {
  id: string;
  question: string;
  questionType: 'number' | 'text' | 'choice' | 'multiple_choice';
  validationRules: Record<string, any>;
  helpText: string;
  followUpQuestions: string[];
  category: string;
}

interface CalculationResult {
  currentHours: number;
  optimizedHours: number;
  hoursSaved: number;
  savingsPercentage: number;
  monetizedValue: number;
  breakdown: Record<string, {
    before: number;
    after: number;
    savingsPct: number;
  }>;
  recommendations: string[];
  exportData: Record<string, any>;
}

export class AdvancedTenderCalculator {
  private questions: QuestionConfig[];
  private responses: Record<string, any> = {};

  constructor() {
    this.questions = this.initializeQuestions();
  }

  private initializeQuestions(): QuestionConfig[] {
    return [
      // Tender Profile (merged into one comprehensive question)
      {
        id: 'tender_profile_combined',
        question: 'Décrivez votre profil d\'appels d\'offres : nombre par an, valeur moyenne en euros, et durée de préparation en semaines',
        questionType: 'text',
        validationRules: { minLength: 10, maxLength: 500 },
        helpText: 'Donnez-nous une vue d\'ensemble de votre activité appels d\'offres',
        followUpQuestions: [
          'Ces chiffres varient-ils selon les secteurs ou types de clients ?',
          'Votre volume d\'affaires augmente-t-il d\'année en année ?'
        ],
        category: 'tender_profile'
      },

      // Document Complexity (merged)
      {
        id: 'document_complexity_combined',
        question: 'Décrivez la complexité documentaire : nombre de documents par appel d\'offres, pages moyennes par document, et versions créées avant soumission',
        questionType: 'text',
        validationRules: { minLength: 10, maxLength: 500 },
        helpText: 'Vue d\'ensemble de votre charge documentaire et processus de révision',
        followUpQuestions: [
          'Quelle proportion de documents est standardisée vs sur-mesure ?',
          'Combien de personnes interviennent dans le processus de révision ?'
        ],
        category: 'document_complexity'
      },

      // Q&A Management (merged)
      {
        id: 'qa_management_combined',
        question: 'Décrivez la gestion Q&A : nombre de cycles de questions/réponses par appel d\'offres et heures passées par cycle',
        questionType: 'text',
        validationRules: { minLength: 10, maxLength: 500 },
        helpText: 'Rounds de clarification, modifications client, temps de coordination',
        followUpQuestions: [
          'Ces demandes viennent-elles plus du client ou des équipes internes ?',
          'Combien de personnes interviennent typiquement dans chaque réponse ?'
        ],
        category: 'qa_management'
      },

      // Contract Administration (merged)
      {
        id: 'contract_admin_combined',
        question: 'Décrivez l\'administration contrats : nombre de contrats gérés par an et heures de setup initial par contrat',
        questionType: 'text',
        validationRules: { minLength: 10, maxLength: 500 },
        helpText: 'Gestion active, suivi de conformité, mise en place initiale',
        followUpQuestions: [
          'Incluez-vous le temps de révision juridique ?',
          'Comment gérez-vous les renouvellements de contrats ?'
        ],
        category: 'contract_admin'
      },

      // Knowledge Management (merged)
      {
        id: 'knowledge_management_combined',
        question: 'Décrivez la gestion des connaissances : fréquence de réutilisation de contenu passé et pourcentage d\'appels d\'offres créés entièrement from scratch',
        questionType: 'text',
        validationRules: { minLength: 10, maxLength: 500 },
        helpText: 'Réutilisation de templates, réponses passées, standardisation vs création sur-mesure',
        followUpQuestions: [
          'Qu\'est-ce qui vous empêche de réutiliser plus souvent ?',
          'Avez-vous un dépôt centralisé de réponses passées ?'
        ],
        category: 'knowledge_management'
      },

      // Business Profile (merged)
      {
        id: 'business_profile_combined',
        question: 'Décrivez votre profil d\'entreprise : secteur d\'activité, chiffre d\'affaires annuel en euros, taux de réussite appels d\'offres en %, et 3 priorités business',
        questionType: 'text',
        validationRules: { minLength: 10, maxLength: 500 },
        helpText: 'Vue d\'ensemble de votre organisation et objectifs stratégiques',
        followUpQuestions: [
          'Travaillez-vous dans plusieurs secteurs d\'activité ?',
          'Quelles sont vos exigences de conformité spécifiques ?'
        ],
        category: 'business_profile'
      }
    ];
  }

  public getQuestions(): QuestionConfig[] {
    return this.questions;
  }

  public getQuestionsByCategory(category: string): QuestionConfig[] {
    return this.questions.filter(q => q.category === category);
  }

  public getQuestionById(questionId: string): QuestionConfig | undefined {
    return this.questions.find(q => q.id === questionId);
  }

  public validateResponse(questionId: string, response: any): { valid: boolean; error?: string; parsedValue?: any } {
    const question = this.getQuestionById(questionId);
    if (!question) {
      return { valid: false, error: 'Question not found' };
    }

    const rules = question.validationRules;

    // Number validation
    if (question.questionType === 'number') {
      try {
        const value = parseFloat(response);
        if (isNaN(value)) {
          return { valid: false, error: 'Must be a valid number' };
        }
        if (rules.min !== undefined && value < rules.min) {
          return { valid: false, error: `Value must be at least ${rules.min}` };
        }
        if (rules.max !== undefined && value > rules.max) {
          return { valid: false, error: `Value must be at most ${rules.max}` };
        }
        return { valid: true, parsedValue: value };
      } catch {
        return { valid: false, error: 'Must be a valid number' };
      }
    }

    // Choice validation
    else if (question.questionType === 'choice') {
      if (!rules.choices?.includes(response)) {
        return { valid: false, error: `Must be one of: ${rules.choices?.join(', ')}` };
      }
      return { valid: true, parsedValue: response };
    }

    // Multiple choice validation
    else if (question.questionType === 'multiple_choice') {
      const responseArray = Array.isArray(response) ? response : [response];
      const validChoices = rules.choices || [];
      const invalidChoices = responseArray.filter(choice => !validChoices.includes(choice));
      
      if (invalidChoices.length > 0) {
        return { valid: false, error: `Invalid choices: ${invalidChoices.join(', ')}` };
      }
      
      const maxSelections = rules.maxSelections || validChoices.length;
      if (responseArray.length > maxSelections) {
        return { valid: false, error: `Maximum ${maxSelections} selections allowed` };
      }
      
      return { valid: true, parsedValue: responseArray };
    }

    // Text validation
    else if (question.questionType === 'text') {
      if (rules.maxLength && String(response).length > rules.maxLength) {
        return { valid: false, error: `Maximum ${rules.maxLength} characters allowed` };
      }
      return { valid: true, parsedValue: String(response) };
    }

    return { valid: true, parsedValue: response };
  }

  public addResponse(questionId: string, response: any): { success: boolean; error?: string } {
    // Traitement spécial pour la question combinée du profil d'appels d'offres
    if (questionId === 'tender_profile_combined') {
      const parsed = this.parseTenderProfile(response as string);
      if (parsed) {
        // Stocker les valeurs parsées séparément pour les calculs
        this.responses['tenders_per_year'] = parsed.tendersPerYear;
        this.responses['avg_tender_value'] = parsed.avgTenderValue;
        this.responses['response_weeks'] = parsed.responseWeeks;
      }
      this.responses[questionId] = response; // Stocker aussi la réponse originale
    } else {
      // Accepter toutes les réponses sans validation stricte - permettre les estimations
      this.responses[questionId] = response;
    }
    return { success: true };
  }

  // Parser la réponse combinée du profil d'appels d'offres
  private parseTenderProfile(response: string): { tendersPerYear: number; avgTenderValue: number; responseWeeks: number } | null {
    try {
      const text = response.toLowerCase();
      
      // Extraire le nombre d'appels d'offres
      const tendersMatch = text.match(/(\d+)\s*appels?\s*d['']?offres?/);
      const tendersPerYear = tendersMatch ? parseInt(tendersMatch[1]) : 150;
      
      // Extraire la valeur moyenne (chercher des montants en K, M, ou €)
      const valueMatch = text.match(/(\d+(?:[.,]\d+)?)\s*([km]?)€?\s*(?:en\s+moyenne|moyenne)/i) || 
                        text.match(/valeur?\s+(?:moyenne\s+)?(\d+(?:[.,]\d+)?)\s*([km]?)€?/i) ||
                        text.match(/(\d+(?:[.,]\d+)?)\s*([km]?)€/i);
      
      let avgTenderValue = 500000; // Valeur par défaut
      if (valueMatch) {
        const baseValue = parseFloat(valueMatch[1].replace(',', '.'));
        const multiplier = valueMatch[2]?.toLowerCase();
        if (multiplier === 'k') {
          avgTenderValue = baseValue * 1000;
        } else if (multiplier === 'm') {
          avgTenderValue = baseValue * 1000000;
        } else {
          avgTenderValue = baseValue;
        }
      }
      
      // Extraire la durée de préparation
      const weeksMatch = text.match(/(\d+(?:[.,]\d+)?)\s*(?:à\s*)?(\d+(?:[.,]\d+)?)?\s*semaines?/i) ||
                        text.match(/préparation?\s+(\d+(?:[.,]\d+)?)\s*(?:à\s*)?(\d+(?:[.,]\d+)?)?\s*semaines?/i) ||
                        text.match(/durée?\s+(\d+(?:[.,]\d+)?)\s*(?:à\s*)?(\d+(?:[.,]\d+)?)?\s*semaines?/i);
      
      let responseWeeks = 4; // Valeur par défaut
      if (weeksMatch) {
        const minWeeks = parseFloat(weeksMatch[1].replace(',', '.'));
        const maxWeeks = weeksMatch[2] ? parseFloat(weeksMatch[2].replace(',', '.')) : minWeeks;
        responseWeeks = (minWeeks + maxWeeks) / 2;
      }
      
      return { tendersPerYear, avgTenderValue, responseWeeks };
    } catch (error) {
      return null;
    }
  }

  public calculateEfficiency(): CalculationResult {
    // Convert reuse frequency to factor
    const reuseMapping: Record<string, number> = {
      'Never': 0,
      'Rarely': 0.25,
      'Sometimes': 0.5,
      'Often': 0.75,
      'Always': 0.9
    };

    // Helper function pour extraire la valeur (gère les plages)
    const getValue = (key: string, defaultValue: number = 0) => {
      const response = this.responses[key];
      if (!response) return defaultValue;
      if (typeof response === 'object' && response.type === 'range') {
        return response.average; // Utilise la moyenne pour le calcul principal
      }
      return response;
    };

    // Parse combined tender profile question
    const tenderProfile = this.parseTenderProfile(this.responses['tender_profile_combined'] || '');
    const tendersPerYear = tenderProfile.tendersPerYear || 0;
    const avgTenderValue = tenderProfile.avgTenderValue || 0;
    const responseWeeks = tenderProfile.responseWeeks || 0;

    // Parse combined document complexity question
    const docComplexity = this.parseDocumentComplexity(this.responses['document_complexity_combined'] || '');
    const docsPerTender = docComplexity.docsPerTender || 0;
    const pagesPerDoc = docComplexity.pagesPerDoc || 0;
    const versionsPerDoc = docComplexity.versionsPerDoc || 0;

    // Parse combined Q&A management question
    const qaManagement = this.parseQAManagement(this.responses['qa_management_combined'] || '');
    const qaRounds = qaManagement.qaRounds || 0;
    const qaHours = qaManagement.qaHours || 0;

    // Parse combined contract administration question
    const contractAdmin = this.parseContractAdmin(this.responses['contract_admin_combined'] || '');
    const contractsTracked = contractAdmin.contractsTracked || 0;
    const hoursPerContract = contractAdmin.hoursPerContract || 0;

    // Parse combined knowledge management question
    const knowledgeManagement = this.parseKnowledgeManagement(this.responses['knowledge_management_combined'] || '');
    const reuseFrequency = knowledgeManagement.reuseFrequency || 'Sometimes';
    const scratchTenders = knowledgeManagement.scratchTenders || 0;

    // Parse combined business profile question
    const businessProfile = this.parseBusinessProfile(this.responses['business_profile_combined'] || '');
    const winRate = businessProfile.winRate || 20;

    const reuseFactor = reuseMapping[reuseFrequency];

    // Calculate different efficiency categories
    
    // 1. Document preparation time
    const baseDocHours = docsPerTender * pagesPerDoc * 0.5; // 0.5 hours per page base
    const totalDocHours = baseDocHours * tendersPerYear;

    // 2. Q&A management time  
    const totalQaHours = qaRounds * qaHours * tendersPerYear;

    // 3. Document versioning overhead
    const versioningOverhead = versionsPerDoc * 0.5; // 0.5 hours per version
    const totalVersionHours = totalDocHours * versioningOverhead;

    // 4. Contract administration
    const contractHoursTotal = contractsTracked * hoursPerContract;

    // 5. Knowledge reuse inefficiency
    const reuseHoursPerTender = 15; // Base hours that could be saved with better reuse
    const reuseLossHours = scratchTenders * reuseHoursPerTender * (1 - reuseFactor);

    // Calculate breakdown with AItenders savings
    const breakdown = {
      document_prep: {
        before: totalDocHours,
        after: totalDocHours * 0.4, // 60% reduction
        savingsPct: 60
      },
      qa_management: {
        before: totalQaHours,
        after: totalQaHours * 0.4, // 60% reduction  
        savingsPct: 60
      },
      doc_versioning: {
        before: totalVersionHours,
        after: totalVersionHours * 0.4, // 60% reduction
        savingsPct: 60
      },
      contract_admin: {
        before: contractHoursTotal,
        after: contractHoursTotal * 0.5, // 50% reduction
        savingsPct: 50
      },
      knowledge_management: {
        before: reuseLossHours,
        after: reuseLossHours * 0.5, // 50% reduction
        savingsPct: 50
      }
    };

    // Calculate totals
    const currentHours = Object.values(breakdown).reduce((sum, cat) => sum + cat.before, 0);
    const optimizedHours = Object.values(breakdown).reduce((sum, cat) => sum + cat.after, 0);
    const hoursSaved = currentHours - optimizedHours;
    const savingsPercentage = currentHours > 0 ? (hoursSaved / currentHours) * 100 : 0;

    // Monetized value calculation
    const additionalTendersPossible = hoursSaved / (responseWeeks * 40);
    const potentialAdditionalRevenue = additionalTendersPossible * avgTenderValue * (winRate / 100);
    const monetizedValue = potentialAdditionalRevenue * 0.25; // Conservative estimate

    // Generate recommendations
    const recommendations = this.generateRecommendations();

    // Export data
    const exportData = {
      responses: this.responses,
      calculations: breakdown,
      summary: {
        currentHours,
        optimizedHours,
        hoursSaved,
        savingsPercentage,
        monetizedValue
      },
      timestamp: new Date().toISOString()
    };

    return {
      currentHours,
      optimizedHours,
      hoursSaved,
      savingsPercentage,
      monetizedValue,
      breakdown,
      recommendations,
      exportData
    };
  }

  // Calculer les estimations basse et haute pour les plages
  public calculateRangeEstimates(): { hasRanges: boolean; lowEstimate?: CalculationResult; highEstimate?: CalculationResult } {
    // Vérifier s'il y a des plages dans les réponses
    const hasRanges = Object.values(this.responses).some(
      response => typeof response === 'object' && response?.type === 'range'
    );

    if (!hasRanges) {
      return { hasRanges: false };
    }

    // Sauvegarder les réponses originales
    const originalResponses = { ...this.responses };

    try {
      // Calculer l'estimation basse
      this.adjustResponsesForEstimate('low');
      const lowEstimate = this.calculateEfficiency();

      // Calculer l'estimation haute
      this.adjustResponsesForEstimate('high');
      const highEstimate = this.calculateEfficiency();

      // Restaurer les réponses originales
      this.responses = originalResponses;

      return { hasRanges: true, lowEstimate, highEstimate };
    } catch (error) {
      // Restaurer les réponses en cas d'erreur
      this.responses = originalResponses;
      return { hasRanges: false };
    }
  }

  // Parser functions for combined questions
  private parseTenderProfile(response: string): { tendersPerYear: number; avgTenderValue: number; responseWeeks: number } {
    const numbers = this.extractNumbers(response);
    
    // Chercher des patterns spécifiques
    let tendersPerYear = 0;
    let avgTenderValue = 0;
    let responseWeeks = 0;

    // Pattern pour les appels d'offres par an
    const tenderMatches = response.match(/(\d+)\s*(?:appels?|tenders?|AO)/i);
    if (tenderMatches) tendersPerYear = parseInt(tenderMatches[1]);

    // Pattern pour les valeurs monétaires
    const valueMatches = response.match(/(\d+(?:\.\d+)?)\s*[Mm]€?/i);
    if (valueMatches) avgTenderValue = parseFloat(valueMatches[1]) * 1000000;

    // Pattern pour les semaines
    const weekMatches = response.match(/(\d+(?:-\d+)?)\s*semaines?/i);
    if (weekMatches) {
      const weekStr = weekMatches[1];
      if (weekStr.includes('-')) {
        const [min, max] = weekStr.split('-').map(Number);
        responseWeeks = (min + max) / 2;
      } else {
        responseWeeks = parseInt(weekStr);
      }
    }

    // Fallback avec les nombres extraits
    if (!tendersPerYear && numbers.length > 0) tendersPerYear = numbers[0];
    if (!avgTenderValue && numbers.length > 1) avgTenderValue = numbers[1] * (numbers[1] < 1000 ? 1000000 : 1);
    if (!responseWeeks && numbers.length > 2) responseWeeks = numbers[2];

    return { tendersPerYear, avgTenderValue, responseWeeks };
  }

  private parseDocumentComplexity(response: string): { docsPerTender: number; pagesPerDoc: number; versionsPerDoc: number } {
    const numbers = this.extractNumbers(response);
    
    let docsPerTender = 0;
    let pagesPerDoc = 0;
    let versionsPerDoc = 0;

    // Pattern pour les documents
    const docMatches = response.match(/(\d+)\s*(?:documents?|docs?)/i);
    if (docMatches) docsPerTender = parseInt(docMatches[1]);

    // Pattern pour les pages
    const pageMatches = response.match(/(\d+)\s*pages?/i);
    if (pageMatches) pagesPerDoc = parseInt(pageMatches[1]);

    // Pattern pour les versions
    const versionMatches = response.match(/(\d+)\s*(?:versions?|révisions?)/i);
    if (versionMatches) versionsPerDoc = parseInt(versionMatches[1]);

    // Fallback avec les nombres extraits
    if (!docsPerTender && numbers.length > 0) docsPerTender = numbers[0];
    if (!pagesPerDoc && numbers.length > 1) pagesPerDoc = numbers[1];
    if (!versionsPerDoc && numbers.length > 2) versionsPerDoc = numbers[2];

    return { docsPerTender, pagesPerDoc, versionsPerDoc };
  }

  private parseQAManagement(response: string): { qaRounds: number; qaHours: number } {
    const numbers = this.extractNumbers(response);
    
    let qaRounds = 0;
    let qaHours = 0;

    // Pattern pour les cycles/rounds
    const roundMatches = response.match(/(\d+)\s*(?:cycles?|rounds?|tours?)/i);
    if (roundMatches) qaRounds = parseInt(roundMatches[1]);

    // Pattern pour les heures
    const hourMatches = response.match(/(\d+)\s*(?:heures?|hours?|h\b)/i);
    if (hourMatches) qaHours = parseInt(hourMatches[1]);

    // Fallback avec les nombres extraits
    if (!qaRounds && numbers.length > 0) qaRounds = numbers[0];
    if (!qaHours && numbers.length > 1) qaHours = numbers[1];

    return { qaRounds, qaHours };
  }

  private parseContractAdmin(response: string): { contractsTracked: number; hoursPerContract: number } {
    const numbers = this.extractNumbers(response);
    
    let contractsTracked = 0;
    let hoursPerContract = 0;

    // Pattern pour les contrats
    const contractMatches = response.match(/(\d+)\s*(?:contrats?|contracts?)/i);
    if (contractMatches) contractsTracked = parseInt(contractMatches[1]);

    // Pattern pour les heures
    const hourMatches = response.match(/(\d+)\s*(?:heures?|hours?|h\b)/i);
    if (hourMatches) hoursPerContract = parseInt(hourMatches[1]);

    // Fallback avec les nombres extraits
    if (!contractsTracked && numbers.length > 0) contractsTracked = numbers[0];
    if (!hoursPerContract && numbers.length > 1) hoursPerContract = numbers[1];

    return { contractsTracked, hoursPerContract };
  }

  private parseKnowledgeManagement(response: string): { reuseFrequency: string; scratchTenders: number } {
    const numbers = this.extractNumbers(response);
    
    let reuseFrequency = 'Sometimes';
    let scratchTenders = 0;

    // Analyser la fréquence de réutilisation
    const lowReuse = /(?:jamais|never|rare|peu)/i.test(response);
    const highReuse = /(?:toujours|always|souvent|often|beaucoup)/i.test(response);
    
    if (lowReuse) reuseFrequency = 'Rarely';
    else if (highReuse) reuseFrequency = 'Often';

    // Pattern pour les pourcentages ou nombres d'appels d'offres from scratch
    const scratchMatches = response.match(/(\d+)(?:%|\s*(?:appels|tenders|scratch))/i);
    if (scratchMatches) {
      const value = parseInt(scratchMatches[1]);
      scratchTenders = value > 100 ? value : value; // Si c'est un pourcentage, on le convertira plus tard
    }

    // Fallback avec les nombres extraits
    if (!scratchTenders && numbers.length > 0) scratchTenders = numbers[0];

    return { reuseFrequency, scratchTenders };
  }

  private parseBusinessProfile(response: string): { winRate: number; industry?: string; turnover?: number; priorities?: string[] } {
    const numbers = this.extractNumbers(response);
    
    let winRate = 20;
    let industry = '';
    let turnover = 0;

    // Pattern pour le taux de réussite
    const winRateMatches = response.match(/(\d+)%/i);
    if (winRateMatches) winRate = parseInt(winRateMatches[1]);

    // Pattern pour le chiffre d'affaires
    const turnoverMatches = response.match(/(\d+(?:\.\d+)?)\s*[Mm]€?/i);
    if (turnoverMatches) turnover = parseFloat(turnoverMatches[1]) * 1000000;

    // Détecter l'industrie
    const industries = ['construction', 'engineering', 'pharma', 'technology', 'aerospace', 'manufacturing', 'consulting', 'energy', 'healthcare'];
    for (const ind of industries) {
      if (response.toLowerCase().includes(ind)) {
        industry = ind;
        break;
      }
    }

    // Fallback avec les nombres extraits
    if (!winRate && numbers.length > 0) {
      const potentialWinRate = numbers.find(n => n <= 100);
      if (potentialWinRate) winRate = potentialWinRate;
    }

    return { winRate, industry, turnover };
  }

  private extractNumbers(text: string): number[] {
    const numberRegex = /\b(\d+(?:\.\d+)?)\b/g;
    const matches = text.match(numberRegex);
    return matches ? matches.map(Number) : [];
  }

  private adjustResponsesForEstimate(type: 'low' | 'high'): void {
    Object.keys(this.responses).forEach(key => {
      const response = this.responses[key];
      if (typeof response === 'object' && response?.type === 'range') {
        this.responses[key] = type === 'low' ? response.min : response.max;
      }
    });
  }

  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    const priorities = this.responses['priorities'] || [];

    // Based on priorities
    if (priorities.includes('Reduce cost')) {
      recommendations.push('Focus on automating tender response workflows to reduce manual effort and associated costs');
    }
    if (priorities.includes('Faster submissions')) {
      recommendations.push('Implement template libraries and AI-assisted content generation for quicker turnarounds');
    }
    if (priorities.includes('Improve compliance')) {
      recommendations.push('Use structured obligation tracking to ensure no compliance requirements are missed');
    }
    if (priorities.includes('Increase win rate')) {
      recommendations.push('Leverage knowledge management to reuse winning strategies and content from successful past tenders');
    }

    // Based on specific pain points
    if ((this.responses['versions_per_doc'] || 3) > 5) {
      recommendations.push('Reduce document versioning overhead with collaborative editing and approval workflows');
    }
    if ((this.responses['qa_rounds'] || 3) > 4) {
      recommendations.push('Implement structured Q&A management to handle clarifications more efficiently');
    }

    const reuseFreq = this.responses['reuse_frequency'] || 'Sometimes';
    if (['Never', 'Rarely'].includes(reuseFreq)) {
      recommendations.push('Build a centralized knowledge base to dramatically improve content reuse and reduce repeated work');
    }

    // Industry-specific recommendations
    const industry = this.responses['industry'] || '';
    if (industry === 'Construction') {
      recommendations.push('Focus on technical specification mapping and compliance tracking for construction regulations');
    } else if (industry === 'IT/Technology') {
      recommendations.push('Emphasize rapid prototyping capabilities and technical proposal automation');
    } else if (industry === 'Healthcare') {
      recommendations.push('Prioritize regulatory compliance tracking and audit trail management');
    }

    // Default recommendations if list is short
    if (recommendations.length < 3) {
      recommendations.push(
        'Start with document template standardization for immediate time savings',
        'Implement centralized tender response tracking for better visibility',
        'Focus on knowledge capture from your most successful tender wins'
      );
    }

    return recommendations.slice(0, 5); // Return top 5 recommendations
  }

  public generateDetailedReport(language: 'fr' | 'en' = 'fr'): string {
    const result = this.calculateEfficiency();
    const rangeEstimates = this.calculateRangeEstimates();
    
    if (language === 'fr') {
      return this.generateFrenchReport(result, rangeEstimates);
    } else {
      return this.generateEnglishReport(result, rangeEstimates);
    }
  }

  private generateFrenchReport(result: CalculationResult, rangeEstimates?: { hasRanges: boolean; lowEstimate?: CalculationResult; highEstimate?: CalculationResult }): string {
    const formatNumber = (value: number, decimals: number = 0) => 
      new Intl.NumberFormat('fr-FR', { maximumFractionDigits: decimals }).format(value);

    const formatCurrency = (value: number) => new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(value);

    let reportContent = `🎯 **ANALYSE COMPLÈTE - CALCULATEUR AVANCÉ DE TEMPS**

`;

    // Ajouter les estimations de plage si disponibles
    if (rangeEstimates?.hasRanges && rangeEstimates.lowEstimate && rangeEstimates.highEstimate) {
      reportContent += `**📈 FOURCHETTE D'ESTIMATIONS** (basée sur vos plages de valeurs)

**📊 ESTIMATION BASSE**
• Heures économisées : ${formatNumber(rangeEstimates.lowEstimate.hoursSaved)} h/an
• Amélioration : ${formatNumber(rangeEstimates.lowEstimate.savingsPercentage, 1)}%
• Revenus additionnels : ${formatCurrency(rangeEstimates.lowEstimate.monetizedValue)}

**📊 ESTIMATION HAUTE**
• Heures économisées : ${formatNumber(rangeEstimates.highEstimate.hoursSaved)} h/an
• Amélioration : ${formatNumber(rangeEstimates.highEstimate.savingsPercentage, 1)}%
• Revenus additionnels : ${formatCurrency(rangeEstimates.highEstimate.monetizedValue)}

**📊 ESTIMATION MOYENNE**
• Heures économisées : ${formatNumber(result.hoursSaved)} h/an
• Amélioration : ${formatNumber(result.savingsPercentage, 1)}%
• Revenus additionnels : ${formatCurrency(result.monetizedValue)}

`;
    } else {
      reportContent += `**📊 SITUATION ACTUELLE**
• Temps total annuel : ${formatNumber(result.currentHours)} heures
• Temps optimisé possible : ${formatNumber(result.optimizedHours)} heures
• **Heures économisées : ${formatNumber(result.hoursSaved)} heures/an**
• **Pourcentage d'amélioration : ${formatNumber(result.savingsPercentage, 1)}%**

**💰 VALEUR MONÉTISÉE**
• **Potentiel de revenus additionnels : ${formatCurrency(result.monetizedValue)}**

`;
    }

    reportContent += `**⚡ DÉTAIL DES GAINS PAR CATÉGORIE**

**Préparation des documents :**
• Avant : ${formatNumber(result.breakdown.document_prep.before)} h/an
• Après : ${formatNumber(result.breakdown.document_prep.after)} h/an
• Économie : ${result.breakdown.document_prep.savingsPct}%

**Gestion Q&A :**
• Avant : ${formatNumber(result.breakdown.qa_management.before)} h/an
• Après : ${formatNumber(result.breakdown.qa_management.after)} h/an
• Économie : ${result.breakdown.qa_management.savingsPct}%

**Versioning documents :**
• Avant : ${formatNumber(result.breakdown.doc_versioning.before)} h/an
• Après : ${formatNumber(result.breakdown.doc_versioning.after)} h/an
• Économie : ${result.breakdown.doc_versioning.savingsPct}%

**Administration contrats :**
• Avant : ${formatNumber(result.breakdown.contract_admin.before)} h/an
• Après : ${formatNumber(result.breakdown.contract_admin.after)} h/an
• Économie : ${result.breakdown.contract_admin.savingsPct}%

**Gestion des connaissances :**
• Avant : ${formatNumber(result.breakdown.knowledge_management.before)} h/an
• Après : ${formatNumber(result.breakdown.knowledge_management.after)} h/an
• Économie : ${result.breakdown.knowledge_management.savingsPct}%

**🎯 RECOMMANDATIONS PERSONNALISÉES**
${result.recommendations.map((rec, i) => `${i + 1}. ${rec}`).join('\n')}

**🎉 Veuillez fournir vos informations pour recevoir votre rapport détaillé !**`;

    return reportContent;
  }

  private generateEnglishReport(result: CalculationResult, rangeEstimates?: { hasRanges: boolean; lowEstimate?: CalculationResult; highEstimate?: CalculationResult }): string {
    const formatNumber = (value: number, decimals: number = 0) => 
      new Intl.NumberFormat('en-US', { maximumFractionDigits: decimals }).format(value);

    const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(value);

    return `
🎯 **COMPREHENSIVE ANALYSIS - ADVANCED TIME CALCULATOR**

**📊 CURRENT SITUATION**
• Total annual time: ${formatNumber(result.currentHours)} hours
• Optimized time possible: ${formatNumber(result.optimizedHours)} hours
• **Hours saved: ${formatNumber(result.hoursSaved)} hours/year**
• **Improvement percentage: ${formatNumber(result.savingsPercentage, 1)}%**

**💰 MONETIZED VALUE**
• **Additional revenue potential: ${formatCurrency(result.monetizedValue)}**

**⚡ BREAKDOWN BY CATEGORY**

**Document preparation:**
• Before: ${formatNumber(result.breakdown.document_prep.before)} h/year
• After: ${formatNumber(result.breakdown.document_prep.after)} h/year
• Savings: ${result.breakdown.document_prep.savingsPct}%

**Q&A management:**
• Before: ${formatNumber(result.breakdown.qa_management.before)} h/year
• After: ${formatNumber(result.breakdown.qa_management.after)} h/year
• Savings: ${result.breakdown.qa_management.savingsPct}%

**Document versioning:**
• Before: ${formatNumber(result.breakdown.doc_versioning.before)} h/year
• After: ${formatNumber(result.breakdown.doc_versioning.after)} h/year
• Savings: ${result.breakdown.doc_versioning.savingsPct}%

**Contract administration:**
• Before: ${formatNumber(result.breakdown.contract_admin.before)} h/year
• After: ${formatNumber(result.breakdown.contract_admin.after)} h/year
• Savings: ${result.breakdown.contract_admin.savingsPct}%

**Knowledge management:**
• Before: ${formatNumber(result.breakdown.knowledge_management.before)} h/year
• After: ${formatNumber(result.breakdown.knowledge_management.after)} h/year
• Savings: ${result.breakdown.knowledge_management.savingsPct}%

**🎯 PERSONALIZED RECOMMENDATIONS**
${result.recommendations.map((rec, i) => `${i + 1}. ${rec}`).join('\n')}

**🎉 Please provide your information to receive your detailed report!**
    `.trim();
  }
}

export const advancedTenderCalculator = new AdvancedTenderCalculator();