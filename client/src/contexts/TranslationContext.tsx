import React, { createContext, useContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

interface Language {
  code: string;
  name: string;
  isDefault: boolean;
  isActive: boolean;
}

interface TranslationContextType {
  currentLanguage: string;
  changeLanguage: (languageCode: string) => void;
  languages: Language[];
  t: (key: string, fallback?: string) => string;
  isLoading: boolean;
  translations: Record<string, string>;
}

// Create context with default values to prevent undefined errors
const TranslationContext = createContext<TranslationContextType>({
  currentLanguage: 'fr',
  changeLanguage: () => {},
  languages: [],
  t: (key: string, fallback?: string) => fallback || key,
  isLoading: false,
  translations: {},
});

interface TranslationProviderProps {
  children: React.ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<string>('fr');

  // Fetch available languages
  const { data: languages = [] } = useQuery<Language[]>({
    queryKey: ['/api/translations/languages'],
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  // Fetch translations for current language
  const { data: translations = {}, isLoading } = useQuery({
    queryKey: ['/api/translations', currentLanguage],
    queryFn: async () => {
      const response = await fetch(`/api/translations/${currentLanguage}?_cache=${Date.now()}`);
      if (!response.ok) {
        throw new Error('Failed to fetch translations');
      }
      const result = await response.json();
      console.log(`Loaded ${Object.keys(result).length} translations for ${currentLanguage}`);
      const uc1Count = Object.keys(result).filter(k => k.startsWith('uc1.')).length;
      console.log(`UC1 translations loaded: ${uc1Count}`);
      return result as Record<string, string>;
    },
    enabled: !!currentLanguage,
    staleTime: 1000 * 60 * 1, // 1 minute to force refresh
    gcTime: 1000 * 60 * 1, // 1 minute garbage collection time (renamed from cacheTime)
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  // Translation function with fallback
  const t = (key: string, fallback?: string): string => {
    if (isLoading) return fallback || key;
    const translationMap = translations || {};
    return translationMap[key] || fallback || key;
  };

  // Change language function
  const changeLanguage = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    // Store in localStorage for persistence
    localStorage.setItem('aitenders-language', languageCode);
  };

  // Initialize language from localStorage or default to French
  useEffect(() => {
    const savedLanguage = localStorage.getItem('aitenders-language');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const value: TranslationContextType = {
    currentLanguage,
    changeLanguage,
    languages,
    t,
    isLoading,
    translations,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useGlobalTranslations() {
  const context = useContext(TranslationContext);
  return context;
}