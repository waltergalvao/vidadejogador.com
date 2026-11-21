import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { privacyPolicy as en } from "@/content/privacy-policy/en";
import { privacyPolicy as es } from "@/content/privacy-policy/es";
import { privacyPolicy as ptBR } from "@/content/privacy-policy/pt-BR";
import type { PrivacyPolicy } from "@/content/privacy-policy/types";
import { type Lang, LOCALE_OF } from "@/i18n/locales";
import { CONTACT_EMAIL, PRIVACY_UPDATED } from "@/lib/site";

const POLICIES: Record<Lang, PrivacyPolicy> = { pt: ptBR, en, es };

const LINK = "text-primary-400 underline underline-offset-4 hover:text-primary-300";

/** A policy string with `{email}` as a mail link and its URLs as links. */
function withEmail(text: string): ReactNode {
  return text.split(/(\{email\}|https:\/\/[^\s,;)]+[^\s,;).])/).map((part, i) => {
    if (part === "{email}") {
      return (
        <a key={i} href={`mailto:${CONTACT_EMAIL}`} className={LINK}>
          {CONTACT_EMAIL}
        </a>
      );
    }
    if (part.startsWith("https://")) {
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer" className={`${LINK} break-all`}>
          {part}
        </a>
      );
    }
    return part;
  });
}

type Props = {
  lang: Lang;
};

export function PrivacyContent({ lang }: Props) {
  const policy = POLICIES[lang];
  const updated = new Intl.DateTimeFormat(LOCALE_OF[lang], {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${PRIVACY_UPDATED}T00:00:00Z`));

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader lang={lang} path="/privacy" />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 pt-8 pb-16 sm:px-8">
        <h1 className="font-display text-5xl tracking-wide text-primary-400 sm:text-6xl">
          {policy.title}
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          {policy.updatedLabel}: {updated}
        </p>

        <div className="mt-8 space-y-4 text-base leading-relaxed text-zinc-300">
          {policy.intro.map((p, i) => (
            <p key={i}>{withEmail(p)}</p>
          ))}
        </div>

        {policy.sections.map((section, i) => (
          <section key={i} className="mt-10">
            <h2 className="font-display text-3xl tracking-wide text-zinc-100">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-4 text-base leading-relaxed text-zinc-300">
              {section.paragraphs.map((p, j) => (
                <p key={j}>{withEmail(p)}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc space-y-2 pl-6 marker:text-primary-600">
                  {section.bullets.map((b, j) => (
                    <li key={j}>{withEmail(b)}</li>
                  ))}
                </ul>
              )}
              {section.after?.map((p, j) => (
                <p key={j}>{withEmail(p)}</p>
              ))}
            </div>
          </section>
        ))}
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
