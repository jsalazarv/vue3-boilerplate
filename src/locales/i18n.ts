import { createI18n } from 'vue-i18n';
import en from '@/locales/en';
// @ts-ignore
import es from '@/locales/es';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    es,
  },
});

export default i18n;
