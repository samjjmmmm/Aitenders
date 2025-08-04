import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { advancedAnalysisService } from './advanced-analysis-service.js';

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

    // Détecter les commandes d'analyse avancée
    const isAdvancedStartCommand = queryLower.includes('oui avancée') || queryLower.includes('oui avancee') || 
        queryLower === 'avancée' || queryLower === 'avancee' || queryLower === 'avancé' || queryLower === 'avance' ||
        queryLower === 'analyse avancée' || queryLower === 'analyse avancee';

    // 0. Vérifier les commandes de redémarrage en priorité
    const restartKeywords = ['redemarr', 'restart', 'reset', 'recommenc', 'nouveau simulat', 'refaire', 'reini'];
    const isRestartQuery = restartKeywords.some(keyword => queryLower.includes(keyword));

    if (isRestartQuery && sessionId) {
      // Redémarrer l'analyse avancée
      const firstQuestion = await advancedAnalysisService.startSession(sessionId);
      return {
        action: 'advanced_analysis_start',
        response: `🔄 **Analyse redémarrée**

⏱️ **Temps estimé : 3-5 minutes**
📧 **Vous recevrez votre rapport détaillé par email**

Nous repartons depuis le début !

${firstQuestion}`
      };
    }

    // 0.1. Gérer l'analyse avancée
    if (queryLower.includes('analyse avancée') || queryLower.includes('analyse avancee')) {
      return {
        action: 'advanced_analysis_offer',
        response: `🔬 **ANALYSE AVANCÉE - CALCULATEUR COMPLET**

L'analyse avancée comprend :
• **15+ questions détaillées** couvrant tous les aspects de vos processus
• **Calculs sophistiqués** par catégorie (documents, Q&A, contrats, etc.)
• **Recommandations personnalisées** selon votre industrie et priorités
• **Analyse de ROI monétisée** avec potentiel de revenus additionnels
• **Rapport d'exportation** complet avec toutes les métriques

Cette analyse prend environ 8-10 minutes mais fournit des insights beaucoup plus précis et actionnables.

**Souhaitez-vous commencer l'analyse avancée ?** Tapez "**oui avancée**" pour démarrer ou "**non**" pour rester avec l'analyse standard.`
      };
    }



    // 0.2. Gérer le démarrage de l'analyse avancée (priorité haute)
    if (queryLower.includes('oui avancée') || queryLower.includes('oui avancee') || 
        queryLower === 'avancée' || queryLower === 'avancee' || queryLower === 'avancé' || queryLower === 'avance' ||
        queryLower === 'analyse avancée' || queryLower === 'analyse avancee') {
      if (sessionId) {
        const firstQuestion = await advancedAnalysisService.startSession(sessionId);
        return {
          action: 'advanced_analysis_start',
          response: `🚀 **DÉMARRAGE DE L'ANALYSE AVANCÉE**

Nous allons maintenant explorer vos processus en détail avec 6 questions couvrant :

**📋 Profil des appels d'offres** (1 question combinée)
**📄 Complexité documentaire** (1 question combinée)  
**❓ Gestion Q&A** (1 question combinée)
**📝 Administration contrats** (1 question combinée)
**🧠 Gestion des connaissances** (1 question combinée)
**🎯 Profil d'entreprise** (1 question combinée)

${firstQuestion}`
        };
      }
      return {
        action: 'error',
        response: "❌ Session introuvable pour démarrer l'analyse avancée."
      };
    }

    // 0.3. Gérer la commande "commencer" pour lancer la première question
    const startKeywords = ['commencer', 'commenc', 'demarrer', 'demarr', 'start', 'begin', 'débuter'];
    const isStartCommand = startKeywords.some(keyword => queryLower.includes(keyword));

    if (isStartCommand && sessionId) {
      const firstQuestion = await advancedAnalysisService.startSession(sessionId);
      return {
        action: 'advanced_analysis_start',
        response: firstQuestion
      };
    }

    // 1. Vérifier les demandes de cas d'usage en priorité ABSOLUE
    const useCaseKeywords = ['cas d\'usage', 'use case', 'nos cas', 'ensemble des cas', 'use cases'];
    const isUseCaseQuery = useCaseKeywords.some(keyword => queryLower.includes(keyword));

    if (isUseCaseQuery) {
      // Retourner directement les cas d'usage organisés par taille de projet
      return {
        action: 'knowledge_base',
        response: `🎯 **Nos Cas d'Usage Aitenders**

Découvrez nos solutions adaptées à chaque taille de projet :

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; max-width: 1200px; margin: 1.5rem 0;">
  <div style="background: linear-gradient(135deg, #EBF2FD 0%, #F5F9FE 100%); padding: 1.5rem; border-radius: 12px; border-left: 4px solid #3880E8;">
    <h3 style="color: #112646; margin: 0 0 1rem 0; font-size: 1.1rem;">🚀 <strong>PETITS PROJETS</strong></h3>
    <div style="space-y: 0.75rem;">
      <div><a href="/uc1" style="color: #3880E8; text-decoration: none; font-weight: 600;">→ UC1 - Appels d'Offres</a></div>
      <div><a href="/uc4" style="color: #3880E8; text-decoration: none; font-weight: 600;">→ UC4 - Réalisation</a></div>
    </div>
  </div>
  
  <div style="background: linear-gradient(135deg, #F0F7FF 0%, #F8FBFF 100%); padding: 1.5rem; border-radius: 12px; border-left: 4px solid #0066CC;">
    <h3 style="color: #112646; margin: 0 0 1rem 0; font-size: 1.1rem;">📊 <strong>PROJETS MOYENS</strong></h3>
    <div style="space-y: 0.75rem;">
      <div><a href="/uc2" style="color: #0066CC; text-decoration: none; font-weight: 600;">→ UC2 - Appels d'Offres</a></div>
      <div><a href="/uc5" style="color: #0066CC; text-decoration: none; font-weight: 600;">→ UC5 - Réalisation</a></div>
    </div>
  </div>
  
  <div style="background: linear-gradient(135deg, #F3F0FF 0%, #FAFBFF 100%); padding: 1.5rem; border-radius: 12px; border-left: 4px solid #6B46C1;">
    <h3 style="color: #112646; margin: 0 0 1rem 0; font-size: 1.1rem;">🏗️ <strong>PROJETS COMPLEXES</strong></h3>
    <div style="space-y: 0.75rem;">
      <div><a href="/uc3" style="color: #6B46C1; text-decoration: none; font-weight: 600;">→ UC3 - Multi-Lots Complexes</a></div>
      <div><a href="/uc6" style="color: #6B46C1; text-decoration: none; font-weight: 600;">→ UC6 - Grands Projets</a></div>
    </div>
  </div>
</div>

---

## 📝 **RÉDACTION & LIVRABLES**
• **Génération automatique** de réponses techniques adaptées au secteur
• **Templates intelligents** personnalisés selon vos historiques de gains
• **Révision et optimisation** des documents par IA spécialisée BTP
• **Vérification de conformité** automatique des exigences réglementaires

## 🧠 **FONCTIONNALITÉS PLATEFORME**
[**→ Knowledge Management & Sécurité de la Plateforme**](/platform-features)

**💡 Cliquez sur les liens ci-dessus pour explorer chaque cas d'usage en détail et calculer votre ROI !**`,
        category: 'use_cases'
      };
    }

    // 2. Vérifier les commandes simulateur EN PRIORITÉ ABSOLUE - avant toute autre logique
    const simulatorKeywords = ['simulateur', 'simulation', 'simulator', 'roi calculer', 'calculator', 'calcul roi'];
    const isSimulatorQuery = simulatorKeywords.some(keyword => queryLower.includes(keyword));
    const isNextCommand = ['suivant', 'next', 'continuer', 'continue'].some(keyword => queryLower.includes(keyword));

    if (isSimulatorQuery) {
      // FORCER un redémarrage complet et propre
      if (sessionId) {
        console.log(`[SIMULATOR] Redémarrage forcé de la session: ${sessionId}`);
        // Redémarrer complètement la session existante
        const response = await advancedAnalysisService.startSession(sessionId);
        console.log(`[SIMULATOR] Nouvelle session démarrée avec introduction`);
        return {
          action: 'advanced_analysis_start',
          response: response
        };
      }
    }

    // 2.1. Gérer les commandes "next" et "suivant" pour les sessions existantes
    if (isNextCommand && sessionId) {
      const sessionInfo = advancedAnalysisService.getSessionInfo(sessionId);
      if (sessionInfo && !sessionInfo.completed) {
        // Si la session existe et n'est pas terminée, montrer la question courante
        console.log(`[SIMULATOR] Affichage question courante pour session: ${sessionId}`);
        const currentQuestion = advancedAnalysisService.getCurrentQuestion(sessionId);
        if (currentQuestion) {
          return {
            action: 'advanced_analysis_continue',
            response: currentQuestion
          };
        }
      }
      // Si pas de session active, démarrer une nouvelle session
      console.log(`[SIMULATOR] Pas de session active, démarrage nouvelle session: ${sessionId}`);
      const response = await advancedAnalysisService.startSession(sessionId);
      return {
        action: 'advanced_analysis_start',
        response: response
      };
    }



    // Handle platform features request
    const platformKeywords = ['platform-features', 'knowledge management', 'sécurité', 'security', 'km', 'plateforme'];
    const isPlatformQuery = platformKeywords.some(keyword => queryLower.includes(keyword));

    if (isPlatformQuery) {
      return {
        action: 'knowledge_base',
        response: `🧠 **Knowledge Management & Sécurité Aitenders**

## 🔍 **GESTION DES CONNAISSANCES**
• **Base de connaissances centralisée** - Toutes vos données projet accessibles instantanément
• **IA de recherche avancée** - Trouvez l'information pertinente en quelques secondes
• **Réutilisation intelligente** - L'IA suggère automatiquement les contenus existants
• **Apprentissage continu** - La plateforme s'améliore à chaque utilisation

## 🔒 **SÉCURITÉ & CONFORMITÉ**
• **Chiffrement end-to-end** - Vos données protégées à tout niveau
• **Conformité RGPD** - Respect total de la réglementation européenne
• **Hébergement sécurisé** - Infrastructure certifiée ISO 27001
• **Contrôle d'accès granulaire** - Permissions personnalisées par utilisateur
• **Sauvegarde automatique** - Vos données protégées et récupérables

## 🚀 **AVANTAGES BUSINESS**
• **ROI démontré** - Retour sur investissement mesurable dès 3 mois
• **Gain de temps** - Jusqu'à 70% de temps économisé sur la rédaction
• **Amélioration qualité** - Réponses plus précises et conformes
• **Avantage concurrentiel** - Réponses plus rapidement que vos concurrents

**💡 Besoin d'une démonstration personnalisée ? Contactez notre équipe !**`,
        category: 'platform'
      };
    }

    // 3. Gérer les réponses d'analyse avancée en cours (APRÈS la détection des commandes prioritaires)
    if (sessionId && !isAdvancedStartCommand && !isUseCaseQuery && !isSimulatorQuery) {
      const advancedSession = advancedAnalysisService.getSessionInfo(sessionId);
      if (advancedSession && !advancedSession.completed) {
        // L'utilisateur est dans un processus d'analyse avancée
        const result = await advancedAnalysisService.processAnswer(sessionId, query);

        if (result.error) {
          return {
            action: 'advanced_analysis_error',
            response: result.error
          };
        } else if (result.completed) {
          return {
            action: 'advanced_analysis_completed',
            response: result.message
          };
        } else if (result.nextQuestion) {
          return {
            action: 'advanced_analysis_continue',
            response: result.message
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
        const redirectConfig = redirect as any; // Type assertion for unknown redirect config
        const matchesKeyword = redirectConfig.keywords?.some((keyword: string) => 
          queryLower.includes(keyword.toLowerCase())
        );

        if (matchesKeyword) {
          this.analytics.redirections++;
          return {
            action: redirectConfig.action,
            category: redirectConfig.category
          };
        }
      }
    }

    // Use cases are handled earlier in the function, so this is removed to avoid conflict

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
    } else if (category === 'use_cases') {
      response = language === 'fr' ? 
      `🎯 **Nos 8 Cas d'Usage Aitenders**

Découvrez comment Aitenders transforme votre activité selon votre profil :

**📋 APPELS D'OFFRES**

**UC1 - Fast-Track Small Bids** 🚀
*Appels d'offres petits projets* 
[**→ Voir UC1**](/uc1)

**UC2 - Medium Bid Management** 📊
*Gestion d'appels d'offres moyens*
[**→ Voir UC2**](/uc2)

**UC3 - Complex Multi-Lot Bids** 🏗️
*Appels d'offres multi-lots complexes*
[**→ Voir UC3**](/uc3)

**⚙️ EXÉCUTION DE PROJETS**

**UC4 - Small Project Execution** 📝
*Exécution de petits projets*
[**→ Voir UC4**](/uc4)

**UC5 - Medium Project Execution** 🔧
*Exécution de projets moyens*
[**→ Voir UC5**](/uc5)

**UC6 - Large Project Execution** 🏭
*Exécution de grands projets*
[**→ Voir UC6**](/uc6)

**🧠 GESTION DES CONNAISSANCES**

**UC7 - Knowledge Management Small** 📚
*Pour petites structures*
[**→ Voir UC7**](/uc7)

**UC8 - Knowledge Management Large** 🏢
*Pour grandes organisations*
[**→ Voir UC8**](/uc8)

**💡 Conseil :** Cliquez sur les liens ci-dessus pour explorer chaque cas d'usage en détail, voir les démos et calculer votre ROI spécifique !` :
      `🎯 **Our 8 Aitenders Use Cases**

Choose your use case to discover how Aitenders can transform your business:

**📋 Tender Management:**
• [UC1 - Fast-Track Small Bids](/uc1) - Small project tenders
• [UC2 - Medium Bid Management](/uc2) - Medium tender management
• [UC3 - Complex Multi-Lot Bids](/uc3) - Complex multi-lot tenders

**⚙️ Project Execution:**
• [UC4 - Small Project Execution](/uc4) - Small project execution
• [UC5 - Medium Project Execution](/uc5) - Medium project execution
• [UC6 - Large Project Execution](/uc6) - Large project execution

**🧠 Knowledge Management:**
• [UC7 - Knowledge Management Small](/uc7) - For small structures
• [UC8 - Knowledge Management Large](/uc8) - For large organizations

Click on a use case to discover its detailed features, see a demonstration and calculate your ROI!`;
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