import { defineConfig } from 'astro/config';

// SITE_URL (ex. https://exemple.fr) est lue à la compilation : elle sert aux URL
// absolues des balises hreflang et canonical. Sans elle, les liens restent relatifs.
const site = process.env.SITE_URL || undefined;

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  build: {
    // Feuilles de style et scripts toujours externes : compatible avec une CSP sans 'unsafe-inline'.
    inlineStylesheets: 'never',
  },
  vite: {
    build: { assetsInlineLimit: 0 },
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
      // La racine `/` est une vraie page (src/pages/index.astro) qui choisit la langue.
      redirectToDefaultLocale: false,
    },
  },
});
