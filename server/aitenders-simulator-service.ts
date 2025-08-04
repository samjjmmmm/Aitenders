/**
 * Service de simulateur Aitenders - Nouvelle version avec questions structurées
 * Intègre le nouveau calculateur et gère le flux de questions
 */

import { aitendersSimulatorFinal } from './aitenders-simulator-final.js';

interface SimulatorSession {
  sessionId: string;
  currentStep: number;
  data: {
    nb_petits?: number;
    montant_petit?: number;
    nb_moyens?: number;
    montant_moyen?: number;
    nb_grands?: number;
    montant_grand?: number;
    email?: string;
  };
  completed: boolean;
  startTime: Date;
}

interface SimulatorQuestion {
  id: string;
  title: string;
  description: string;
  fields: {
    name: string;
    label: string;
    type: 'number' | 'email';
    placeholder: string;
    min?: number;
    step?: number;
    required: boolean;
  }[];
  example?: string;
}

class AitendersSimulatorService {
  private sessions: Map<string, SimulatorSession> = new Map();

  private questions: SimulatorQuestion[] = [
    {
      id: 'profil_projets',
      title: 'Question 1/4 : Profil de vos appels d\'offres',
      description: 'Calculez l\'impact global d\'Aitenders sur votre portefeuille projets.',
      fields: [
        {
          name: 'nb_petits',
          label: 'Nombre de petits projets (≈3 semaines, 1 pers.):',
          type: 'number',
          placeholder: 'ex: 300',
          min: 0,
          required: false
        },
        {
          name: 'montant_petit',
          label: 'Montant moyen d\'un petit projet (€):',
          type: 'number',
          placeholder: 'ex: 5M€',
          min: 1000000,
          step: 1000000,
          required: false
        }
      ],
      example: 'Nous traitons 300 petits projets par an de 5M€ en moyenne, 100 projets moyens de 50M€, et 10 grands projets de 100M€'
    },
    {
      id: 'projets_moyens',
      title: 'Question 2/4 : Projets moyens',
      description: 'Projets moyens (1-3 mois, 2-5 personnes)',
      fields: [
        {
          name: 'nb_moyens',
          label: 'Nombre de projets moyens (1-3 mois, 2-5 pers.):',
          type: 'number',
          placeholder: 'ex: 100',
          min: 0,
          required: false
        },
        {
          name: 'montant_moyen',
          label: 'Montant moyen d\'un projet moyen (€):',
          type: 'number',  
          placeholder: 'ex: 50M€',
          min: 1000000,
          step: 5000000,
          required: false
        }
      ]
    },
    {
      id: 'grands_projets',
      title: 'Question 3/4 : Grands projets',
      description: 'Grands projets (>6 mois, 15 personnes+)',
      fields: [
        {
          name: 'nb_grands',
          label: 'Nombre de grands projets (>6 mois, 15 pers.+):',
          type: 'number',
          placeholder: 'ex: 10',
          min: 0,
          required: false
        },
        {
          name: 'montant_grand',
          label: 'Montant moyen d\'un grand projet (€):',
          type: 'number',
          placeholder: 'ex: 100M€',
          min: 50000000,
          step: 10000000,
          required: false
        }
      ]
    },
    {
      id: 'email_validation',
      title: 'Question 4/4 : Validation email',
      description: 'Pour débloquer le détail des impacts par WOW',
      fields: [
        {
          name: 'email',
          label: 'Votre email (obligatoire pour voir le détail):',
          type: 'email',
          placeholder: 'votre@email.com',
          required: true
        }
      ]
    }
  ];

  /**
   * Démarre une nouvelle session de simulation - DIRECT LAUNCH
   */
  public startSession(sessionId: string): string {
    // Supprimer toute session existante
    if (this.sessions.has(sessionId)) {
      this.sessions.delete(sessionId);
    }

    const session: SimulatorSession = {
      sessionId,
      currentStep: 0,
      data: {},
      completed: false,
      startTime: new Date()
    };

    this.sessions.set(sessionId, session);

    // RETOURNER DIRECTEMENT LA PREMIÈRE QUESTION STRUCTURÉE
    return `📊 **SIMULATEUR ROI AITENDERS POUR VOS BESOINS**

⏱️ Temps estimé : 3-5 minutes
📧 Vous recevrez votre rapport détaillé par email

---

**Question 1/4 : Volume et Types de Projets**

Pour mieux calculer votre ROI, pouvez-vous me décrire le volume de projets sur lesquels vous soumissionnez annuellement ?

**📋 Exemples de réponses :**
• "100 petits projets de 5M€ environ"
• "50 projets moyens de 20M€"
• "5 grands projets de 100M€"

💡 **Vous pouvez répondre en langage naturel.**

_____`;
  }

  /**
   * Formate l'introduction avec la première question
   */
  private formatIntroWithQuestion(question: SimulatorQuestion): string {
    return `📊 **SIMULATEUR ONE VOICE AITENDERS**

⏱️ Temps estimé : 3-5 minutes
📧 Vous recevrez votre rapport détaillé par email

Calculez l'impact global d'Aitenders sur votre portefeuille projets.

---

**${question.title}**

${question.description}

${this.formatQuestionFields(question)}

${question.example ? `\n💡 **Exemple de réponse naturelle :**\n"${question.example}"` : ''}

_____`;
  }

  /**
   * Formate les champs d'une question
   */
  private formatQuestionFields(question: SimulatorQuestion): string {
    let formatted = '';
    
    if (question.id === 'profil_projets') {
      formatted += `**📋 Inputs utilisateur**

Colonne 1:
• ${question.fields[0].label} ${question.fields[0].placeholder}
• ${question.fields[1].label} ${question.fields[1].placeholder}

**OU**

Vous pouvez simplement décrire votre portefeuille en langage naturel ci-dessous.`;
    } else if (question.id === 'email_validation') {
      formatted = `**${question.fields[0].label}** ${question.fields[0].placeholder}`;
    } else {
      formatted = question.fields.map(field => 
        `• **${field.label}** ${field.placeholder}`
      ).join('\n');
    }

    return formatted;
  }

  /**
   * Traite une réponse utilisateur
   */
  public async processAnswer(sessionId: string, answer: string): Promise<{ success: boolean; message: string; completed?: boolean }> {
    const session = this.sessions.get(sessionId);
    if (!session || session.completed) {
      return { success: false, message: "❌ Session non trouvée ou déjà terminée." };
    }

    const currentQuestion = this.questions[session.currentStep];
    if (!currentQuestion) {
      return { success: false, message: "❌ Question non trouvée." };
    }

    // Parser la réponse selon le type de question
    const parseResult = this.parseAnswer(currentQuestion, answer, session.data);
    if (!parseResult.success) {
      return { success: false, message: parseResult.error! };
    }

    // Mettre à jour les données de session
    Object.assign(session.data, parseResult.data);
    session.currentStep++;

    // Vérifier si on a terminé toutes les questions principales (avant email)
    if (session.currentStep >= 3) {
      // Vérifier si au moins un type de projet est renseigné
      const hasProjects = (session.data.nb_petits && session.data.nb_petits > 0) ||
                         (session.data.nb_moyens && session.data.nb_moyens > 0) ||
                         (session.data.nb_grands && session.data.nb_grands > 0);

      if (hasProjects) {
        // Passer directement à la question email (DIRECTE)
        session.currentStep = 3;
        return {
          success: true,
          message: `✅ Données enregistrées !\n\n**Question 4/4 : Email de Contact**\n\nMerci ! Pour finaliser votre rapport ROI personnalisé, pouvez-vous me communiquer votre adresse email ?\n\n**📧 Votre email :** votre@entreprise.com\n\n_____`
        };
      } else if (session.currentStep < 3) {
        // Questions directes selon l'étape
        let questionText = '';
        if (session.currentStep === 1) {
          questionText = `**Question 2/4 : Équipes et Ressources**\n\nCombien de personnes travaillent sur la préparation des appels d'offres dans votre organisation ?\n\n**Exemples :**\n• "2-3 personnes à temps partiel"\n• "5 personnes dédiées"\n• "15 personnes réparties sur plusieurs équipes"`;
        } else if (session.currentStep === 2) {
          questionText = `**Question 3/4 : Temps de Préparation**\n\nEn moyenne, combien de temps votre équipe consacre-t-elle à la préparation d'une réponse d'appel d'offres ?\n\n**Exemples :**\n• "2-3 jours pour les petits projets"\n• "2 semaines pour les projets moyens"\n• "1-2 mois pour les grands projets"`;
        }
        
        return {
          success: true,
          message: `✅ Réponse enregistrée !\n\n${questionText}\n\n_____`
        };
      } else {
        return {
          success: false,
          message: "❌ Veuillez renseigner au moins un type de projet avant de continuer."
        };
      }
    }

    // Question email traitée - générer le rapport final
    if (session.currentStep > 3) {
      session.completed = true;
      
      // Valider les données
      const validation = aitendersSimulatorFinal.validerDonnees(session.data);
      if (!validation.valid) {
        return {
          success: false,
          message: `❌ Données invalides :\n${validation.errors.join('\n')}`
        };
      }

      // Générer le rapport
      const rapport = aitendersSimulatorFinal.genererRapport(session.data as any);
      
      return {
        success: true,
        message: `✅ Simulation terminée !\n\n${rapport}`,
        completed: true
      };
    }

    // Question suivante
    const nextQuestion = this.questions[session.currentStep];
    return {
      success: true,
      message: `✅ Réponse enregistrée !\n\n**${nextQuestion.title}**\n\n${nextQuestion.description}\n\n${this.formatQuestionFields(nextQuestion)}\n\n_____`
    };
  }

  /**
   * Parse une réponse utilisateur selon le type de question
   */
  private parseAnswer(question: SimulatorQuestion, answer: string, currentData: any): { success: boolean; data?: any; error?: string } {
    const cleanAnswer = answer.trim();

    if (question.id === 'email_validation') {
      // Validation email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(cleanAnswer)) {
        return { success: false, error: "❌ Veuillez entrer une adresse email valide." };
      }
      return { success: true, data: { email: cleanAnswer } };
    }

    // Pour les questions de projets, essayer de parser les nombres ou le texte naturel
    if (question.id === 'profil_projets') {
      return this.parseProjectAnswer(cleanAnswer, 'petits');
    } else if (question.id === 'projets_moyens') {
      return this.parseProjectAnswer(cleanAnswer, 'moyens');
    } else if (question.id === 'grands_projets') {
      return this.parseProjectAnswer(cleanAnswer, 'grands');
    }

    return { success: true, data: {} };
  }

  /**
   * Parse une réponse de projet (nombre + montant ou texte naturel)
   */
  private parseProjectAnswer(answer: string, type: 'petits' | 'moyens' | 'grands'): { success: boolean; data?: any; error?: string } {
    // Essayer d'extraire des nombres de la réponse
    const numbers = answer.match(/\d+/g)?.map(n => parseInt(n));
    
    if (numbers && numbers.length >= 2) {
      // Format structuré détecté
      const nb_key = `nb_${type}`;
      const montant_key = `montant_${type === 'petits' ? 'petit' : type === 'moyens' ? 'moyen' : 'grand'}`;
      
      let nb = numbers[0];
      let montant = numbers[1];
      
      // Ajuster le montant selon les indications (M€, etc.)
      if (answer.toLowerCase().includes('m€') || answer.toLowerCase().includes('m ')) {
        montant = montant * 1000000;
      } else if (answer.toLowerCase().includes('k€') || answer.toLowerCase().includes('k ')) {
        montant = montant * 1000;
      }

      return {
        success: true,
        data: {
          [nb_key]: nb,
          [montant_key]: montant
        }
      };
    } else if (numbers && numbers.length === 1) {
      // Un seul nombre - probablement le nombre de projets
      const nb_key = `nb_${type}`;
      return {
        success: true,
        data: {
          [nb_key]: numbers[0]
        }
      };
    } else if (answer.toLowerCase().includes('aucun') || answer.toLowerCase().includes('0') || answer.toLowerCase().includes('non')) {
      // Pas de projets de ce type
      return { success: true, data: {} };
    } else {
      // Réponse en texte naturel - extraire ce qu'on peut
      return { success: true, data: {} };
    }
  }

  /**
   * Obtient les informations de session
   */
  public getSessionInfo(sessionId: string): SimulatorSession | undefined {
    return this.sessions.get(sessionId);
  }

  /**
   * Obtient la question courante
   */
  public getCurrentQuestion(sessionId: string): string | null {
    const session = this.sessions.get(sessionId);
    if (!session || session.completed) {
      return null;
    }

    const question = this.questions[session.currentStep];
    if (!question) {
      return null;
    }

    return `**${question.title}**\n\n${question.description}\n\n${this.formatQuestionFields(question)}\n\n_____`;
  }
}

export const aitendersSimulatorService = new AitendersSimulatorService();