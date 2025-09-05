// src/components/header.tsx
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from 'react-i18next';

// Import your logo
import aitendersLogo from "@assets/Untitled(4)_1753712731718.png";

// Type definitions for our navigation data structure
type NavLink = {
  title: string;
  href: string;
};

type NavItem = {
  title: string;
  href?: string;
  children?: NavLink[];
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isUseCaseMenuOpen, setIsUseCaseMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  const { t, i18n } = useTranslation();

  const potentialNavItems = t('header.navigation', { returnObjects: true });
  const navItems: NavItem[] = Array.isArray(potentialNavItems) ? potentialNavItems : [];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsUseCaseMenuOpen(false);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-aitenders-white-blue border-b border-aitenders-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" onClick={closeMenu}>
              <div className="flex items-center cursor-pointer">
                <img src={aitendersLogo} alt="Aitenders" className="h-8 w-auto" />
              </div>
            </Link>

            <div className="flex items-center space-x-3">
              <div className="relative" ref={languageMenuRef}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="rounded-full border-aitenders-light-blue hover:bg-aitenders-pale-blue px-3 py-1 h-8 text-xs font-medium"
                >
                  <Globe className="w-3 h-3 mr-1" />
                  {i18n.language.toUpperCase()}
                </Button>
                {isLanguageMenuOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-white border border-aitenders-light-blue rounded-lg shadow-lg py-1 z-50 min-w-[160px]">
                    <button onClick={() => handleLanguageChange('fr')} className={`block w-full text-left px-3 py-2 text-sm hover:bg-aitenders-pale-blue transition-colors ${i18n.language === 'fr' ? 'bg-aitenders-pale-blue font-medium' : ''}`}>
                      🇫🇷 Français
                    </button>
                    <button onClick={() => handleLanguageChange('en')} className={`block w-full text-left px-3 py-2 text-sm hover:bg-aitenders-pale-blue transition-colors ${i18n.language === 'en' ? 'bg-aitenders-pale-blue font-medium' : ''}`}>
                      🇬🇧 English
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      
    </>
  );
}