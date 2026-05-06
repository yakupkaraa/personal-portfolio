import en from '@/locales/en.json';
import tr from '@/locales/tr.json';

export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

const dictionaries = {
  en,
  tr,
};

export const getDictionary = (locale: Locale) => dictionaries[locale];