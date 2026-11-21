import { useLingui } from "@lingui/react/macro";
import Link from "next/link";

import type { Lang } from "@/i18n/locales";
import { DEVELOPER_NAME } from "@/lib/site";

type Props = {
  lang: Lang;
};

export function SiteFooter({ lang }: Props) {
  const { t } = useLingui();
  return (
    <footer className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-5 py-4 text-xs text-zinc-400 sm:justify-between sm:px-8">
      <span>© {DEVELOPER_NAME}</span>
      <Link href={`/${lang}/privacy`} className="underline-offset-4 hover:text-zinc-200 hover:underline">
        {t({ id: "footer.privacy", message: "Política de privacidade" })}
      </Link>
    </footer>
  );
}
