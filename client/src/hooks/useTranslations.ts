import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

// Translation hook for managing multilingual content
export function useTranslations(page?: string) {
  const [currentLanguage, setCurrentLanguage] = useState<string>('fr');

  // Fetch available languages
  const { data: languages } = useQuery({
    queryKey: ['/api/translations/languages'],
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  // Fetch translations for current language and page
  const { data: translations, isLoading } = useQuery({
    queryKey: ['/api/translations', currentLanguage, page],
    queryFn: async () => {
      const url = page 
        ? `/api/translations/${currentLanguage}?page=${page}`
        : `/api/translations/${currentLanguage}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch translations');
      }
      return response.json();
    },
    enabled: !!currentLanguage,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Translation function with fallback
  const t = (key: string, fallback?: string): string => {
    if (isLoading) return fallback || key;
    return translations?.[key] || fallback || key;
  };

  // Change language function
  const changeLanguage = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    // Optionally store in localStorage for persistence
    localStorage.setItem('aitenders-language', languageCode);
  };

  // Initialize language from localStorage or default to French
  useEffect(() => {
    const savedLanguage = localStorage.getItem('aitenders-language');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  return {
    t,
    currentLanguage,
    changeLanguage,
    languages: languages || [],
    isLoading,
    translations: translations || {},
  };
}