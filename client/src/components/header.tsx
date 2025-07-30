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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [location] = useLocation();
  
  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsUseCasesOpen(false);
    setShowLanguageMenu(false);
  }, [location]);
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsUseCasesOpen(false);
    setShowLanguageMenu(false);
  };

  return (
    <header className="relative z-50 bg-aitenders-white-blue/80 backdrop-blur-sm border-b border-aitenders-light-blue">
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/">
                <span className="text-sm font-medium text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors cursor-pointer">
                  Home
                </span>
              </Link>
              <a href="#products" className="text-sm font-medium text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors">
                Products
              </a>
              <Link href="/uc1">
                <span className="text-sm font-medium text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors cursor-pointer">
                  Use Cases
                </span>
              </Link>
              <a href="#about" className="text-sm font-medium text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors">
                About
              </a>
            </nav>

            {/* Mobile Menu Button - Only show on smaller screens */}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden rounded-full border-aitenders-light-blue hover:bg-aitenders-pale-blue"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      {/* Slide-out Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-aitenders-white-blue shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
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
          
          <nav className="space-y-6">
            {/* Home Button */}
            <Link href="/">
              <div 
                className="flex items-center text-lg text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors cursor-pointer"
                onClick={closeMenu}
              >
                <Home className="w-5 h-5 mr-3" />
                Home
              </div>
            </Link>
            
            <a 
              href="#products" 
              className="block text-lg text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors"
              onClick={closeMenu}
            >
              Products
            </a>
            
            {/* Use Cases with Dropdown */}
            <div className="space-y-2">
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
                        <div className="block text-sm text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors cursor-pointer">
                          Petit
                        </div>
                      </Link>
                      <a href="#moyen" className="block text-sm text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors">
                        Moyen
                      </a>
                      <Link href="/uc3">
                        <div className="block text-sm text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors cursor-pointer">
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
            
            <a 
              href="#about" 
              className="block text-lg text-aitenders-dark-blue hover:text-aitenders-primary-blue transition-colors"
              onClick={closeMenu}
            >
              About Us
            </a>
            
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

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
