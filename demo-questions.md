# Simulateur ROI Aitenders - Questions Structurées

## Question 1: Volume et Types de Projets
**"Pour mieux calculer votre ROI, pouvez-vous me décrire le volume de projets sur lesquels vous soumissionnez annuellement ?"**

Exemples de réponses attendues :
- "100 petits projets de 5M€ environ"
- "50 projets moyens de 20M€" 
- "5 grands projets de 100M€"

## Question 2: Équipes et Ressources
**"Combien de personnes travaillent sur la préparation des appels d'offres dans votre organisation ?"**

Exemples de réponses :
- "2-3 personnes à temps partiel"
- "5 personnes dédiées"
- "15 personnes réparties sur plusieurs équipes"

## Question 3: Temps de Préparation
**"En moyenne, combien de temps votre équipe consacre-t-elle à la préparation d'une réponse d'appel d'offres ?"**

Exemples de réponses :
- "2-3 jours pour les petits projets"
- "2 semaines pour les projets moyens"
- "1-2 mois pour les grands projets"

## Question 4: Email de Contact
**"Merci ! Pour finaliser votre rapport ROI personnalisé, pouvez-vous me communiquer votre adresse email ?"**

Exemple : "nom@entreprise.com"

## Calcul ROI - Formules Python

```python
# Calculs basés sur les réponses utilisateur
temps_economise_par_projet = temps_actuel * 0.70  # 70% d'économie
gain_annuel = nombre_projets * temps_economise_par_projet * cout_horaire_moyen
roi_pourcentage = (gain_annuel / cout_aitenders_annuel) * 100

# Rapport structuré WOW1/WOW2/WOW3
WOW1 = f"Économie de {temps_economise_total} heures par an"
WOW2 = f"ROI de {roi_pourcentage}% la première année"
WOW3 = f"Gain de productivité de {gain_productivite}%"
```

## Format de Sortie Attendu

```
🎯 **VOTRE RAPPORT ROI PERSONNALISÉ**

**WOW1**: Économie de 2,400 heures par an
**WOW2**: ROI de 340% la première année  
**WOW3**: Gain de productivité de 70%

📊 **DÉTAILS CALCULS**
• Volume traité: 100 projets/an
• Temps économisé: 70% par projet
• Équivalent: 1.2 ETP libérés
• Valeur financière: 240,000€/an

📧 Rapport détaillé envoyé à votre email
```