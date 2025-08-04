/**
 * Aitenders ROI Simulator Final - Nouvelle version basée sur le code Python
 * Simulateur One Voice Aitenders (Multi Cas d'Usage)
 */

interface ProjectData {
  nb_petits: number;
  montant_petit: number;
  nb_moyens: number;
  montant_moyen: number;
  nb_grands: number;
  montant_grand: number;
  email?: string;
}

interface ProjectResult {
  ROI: number;
  WOW1: number;
  WOW2: number;
  WOW3: number;
  Collaboration: number;
  Tracabilite: number;
  Conformite: number;
  Total_Par_Projet: number;
  Total_Annuel: number;
}

interface DetailedResults {
  petits: ProjectResult;
  moyens: ProjectResult;
  grands: ProjectResult;
  total_annuel: number;
  wow_summary: {
    WOW1_total: number;
    WOW2_total: number;
    WOW3_total: number;
    roi_global: number;
  };
}

class AitendersSimulatorFinal {
  private cout_jh = 600; // Coût journalier homme standard

  /**
   * Calcul pour un type de projet spécifique
   */
  private calculParProjet(taille: 'Petit' | 'Moyen' | 'Grand', nb_projets: number, montant_projet: number): ProjectResult {
    let duree_offre: number, nb_personnes: number;
    let repartition: { Analyse: number; Prix: number; Ecriture: number };
    let effort_realisation: number, gain_collab: number, gain_tracabilite: number, gain_conformite_pct: number;

    if (taille === "Petit") {
      duree_offre = 3;
      nb_personnes = 1.5;
      repartition = { Analyse: 0.20, Prix: 0.50, Ecriture: 0.30 };
      effort_realisation = 36;
      gain_collab = 0.70;
      gain_tracabilite = 0.65;
      gain_conformite_pct = 0.05;
    } else if (taille === "Moyen") {
      duree_offre = 12;
      nb_personnes = 3.5;
      repartition = { Analyse: 0.30, Prix: 0.30, Ecriture: 0.40 };
      effort_realisation = 144;
      gain_collab = 0.85;
      gain_tracabilite = 0.75;
      gain_conformite_pct = 0.007;
    } else { // Grand
      duree_offre = 48;
      nb_personnes = 15;
      repartition = { Analyse: 0.40, Prix: 0.20, Ecriture: 0.40 };
      effort_realisation = 2000;
      gain_collab = 0.95;
      gain_tracabilite = 0.80;
      gain_conformite_pct = 0.02;
    }

    // Calculs Offre
    const temps_total_offre = duree_offre * nb_personnes * 5;
    const cout_offre_base = temps_total_offre * this.cout_jh;
    const gain_analyse = temps_total_offre * repartition.Analyse * 0.50;
    const gain_prix = temps_total_offre * repartition.Prix * 0.30;
    const gain_ecriture = temps_total_offre * repartition.Ecriture * 0.40;
    const gain_total_offre = gain_analyse + gain_prix + gain_ecriture;
    const economies_offre = gain_total_offre * this.cout_jh;
    const cout_avec_aitenders = cout_offre_base - economies_offre;
    const roi_offre = Math.round(cout_offre_base / Math.max(cout_avec_aitenders, 1) * 10) / 10;

    // Calculs Réalisation
    const cout_realisation_base = effort_realisation * this.cout_jh;
    const economies_realisation = cout_realisation_base * gain_collab;

    // Calculs Traçabilité
    const gain_tracabilite_jh = temps_total_offre * gain_tracabilite;
    const economies_tracabilite = gain_tracabilite_jh * this.cout_jh;

    // Calculs Conformité
    const economies_conformite = montant_projet * gain_conformite_pct;

    // Totaux
    const economies_totales = economies_offre + economies_realisation + economies_tracabilite + economies_conformite;
    const economies_annuelles = economies_totales * nb_projets;

    return {
      ROI: roi_offre,
      WOW1: gain_analyse * this.cout_jh,
      WOW2: gain_prix * this.cout_jh + economies_realisation,
      WOW3: gain_ecriture * this.cout_jh,
      Collaboration: economies_realisation,
      Tracabilite: economies_tracabilite,
      Conformite: economies_conformite,
      Total_Par_Projet: economies_totales,
      Total_Annuel: economies_annuelles
    };
  }

  /**
   * Calcul complet pour tous les types de projets
   */
  public calculerROI(data: ProjectData): DetailedResults {
    const resultats_petits = this.calculParProjet("Petit", data.nb_petits, data.montant_petit);
    const resultats_moyens = this.calculParProjet("Moyen", data.nb_moyens, data.montant_moyen);
    const resultats_grands = this.calculParProjet("Grand", data.nb_grands, data.montant_grand);

    const total_annuel = resultats_petits.Total_Annuel + resultats_moyens.Total_Annuel + resultats_grands.Total_Annuel;

    // Calcul ROI global pondéré
    const nb_total_projets = (data.nb_petits || 0) + (data.nb_moyens || 0) + (data.nb_grands || 0);
    const roi_global = nb_total_projets > 0 ? 
      Math.round(((resultats_petits.ROI * (data.nb_petits || 0)) + 
                  (resultats_moyens.ROI * (data.nb_moyens || 0)) + 
                  (resultats_grands.ROI * (data.nb_grands || 0))) / nb_total_projets * 10) / 10 : 0;

    const wow_summary = {
      WOW1_total: resultats_petits.WOW1 + resultats_moyens.WOW1 + resultats_grands.WOW1,
      WOW2_total: resultats_petits.WOW2 + resultats_moyens.WOW2 + resultats_grands.WOW2,
      WOW3_total: resultats_petits.WOW3 + resultats_moyens.WOW3 + resultats_grands.WOW3,
      roi_global
    };

    return {
      petits: resultats_petits,
      moyens: resultats_moyens,
      grands: resultats_grands,
      total_annuel,
      wow_summary
    };
  }

  /**
   * Génère un rapport formaté pour l'affichage
   */
  public genererRapport(data: ProjectData): string {
    const resultats = this.calculerROI(data);

    let rapport = `📊 **SIMULATEUR ONE VOICE AITENDERS**\n\n`;
    
    // Aperçu immédiat (toujours visible)
    rapport += `🔍 **Aperçu immédiat**\n\n`;
    rapport += `💡 **ROI Productivité global : ${resultats.wow_summary.roi_global}x**\n`;
    rapport += `💰 **Économie annuelle estimée : ${this.formatCurrency(resultats.total_annuel)}**\n\n`;

    // Détails complets si email fourni
    if (data.email) {
      rapport += `✅ **Merci, voici vos résultats détaillés !**\n\n`;

      // WOW1 - Structuration IA & Analyse
      rapport += `🌍 **WOW1 – Structuration IA & Analyse**\n`;
      rapport += `• Gain total : ${this.formatCurrency(resultats.wow_summary.WOW1_total)}\n`;
      rapport += `• **Impacts :** Productivité (JH gagnés), Traçabilité (exigences couvertes), Sécurisation du démarrage.\n\n`;

      // WOW2 - Collaboration & Pilotage
      rapport += `🤝 **WOW2 – Collaboration & Pilotage**\n`;
      rapport += `• Gain total : ${this.formatCurrency(resultats.wow_summary.WOW2_total)}\n`;
      rapport += `• **Impacts :** Collaboration (+70% à +95%), versions gérées, arbitrages accélérés.\n\n`;

      // WOW3 - Écriture & Validation
      rapport += `📝 **WOW3 – Écriture & Validation**\n`;
      rapport += `• Gain total : ${this.formatCurrency(resultats.wow_summary.WOW3_total)}\n`;
      rapport += `• **Impacts :** Rédaction guidée, justifications automatiques, réduction du risque contractuel.\n\n`;

      // Synthèse détaillée par taille
      if (data.nb_petits > 0 || data.nb_moyens > 0 || data.nb_grands > 0) {
        rapport += `📌 **Détail par taille de projet**\n\n`;

        if (data.nb_petits > 0) {
          rapport += `**Petits projets (${data.nb_petits}) - ≈3 semaines, 1 pers.**\n`;
          rapport += `• ROI moyen : ${resultats.petits.ROI}x\n`;
          rapport += `• Économie annuelle : ${this.formatCurrency(resultats.petits.Total_Annuel)}\n\n`;
        }

        if (data.nb_moyens > 0) {
          rapport += `**Projets moyens (${data.nb_moyens}) - 1-3 mois, 2-5 pers.**\n`;
          rapport += `• ROI moyen : ${resultats.moyens.ROI}x\n`;
          rapport += `• Économie annuelle : ${this.formatCurrency(resultats.moyens.Total_Annuel)}\n\n`;
        }

        if (data.nb_grands > 0) {
          rapport += `**Grands projets (${data.nb_grands}) - >6 mois, 15 pers.+**\n`;
          rapport += `• ROI moyen : ${resultats.grands.ROI}x\n`;
          rapport += `• Économie annuelle : ${this.formatCurrency(resultats.grands.Total_Annuel)}\n\n`;
        }
      }

      rapport += `📌 **Synthèse Consolidée**\n`;
      rapport += `• **Économie totale annuelle : ${this.formatCurrency(resultats.total_annuel)}**`;
      
    } else {
      rapport += `⚠️ **Entrez votre email pour débloquer le détail des impacts par WOW.**`;
    }

    return rapport;
  }

  /**
   * Formate un montant en euros
   */
  private formatCurrency(amount: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }

  /**
   * Valide les données d'entrée
   */
  public validerDonnees(data: Partial<ProjectData>): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.nb_petits && !data.nb_moyens && !data.nb_grands) {
      errors.push("Au moins un type de projet doit être renseigné");
    }

    if (data.nb_petits && (!data.montant_petit || data.montant_petit < 1000000)) {
      errors.push("Le montant moyen par petit projet doit être d'au moins 1M€");
    }

    if (data.nb_moyens && (!data.montant_moyen || data.montant_moyen < 1000000)) {
      errors.push("Le montant moyen par projet moyen doit être d'au moins 1M€");
    }

    if (data.nb_grands && (!data.montant_grand || data.montant_grand < 50000000)) {
      errors.push("Le montant moyen par grand projet doit être d'au moins 50M€");
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }
}

export const aitendersSimulatorFinal = new AitendersSimulatorFinal();