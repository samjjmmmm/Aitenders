import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img 
                src="/attached_assets/Untitled(4)_1753693197532.png" 
                alt="Aitenders" 
                className="h-8 w-auto"
              />
            </div>
          </Link>
          
          {/* Menu Button */}
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full border-gray-300 hover:bg-gray-50"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Slide-out Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-gray-900">Menu</span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <nav className="space-y-6">
            <a 
              href="#products" 
              className="block text-lg text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#use-cases" 
              className="block text-lg text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </a>
            <a 
              href="#about" 
              className="block text-lg text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            
            <div className="pt-6 border-t border-gray-200">
              <div className="space-y-4 text-sm text-gray-600">
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
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
