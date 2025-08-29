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

      {/* Block 2 - Layout 401 Section avec logo carousel */}
      <div 
        className="flex flex-col items-center gap-20 w-full overflow-hidden"
        style={{
          padding: '237px 64px 116px 64px',
          background: '#fff',
          height: '812px'
        }}
        data-figma-node="9248:28988"
      >
        <div 
          className="flex flex-col shrink-0 items-center gap-20"
          style={{
            width: '1280px',
            maxWidth: '1280px',
            height: '459px'
          }}
          data-figma-node="9253:31226"
        >
          <div 
            className="flex flex-col items-center gap-4 w-full"
            style={{ maxWidth: '768px' }}
            data-figma-node="9253:31227"
          >
            <div 
              className="flex items-center"
              data-figma-node="9253:31228"
            >
              <span 
                className="text-black text-center font-semibold inline-block"
                style={{ 
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  lineHeight: '150%'
                }}
                data-figma-node="9253:31229"
              >
                AI Agents
              </span>
            </div>
            <div 
              className="flex flex-col items-center gap-6 w-full"
              data-figma-node="9253:31230"
            >
              <span 
                className="text-black text-center font-medium inline-block"
                style={{ 
                  fontFamily: 'Raleway',
                  fontSize: '52px',
                  lineHeight: '120%',
                  letterSpacing: '-0.52px'
                }}
                data-figma-node="9253:31231"
              >
                Votre copilote IA qui sécurise la gestion de vos projets moyens
              </span>
              <span 
                className="text-black text-center font-normal inline-block"
                style={{ 
                  fontFamily: 'Inter',
                  fontSize: '18px',
                  lineHeight: '150%'
                }}
                data-figma-node="9253:31232"
              >
                La seule plateforme conçue pour transformer des dossiers moyens (1 à 10 M€) en une vision contractuelle claire dès le premier jour
              </span>
            </div>
          </div>
          <div 
            className="flex flex-col shrink-0 items-start gap-16 w-full"
            style={{ height: '95px' }}
            data-figma-node="9253:31233"
          >
            <div 
              className="flex shrink-0 items-start gap-12 w-full"
              style={{ height: '96px' }}
              data-figma-node="9253:31234"
            >
              <div 
                className="flex flex-col flex-1 items-center gap-6 w-full"
                style={{ height: '95px' }}
                data-figma-node="9253:31235"
              >
                {/* Logo Carousel intégré ici */}
                <div className="flex justify-center items-center gap-6 w-full">
                  <div className="w-[200px] h-14 bg-gray-300 rounded"></div>
                  <div className="w-[200px] h-14 bg-gray-300 rounded"></div>
                  <div className="w-[200px] h-14 bg-gray-300 rounded"></div>
                  <div className="w-[200px] h-14 bg-gray-300 rounded"></div>
                  <div className="w-[200px] h-14 bg-gray-300 rounded"></div>
                  <div className="w-[200px] h-14 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block 3 - Layout 401 Section avec Group_3 SVG */}
      <div 
        className="flex flex-col items-center gap-20 w-full overflow-hidden relative"
        style={{
          padding: '186px 64px 328px 64px',
          background: '#fff',
          height: '950px'
        }}
        data-figma-node="9254:400"
      >
        <div 
          className="absolute"
          style={{
            width: '773px',
            height: '113px',
            bottom: '401.084px',
            left: '327.271px'
          }}
          data-figma-node="9254:429"
        >
          <svg width="773" height="113" viewBox="0 0 773 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M322.19 24.4756V14.6574H323.647V16.1404H323.749C323.928 15.6546 324.252 15.2604 324.721 14.9578C325.19 14.6553 325.718 14.504 326.306 14.504C326.417 14.504 326.555 14.5061 326.722 14.5104C326.888 14.5146 327.014 14.521 327.099 14.5296V16.0637C327.048 16.0509 326.93 16.0317 326.747 16.0061C326.568 15.9763 326.379 15.9614 326.178 15.9614C325.701 15.9614 325.275 16.0615 324.9 16.2618C324.529 16.4578 324.235 16.7306 324.018 17.08C323.805 17.4252 323.698 17.8193 323.698 18.262V24.4756H322.19Z" fill="black"/>
            <path d="M39.4762 22.56L54.5162 60.768L69.4922 22.56H75.5722L57.1402 68H51.8922L33.3962 22.56H39.4762ZM90.3772 68.64C87.8598 68.64 85.5772 68.192 83.5292 67.296C81.4812 66.3573 79.7105 65.0987 78.2172 63.52C76.7238 61.8987 75.5718 60.0427 74.7612 57.952C73.9505 55.8613 73.5452 53.664 73.5452 51.36C73.5452 49.0133 73.9505 46.7947 74.7612 44.704C75.5718 42.6133 76.7238 40.7787 78.2172 39.2C79.7105 37.5787 81.4812 36.32 83.5292 35.424C85.6198 34.4853 87.9025 34.016 90.3772 34.016C92.8518 34.016 95.1345 34.4853 97.2252 35.424C99.3158 36.32 101.065 37.5787 102.473 39.2C103.923 40.7787 105.075 42.6133 105.928 44.704C106.781 46.7947 107.208 49.0133 107.208 51.36C107.208 53.664 106.781 55.8613 105.928 57.952C105.075 60.0427 103.923 61.8987 102.473 63.52C101.065 65.0987 99.3158 66.3573 97.2252 67.296C95.1345 68.192 92.8518 68.64 90.3772 68.64ZM90.3772 63.072C92.1678 63.072 93.7252 62.7573 95.0492 62.128C96.3732 61.4987 97.4425 60.6827 98.2572 59.68C99.0718 58.6347 99.6532 57.4827 100.001 56.224C100.391 54.9227 100.587 53.6213 100.587 52.32V50.464C100.587 49.12 100.391 47.8187 100.001 46.56C99.6532 45.2587 99.0718 44.1067 98.2572 43.104C97.4425 42.1013 96.3732 41.3067 95.0492 40.72C93.7252 40.0907 92.1678 39.776 90.3772 39.776C88.5865 39.776 87.0292 40.0907 85.7052 40.72C84.3812 41.3067 83.3118 42.1013 82.4972 43.104C81.6825 44.1067 81.1012 45.2587 80.7532 46.56C80.4052 47.8187 80.2312 49.12 80.2312 50.464V52.32C80.2312 53.6213 80.4052 54.9227 80.7532 56.224C81.1012 57.4827 81.6825 58.6347 82.4972 59.68C83.3118 60.6827 84.3812 61.4987 85.7052 62.128C87.0292 62.7573 88.5865 63.072 90.3772 63.072ZM122.062 68.64C119.588 68.64 117.435 68.1493 115.604 67.168C113.772 66.1867 112.35 64.8 111.34 63.008C110.329 61.216 109.824 59.0613 109.824 56.544V22.56H116.382V56.352C116.382 57.568 116.598 58.656 117.028 59.616C117.459 60.576 118.1 61.344 118.95 61.92C119.801 62.496 120.857 62.784 122.118 62.784C123.38 62.784 124.436 62.496 125.286 61.92C126.137 61.344 126.777 60.576 127.208 59.616C127.638 58.656 127.854 57.568 127.854 56.352V22.56H134.412V56.544C134.412 59.0613 133.907 61.216 132.896 63.008C131.886 64.8 130.464 66.1867 128.632 67.168C126.801 68.1493 124.648 68.64 122.062 68.64ZM150.604 68.64C147.655 68.64 145.156 67.9467 143.108 66.56C141.06 65.1733 139.527 63.2427 148.556 60.768C147.588 58.2933 147.104 55.456 147.104 52.256C147.104 49.1413 147.588 46.304 148.556 43.744C149.525 41.184 150.892 39.04 152.66 37.312C154.428 35.584 156.53 34.3253 158.964 33.536C161.399 32.7467 164.071 32.352 166.98 32.352C169.889 32.352 172.561 32.7467 174.996 33.536C177.431 34.3253 179.532 35.584 181.3 37.312C183.068 39.04 184.436 41.184 185.404 43.744C186.372 46.304 186.856 49.1413 186.856 52.256C186.856 55.456 186.372 58.2933 185.404 60.768C184.436 63.2427 183.068 65.1733 181.3 66.56C179.532 67.9467 177.431 68.64 174.996 68.64C172.561 68.64 169.889 68.64 166.98 68.64C164.071 68.64 161.399 68.64 158.964 68.64C156.53 68.64 154.428 67.9467 152.66 66.56C150.892 65.1733 149.525 63.2427 148.556 60.768C147.588 58.2933 147.104 55.456 147.104 52.256Z" fill="black"/>
          </svg>
        </div>
      </div>

      {/* Block 4 - Impact Reveal Section avec "L'équipe Projet" */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[400px]">
            
            {/* Left Side - "L'équipe Projet" */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="text-center lg:text-right">
                <h2 
                  className="text-6xl md:text-7xl lg:text-8xl font-light text-blue-400/80 leading-none"
                  style={{ fontFamily: 'Roboto' }}
                >
                  L'équipe Projet
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
                    <p 
                      className="text-2xl md:text-3xl font-medium text-slate-800"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      réduisez de moitié votre temps d'analyse
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-blue-100">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p 
                      className="text-2xl md:text-3xl font-medium text-slate-800"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      rassurez votre direction
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-purple-100">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p 
                      className="text-2xl md:text-3xl font-medium text-slate-800"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      livrez une réponse compétitive, sans risque de dernière minute
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 5 - Layout 401 Section avec Group_3 SVG */}
      <div 
        className="flex flex-col items-center gap-20 w-full overflow-hidden relative"
        style={{
          padding: '186px 64px 328px 64px',
          background: '#fff',
          height: '950px'
        }}
        data-figma-node="9254:400"
      >
        <div 
          className="absolute"
          style={{
            width: '773px',
            height: '113px',
            bottom: '401.084px',
            left: '327.271px'
          }}
          data-figma-node="9254:429"
        >
          <svg width="773" height="113" viewBox="0 0 773 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M322.19 24.4756V14.6574H323.647V16.1404H323.749C323.928 15.6546 324.252 15.2604 324.721 14.9578C325.19 14.6553 325.718 14.504 326.306 14.504C326.417 14.504 326.555 14.5061 326.722 14.5104C326.888 14.5146 327.014 14.521 327.099 14.5296V16.0637C327.048 16.0509 326.93 16.0317 326.747 16.0061C326.568 15.9763 326.379 15.9614 326.178 15.9614C325.701 15.9614 325.275 16.0615 324.9 16.2618C324.529 16.4578 324.235 16.7306 324.018 17.08C323.805 17.4252 323.698 17.8193 323.698 18.262V24.4756H322.19Z" fill="black"/>
            <path d="M39.4762 22.56L54.5162 60.768L69.4922 22.56H75.5722L57.1402 68H51.8922L33.3962 22.56H39.4762ZM90.3772 68.64C87.8598 68.64 85.5772 68.192 83.5292 67.296C81.4812 66.3573 79.7105 65.0987 78.2172 63.52C76.7238 61.8987 75.5718 60.0427 74.7612 57.952C73.9505 55.8613 73.5452 53.664 73.5452 51.36C73.5452 49.0133 73.9505 46.7947 74.7612 44.704C75.5718 42.6133 76.7238 40.7787 78.2172 39.2C79.7105 37.5787 81.4812 36.32 83.5292 35.424C85.6198 34.4853 87.9025 34.016 90.3772 34.016C92.8518 34.016 95.1345 34.4853 97.2252 35.424C99.3158 36.32 101.065 37.5787 102.473 39.2C103.923 40.7787 105.075 42.6133 105.928 44.704C106.781 46.7947 107.208 49.0133 107.208 51.36C107.208 53.664 106.781 55.8613 105.928 57.952C105.075 60.0427 103.923 61.8987 102.473 63.52C101.065 65.0987 99.3158 66.3573 97.2252 67.296C95.1345 68.192 92.8518 68.64 90.3772 68.64ZM90.3772 63.072C92.1678 63.072 93.7252 62.7573 95.0492 62.128C96.3732 61.4987 97.4425 60.6827 98.2572 59.68C99.0718 58.6347 99.6532 57.4827 100.001 56.224C100.391 54.9227 100.587 53.6213 100.587 52.32V50.464C100.587 49.12 100.391 47.8187 100.001 46.56C99.6532 45.2587 99.0718 44.1067 98.2572 43.104C97.4425 42.1013 96.3732 41.3067 95.0492 40.72C93.7252 40.0907 92.1678 39.776 90.3772 39.776C88.5865 39.776 87.0292 40.0907 85.7052 40.72C84.3812 41.3067 83.3118 42.1013 82.4972 43.104C81.6825 44.1067 81.1012 45.2587 80.7532 46.56C80.4052 47.8187 80.2312 49.12 80.2312 50.464V52.32C80.2312 53.6213 80.4052 54.9227 80.7532 56.224C81.1012 57.4827 81.6825 58.6347 82.4972 59.68C83.3118 60.6827 84.3812 61.4987 85.7052 62.128C87.0292 62.7573 88.5865 63.072 90.3772 63.072ZM122.062 68.64C119.588 68.64 117.435 68.1493 115.604 67.168C113.772 66.1867 112.35 64.8 111.34 63.008C110.329 61.216 109.824 59.0613 109.824 56.544V22.56H116.382V56.352C116.382 57.568 116.598 58.656 117.028 59.616C117.459 60.576 118.1 61.344 118.95 61.92C119.801 62.496 120.857 62.784 122.118 62.784C123.38 62.784 124.436 62.496 125.286 61.92C126.137 61.344 126.777 60.576 127.208 59.616C127.638 58.656 127.854 57.568 127.854 56.352V22.56H134.412V56.544C134.412 59.0613 133.907 61.216 132.896 63.008C131.886 64.8 130.464 66.1867 128.632 67.168C126.801 68.1493 124.648 68.64 122.062 68.64ZM150.604 68.64C147.655 68.64 145.156 67.9467 143.108 66.56C141.06 65.1733 139.527 63.2427 148.556 60.768C147.588 58.2933 147.104 55.456 147.104 52.256C147.104 49.1413 147.588 46.304 148.556 43.744C149.525 41.184 150.892 39.04 152.66 37.312C154.428 35.584 156.53 34.3253 158.964 33.536C161.399 32.7467 164.071 32.352 166.98 32.352C169.889 32.352 172.561 32.7467 174.996 33.536C177.431 34.3253 179.532 35.584 181.3 37.312C183.068 39.04 184.436 41.184 185.404 43.744C186.372 46.304 186.856 49.1413 186.856 52.256C186.856 55.456 186.372 58.2933 185.404 60.768C184.436 63.2427 183.068 65.1733 181.3 66.56C179.532 67.9467 177.431 68.64 174.996 68.64C172.561 68.64 169.889 68.64 166.98 68.64C164.071 68.64 161.399 68.64 158.964 68.64C156.53 68.64 154.428 67.9467 152.66 66.56C150.892 65.1733 149.525 63.2427 148.556 60.768C147.588 58.2933 147.104 55.456 147.104 52.256Z" fill="black"/>
          </svg>
        </div>
      </div>

      {/* Block 6 - Layout 356 Section avec 3 features */}
      <div 
        className="flex flex-col items-center w-full overflow-hidden"
        style={{
          background: '#fff',
          width: '1432px',
          height: '2440px',
          paddingBottom: '304px'
        }}
        data-figma-node="9238:560"
      >
        {/* Feature One */}
        <div 
          className="flex justify-center items-start gap-20 w-full overflow-hidden box-border"
          style={{
            padding: '0 64px',
            borderTop: '2px solid #000',
            background: '#fff',
            height: '712px'
          }}
          data-figma-node="9238:561"
        >
          <div 
            className="flex flex-col items-start gap-12 w-full"
            style={{
              maxWidth: '1280px',
              paddingBottom: '112px',
              flex: '1 0 0'
            }}
            data-figma-node="9238:562"
          >
            <div 
              className="flex items-center gap-20 w-full"
              data-figma-node="9238:566"
            >
              <div 
                className="flex flex-col items-start gap-8 w-full"
                style={{ flex: '1 0 0' }}
                data-figma-node="9238:567"
              >
                <div 
                  className="flex flex-col items-start gap-4 w-full"
                  data-figma-node="9238:568"
                >
                  <div 
                    className="flex items-center"
                    data-figma-node="9238:569"
                  >
                    <span 
                      className="text-black inline-block"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '150%'
                      }}
                      data-figma-node="9238:570"
                    >
                      Cockpit opérationnel dès J+1
                    </span>
                  </div>
                  <div 
                    className="flex flex-col items-start gap-6 w-full"
                    data-figma-node="9238:571"
                  >
                    <span 
                      className="text-black inline-block"
                      style={{
                        fontFamily: 'Roboto',
                        fontSize: '52px',
                        letterSpacing: '-0.52px',
                        fontWeight: 400,
                        lineHeight: '120%'
                      }}
                      data-figma-node="9238:572"
                    >
                      Structuration automatique du projet
                    </span>
                    <span 
                      className="text-black inline-block"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '18px',
                        fontWeight: 400,
                        lineHeight: '150%'
                      }}
                      data-figma-node="9238:573"
                    >
                      L'IA analyse vos AO, mappe chaque exigence et offre une vision claire du périmètre. +
                    </span>
                  </div>
                </div>
                <div 
                  className="flex flex-col items-start gap-3"
                  data-figma-node="9256:126"
                >
                  <div 
                    className="flex flex-col items-start gap-8 overflow-hidden"
                    style={{
                      width: '706px',
                      height: '78px'
                    }}
                    data-figma-node="9256:130"
                  >
                    <div 
                      className="flex flex-col items-start gap-4 w-full"
                      data-figma-node="9256:131"
                    >
                      <div 
                        className="flex items-start gap-6 w-full"
                        style={{ padding: '8px 0' }}
                        data-figma-node="9256:132"
                      >
                        <div 
                          className="flex flex-col items-start gap-2"
                          style={{ width: '141px' }}
                          data-figma-node="9256:133"
                        >
                          <span 
                            className="inline-block"
                            style={{
                              aspectRatio: '141/62',
                              color: '#312727',
                              fontFamily: 'Raleway',
                              fontSize: '52px',
                              letterSpacing: '-0.52px',
                              height: '62px',
                              fontWeight: 500,
                              lineHeight: '120%'
                            }}
                            data-figma-node="9256:134"
                          >
                            100%
                          </span>
                        </div>
                        <div 
                          className="flex flex-col justify-center items-center gap-3"
                          style={{
                            width: '456px',
                            height: '62px'
                          }}
                          data-figma-node="9256:136"
                        >
                          <span 
                            className="text-black inline-block"
                            style={{
                              fontFamily: 'Inter',
                              fontSize: '16px',
                              width: '381px',
                              fontWeight: 400,
                              lineHeight: '150%'
                            }}
                            data-figma-node="9256:138"
                          >
                            des documents structurés, transformés en Jumeaux numérique
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div 
                className="bg-gray-300 rounded-[40px] flex-1"
                style={{
                  aspectRatio: '1',
                  height: '600px'
                }}
                data-figma-node="9238:576"
              ></div>
            </div>
          </div>
        </div>

        {/* Feature Two */}
        <div 
          className="flex justify-center items-start gap-20 w-full overflow-hidden box-border"
          style={{
            padding: '0 64px',
            borderTop: '2px solid #000',
            background: '#fff',
            height: '712px'
          }}
          data-figma-node="9238:577"
        >
          <div 
            className="flex flex-col items-start gap-12 w-full"
            style={{
              maxWidth: '1280px',
              paddingBottom: '112px',
              flex: '1 0 0'
            }}
            data-figma-node="9238:578"
          >
            <div 
              className="flex items-center gap-20 w-full"
              data-figma-node="9238:582"
            >
              <div 
                className="bg-gray-300 rounded-[40px] flex-1"
                style={{
                  aspectRatio: '1',
                  height: '600px'
                }}
                data-figma-node="9238:583"
              ></div>
              <div 
                className="flex flex-col items-start gap-8 w-full"
                style={{ flex: '1 0 0' }}
                data-figma-node="9238:584"
              >
                <div 
                  className="flex flex-col items-start gap-4 w-full"
                  data-figma-node="9238:585"
                >
                  <div 
                    className="flex items-center"
                    data-figma-node="9238:586"
                  >
                    <span 
                      className="text-black inline-block"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '150%'
                      }}
                      data-figma-node="9238:587"
                    >
                      Analyse prédictive
                    </span>
                  </div>
                  <div 
                    className="flex flex-col items-start gap-6 w-full"
                    data-figma-node="9238:588"
                  >
                    <span 
                      className="text-black inline-block"
                      style={{
                        fontFamily: 'Roboto',
                        fontSize: '52px',
                        letterSpacing: '-0.52px',
                        fontWeight: 400,
                        lineHeight: '120%'
                      }}
                      data-figma-node="9238:589"
                    >
                      Détection précoce des risques
                    </span>
                    <span 
                      className="text-black inline-block"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '18px',
                        fontWeight: 400,
                        lineHeight: '150%'
                      }}
                      data-figma-node="9238:590"
                    >
                      Anticipez les problèmes avant qu'ils n'impactent votre projet.
                    </span>
                  </div>
                </div>
                <div 
                  className="flex items-center gap-6"
                  style={{
                    width: '99px',
                    height: '44px'
                  }}
                  data-figma-node="9238:591"
                >
                  <div 
                    className="flex justify-center items-center gap-2 box-border rounded-full"
                    style={{
                      border: '2px solid #000',
                      background: 'transparent',
                      padding: '10px 24px'
                    }}
                    data-figma-node="9251:137"
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
                      Découvrir
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Three */}
        <div 
          className="flex justify-center items-start gap-20 w-full overflow-hidden box-border"
          style={{
            padding: '0 64px',
            borderTop: '2px solid #000',
            background: '#fff',
            height: '712px'
          }}
          data-figma-node="9238:593"
        >
          <div 
            className="flex flex-col items-start gap-12 w-full"
            style={{
              maxWidth: '1280px',
              paddingBottom: '112px',
              flex: '1 0 0'
            }}
            data-figma-node="9238:594"
          >
            <div 
              className="flex items-center gap-20 w-full"
              data-figma-node="9238:598"
            >
              <div 
                className="flex flex-col items-start gap-8 w-full"
                style={{ flex: '1 0 0' }}
                data-figma-node="9238:599"
              >
                <div 
                  className="flex flex-col items-start gap-4 w-full"
                  data-figma-node="9238:600"
                >
                  <div 
                    className="flex items-center"
                    data-figma-node="9238:601"
                  >
                    <span 
                      className="text-black inline-block"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '150%'
                      }}
                      data-figma-node="9238:602"
                    >
                      Collaboration optimisée
                    </span>
                  </div>
                  <div 
                    className="flex flex-col items-start gap-6 w-full"
                    data-figma-node="9238:603"
                  >
                    <span 
                      className="text-black inline-block"
                      style={{
                        fontFamily: 'Raleway',
                        fontSize: '52px',
                        letterSpacing: '-0.52px',
                        fontWeight: 500,
                        lineHeight: '120%'
                      }}
                      data-figma-node="9238:604"
                    >
                      Équipe alignée en temps réel
                    </span>
                    <span 
                      className="text-black inline-block"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '18px',
                        fontWeight: 400,
                        lineHeight: '150%'
                      }}
                      data-figma-node="9238:605"
                    >
                      Synchronisez votre équipe avec une vision partagée du projet.
                    </span>
                  </div>
                </div>
                <div 
                  className="flex justify-center items-center gap-2 box-border rounded-full"
                  style={{
                    border: '2px solid #000',
                    background: 'transparent',
                    padding: '10px 24px'
                  }}
                  data-figma-node="9251:147"
                >
                  <span 
                    className="text-black inline-block"
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 500,
                      lineHeight: '150%'
                    }}
                  >
                    En savoir plus
                  </span>
                </div>
              </div>
              <div 
                className="bg-gray-300 rounded-[40px] flex-1"
                style={{
                  aspectRatio: '1',
                  height: '600px'
                }}
                data-figma-node="9238:608"
              ></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}