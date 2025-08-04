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

    const wow_summary = {
      WOW1_total: resultats_petits.WOW1 + resultats_moyens.WOW1 + resultats_grands.WOW1,
      WOW2_total: resultats_petits.WOW2 + resultats_moyens.WOW2 + resultats_grands.WOW2,
      WOW3_total: resultats_petits.WOW3 + resultats_moyens.WOW3 + resultats_grands.WOW3
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

    let rapport = `🚀 **RÉSULTATS SIMULATEUR AITENDERS**\n\n`;
    
    // Aperçu rapide
    rapport += `💰 **Économie annuelle estimée : ${this.formatCurrency(resultats.total_annuel)}**\n\n`;

    // Détail par taille si email fourni
    if (data.email) {
      rapport += `📌 **Détail par taille de projet**\n\n`;

      if (data.nb_petits > 0) {
        rapport += `**Petits projets (${data.nb_petits})**\n`;
        rapport += `• ROI moyen : ${resultats.petits.ROI}x\n`;
        rapport += `• Économie annuelle : ${this.formatCurrency(resultats.petits.Total_Annuel)}\n\n`;
      }

      if (data.nb_moyens > 0) {
        rapport += `**Projets moyens (${data.nb_moyens})**\n`;
        rapport += `• ROI moyen : ${resultats.moyens.ROI}x\n`;
        rapport += `• Économie annuelle : ${this.formatCurrency(resultats.moyens.Total_Annuel)}\n\n`;
      }

      if (data.nb_grands > 0) {
        rapport += `**Grands projets (${data.nb_grands})**\n`;
        rapport += `• ROI moyen : ${resultats.grands.ROI}x\n`;
        rapport += `• Économie annuelle : ${this.formatCurrency(resultats.grands.Total_Annuel)}\n\n`;
      }

      rapport += `🚀 **Synthèse consolidée**\n\n`;
      rapport += `**Économie totale annuelle : ${this.formatCurrency(resultats.total_annuel)}**\n\n`;
      rapport += `**Décomposition par WOW**\n`;
      rapport += `• WOW1 (Analyse & Structuration IA) : ${this.formatCurrency(resultats.wow_summary.WOW1_total)}\n`;
      rapport += `• WOW2 (Collaboration & Pilotage) : ${this.formatCurrency(resultats.wow_summary.WOW2_total)}\n`;
      rapport += `• WOW3 (Écriture & Validation) : ${this.formatCurrency(resultats.wow_summary.WOW3_total)}\n\n`;
      
      rapport += `✅ **Vos données ont été enregistrées pour ${data.email}**`;
    } else {
      rapport += `⚠️ **Entrez votre email pour débloquer les résultats détaillés.**`;
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