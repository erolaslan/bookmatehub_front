// src/translations/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import tr from './tr.json';

// i18n başlatma
i18n
  .use(initReactI18next) // react-i18next pluginini kullan
  .init({
    resources: {
      en: {
        translation: en,
      },
      tr: {
        translation: tr,
      },
    },
    lng: 'en', // Başlangıç dili
    fallbackLng: 'en', // Desteklenmeyen dilde İngilizceyi kullan
    interpolation: {
      escapeValue: false, // React zaten XSS'den korur
    },
  });

export default i18n;
