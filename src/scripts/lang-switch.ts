import { isLocale } from '../i18n/locales';
import { storeLocale } from './locale-storage';

/** Mémorise le choix de langue au clic et conserve l'ancre de la section courante. */
export function initLangSwitch(): void {
  document.querySelectorAll<HTMLAnchorElement>('[data-lang-link]').forEach((link) => {
    link.addEventListener('click', () => {
      const code = link.dataset.langLink;
      if (isLocale(code)) storeLocale(code);
      if (location.hash) link.hash = location.hash;
    });
  });
}
