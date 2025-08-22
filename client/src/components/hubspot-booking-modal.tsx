
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface HubSpotBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HubSpotBookingModal({ isOpen, onClose }: HubSpotBookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Load HubSpot script when modal opens
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
      script.async = true;
      document.head.appendChild(script);

      return () => {
        // Cleanup script when component unmounts
        const existingScript = document.querySelector('script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[90vh] max-h-[900px] p-0 overflow-y-auto">
        <DialogHeader className="p-6 pb-4 border-b flex-shrink-0">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Réservez votre démonstration Aitenders
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 p-6 min-h-0">
          {/* HubSpot Meetings Embed */}
          <div 
            className="meetings-iframe-container w-full min-h-[700px]" 
            data-src="https://meetings.hubspot.com/geoffrey-guilly/website-book-a-demo-?embed=true"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
