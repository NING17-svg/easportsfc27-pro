import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

const RESEARCH_DATE = "2026-09-17";
const DOMAIN = "https://easportsfc27.pro";
const SUPPORT_EMAIL = "support@easportsfc27.pro";

export const sitePages: PageContent[] = [
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About \${site.name}`,
    seoTitle: `About | \${site.name}`,
    metaDescription:
      "About EA SPORTS FC 27 Reference: an unofficial fan-built launch hub sourced from the Steam AppID 4080220 store page and the official EA.com hub on the research date.",
    summary:
      "What EA SPORTS FC 27 Reference covers, how facts are sourced, and what readers should expect.",
    hero: {
      eyebrow: "About",
      subtitle:
        "EA SPORTS FC 27 Reference is an unofficial fan-built launch hub for EA SPORTS FC 27 (Steam AppID 4080220) sourced from the official Steam store page, EA.com EA SPORTS FC 27 hub, EA Pitch Notes, and EA SPORTS FC Direct.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      "EA SPORTS FC 27 Reference is an unofficial fan-built launch hub for EA SPORTS FC 27 (Steam AppID 4080220). Every fact is dated to 2026-09-17 and re-verified against the live Steam store page and the official EA.com hub.",
    keyFacts: [
      { label: "Status", value: "Unofficial fan reference" },
      { label: "Research date", value: RESEARCH_DATE },
      { label: "Source rule", value: "Steam AppID 4080220 + EA.com hub + Pitch Notes" },
      { label: "Canonical anchor", value: "https://store.steampowered.com/app/4080220/" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help English-language launch-window readers confirm the EA SPORTS FC 27 release date, compare the Standard and Ultimate editions, and find pre-launch facts about Career Mode, Clubs, Ultimate Team, system requirements, age rating, and official trailers — all anchored to the official Steam AppID 4080220 store page and the EA.com EA SPORTS FC 27 hub.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Use only the official Steam AppID 4080220 store page, the EA.com EA SPORTS FC 27 hub, EA Pitch Notes, and EA SPORTS FC Direct to set current-game hard facts (release date, editions, The Grounds, AI/control changes, FUT Season 1 details, system requirements, ESRB rating, official trailers, platform availability). Any unannounced item is rendered as a dated 'not yet confirmed at research date 2026-09-17' status statement.",
      },
      {
        id: "editorial",
        type: "prose",
        heading: "Editorial rules",
        body:
          "All facts are dated to the research date 2026-09-17. No speculation, no third-party recap posts, no copy from other fan sites. The site never uses the EA wordmark or the EA SPORTS FC marks; brand presentation relies on the text brand mark and the approved theme palette only.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | \${site.name}`,
    metaDescription:
      "Contact EA SPORTS FC 27 Reference for corrections, official source links, and editorial feedback.",
    summary:
      "How to send corrections, official source links, and editorial feedback to EA SPORTS FC 27 Reference.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Send corrections, official source links, and editorial feedback to the maintainers of EA SPORTS FC 27 Reference.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Email support@easportsfc27.pro for corrections, source links, or editorial feedback. Include the official source URL and the page that needs to be updated.",
    keyFacts: [
      { label: "Email", value: SUPPORT_EMAIL },
      { label: "Primary use", value: "Corrections and source links" },
      { label: "Response window", value: "Best-effort, no SLA" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Email",
        body:
          "Email support@easportsfc27.pro for corrections, source links, or editorial feedback. The address is also published as a Cloudflare Email Routing forwarder under the same domain.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "If a fact on this site differs from the Steam AppID 4080220 store page or the EA.com EA SPORTS FC 27 hub, send the correct source URL plus the page URL on this site that needs to be updated. Corrections are reviewed and applied before the next research pass.",
      },
      {
        id: "sources",
        type: "prose",
        heading: "Sources we accept",
        body:
          "Steam AppID 4080220 store page, EA.com EA SPORTS FC 27 hub, EA Pitch Notes, and EA SPORTS FC Direct. Third-party outlets, fan wikis, and recap posts are not accepted as primary sources.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy policy",
    seoTitle: `Privacy policy | \${site.name}`,
    metaDescription:
      "Privacy policy for EA SPORTS FC 27 Reference: what data is collected, how it is used, and how third-party services are configured.",
    summary:
      "What data EA SPORTS FC 27 Reference collects, what third-party services run on the site, and how to contact the maintainers about privacy questions.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "EA SPORTS FC 27 Reference is a static-content launch hub. The only third-party data flows are the analytics and search-engine integrations documented below.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      "EA SPORTS FC 27 Reference does not require a login, does not store personal profiles, and does not sell user data. Third-party services that may set cookies or collect anonymous traffic are Google Analytics 4 and the Bing Webmaster Tools verification tag.",
    keyFacts: [
      { label: "Accounts", value: "No accounts, no logins" },
      { label: "Analytics", value: "Google Analytics 4 (anonymized)" },
      { label: "Search verification", value: "Bing Webmaster Tools msvalidate tag" },
      { label: "Data sales", value: "None" },
    ],
    modules: [
      {
        id: "what-we-collect",
        type: "prose",
        heading: "What we collect",
        body:
          "When you load EA SPORTS FC 27 Reference, the site serves static HTML and assets from Cloudflare. The only third-party services that may set cookies or collect anonymous traffic are Google Analytics 4 (used to measure page views, traffic sources, and engagement at launch) and the Bing Webmaster Tools verification tag (used only to confirm site ownership with Bing).",
      },
      {
        id: "what-we-do-not-collect",
        type: "prose",
        heading: "What we do not collect",
        body:
          "We do not require an account. We do not store your email, profile, or in-site actions. We do not place advertising trackers or sell personal data. The site does not run a comments section, a forum, or any user-generated content feature.",
      },
      {
        id: "third-party-services",
        type: "prose",
        heading: "Third-party services",
        body:
          "Google Analytics 4 is used under the standard anonymized IP and cookie-less mode configuration published by Google. The Bing Webmaster Tools msvalidate tag is a meta-tag verification marker only; it does not set cookies or collect user data on its own. Cloudflare Email Routing is used only to forward support@easportsfc27.pro to the maintainers' verified mailbox; the routing configuration does not log message contents.",
      },
      {
        id: "contact-privacy",
        type: "prose",
        heading: "Privacy questions",
        body:
          "Send privacy questions or requests to support@easportsfc27.pro. The maintainers review each request and respond within the best-effort window declared on the contact page.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of use",
    seoTitle: `Terms of use | \${site.name}`,
    metaDescription:
      "Terms of use for EA SPORTS FC 27 Reference: editorial scope, source attribution, intellectual property, and disclaimer.",
    summary:
      "Editorial scope, source attribution rules, intellectual property, and disclaimer for EA SPORTS FC 27 Reference.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "EA SPORTS FC 27 Reference is an unofficial fan-built hub. Editorial scope, source attribution, and intellectual property are documented below.",
      ctas: [{ label: "Privacy policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "EA SPORTS FC 27 Reference is an unofficial fan-built hub. All current-game facts are sourced from the Steam AppID 4080220 store page, EA.com hub, EA Pitch Notes, and EA SPORTS FC Direct.",
    keyFacts: [
      { label: "Status", value: "Unofficial fan reference" },
      { label: "Source rule", value: "Steam AppID 4080220 + EA.com + Pitch Notes + EA SPORTS FC Direct" },
      { label: "Affiliation", value: "Not affiliated with Electronic Arts Inc." },
    ],
    modules: [
      {
        id: "editorial-scope",
        type: "prose",
        heading: "Editorial scope",
        body:
          "EA SPORTS FC 27 Reference covers the launch-window facts that English-language readers are most likely to search: release date, editions, Career Mode, Clubs, Ultimate Team, The Grounds, system requirements, age rating, and official trailers. Everything on the site is dated to the research date 2026-09-17 unless an update is signed and noted.",
      },
      {
        id: "source-attribution",
        type: "prose",
        heading: "Source attribution",
        body:
          "Every fact on this site is attributed to the official Steam AppID 4080220 store page (https://store.steampowered.com/app/4080220/) or the EA.com EA SPORTS FC 27 hub. Where a community/video source is used only to corroborate a mechanism name already on the Steam page, the corroboration is disclosed in the page's sources block.",
      },
      {
        id: "intellectual-property",
        type: "prose",
        heading: "Intellectual property",
        body:
          "EA SPORTS FC, EA SPORTS FC 27, and related marks are the property of Electronic Arts Inc. and its licensors. This site is not endorsed by or affiliated with Electronic Arts Inc. Use of the EA SPORTS FC 27 name on this site is for editorial reference only and does not imply endorsement or partnership.",
      },
      {
        id: "disclaimer",
        type: "prose",
        heading: "Disclaimer",
        body:
          "The site is provided as-is, without warranty of any kind. Facts are sourced from the official Steam store page and the EA.com EA SPORTS FC 27 hub at the research date and may change after publication. Always re-check the official sources before acting on any launch-day detail.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
];
