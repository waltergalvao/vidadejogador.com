/**
 * The site's languages: the URL says `/pt`, `/en`, `/es`, and Lingui uses the
 * game's locales (`pt-BR` is the source).
 */
export const LANGS = ["pt", "en", "es"] as const;
export type Lang = (typeof LANGS)[number];

export type Locale = "pt-BR" | "en" | "es";

export const DEFAULT_LANG: Lang = "en";

export const LOCALE_OF: Record<Lang, Locale> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

/** Each language in its own words, for the switcher. */
export const LANG_LABEL: Record<Lang, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

/** The best of our languages for an `Accept-Language` list, by prefix (pt-PT → pt). */
export function pickLang(accepted: readonly string[]): Lang {
  for (const tag of accepted) {
    const base = tag.toLowerCase().split("-")[0];
    if (isLang(base)) return base;
  }
  return DEFAULT_LANG;
}
