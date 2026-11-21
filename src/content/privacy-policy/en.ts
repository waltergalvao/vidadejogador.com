import type { PrivacyPolicy } from "./types";

export const privacyPolicy: PrivacyPolicy = {
  title: "Privacy Policy",
  updatedLabel: "Last updated",
  intro: [
    "This policy explains what data the game Player Life, for iOS and Android, uses, why it uses it and what your rights are. It follows Brazil's General Data Protection Law (LGPD, Law No. 13,709/2018) and also meets the European Union's General Data Protection Regulation (GDPR) and California's privacy laws (CCPA).",
    "In short: Player Life is a single-player game that works without an internet connection. You don't create an account, and the game doesn't ask for your name, email or phone number. Your careers are stored on your device. The little data that leaves it is used to understand how the game is played and to process purchases, and it is described below.",
  ],
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        "Player Life is developed and published by PC Pocket Games, the controller of the personal data processed by the game under the LGPD and the GDPR.",
        "For anything about privacy, including requests under the LGPD, the GDPR or the CCPA, contact us at {email}.",
      ],
    },
    {
      heading: "What we don't collect",
      paragraphs: ["The game has no account or login, and it doesn't collect:"],
      bullets: [
        "your name, email, phone number, address or date of birth;",
        "the name and look of the player you create (they stay on your device);",
        "your precise location (GPS);",
        "your contacts, photos, camera, microphone or files (the game doesn't ask for access to any of them);",
        "your card details or other payment details.",
      ],
    },
    {
      heading: "Data stored on your device",
      paragraphs: [
        "Everything you do in the game is saved in your device's storage, in the area reserved for the app: your careers (your player's name and look, clubs, matches, choices and progress) and your settings (sound, vibration, language and notifications).",
        "This data is not sent to us or to anyone else. There is no cloud save today; if we ever offer one, this policy will describe it first.",
        "The game also reads, on the device itself, a few details it needs to work, such as the system language (to show the game in your language). This happens only on the device.",
      ],
    },
    {
      heading: "Notifications",
      paragraphs: [
        "Notifications are off by default. If you turn them on in the game's Settings, your device will ask for your permission.",
        "The game's notifications are local: they are scheduled and shown by the device itself, without going through a server of ours. You can turn them off at any time in the game's Settings or your device's settings.",
      ],
    },
    {
      heading: "Usage data (analytics)",
      paragraphs: [
        "To understand how the game is played and improve it (for example, where players get stuck, which parts are played the most, whether the game runs into errors), we may use PostHog, an analytics service. When it is active, the game sends PostHog:",
      ],
      bullets: [
        "a random identifier created on the device, not linked to your name or any account;",
        "events about how the game is used, such as opening the game, starting a career, finishing a match or a stage of the career;",
        "technical information about the device and the app, such as model, operating system and version, game version, language and time zone;",
        "the IP address of the connection, which PostHog may use to estimate an approximate location (country or city).",
      ],
      after: [
        "We use this data in aggregate, to make decisions about the game. We don't use it to identify you, we don't sell it and we don't use it for advertising.",
      ],
    },
    {
      heading: "In-game purchases",
      paragraphs: [
        "The game may offer optional purchases. They are made through the App Store (Apple) or Google Play, which process the payment with your store account's details. We never see your card or payment details.",
        "To confirm and unlock purchases, we use RevenueCat. It receives from the store and keeps the purchase information: an anonymous app identifier, the product bought, the date, the price and currency, the transaction identifier and the store's country. We use this information to deliver what you bought, restore purchases and meet tax and accounting obligations.",
      ],
    },
    {
      heading: "Ads",
      paragraphs: [
        "The game is not designed to show ads that interrupt play. If the game shows ads, they will be rewarded ads, which you choose to watch in exchange for an in-game benefit, provided by Google AdMob.",
        "In that case, Google AdMob may collect your device's advertising identifier (the IDFA on iOS or the advertising ID on Android), your IP address and technical information about the device, to show ads, measure their results and prevent fraud. On iOS, the advertising identifier is only used if you allow it in the system's tracking prompt. Where the law requires it, we will ask for your consent before showing personalized ads.",
        "You can limit the use of the advertising identifier at any time: on iOS, in Settings > Privacy & Security > Tracking; on Android, in Google's ad settings, where you can also delete or reset it.",
      ],
    },
    {
      heading: "Third-party services",
      paragraphs: [
        "These are the services that may process data when you use the game. Each has its own privacy policy:",
      ],
      bullets: [
        "PostHog (analytics): https://posthog.com/privacy",
        "RevenueCat (purchase management): https://www.revenuecat.com/privacy",
        "Apple App Store (downloads, payments and purchases on iOS): https://www.apple.com/legal/privacy/",
        "Google Play (downloads, payments and purchases on Android): https://policies.google.com/privacy",
        "Google AdMob (rewarded ads, if the game shows ads): https://policies.google.com/technologies/ads",
      ],
      after: [
        "We don't sell your personal data, and we only share it with these services, for the purposes described here, or when the law or an authority requires it.",
      ],
    },
    {
      heading: "Legal bases",
      paragraphs: ["We process personal data on the following legal bases of the LGPD (and the equivalent bases of the GDPR):"],
      bullets: [
        "performance of a contract: to provide the game and to deliver and restore the purchases you make;",
        "legitimate interest: to understand how the game is used, fix errors and improve it, always with data that doesn't directly identify you;",
        "consent: for notifications and, if the game shows ads, for personalized ads where the law requires it;",
        "compliance with a legal obligation: to keep the purchase records required by tax law.",
      ],
      after: ["Where processing depends on your consent, you can withdraw it at any time."],
    },
    {
      heading: "How long we keep data",
      paragraphs: [
        "The data on your device stays there until you uninstall the app.",
        "Usage data is kept only as long as needed to analyze and improve the game, and is then deleted. Purchase records are kept for as long as the law and the stores require.",
      ],
    },
    {
      heading: "International data transfers",
      paragraphs: [
        "The third-party services listed above may store and process data on servers outside your country, such as in the United States and the European Union. In those cases, the transfer takes place with the safeguards provided for in the LGPD and the GDPR, such as the standard contractual clauses adopted by these providers.",
      ],
    },
    {
      heading: "Children",
      paragraphs: [
        "Player Life is a game for a general audience and is not directed at children under 13. We don't knowingly collect personal data from children.",
        "If you are a parent or guardian and believe a child has given us personal data, write to {email} and we will delete it. In-game purchases can be blocked with the parental controls of the App Store and Google Play.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: ["Under the LGPD, and where applicable the GDPR and the CCPA, you have the right to:"],
      bullets: [
        "confirm whether we process your data and access it;",
        "correct incomplete, inaccurate or out-of-date data;",
        "ask for unnecessary data, or data processed against the law, to be anonymized, blocked or deleted;",
        "ask for your data to be ported;",
        "ask for the deletion of data processed on the basis of your consent, and withdraw your consent;",
        "know who we share your data with;",
        "object to processing based on legitimate interest;",
        "not be discriminated against for exercising these rights.",
      ],
      after: [
        "To exercise any of them, write to {email}. Since the game has no account and we don't know who you are, we may ask for some information to find the data linked to your device, such as the device model, the approximate date you installed the game or, for purchases, the order number on the store receipt. We reply within the time limits set by law.",
        "You can also lodge a complaint with Brazil's National Data Protection Authority (ANPD) or, if you are in the European Union, with the data protection authority of your country.",
      ],
    },
    {
      heading: "Deleting your data",
      paragraphs: [
        "To delete everything the game has stored on your device, uninstall the app: your careers and settings are removed with it and cannot be recovered.",
        "To ask for the deletion of the usage data and purchase records held by the third-party services, write to {email}. Records the law requires us to keep will be kept only for the required period.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We collect as little data as we can. The game's data stays in the area of the device reserved for the app, protected by the operating system, and the data sent to third-party services travels over encrypted connections. No system is completely secure, but we take reasonable measures to protect data and, if an incident happens that may put you at risk, we will act and notify as the law requires.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy when the game changes, for example if we start using a new service or processing new data. The date of the last update is at the top of this page. If the change is significant, we will also let you know in the game or on its store page.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: ["Questions, requests or complaints about privacy: {email}."],
    },
  ],
};
