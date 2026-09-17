import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "EA SPORTS FC™ 27",
  brandMark: "FC27",
  gameName: "EA SPORTS FC™ 27",
  domain: "easportsfc27.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://easportsfc27.pro").replace(/\/$/, ""),
  description:
    "A neutral game guide hub template for launch pages, wiki notes, guides, release information, and FAQs.",
  tagline: "Guides, wiki notes, release info, and launch FAQs in one clean hub.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "EA SPORTS FC 27 Guide Team",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Official website",
      href: "https://example.com",
      description: "Replace this with the game publisher or developer website.",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide template. Replace placeholder facts with official sources before launch.",
};
