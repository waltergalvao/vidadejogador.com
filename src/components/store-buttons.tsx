import { useLingui } from "@lingui/react/macro";
import type { ReactNode } from "react";

import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/site";

function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-7 w-7 fill-current">
      <path d="M16.37 1.43c0 1.14-.5 2.27-1.18 3.08-.74.9-1.99 1.57-2.99 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.57-2.27 1.2-2.98.81-.94 2.15-1.64 3.25-1.68.03.13.05.28.05.43Zm4.56 15.71c-.03.07-.46 1.58-1.51 3.12-.95 1.34-1.94 2.71-3.43 2.71-1.52 0-1.9-.88-3.63-.88-1.7 0-2.3.91-3.67.91-1.38 0-2.33-1.26-3.43-2.8C3.98 18.38 2.94 15.57 2.94 12.92c0-4.28 2.8-6.55 5.55-6.55 1.45 0 2.68.95 3.6.95.87 0 2.22-1.01 3.9-1.01.62 0 2.89.06 4.38 2.19-.13.09-2.39 1.37-2.39 4.19 0 3.26 2.86 4.42 2.96 4.45Z" />
    </svg>
  );
}

function PlayLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-7 w-7">
      <path fill="#00d7fe" d="M3.6 1.9 13.3 12l-9.7 10.1c-.35-.2-.6-.6-.6-1.1V3c0-.5.25-.9.6-1.1Z" />
      <path fill="#00f076" d="m3.6 1.9 12.8 7.3L13.3 12 3.6 1.9Z" />
      <path fill="#ff3a44" d="m3.6 22.1 9.7-10.1 3.1 2.8-12.8 7.3Z" />
      <path fill="#ffd500" d="m16.4 9.2 3.9 2.2c.8.45.8 1.15 0 1.6l-3.9 2.2-3.1-3.2 3.1-2.8Z" />
    </svg>
  );
}

type BadgeProps = {
  href: string | null;
  logo: ReactNode;
  caption: string;
  store: string;
  soon: string;
};

function StoreBadge({ href, logo, caption, store, soon }: BadgeProps) {
  const body = (
    <>
      {logo}
      <span className="flex flex-col items-start leading-none">
        <span className="text-[11px] font-medium tracking-wide text-zinc-300">
          {href ? caption : soon}
        </span>
        <span className="mt-1 text-xl font-semibold tracking-tight">{store}</span>
      </span>
    </>
  );
  const shape =
    "flex h-16 w-56 items-center gap-3 rounded-2xl bg-black px-5 text-white ring-1 ring-white/20";

  if (!href) {
    return (
      <div aria-disabled className={`${shape} cursor-default opacity-60`}>
        {body}
      </div>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${shape} transition hover:-translate-y-0.5 hover:ring-primary-500/70 focus-visible:outline-2 focus-visible:outline-primary-500`}
    >
      {body}
    </a>
  );
}

type Props = {
  className?: string;
};

export function StoreButtons({ className = "" }: Props) {
  const { t } = useLingui();
  const soon = t({ id: "storeButtons.comingSoon", message: "Em breve na" });
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <StoreBadge
        href={APP_STORE_URL}
        logo={<AppleLogo />}
        caption={t({ id: "storeButtons.appStoreCaption", message: "Baixar na" })}
        store="App Store"
        soon={soon}
      />
      <StoreBadge
        href={PLAY_STORE_URL}
        logo={<PlayLogo />}
        caption={t({ id: "storeButtons.playStoreCaption", message: "Disponível no" })}
        store="Google Play"
        soon={soon}
      />
    </div>
  );
}
