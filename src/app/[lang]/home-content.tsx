import { useLingui } from "@lingui/react/macro";
import Image from "next/image";

import { PhoneMockup } from "@/components/phone-mockup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoreButtons } from "@/components/store-buttons";
import type { Lang } from "@/i18n/locales";

type Props = {
  lang: Lang;
};

/**
 * One screen on a desktop (100dvh; the title and the phone scale with its
 * height): the phone in the middle, the title on its left and the stores on its
 * right. On a phone it stacks: title, stores, then the phone.
 */
export function HomeContent({ lang }: Props) {
  const { t } = useLingui();
  return (
    <div className="relative isolate flex min-h-dvh flex-col overflow-hidden">
      <Image
        src="/images/stadium.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.55)_55%,rgba(9,9,11,0.95)_100%)]" />

      <SiteHeader lang={lang} path="" />

      <main className="flex min-h-0 flex-1 flex-col items-center gap-10 px-5 pt-4 pb-6 sm:px-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-12 lg:py-0 xl:gap-20">
        <div className="flex max-w-md flex-col gap-5 text-center lg:max-w-lg lg:justify-self-end lg:text-left">
          <h1 className="font-display text-6xl leading-[0.9] tracking-wide text-primary-400 uppercase sm:text-7xl lg:text-[clamp(2.75rem,min(8.5dvh,5.2vw),6rem)]">
            {t({
              id: "home.title",
              message: "Sua carreira no futebol, da peneira à aposentadoria",
            })}
          </h1>
          <p className="text-lg leading-relaxed text-zinc-300 lg:text-[clamp(1rem,2.3dvh,1.25rem)]">
            {t({
              id: "home.description",
              message:
                "Comece aos 16 anos numa peneira e viva uma carreira inteira: jogue os seus lances em 3D em cada partida, evolua os seus atributos e tome as decisões fora de campo também: contratos, técnico, família e fama.",
            })}
          </p>
        </div>

        <PhoneMockup
          src="/images/screenshot-match.webp"
          alt={t({
            id: "home.screenshotAlt",
            message: "Uma partida no jogo: o lance em 3D, com o placar no alto e a torcida ao fundo",
          })}
          width={1206}
          height={2622}
          className="order-last h-[78svh] max-h-[760px] lg:order-none lg:h-[min(80dvh,860px)] lg:max-h-none"
        />

        <StoreButtons className="justify-center lg:flex-col lg:justify-self-start" />
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
