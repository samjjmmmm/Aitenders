/**
 * Advanced Tender Time Loss Calculator
 * Calculates comprehensive ROI metrics for tender management optimization
 */

interface TenderMetrics {
  // Input data
  averageTenderValue: number;
  tendersPerMonth: number;
  hoursPerTender: number;
  teamSize: number;
  currentSuccessRate: number;
  hasCurrentTools: boolean;

  // Calculated results
  totalTimePerMonth: number;
  currentTimeLossValue: number;
  hoursDirectlySaved: number;
  directSavingsPerMonth: number;
  improvedSuccessRate: number;
  timeLossReduction: number;
  additionalRevenue: number;
  totalMonthlySavings: number;
  annualSavings: number;
  roiMultiplier: number;
  paybackPeriodMonths: number;
}

export class TenderTimeCalculator {
  private readonly HOURLY_COST = 85; // €/hour average cost
  private readonly AITENDERS_ANNUAL_COST = 150000; // €/year
  private readonly EFFICIENCY_IMPROVEMENT = 0.35; // 35% time saving
  private readonly SUCCESS_RATE_IMPROVEMENT = 0.25; // 25% better success rate
  private readonly TIME_LOSS_FACTOR = 0.6; // 60% of time on failed tenders is considered lost
  private readonly MAX_SUCCESS_RATE = 80; // Maximum realistic success rate

  /**
   * Calculate comprehensive tender metrics
   */
  public calculateMetrics(
    averageTenderValue: number,
    tendersPerMonth: number,
    hoursPerTender: number,
    teamSize: number,
    currentSuccessRate: number,
    hasCurrentTools: boolean = false
  ): TenderMetrics {
    
    // Basic calculations
    const totalTimePerMonth = tendersPerMonth * hoursPerTender;
    
    // Current time loss value (cost of time spent on unsuccessful tenders)
    const currentTimeLossValue = totalTimePerMonth * this.HOURLY_COST * 
      (1 - currentSuccessRate / 100) * this.TIME_LOSS_FACTOR;
    
    // Direct time savings with Aitenders
    const hoursDirectlySaved = totalTimePerMonth * this.EFFICIENCY_IMPROVEMENT;
    const directSavingsPerMonth = hoursDirectlySaved * this.HOURLY_COST;
    
    // Improved success rate calculation
    const improvedSuccessRate = Math.min(
      currentSuccessRate * (1 + this.SUCCESS_RATE_IMPROVEMENT),
      this.MAX_SUCCESS_RATE
    );
    
    // Time loss reduction due to better success rate
    const timeLossReduction = currentTimeLossValue * 
      (improvedSuccessRate - currentSuccessRate) / (100 - currentSuccessRate);
    
    // Additional revenue from better success rate
    const additionalRevenue = averageTenderValue * tendersPerMonth * 12 * 
      (improvedSuccessRate - currentSuccessRate) / 100;
    
    // Total monthly savings
    const totalMonthlySavings = directSavingsPerMonth + timeLossReduction;
    const annualSavings = totalMonthlySavings * 12;
    
    // ROI calculations
    const totalAnnualBenefit = annualSavings + additionalRevenue;
    const roiMultiplier = totalAnnualBenefit / this.AITENDERS_ANNUAL_COST;
    const paybackPeriodMonths = this.AITENDERS_ANNUAL_COST / 
      (totalMonthlySavings + additionalRevenue / 12);

    return {
      // Input data
      averageTenderValue,
      tendersPerMonth,
      hoursPerTender,
      teamSize,
      currentSuccessRate,
      hasCurrentTools,
      
      // Calculated results
      totalTimePerMonth,
      currentTimeLossValue,
      hoursDirectlySaved,
      directSavingsPerMonth,
      improvedSuccessRate,
      timeLossReduction,
      additionalRevenue,
      totalMonthlySavings,
      annualSavings,
      roiMultiplier,
      paybackPeriodMonths
    };
  }

  /**
   * Generate a detailed analysis report
   */
  public generateAnalysisReport(metrics: TenderMetrics, language: 'fr' | 'en' = 'fr'): string {
    if (language === 'fr') {
      return this.generateFrenchReport(metrics);
    } else {
      return this.generateEnglishReport(metrics);
    }
  }

  private generateFrenchReport(metrics: TenderMetrics): string {
    const formatCurrency = (value: number) => new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(value);

    const formatNumber = (value: number, decimals: number = 0) => 
      new Intl.NumberFormat('fr-FR', { maximumFractionDigits: decimals }).format(value);

    return `
🎯 **ANALYSE ROI AITENDERS - RÉSULTATS DÉTAILLÉS**

**📊 SITUATION ACTUELLE**
• Temps total consacré aux AO : ${formatNumber(metrics.totalTimePerMonth)} heures/mois
• Coût des heures perdues : ${formatCurrency(metrics.currentTimeLossValue)}/mois
• Taux de succès actuel : ${formatNumber(metrics.currentSuccessRate, 1)}%

**⚡ GAINS AVEC AITENDERS**

**Économies directes de temps :**
• Heures économisées : ${formatNumber(metrics.hoursDirectlySaved)} h/mois
• Valeur économisée : ${formatCurrency(metrics.directSavingsPerMonth)}/mois

**Amélioration performance :**
• Nouveau taux de succès : ${formatNumber(metrics.improvedSuccessRate, 1)}%
• Réduction pertes de temps : ${formatCurrency(metrics.timeLossReduction)}/mois

**💰 BÉNÉFICES FINANCIERS**
• **Économies totales/mois : ${formatCurrency(metrics.totalMonthlySavings)}**
• **Économies annuelles : ${formatCurrency(metrics.annualSavings)}**
• **CA additionnel/an : ${formatCurrency(metrics.additionalRevenue)}**

**📈 RETOUR SUR INVESTISSEMENT**
• **ROI : ${formatNumber(metrics.roiMultiplier, 1)}x**
• **Amortissement : ${formatNumber(metrics.paybackPeriodMonths, 1)} mois**

---
*Investissement Aitenders : ${formatCurrency(this.AITENDERS_ANNUAL_COST)}/an*

**🎉 Veuillez fournir vos informations pour recevoir votre rapport détaillé !**
    `.trim();
  }

  private generateEnglishReport(metrics: TenderMetrics): string {
    const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(value);

    const formatNumber = (value: number, decimals: number = 0) => 
      new Intl.NumberFormat('en-US', { maximumFractionDigits: decimals }).format(value);

    return `
🎯 **AITENDERS ROI ANALYSIS - DETAILED RESULTS**

**📊 CURRENT SITUATION**
• Total time spent on tenders: ${formatNumber(metrics.totalTimePerMonth)} hours/month
• Cost of lost time: ${formatCurrency(metrics.currentTimeLossValue)}/month
• Current success rate: ${formatNumber(metrics.currentSuccessRate, 1)}%

**⚡ GAINS WITH AITENDERS**

**Direct time savings:**
• Hours saved: ${formatNumber(metrics.hoursDirectlySaved)} h/month
• Value saved: ${formatCurrency(metrics.directSavingsPerMonth)}/month

**Performance improvement:**
• New success rate: ${formatNumber(metrics.improvedSuccessRate, 1)}%
• Time loss reduction: ${formatCurrency(metrics.timeLossReduction)}/month

**💰 FINANCIAL BENEFITS**
• **Total savings/month: ${formatCurrency(metrics.totalMonthlySavings)}**
• **Annual savings: ${formatCurrency(metrics.annualSavings)}**
• **Additional revenue/year: ${formatCurrency(metrics.additionalRevenue)}**

**📈 RETURN ON INVESTMENT**
• **ROI: ${formatNumber(metrics.roiMultiplier, 1)}x**
• **Payback period: ${formatNumber(metrics.paybackPeriodMonths, 1)} months**

---
*Aitenders investment: ${formatCurrency(this.AITENDERS_ANNUAL_COST)}/year*

**🎉 Please provide your information to receive your detailed report!**
    `.trim();
  }

  /**
   * Calculate team productivity metrics
   */
  public calculateTeamProductivity(
    teamSize: number,
    hoursPerTender: number,
    tendersPerMonth: number,
    successRate: number
  ): {
    hoursPerPersonPerMonth: number;
    successfulTendersPerPerson: number;
    efficiencyScore: number;
    productivityLevel: 'low' | 'medium' | 'high' | 'excellent';
  } {
    const totalHours = hoursPerTender * tendersPerMonth;
    const hoursPerPersonPerMonth = totalHours / teamSize;
    const successfulTendersPerPerson = (tendersPerMonth * successRate / 100) / teamSize;
    
    // Calculate efficiency score (0-100)
    const baseEfficiency = Math.min(successRate, 60); // Max 60 points for success rate
    const timeEfficiency = Math.max(0, 40 - (hoursPerTender - 20) * 2); // Max 40 points for time efficiency
    const efficiencyScore = baseEfficiency + timeEfficiency;
    
    // Determine productivity level
    let productivityLevel: 'low' | 'medium' | 'high' | 'excellent';
    if (efficiencyScore >= 80) productivityLevel = 'excellent';
    else if (efficiencyScore >= 60) productivityLevel = 'high';
    else if (efficiencyScore >= 40) productivityLevel = 'medium';
    else productivityLevel = 'low';

    return {
      hoursPerPersonPerMonth,
      successfulTendersPerPerson,
      efficiencyScore,
      productivityLevel
    };
  }
}

export const tenderTimeCalculator = new TenderTimeCalculator();