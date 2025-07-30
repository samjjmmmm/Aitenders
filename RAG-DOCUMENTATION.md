# Système RAG Aitenders - Documentation Technique

## Vue d'ensemble

Le système RAG (Retrieval-Augmented Generation) d'Aitenders est conçu pour fournir des réponses intelligentes et contextuelles basées sur notre base de connaissances complète. Il combine recherche sémantique et génération de réponses personnalisées.

## Architecture du Système

### Composants Principaux

1. **Base de Connaissances** (`server/knowledge-base.json`)
   - Stockage structuré de toutes les informations Aitenders
   - Format JSON hiérarchique avec métadonnées
   - Mise à jour facile et extensible

2. **Service RAG** (`server/rag-service.ts`)
   - Moteur de recherche sémantique
   - Chunking intelligent du contenu
   - Calcul de scores de pertinence
   - Génération de réponses contextuelles

3. **Intégration API** (`server/routes.ts`)
   - Fallback automatique quand OpenAI échoue
   - Session management compatible
   - Routes d'administration pour statistiques

## Fenêtre de Contexte

### Taille Actuelle
- **Total**: 4,987 caractères
- **15 chunks** de connaissances
- **7 catégories** : company, security, use_cases, ai_agents, roi, contact, pricing

### Répartition par Catégorie
```json
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