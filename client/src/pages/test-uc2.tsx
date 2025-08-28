export default function TestUC2Page() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Simple Header */}
      <header className="bg-[#e7e9ec] px-16 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-16 h-8 bg-black rounded"></div>
        </div>
        <button className="bg-[#112646] text-white px-6 py-2 rounded-full text-sm font-medium">
          Démo
        </button>
      </header>

      {/* Hero Section */}
      <section className="bg-white flex flex-col items-center min-h-screen">
        {/* Placeholder Background Image */}
        <div className="flex-1 bg-gray-300 w-full relative min-h-[600px]"></div>
        
        {/* Content Section */}
        <div className="px-16 py-20 flex justify-center items-start gap-20 w-full">
          <div className="max-w-7xl flex-1 flex flex-col items-start gap-20 w-full">
            <div className="flex items-start gap-20 w-full">
              {/* Left Column - Headline */}
              <div className="flex-1 flex flex-col items-start w-full">
                <h1 className="text-black font-bold text-7xl leading-tight tracking-tight">
                  Des réponses structurées en 48h
                </h1>
              </div>
              
              {/* Right Column - Description & Actions */}
              <div className="flex-1 flex flex-col items-start gap-8 w-full">
                <p className="text-black text-lg font-normal leading-relaxed">
                  La plateforme dédiée aux projets 5–50 M€ qui automatise analyse, rédaction et validation collaborative.
                </p>
                
                <div className="flex items-start gap-4">
                  <button className="bg-[#112646] text-white rounded-full px-6 py-3 shadow-lg hover:bg-[#0f1f3a] font-medium">
                    Réservez une démo
                  </button>
                  
                  <button className="border-2 border-black bg-transparent rounded-full px-6 py-3 text-black hover:bg-gray-50 font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-16 py-28 flex flex-col items-center gap-20">
        <div className="max-w-7xl flex flex-col items-start gap-20">
          <div className="flex items-start gap-20 w-full">
            <div className="flex-1 flex flex-col items-start gap-4">
              <h2 className="text-black text-5xl font-bold leading-tight tracking-tight">
                Votre offre, 100% claire, 0% surprises
              </h2>
            </div>
            
            <div className="flex-1 flex flex-col items-start gap-6">
              <p className="text-black text-lg font-normal leading-relaxed">
                Sur les projets moyens, vos équipes jonglent avec délais serrés, clauses cachées et versions dispersées. 
                Avec Aitenders, structurez vos dossiers dès J+1.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="flex justify-center items-start gap-12 w-full">
            {/* Feature Card 1 */}
            <div className="flex-1 flex flex-col items-start gap-8 p-8">
              <div className="flex flex-col items-start gap-6">
                <div className="w-12 h-12 bg-black rounded"></div>
                <h3 className="text-black text-3xl font-bold">
                  Structuration automatique
                </h3>
                <p className="text-black text-base font-normal">
                  Analysez et structurez vos appels d'offres instantanément.
                </p>
              </div>
              
              <button className="rounded-full flex items-center gap-2 text-black font-medium">
                <span>Start</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Feature Card 2 */}
            <div className="flex-1 flex flex-col items-start gap-8 p-8">
              <div className="flex flex-col items-start gap-6">
                <div className="w-12 h-12 bg-black rounded"></div>
                <h3 className="text-black text-3xl font-bold">
                  Collaboration simplifiée
                </h3>
                <p className="text-black text-base font-normal">
                  Centralisez vos équipes sur une seule plateforme.
                </p>
              </div>
              
              <button className="rounded-full flex items-center gap-2 text-black font-medium">
                <span>Integrate</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Feature Card 3 */}
            <div className="flex-1 flex flex-col items-start gap-8 p-8">
              <div className="flex flex-col items-start gap-6">
                <div className="w-12 h-12 bg-black rounded"></div>
                <h3 className="text-black text-3xl font-bold">
                  Analytics en temps réel
                </h3>
                <p className="text-black text-base font-normal">
                  Suivez vos performances et optimisez vos processus.
                </p>
              </div>
              
              <button className="rounded-full flex items-center gap-2 text-black font-medium">
                <span>Analyze</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Hero Section */}
      <section className="bg-[#112646] px-16 py-28 flex flex-col items-center gap-20">
        <div className="max-w-7xl flex flex-col items-center gap-20 w-full">
          <div className="max-w-4xl flex flex-col items-center gap-6 w-full">
            <h2 className="text-white text-center text-6xl font-bold leading-tight tracking-tight">
              Votre copilote IA qui sécurise vos projets moyens
            </h2>
            
            <p className="text-white text-center text-lg font-normal leading-relaxed">
              Découvrez, gérez et sécurisez chaque clause dès le premier jour.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-white flex flex-col items-center w-full">
        <div className="px-16 border-t-2 border-black bg-white flex justify-center items-start gap-20 w-full py-20">
          <div className="max-w-7xl flex-1 flex flex-col items-start gap-12 w-full">
            <div className="bg-white flex items-center gap-6 w-full">
              <span className="text-black text-lg font-semibold">01</span>
              <span className="text-black text-lg font-semibold">Feature one</span>
            </div>
            
            <div className="flex items-center gap-20 w-full">
              <div className="flex-1 flex flex-col items-start gap-8 w-full">
                <div className="flex flex-col items-start gap-4 w-full">
                  <span className="text-black text-base font-semibold">
                    Cockpit opérationnel dès J+1
                  </span>
                  
                  <div className="flex flex-col items-start gap-6 w-full">
                    <h3 className="text-black text-4xl font-bold">
                      Structuration automatique dès J+1
                    </h3>
                    
                    <p className="text-black text-lg font-normal">
                      L'IA analyse vos AO, mappe chaque exigence et offre une vision claire du périmètre.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <button className="border-2 border-black bg-transparent rounded-full px-6 py-3 text-black font-medium">
                    Button
                  </button>
                  
                  <button className="rounded-full flex items-center gap-2 text-black font-medium">
                    <span>Button</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Placeholder Image */}
              <div className="bg-gray-300 rounded-[40px] flex-1 h-96"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white px-16 py-28 flex flex-col items-center gap-20 w-full">
        <div className="max-w-7xl flex flex-col items-start gap-20 w-full">
          <div className="max-w-4xl flex flex-col items-start gap-4 w-full">
            <span className="text-black text-base font-semibold">
              Résultats mesurés
            </span>
            
            <div className="flex flex-col items-start gap-6 w-full">
              <h2 className="text-black text-5xl font-bold">
                Des gains concrets dès la première offre
              </h2>
              
              <p className="text-black text-lg font-normal">
                Nos clients transforment leurs processus et obtiennent des résultats mesurables.
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-start gap-12 w-full">
            <div className="border-l-2 border-black flex-1 flex flex-col items-start gap-2 w-full pl-8">
              <span className="text-black text-6xl font-bold">85%</span>
              <span className="text-black text-xl font-bold">
                Temps gagné sur l'analyse
              </span>
            </div>

            <div className="border-l-2 border-black flex-1 flex flex-col items-start gap-2 w-full pl-8">
              <span className="text-black text-6xl font-bold">48h</span>
              <span className="text-black text-xl font-bold">
                Délai moyen de réponse
              </span>
            </div>

            <div className="border-l-2 border-black flex-1 flex flex-col items-start gap-2 w-full pl-8">
              <span className="text-black text-6xl font-bold">95%</span>
              <span className="text-black text-xl font-bold">
                Taux de satisfaction client
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f2f2f2] px-16 py-28 flex flex-col items-center gap-20 w-full">
        <div className="max-w-7xl flex flex-col items-center gap-20 w-full">
          <div className="max-w-4xl flex flex-col items-center gap-6 w-full">
            <h2 className="text-black text-center text-5xl font-bold">
              Ce que disent nos clients
            </h2>
            
            <p className="text-black text-center text-lg font-normal">
              Découvrez comment Aitenders transforme les processus d'appels d'offres.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="flex items-start gap-8 w-full">
            <div className="rounded-[32px] border-2 border-black bg-[#f2f2f2] flex flex-col items-start gap-6 flex-1 p-8">
              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 flex flex-col items-start w-full">
                  <span className="text-black text-base font-semibold">Marie Dubois</span>
                  <span className="text-black text-base font-normal">Directrice Commerciale, Bouygues</span>
                </div>
              </div>
              
              <p className="text-black text-lg font-normal">
                "Aitenders a révolutionné notre approche des appels d'offres. Nous gagnons 3 semaines sur chaque projet."
              </p>
            </div>

            <div className="rounded-[32px] border-2 border-black bg-[#f2f2f2] flex flex-col items-start gap-6 flex-1 p-8">
              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 flex flex-col items-start w-full">
                  <span className="text-black text-base font-semibold">Jean Martin</span>
                  <span className="text-black text-base font-normal">Chef de Projet, Vinci</span>
                </div>
              </div>
              
              <p className="text-black text-lg font-normal">
                "La structuration automatique nous fait gagner un temps précieux. Plus d'erreurs de dernière minute."
              </p>
            </div>

            <div className="rounded-[32px] border-2 border-black bg-[#f2f2f2] flex flex-col items-start gap-6 flex-1 p-8">
              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 flex flex-col items-start w-full">
                  <span className="text-black text-base font-semibold">Sophie Laurent</span>
                  <span className="text-black text-base font-normal">Responsable Offres, Eiffage</span>
                </div>
              </div>
              
              <p className="text-black text-lg font-normal">
                "Une plateforme intuitive qui facilite la collaboration entre équipes."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}