import { isLocale, type Locale } from '../i18n/locales';

const STORAGE_KEY = 'portfolio-lang';

/** Langue mémorisée, ou null (stockage indisponible ou valeur invalide). */
export function readStoredLocale(): Locale | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return isLocale(value) ? value : null;
  } catch {
    return null;
  }
}

export function storeLocale(locale: Locale): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Stockage refusé (navigation privée, politique du navigateur) : le choix n'est pas mémorisé.
  }
}

/** Langue du navigateur : français si la langue commence par « fr », anglais sinon. */
export function detectBrowserLocale(): Locale {
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}
