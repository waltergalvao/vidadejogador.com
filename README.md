# vidadejogador.com

The website of **Vida de Jogador** (Player Life / Vida de Jugador): a one-screen landing page and the privacy policy, in Portuguese, English and Spanish.

```bash
pnpm install          # also compiles the catalogs
pnpm dev              # http://localhost:3000 (redirects to /pt, /en or /es)
pnpm build
pnpm lint
pnpm lingui:extract   # after adding or changing a string: fill en/es in src/locales/*.po
```

- **Pages:** `src/app/[lang]/page.tsx` (home) and `src/app/[lang]/privacy/page.tsx`. `src/proxy.ts` sends `/` and `/privacy` to the visitor's language (the last one picked, else the browser's).
- **Translations:** Lingui, set up like the game: pt-BR is the source, explicit ids (`home.title`), `.po` catalogs in `src/locales/`, compiled to `src/locales/*.ts` (gitignored) by `lingui compile`. Server Components call `initLingui(lang)` and then `useLingui()` from `@lingui/react/macro`; the macros run through `@lingui/swc-plugin`.
- **Privacy policy text:** one file per language in `src/content/privacy-policy/`, with `{email}` for the contact address.
- **Store links, contact email, dates:** `src/lib/site.ts`.
