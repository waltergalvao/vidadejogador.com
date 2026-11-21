import type { LinguiConfig } from "@lingui/conf";
import { formatter } from "@lingui/format-po";

/**
 * The same setup as the game: pt-BR is the source, explicit ids, `.po`
 * catalogs sorted by id with no line numbers, so moving code doesn't touch
 * them. `lingui compile` writes `src/locales/{locale}.ts` (gitignored).
 */
const config: LinguiConfig = {
  locales: ["pt-BR", "en", "es"],
  sourceLocale: "pt-BR",
  catalogs: [
    {
      path: "src/locales/{locale}",
      include: ["src"],
    },
  ],
  compileNamespace: "ts",
  orderBy: "messageId",
  format: formatter({ lineNumbers: false }),
};

export default config;
