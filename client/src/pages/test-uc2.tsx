import Header from "@/components/header";
import { ChevronRight } from "lucide-react";

export default function TestUC2Page() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="bg-white flex flex-col items-center h-[1024px]">
        <div className="flex-1 bg-gray-300 w-full relative"></div>
        
        <div className="px-16 py-20 flex justify-center items-start gap-20 w-full h-[418px]">
          <div className="max-w-[1280px] flex-1 flex flex-col items-start gap-20 w-full">
            <div className="flex items-start gap-20 w-full">
              <div className="flex-1 flex flex-col items-start w-full">
                <h1 className="text-black font-raleway text-7xl font-medium leading-[120%] tracking-[-0.72px]">
                  Des réponses structurées en 48h
                </h1>
              </div>
              
              <div className="flex-1 flex flex-col items-start gap-8 w-full">
                <p className="text-black font-inter text-lg font-normal leading-[150%]">
                  La plateforme dédiée aux projets 5–50 M€ qui automatise analyse, rédaction et validation collaborative.
                </p>
                
                <div className="flex items-start gap-4">
                  <button className="bg-[#112646] rounded-full px-6 py-3 flex justify-center items-center gap-2 shadow-lg">
                    <span className="text-white font-inter text-base font-medium leading-[150%]">
                      Réservez une démo
                    </span>
                  </button>
                  
                  <button className="border-2 border-black bg-transparent rounded-full px-6 py-3 flex justify-center items-center gap-2">
                    <span className="text-black font-inter text-base font-medium leading-[150%]">
                      Learn More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-16 py-28 flex flex-col items-center gap-20">
        <div className="max-w-[1280px] flex flex-col items-start gap-20">
          <div className="flex items-start gap-20 w-full">
            <div className="flex-1 flex flex-col items-start gap-4">
              <h2 className="text-black font-raleway text-[44px] font-medium leading-[120%] tracking-[-0.44px]">
                Votre offre, 100% claire, 0% surprises
              </h2>
            </div>
            
            <div className="flex-1 flex flex-col items-start gap-6">
              <p className="text-black font-inter text-lg font-normal leading-[150%]">
                Sur les projets moyens, vos équipes jonglent avec délais serrés, clauses cachées et versions dispersées. 
                Avec Aitenders, structurez vos dossiers dès J+1.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-start gap-12 w-full">
            <div className="flex-1 flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-6">
                <div className="w-12 h-12 bg-black rounded"></div>
                <h3 className="text-black font-raleway text-[28px] font-medium">
                  Structuration automatique
                </h3>
                <p className="text-black font-inter text-base font-normal">
                  Analysez et structurez vos appels d'offres instantanément.
                </p>
              </div>
              
              <button className="rounded-full flex items-center gap-2">
                <span className="text-black font-inter text-base font-medium">Start</span>
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-6">
                <div className="w-12 h-12 bg-black rounded"></div>
                <h3 className="text-black font-raleway text-[28px] font-medium">
                  Collaboration simplifiée
                </h3>
                <p className="text-black font-inter text-base font-normal">
                  Centralisez vos équipes sur une seule plateforme.
                </p>
              </div>
              
              <button className="rounded-full flex items-center gap-2">
                <span className="text-black font-inter text-base font-medium">Integrate</span>
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-6">
                <div className="w-12 h-12 bg-black rounded"></div>
                <h3 className="text-black font-raleway text-[28px] font-medium">
                  Analytics en temps réel
                </h3>
                <p className="text-black font-inter text-base font-normal">
                  Suivez vos performances et optimisez vos processus.
                </p>
              </div>
              
              <button className="rounded-full flex items-center gap-2">
                <span className="text-black font-inter text-base font-medium">Analyze</span>
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Hero Section */}
      <section className="bg-[#112646] px-16 py-28 flex flex-col items-center gap-20">
        <div className="max-w-[1280px] flex flex-col items-center gap-20 w-full">
          <div className="max-w-[768px] flex flex-col items-center gap-6 w-full">
            <h2 className="text-white text-center font-raleway text-6xl font-medium leading-[120%] tracking-[-0.72px]">
              Votre copilote IA qui sécurise vos projets moyens
            </h2>
            
            <p className="text-white text-center font-inter text-lg font-normal leading-[150%]">
              Découvrez, gérez et sécurisez chaque clause dès le premier jour.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="bg-white flex flex-col items-center w-full">
        <div className="px-16 border-t-2 border-black bg-white flex justify-center items-start gap-20 w-full py-20">
          <div className="max-w-[1280px] flex-1 flex flex-col items-start gap-12 w-full">
            <div className="bg-white flex items-center gap-6 w-full">
              <span className="text-black font-inter text-lg font-semibold">01</span>
              <span className="text-black font-inter text-lg font-semibold">Feature one</span>
            </div>
            
            <div className="flex items-center gap-20 w-full">
              <div className="flex-1 flex flex-col items-start gap-8 w-full">
                <div className="flex flex-col items-start gap-4 w-full">
                  <span className="text-black font-inter text-base font-semibold">
                    Cockpit opérationnel dès J+1
                  </span>
                  
                  <div className="flex flex-col items-start gap-6 w-full">
                    <h3 className="text-black font-raleway text-4xl font-medium">
                      Structuration automatique dès J+1
                    </h3>
                    
                    <p className="text-black font-inter text-lg font-normal">
                      L'IA analyse vos AO, mappe chaque exigence et offre une vision claire du périmètre.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <button className="border-2 border-black bg-transparent rounded-full px-6 py-3">
                    <span className="text-black font-inter text-base font-medium">Button</span>
                  </button>
                  
                  <button className="rounded-full flex items-center gap-2">
                    <span className="text-black font-inter text-base font-medium">Button</span>
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-300 rounded-[40px] flex-1 h-96"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white px-16 py-28 flex flex-col items-center gap-20 w-full">
        <div className="max-w-[1280px] flex flex-col items-start gap-20 w-full">
          <div className="max-w-[768px] flex flex-col items-start gap-4 w-full">
            <span className="text-black font-inter text-base font-semibold">
              Résultats mesurés
            </span>
            
            <div className="flex flex-col items-start gap-6 w-full">
              <h2 className="text-black font-raleway text-5xl font-medium">
                Des gains concrets dès la première offre
              </h2>
              
              <p className="text-black font-inter text-lg font-normal">
                Nos clients transforment leurs processus et obtiennent des résultats mesurables.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-12 w-full">
            <div className="border-l-2 border-black flex-1 flex flex-col items-start gap-2 w-full pl-8">
              <span className="text-black font-roboto text-6xl font-bold">85%</span>
              <span className="text-black font-raleway text-xl font-medium">
                Temps gagné sur l'analyse
              </span>
            </div>

            <div className="border-l-2 border-black flex-1 flex flex-col items-start gap-2 w-full pl-8">
              <span className="text-black font-roboto text-6xl font-bold">48h</span>
              <span className="text-black font-raleway text-xl font-medium">
                Délai moyen de réponse
              </span>
            </div>

            <div className="border-l-2 border-black flex-1 flex flex-col items-start gap-2 w-full pl-8">
              <span className="text-black font-roboto text-6xl font-bold">95%</span>
              <span className="text-black font-raleway text-xl font-medium">
                Taux de satisfaction client
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f2f2f2] px-16 py-28 flex flex-col items-center gap-20 w-full">
        <div className="max-w-[1280px] flex flex-col items-center gap-20 w-full">
          <div className="max-w-[768px] flex flex-col items-center gap-6 w-full">
            <h2 className="text-black text-center font-raleway text-5xl font-medium">
              Ce que disent nos clients
            </h2>
            
            <p className="text-black text-center font-inter text-lg font-normal">
              Découvrez comment Aitenders transforme les processus d'appels d'offres.
            </p>
          </div>

          <div className="flex items-start gap-8 w-full">
            <div className="rounded-[32px] border-2 border-black bg-[#f2f2f2] flex flex-col items-start gap-6 flex-1 p-8">
              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 flex flex-col items-start w-full">
                  <span className="text-black font-inter text-base font-semibold">Marie Dubois</span>
                  <span className="text-black font-inter text-base font-normal">Directrice Commerciale, Bouygues</span>
                </div>
              </div>
              
              <p className="text-black font-inter text-lg font-normal">
                "Aitenders a révolutionné notre approche des appels d'offres. Nous gagnons 3 semaines sur chaque projet."
              </p>
            </div>

            <div className="rounded-[32px] border-2 border-black bg-[#f2f2f2] flex flex-col items-start gap-6 flex-1 p-8">
              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 flex flex-col items-start w-full">
                  <span className="text-black font-inter text-base font-semibold">Jean Martin</span>
                  <span className="text-black font-inter text-base font-normal">Chef de Projet, Vinci</span>
                </div>
              </div>
              
              <p className="text-black font-inter text-lg font-normal">
                "La structuration automatique nous fait gagner un temps précieux. Plus d'erreurs de dernière minute."
              </p>
            </div>

            <div className="rounded-[32px] border-2 border-black bg-[#f2f2f2] flex flex-col items-start gap-6 flex-1 p-8">
              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 flex flex-col items-start w-full">
                  <span className="text-black font-inter text-base font-semibold">Sophie Laurent</span>
                  <span className="text-black font-inter text-base font-normal">Responsable Offres, Eiffage</span>
                </div>
              </div>
              
              <p className="text-black font-inter text-lg font-normal">
                "Une plateforme intuitive qui facilite la collaboration entre équipes."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}