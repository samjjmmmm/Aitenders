import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, RefreshCw, Users, MessageSquare, CheckCircle, XCircle, Clock } from "lucide-react";

interface EmailLog {
  id: string;
  to: string;
  from: string;
  subject: string;
  content: string;
  type: string;
  status: string;
  hubspotContactId?: string;
  errorMessage?: string;
  sentAt?: string;
  createdAt: string;
}

interface ContactRequest {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  company?: string;
  phone?: string;
  website?: string;
  message: string;
  useCase?: string;
  industry?: string;
  requestType: string;
  hubspotContactId?: string;
  hubspotDealId?: string;
  emailSent: string;
  createdAt: string;
}

export default function MailingAdmin() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedContact, setSelectedContact] = useState<ContactRequest | null>(null);
  
  // Form states for manual email sending
  const [emailForm, setEmailForm] = useState({
    to: '',
    subject: '',
    type: 'notification',
    firstName: '',
    lastName: '',
    company: '',
    message: ''
  });

  // Fetch email logs
  const { data: emailLogs = [], isLoading: logsLoading } = useQuery({
    queryKey: ['/api/mailing/logs'],
  });

  // Fetch contact requests
  const { data: contactRequests = [], isLoading: contactsLoading } = useQuery({
    queryKey: ['/api/contact'],
  });

  // Send manual email mutation
  const sendEmailMutation = useMutation({
    mutationFn: async (emailData: any) => {
      return await apiRequest('/api/mailing/send', {
        method: 'POST',
        body: JSON.stringify(emailData),
      });
    },
    onSuccess: () => {
      toast({
        title: "Email envoyé",
        description: "L'email a été envoyé avec succès",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/mailing/logs'] });
      setEmailForm({
        to: '',
        subject: '',
        type: 'notification',
        firstName: '',
        lastName: '',
        company: '',
        message: ''
      });
    },
    onError: (error: any) => {
      toast({
        title: "Erreur d'envoi",
        description: error.message || "Impossible d'envoyer l'email",
        variant: "destructive",
      });
    },
  });

  // Retry email mutation
  const retryEmailMutation = useMutation({
    mutationFn: async (emailId: string) => {
      return await apiRequest(`/api/mailing/retry/${emailId}`, {
        method: 'POST',
      });
    },
    onSuccess: () => {
      toast({
        title: "Email renvoyé",
        description: "L'email a été renvoyé avec succès",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/mailing/logs'] });
    },
    onError: (error: any) => {
      toast({
        title: "Erreur de renvoi",
        description: error.message || "Impossible de renvoyer l'email",
        variant: "destructive",
      });
    },
  });

  // Create HubSpot contact mutation
  const createHubSpotContactMutation = useMutation({
    mutationFn: async (contactData: any) => {
      return await apiRequest('/api/hubspot/contact', {
        method: 'POST',
        body: JSON.stringify(contactData),
      });
    },
    onSuccess: () => {
      toast({
        title: "Contact HubSpot créé",
        description: "Le contact a été ajouté à HubSpot avec succès",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
    },
    onError: (error: any) => {
      toast({
        title: "Erreur HubSpot",
        description: error.message || "Impossible de créer le contact HubSpot",
        variant: "destructive",
      });
    },
  });

  const handleSendEmail = () => {
    const contactData = {
      email: emailForm.to,
      firstName: emailForm.firstName,
      lastName: emailForm.lastName,
      company: emailForm.company,
      message: emailForm.message,
    };

    sendEmailMutation.mutate({
      to: emailForm.to,
      subject: emailForm.subject,
      type: emailForm.type,
      contactData,
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'sent':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Envoyé</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800"><XCircle className="w-3 h-3 mr-1" />Échec</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="w-3 h-3 mr-1" />En attente</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('fr-FR');
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-aitenders-dark-blue mb-2">Administration Mailing</h1>
        <p className="text-gray-600">Gestion des emails et contacts HubSpot</p>
      </div>

      <Tabs defaultValue="logs" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="logs">
            <Mail className="w-4 h-4 mr-2" />
            Logs Emails
          </TabsTrigger>
          <TabsTrigger value="contacts">
            <Users className="w-4 h-4 mr-2" />
            Contacts
          </TabsTrigger>
          <TabsTrigger value="send">
            <Send className="w-4 h-4 mr-2" />
            Envoyer Email
          </TabsTrigger>
          <TabsTrigger value="hubspot">
            <MessageSquare className="w-4 h-4 mr-2" />
            HubSpot
          </TabsTrigger>
        </TabsList>

        {/* Email Logs Tab */}
        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <CardTitle>Logs des Emails</CardTitle>
              <CardDescription>
                Historique de tous les emails envoyés via le système
              </CardDescription>
            </CardHeader>
            <CardContent>
              {logsLoading ? (
                <div className="text-center py-8">Chargement des logs...</div>
              ) : (
                <div className="space-y-4">
                  {emailLogs.map((log: EmailLog) => (
                    <div key={log.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            {getStatusBadge(log.status)}
                            <Badge variant="outline">{log.type}</Badge>
                            <span className="text-sm text-gray-500">
                              {formatDate(log.createdAt)}
                            </span>
                          </div>
                          <h3 className="font-medium text-aitenders-dark-blue">{log.subject}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            <strong>À:</strong> {log.to} | <strong>De:</strong> {log.from}
                          </p>
                          {log.hubspotContactId && (
                            <p className="text-sm text-gray-500 mt-1">
                              HubSpot Contact: {log.hubspotContactId}
                            </p>
                          )}
                          {log.errorMessage && (
                            <p className="text-sm text-red-600 mt-2">
                              <strong>Erreur:</strong> {log.errorMessage}
                            </p>
                          )}
                        </div>
                        {log.status === 'failed' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => retryEmailMutation.mutate(log.id)}
                            disabled={retryEmailMutation.isPending}
                          >
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Réessayer
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                  {emailLogs.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      Aucun log d'email trouvé
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Requests Tab */}
        <TabsContent value="contacts">
          <Card>
            <CardHeader>
              <CardTitle>Demandes de Contact</CardTitle>
              <CardDescription>
                Gestion des demandes de contact reçues
              </CardDescription>
            </CardHeader>
            <CardContent>
              {contactsLoading ? (
                <div className="text-center py-8">Chargement des contacts...</div>
              ) : (
                <div className="space-y-4">
                  {contactRequests.map((contact: ContactRequest) => (
                    <div key={contact.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            {getStatusBadge(contact.emailSent)}
                            <Badge variant="outline">{contact.requestType}</Badge>
                            <span className="text-sm text-gray-500">
                              {formatDate(contact.createdAt)}
                            </span>
                          </div>
                          <h3 className="font-medium text-aitenders-dark-blue">
                            {contact.firstName} {contact.lastName} - {contact.email}
                          </h3>
                          {contact.company && (
                            <p className="text-sm text-gray-600">Entreprise: {contact.company}</p>
                          )}
                          {contact.useCase && (
                            <p className="text-sm text-gray-600">Cas d'usage: {contact.useCase}</p>
                          )}
                          <p className="text-sm text-gray-700 mt-2">{contact.message}</p>
                          {contact.hubspotContactId && (
                            <p className="text-sm text-green-600 mt-2">
                              ✓ Synchronisé HubSpot: {contact.hubspotContactId}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {!contact.hubspotContactId && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                createHubSpotContactMutation.mutate({
                                  email: contact.email,
                                  firstName: contact.firstName,
                                  lastName: contact.lastName,
                                  company: contact.company,
                                  phone: contact.phone,
                                  website: contact.website,
                                  message: contact.message,
                                  useCase: contact.useCase,
                                  industry: contact.industry,
                                });
                              }}
                              disabled={createHubSpotContactMutation.isPending}
                            >
                              <Users className="w-4 h-4 mr-2" />
                              HubSpot
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {contactRequests.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      Aucune demande de contact trouvée
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Send Email Tab */}
        <TabsContent value="send">
          <Card>
            <CardHeader>
              <CardTitle>Envoyer un Email</CardTitle>
              <CardDescription>
                Créer et envoyer un email manuel via HubSpot
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="to">Destinataire *</Label>
                  <Input
                    id="to"
                    type="email"
                    value={emailForm.to}
                    onChange={(e) => setEmailForm({ ...emailForm, to: e.target.value })}
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="type">Type d'email *</Label>
                  <Select value={emailForm.type} onValueChange={(value) => setEmailForm({ ...emailForm, type: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="notification">Notification équipe</SelectItem>
                      <SelectItem value="confirmation">Confirmation utilisateur</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Sujet *</Label>
                <Input
                  id="subject"
                  value={emailForm.subject}
                  onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                  placeholder="Sujet de l'email"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName" 
                    value={emailForm.firstName}
                    onChange={(e) => setEmailForm({ ...emailForm, firstName: e.target.value })}
                    placeholder="Prénom"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    value={emailForm.lastName}
                    onChange={(e) => setEmailForm({ ...emailForm, lastName: e.target.value })}
                    placeholder="Nom"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Entreprise</Label>
                  <Input
                    id="company"
                    value={emailForm.company}
                    onChange={(e) => setEmailForm({ ...emailForm, company: e.target.value })}
                    placeholder="Nom de l'entreprise"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={emailForm.message}
                  onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                  placeholder="Contenu du message..."
                  rows={4}
                />
              </div>

              <Button
                onClick={handleSendEmail}
                disabled={sendEmailMutation.isPending || !emailForm.to || !emailForm.subject}
                className="w-full"
              >
                <Send className="w-4 h-4 mr-2" />
                {sendEmailMutation.isPending ? "Envoi en cours..." : "Envoyer l'Email"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* HubSpot Tab */}
        <TabsContent value="hubspot">
          <Card>
            <CardHeader>
              <CardTitle>Intégration HubSpot</CardTitle>
              <CardDescription>
                Statut et gestion de l'intégration HubSpot
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Statut de la connexion</h3>
                    <p className="text-sm text-gray-600">HubSpot API configurée et opérationnelle</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Connecté
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Contacts synchronisés</h4>
                    <p className="text-2xl font-bold text-aitenders-primary-blue">
                      {contactRequests.filter((c: ContactRequest) => c.hubspotContactId).length}
                    </p>
                    <p className="text-sm text-gray-600">
                      sur {contactRequests.length} total
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Emails envoyés</h4>
                    <p className="text-2xl font-bold text-green-600">
                      {emailLogs.filter((log: EmailLog) => log.status === 'sent').length}
                    </p>
                    <p className="text-sm text-gray-600">
                      sur {emailLogs.length} total
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-aitenders-dark-blue mb-2">Fonctionnalités disponibles</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Création/mise à jour automatique des contacts
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Envoi d'emails de notification à l'équipe
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Envoi d'emails de confirmation aux utilisateurs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Création d'opportunités (deals) dans le CRM
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}