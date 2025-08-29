import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

export default function TestUC2Page() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-white overflow-hidden" style={{ fontFamily: 'Inter, Roboto, Raleway, Montserrat, sans-serif' }}>
      
      {/* Header 26 Section - Following exact Figma design */}
      <section 
        className="bg-white flex flex-col items-center gap-20 w-full overflow-hidden"
        style={{ 
          padding: '112px 64px',
          height: '523px'
        }}
      >
        <div 
          className="flex flex-col items-center gap-20 w-full"
          style={{ maxWidth: '1280px' }}
        >
          <div 
            className="flex flex-col items-center gap-8 w-full"
            style={{ maxWidth: '768px' }}
          >
            <div className="bg-white border border-black flex flex-col items-center gap-6 w-full box-border">
              <h1 
                className="text-black text-center font-medium"
                style={{ 
                  fontFamily: 'Roboto',
                  fontSize: '72px',
                  lineHeight: '120%',
                  letterSpacing: '-0.72px'
                }}
              >
                Medium Length Hero Headline Goes Here
              </h1>
              <p 
                className="text-black text-center font-normal"
                style={{ 
                  fontFamily: 'Roboto',
                  fontSize: '18px',
                  lineHeight: '150%'
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
              <div className="flex items-start gap-4">
                <Button 
                  className="justify-center items-center gap-2 font-medium"
                  style={{ 
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    lineHeight: '150%',
                    background: '#112646',
                    color: '#fff',
                    borderRadius: '100px',
                    padding: '10px 24px',
                    boxShadow: '0 32px 24px 0 rgba(255,255,255,0.05) inset, 0 2px 1px 0 rgba(255,255,255,0.25) inset, 0 0 0 1px rgba(0,0,0,0.15) inset, 0 -2px 1px 0 rgba(0,0,0,0.2) inset, 0 1px 2px 0 rgba(0,0,0,0.05)'
                  }}
                >
                  Get Started
                </Button>
                <Button 
                  className="justify-center items-center gap-2 font-medium box-border"
                  style={{ 
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    lineHeight: '150%',
                    border: '2px solid #000',
                    background: 'transparent',
                    color: '#000',
                    borderRadius: '100px',
                    padding: '10px 24px'
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section 
        className="bg-[#e7e9ec] flex flex-col items-center gap-12 w-full overflow-hidden"
        style={{
          padding: '80px 0',
          height: '287px'
        }}
      >
        <p 
          className="text-black text-center font-normal inline-block"
          style={{ 
            fontFamily: 'Roboto',
            fontSize: '18px',
            lineHeight: '150%',
            width: '549px',
            height: '23px'
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-center items-center gap-6">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-[200px] h-14 bg-gray-300"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Layout 401 Section */}
      <section 
        className="bg-white flex flex-col items-center gap-20 w-full overflow-hidden"
        style={{
          padding: '237px 64px 116px 64px',
          height: '812px'
        }}
      >
        <div 
          className="flex flex-col shrink-0 items-center gap-20"
          style={{
            width: '1280px',
            maxWidth: '1280px',
            height: '459px'
          }}
        >
          <div 
            className="flex flex-col items-center gap-4 w-full"
            style={{ maxWidth: '768px' }}
          >
            <div className="flex items-center">
              <span 
                className="text-black text-center font-semibold inline-block"
                style={{ 
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  lineHeight: '150%'
                }}
              >
                Tagline
              </span>
            </div>
            <div className="flex flex-col items-center gap-6 w-full">
              <h2 
                className="text-black text-center font-medium inline-block"
                style={{ 
                  fontFamily: 'Raleway',
                  fontSize: '52px',
                  lineHeight: '120%',
                  letterSpacing: '-0.52px'
                }}
              >
                Heading
              </h2>
              <p 
                className="text-black text-center font-normal inline-block"
                style={{ 
                  fontFamily: 'Inter',
                  fontSize: '18px',
                  lineHeight: '150%'
                }}
              >
                Text
              </p>
            </div>
          </div>
          <div 
            className="flex flex-col shrink-0 items-start gap-16 w-full"
            style={{ height: '95px' }}
          >
            <div 
              className="flex shrink-0 items-start gap-12 w-full"
              style={{ height: '96px' }}
            >
              <div 
                className="flex flex-col flex-1 items-center gap-6 w-full"
                style={{ height: '95px' }}
              >
                <div 
                  className="shrink-0 bg-gray-200"
                  style={{ 
                    width: '1280.41px',
                    height: '95px'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Reveal Section - Notre composant avec "L'équipe Projet" */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[400px]">
            
            {/* Left Side - "L'équipe Projet" */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="text-center lg:text-right">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-blue-400/80 leading-none" style={{ fontFamily: 'Roboto' }}>
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
                    <p className="text-2xl md:text-3xl font-medium text-slate-800" style={{ fontFamily: 'Roboto' }}>
                      {t('uc2.impact_reveal.benefit1') || 'réduisez de moitié votre temps d\'analyse'}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-blue-100">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-2xl md:text-3xl font-medium text-slate-800" style={{ fontFamily: 'Roboto' }}>
                      {t('uc2.impact_reveal.benefit2') || 'rassurez votre direction'}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-purple-100">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="text-2xl md:text-3xl font-medium text-slate-800" style={{ fontFamily: 'Roboto' }}>
                      {t('uc2.impact_reveal.benefit3') || 'livrez une réponse compétitive, sans risque de dernière minute'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layout 401 Section */}
      <section 
        className="bg-white flex flex-col items-center gap-20 w-full overflow-hidden relative"
        style={{
          padding: '186px 64px 328px 64px',
          height: '950px'
        }}
      >
        <div 
          className="absolute bg-gray-200"
          style={{
            bottom: '401.084px',
            left: '327.271px',
            width: '773px',
            height: '113px'
          }}
        ></div>
      </section>

      {/* Layout 401 Section */}
      <section 
        className="bg-white flex flex-col items-center gap-20 w-full overflow-hidden"
        style={{
          padding: '186px 64px 160px 64px',
          height: '573px'
        }}
      >
        <div 
          className="flex flex-col items-center gap-4 relative"
          style={{
            maxWidth: '768px',
            width: '768px'
          }}
        >
          <div 
            className="flex justify-center items-center gap-6 absolute"
            style={{
              width: '768px',
              top: '-0.084px',
              left: '0.271px'
            }}
          >
            <h2 
              className="text-black text-center font-medium flex-1 inline-block"
              style={{ 
                fontFamily: 'Raleway',
                fontSize: '52px',
                lineHeight: '120%',
                letterSpacing: '-0.52px'
              }}
            >
              Heading
            </h2>
          </div>
        </div>
      </section>

      {/* Layout 356 Section */}
      <section 
        className="bg-white flex flex-col items-center overflow-hidden"
        style={{
          width: '1432px',
          height: '2440px',
          paddingBottom: '304px'
        }}
      >
        <div 
          className="w-full flex justify-center items-start gap-20 border-t-2 border-black bg-white overflow-hidden box-border"
          style={{
            height: '712px',
            padding: '0 64px'
          }}
        >
          <div 
            className="flex-1"
            style={{
              maxWidth: '1280px',
              paddingBottom: '112px'
            }}
          ></div>
        </div>
      </section>

    </div>
  );
}