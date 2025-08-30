import ImpactRevealSection from '../components/ImpactRevealSection';

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

     

      {/* Block 4 - Impact Reveal Section avec "L'équipe Projet" */}
      <ImpactRevealSection />

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

      {/* Block 7 - Team 20 Section avec 6 cartes de fonctionnalités */}
      <div 
        className="flex flex-col items-center gap-20 w-full overflow-hidden"
        style={{
          padding: '194px 64px 112px 64px',
          background: '#fff',
          height: '2410px'
        }}
        data-figma-node="9248:29689"
      >
        <div 
          className="flex flex-col items-start gap-20 w-full"
          style={{ maxWidth: '1280px' }}
          data-figma-node="9248:29690"
        >
          <div 
            className="flex items-start gap-20 w-full"
            data-figma-node="9248:29691"
          >
            <div 
              className="flex flex-col items-start gap-8 w-[356px]"
              data-figma-node="9248:29692"
            >
              <div 
                className="flex flex-col items-start gap-4 w-full"
                data-figma-node="9248:29693"
              >
                <div 
                  className="flex justify-center items-center gap-2 box-border rounded-full"
                  style={{
                    border: '2px solid #000',
                    background: 'transparent',
                    padding: '10px 24px'
                  }}
                  data-figma-node="9254:155"
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
                    Impact additionnel
                  </span>
                </div>
                <div 
                  className="flex flex-col items-center gap-6 w-full"
                  data-figma-node="9248:29696"
                >
                  <span 
                    className="text-black inline-block"
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '52px',
                      letterSpacing: '-0.52px',
                      fontWeight: 500,
                      lineHeight: '120%'
                    }}
                    data-figma-node="9248:29697"
                  >
                    Augmentez encore plus vos équipes
                  </span>
                  <span 
                    className="text-black inline-block"
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '150%'
                    }}
                    data-figma-node="9248:29698"
                  >
                    Sur les offres semie-complexe, découvrez des fonctionnalités qui ajoutent une dimension stratégique à votre développement commercial.
                  </span>
                </div>
              </div>
            </div>
            <div 
              className="flex flex-col items-start gap-16 w-full flex-1"
              data-figma-node="9248:29701"
            >
              {/* Row 1 */}
              <div 
                className="flex items-start gap-16 w-full"
                data-figma-node="9248:30265"
              >
                <div 
                  className="w-[382px] h-[610.11px]"
                  data-figma-node="9254:174"
                >
                  <div 
                    className="bg-[#f2f1f3] flex-shrink-0 w-[382px] h-[477.5px]"
                    data-figma-node="9254:175"
                  ></div>
                  <div 
                    className="flex-shrink-0 w-6 h-6"
                    data-figma-node="9254:176"
                  >
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.7285 9.40381V15.4038H7.72852V9.40381H17.7285ZM19.7285 3.40381H17.7285V6.40381H19.7285V3.40381ZM7.72852 3.40381H5.72852V6.40381H7.72852V3.40381ZM23.7285 7.40381H20.7285V9.40381H23.7285V7.40381ZM19.7285 7.40381H5.72852V17.4038H19.7285V7.40381ZM4.72852 7.40381H1.72852V9.40381H4.72852V7.40381ZM23.7285 15.4038H20.7285V17.4038H23.7285V15.4038ZM4.72852 15.4038H1.72852V17.4038H4.72852V15.4038ZM19.7285 18.4038H17.7285V21.4038H19.7285V18.4038ZM7.72852 18.4038H5.72852V21.4038H7.72852V18.4038Z" fill="black"/>
                    </svg>
                  </div>
                  <span 
                    className="text-[#19171c] inline-block flex-col flex-shrink-0 justify-center"
                    style={{
                      letterSpacing: '-0.2px',
                      width: '130.93px',
                      height: '24px',
                      fontFamily: 'Inter',
                      fontSize: '18.906px',
                      fontWeight: 600,
                      lineHeight: '24px'
                    }}
                    data-figma-node="9254:178"
                  >
                    Analyse prédictive
                  </span>
                  <span 
                    className="text-[#6e6e73] inline-block flex-col flex-shrink-0 justify-center"
                    style={{
                      letterSpacing: '-0.32px',
                      width: '349.76px',
                      height: '68px',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '24px'
                    }}
                    data-figma-node="9254:179"
                  >
                    Détectez les risques avant qu'ils n'impactent votre projet grâce à l'IA prédictive.
                  </span>
                </div>
                <div 
                  className="w-[382px] h-[610.11px]"
                  data-figma-node="9254:181"
                >
                  <div 
                    className="bg-[#f2f1f3] flex-shrink-0 w-[382px] h-[477.5px]"
                    data-figma-node="9254:182"
                  ></div>
                  <div 
                    className="flex-shrink-0 w-6 h-6"
                    data-figma-node="9254:183"
                  >
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.7285 9.40381V15.4038H7.72852V9.40381H17.7285ZM19.7285 3.40381H17.7285V6.40381H19.7285V3.40381ZM7.72852 3.40381H5.72852V6.40381H7.72852V3.40381ZM23.7285 7.40381H20.7285V9.40381H23.7285V7.40381ZM19.7285 7.40381H5.72852V17.4038H19.7285V7.40381ZM4.72852 7.40381H1.72852V9.40381H4.72852V7.40381ZM23.7285 15.4038H20.7285V17.4038H23.7285V15.4038ZM4.72852 15.4038H1.72852V17.4038H4.72852V15.4038ZM19.7285 18.4038H17.7285V21.4038H19.7285V18.4038ZM7.72852 18.4038H5.72852V21.4038H7.72852V18.4038Z" fill="black"/>
                    </svg>
                  </div>
                  <span 
                    className="text-[#19171c] inline-block flex-col flex-shrink-0 justify-center"
                    style={{
                      letterSpacing: '-0.2px',
                      width: '130.93px',
                      height: '24px',
                      fontFamily: 'Inter',
                      fontSize: '18.906px',
                      fontWeight: 600,
                      lineHeight: '24px'
                    }}
                    data-figma-node="9254:185"
                  >
                    Suivi temps réel
                  </span>
                  <span 
                    className="text-[#6e6e73] inline-block flex-col flex-shrink-0 justify-center"
                    style={{
                      letterSpacing: '-0.32px',
                      width: '349.76px',
                      height: '68px',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '24px'
                    }}
                    data-figma-node="9254:186"
                  >
                    Surveillez l'avancement de vos projets avec des tableaux de bord en temps réel.
                  </span>
                </div>
              </div>

              {/* Row 2 */}
              <div 
                className="flex items-start gap-16 w-full"
                data-figma-node="9254:254"
              >
                <div 
                  className="flex flex-1 items-start gap-16 w-full"
                  data-figma-node="9254:282"
                >
                  <div 
                    className="w-[382px] h-[610.11px]"
                    data-figma-node="9254:283"
                  >
                    <div 
                      className="bg-[#f2f1f3] flex-shrink-0 w-[382px] h-[477.5px]"
                      data-figma-node="9254:284"
                    ></div>
                    <div 
                      className="flex-shrink-0 w-6 h-6"
                      data-figma-node="9254:285"
                    >
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7285 9.40381V15.4038H7.72852V9.40381H17.7285ZM19.7285 3.40381H17.7285V6.40381H19.7285V3.40381ZM7.72852 3.40381H5.72852V6.40381H7.72852V3.40381ZM23.7285 7.40381H20.7285V9.40381H23.7285V7.40381ZM19.7285 7.40381H5.72852V17.4038H19.7285V7.40381ZM4.72852 7.40381H1.72852V9.40381H4.72852V7.40381ZM23.7285 15.4038H20.7285V17.4038H23.7285V15.4038ZM4.72852 15.4038H1.72852V17.4038H4.72852V15.4038ZM19.7285 18.4038H17.7285V21.4038H19.7285V18.4038ZM7.72852 18.4038H5.72852V21.4038H7.72852V18.4038Z" fill="black"/>
                      </svg>
                    </div>
                    <span 
                      className="text-[#19171c] inline-block flex-col flex-shrink-0 justify-center"
                      style={{
                        letterSpacing: '-0.2px',
                        width: '130.93px',
                        height: '24px',
                        fontFamily: 'Inter',
                        fontSize: '18.906px',
                        fontWeight: 600,
                        lineHeight: '24px'
                      }}
                      data-figma-node="9254:287"
                    >
                      Collaboration
                    </span>
                    <span 
                      className="text-[#6e6e73] inline-block flex-col flex-shrink-0 justify-center"
                      style={{
                        letterSpacing: '-0.32px',
                        width: '349.76px',
                        height: '68px',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '24px'
                      }}
                      data-figma-node="9254:288"
                    >
                      Centralisez les échanges et synchronisez votre équipe autour d'une vision partagée.
                    </span>
                  </div>
                  <div 
                    className="w-[382px] h-[610.11px]"
                    data-figma-node="9254:289"
                  >
                    <div 
                      className="bg-[#f2f1f3] flex-shrink-0 w-[382px] h-[477.5px]"
                      data-figma-node="9254:290"
                    ></div>
                    <div 
                      className="flex-shrink-0 w-6 h-6"
                      data-figma-node="9254:291"
                    >
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7285 9.40381V15.4038H7.72852V9.40381H17.7285ZM19.7285 3.40381H17.7285V6.40381H19.7285V3.40381ZM7.72852 3.40381H5.72852V6.40381H7.72852V3.40381ZM23.7285 7.40381H20.7285V9.40381H23.7285V7.40381ZM19.7285 7.40381H5.72852V17.4038H19.7285V7.40381ZM4.72852 7.40381H1.72852V9.40381H4.72852V7.40381ZM23.7285 15.4038H20.7285V17.4038H23.7285V15.4038ZM4.72852 15.4038H1.72852V17.4038H4.72852V15.4038ZM19.7285 18.4038H17.7285V21.4038H19.7285V18.4038ZM7.72852 18.4038H5.72852V21.4038H7.72852V18.4038Z" fill="black"/>
                      </svg>
                    </div>
                    <span 
                      className="text-[#19171c] inline-block flex-col flex-shrink-0 justify-center"
                      style={{
                        letterSpacing: '-0.2px',
                        width: '130.93px',
                        height: '24px',
                        fontFamily: 'Inter',
                        fontSize: '18.906px',
                        fontWeight: 600,
                        lineHeight: '24px'
                      }}
                      data-figma-node="9254:293"
                    >
                      Automatisation
                    </span>
                    <span 
                      className="text-[#6e6e73] inline-block flex-col flex-shrink-0 justify-center"
                      style={{
                        letterSpacing: '-0.32px',
                        width: '349.76px',
                        height: '68px',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '24px'
                      }}
                      data-figma-node="9254:294"
                    >
                      Automatisez les tâches répétitives pour libérer du temps pour la stratégie.
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div 
                className="flex items-start gap-16 w-full"
                data-figma-node="9254:296"
              >
                <div 
                  className="flex flex-1 items-start gap-16 w-full"
                  data-figma-node="9254:297"
                >
                  <div 
                    className="w-[382px] h-[610.11px]"
                    data-figma-node="9254:298"
                  >
                    <div 
                      className="bg-[#f2f1f3] flex-shrink-0 w-[382px] h-[477.5px]"
                      data-figma-node="9254:299"
                    ></div>
                    <div 
                      className="flex-shrink-0 w-6 h-6"
                      data-figma-node="9254:300"
                    >
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7285 9.40381V15.4038H7.72852V9.40381H17.7285ZM19.7285 3.40381H17.7285V6.40381H19.7285V3.40381ZM7.72852 3.40381H5.72852V6.40381H7.72852V3.40381ZM23.7285 7.40381H20.7285V9.40381H23.7285V7.40381ZM19.7285 7.40381H5.72852V17.4038H19.7285V7.40381ZM4.72852 7.40381H1.72852V9.40381H4.72852V7.40381ZM23.7285 15.4038H20.7285V17.4038H23.7285V15.4038ZM4.72852 15.4038H1.72852V17.4038H4.72852V15.4038ZM19.7285 18.4038H17.7285V21.4038H19.7285V18.4038ZM7.72852 18.4038H5.72852V21.4038H7.72852V18.4038Z" fill="black"/>
                      </svg>
                    </div>
                    <span 
                      className="text-[#19171c] inline-block flex-col flex-shrink-0 justify-center"
                      style={{
                        letterSpacing: '-0.2px',
                        width: '130.93px',
                        height: '24px',
                        fontFamily: 'Inter',
                        fontSize: '18.906px',
                        fontWeight: 600,
                        lineHeight: '24px'
                      }}
                      data-figma-node="9254:302"
                    >
                      Intégrations
                    </span>
                    <span 
                      className="text-[#6e6e73] inline-block flex-col flex-shrink-0 justify-center"
                      style={{
                        letterSpacing: '-0.32px',
                        width: '349.76px',
                        height: '68px',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '24px'
                      }}
                      data-figma-node="9254:303"
                    >
                      Connectez vos outils existants pour un workflow sans interruption.
                    </span>
                  </div>
                  <div 
                    className="w-[382px] h-[610.11px]"
                    data-figma-node="9254:304"
                  >
                    <div 
                      className="bg-[#f2f1f3] flex-shrink-0 w-[382px] h-[477.5px]"
                      data-figma-node="9254:305"
                    ></div>
                    <div 
                      className="flex-shrink-0 w-6 h-6"
                      data-figma-node="9254:306"
                    >
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7285 9.40381V15.4038H7.72852V9.40381H17.7285ZM19.7285 3.40381H17.7285V6.40381H19.7285V3.40381ZM7.72852 3.40381H5.72852V6.40381H7.72852V3.40381ZM23.7285 7.40381H20.7285V9.40381H23.7285V7.40381ZM19.7285 7.40381H5.72852V17.4038H19.7285V7.40381ZM4.72852 7.40381H1.72852V9.40381H4.72852V7.40381ZM23.7285 15.4038H20.7285V17.4038H23.7285V15.4038ZM4.72852 15.4038H1.72852V17.4038H4.72852V15.4038ZM19.7285 18.4038H17.7285V21.4038H19.7285V18.4038ZM7.72852 18.4038H5.72852V21.4038H7.72852V18.4038Z" fill="black"/>
                      </svg>
                    </div>
                    <span 
                      className="text-[#19171c] inline-block flex-col flex-shrink-0 justify-center"
                      style={{
                        letterSpacing: '-0.2px',
                        width: '130.93px',
                        height: '24px',
                        fontFamily: 'Inter',
                        fontSize: '18.906px',
                        fontWeight: 600,
                        lineHeight: '24px'
                      }}
                      data-figma-node="9254:308"
                    >
                      Reporting avancé
                    </span>
                    <span 
                      className="text-[#6e6e73] inline-block flex-col flex-shrink-0 justify-center"
                      style={{
                        letterSpacing: '-0.32px',
                        width: '349.76px',
                        height: '68px',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '24px'
                      }}
                      data-figma-node="9254:309"
                    >
                      Générez des rapports détaillés pour optimiser vos performances futures.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block 8 - Portfolio 11 Section avec projets déployés */}
      <div 
        className="flex flex-col items-center gap-20 w-full overflow-hidden"
        style={{
          padding: '279px 64px 112px 64px',
          background: '#f2f2f2',
          height: '1306px'
        }}
        data-figma-node="9248:30010"
      >
        <div 
          className="flex flex-col items-center gap-20 w-full"
          style={{ maxWidth: '1280px' }}
          data-figma-node="9248:30011"
        >
          <div 
            className="flex flex-col items-center gap-4 w-full"
            style={{ maxWidth: '768px' }}
            data-figma-node="9248:30012"
          >
            <div 
              className="flex items-center h-6"
              data-figma-node="9248:30013"
            ></div>
            <div 
              className="flex flex-col items-center gap-6 w-full"
              data-figma-node="9248:30015"
            >
              <span 
                className="text-black text-center inline-block"
                style={{
                  fontFamily: 'Raleway',
                  fontSize: '52px',
                  letterSpacing: '-0.52px',
                  fontWeight: 500,
                  lineHeight: '120%'
                }}
                data-figma-node="9248:30016"
              >
                Déployé sur de nombreux projets
              </span>
            </div>
          </div>
          <div 
            className="flex flex-col items-center gap-16 w-full"
            data-figma-node="9248:30018"
          >
            <div 
              className="flex flex-col items-center gap-16 w-full"
              data-figma-node="9248:30019"
            >
              <div 
                className="flex items-start gap-8 w-full"
                data-figma-node="9248:30769"
              >
                <div 
                  className="flex flex-col items-start gap-6 w-full flex-1"
                  data-figma-node="9248:30672"
                >
                  <div 
                    className="bg-gray-300 rounded-[32px] w-full"
                    style={{
                      aspectRatio: '16/9',
                      height: '166.5px'
                    }}
                    data-figma-node="9248:30673"
                  ></div>
                  <div 
                    className="flex flex-col items-start gap-6 w-full"
                    data-figma-node="9248:30674"
                  >
                    <div 
                      className="flex flex-col items-start gap-4 w-full"
                      data-figma-node="9254:325"
                    >
                      <div 
                        className="flex flex-col items-start gap-2 w-full"
                        data-figma-node="9254:326"
                      >
                        <span 
                          className="text-black inline-block"
                          style={{
                            fontFamily: 'Raleway',
                            fontSize: '28px',
                            letterSpacing: '-0.28px',
                            fontWeight: 500,
                            lineHeight: '140%'
                          }}
                          data-figma-node="9254:327"
                        >
                          Centre Logistique Régional
                        </span>
                      </div>
                    </div>
                    <div 
                      className="flex flex-col items-start gap-4 w-full"
                      data-figma-node="9248:30675"
                    >
                      <div 
                        className="flex flex-col items-start gap-2 w-full"
                        data-figma-node="9248:30676"
                      >
                        <span 
                          className="text-black inline-block"
                          style={{
                            fontFamily: 'Roboto',
                            fontSize: '20px',
                            fontWeight: 400,
                            lineHeight: '150%'
                          }}
                          data-figma-node="9248:30678"
                        >
                          Offre 8.5M€
                        </span>
                        <span 
                          className="text-black inline-block"
                          style={{
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '150%'
                          }}
                          data-figma-node="9254:334"
                        >
                          Construction d'un hub logistique moderne de 25,000 m² avec systèmes automatisés et aires de manœuvre. Coordination de 10 lots techniques spécialisés incluant manutention, sécurité et connectivité.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                  className="flex flex-col items-start gap-6 w-full flex-1"
                  data-figma-node="9248:30691"
                >
                  <div 
                    className="bg-gray-300 rounded-[32px] w-full"
                    style={{
                      aspectRatio: '16/9',
                      height: '166.5px'
                    }}
                    data-figma-node="9254:380"
                  ></div>
                  <div 
                    className="flex flex-col items-start gap-6 w-full"
                    data-figma-node="9254:381"
                  >
                    <div 
                      className="flex flex-col items-start gap-4 w-full"
                      data-figma-node="9254:382"
                    >
                      <div 
                        className="flex flex-col items-start gap-2 w-full"
                        data-figma-node="9254:383"
                      >
                        <span 
                          className="text-black inline-block"
                          style={{
                            fontFamily: 'Raleway',
                            fontSize: '28px',
                            letterSpacing: '-0.28px',
                            fontWeight: 500,
                            lineHeight: '140%'
                          }}
                          data-figma-node="9254:384"
                        >
                          Infrastructure Hospitalière
                        </span>
                      </div>
                    </div>
                    <div 
                      className="flex flex-col items-start gap-4 w-full"
                      data-figma-node="9254:385"
                    >
                      <div 
                        className="flex flex-col items-start gap-2 w-full"
                        data-figma-node="9254:386"
                      >
                        <span 
                          className="text-black inline-block"
                          style={{
                            fontFamily: 'Roboto',
                            fontSize: '20px',
                            fontWeight: 400,
                            lineHeight: '150%'
                          }}
                          data-figma-node="9254:387"
                        >
                          Offre 12.2M€
                        </span>
                        <span 
                          className="text-black inline-block"
                          style={{
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '150%'
                          }}
                          data-figma-node="9254:388"
                        >
                          Rénovation complète d'un complexe hospitalier avec mise aux normes techniques et environnementales. Gestion simultanée de 15 corps de métiers en milieu contraint.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                  className="flex flex-col items-start gap-6 w-full flex-1"
                  data-figma-node="9248:30710"
                >
                  <div 
                    className="bg-gray-300 rounded-[32px] w-full"
                    style={{
                      aspectRatio: '16/9',
                      height: '166.5px'
                    }}
                    data-figma-node="9254:390"
                  ></div>
                  <div 
                    className="flex flex-col items-start gap-6 w-full"
                    data-figma-node="9254:391"
                  >
                    <div 
                      className="flex flex-col items-start gap-4 w-full"
                      data-figma-node="9254:392"
                    >
                      <div 
                        className="flex flex-col items-start gap-2 w-full"
                        data-figma-node="9254:393"
                      >
                        <span 
                          className="text-black inline-block"
                          style={{
                            fontFamily: 'Raleway',
                            fontSize: '28px',
                            letterSpacing: '-0.28px',
                            fontWeight: 500,
                            lineHeight: '140%'
                          }}
                          data-figma-node="9254:394"
                        >
                          Campus Universitaire
                        </span>
                      </div>
                    </div>
                    <div 
                      className="flex flex-col items-start gap-4 w-full"
                      data-figma-node="9254:395"
                    >
                      <div 
                        className="flex flex-col items-start gap-2 w-full"
                        data-figma-node="9254:396"
                      >
                        <span 
                          className="text-black inline-block"
                          style={{
                            fontFamily: 'Roboto',
                            fontSize: '20px',
                            fontWeight: 400,
                            lineHeight: '150%'
                          }}
                          data-figma-node="9254:397"
                        >
                          Offre 6.8M€
                        </span>
                        <span 
                          className="text-black inline-block"
                          style={{
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '150%'
                          }}
                          data-figma-node="9254:398"
                        >
                          Extension d'un campus avec nouvelles salles de cours, laboratoires de recherche et espaces collaboratifs. Intégration des technologies numériques avancées.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div 
                className="flex flex-col justify-center items-center gap-6 w-full"
                style={{ height: '321px' }}
                data-figma-node="9254:312"
              >
                <div 
                  className="flex flex-col justify-center items-center gap-4"
                  data-figma-node="9248:30060"
                >
                  <div 
                    className="flex justify-center items-center gap-2 box-border rounded-full"
                    style={{
                      border: '2px solid #000',
                      background: 'transparent',
                      padding: '10px 24px'
                    }}
                    data-figma-node="9248:30061"
                  >
                    <span 
                      className="text-black inline-block"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: '150%'
                      }}
                      data-figma-node="4179:8963"
                    >
                      Voir tous nos projets
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block 9 - CTA 25 Section avec simulateur de chat */}
      <div 
        className="flex flex-col items-center gap-20 w-full overflow-hidden relative"
        style={{
          padding: '112px 64px',
          background: '#d3d3d3',
          width: '1432px',
          height: '491px',
          bottom: '339.084px',
          left: '0.271px'
        }}
        data-figma-node="9253:31318"
      >
        <div 
          className="flex flex-col items-center gap-8 absolute"
          style={{
            maxWidth: '768px',
            width: '574px',
            top: '61px',
            left: '191px'
          }}
          data-figma-node="9253:31319"
        >
          <div 
            className="flex flex-col items-center gap-6 w-full"
            data-figma-node="9253:31320"
          >
            <span 
              className="text-black inline-block"
              style={{
                letterSpacing: '-0.48px',
                fontFamily: 'Raleway',
                fontSize: '48px',
                fontWeight: 500,
                lineHeight: '120%'
              }}
              data-figma-node="9253:31321"
            >
              Découvrez comment Aitenders répond exactement à vos besoins
            </span>
            <span 
              className="text-black inline-block"
              style={{
                fontFamily: 'Inter',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '150%'
              }}
              data-figma-node="9253:31322"
            >
              Pas de démo générique. Pas de spam commercial. Juste trois questions rapides
            </span>
          </div>
        </div>
        
        <div 
          className="bg-white border border-white rounded-[10px] box-border absolute"
          style={{
            width: '500px',
            height: '232px',
            top: '60px',
            right: '154px',
            boxShadow: '0 0 2px #171a1f1f, 0 0 1px #171a1f12'
          }}
          data-figma-node="9253:31337"
        >
          <span 
            className="inline-block"
            style={{
              color: '#171a1f',
              fontFamily: 'Roboto',
              fontSize: '20px',
              fontWeight: 700,
              lineHeight: '28px'
            }}
            data-figma-node="9253:31338"
          >
            AI Tender Assistant
          </span>
          
          <div 
            className="flex-shrink-0 w-5 h-5 overflow-hidden"
            data-figma-node="9253:31339"
          >
            <div 
              className="flex-shrink-0"
              style={{ width: '14.98px', height: '3.32px' }}
              data-figma-node="9253:31340"
            >
              <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.885 4.87695C11.255 4.87695 11.555 5.17691 11.555 5.54695C11.555 5.91699 11.255 6.21695 10.885 6.21695L1.50496 6.21695C1.13493 6.21695 0.834961 5.91699 0.834961 5.54695C0.834961 5.17691 1.13493 4.87695 1.50496 4.87695L10.885 4.87695Z" fill="#565D6D"/>
                <path d="M5.70599 0.383145C5.95128 0.137845 6.33921 0.122709 6.60239 0.337344L6.65344 0.383145L11.3434 5.07316C11.6051 5.3348 11.6051 5.75891 11.3434 6.02055L6.65344 10.7105C6.3918 10.9722 5.96763 10.9722 5.70599 10.7105C5.44436 10.4489 5.44436 10.0248 5.70599 9.76316L9.9223 5.54685L5.70599 1.33056L5.66023 1.27953C5.44556 1.01638 5.4607 0.628445 5.70599 0.383145Z" fill="#565D6D"/>
              </svg>
            </div>
          </div>
          
          <div 
            className="bg-[#f3f6fc] border border-white rounded-br-[10px] rounded-bl-[10px] flex justify-center items-center box-border"
            style={{
              width: '452px',
              padding: '13px 16px 11px'
            }}
            data-figma-node="9253:31348"
          >
            <span 
              className="flex-shrink-0 inline-block"
              style={{
                color: '#19191f',
                width: '420px',
                fontFamily: 'Montserrat',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '23px'
              }}
              data-figma-node="9253:31349"
            >
              Bonjour ! Je vais vous aider à trouver la solution Aitenders idéale pour votre équipe. Quel est votre secteur d'activité ?
            </span>
          </div>
          
          <div 
            className="bg-white border border-[#dee1e6] rounded-md flex-shrink-0 box-border overflow-hidden"
            style={{
              width: '452px',
              height: '46px'
            }}
            data-figma-node="9253:31350"
          >
            <span 
              className="inline-block"
              style={{
                color: '#565d6d',
                fontFamily: 'Montserrat',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '26px'
              }}
              data-figma-node="9253:31358"
            >
              Cliquez pour démarrer votre évaluation personnalisée...
            </span>
            
            <div 
              className="flex-shrink-0 w-4 h-4 overflow-hidden"
              data-figma-node="9253:31351"
            >
              <div 
                className="flex-shrink-0"
                style={{ width: '10.72px', height: '10.72px' }}
                data-figma-node="9253:31352"
              >
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.885 4.87695C11.255 4.87695 11.555 5.17691 11.555 5.54695C11.555 5.91699 11.255 6.21695 10.885 6.21695L1.50496 6.21695C1.13493 6.21695 0.834961 5.91699 0.834961 5.54695C0.834961 5.17691 1.13493 4.87695 1.50496 4.87695L10.885 4.87695Z" fill="#565D6D"/>
                  <path d="M5.70599 0.383145C5.95128 0.137845 6.33921 0.122709 6.60239 0.337344L6.65344 0.383145L11.3434 5.07316C11.6051 5.3348 11.6051 5.75891 11.3434 6.02055L6.65344 10.7105C6.3918 10.9722 5.96763 10.9722 5.70599 10.7105C5.44436 10.4489 5.44436 10.0248 5.70599 9.76316L9.9223 5.54685L5.70599 1.33056L5.66023 1.27953C5.44556 1.01638 5.4607 0.628445 5.70599 0.383145Z" fill="#565D6D"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}