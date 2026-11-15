import { fr, type Dictionary } from './fr';
import { en } from './en';
import type { Locale } from './locales';

export { locales, defaultLocale, isLocale, type Locale } from './locales';
export type { Dictionary };

/** Textes d'une entrée de parcours ; `note` est absente pour la formation. */
export interface EntryTexts {
  what: string;
  where: string;
  note?: string;
}

/** Textes d'une fiche au format B ; `ia` n'existe que pour Axmaril. */
export interface CaseTexts {
  title: string;
  context: string;
  background: string;
  role: string;
  achievements: { label: string; text: string }[];
  result: string;
  ia?: string;
}

const dictionaries: Record<Locale, Dictionary> = { fr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Remplace les `{clé}` d'un gabarit de traduction. */
export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
