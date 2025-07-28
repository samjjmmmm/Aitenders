import { Button } from "@/components/ui/button";
import { Menu, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  return (
    <header className="relative z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Aitenders</span>
            </div>
          </Link>
          
          {/* Contact Info */}
          <div className="hidden md:flex items-center text-sm text-gray-600 space-x-6">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>contact@aitenders.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Saint-Etienne | 42100</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">
              Products
            </a>
            <a href="#use-cases" className="text-gray-700 hover:text-blue-600 transition-colors">
              Use Cases
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About Us
            </a>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
