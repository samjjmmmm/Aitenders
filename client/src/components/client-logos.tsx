import { useGlobalTranslations } from '@/contexts/TranslationContext';

interface ClientLogosProps {
  language?: 'en' | 'fr';
}

export default function ClientLogos({ language = 'fr' }: ClientLogosProps) {
  const { t } = useGlobalTranslations();
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

  // Duplicate logos for seamless scroll
  const duplicatedLogos = [...logos, ...logos];

  // Legacy fallback translations
  const fallbackT = {
    fr: {
      title: "Approuvé par les Leaders de l'Industrie",
      subtitle: "Rejoignez les entreprises de premier plan qui font confiance à Aitenders pour leur gestion d'appels d'offres"
    },
    en: {
      title: "Trusted by Industry Leaders",
      subtitle: "Join leading companies who trust Aitenders for their tender management"
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="flex logo-scroll space-x-12 items-center">
            {duplicatedLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
