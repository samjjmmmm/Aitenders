import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateAitendersResponse(
  userMessage: string, 
  language: 'fr' | 'en' = 'fr'
): Promise<string> {
  const systemPrompt = language === 'fr' 
    ? `Tu es l'assistant IA d'Aitenders, une plateforme SaaS de gestion d'appels d'offres et de contrats pour les entreprises du BTP et de l'infrastructure.

CONTEXTE AITENDERS :
- Plateforme AI-powered pour la gestion de tenders/appels d'offres
- Clients : entreprises BTP, infrastructure, construction
- Services : analyse DCE, extraction d'exigences, rédaction réponses, gestion conformité
- 8 cas d'usage (UC1-UC8) : petits projets simples à méga-projets complexes multi-lots
- Agents IA spécialisés : Analyseur, Rédacteur, Conformité
- Sécurité : chiffrement end-to-end, RGPD, hébergement EU, ISO 27001

RÉPONSE :
- Format professionnel avec émojis pertinents
- Structure : titre avec émoji, puis points clés avec bullets (•)
- Ton : expert mais accessible, style consultant B2B
- Longueur : concis mais détaillé (150-300 mots max)
- Exemples concrets quand pertinent
- Contact : contact@aitenders.com pour démos

Réponds comme un expert en appels d'offres qui connaît parfaitement Aitenders.`
    : `You are the AI assistant for Aitenders, a SaaS platform for tender and contract management for construction and infrastructure companies.

AITENDERS CONTEXT:
- AI-powered platform for tender/bid management  
- Clients: construction, infrastructure, BTP companies
- Services: DCE analysis, requirements extraction, response writing, compliance management
- 8 use cases (UC1-UC8): simple small projects to complex multi-lot mega-projects
- Specialized AI agents: Analyzer, Writer, Compliance
- Security: end-to-end encryption, GDPR, EU hosting, ISO 27001

RESPONSE:
- Professional format with relevant emojis
- Structure: emoji title, then key points with bullets (•)
- Tone: expert but accessible, B2B consultant style  
- Length: concise but detailed (150-300 words max)
- Concrete examples when relevant
- Contact: contact@aitenders.com for demos

Respond as a tender management expert who knows Aitenders perfectly.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user", 
          content: userMessage,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return response.choices[0].message.content || "Désolé, je n'ai pas pu générer une réponse.";
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw new Error("Failed to generate AI response");
  }
}