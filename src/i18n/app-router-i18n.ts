import "server-only";

import { type I18n, type Messages, setupI18n } from "@lingui/core";
import { setI18n } from "@lingui/react/server";

import { messages as en } from "@/locales/en";
import { messages as es } from "@/locales/es";
import { messages as ptBR } from "@/locales/pt-BR";

import { LOCALE_OF, type Lang, type Locale } from "./locales";

const catalogs: Record<Locale, Messages> = { "pt-BR": ptBR, en, es };

const instances = Object.fromEntries(
  (Object.keys(catalogs) as Locale[]).map((locale) => [
    locale,
    setupI18n({ locale, messages: { [locale]: catalogs[locale] } }),
  ]),
) as Record<Locale, I18n>;

export function getI18n(lang: Lang): I18n {
  return instances[LOCALE_OF[lang]];
}

/**
 * Every layout and page calls this first: Server Components render on their
 * own, so each sets the request's i18n for the `useLingui` calls below it.
 */
export function initLingui(lang: Lang): I18n {
  const i18n = getI18n(lang);
  setI18n(i18n);
  return i18n;
}
