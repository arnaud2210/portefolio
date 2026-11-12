import { fr, type Dictionary } from './fr';
import { en } from './en';
import type { Locale } from './locales';

export { locales, defaultLocale, isLocale, type Locale } from './locales';
export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { fr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Remplace les `{clé}` d'un gabarit de traduction. */
export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
