import Link from "next/link";

import { LANG_LABEL, LANGS, type Lang, LOCALE_OF } from "@/i18n/locales";

type Props = {
  lang: Lang;
  /** The page below the language, e.g. "" or "/privacy", so switching stays on it. */
  path: string;
};

export function LanguageSwitcher({ lang, path }: Props) {
  return (
    <nav className="flex items-center gap-1 rounded-full bg-black/40 p-1 ring-1 ring-white/10 backdrop-blur">
      {LANGS.map((l) => (
        <Link
          key={l}
          href={`/${l}${path}`}
          hrefLang={LOCALE_OF[l]}
          lang={LOCALE_OF[l]}
          title={LANG_LABEL[l]}
          aria-current={l === lang ? "page" : undefined}
          className={
            l === lang
              ? "rounded-full bg-primary-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink"
              : "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-300 transition hover:text-white"
          }
        >
          {l}
        </Link>
      ))}
    </nav>
  );
}
