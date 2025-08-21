import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, CheckCircle, PlayCircle, FileText, Clock, Users, Target, Lightbulb, BarChart3, Shield, Zap, Brain, Search, Users2, TrendingUp, AlertTriangle, Award, Star, ExternalLink, ChevronRight, BookOpen, Video } from "lucide-react";

// Import all required assets
import uc3HeroImage from "@assets/HERO UC 3_1755765733932.png";
import wow1 from "@assets/wow 1_1755783954069.png";
import wow2 from "@assets/wow 2_1755784888651.png";
import UC1Image from "@assets/UC1_1755784114648.png";

// Import company logos
import equansLogo from "@assets/Equans_1753711339292.png";
import bouyguesLogo from "@assets/Bouyges_1753711339292.png";
import colasLogo from "@assets/Colas_1753711339292.png";

export default function UC3Page() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const features = [
    {
      id: 'feature-1',
      title: 'Analyse Contextuelle IA',
      description: 'IA avancée pour détecter automatiquement les exigences critiques',
      icon: <Brain className="w-6 h-6" />,
      details: 'Notre IA analyse en profondeur chaque document pour identifier les clauses importantes et les risques potentiels.'
    },
    {
      id: 'feature-2', 
      title: 'Pilotage Multi-équipes',
      description: 'Coordination parfaite entre toutes les parties prenantes',
      icon: <Users2 className="w-6 h-6" />,
      details: 'Synchronisez automatiquement le travail de vos équipes avec des workflows intelligents.'
    },
    {
      id: 'feature-3',
      title: 'Validation Conformité',
      description: 'Vérification automatique de la conformité réglementaire',
      icon: <Shield className="w-6 h-6" />,
      details: 'Assurez-vous que tous vos documents respectent les normes et réglementations en vigueur.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Professional SaaS Design */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden" style={{ backgroundColor: '#EBF2FD' }}>
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large flowing gradient blob - top left */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F5F9FE 0%, #EBF2FD 40%, #C3D9F8 70%, transparent 100%)'
               }}></div>
          
          {/* Medium accent blob - center right */}
          <div className="absolute top-1/3 -right-16 w-80 h-80 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'radial-gradient(circle, #C3D9F8 0%, #3880E8 30%, transparent 70%)'
               }}></div>
          
          {/* Small atmospheric accent - bottom */}
          <div className="absolute -bottom-16 left-1/4 w-64 h-64 rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'linear-gradient(135deg, #FBFCFF 0%, #F5F9FE 50%, #EBF2FD 100%)'
               }}></div>
          
          {/* Flowing wave accent - mobile optimized */}
          <div className="absolute top-1/2 left-0 w-full h-32 opacity-15 blur-xl lg:opacity-20"
               style={{
                 background: 'linear-gradient(90deg, transparent 0%, #F5F9FE 20%, #C3D9F8 40%, #EBF2FD 60%, transparent 100%)'
               }}></div>
        </div>
        
        <div className="content-boundary relative z-10">
          {/* Content Section */}
          <div className="text-center">
              <div className="mb-12">
                <Badge className="mb-8 md:mb-12 lg:mb-18 bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-800 border-purple-200/50 text-4xl font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm whitespace-nowrap">Maitrisez Vos Offres Complexes</Badge>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  Chaque exigence traitée, <span className="text-purple-600">chaque risque maîtrisé</span>
                </h1>
                
                <p className="text-lg md:text-xl mb-16 leading-relaxed font-light text-[#000000]"> <span className="text-purple-300">La seule plateforme pensée pour orchestrer les grands appels d'offres complexes :</span> analyse IA de milliers de pages, capture et validation des exigences, cohérence multi‑équipes et pilotage sans faille. 
                Vous éliminez les angles morts, sécurisez la <span className="text-purple-bold600">conformité </span>et gagnez des jours critiques pour livrer une offre solide et compétitive.</p>
              </div>

              {/* CTA Buttons - Side by Side */}
              <div className="mb-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-7 text-2xl font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                >
                  Réservez une Démo
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50/80 px-6 py-4 text-xl font-medium underline decoration-2 underline-offset-4 rounded-2xl transition-all duration-300"
                >
                  Téléchargez le cas d'usage →
                </Button>
              </div>

              {/* Trust Elements */}
              <div className="border-t border-gray-100 pt-8">
                <p className="text-sm text-gray-500 mb-6">Mentionné parmi les 25 meilleures solutions d'IA et de ML</p>
                
                {/* Customer Logos / Trust Indicators */}
                <div className="flex items-center justify-center space-x-8">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="flex -space-x-2 mr-3">
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                        <img 
                          src={equansLogo} 
                          alt="Equans logo" 
                          className="w-10 h-6 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                        <img 
                          src={bouyguesLogo} 
                          alt="Bouygues logo" 
                          className="w-10 h-6 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                        <img 
                          src={colasLogo} 
                          alt="Colas logo" 
                          className="w-10 h-6 object-contain"
                        />
                      </div>
                    </div>
                    <span>Plébiscité par les leaders du secteur</span>
                  </div>
                </div>
              </div>
          </div>

          {/* Hero Image - Bottom */}
          <div className="w-full max-w-7xl mx-auto mt-8">
              <div className="flex justify-center items-center">
                <div className="relative flex justify-center items-center h-full px-0 py-6">
                  <img
                    src={uc3HeroImage}
                    alt="Aitenders UC3 Interface - Complex Tender Analysis Dashboard"
                    className="block w-[640px] md:w-[760px] lg:w-[880px] max-w-full h-auto select-none pointer-events-none object-contain"
                    style={{
                      transform: 'scale(1.42)',
                      transformOrigin: 'center',
                      imageRendering: 'auto',
                      filter: 'none'
                    }}
                  />
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Pain Points Section - Main Feature Card + Supporting Cards */}
      <section className="py-16 md:py-20 lg:py-24 content-boundary bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50/20 relative overflow-hidden">
        {/* Subtle Abstract Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large atmospheric blob - right side */}
          <div className="absolute top-16 -right-40 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #F5F9FE 0%, #C3D9F8 50%, #EBF2FD 80%, transparent 100%)'
               }}></div>
          
          {/* Flowing accent - left side */}
          <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full opacity-20 blur-2xl"
               style={{
                 background: 'linear-gradient(135deg, #EBF2FD 0%, #C3D9F8 60%, transparent 100%)'
               }}></div>
          
          {/* Small directional accent */}
          <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full opacity-15 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, #3880E8 0%, #C3D9F8 40%, transparent 80%)'
               }}></div>
          
          {/* Mobile-optimized wave */}
          <div className="absolute bottom-0 left-0 w-full h-24 opacity-10 blur-xl lg:opacity-15"
               style={{
                 background: 'linear-gradient(90deg, #F5F9FE 0%, transparent 30%, #FBFCFF 70%, #EBF2FD 100%)'
               }}></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <Badge className="mb-6 lg:mb-8 bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-800 border-purple-200/50 text-lg font-medium px-4 py-2 rounded-full shadow-sm">
              Le défi des offres complexes
            </Badge>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Master complex bids before they master you
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              Les appels d'offres de grande envergure présentent des défis uniques qui peuvent compromettre votre compétitivité. 
              Découvrez comment nos clients transforment leur approche stratégique.
            </p>
          </div>
          
          {/* Main Feature Card - Hero Style */}
          <div className="mb-12 lg:mb-16 relative">
            <Card className="overflow-hidden bg-white/95 backdrop-blur-sm border border-gray-200/60 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                  {/* Subtle accent gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-transparent pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <Badge className="mb-4 bg-gradient-to-r from-red-50 to-red-100 text-red-700 border-red-200/50 text-base font-medium px-3 py-1 rounded-full">
                        Problème Principal
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                      Les équipes perdent le fil dans la complexité des exigences multiples
                    </h3>
                    
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                      Chaque grand appel d'offres génère des centaines de pages d'exigences techniques, juridiques et commerciales. 
                      Vos équipes passent 60% de leur temps à chercher l'information critique plutôt qu'à construire une réponse gagnante.
                    </p>
                    
                    {/* Key Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">60% du temps perdu en recherche</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">Risques de non-conformité élevés</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">Coordination multi-équipes difficile</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">Délais de réponse sous pression</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Voir la Solution
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Démo 3 min
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Visual */}
                <div className="relative flex items-center justify-center p-6 lg:p-8 bg-gradient-to-br from-purple-50 to-purple-100/50">
                  <div className="relative w-full max-w-md">
                    <img
                      src={wow1}
                      alt="Complex tender analysis challenge visualization"
                      className="w-full h-auto rounded-lg shadow-lg"
                      style={{
                        transform: 'scale(1.05)',
                        transformOrigin: 'center'
                      }}
                    />
                    
                    {/* Floating accent elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shadow-lg">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center shadow-md">
                      <Clock className="w-3 h-3 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Supporting Pain Point Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Pain Point 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200/60 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-6 h-6 text-orange-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Recherche d'informations inefficace
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Vos équipes perdent un temps précieux à fouiller dans des documents éparpillés pour retrouver les exigences techniques et les clauses critiques.
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Documents non structurés et éparpillés
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Temps de recherche multiplié par 3
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Informations critiques manquées
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-purple-600 font-medium text-sm group-hover:text-purple-700 transition-colors duration-300">
                  En savoir plus
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
            
            {/* Pain Point 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200/60 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users2 className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Coordination multi-équipes complexe
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    La collaboration entre les équipes techniques, juridiques et commerciales devient un cauchemar logistique avec des versions multiples et des exigences contradictoires.
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Versions multiples non synchronisées
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Communication fragmentée
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Responsabilités floues
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-purple-600 font-medium text-sm group-hover:text-purple-700 transition-colors duration-300">
                  En savoir plus
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Features Section */}
      <section className="py-16 md:py-20 lg:py-24 content-boundary bg-white relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl bg-gradient-to-br from-purple-400 to-blue-400"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl bg-gradient-to-br from-blue-400 to-purple-400"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <Badge className="mb-6 lg:mb-8 bg-gradient-to-r from-green-50 to-green-100/80 text-green-800 border-green-200/50 text-lg font-medium px-4 py-2 rounded-full shadow-sm">
              La solution Aitenders
            </Badge>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Transformez votre approche des offres complexes
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Notre plateforme IA révolutionne la gestion des grands appels d'offres en automatisant l'analyse, 
              structurant les exigences et coordonnant vos équipes pour une réponse optimale.
            </p>
          </div>
          
          {/* Interactive Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {features.map((feature, index) => (
              <Dialog key={feature.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-200/60 bg-white/90 backdrop-blur-sm h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <div className="text-purple-600">
                            {feature.icon}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-700 leading-relaxed flex-grow">
                          {feature.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center text-purple-600 font-medium text-sm group-hover:text-purple-700 transition-colors duration-300 mt-auto">
                        Découvrir
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                        <div className="text-purple-600">
                          {feature.icon}
                        </div>
                      </div>
                      {feature.title}
                    </DialogTitle>
                    <DialogDescription className="text-base leading-relaxed pt-4">
                      {feature.details}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="flex gap-3 mt-6">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                      Planifier une démo
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Documentation
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          
          {/* Main Solution Showcase */}
          <Card className="overflow-hidden bg-gradient-to-br from-white to-purple-50/30 border border-gray-200/60 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Visual */}
              <div className="relative p-8 lg:p-12 bg-gradient-to-br from-purple-50 to-purple-100/50 flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                  <img
                    src={wow2}
                    alt="Aitenders solution for complex tender management"
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                  
                  {/* Floating success indicators */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-xl">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="absolute top-1/2 -right-4 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shadow-lg">
                    <Zap className="w-4 h-4 text-purple-600" />
                  </div>
                </div>
              </div>
              
              {/* Right Side - Content */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-6">
                  <Badge className="mb-6 bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-200/50 text-base font-medium px-3 py-2 rounded-full">
                    Résultats Prouvés
                  </Badge>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Réduisez de 70% le temps d'analyse des appels d'offres complexes
                  </h3>
                  
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    Nos clients transforment leur approche des grands projets grâce à notre IA qui structure automatiquement 
                    les exigences, détecte les risques et coordonne les équipes en temps réel.
                  </p>
                </div>
                
                {/* Key Benefits */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">Analyse automatique de milliers de pages en quelques heures</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">Coordination multi-équipes simplifiée et traçable</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">Conformité réglementaire garantie par l'IA</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">ROI moyen de 300% dès la première année</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Démarrer maintenant
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    <Video className="w-4 h-4 mr-2" />
                    Voir une démo
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Proof & Trust Section */}
      <section className="py-16 md:py-20 lg:py-24 content-boundary bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="mb-6 lg:mb-8 bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 border-blue-200/50 text-lg font-medium px-4 py-2 rounded-full shadow-sm">
            Ils nous font confiance
          </Badge>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Rejoignez les leaders qui transforment leurs appels d'offres
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            Des entreprises de premier plan utilisent Aitenders pour optimiser leurs processus de réponse aux appels d'offres complexes.
          </p>
        </div>
        
        {/* Customer Testimonial Card */}
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border border-gray-200/60 shadow-2xl mb-16">
          <CardContent className="p-8 md:p-12 lg:p-16 text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-900 leading-relaxed font-medium italic mb-8">
                "Aitenders a révolutionné notre approche des grands appels d'offres. Nous avons réduit de 70% 
                le temps d'analyse et amélioré significativement notre taux de succès sur les projets complexes."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Marie Dubois</div>
                  <div className="text-gray-600">Directrice Offres, Major Construction Group</div>
                </div>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">300%</div>
                <div className="text-gray-600 text-sm">ROI moyen première année</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">70%</div>
                <div className="text-gray-600 text-sm">Réduction temps d'analyse</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600 text-sm">Taux de satisfaction client</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Company Logos */}
        <div className="flex items-center justify-center space-x-12 opacity-60">
          <img src={equansLogo} alt="Equans" className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          <img src={bouyguesLogo} alt="Bouygues" className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          <img src={colasLogo} alt="Colas" className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 content-boundary bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-white"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl bg-purple-300"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight tracking-tight">
            Prêt à transformer votre approche des appels d'offres complexes ?
          </h2>
          
          <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Rejoignez les entreprises leaders qui optimisent leurs processus avec Aitenders. 
            Démarrez votre transformation dès aujourd'hui avec une démonstration personnalisée.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 font-bold px-12 py-6 text-xl"
            >
              Réserver une démo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-700 transition-all duration-300 px-8 py-6 text-xl"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Télécharger le guide
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-75">
            ✓ Démo personnalisée de 30 minutes ✓ Analyse de votre cas d'usage ✓ Sans engagement
          </div>
        </div>
      </section>
    </div>
  );
}