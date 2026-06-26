import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from "../locales/english/english.json"
import ru from "../locales/russian/russian.json"
import cz from "../locales/czech/czech.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      cs: { translation: cz }
    },
  });
