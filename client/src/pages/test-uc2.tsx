import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function TestUC2Page() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-white overflow-hidden" style={{ fontFamily: 'Inter, Roboto, Raleway, Montserrat, sans-serif' }}>
      
      {/* Header 26 Section - Following Figma design */}
      <section className="bg-white flex flex-col items-center w-full h-[523px] py-28 px-16 overflow-hidden">
        <div className="max-w-[1280px] flex flex-col items-center gap-20 w-full">
          <div className="max-w-[768px] flex flex-col items-center gap-8 w-full">
            <div className="bg-white border border-black flex flex-col items-center gap-6 w-full p-8">
              <h1 
                className="text-black text-center text-[72px] font-medium leading-[120%] tracking-[-0.72px]"
                style={{ fontFamily: 'Roboto' }}
              >
                Medium Length Hero Headline Goes Here
              </h1>
              <p 
                className="text-black text-center text-lg font-normal leading-[150%]"
                style={{ fontFamily: 'Roboto' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
              <div className="flex items-start gap-4">
                <Button 
                  className="bg-[#112646] text-white rounded-full px-6 py-2.5 text-base font-medium leading-[150%] shadow-[0_32px_24px_0_rgba(255,255,255,0.05)_inset,0_2px_1px_0_rgba(255,255,255,0.25)_inset,0_0_0_1px_rgba(0,0,0,0.15)_inset,0_-2px_1px_0_rgba(0,0,0,0.2)_inset,0_1px_2px_0_rgba(0,0,0,0.05)]"
                  style={{ fontFamily: 'Inter' }}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-black bg-transparent text-black rounded-full px-6 py-2.5 text-base font-medium leading-[150%]"
                  style={{ fontFamily: 'Inter' }}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="bg-[#e7e9ec] flex flex-col items-center gap-12 w-full h-[287px] py-20 overflow-hidden">
        <p 
          className="text-black text-center text-lg w-[549px] h-[23px] font-normal leading-[150%]"
          style={{ fontFamily: 'Roboto' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-center items-center gap-6">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-[200px] h-14 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Layout 401 Section with Tagline */}
      <section className="bg-white flex flex-col items-center gap-20 w-full h-[812px] py-[237px] px-16 overflow-hidden">
        <div className="w-[1280px] max-w-[1280px] flex flex-col shrink-0 items-center gap-20 h-[459px]">
          <div className="max-w-[768px] flex flex-col items-center gap-4 w-full">
            <div className="flex items-center">
              <span 
                className="text-black text-center text-base font-semibold leading-[150%]"
                style={{ fontFamily: 'Inter' }}
              >
                Tagline
              </span>
            </div>
            <div className="flex flex-col items-center gap-6 w-full">
              <h2 
                className="text-black text-center text-[52px] font-medium leading-[120%] tracking-[-0.52px]"
                style={{ fontFamily: 'Raleway' }}
              >
                Heading
              </h2>
              <p 
                className="text-black text-center text-lg font-normal leading-[150%]"
                style={{ fontFamily: 'Inter' }}
              >
                Text
              </p>
            </div>
          </div>
          <div className="flex flex-col shrink-0 items-start gap-16 w-full h-[95px]">
            <div className="flex shrink-0 items-start gap-12 w-full h-24">
              <div className="flex flex-col flex-1 items-center gap-6 w-full h-[95px]">
                <div className="shrink-0 w-[1280.41px] h-[95px] bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Reveal Section - Notre composant existant avec "L'équipe Projet" */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[400px]">
            
            {/* Left Side - "L'équipe Projet" */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="text-center lg:text-right">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-blue-400/80 leading-none font-roboto">
                  {t('uc2.impact_reveal.team_title') || 'L\'équipe Projet'}
                </h2>
              </div>
            </div>

            {/* Right Side - Dynamic Impact Text */}
            <div className="lg:col-span-8 flex items-center">
              <div className="w-full max-w-4xl">
                <div className="text-center lg:text-left space-y-6">
                  <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-blue-100">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-2xl md:text-3xl font-medium text-slate-800 font-roboto">
                      {t('uc2.impact_reveal.benefit1') || 'réduisez de moitié votre temps d\'analyse'}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-blue-100">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-2xl md:text-3xl font-medium text-slate-800 font-roboto">
                      {t('uc2.impact_reveal.benefit2') || 'rassurez votre direction'}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-purple-100">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="text-2xl md:text-3xl font-medium text-slate-800 font-roboto">
                      {t('uc2.impact_reveal.benefit3') || 'livrez une réponse compétitive, sans risque de dernière minute'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Another Layout 401 Section */}
      <section className="bg-white flex flex-col items-center gap-20 w-full h-[950px] py-[186px] px-16 overflow-hidden relative">
        <div className="absolute bottom-[401.084px] left-[327.271px] w-[773px] h-[113px] bg-gray-200 rounded"></div>
      </section>

      {/* Final Layout 401 Section */}
      <section className="bg-white flex flex-col items-center gap-20 w-full h-[573px] py-[186px] px-16 overflow-hidden">
        <div className="max-w-[768px] flex flex-col items-center gap-4 w-[768px] relative">
          <div className="flex justify-center items-center gap-6 w-[768px] absolute top-[-0.084px] left-[0.271px]">
            <h2 
              className="text-black text-center text-[52px] font-medium leading-[120%] tracking-[-0.52px] flex-1"
              style={{ fontFamily: 'Raleway' }}
            >
              Heading
            </h2>
          </div>
        </div>
      </section>

      {/* Layout 356 Section */}
      <section className="bg-white flex flex-col items-center w-[1432px] h-[2440px] pb-[304px] overflow-hidden">
        <div className="w-full h-[712px] flex justify-center items-start gap-20 px-16 border-t-2 border-black bg-white overflow-hidden">
          <div className="max-w-[1280px] flex-1 pb-28"></div>
        </div>
      </section>

    </div>
  );
}