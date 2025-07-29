import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// Import Aitenders logo
import aitendersLogo from "@assets/Untitled(4)_1753712731718.png";

interface ContactSectionProps {
  language?: 'en' | 'fr';
}

export default function ContactSection({ language = 'fr' }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const { toast } = useToast();

  const submitContactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setFormData({ name: "", email: "", company: "", message: "" });
      toast({
        title: language === 'fr' ? "Message envoyé avec succès !" : "Message sent successfully!",
        description: language === 'fr' ? "Nous vous répondrons dans les plus brefs délais." : "We'll get back to you as soon as possible.",
      });
    },
    onError: () => {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Échec de l'envoi du message. Veuillez réessayer." : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      submitContactMutation.mutate(formData);
    }
  };

  const t = {
    fr: {
      title: "Nous Contacter",
      subtitle: "Prêt à transformer votre processus de gestion d'appels d'offres ? Discutons de la façon dont Aitenders peut aider votre organisation à remporter plus de contrats et à optimiser les opérations.",
      email: "Email",
      location: "Localisation",
      linkedin: "LinkedIn",
      followLinkedIn: "Suivez-nous sur LinkedIn",
      requestMeeting: "Demander un Rendez-vous",
      yourName: "Votre Nom",
      yourEmail: "Votre Email", 
      company: "Entreprise",
      messagePlaceholder: "Parlez-nous de vos défis en gestion d'appels d'offres...",
      sending: "Envoi...",
      requestMeetingBtn: "Demander un Rendez-vous",
      copyright: "© 2024 Aitenders. Tous droits réservés.",
      privacy: "Confidentialité",
      terms: "Conditions",
      products: "Produits",
      about: "À propos"
    },
    en: {
      title: "Contact Us",
      subtitle: "Ready to transform your tender management process? Let's discuss how Aitenders can help your organization win more bids and streamline operations.",
      email: "Email",
      location: "Location",
      linkedin: "LinkedIn",
      followLinkedIn: "Follow us on LinkedIn",
      requestMeeting: "Request a Meeting",
      yourName: "Your Name",
      yourEmail: "Your Email",
      company: "Company",
      messagePlaceholder: "Tell us about your tender management challenges...",
      sending: "Sending...",
      requestMeetingBtn: "Request a Meeting",
      copyright: "© 2024 Aitenders. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms", 
      products: "Products",
      about: "About"
    }
  };

  return (
    <footer className="bg-aitenders-black text-aitenders-white-blue py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-aitenders-primary-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-aitenders-white-blue" />
          </div>
          <h2 className="text-3xl font-bold mb-4">{t[language].title}</h2>
          <p className="text-aitenders-light-blue max-w-2xl mx-auto">
            {t[language].subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-aitenders-primary-blue/20 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-aitenders-primary-blue" />
              </div>
              <div>
                <h4 className="font-semibold">{t[language].email}</h4>
                <p className="text-aitenders-light-blue">contact@aitenders.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-aitenders-primary-blue/20 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-aitenders-primary-blue" />
              </div>
              <div>
                <h4 className="font-semibold">{t[language].location}</h4>
                <p className="text-aitenders-light-blue">Saint-Etienne | 42100</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-aitenders-primary-blue/20 rounded-xl flex items-center justify-center">
                <SiLinkedin className="w-6 h-6 text-aitenders-primary-blue" />
              </div>
              <div>
                <h4 className="font-semibold">{t[language].linkedin}</h4>
                <a 
                  href="https://www.linkedin.com/company/aitenders/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-aitenders-primary-blue hover:text-aitenders-light-blue transition-colors"
                >
                  {t[language].followLinkedIn}
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-aitenders-dark-blue border-aitenders-primary-blue/30 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-aitenders-white-blue">{t[language].requestMeeting}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder={t[language].yourName}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-aitenders-black border-aitenders-primary-blue/50 text-aitenders-white-blue placeholder-aitenders-light-blue"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder={t[language].yourEmail}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-aitenders-black border-aitenders-primary-blue/50 text-aitenders-white-blue placeholder-aitenders-light-blue"
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="company"
                  placeholder={t[language].company}
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-aitenders-black border-aitenders-primary-blue/50 text-aitenders-white-blue placeholder-aitenders-light-blue"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder={t[language].messagePlaceholder}
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-aitenders-black border-aitenders-primary-blue/50 text-aitenders-white-blue placeholder-aitenders-light-blue resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={submitContactMutation.isPending}
                className="w-full bg-aitenders-primary-blue text-aitenders-white-blue hover:bg-aitenders-dark-blue"
              >
                {submitContactMutation.isPending ? t[language].sending : t[language].requestMeetingBtn}
              </Button>
            </form>
          </Card>
        </div>
        
        {/* Footer Links */}
        <div className="border-t border-aitenders-primary-blue/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src={aitendersLogo} 
                alt="Aitenders" 
                className="h-8 w-auto"
              />
              <span className="ml-4 text-aitenders-light-blue">{t[language].copyright}</span>
            </div>
            <div className="flex space-x-6 text-sm text-aitenders-light-blue">
              <a href="/privacy" className="hover:text-aitenders-white-blue transition-colors">{t[language].privacy}</a>
              <a href="/terms" className="hover:text-aitenders-white-blue transition-colors">{t[language].terms}</a>
              <a href="#products" className="hover:text-aitenders-white-blue transition-colors">{t[language].products}</a>
              <a href="#about" className="hover:text-aitenders-white-blue transition-colors">{t[language].about}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
