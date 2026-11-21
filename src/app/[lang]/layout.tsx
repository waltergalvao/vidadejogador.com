import { msg } from "@lingui/core/macro";
import type { Metadata, Viewport } from "next";
import { Barlow, Bebas_Neue } from "next/font/google";
import { notFound } from "next/navigation";

import { getI18n, initLingui } from "@/i18n/app-router-i18n";
import { isLang, LANGS, LOCALE_OF } from "@/i18n/locales";
import { SITE_URL } from "@/lib/site";

import "../globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const i18n = getI18n(lang);
  const name = i18n._(msg({ id: "common.gameName", message: "Vida de Jogador" }));
  const description = i18n._(
    msg({
      id: "home.metaDescription",
      message:
        "Um jogo de carreira no futebol: da peneira aos 16 anos até a aposentadoria, com os seus lances jogados em 3D em cada partida.",
    }),
  );
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: name, template: `%s · ${name}` },
    description,
    applicationName: name,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(LANGS.map((l) => [LOCALE_OF[l], `/${l}`])),
    },
    openGraph: {
      type: "website",
      siteName: name,
      title: name,
      description,
      locale: LOCALE_OF[lang].replace("-", "_"),
      url: `/${lang}`,
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  initLingui(lang);

  return (
    <html
      lang={LOCALE_OF[lang]}
      className={`${bebasNeue.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-zinc-100">{children}</body>
    </html>
  );
}
