import { msg } from "@lingui/core/macro";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getI18n, initLingui } from "@/i18n/app-router-i18n";
import { isLang, LANGS, LOCALE_OF } from "@/i18n/locales";

import { PrivacyContent } from "./privacy-content";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const i18n = getI18n(lang);
  return {
    title: i18n._(msg({ id: "footer.privacy", message: "Política de privacidade" })),
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: Object.fromEntries(LANGS.map((l) => [LOCALE_OF[l], `/${l}/privacy`])),
    },
  };
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  initLingui(lang);
  return <PrivacyContent lang={lang} />;
}
