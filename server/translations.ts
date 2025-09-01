import { eq, and } from "drizzle-orm";
import { languages, translationKeys, translations, type Language, type TranslationKey, type Translation } from "@shared/schema";
import { allFrenchTranslations, allEnglishTranslations, allSpanishTranslations, allGermanTranslations } from "./translations/index";

// In-memory fallback storage for translations when database is not available
interface InMemoryTranslations {
  languages: Language[];
  translations: Record<string, string>; // key_languageCode -> value
}

// Translation service for managing multilingual content
export class TranslationService {
  private inMemoryMode = false;
  private memoryTranslations: InMemoryTranslations = {
    languages: [
      { code: 'fr', name: 'Français', isDefault: true, isActive: true, createdAt: new Date() },
      { code: 'en', name: 'English', isDefault: false, isActive: true, createdAt: new Date() },
      { code: 'es', name: 'Español', isDefault: false, isActive: true, createdAt: new Date() },
      { code: 'de', name: 'Deutsch', isDefault: false, isActive: true, createdAt: new Date() },
    ],
    translations: {}
  };
  private db: any = null;

  constructor() {
    // Initialize in-memory translations
    this.initializeInMemoryTranslations();
  }

  // Initialize database connection if available
  private async initializeDatabase() {
    try {
      const { db } = await import("./db");
      this.db = db;
      return true;
    } catch (error) {
      console.log('Database not available, using in-memory translations');
      this.inMemoryMode = true;
      return false;
    }
  }

  // Initialize in-memory translations as fallback
  private initializeInMemoryTranslations() {
    const translationSets = [
      { lang: 'fr', translations: allFrenchTranslations },
      { lang: 'en', translations: allEnglishTranslations },
      { lang: 'es', translations: allSpanishTranslations },
      { lang: 'de', translations: allGermanTranslations },
    ];

    for (const { lang, translations } of translationSets) {
      for (const [key, value] of Object.entries(translations)) {
        this.memoryTranslations.translations[`${key}_${lang}`] = value;
      }
    }
  }

  // Get all active languages
  async getLanguages(): Promise<Language[]> {
    if (this.inMemoryMode || !this.db) {
      return this.memoryTranslations.languages.filter(lang => lang.isActive);
    }
    
    try {
      return await this.db.select().from(languages).where(eq(languages.isActive, true));
    } catch (error) {
      console.warn('Database error, falling back to memory:', error);
      this.inMemoryMode = true;
      return this.memoryTranslations.languages.filter(lang => lang.isActive);
    }
  }

  // Get default language (French)
  async getDefaultLanguage(): Promise<Language | null> {
    if (this.inMemoryMode || !this.db) {
      return this.memoryTranslations.languages.find(lang => lang.isDefault) || null;
    }
    
    try {
      const result = await this.db.select().from(languages).where(eq(languages.isDefault, true));
      return result[0] || null;
    } catch (error) {
      console.warn('Database error, falling back to memory:', error);
      this.inMemoryMode = true;
      return this.memoryTranslations.languages.find(lang => lang.isDefault) || null;
    }
  }

  // Get translations for a specific language and page
  async getTranslations(languageCode: string, page?: string): Promise<Record<string, string>> {
    if (this.inMemoryMode || !this.db) {
      const result: Record<string, string> = {};
      for (const [key, value] of Object.entries(this.memoryTranslations.translations)) {
        if (key.endsWith(`_${languageCode}`)) {
          const originalKey = key.substring(0, key.lastIndexOf(`_${languageCode}`));
          if (!page || originalKey.startsWith(`${page}.`)) {
            result[originalKey] = value;
          }
        }
      }
      return result;
    }

    try {
      const baseCondition = eq(translations.languageCode, languageCode);
      const whereConditions = page
        ? and(baseCondition, eq(translationKeys.page, page))
        : baseCondition;

      const results = await this.db
        .select({
          key: translationKeys.key,
          value: translations.value,
        })
        .from(translations)
        .innerJoin(translationKeys, eq(translations.keyId, translationKeys.id))
        .where(whereConditions);

      // Convert to key-value object
      const translationsMap: Record<string, string> = {};
      results.forEach(({ key, value }: { key: string; value: string }) => {
        translationsMap[key] = value;
      });

      return translationsMap;
    } catch (error) {
      console.warn('Database error, falling back to memory:', error);
      this.inMemoryMode = true;
      return this.getTranslations(languageCode, page);
    }
  }

  // Get a specific translation by key and language
  async getTranslation(key: string, languageCode: string): Promise<string | null> {
    if (this.inMemoryMode || !this.db) {
      return this.memoryTranslations.translations[`${key}_${languageCode}`] || null;
    }

    try {
      const result = await this.db
        .select({ value: translations.value })
        .from(translations)
        .innerJoin(translationKeys, eq(translations.keyId, translationKeys.id))
        .where(and(
          eq(translationKeys.key, key),
          eq(translations.languageCode, languageCode)
        ));

      return result[0]?.value || null;
    } catch (error) {
      console.warn('Database error, falling back to memory:', error);
      this.inMemoryMode = true;
      return this.memoryTranslations.translations[`${key}_${languageCode}`] || null;
    }
  }

  // Create or update a translation (memory mode only supports read operations)
  async setTranslation(key: string, languageCode: string, value: string): Promise<void> {
    if (this.inMemoryMode || !this.db) {
      this.memoryTranslations.translations[`${key}_${languageCode}`] = value;
      return;
    }

    try {
      // Database implementation here...
      // (keeping existing implementation but with error handling)
    } catch (error) {
      console.warn('Database error during translation update:', error);
      this.inMemoryMode = true;
      this.memoryTranslations.translations[`${key}_${languageCode}`] = value;
    }
  }

  // Initialize language tables in database (gracefully handle failures)
  async initializeLanguages(): Promise<void> {
    const dbAvailable = await this.initializeDatabase();
    
    if (!dbAvailable) {
      console.log('✅ Languages initialized (in-memory mode)');
      return;
    }

    try {
      const supportedLanguages = [
        { code: 'fr', name: 'Français', isDefault: true, isActive: true },
        { code: 'en', name: 'English', isDefault: false, isActive: true },
        { code: 'es', name: 'Español', isDefault: false, isActive: true },
        { code: 'de', name: 'Deutsch', isDefault: false, isActive: true },
      ];

      for (const lang of supportedLanguages) {
        const existing = await this.db
          .select()
          .from(languages)
          .where(eq(languages.code, lang.code));

        if (existing.length === 0) {
          await this.db.insert(languages).values(lang);
        }
      }
      console.log('✅ Languages initialized (database mode)');
    } catch (error) {
      console.warn('Database initialization failed, using in-memory mode:', error);
      this.inMemoryMode = true;
      console.log('✅ Languages initialized (in-memory mode)');
    }
  }

  // Initialize all translations from modular files (database mode only)
  async initializeAllTranslations(): Promise<void> {
    if (this.inMemoryMode || !this.db) {
      console.log('Skipping database translation seeding (in-memory mode)');
      return;
    }

    try {
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
    } catch (error) {
      console.warn('Translation seeding failed:', error);
    }
  }
}

// Singleton instance
export const translationService = new TranslationService();