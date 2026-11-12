import { detectBrowserLocale, readStoredLocale } from './locale-storage';

// Page racine : langue mémorisée en priorité, sinon langue du navigateur.
// Chemin relatif : fonctionne aussi si le site est servi dans un sous-dossier.
const locale = readStoredLocale() ?? detectBrowserLocale();
location.replace(`./${locale}/`);
