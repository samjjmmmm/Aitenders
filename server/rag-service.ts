import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { simulatorService } from './simulator-service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Interface pour un chunk de contenu
interface ContentChunk {
  id: string;
  content: string;
  metadata: {
    category: string;
    subcategory: string;
    keywords: string[];
    priority: number; // 1-10, 10 = priorité max
  };
}

// Interface pour un résultat de recherche
interface SearchResult {
  chunk: ContentChunk;
  score: number;
  relevance: 'high' | 'medium' | 'low';
}

class RAGService {
  private chunks: ContentChunk[] = [];
  private knowledgeBase: any = {};
  private config: any = {};
  private analytics = {
    totalQueries: 0,
    blockedQueries: 0,
    redirections: 0,
    openAIQueries: 0,
    directCalls: 0
  };

  constructor() {
    this.loadKnowledgeBase();
    this.loadConfig();
    this.createChunks();
  }

  // Charger la base de connaissances depuis le fichier JSON
  private loadKnowledgeBase(): void {
    try {
      const knowledgeBasePath = path.join(__dirname, 'knowledge-base.json');
      const data = fs.readFileSync(knowledgeBasePath, 'utf8');
      this.knowledgeBase = JSON.parse(data);
      console.log('Knowledge base loaded successfully');
    } catch (error) {
      console.error('Error loading knowledge base:', error);
      this.knowledgeBase = {};
    }
  }

  // Charger la configuration RAG depuis le fichier JSON
  private loadConfig(): void {
    try {
      const configPath = path.join(__dirname, 'rag-config.json');
      const data = fs.readFileSync(configPath, 'utf8');
      this.config = JSON.parse(data);
      console.log('RAG config loaded successfully');
    } catch (error) {
      console.error('Error loading RAG config:', error);
      this.config = {
        settings: { enableOpenAI: true, enableFallback: true },
        routing: { directToOpenAI: { keywords: [] }, blockedQueries: { keywords: [] }, redirections: {} },
        responses: { templates: {} },
        filters: { preprocessing: {}, postprocessing: {} },
        analytics: { trackQueries: true }
      };
    }
  }

  // Créer des chunks à partir de la base de connaissances
  private createChunks(): void {
    this.chunks = [];

    // Company info chunks
    if (this.knowledgeBase.company) {
      this.chunks.push({
        id: 'company-overview',
        content: `${this.knowledgeBase.company.name} - ${this.knowledgeBase.company.tagline}. ${this.knowledgeBase.company.description}. Secteurs: ${this.knowledgeBase.company.sectors.join(', ')}.`,
        metadata: {
          category: 'company',
          subcategory: 'overview',
          keywords: ['aitenders', 'présentation', 'entreprise', 'à propos', 'qui êtes-vous'],
          priority: 9
        }
      });
    }

    // Security chunks
    if (this.knowledgeBase.security) {
      const security = this.knowledgeBase.security;
      this.chunks.push({
        id: 'security-overview',
        content: `🔒 **${security.title}**\n\n**Chiffrement:**\n• ${security.encryption.data_at_rest}\n• ${security.encryption.data_in_transit}\n• ${security.encryption.database}\n\n**Conformité:**\n• ${security.compliance.gdpr}\n• ${security.compliance.iso27001}\n• ${security.compliance.soc2}\n• ${security.compliance.hosting}\n\n**Contrôle d'accès:**\n• ${security.access_control.authentication}\n• ${security.access_control.rbac}\n• ${security.access_control.sso}`,
        metadata: {
          category: 'security',
          subcategory: 'overview',
          keywords: ['sécurité', 'security', 'données', 'rgpd', 'gdpr', 'conformité', 'chiffrement', 'protection'],
          priority: 10
        }
      });

      this.chunks.push({
        id: 'security-backup',
        content: `📋 **Sauvegardes et Continuité**\n• ${security.backup.frequency}\n• ${security.backup.retention}\n• ${security.backup.restoration}`,
        metadata: {
          category: 'security',
          subcategory: 'backup',
          keywords: ['sauvegarde', 'backup', 'récupération', 'continuité', 'rto'],
          priority: 7
        }
      });
    }

    // Use cases chunks
    if (this.knowledgeBase.use_cases) {
      Object.entries(this.knowledgeBase.use_cases).forEach(([key, useCase]: [string, any]) => {
        this.chunks.push({
          id: `use-case-${key}`,
          content: `🎯 **${useCase.title}**\n\n*Cible:* ${useCase.target}\n\n*Description:* ${useCase.description}\n\n**Fonctionnalités:**\n${useCase.features.map((f: string) => `• ${f}`).join('\n')}\n\n**ROI:** ${useCase.roi}\n\n*Clients typiques:* ${useCase.typical_clients}`,
          metadata: {
            category: 'use_cases',
            subcategory: key,
            keywords: ['cas d\'usage', 'use case', 'fonctionnalités', 'features', useCase.title.toLowerCase(), key, key.toUpperCase()],
            priority: 9
          }
        });
      });
    }

    // AI Agents chunks  
    if (this.knowledgeBase.ai_agents) {
      Object.entries(this.knowledgeBase.ai_agents).forEach(([key, agent]: [string, any]) => {
        this.chunks.push({
          id: `ai-agent-${key}`,
          content: `🤖 **${agent.name}**\n\n${agent.description}\n\n**Capacités:**\n${agent.capabilities.map((c: string) => `• ${c}`).join('\n')}`,
          metadata: {
            category: 'ai_agents',
            subcategory: key,
            keywords: ['ia', 'ai', 'intelligence artificielle', 'agent', 'automatisation', agent.name.toLowerCase()],
            priority: 8
          }
        });
      });
    }

    // ROI chunks
    if (this.knowledgeBase.roi_metrics) {
      const roi = this.knowledgeBase.roi_metrics;
      this.chunks.push({
        id: 'roi-overview',
        content: `💰 **Retour sur Investissement Aitenders**\n\n**Gains de temps:**\n• ${roi.time_savings.analysis}\n• ${roi.time_savings.proposal_writing}\n• ${roi.time_savings.compliance_check}\n\n**Amélioration taux de gain:**\n• ${roi.win_rate.improvement}\n• Petits projets: ${roi.win_rate.small_bids}\n• Gros projets: ${roi.win_rate.large_bids}\n\n**Réduction des coûts:**\n• ${roi.cost_reduction.operational}\n• ${roi.cost_reduction.error_prevention}\n• ${roi.cost_reduction.opportunity_cost}`,
        metadata: {
          category: 'roi',
          subcategory: 'metrics',
          keywords: ['roi', 'retour sur investissement', 'gains', 'économies', 'rentabilité', 'coûts', 'bénéfices'],
          priority: 9
        }
      });
    }

    // Contact chunks
    if (this.knowledgeBase.contact) {
      const contact = this.knowledgeBase.contact;
      this.chunks.push({
        id: 'contact-info',
        content: `📞 **Nous Contacter**\n\n**Commercial:**\n• Email: ${contact.sales.email}\n• Téléphone: ${contact.sales.phone}\n• Démo: ${contact.sales.meeting}\n\n**Support:**\n• Email: ${contact.support.email}\n• Horaires: ${contact.support.hours}\n\n**Adresse:**\n${contact.address.line1}\n${contact.address.line2}\n${contact.address.city}, ${contact.address.country}`,
        metadata: {
          category: 'contact',
          subcategory: 'info',
          keywords: ['contact', 'contacter', 'téléphone', 'email', 'adresse', 'rendez-vous', 'démo', 'support'],
          priority: 10
        }
      });
    }

    // Pricing chunks
    if (this.knowledgeBase.pricing) {
      Object.entries(this.knowledgeBase.pricing).forEach(([key, plan]: [string, any]) => {
        this.chunks.push({
          id: `pricing-${key}`,
          content: `💎 **${plan.name}** - ${plan.price}\n\n${plan.description}\n\n**Inclus:**\n${plan.features.map((f: string) => `• ${f}`).join('\n')}`,
          metadata: {
            category: 'pricing',
            subcategory: key,
            keywords: ['prix', 'tarif', 'pricing', 'coût', 'abonnement', plan.name.toLowerCase()],
            priority: 8
          }
        });
      });
    }

    console.log(`Created ${this.chunks.length} knowledge chunks`);
  }

  // Calculer la similarité entre la question et un chunk
  private calculateSimilarity(query: string, chunk: ContentChunk): number {
    const queryLower = query.toLowerCase();
    let score = 0;

    // Score basé sur les mots-clés (poids le plus important)
    const keywordMatches = chunk.metadata.keywords.filter(keyword => 
      queryLower.includes(keyword.toLowerCase())
    ).length;
    score += keywordMatches * 40;

    // Score basé sur la correspondance de contenu
    const words = queryLower.split(' ').filter(word => word.length > 2);
    const contentLower = chunk.content.toLowerCase();

    const contentMatches = words.filter(word => 
      contentLower.includes(word)
    ).length;
    score += contentMatches * 10;

    // Bonus pour la priorité du chunk
    score += chunk.metadata.priority * 2;

    // Bonus pour correspondance exacte de catégorie
    if (queryLower.includes(chunk.metadata.category)) {
      score += 20;
    }

    return score;
  }

  // Rechercher dans la base de connaissances
  public search(query: string, maxResults: number = 3): SearchResult[] {
    const results: SearchResult[] = [];

    // Calculer le score pour chaque chunk
    for (const chunk of this.chunks) {
      const score = this.calculateSimilarity(query, chunk);

      if (score > 0) {
        let relevance: 'high' | 'medium' | 'low' = 'low';
        if (score >= 50) relevance = 'high';
        else if (score >= 20) relevance = 'medium';

        results.push({
          chunk,
          score,
          relevance
        });
      }
    }

    // Trier par score décroissant et limiter les résultats
    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, maxResults);
  }

  // Router la requête selon la configuration
  public async routeQuery(query: string, language: 'fr' | 'en' = 'fr', sessionId?: string): Promise<{ action: string; response?: string; category?: string; shouldUseOpenAI?: boolean; simulatorData?: any }> {
    this.analytics.totalQueries++;

    const queryLower = query.toLowerCase();

    // 0. Vérifier les commandes simulateur en priorité
    const simulatorKeywords = ['simulateur', 'simulation', 'simulator', 'roi calculer', 'calculator', 'calcul roi', 'économies', 'gains'];
    const isSimulatorQuery = simulatorKeywords.some(keyword => queryLower.includes(keyword));

    if (isSimulatorQuery && sessionId) {
      // Vérifier s'il y a une session active
      const sessionInfo = simulatorService.getSessionInfo(sessionId);

      if (!sessionInfo) {
        // Démarrer une nouvelle session
        const firstQuestion = await simulatorService.startSession(sessionId);
        return {
          action: 'simulator_start',
          response: `🎯 **Simulateur ROI Aitenders**\n\nCalculez votre retour sur investissement personnalisé en répondant à quelques questions.\n\n${firstQuestion}`,
          simulatorData: { sessionId, status: 'started' }
        };
      } else if (!sessionInfo.completed) {
        // Session en cours - afficher la question courante
        const currentQuestion = simulatorService.getCurrentQuestion(sessionId);
        if (currentQuestion) {
          return {
            action: 'simulator_continue',
            response: `📊 **Simulateur en cours**\n\n${currentQuestion}`,
            simulatorData: { sessionId, status: 'in_progress' }
          };
        }
      } else {
        // Session terminée
        return {
          action: 'simulator_completed',
          response: simulatorService.getCompletionMessage(),
          simulatorData: { sessionId, status: 'completed' }
        };
      }
    }

    // Vérifier si c'est une réponse à une question de simulateur
    if (sessionId) {
      const sessionInfo = simulatorService.getSessionInfo(sessionId);

      if (sessionInfo && !sessionInfo.completed) {
        // Traiter la réponse utilisateur
        const result = await simulatorService.processAnswer(sessionId, query);

        if (result.error) {
          return {
            action: 'simulator_error',
            response: result.error,
            simulatorData: { sessionId, status: 'error' }
          };
        } else if (result.nextQuestion) {
          return {
            action: 'simulator_continue',
            response: result.nextQuestion,
            simulatorData: { sessionId, status: 'in_progress' }
          };
        } else if (result.completed) {
          return {
            action: 'simulator_completed',
            response: result.message,
            simulatorData: { sessionId, status: 'completed' }
          };
        }
      }
    }

    // 1. Vérifier les requêtes bloquées
    if (this.config.routing?.blockedQueries) {
      const blocked = this.config.routing.blockedQueries.keywords.some((keyword: string) => 
        queryLower.includes(keyword.toLowerCase())
      );

      if (blocked) {
        this.analytics.blockedQueries++;
        return {
          action: 'blocked',
          response: this.config.routing.blockedQueries.response[language] || this.config.responses.templates.blocked[language]
        };
      }
    }

    // 2. Vérifier les appels directs à OpenAI
    if (this.config.routing?.directToOpenAI) {
      const directCall = this.config.routing.directToOpenAI.keywords.some((keyword: string) => 
        queryLower.includes(keyword.toLowerCase())
      );

      if (directCall) {
        this.analytics.directCalls++;
        return {
          action: 'openai_direct',
          shouldUseOpenAI: true
        };
      }
    }

    // 3. Vérifier les redirections configurées
    if (this.config.routing?.redirections) {
      for (const [name, redirect] of Object.entries(this.config.routing.redirections)) {
        const matchesKeyword = redirect.keywords.some((keyword: string) => 
          queryLower.includes(keyword.toLowerCase())
        );

        if (matchesKeyword) {
          this.analytics.redirections++;
          return {
            action: redirect.action,
            category: redirect.category
          };
        }
      }
    }

    // 4. Par défaut, utiliser la base de connaissances
    return {
      action: 'knowledge_base'
    };
  }

  // Générer une réponse basée sur les résultats de recherche
  public generateResponse(query: string, language: 'fr' | 'en' = 'fr'): string {
    const searchResults = this.search(query, 2);

    if (searchResults.length === 0) {
      return language === 'fr' 
        ? "Je n'ai pas trouvé d'information spécifique sur ce sujet. Pouvez-vous reformuler votre question ou utiliser les boutons ci-dessous pour explorer nos services ?"
        : "I couldn't find specific information on this topic. Could you rephrase your question or use the buttons below to explore our services?";
    }

    // Construire la réponse à partir des meilleurs résultats
    let response = '';

    // Ajouter le contenu du meilleur résultat
    const topResult = searchResults[0];
    response += topResult.chunk.content;

    // Si on a un deuxième résultat pertinent, l'ajouter
    if (searchResults.length > 1 && searchResults[1].relevance !== 'low') {
      response += '\n\n---\n\n' + searchResults[1].chunk.content;
    }

    // Ajouter un call-to-action contextuel
    const category = topResult.chunk.metadata.category;
    if (category === 'contact') {
      response += language === 'fr' 
        ? '\n\n💡 *Prêt à transformer vos appels d\'offres ? Planifiez une démo personnalisée !*'
        : '\n\n💡 *Ready to transform your tenders? Schedule a personalized demo!*';
    } else if (category === 'pricing') {
      response += language === 'fr' 
        ? '\n\n📞 *Contactez-nous pour une démonstration adaptée à vos besoins.*'
        : '\n\n📞 *Contact us for a demo tailored to your needs.*';
    }

    return response;
  }

  // Recherche avec filtrage par catégorie
  public searchByCategory(query: string, category: string, maxResults: number = 3): SearchResult[] {
    const filteredChunks = this.chunks.filter(chunk => chunk.metadata.category === category);
    const results: SearchResult[] = [];

    // Calculer le score pour chaque chunk de la catégorie
    for (const chunk of filteredChunks) {
      const score = this.calculateSimilarity(query, chunk);

      if (score > 0) {
        let relevance: 'high' | 'medium' | 'low' = 'low';
        if (score >= 50) relevance = 'high';
        else if (score >= 20) relevance = 'medium';

        results.push({
          chunk,
          score,
          relevance
        });
      }
    }

    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, maxResults);
  }

  // Obtenir des statistiques sur la base de connaissances et l'analytics
  public getStats() {
    const categoryStats = this.chunks.reduce((acc, chunk) => {
      acc[chunk.metadata.category] = (acc[chunk.metadata.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      knowledgeBase: {
        totalChunks: this.chunks.length,
        categories: categoryStats,
        contextWindow: this.chunks.reduce((total, chunk) => total + chunk.content.length, 0)
      },
      analytics: {
        ...this.analytics,
        configLoaded: !!this.config.settings
      },
      configuration: {
        openAIEnabled: this.config.settings?.enableOpenAI || false,
        fallbackEnabled: this.config.settings?.enableFallback || false,
        blockedKeywords: this.config.routing?.blockedQueries?.keywords?.length || 0,
        redirectionRules: Object.keys(this.config.routing?.redirections || {}).length,
        directOpenAIKeywords: this.config.routing?.directToOpenAI?.keywords?.length || 0
      }
    };
  }
}

export const ragService = new RAGService();