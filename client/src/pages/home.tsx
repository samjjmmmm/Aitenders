import { useState } from "react";
import { useTranslation } from 'react-i18next';
import Header from "@/components/header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

import {
  MdInsertDriveFile, MdSettings, MdLightbulb, MdSchedule, MdCheckCircle,
  MdPeople, MdEmojiEvents
} from "react-icons/md";

interface SelectionCard {
  id: string;
  title: string;
  description?: string;
  icon: any;
  color: string;
}

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const [, setLocation] = useLocation();
  const currentLanguage = i18n.language;

  const step1Cards: SelectionCard[] = [
    {
      id: "tender-management",
      title: t('homepage.tenderManagementTitle'),
      description: t('homepage.tenderManagementDescription'),
      icon: MdInsertDriveFile,
      color: "bg-aitenders-primary-blue/10 text-aitenders-primary-blue"
    },
    {
      id: "contract-execution",
      title: t('homepage.contractExecutionTitle'),
      description: t('homepage.contractExecutionDescription'),
      icon: MdSettings,
      color: "bg-aitenders-dark-blue/10 text-aitenders-dark-blue"
    },
    {
      id: "knowledge-management",
      title: t('homepage.knowledgeManagementTitle'),
      description: t('homepage.knowledgeManagementDescription'),
      icon: MdLightbulb,
      color: "bg-aitenders-primary-blue/10 text-aitenders-primary-blue"
    }
  ];

  const step2Cards: SelectionCard[] = [
    {
      id: "petit-projet",
      title: t('homepage.smallProjectTitle'),
      icon: MdSchedule,
      color: "bg-aitenders-primary-blue/10 text-aitenders-primary-blue"
    },
    {
      id: "projet-moyen",
      title: t('homepage.mediumProjectTitle'),
      icon: MdCheckCircle,
      color: "bg-aitenders-dark-blue/10 text-aitenders-dark-blue"
    },
    {
      id: "grand-projet",
      title: t('homepage.largeProjectTitle'),
      icon: MdPeople,
      color: "bg-aitenders-primary-blue/10 text-aitenders-primary-blue"
    }
  ];

  const getUCsFromSelection = (domainSelections: string[], projectSize: string): string[] => {
    const domains = new Set(domainSelections);
    if (domains.size === 1) {
      if (domains.has('tender-management')) {
        if (projectSize === 'petit-projet') return ['UC1'];
        if (projectSize === 'projet-moyen') return ['uc2test'];
        if (projectSize === 'grand-projet') return ['uc3'];
      }
      if (domains.has('contract-execution')) {
        if (projectSize === 'petit-projet') return ['uc4'];
        if (projectSize === 'projet-moyen') return ['uc5'];
        if (projectSize === 'grand-projet') return ['uc6'];
      }
      if (domains.has('knowledge-management')) {
        if (projectSize === 'petit-projet') return ['UC7'];
        if (projectSize === 'projet-moyen') return ['UC8'];
        if (projectSize === 'grand-projet') return ['UC8'];
      }
    }
    if (domains.size === 2) {
      if (domains.has('tender-management') && domains.has('contract-execution')) {
        if (projectSize === 'petit-projet') return ['UC1', 'uc4'];
        if (projectSize === 'projet-moyen') return ['uc2test', 'uc5'];
        if (projectSize === 'grand-projet') return ['uc3', 'uc6'];
      }
      if (domains.has('tender-management') && domains.has('knowledge-management')) {
        if (projectSize === 'petit-projet') return ['UC1', 'UC7'];
        if (projectSize === 'projet-moyen') return ['uc2test', 'UC8'];
        if (projectSize === 'grand-projet') return ['uc3', 'UC8'];
      }
      if (domains.has('contract-execution') && domains.has('knowledge-management')) {
        if (projectSize === 'petit-projet') return ['uc4', 'UC7'];
        if (projectSize === 'projet-moyen') return ['uc5', 'UC8'];
        if (projectSize === 'grand-projet') return ['uc6', 'UC8'];
      }
    }
    if (domains.size === 3) {
      if (projectSize === 'petit-projet') return ['UC1', 'uc4', 'UC7'];
      if (projectSize === 'projet-moyen') return ['uc2test', 'uc5', 'UC8'];
      if (projectSize === 'grand-projet') return ['uc3', 'uc6', 'UC8'];
    }
    return [];
  };

  const ucRoutingMap: Record<string, string> = {
    "UC1": "uc-1",
    "uc2test": "uc2test",
    "uc3": "uc-3",
    "uc4": "uc-4",
    "uc5": "uc-5",
    "uc6": "uc-6",
    "UC7": "uc-7",
    "UC8": "uc-8"
  };

  const handleUCSelection = (ucId: string) => {
    const route = ucRoutingMap[ucId] ?? ucId.toLowerCase();
    setLocation(`/${route}`);
  };

  const [step1Selections, setStep1Selections] = useState<string[]>([]);
  const [step2Selection, setStep2Selection] = useState<string>('');
  const [showStep2, setShowStep2] = useState<boolean>(false);
  const [showUCResults, setShowUCResults] = useState<boolean>(false);

  const handleStep1Selection = (cardId: string) => {
    const newSelections = step1Selections.includes(cardId)
      ? step1Selections.filter(id => id !== cardId)
      : [...step1Selections, cardId];

    setStep1Selections(newSelections);
    setShowStep2(newSelections.length > 0);
    if (newSelections.length === 0) {
      setStep2Selection('');
      setShowUCResults(false);
    }
  };

  const handleStep2Selection = (cardId: string) => {
    setStep2Selection(cardId);
    setShowUCResults(true);
  };

  const ucMetadata = {
    "UC1": { title: t('homepage.ucMetadata.UC1.title'), description: t('homepage.ucMetadata.UC1.description') },
    "uc2test": { title: t('homepage.ucMetadata.uc2test.title'), description: t('homepage.ucMetadata.uc2test.description') },
    "uc3": { title: t('homepage.ucMetadata.uc3.title'), description: t('homepage.ucMetadata.uc3.description') },
    "uc4": { title: t('homepage.ucMetadata.uc4.title'), description: t('homepage.ucMetadata.uc4.description') },
    "uc5": { title: t('homepage.ucMetadata.uc5.title'), description: t('homepage.ucMetadata.uc5.description') },
    "uc6": { title: t('homepage.ucMetadata.uc6.title'), description: t('homepage.ucMetadata.uc6.description') },
    "UC7": { title: t('homepage.ucMetadata.UC7.title'), description: t('homepage.ucMetadata.UC7.description') },
    "UC8": { title: t('homepage.ucMetadata.UC8.title'), description: t('homepage.ucMetadata.UC8.description') }
  };

  const resultUCs = step1Selections.length > 0 && step2Selection
    ? getUCsFromSelection(step1Selections, step2Selection)
    : [];

  const getStepTitle = () => {
    if (!showStep2) return t('homepage.domainSelection');
    if (!showUCResults) return t('homepage.projectSize');
    return t('homepage.chooseUseCase');
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header language={currentLanguage as 'en' | 'fr'} onLanguageChange={handleLanguageChange} />
      <main className="relative">
        <div className="max-w-5xl mx-auto px-4 pt-24 pb-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-aitenders-black mb-4 leading-tight">
              {t('homepage.mainTitle')}<br />
              <span className="text-aitenders-primary-blue">{t('homepage.mainSubtitle')}</span>
            </h1>
            <p className="text-lg text-aitenders-dark-blue max-w-2xl mx-auto mt-1">
              {t('homepage.description')}
            </p>
          </div>

          <div className="mb-6 max-w-4xl mx-auto">
            <h2 className="text-lg font-bold text-aitenders-black mb-4 text-center">
              {getStepTitle()}
            </h2>

            {/* Step 1 */}
            {!showUCResults && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                {step1Cards.map((card) => {
                  const Icon = card.icon;
                  const isSelected = step1Selections.includes(card.id);
                  return (
                    <Card key={card.id} onClick={() => handleStep1Selection(card.id)}
                      className={`rounded-lg p-3 cursor-pointer border transition-all duration-200 hover:scale-105 ${
                        isSelected
                          ? 'border-aitenders-primary-blue bg-aitenders-pale-blue'
                          : 'border-aitenders-light-blue bg-aitenders-white-blue'
                      }`}>
                      <div className="text-center">
                        <div className={`p-2 rounded-lg mb-2 mx-auto w-fit ${card.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-sm font-semibold text-aitenders-black">{card.title}</h3>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}

            {/* Step 2 */}
            {showStep2 && !showUCResults && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                {step2Cards.map((card) => {
                  const Icon = card.icon;
                  const isSelected = step2Selection === card.id;
                  return (
                    <Card key={card.id} onClick={() => handleStep2Selection(card.id)}
                      className={`rounded-lg p-3 cursor-pointer border transition-all duration-200 hover:scale-105 ${
                        isSelected
                          ? 'border-aitenders-primary-blue bg-aitenders-pale-blue'
                          : 'border-aitenders-light-blue bg-aitenders-white-blue'
                      }`}>
                      <div className="text-center">
                        <div className={`p-2 rounded-lg mb-2 mx-auto w-fit ${card.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-sm font-semibold text-aitenders-black">{card.title}</h3>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}

            {/* UC Result */}
            {showUCResults && resultUCs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {resultUCs.map((ucId) => {
                  const ucData = ucMetadata[ucId as keyof typeof ucMetadata];
                  if (!ucData) return null;
                  return (
                    <Card key={ucId} onClick={() => handleUCSelection(ucId)}
                      className="rounded-xl p-4 cursor-pointer border border-aitenders-light-blue bg-aitenders-white-blue hover:border-aitenders-primary-blue transition-all duration-200 hover:scale-105">
                      <div className="text-center">
                        <div className="p-3 rounded-lg mb-3 mx-auto w-fit bg-aitenders-primary-blue/10 text-aitenders-primary-blue">
                          <MdEmojiEvents className="h-6 w-6" />
                        </div>
                        <h3 className="text-base font-semibold text-aitenders-black mb-1">{ucData.title}</h3>
                        <p className="text-xs text-aitenders-dark-blue leading-tight mb-3">{ucData.description}</p>
                        <Button size="sm" className="w-full bg-aitenders-primary-blue hover:bg-aitenders-dark-blue text-white">
                          {t('homepage.discoverUseCase')}
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
