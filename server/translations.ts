import { eq, and } from "drizzle-orm";
import { db } from "./db";
import { languages, translationKeys, translations, type Language, type TranslationKey, type Translation } from "@shared/schema";
import { allFrenchTranslations, allEnglishTranslations, allSpanishTranslations, allGermanTranslations } from "./translations/index";

// Translation service for managing multilingual content
export class TranslationService {

  // Get all active languages
  async getLanguages(): Promise<Language[]> {
    return await db.select().from(languages).where(eq(languages.isActive, true));
  }

  // Get default language (French)
  async getDefaultLanguage(): Promise<Language | null> {
    const result = await db.select().from(languages).where(eq(languages.isDefault, true));
    return result[0] || null;
  }

  // Get translations for a specific language and page
  async getTranslations(languageCode: string, page?: string): Promise<Record<string, string>> {
    const baseCondition = eq(translations.languageCode, languageCode);
    const whereConditions = page
      ? and(baseCondition, eq(translationKeys.page, page))
      : baseCondition;

    const results = await db
      .select({
        key: translationKeys.key,
        value: translations.value,
      })
      .from(translations)
      .innerJoin(translationKeys, eq(translations.keyId, translationKeys.id))
      .where(whereConditions);

    // Convert to key-value object
    const translationsMap: Record<string, string> = {};
    results.forEach(({ key, value }) => {
      translationsMap[key] = value;
    });

    return translationsMap;
  }

  // Get a specific translation by key and language
  async getTranslation(key: string, languageCode: string): Promise<string | null> {
    const result = await db
      .select({ value: translations.value })
      .from(translations)
      .innerJoin(translationKeys, eq(translations.keyId, translationKeys.id))
      .where(and(
        eq(translationKeys.key, key),
        eq(translations.languageCode, languageCode)
      ));

    return result[0]?.value || null;
  }

  // Create or update a translation
  async setTranslation(key: string, languageCode: string, value: string): Promise<void> {
    // First, ensure the translation key exists
    let translationKey = await db
      .select()
      .from(translationKeys)
      .where(eq(translationKeys.key, key));

    if (translationKey.length === 0) {
      // Extract page and section from key (e.g., "uc2.hero.title" -> page: "uc2", section: "hero")
      const keyParts = key.split('.');
      const page = keyParts[0] || '';
      const section = keyParts[1] || '';

      const newKey = await db
        .insert(translationKeys)
        .values({
          key,
          page,
          section,
          context: `Auto-generated for ${key}`,
        })
        .returning();

      translationKey = newKey;
    }

    const keyId = translationKey[0].id;

    // Check if translation already exists
    const existingTranslation = await db
      .select()
      .from(translations)
      .where(and(
        eq(translations.keyId, keyId),
        eq(translations.languageCode, languageCode)
      ));

    if (existingTranslation.length > 0) {
      // Update existing translation
      await db
        .update(translations)
        .set({
          value,
          updatedAt: new Date(),
          isApproved: languageCode === 'fr' // Auto-approve French as reference
        })
        .where(and(
          eq(translations.keyId, keyId),
          eq(translations.languageCode, languageCode)
        ));
    } else {
      // Create new translation
      await db
        .insert(translations)
        .values({
          keyId,
          languageCode,
          value,
          isApproved: languageCode === 'fr' // Auto-approve French as reference
        });
    }
  }

  // Initialize languages in database
  async initializeLanguages(): Promise<void> {
    const supportedLanguages = [
      { code: 'fr', name: 'Français', isDefault: true, isActive: true },
      { code: 'en', name: 'English', isDefault: false, isActive: true },
      { code: 'es', name: 'Español', isDefault: false, isActive: true },
      { code: 'de', name: 'Deutsch', isDefault: false, isActive: true },
    ];

    for (const lang of supportedLanguages) {
      const existing = await db
        .select()
        .from(languages)
        .where(eq(languages.code, lang.code));

      if (existing.length === 0) {
        await db.insert(languages).values(lang);
      }
    }
  }

  // Initialize all translations from modular files
  async initializeAllTranslations(): Promise<void> {
    console.log('Initializing translations from modular files...');
    const translationSets = [
      { lang: 'fr', translations: allFrenchTranslations },
      { lang: 'en', translations: allEnglishTranslations },
      { lang: 'es', translations: allSpanishTranslations },
      { lang: 'de', translations: allGermanTranslations },
    ];



    for (const { lang, translations } of translationSets) {
      console.log(`Loading ${Object.keys(translations).length} translations for ${lang}`);
      for (const [key, value] of Object.entries(translations)) {
        await this.setTranslation(key, lang, value);
      }
    }
    console.log('All translations initialized successfully');
  }
}

// Singleton instance
export const translationService = new TranslationService();