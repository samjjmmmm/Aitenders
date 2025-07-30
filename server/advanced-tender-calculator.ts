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

      // Document Complexity
      {
        id: 'docs_per_tender',
        question: 'Combien de documents sont généralement soumis par appel d\'offres ?',
        questionType: 'number',
        validationRules: { min: 1, max: 100 },
        helpText: 'Spécifications techniques, propositions, documents de conformité, certifications, etc.',
        followUpQuestions: [
          'Quels types de documents prennent le plus de temps à préparer ?',
          'Avez-vous des modèles standards pour la plupart des documents ?'
        ],
        category: 'document_complexity'
      },
      {
        id: 'pages_per_doc',
        question: 'Quel est le nombre moyen de pages par document ?',
        questionType: 'number',
        validationRules: { min: 1, max: 500 },
        helpText: 'Longueur typique de vos documents d\'appel d\'offres',
        followUpQuestions: [
          'Y a-t-il des limites de pages imposées par les clients ?',
          'Trouvez-vous que les documents plus longs performent mieux ?'
        ],
        category: 'document_complexity'
      },
      {
        id: 'versions_per_doc',
        question: 'Combien de versions chaque document traverse-t-il généralement avant soumission ?',
        questionType: 'number',
        validationRules: { min: 1, max: 15 },
        helpText: 'Cycles de révision, révisions, approbations',
        followUpQuestions: [
          'Qui sont les principaux réviseurs dans votre processus d\'approbation ?',
          'Qu\'est-ce qui cause le plus de révisions - contenu, formatage ou conformité ?'
        ],
        category: 'document_complexity'
      },

      // Q&A Management  
      {
        id: 'qa_rounds',
        question: 'Combien de cycles de Q&R ou d\'ordres de modification gérez-vous généralement par appel d\'offres ?',
        questionType: 'number',
        validationRules: { min: 0, max: 15 },
        helpText: 'Rounds de clarification, avenants, demandes de changement des clients',
        followUpQuestions: [
          'Ceux-ci viennent-ils généralement du client ou des parties prenantes internes ?',
          'Quel pourcentage d\'appels d\'offres n\'ont aucun round de Q&R ?'
        ],
        category: 'qa_management'
      },
      {
        id: 'qa_hours',
        question: 'Combien d\'heures en moyenne passez-vous à gérer chaque round de Q&R ?',
        questionType: 'number',
        validationRules: { min: 0.5, max: 20.0 },
        helpText: 'Traitement, coordination, réponse aux changements et clarifications',
        followUpQuestions: [
          'Cela inclut-il le temps de coordination avec les équipes techniques ?',
          'Combien de personnes sont généralement impliquées dans chaque réponse ?'
        ],
        category: 'qa_management'
      },

      // Contract Administration
      {
        id: 'contracts_tracked',
        question: 'How many contracts do you actively track or create per year?',
        questionType: 'number',
        validationRules: { min: 1, max: 1000 },
        helpText: 'Active contracts requiring ongoing management and compliance tracking',
        followUpQuestions: [
          'Do you track obligations and milestones for all of these?',
          'How do you currently manage contract renewals?'
        ],
        category: 'contract_admin'
      },
      {
        id: 'hours_per_contract',
        question: 'How many hours do you spend on initial contract setup, formatting, and review?',
        questionType: 'number',
        validationRules: { min: 1, max: 50 },
        helpText: 'Initial setup, formatting, compliance review per contract',
        followUpQuestions: [
          'Does this include legal review time?',
          'How much ongoing time is spent on contract maintenance?'
        ],
        category: 'contract_admin'
      },

      // Knowledge Management
      {
        id: 'reuse_frequency',
        question: 'How often do you reuse answers, content, or templates from past tenders?',
        questionType: 'choice',
        validationRules: {
          choices: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
        },
        helpText: 'Reusing content, templates, responses from previous submissions',
        followUpQuestions: [
          'What prevents you from reusing content more often?',
          'Do you have a centralized repository of past responses?'
        ],
        category: 'knowledge_management'
      },
      {
        id: 'scratch_tenders',
        question: 'How many tenders per year are done completely from scratch with minimal reuse?',
        questionType: 'number',
        validationRules: { min: 0, max: 500 },
        helpText: 'Tenders with minimal reuse of past content or templates',
        followUpQuestions: [
          'What makes these tenders unique enough to start from scratch?',
          'Could some of these benefit from more standardization?'
        ],
        category: 'knowledge_management'
      },

      // Business Profile
      {
        id: 'priorities',
        question: 'What are your top 3 business priorities for the next 6 months?',
        questionType: 'multiple_choice',
        validationRules: {
          choices: [
            'Reduce cost',
            'Improve compliance',
            'Faster submissions',
            'Increase win rate',
            'Improve team wellbeing',
            'Improve document quality',
            'Better client relationships',
            'Risk management'
          ],
          maxSelections: 3
        },
        helpText: 'Choose the most important objectives for your organization',
        followUpQuestions: [
          'Which of these is the most urgent?',
          'How do you currently measure success in these areas?'
        ],
        category: 'business_profile'
      },
      {
        id: 'industry',
        question: 'What industry does your company operate in?',
        questionType: 'choice',
        validationRules: {
          choices: [
            'Construction',
            'Engineering',
            'Pharma',
            'IT/Technology',
            'Aerospace',
            'Manufacturing',
            'Consulting',
            'Energy',
            'Healthcare',
            'Other'
          ]
        },
        helpText: 'Your primary industry sector',
        followUpQuestions: [
          'Do you work across multiple industry sectors?',
          'Are there industry-specific compliance requirements you must meet?'
        ],
        category: 'business_profile'
      },
      {
        id: 'turnover',
        question: "What's your business unit's annual turnover in euros?",
        questionType: 'number',
        validationRules: { min: 1000000, max: 10000000000 },
        helpText: 'Annual revenue of the business unit handling tenders',
        followUpQuestions: [
          'Is this growing or stable year over year?',
          'What percentage comes from tender-won contracts?'
        ],
        category: 'business_profile'
      },
      {
        id: 'win_rate',
        question: "What's your typical win rate as a percentage?",
        questionType: 'number',
        validationRules: { min: 5, max: 100 },
        helpText: 'Percentage of tenders you typically win',
        followUpQuestions: [
          'Has this improved or declined in recent years?',
          'Do you track win rates by tender size or client type?'
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

    const tendersPerYear = getValue('tenders_per_year', 0);
    const avgTenderValue = getValue('avg_tender_value', 0);
    const responseWeeks = getValue('response_weeks', 0);
    const docsPerTender = getValue('docs_per_tender', 0);
    const pagesPerDoc = getValue('pages_per_doc', 0);
    const versionsPerDoc = getValue('versions_per_doc', 0);
    const qaRounds = getValue('qa_rounds', 0);
    const qaHours = getValue('qa_hours', 0);
    const contractsTracked = getValue('contracts_tracked', 0);
    const hoursPerContract = getValue('hours_per_contract', 0);
    const reuseFrequency = this.responses['reuse_frequency'] || 'Sometimes';
    const scratchTenders = getValue('scratch_tenders', 0);
    const winRate = getValue('win_rate', 20);

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