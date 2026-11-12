/** Données non traduisibles du site : identité, liens et chemins. */
export const site = {
  name: 'Arnaud Adjimon',
  monogram: 'AA',
  email: 'adjimonarnaud@gmail.com',
  linkedin: { url: 'https://linkedin.com/in/arnaud-adjimon', handle: 'arnaud-adjimon' },
  github: { url: 'https://github.com/arnaud2210', handle: 'arnaud2210' },
} as const;

/** CV versionnés dans `public/cv/` (publiés avec le téléphone, décision d'Arnaud) ; la page sert celui de sa langue. */
export const cvPath = {
  fr: '/cv/arnaud-adjimon-cv-fr.pdf',
  en: '/cv/arnaud-adjimon-cv-en.pdf',
} as const;

export const sections = {
  home: 'accueil',
  about: 'a-propos',
  projects: 'projets',
  career: 'parcours',
  skills: 'competences',
  contact: 'contact',
} as const;

/** Couleur de la barre du navigateur (meta theme-color), identique à `--bg` de tokens.css. */
export const themeColor = '#0f1b2d';
