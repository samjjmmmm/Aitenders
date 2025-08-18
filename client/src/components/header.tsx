import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight, Home, Globe } from "lucide-react";
import { Link, useLocation } from "wouter";

// Import Aitenders logo
import aitendersLogo from "@assets/Untitled(4)_1753712731718.png";

interface HeaderProps {
  language?: 'en' | 'fr';
  onLanguageChange?: (lang: 'en' | 'fr') => void;
}

export default function Header({ language = 'fr', onLanguageChange }: HeaderProps) {
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [location] = useLocation();

  return (
    <>
      {/* Fixed Left Sidebar */}
      <div className="left-sidebar">
        <div className="p-6">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer mb-8">
              <img 
                src={aitendersLogo} 
                alt="Aitenders" 
                className="h-8 w-auto"
              />
            </div>
          </Link>
          
          <nav className="space-y-4">
            {/* Home Button */}
            <Link href="/">
              <div className="flex items-center py-2 text-lg text-white hover:text-blue-300 transition-colors cursor-pointer">
                <Home className="w-5 h-5 mr-3" />
                Home
              </div>
            </Link>
            
            <div className="py-2">
              <a 
                href="#products" 
                className="block text-lg text-white hover:text-blue-300 transition-colors"
              >
                Products
              </a>
            </div>
            
            {/* Use Cases with Dropdown */}
            <div className="py-2">
              <div 
                className="flex items-center justify-between text-lg text-white hover:text-blue-300 transition-colors cursor-pointer"
                onClick={() => setIsUseCasesOpen(!isUseCasesOpen)}
              >
                <span>Use Cases</span>
                {isUseCasesOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </div>
              
              {/* Dropdown Content */}
              {isUseCasesOpen && (
                <div className="ml-6 space-y-4 py-2">
                  {/* Par phase */}
                  <div>
                    <div className="text-sm font-semibold text-white mb-2">→ Par phase :</div>
                    <div className="ml-4 space-y-2">
                      <a href="#offre" className="block text-sm text-gray-300 hover:text-blue-300 transition-colors">
                        Offre
                      </a>
                      <a href="#execution" className="block text-sm text-gray-300 hover:text-blue-300 transition-colors">
                        Exécution
                      </a>
                      <a href="#redaction" className="block text-sm text-gray-300 hover:text-blue-300 transition-colors">
                        Rédaction
                      </a>
                    </div>
                  </div>
                  
                  {/* Par niveau */}
                  <div>
                    <div className="text-sm font-semibold text-white mb-2">→ Par niveau :</div>
                    <div className="ml-4 space-y-2">
                      <Link href="/uc1">
                        <div className="block text-sm text-gray-300 hover:text-blue-300 transition-colors cursor-pointer">
                          Petit
                        </div>
                      </Link>
                      <a href="#moyen" className="block text-sm text-gray-300 hover:text-blue-300 transition-colors">
                        Moyen
                      </a>
                      <Link href="/uc3">
                        <div className="block text-sm text-gray-300 hover:text-blue-300 transition-colors cursor-pointer">
                          Complexe
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Voir tous les cas d'usage */}
                  <div className="pt-2 border-t border-gray-600">
                    <a 
                      href="#all-use-cases" 
                      className="block text-sm text-blue-300 hover:text-white font-medium transition-colors"
                    >
                      → Voir tous les cas d'usage
                    </a>
                    <span className="text-xs text-gray-400 ml-2">(grid avec filtres)</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="py-2">
              <Link href="/word-addon">
                <div className="block text-lg text-white hover:text-blue-300 transition-colors cursor-pointer">
                  Word Add-in
                </div>
              </Link>
            </div>
            
            <div className="py-2">
              <Link href="/privacy">
                <div className="block text-lg text-white hover:text-blue-300 transition-colors cursor-pointer">
                  Privacy
                </div>
              </Link>
            </div>
            
            <div className="py-2">
              <a 
                href="#about" 
                className="block text-lg text-white hover:text-blue-300 transition-colors"
              >
                About Us
              </a>
            </div>
            
            <div className="pt-6 border-t border-gray-600">
              <div className="space-y-4 text-sm text-gray-300">
                <div>
                  <span className="font-medium">Email:</span><br />
                  <span>contact@aitenders.com</span>
                </div>
                <div>
                  <span className="font-medium">Location:</span><br />
                  <span>Saint-Etienne | 42100</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Top Header Bar */}
      <header className="relative z-50 bg-aitenders-white-blue/80 backdrop-blur-sm border-b border-aitenders-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-16">
            {/* Language Switcher */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="rounded-full border-aitenders-light-blue hover:bg-aitenders-pale-blue px-3 py-1 h-8 text-xs font-medium"
              >
                <Globe className="w-3 h-3 mr-1" />
                {language?.toUpperCase()}
              </Button>
              
              {showLanguageMenu && (
                <div className="absolute right-0 top-full mt-1 bg-aitenders-white-blue border border-aitenders-light-blue rounded-lg shadow-lg py-1 z-50">
                  <button
                    onClick={() => {
                      onLanguageChange?.('fr');
                      setShowLanguageMenu(false);
                    }}
                    className={`block w-full text-left px-3 py-1 text-xs hover:bg-aitenders-pale-blue ${language === 'fr' ? 'bg-aitenders-pale-blue font-medium' : ''}`}
                  >
                    FR - Français
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange?.('en');
                      setShowLanguageMenu(false);
                    }}
                    className={`block w-full text-left px-3 py-1 text-xs hover:bg-aitenders-pale-blue ${language === 'en' ? 'bg-aitenders-pale-blue font-medium' : ''}`}
                  >
                    EN - English
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
