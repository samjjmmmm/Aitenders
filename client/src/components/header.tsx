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

              <Button 
                variant="outline" 
                size="icon" 
                onClick={toggleMenu}
                className="rounded-full border-aitenders-light-blue hover:bg-aitenders-pale-blue"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/40 z-[55] transition-opacity duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`
        }
      />

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[60] shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`
        }
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <Button variant="ghost" size="icon" onClick={closeMenu}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          <nav className="flex-grow p-4 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={index} className="border-b last:border-b-0">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setIsUseCaseMenuOpen(!isUseCaseMenuOpen)}
                        className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-700 hover:text-black"
                      >
                        <span>{item.title}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${isUseCaseMenuOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isUseCaseMenuOpen && (
                        <ul className="pl-4 pt-1 pb-2">
                          {item.children.map((child, childIndex) => (
                            <li key={childIndex}>
                              <Link href={child.href} onClick={closeMenu} className="block py-2 text-sm text-gray-600 hover:text-black">
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link href={item.href || '#'} onClick={closeMenu} className="block py-3 font-medium text-gray-700 hover:text-black">
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}