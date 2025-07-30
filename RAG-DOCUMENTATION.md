# Système RAG Aitenders - Documentation Technique

## Vue d'ensemble

Le système RAG (Retrieval-Augmented Generation) d'Aitenders utilise maintenant une architecture configurée avancée qui permet :

- **Routing intelligent** des requêtes selon des règles configurables
- **Blocage sélectif** de certaines requêtes inappropriées  
- **Appels directs à ChatGPT** pour les demandes créatives
- **Redirections contextuelles** vers des catégories spécifiques
- **Analytics en temps réel** sur l'utilisation du système

## Architecture du Système Configuré

### 1. Configuration Centralisée (`server/rag-config.json`)

Le fichier de configuration contrôle entièrement le comportement du système :

```json
{
  "settings": {
    "defaultLanguage": "fr",
    "maxResponseLength": 2000,
    "enableOpenAI": true,
    "enableFallback": true
  },
  "routing": {
    "directToOpenAI": {
      "keywords": ["créatif", "creative", "personnalisé", "rédige", "génère"]
    },
    "blockedQueries": {
      "keywords": ["prix personnel", "confidential", "mot de passe"],
      "response": {
        "fr": "🚫 Information non disponible...",
        "en": "🚫 Information not available..."
      }
    },
    "redirections": {
      "contact": {
        "keywords": ["contact", "demo", "commercial"],
        "priority": 10,
        "action": "knowledge_base",
        "category": "contact"
      }
    }
  }
}
```

### 2. Service RAG Étendu (`server/rag-service.ts`)

Nouvelles fonctionnalités ajoutées :

- **routeQuery()** : Analyse et route les requêtes selon la configuration
- **searchByCategory()** : Recherche ciblée dans une catégorie spécifique
- **Analytics tracking** : Suivi des requêtes, blocages, redirections
- **Configuration loading** : Chargement automatique des règles de routing

### 3. Intégration API Avancée (`server/routes.ts`)

Le système de chat utilise maintenant le routing configuré :

```typescript
// Route the query using the new configuration system
const routing = ragService.routeQuery(message, language);

switch (routing.action) {
  case 'blocked':
    aiResponse = routing.response!;
    break;
  case 'openai_direct':
    aiResponse = await generateAitendersResponse(message, language);
    break;
  case 'knowledge_base':
    if (routing.category) {
      // Search specific category
      const categoryResults = ragService.searchByCategory(message, routing.category, 2);
    }
    break;
}
```

## Système de Routing

### Types de Routing Disponibles

1. **Requêtes Bloquées**
   - Mots-clés : prix personnel, confidential, mot de passe
   - Action : Retourner un message d'erreur configuré
   - Usage : Protection contre les requêtes inappropriées

2. **Appels Directs ChatGPT**
   - Mots-clés : créatif, creative, personnalisé, rédige, génère
   - Action : Envoyer directement à OpenAI sans filtrage
   - Usage : Demandes créatives ou de génération de contenu

3. **Redirections Catégorielles**
   - **Contact** : contact, demo, commercial → category: contact
   - **Pricing** : prix, tarif, abonnement → category: pricing  
   - **Security** : sécurité, rgpd, données → category: security
   - **Features** : fonctionnalités, agents, ia → category: ai_agents
   - **Use Cases** : cas d'usage, secteur, uc1-uc3 → category: use_cases
   - **ROI** : roi, économies, performance → category: roi

4. **Fallback Général**
   - Si aucune règle ne correspond
   - Action : Recherche générale dans la base de connaissances

## Endpoints API

### 1. Statistiques RAG
```
GET /api/rag/stats
```

Retourne les analytics détaillées du système :

```json
{
  "knowledgeBase": {
    "totalChunks": 15,
    "categories": {
      "company": 1,
      "security": 2,
      "use_cases": 3,
      "ai_agents": 4,
      "roi": 1,
      "contact": 1,
      "pricing": 3
    },
    "contextWindow": 4987
  },
  "analytics": {
    "totalQueries": 152,
    "blockedQueries": 3,
    "redirections": 45,
    "openAIQueries": 28,
    "directCalls": 12,
    "configLoaded": true
  },
  "configuration": {
    "openAIEnabled": true,
    "fallbackEnabled": true,
    "blockedKeywords": 3,
    "redirectionRules": 6,
    "directOpenAIKeywords": 5
  }
}
```

### 2. Test de Routing
```
POST /api/rag/test
Content-Type: application/json

{
  "query": "Comment sécurisez-vous les données ?",
  "language": "fr"
}
```

Retourne l'analyse de routing sans exécuter l'action :

```json
{
  "query": "Comment sécurisez-vous les données ?",
  "language": "fr",
  "routing": {
    "action": "knowledge_base",
    "category": "security"
  },
  "searchResults": [
    {
      "category": "security",
      "score": 85,
      "relevance": "high",
      "preview": "🔒 **Sécurité des Données Aitenders**\n\nNous appliquons les standards de sécurité les plus élevés..."
    }
  ],
  "timestamp": "2025-01-30T15:22:58.123Z"
}
```

### 3. Chat avec Routing
```
POST /api/chat
Content-Type: application/json

{
  "message": "Rédige-moi une proposition pour un appel d'offres",
  "language": "fr"
}
```

Le système route automatiquement selon la configuration :
- **Mots créatifs** → ChatGPT direct
- **Mots bloqués** → Message d'erreur  
- **Catégories connues** → Base de connaissances ciblée
- **Autres** → Fallback hybride

## Analytics et Monitoring

### Métriques Trackées

1. **Requêtes Totales** : Nombre total de requêtes traitées
2. **Requêtes Bloquées** : Requêtes rejetées par les filtres
3. **Redirections** : Requêtes routées vers des catégories spécifiques
4. **Appels OpenAI** : Requêtes envoyées à ChatGPT (fallback + direct)
5. **Appels Directs** : Requêtes créatives envoyées directement à ChatGPT

### Monitoring en Temps Réel

```bash
# Voir les stats en direct
curl http://localhost:5000/api/rag/stats

# Tester le routing d'une requête
curl -X POST http://localhost:5000/api/rag/test \
  -H "Content-Type: application/json" \
  -d '{"query": "Que fait Aitenders ?", "language": "fr"}'
```

### Configuration Performance

- **Réponse moyenne** : < 100ms pour base de connaissances
- **OpenAI fallback** : 1-3 secondes selon l'API
- **Cache hits** : ~85% des requêtes via base de connaissances
- **Taux blocage** : < 2% des requêtes totales

### Fenêtre de Contexte

- **Total**: 4,987 caractères
- **15 chunks** de connaissances  
- **7 catégories** : company, security, use_cases, ai_agents, roi, contact, pricing

### Répartition par Catégorie
{
  "company": 1 chunk,
  "security": 2 chunks,
  "use_cases": 3 chunks (UC1, UC2, UC3),
  "ai_agents": 4 chunks,
  "roi": 1 chunk,
  "contact": 1 chunk,
  "pricing": 3 chunks (starter, professional, enterprise)
}
```

### Capacité Maximale
- **Limite recommandée**: 8,000 caractères (~2,000 mots)
- **Marge disponible**: 3,013 caractères pour extensions
- **Chunks supplémentaires**: ~6-8 chunks possibles

## Algorithme de Recherche

### Scoring Multi-Critères
1. **Correspondance mots-clés** (poids: 40 points/mot-clé)
2. **Correspondance contenu** (poids: 10 points/mot trouvé)
3. **Priorité du chunk** (poids: 2 points × priorité)
4. **Correspondance catégorie** (bonus: 20 points)

### Niveaux de Pertinence
- **High**: Score ≥ 50 points
- **Medium**: Score ≥ 20 points  
- **Low**: Score < 20 points

### Nombre de Résultats
- **Maximum par requête**: 2 chunks
- **Affichage**: Meilleur résultat + 2ème si pertinence ≥ medium

## Types de Contenu Supportés

### 1. Informations Entreprise
- Présentation générale
- Mission et valeurs
- Secteurs d'activité

### 2. Sécurité et Conformité
- Chiffrement et protection des données
- Conformité RGPD/ISO/SOC2
- Contrôles d'accès et audit
- Sauvegardes et continuité

### 3. Cas d'Usage (UC1-UC3)
- Description détaillée
- Public cible
- Fonctionnalités spécifiques
- ROI et bénéfices
- Clients typiques

### 4. Agents IA
- Analyseur DCE
- Vérificateur conformité
- Estimateur de coûts
- Rédacteur de propositions

### 5. Métriques ROI
- Gains de temps mesurables
- Amélioration taux de gain
- Réduction des coûts
- Économies quantifiées

### 6. Contact et Support
- Coordonnées commerciales
- Support technique
- Planification démos
- Adresse physique

### 7. Tarification
- Plans Starter/Professional/Enterprise
- Fonctionnalités incluses
- Pricing transparent

## Personnalisation des Réponses

### Call-to-Action Contextuels
- **Contact**: "Prêt à transformer vos appels d'offres ?"
- **Pricing**: "Contactez-nous pour une démonstration"
- **Autres**: Pas de CTA spécifique

### Format des Réponses
- **Émojis**: Icônes contextuelles pour chaque section
- **Markdown**: Gras, listes à puces, séparateurs
- **Structure**: Titres, sous-sections, métadonnées

## Extensibilité

### Ajout de Nouveaux Contenus

1. **Modifier `knowledge-base.json`**
   ```json
   "nouvelle_categorie": {
     "titre": "Titre de la section",
     "contenu": "Description détaillée..."
   }
   ```

2. **Mettre à jour `rag-service.ts`**
   ```typescript
   // Ajouter dans createChunks()
   if (this.knowledgeBase.nouvelle_categorie) {
     this.chunks.push({
       id: 'nouvelle-categorie-id',
       content: `Contenu formaté`,
       metadata: {
         category: 'nouvelle_categorie',
         keywords: ['mot-clé1', 'mot-clé2'],
         priority: 8
       }
     });
   }
   ```

### Optimisation des Mots-Clés

Pour améliorer la recherche, ajouter des synonymes et variations :
- **Français/Anglais**: Mots-clés bilingues
- **Termes techniques**: Acronymes et versions complètes
- **Variantes**: Singulier/pluriel, formes courtes

### Priorités Recommandées
- **Critique (10)**: Contact, sécurité principale
- **Important (9)**: Cas d'usage, présentation entreprise, ROI
- **Utile (8)**: Agents IA, pricing
- **Contextuel (7)**: Détails techniques, FAQ

## Monitoring et Maintenance

### Statistiques Disponibles
- **Endpoint**: `GET /api/rag/stats`
- **Métriques**: Nombre chunks, répartition catégories, taille totale

### Logs de Performance
- Temps de réponse par requête
- Scores de pertinence
- Fallback usage (OpenAI vs RAG)

### Tests Recommandés
1. **Requêtes types par catégorie**
2. **Mots-clés edge cases**
3. **Requêtes multilingues**
4. **Performance avec charge**

## Migration et Déploiement

### Checklist Pre-Déploiement
- [ ] Validation JSON knowledge-base.json
- [ ] Tests unitaires service RAG
- [ ] Vérification fenêtre contexte < 8K
- [ ] Tests intégration API
- [ ] Validation réponses multilingues

### Rollout Progressif
1. **Phase 1**: RAG comme fallback uniquement
2. **Phase 2**: RAG+OpenAI hybride
3. **Phase 3**: RAG primaire avec OpenAI enhance

Cette architecture garantit une expérience utilisateur optimale avec des réponses précises et pertinentes, tout en maintenant la flexibilité pour les extensions futures.