# Changelog

Toutes les modifications notables de ce projet sont consignées ici.

Le format s'inspire de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) et le projet suit le [versionnement sémantique](https://semver.org/lang/fr/).

## [Unreleased]

### Ajouté

- Aperçu de partage (LinkedIn, etc.) : balises Open Graph et `twitter:card` par langue, images `public/og/og-fr.jpg` et `og-en.jpg` (1200 × 630), URL absolues via `Astro.site`, textes dans `fr.ts` / `en.ts`. README : section « Métadonnées et aperçu de partage ».
- Pipeline CI GitHub Actions (`checks` : `npm ci`, format, lint, build, `npm audit --omit=dev`), Dependabot (npm et GitHub Actions, vers `dev`) et `vercel.json` (en-têtes de sécurité, CSP stricte, cache des assets).
- README : section « Intégration et déploiement continus ».
- Fins de ligne LF imposées (`.gitattributes`, `endOfLine` Prettier) pour que le formatage passe sous Windows et en CI.
- Projet Astro statique avec TypeScript strict, ESLint, Prettier et vérification des types.
- Routing i18n `/fr/` et `/en/`, page racine qui redirige vers la langue préférée (choix mémorisé), balises `hreflang`.
- Dictionnaires `fr.ts` et `en.ts` typés ; aucun texte en dur dans les composants.
- Page d'une section par composant : en-tête (menu mobile, navigation active, barre de progression), accueil, à propos, projets (projet mis en avant, vitrine de captures, agrandissement), parcours, compétences, contact, pied de page.
- Thème bleu nuit, tokens de design dans `src/styles/tokens.css`.
- Images optimisées (AVIF / WebP) via `astro:assets`, police Inter auto-hébergée.
- Boutons de CV pointant vers `/cv/arnaud-adjimon-cv-fr.pdf` et `/cv/arnaud-adjimon-cv-en.pdf`, versionnés dans `public/cv/`.
- README et notices des licences tierces.

### Modifié

- Titre de page « Arnaud Adjimon » (FR et EN).
- Domaine `aadjimon.online` (hébergement Vercel, domaine chez Wayhost) : `site` Astro vaut `SITE_URL` ou `https://aadjimon.online` par défaut ; `canonical` et `hreflang` absolus.
- HSTS : `includeSubDomains` retiré de `vercel.json` tant que les sous-domaines ne sont pas connus (`max-age=31536000`, sans `preload`).

### Corrigé

- Liens de contact : texte visible conservé dans le nom accessible (WCAG 2.5.3), complément masqué traduit ; sélecteur de langue : le nom accessible commence par le texte visible (« FR – Français »).
- Badge « Agrandir » et curseur de zoom affichés uniquement si le JavaScript est actif.
- Indicateur de section : `aria-current="location"` à la place de `"true"`.
- README : Node 22.23.4 (`.nvmrc` ajouté), liste des composants, hébergement à la racine du domaine, `SITE_URL`, limite du menu mobile, section CV alignée sur les PDF versionnés.
