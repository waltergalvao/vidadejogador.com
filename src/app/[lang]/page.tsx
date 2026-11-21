import { notFound } from "next/navigation";

import { initLingui } from "@/i18n/app-router-i18n";
import { isLang } from "@/i18n/locales";

import { HomeContent } from "./home-content";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  initLingui(lang);
  return <HomeContent lang={lang} />;
}
