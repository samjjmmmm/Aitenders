// src/components/ClientLogos.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/ClientLogos.module.css';

export default function ClientLogos({ t_prefix }: { t_prefix: string }) {
  const { t } = useTranslation();

  const logos = [
    { name: "Vinci", src: "https://7b296e3cdc356653bd8ddc60d0118593.cdn.bubble.io/cdn-cgi/image/w=192,h=77,f=auto,dpr=1,fit=contain/f1678788131510x657691839410021800/logo%20client_vinci.png" },
    { name: "Eiffage", src: "https://7b296e3cdc356653bd8ddc60d0118593.cdn.bubble.io/cdn-cgi/image/w=192,h=77,f=auto,dpr=1,fit=contain/f1678788145140x676564290904210200/logo%20client_eiffage.png" },
    { name: "Equans", src: "https://7b296e3cdc356653bd8ddc60d0118593.cdn.bubble.io/cdn-cgi/image/w=192,h=77,f=auto,dpr=1,fit=contain/f1678788168917x606403587556325600/logo%20client_equans.png" },
    { name: "NGE", src: "https://7b296e3cdc356653bd8ddc60d0118593.cdn.bubble.io/cdn-cgi/image/w=192,h=77,f=auto,dpr=1,fit=contain/f1678788157547x760109737354937000/logo%20client_nge.png" },
  ];

  // We only need to duplicate the logos once for a seamless loop
  const duplicatedLogos = [...logos, ...logos]; 

  return (
    <section className={styles.clientLogosSection}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-8 min-h-[1.5rem]"> 
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-gray-200"></div> 
          <h2 className="absolute z-10 bg-slate-50 px-3 text-lg text-slate-700 font-medium whitespace-nowrap left-1/2 -translate-x-1/2">
            {t(`${t_prefix}.title`)}
          </h2>
        </div>

        <div className={styles.logosWrapper}>
          {/* Apply the CSS animation class here */}
          <div className={styles.logoScroll}>
            {duplicatedLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}