// src/components/ClientLogos.tsx
import React from 'react';
// Note: We don't need to import a CSS module file here because it uses global Tailwind classes

// You can keep these if you plan to use them, but they aren't used in this component's JSX
// import { useGlobalTranslations } from '@/contexts/TranslationContext';
// interface ClientLogosProps {
//   language?: 'en' | 'fr';
// }

export default function ClientLogos() { // Simplified the component signature
  // const { t } = useGlobalTranslations();
  const logos = [
    {
      name: "Vinci",
      src: "https://7b296e3cdc356653bd8ddc60d0118593.cdn.bubble.io/cdn-cgi/image/w=192,h=77,f=auto,dpr=1,fit=contain/f1678788131510x657691839410021800/logo%20client_vinci.png",
    },
    {
      name: "Eiffage",
      src: "https://7b296e3cdc356653bd8ddc60d0118593.cdn.bubble.io/cdn-cgi/image/w=192,h=77,f=auto,dpr=1,fit=contain/f1678788145140x676564290904210200/logo%20client_eiffage.png",
    },
    {
      name: "Equans",
      src: "https://7b296e3cdc356653bd8ddc60d0118593.cdn.bubble.io/cdn-cgi/image/w=192,h=77,f=auto,dpr=1,fit=contain/f1678788168917x606403587556325600/logo%20client_equans.png",
    },
    {
      name: "NGE",
      src: "https://7b296e3cdc356653bd8ddc60d0118593.cdn.bubble.io/cdn-cgi/image/w=192,h=77,f=auto,dpr=1,fit=contain/f1678788157547x760109737354937000/logo%20client_nge.png",
    },
    {
      name: "Systra",
      src: "https://7b296e3cdc356653bd8ddc60d0118593.cdn.bubble.io/cdn-cgi/image/w=192,h=77,f=auto,dpr=1,fit=contain/f1678788181675x267408070739733950/logo%20client_systra.png",
    },
    {
      name: "Poma",
      src: "https://7b296e3cdc356653bd8ddc60d0118593.cdn.bubble.io/cdn-cgi/image/w=192,h=77,f=auto,dpr=1,fit=contain/f1678788120450x469540811303333900/logo%20client_poma.png",
    },
  ];

  // Duplicate logos for the seamless scroll effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl text-gray-600 mb-8">
          Over 5 000 Users Trust Aitenders to power their projects
        </h2>
        <div className="overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex logo-scroll space-x-16 items-center">
            {duplicatedLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}