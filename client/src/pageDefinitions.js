// src/pageDefinitions.js
import { schemas } from './componentSchemas';

/**
 * This file defines the layout for each editable page.
 * The keys ('uc-1', 'product', etc.) match the slugs of your pages.
 * The components listed for each page will appear in the admin editor in this order.
 */
export const pageDefinitions = {
  // Page Definition for UC-1
  'uc-1': {
    name: "UC-1 Page",
    components: [
      { key: 'header_26', schema: schemas.header_26 },
      { key: 'scrolling_logos', schema: schemas.scrolling_logos },
      { key: 'ai_copilot', schema: schemas.ai_copilot },
      { key: 'user_benefits', schema: schemas.user_benefits },
      { key: 'offer_steps_headline', schema: schemas.offer_steps_headline },
      // Note: Layout_356 is a complex component with hardcoded content.
      // To make it fully editable, a more advanced 'features' schema would be needed.
      // For now, it's omitted as it's not driven by a simple t_prefix.
      { key: 'concrete_results', schema: schemas.concrete_results },
      { key: 'team_20', schema: schemas.team_20 },
      { key: 'portfolio', schema: schemas.portfolio },
      { key: 'cta_25', schema: schemas.cta_25 },
    ],
  },

  // Page Definition for UC-3
  'uc-3': {
    name: "UC-3 Page",
    components: [
      { key: 'header_26', schema: schemas.header_26 },
      { key: 'scrolling_logos', schema: schemas.scrolling_logos },
      { key: 'ai_copilot', schema: schemas.ai_copilot },
      { key: 'user_benefits', schema: schemas.user_benefits },
      { key: 'offer_steps_headline', schema: schemas.offer_steps_headline },
      { key: 'concrete_results', schema: schemas.concrete_results },
      { key: 'team_20', schema: schemas.team_20 },
      { key: 'portfolio', schema: schemas.portfolio },
      { key: 'cta_25', schema: schemas.cta_25 },
    ],
  },

  // Page Definition for UC-4
  'uc-4': {
    name: "UC-4 Page",
    components: [
      { key: 'header_26', schema: schemas.header_26 },
      { key: 'scrolling_logos', schema: schemas.scrolling_logos },
      { key: 'ai_copilot', schema: schemas.ai_copilot },
      { key: 'user_benefits', schema: schemas.user_benefits },
      { key: 'offer_steps_headline', schema: schemas.offer_steps_headline },
      { key: 'concrete_results', schema: schemas.concrete_results },
      { key: 'team_20', schema: schemas.team_20 },
      { key: 'portfolio', schema: schemas.portfolio },
      { key: 'cta_25', schema: schemas.cta_25 },
    ],
  },

  // Page Definition for UC-5
  'uc-5': {
    name: "UC-5 Page",
    components: [
      { key: 'header_26', schema: schemas.header_26 },
      { key: 'scrolling_logos', schema: schemas.scrolling_logos },
      { key: 'ai_copilot', schema: schemas.ai_copilot },
      { key: 'user_benefits', schema: schemas.user_benefits },
      { key: 'offer_steps_headline', schema: schemas.offer_steps_headline },
      { key: 'concrete_results', schema: schemas.concrete_results },
      { key: 'team_20', schema: schemas.team_20 },
      { key: 'portfolio', schema: schemas.portfolio },
      { key: 'cta_25', schema: schemas.cta_25 },
    ],
  },

  // Page Definition for UC-6
  'uc-6': {
    name: "UC-6 Page",
    components: [
      { key: 'header_26', schema: schemas.header_26 },
      { key: 'scrolling_logos', schema: schemas.scrolling_logos },
      { key: 'ai_copilot', schema: schemas.ai_copilot },
      { key: 'user_benefits', schema: schemas.user_benefits },
      { key: 'offer_steps_headline', schema: schemas.offer_steps_headline },
      { key: 'concrete_results', schema: schemas.concrete_results },
      { key: 'team_20', schema: schemas.team_20 },
      { key: 'portfolio', schema: schemas.portfolio },
      { key: 'cta_25', schema: schemas.cta_25 },
    ],
  },

  // Page Definition for Product Page
  product: {
    name: "Product Page",
    components: [
      { key: 'hero', schema: schemas.product_hero },
      { key: 'scrolling_logos', schema: schemas.scrolling_logos },
      { key: 'features', schema: schemas.product_features },
      { key: 'integrations', schema: schemas.integration_section },
      { key: 'kpis', schema: schemas.kpi_section },
      { key: 'faq', schema: schemas.faq },
      { key: 'cta', schema: schemas.cta_25 },
    ]
  },

  // Page Definition for uc2test
  uc2test: {
    name: "UC2 Test Page",
    components: [
      // Based on the code, uc2test is now designed to load data directly
      // from the database, but we can still define its editable components here.
      { key: 'header_26', schema: schemas.header_26 },
      { key: 'portfolio', schema: schemas.portfolio },
    ],
  },

  // NOTE: 'homepage', 'word-addon', and 'privacy' pages are not included because
  // their content is either hardcoded or uses a different logic (like the use case selector)
  // that is not compatible with this component-based CMS editing model.
};