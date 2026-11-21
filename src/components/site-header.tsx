import { useLingui } from "@lingui/react/macro";
import Image from "next/image";
import Link from "next/link";

import type { Lang } from "@/i18n/locales";

import { LanguageSwitcher } from "./language-switcher";

type Props = {
  lang: Lang;
  path: string;
};

export function SiteHeader({ lang, path }: Props) {
  const { t } = useLingui();
  return (
    <header className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
      <Link href={`/${lang}`} className="flex items-center gap-3">
        <Image
          src="/images/icon.webp"
          alt=""
          width={40}
          height={40}
          className="rounded-xl ring-1 ring-white/15"
          priority
        />
        <span className="font-display text-2xl leading-none tracking-wide text-primary-400">
          {t({ id: "common.gameName", message: "Vida de Jogador" })}
        </span>
      </Link>
      <LanguageSwitcher lang={lang} path={path} />
    </header>
  );
}
