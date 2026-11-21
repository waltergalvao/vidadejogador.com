import Negotiator from "negotiator";
import { type NextRequest, NextResponse } from "next/server";

import { isLang, pickLang } from "@/i18n/locales";

const COOKIE = "lang";

/**
 * Every page lives under `/pt`, `/en` or `/es`. A path without one goes to the
 * language last picked here (a cookie) or else the browser's, so `/` and
 * `/privacy` (the link the stores ask for) both land in the right language.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  if (isLang(first)) {
    const response = NextResponse.next();
    if (request.cookies.get(COOKIE)?.value !== first) {
      response.cookies.set(COOKIE, first, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    }
    return response;
  }

  const saved = request.cookies.get(COOKIE)?.value ?? "";
  const lang = isLang(saved)
    ? saved
    : pickLang(
        new Negotiator({
          headers: { "accept-language": request.headers.get("accept-language") ?? "" },
        }).languages(),
      );

  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Not the framework's files, nor anything with an extension (images, icons).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
