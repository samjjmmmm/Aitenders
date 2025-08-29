export default function TestUC2Page() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      
      {/* Block 1 - Hero Section (Header_26) - Exact Figma design */}
      <div 
        className="flex flex-col items-center gap-20 w-full overflow-hidden"
        style={{
          padding: '112px 64px',
          background: '#fff',
          height: '523px'
        }}
        data-figma-node="9248:28760"
      >
        <div 
          className="flex flex-col items-center gap-20 w-full"
          style={{ maxWidth: '1280px' }}
          data-figma-node="9248:28761"
        >
          <div 
            className="flex flex-col items-center gap-8 w-full"
            style={{ maxWidth: '768px' }}
            data-figma-node="9248:28762"
          >
            <div 
              className="box-border bg-white border border-black flex flex-col items-center gap-6 w-full"
              data-figma-node="9248:28763"
            >
              <span 
                className="text-black text-center inline-block"
                style={{
                  fontFamily: 'Roboto',
                  fontSize: '72px',
                  letterSpacing: '-0.72px',
                  fontWeight: 500,
                  lineHeight: '120%'
                }}
                data-figma-node="9248:28764"
              >
                Votre offre, 100% claire, 0% surprises
              </span>
              <span 
                className="text-black text-center inline-block"
                style={{
                  fontFamily: 'Roboto',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '150%'
                }}
                data-figma-node="9248:28765"
              >
                Découvrez, pilotez et sécurisez chaque clause dès le premier jour.
              </span>
              <div 
                className="flex items-start gap-4"
                data-figma-node="9248:28766"
              >
                <div 
                  className="flex justify-center items-center gap-2"
                  style={{
                    background: '#112646',
                    boxShadow: '0 32px 24px 0 rgba(255,255,255,0.05) inset, 0 2px 1px 0 rgba(255,255,255,0.25) inset, 0 0 0 1px rgba(0,0,0,0.15) inset, 0 -2px 1px 0 rgba(0,0,0,0.2) inset, 0 1px 2px 0 rgba(0,0,0,0.05)',
                    borderRadius: '100px',
                    padding: '10px 24px'
                  }}
                  data-figma-node="9248:28767"
                >
                  <span 
                    className="text-white inline-block"
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 500,
                      lineHeight: '150%'
                    }}
                    data-figma-node="4179:8873"
                  >
                    Get Started
                  </span>
                </div>
                <div 
                  className="flex justify-center items-center gap-2 box-border"
                  style={{
                    border: '2px solid #000',
                    background: 'transparent',
                    borderRadius: '100px',
                    padding: '10px 24px'
                  }}
                  data-figma-node="9248:28768"
                >
                  <span 
                    className="text-black inline-block"
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 500,
                      lineHeight: '150%'
                    }}
                    data-figma-node="4179:8893"
                  >
                    Learn More
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block 2 - Logo Carousel Section */}
      <div 
        className="flex flex-col items-center gap-12 w-full overflow-hidden"
        style={{
          padding: '80px 0',
          background: '#e7e9ec',
          height: '287px'
        }}
        data-figma-node="9248:28858"
      >
        <span 
          className="text-black text-center font-normal inline-block"
          style={{ 
            fontFamily: 'Roboto',
            fontSize: '18px',
            lineHeight: '150%',
            width: '549px',
            height: '23px'
          }}
          data-figma-node="9248:30942"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </span>
        <div 
          className="flex flex-col items-center w-full"
          data-figma-node="9248:28861"
        >
          <div 
            className="flex justify-center items-center gap-6"
            data-figma-node="9248:28862"
          >
            <div 
              className="w-[200px] h-14 bg-gray-300"
              data-figma-node="9248:28863"
            ></div>
            <div 
              className="w-[200px] h-14 bg-gray-300"
              data-figma-node="9248:28864"
            ></div>
            <div 
              className="w-[200px] h-14 bg-gray-300"
              data-figma-node="9248:28865"
            ></div>
            <div 
              className="w-[200px] h-14 bg-gray-300"
              data-figma-node="9248:28866"
            ></div>
            <div 
              className="w-[200px] h-14 bg-gray-300"
              data-figma-node="9248:28867"
            ></div>
            <div 
              className="w-[200px] h-14 bg-gray-300"
              data-figma-node="9248:28868"
            ></div>
            <div 
              className="w-[200px] h-14 bg-gray-300"
              data-figma-node="9248:28869"
            ></div>
          </div>
        </div>
      </div>

    </div>
  );
}