import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight, Home, Globe } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useGlobalTranslations } from "@/contexts/TranslationContext";

// Import Aitenders logo
import aitendersLogo from "@assets/Untitled(4)_1753712731718.png";

interface HeaderProps {
  language?: string;
  onLanguageChange?: (lang: string) => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const [location] = useLocation();
  
  // Get global translation system
  const { currentLanguage, changeLanguage } = useGlobalTranslations();
  
  // Close menu when location changes
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsUseCasesOpen(false);
  };



  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-aitenders-white-blue border-b border-aitenders-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img 
                src={aitendersLogo} 
                alt="Aitenders" 
                className="h-8 w-auto"
              />
            </div>
          </Link>
          
          {/* Right Section */}
          <div className="flex items-center space-x-3">

            
            {/* Simple Language Switcher */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => changeLanguage('fr')}
                className={`px-2 py-1 text-xs rounded ${currentLanguage === 'fr' ? 'bg-aitenders-primary-blue text-white' : 'text-aitenders-dark-blue hover:bg-aitenders-pale-blue'}`}
              >
                FR
              </button>
              <span className="text-aitenders-light-blue">|</span>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 text-xs rounded ${currentLanguage === 'en' ? 'bg-aitenders-primary-blue text-white' : 'text-aitenders-dark-blue hover:bg-aitenders-pale-blue'}`}
              >
                EN
              </button>
            </div>

            {/* Menu Button */}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full border-aitenders-light-blue hover:bg-aitenders-pale-blue"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Right Slide-out Menu */}
      <div className={`right-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-aitenders-black">Menu</span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={closeMenu}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <nav className="space-y-4">
            {/* Home Button */}
            <Link href="/">
              <div 
                className="flex items-center py-2 text-lg text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors cursor-pointer"
                onClick={closeMenu}
              >
                <Home className="w-5 h-5 mr-3" />
                Home
              </div>
            </Link>
            
            <div className="py-2">
              <Link href="/product">
                <div 
                  className="block text-lg text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors cursor-pointer"
                  onClick={closeMenu}
                >
                  Product
                </div>
              </Link>
            </div>
            
            {/* Use Cases with Dropdown */}
            <div className="py-2">
              <div 
                className="flex items-center justify-between text-lg text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors cursor-pointer"
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
                    <div className="text-sm font-semibold text-aitenders-dark-blue mb-2">→ Par phase :</div>
                    <div className="ml-4 space-y-2">
                      <a href="#offre" className="block text-sm text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors">
                        Offre
                      </a>
                      <a href="#execution" className="block text-sm text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors">
                        Exécution
                      </a>
                      <a href="#redaction" className="block text-sm text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors">
                        Rédaction
                      </a>
                    </div>
                  </div>
                  
                  {/* Par niveau */}
                  <div>
                    <div className="text-sm font-semibold text-aitenders-dark-blue mb-2">→ Par niveau :</div>
                    <div className="ml-4 space-y-2">
                      <Link href="/uc1">
                        <div className="block text-sm text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors cursor-pointer" onClick={closeMenu}>
                          Petit
                        </div>
                      </Link>
                      <a href="#moyen" className="block text-sm text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors">
                        Moyen
                      </a>
                      <Link href="/uc3">
                        <div className="block text-sm text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors cursor-pointer" onClick={closeMenu}>
                          Complexe
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Voir tous les cas d'usage */}
                  <div className="pt-2 border-t border-gray-100">
                    <a 
                      href="#all-use-cases" 
                      className="block text-sm text-aitenders-primary-blue hover:text-aitenders-dark-blue font-medium transition-colors"
                    >
                      → Voir tous les cas d'usage
                    </a>
                    <span className="text-xs text-aitenders-dark-blue/60 ml-2">(grid avec filtres)</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="py-2">
              <Link href="/word-addon">
                <div 
                  className="block text-lg text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors cursor-pointer"
                  onClick={closeMenu}
                >
                  Word Add-in
                </div>
              </Link>
            </div>
            
            <div className="py-2">
              <Link href="/privacy">
                <div 
                  className="block text-lg text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors cursor-pointer"
                  onClick={closeMenu}
                >
                  Privacy
                </div>
              </Link>
            </div>
            
            <div className="py-2">
              <a 
                href="#about" 
                className="block text-lg text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors"
                onClick={closeMenu}
              >
                About Us
              </a>
            </div>
            
            <div className="py-2">
              <Link href="/security">
                <div 
                  className="block text-lg text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors cursor-pointer"
                  onClick={closeMenu}
                >
                  Security
                </div>
              </Link>
            </div>
            
            <div className="py-2">
              <a 
                href="https://aitenders.welcomekit.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors"
                onClick={closeMenu}
              >
                Career
              </a>
            </div>
            
            <div className="pt-6 border-t border-aitenders-light-blue">
              <div className="space-y-4 text-sm text-aitenders-dark-blue">
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
    </header>
  );
}
