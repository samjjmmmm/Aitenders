
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MdClose } from "react-icons/md";

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
      <DialogContent className="max-w-6xl w-full h-[90vh] max-h-[1120px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Réservez votre démonstration Aitenders
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 hover:bg-gray-100"
            >
              <MdClose className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="flex-1 p-6">
          {/* HubSpot Meetings Embed */}
          <div 
            className="meetings-iframe-container h-full w-full" 
            data-src="https://meetings.hubspot.com/geoffrey-guilly/website-book-a-demo-?embed=true"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
