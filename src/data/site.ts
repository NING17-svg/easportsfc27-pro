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
    "Launch-window en-US reference for EA SPORTS FC 27 (Steam AppID 4080220): release date Sep 24 2026, Ultimate-edition Advance Access Sep 17 2026, editions, Career Mode, FUT, Clubs, The Grounds, system requirements, ESRB rating, and official trailers — all anchored to the official Steam store page and the EA.com EA SPORTS FC 27 hub.",
  tagline: "EA SPORTS FC 27 launch hub: release date, editions, Career, FUT, Clubs, system requirements, trailers, and reviews — anchored to the Steam AppID 4080220 store page and the official EA.com hub on 2026-09-17.",
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
      label: "EA SPORTS FC 27 on Steam (AppID 4080220)",
      href: "https://store.steampowered.com/app/4080220/",
      description:
        "Canonical Steam storefront entry for EA SPORTS FC 27: release date, editions, system requirements, supported languages, screenshots, and age rating.",
    },
    {
      label: "EA.com EA SPORTS FC 27 hub",
      href: "https://www.ea.com/games/ea-sports-fc/fc-27",
      description:
        "Official EA.com launch hub with Pitch Notes, FUT Season 1 Premium Pass, FC Points bundle, and confirmed feature deep dives.",
    },
    {
      label: "EA SPORTS FC 27 FUT hub",
      href: "https://www.ea.com/games/ea-sports-fc/fc-27/fut",
      description:
        "Official FUT deep dive and Season 1 Premium Pass documentation for EA SPORTS FC 27.",
    },
    {
      label: "EA Pitch Notes",
      href: "https://www.ea.com/games/ea-sports-fc/fc-27/news",
      description:
        "Pitch Notes archive for EA SPORTS FC 27 Career Mode, Ultimate Team, Clubs, and The Grounds deep dives.",
    },
    {
      label: "EA SPORTS FC Direct YouTube channel",
      href: "https://www.youtube.com/@EASFCDirect",
      description:
        "Official EA SPORTS FC Direct channel for EA SPORTS FC 27 reveal trailer, gameplay trailer, deep dive, and launch trailer.",
    },
  ],
  disclaimer:
    "EA SPORTS FC™ 27, EA SPORTS FC, and related marks are the property of Electronic Arts Inc. and its licensors. This site is an unofficial fan reference sourced from the Steam AppID 4080220 store page and the official EA.com EA SPORTS FC 27 hub on 2026-09-17; it is not endorsed by or affiliated with Electronic Arts.",
};
