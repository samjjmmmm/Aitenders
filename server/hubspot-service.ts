import { Client } from '@hubspot/api-client';

const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_API_KEY });

export interface EmailData {
  to: string;
  from: string;
  subject: string;
  htmlContent: string;
  textContent?: string;
}

export interface ContactData {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  website?: string;
  message?: string;
  useCase?: string;
  industry?: string;
}

export class HubSpotService {
  /**
   * Create or update a contact in HubSpot
   */
  async createOrUpdateContact(contactData: ContactData): Promise<any> {
    try {
      const properties: any = {
        email: contactData.email,
      };

      if (contactData.firstName) properties.firstname = contactData.firstName;
      if (contactData.lastName) properties.lastname = contactData.lastName;
      if (contactData.company) properties.company = contactData.company;
      if (contactData.phone) properties.phone = contactData.phone;
      if (contactData.website) properties.website = contactData.website;
      if (contactData.message) properties.message = contactData.message;
      if (contactData.useCase) properties.use_case = contactData.useCase;
      if (contactData.industry) properties.industry = contactData.industry;

      // Try to create contact, if it exists, update it
      try {
        const contact = await hubspotClient.crm.contacts.basicApi.create({
          properties,
        });
        return contact;
      } catch (error: any) {
        // If contact exists, update it
        if (error.code === 409 || error.status === 409) {
          // Search for existing contact by email
          const searchResult = await hubspotClient.crm.contacts.searchApi.doSearch({
            filterGroups: [{
              filters: [{
                propertyName: 'email',
                operator: 'EQ',
                value: contactData.email
              }]
            }]
          });
          
          if (searchResult.results && searchResult.results.length > 0) {
            const existingContact = searchResult.results[0];
            const updatedContact = await hubspotClient.crm.contacts.basicApi.update(
              existingContact.id,
              { properties }
            );
            return updatedContact;
          }
        }
        throw error;
      }
    } catch (error) {
      console.error('Error creating/updating HubSpot contact:', error);
      throw new Error('Failed to create/update contact in HubSpot');
    }
  }

  /**
   * Send email using HubSpot (simplified approach using external email service)
   * Note: HubSpot API has limitations for transactional emails, this creates contacts and logs the email intent
   */
  async sendEmail(emailData: EmailData): Promise<boolean> {
    try {
      // Create/update contact to track the email interaction
      await this.createOrUpdateContact({ 
        email: emailData.to,
        // Add a note about the email
        message: `Email sent: ${emailData.subject}`
      });

      console.log(`Email logged for HubSpot contact: ${emailData.to} - Subject: ${emailData.subject}`);
      
      // In a real implementation, you would integrate with an email service like SendGrid
      // For now, we'll log the email and return success
      return true;
    } catch (error) {
      console.error('Error processing email via HubSpot:', error);
      return false;
    }
  }

  /**
   * Send notification email to Aitenders team
   */
  async sendNotificationEmail(contactData: ContactData, type: 'contact' | 'demo' | 'support'): Promise<boolean> {
    const teamEmail = 'contact@aitenders.com';
    
    const subject = this.getNotificationSubject(type, contactData);
    const htmlContent = this.generateNotificationHtml(contactData, type);

    return await this.sendEmail({
      to: teamEmail,
      from: 'noreply@aitenders.com',
      subject,
      htmlContent,
    });
  }

  /**
   * Send confirmation email to user
   */
  async sendConfirmationEmail(contactData: ContactData, type: 'contact' | 'demo' | 'support'): Promise<boolean> {
    const subject = this.getConfirmationSubject(type);
    const htmlContent = this.generateConfirmationHtml(contactData, type);

    return await this.sendEmail({
      to: contactData.email,
      from: 'noreply@aitenders.com',
      subject,
      htmlContent,
    });
  }

  /**
   * Create a deal in HubSpot CRM
   */
  async createDeal(contactData: ContactData, dealName: string, amount?: number): Promise<any> {
    try {
      // First ensure contact exists
      const contact = await this.createOrUpdateContact(contactData);

      // Create deal
      const deal = await hubspotClient.crm.deals.basicApi.create({
        properties: {
          dealname: dealName,
          amount: amount?.toString() || '0',
          dealstage: 'appointmentscheduled',
          pipeline: 'default',
        },
      });

      return deal;
    } catch (error) {
      console.error('Error creating HubSpot deal:', error);
      throw new Error('Failed to create deal in HubSpot');
    }
  }

  private stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
  }

  private getNotificationSubject(type: 'contact' | 'demo' | 'support', contactData: ContactData): string {
    switch (type) {
      case 'contact':
        return `Nouvelle demande de contact - ${contactData.company || contactData.email}`;
      case 'demo':
        return `Demande de démo - ${contactData.company || contactData.email}`;
      case 'support':
        return `Demande de support - ${contactData.company || contactData.email}`;
      default:
        return `Nouvelle demande - ${contactData.company || contactData.email}`;
    }
  }

  private getConfirmationSubject(type: 'contact' | 'demo' | 'support'): string {
    switch (type) {
      case 'contact':
        return 'Votre demande de contact a été reçue - Aitenders';
      case 'demo':
        return 'Votre demande de démo a été reçue - Aitenders';
      case 'support':
        return 'Votre demande de support a été reçue - Aitenders';
      default:
        return 'Votre demande a été reçue - Aitenders';
    }
  }

  private generateNotificationHtml(contactData: ContactData, type: string): string {
    return `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #3880E8;">Nouvelle demande ${type} - Aitenders</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Informations du contact :</h3>
              <p><strong>Email :</strong> ${contactData.email}</p>
              ${contactData.firstName ? `<p><strong>Prénom :</strong> ${contactData.firstName}</p>` : ''}
              ${contactData.lastName ? `<p><strong>Nom :</strong> ${contactData.lastName}</p>` : ''}
              ${contactData.company ? `<p><strong>Entreprise :</strong> ${contactData.company}</p>` : ''}
              ${contactData.phone ? `<p><strong>Téléphone :</strong> ${contactData.phone}</p>` : ''}
              ${contactData.website ? `<p><strong>Site web :</strong> ${contactData.website}</p>` : ''}
              ${contactData.useCase ? `<p><strong>Cas d'usage :</strong> ${contactData.useCase}</p>` : ''}
              ${contactData.industry ? `<p><strong>Secteur :</strong> ${contactData.industry}</p>` : ''}
            </div>

            ${contactData.message ? `
              <div style="background: #fff; padding: 20px; border-left: 4px solid #3880E8; margin: 20px 0;">
                <h3>Message :</h3>
                <p>${contactData.message.replace(/\n/g, '<br>')}</p>
              </div>
            ` : ''}

            <div style="margin-top: 30px; padding: 15px; background: #e8f4fd; border-radius: 6px;">
              <p style="margin: 0; font-size: 14px; color: #666;">
                Cette demande a été automatiquement ajoutée à votre CRM HubSpot.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;
  }

  private generateConfirmationHtml(contactData: ContactData, type: string): string {
    return `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #3880E8; margin-bottom: 10px;">Aitenders</h1>
              <p style="color: #666; font-size: 18px;">L'intelligence de vos équipes projets, démultipliée par l'IA</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h2 style="color: #112646; margin-bottom: 15px;">Merci pour votre demande !</h2>
              <p style="font-size: 16px; color: #666;">
                Nous avons bien reçu votre demande de ${type} et vous recontacterons dans les plus brefs délais.
              </p>
            </div>

            <div style="background: #fff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #112646;">Récapitulatif de votre demande :</h3>
              <p><strong>Email :</strong> ${contactData.email}</p>
              ${contactData.firstName || contactData.lastName ? 
                `<p><strong>Nom :</strong> ${contactData.firstName || ''} ${contactData.lastName || ''}</p>` : ''}
              ${contactData.company ? `<p><strong>Entreprise :</strong> ${contactData.company}</p>` : ''}
              ${contactData.useCase ? `<p><strong>Cas d'usage :</strong> ${contactData.useCase}</p>` : ''}
            </div>

            <div style="background: linear-gradient(135deg, #3880E8, #5A9BF5); padding: 20px; border-radius: 8px; text-align: center; color: white; margin: 25px 0;">
              <h3 style="margin-bottom: 15px;">En attendant notre réponse</h3>
              <p style="margin-bottom: 15px;">Découvrez comment Aitenders transforme la gestion de vos appels d'offres</p>
              <a href="https://aitenders.com" style="display: inline-block; background: white; color: #3880E8; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Visiter notre site
              </a>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="color: #666; font-size: 14px;">
                Équipe Aitenders<br>
                contact@aitenders.com
              </p>
            </div>
          </div>
        </body>
      </html>
    `;
  }
}

export const hubspotService = new HubSpotService();