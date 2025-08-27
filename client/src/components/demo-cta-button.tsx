
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import HubSpotBookingModal from '@/components/hubspot-booking-modal';

interface DemoCTAButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
}

export default function DemoCTAButton({ 
  className = "",
  size = 'lg',
  variant = 'primary',
  children
}: DemoCTAButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getButtonClasses = () => {
    const baseClasses = "font-bold rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105";
    
    const sizeClasses = {
      sm: "px-6 py-3 text-lg",
      md: "px-10 py-5 text-xl", 
      lg: "px-12 py-6 text-xl"
    };

    const variantClasses = {
      primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white",
      secondary: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
    };

    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  };

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className={getButtonClasses()}
      >
        {children || 'Réservez une Démo'}
      </Button>
      
      <HubSpotBookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
