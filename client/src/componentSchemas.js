// src/componentSchemas.js

/**
 * This file is the "single source of truth" for the structure of all editable components on the website.
 * Each object key (e.g., 'header_26') is a unique identifier for a component.
 *
 * Each schema has:
 * - name: A user-friendly name displayed in the admin panel.
 * - fields: An object defining the editable fields for that component.
 *
 * Each field has:
 * - label: The user-friendly label for the form input.
 * - type: The type of input to render. Valid types are:
 *   - 'text': A single-line text input.
 *   - 'textarea': A multi-line text area.
 *   - 'image': An image/media uploader.
 *   - 'repeater': A list of items, where each item has its own set of fields defined in `itemFields`.
 */

export const schemas = {
  // Schema for Header_26.tsx
  header_26: {
    name: "Hero Section (Header 26)",
    fields: {
      title: { label: "Title", type: "textarea" },
      subtitle: { label: "Subtitle", type: "textarea" },
      cta1: { label: "CTA Button Text", type: "text" },
    },
  },

  // Schema for ClientLogos.tsx (made editable)
  scrolling_logos: {
    name: "Scrolling Client Logos",
    fields: {
      title: { label: "Section Title (e.g., 'They trust us')", type: "text" },
      logos: {
        label: "Client Logos",
        type: "repeater",
        itemFields: {
          name: { label: "Client Name (for alt text)", type: "text" },
          src: { label: "Logo Image", type: "image" },
        },
      },
    },
  },

  // Schema for Layout_401_AI_Copilot.tsx
  ai_copilot: {
    name: "AI Copilot Steps",
    fields: {
      tag: { label: "Tag", type: "text" },
      title: { label: "Title", type: "textarea" },
      subtitle: { label: "Subtitle", type: "textarea" },
      step1: { label: "Step 1 Text", type: "text" },
      step2: { label: "Step 2 Text", type: "text" },
      step3: { label: "Step 3 Text", type: "text" },
    },
  },

  // Schema for Layout_84.tsx
  user_benefits: {
    name: "User Benefits / You vs Them",
    fields: {
      you: { label: "Main Label (e.g., 'You')", type: "text" },
      stat1_number: { label: "Stat 1 Number", type: "text" },
      stat1_text: { label: "Stat 1 Text", type: "textarea" },
      stat2_number: { label: "Stat 2 Number", type: "text" },
      stat2_text: { label: "Stat 2 Text", type: "textarea" },
      stat3_number: { label: "Stat 3 Number", type: "text" },
      stat3_text: { label: "Stat 3 Text", type: "textarea" },
    },
  },

  // Schema for Layout_401_OfferSteps.tsx
  offer_steps_headline: {
    name: "Offer Steps Headline",
    fields: {
      title: { label: "Headline Title", type: "textarea" },
    },
  },

  // Schema for ProductList.tsx
  product_features: {
    name: "Product Features List (Scrolling Image)",
    fields: {
      features: {
        label: "Features",
        type: "repeater",
        itemFields: {
          title: { label: "Title", type: "textarea" },
          description: { label: "Description", type: "textarea" },
          points: { label: "Feature Points (one per line)", type: "textarea" },
          imageUrl: { label: "Feature Image", type: "image" },
        },
      },
    },
  },

  // Schema for ConcreteResultsSection.tsx
  concrete_results: {
    name: "Concrete Results Section",
    fields: {
      badge: { label: "Badge Text", type: "text" },
      title: { label: "Title", type: "textarea" },
      description_paragraph: { label: "Description", type: "textarea" },
      stat1_number: { label: "Stat 1 Number (e.g., '50-70 %')", type: "text" },
      stat1_text: { label: "Stat 1 Text", type: "textarea" },
      stat2_number: { label: "Stat 2 Number", type: "text" },
      stat2_text: { label: "Stat 2 Text", type: "textarea" },
      stat3_number: { label: "Stat 3 Number", type: "text" },
      stat3_text: { label: "Stat 3 Text", type: "textarea" },
    },
  },

  // Schema for Team_20.tsx
  team_20: {
    name: "Feature Grid (Team 20)",
    fields: {
      tag: { label: "Tag", type: "text" },
      title: { label: "Title", type: "textarea" },
      description: { label: "Description", type: "textarea" },
      cards: {
        label: "Feature Cards",
        type: "repeater",
        itemFields: {
          title: { label: "Card Title", type: "textarea" },
          description: { label: "Card Description", type: "textarea" },
          iconSrc: { label: "Card Icon (SVG/PNG)", type: "image" },
        },
      },
    },
  },

  // Schema for Portfolio_11.tsx
  portfolio: {
    name: "Portfolio Section",
    fields: {
      title: { label: "Section Title", type: "text" },
      projects: {
        label: "Projects",
        type: "repeater",
        itemFields: {
          title: { label: "Project Title", type: "textarea" },
          value: { label: "Value (e.g., 400 offers / year)", type: "text" },
          description: { label: "Full Description (use CONTEXTE:, RÉSULTATS:, etc.)", type: "textarea" },
          category: { label: "Category", type: "text" },
          cta_text: { label: "CTA Text (e.g., Read more)", type: "text" },
          imageSrc: { label: "Project Image", type: "image" },
        },
      },
    },
  },

  // Schema for Cta_25.tsx
  cta_25: {
    name: "CTA Section (Chat Bubble)",
    fields: {
      title: { label: "Title", type: "textarea" },
      subtitle: { label: "Subtitle", type: "textarea" },
      card_title: { label: "Card Title", type: "text" },
      card_message: { label: "Card Message", type: "textarea" },
      card_button: { label: "Card Button Text", type: "text" },
    },
  },

  // Schema for FaqSection.tsx
  faq: {
    name: "FAQ Section",
    fields: {
      title: { label: "Section Title", type: "text" },
      subtitle: { label: "Section Subtitle", type: "textarea" },
      faq_list: {
        label: "FAQ Items",
        type: "repeater",
        itemFields: {
          question: { label: "Question", type: "textarea" },
          answer: { label: "Answer", type: "textarea" },
        },
      },
    },
  },

  // Schema for ProductHero.tsx
  product_hero: {
      name: "Product Hero",
      fields: {
          badge: { label: "Badge", type: "text" },
          title: { label: "Title", type: "textarea" },
          subtitle: { label: "Subtitle", type: "textarea" },
          cta_button: { label: "CTA Button Text", type: "text" },
          youtubeVideoId: { label: "YouTube Video ID (e.g., ma1UFP-PXZ8)", type: "text" },
      }
  },

  // Schema for IntegrationSection.tsx
  integration_section: {
      name: "Integration Section",
      fields: {
          tagline: { label: "Tagline", type: "text" },
          heading: { label: "Heading", type: "textarea" },
          description: { label: "Description", type: "textarea" },
          subheading1: { label: "Subheading 1", type: "text" },
          subfeature1_text: { label: "Subfeature 1 Text", type: "textarea" },
          subheading2: { label: "Subheading 2", type: "text" },
          subfeature2_text: { label: "Subfeature 2 Text", type: "textarea" },
          cta_button: { label: "CTA Button Text", type: "text" },
      }
  },

  // Schema for KpiSection.tsx
  kpi_section: {
      name: "KPI Stats Section",
      fields: {
          tagline: { label: "Tagline", type: "text" },
          heading: { label: "Heading", type: "textarea" },
          description: { label: "Description", type: "textarea" },
          stat1_number: { label: "Stat 1 Number", type: "text" },
          stat1_text: { label: "Stat 1 Text", type: "textarea" },
          stat2_number: { label: "Stat 2 Number", type: "text" },
          stat2_text: { label: "Stat 2 Text", type: "textarea" },
          stat3_number: { label: "Stat 3 Number", type: "text" },
          stat3_text: { label: "Stat 3 Text", type: "textarea" },
          cta_button: { label: "CTA Button Text", type: "text" },
      }
  },

  // NOTE: DemoCTAButton.tsx is a generic UI element and not a content section,
  // so it does not need a schema. Its content is passed directly as props.
};