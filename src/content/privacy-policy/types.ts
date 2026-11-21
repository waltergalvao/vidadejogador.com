/**
 * The privacy policy, one file per locale (`pt-BR.ts`, `en.ts`, `es.ts`), like
 * the game's event content: long legal text reads better whole than as dozens
 * of Lingui strings. `{email}` in any string is replaced by the contact address.
 */
export type PrivacySection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  /** Paragraphs after the bullets, if any. */
  after?: string[];
};

export type PrivacyPolicy = {
  title: string;
  /** "Last updated" label, e.g. "Última atualização". */
  updatedLabel: string;
  intro: string[];
  sections: PrivacySection[];
};
