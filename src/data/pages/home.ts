import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
    id: "home",
    translationKey: "home",
    locale: "en-US",
    routeKind: "home",
    slug: "",
    url: "/",
    pageType: "home",
    presentation: { shell: "home", variant: "split-panel" },
    h1: "EA SPORTS FC 27 Launch Hub: Dates, Editions & Guides",
    seoTitle: "EA SPORTS FC 27 Launch Hub: Dates, Editions & Guides",
    metaDescription: "EA SPORTS FC 27 launches Sep 24, 2026 with Ultimate-edition Advance Access Sep 17. Compare editions, modes, system requirements, and first-launch guides here.",
    summary: "Confirm EA SPORTS FC 27 launch readiness (Advance Access and full launch dates), pick the right edition, and jump into the first-launch mode guides buyers need before launch.",
    hero: {
      eyebrow: "Launch hub",
      subtitle: "Quick Answer\n\nEA SPORTS FC 27 launches worldwide on September 24, 2026, with Ultimate-edition Advance Access starting September 17, 2026 on PC and consoles. The Standard Edition is $69.99 and the Ultimate Edition is $99.99, with the Ultimat",
      ctas: [
        { label: "Release date", href: "/release-info/" },
        { label: "Editions", href: "/editions/" },
      ],
    },
    quickAnswer: "Quick Answer\n\nEA SPORTS FC 27 launches worldwide on September 24, 2026, with Ultimate-edition Advance Access starting September 17, 2026 on PC and consoles. The Standard Edition is $69.99 and the Ultimate Edition is $99.99, with the Ultimate bundle adding 7-day early access, the Season 1 Premium Pass, and 6,000 FC Points spread across 3 months. This hub links to the release date page, the Standard-vs-Ultimate comparison, and the Career Mode, Ultimate Team, and Clubs guides.",
    keyFacts: [
      { label: "Full launch", value: "September 24, 2026" },
      { label: "Advance Access", value: "September 17, 2026 (Ultimate Edition)" },
      { label: "Standard price", value: "$69.99" },
      { label: "Ultimate price", value: "$99.99" },
      { label: "Platforms", value: "PC (Steam), PS5, PS4, Xbox Series, Xbox One, Switch/Switch 2" },
      { label: "Last verified", value: "2026-09-17" },
    ],
    modules: [
      { id: "callout-faq-home-when-does-ea-sports-fc-27-launch", type: "callout", tone: "confirmed", title: "When does EA SPORTS FC 27 launch?", body: "The worldwide full launch of EA SPORTS FC 27 is September 24, 2026. Players who buy the Ultimate Edition can start playing the Advance Access window on September 17, 2026." },
      { id: "callout-faq-home-what-is-the-difference-between-the-stand", type: "callout", tone: "confirmed", title: "What is the difference between the Standard and Ultimate editions?", body: "The Standard Edition costs $69.99 and unlocks on September 24, 2026. The Ultimate Edition costs $99.99 and adds 7-day early access starting September 17, 2026, the Season 1 Premium Pass, and 6,000 FC Points delivered across 3 months." },
      { id: "callout-faq-home-which-platforms-is-ea-sports-fc-27-avail", type: "callout", tone: "confirmed", title: "Which platforms is EA SPORTS FC 27 available on?", body: "EA SPORTS FC 27 is available on PC via Steam, PlayStation 5, PlayStation 4, Xbox Series X|S, Xbox One, and Nintendo Switch / Switch 2. Separate SKU availability for Switch 2 was not yet confirmed at the research date 2026-09-17." },
      { id: "callout-faq-home-do-i-need-a-new-pc-to-play-ea-sports-fc-", type: "callout", tone: "confirmed", title: "Do I need a new PC to play EA SPORTS FC 27?", body: "Not necessarily. The Steam minimum spec (Ryzen 5 1600 / i5 6600k, 8GB RAM, RX 570 / GTX 1050 Ti, 100GB storage) covers the game on Windows 10/11 64-bit, and the recommended spec (Ryzen 7 2700X / i7 6700, 12GB RAM, RX 5600 XT / GTX 1660) is the smoother target." },
      { id: "callout-faq-home-where-can-i-pre-order-ea-sports-fc-27", type: "callout", tone: "confirmed", title: "Where can I pre-order EA SPORTS FC 27?", body: "Pre-orders are available through Steam, EA.com, the PlayStation Store, and the Xbox Store, depending on platform. The release-info page lists each store channel with the Advance Access and standard launch windows." },
    ],
    faqIds: [
      "faq-home-when-does-ea-sports-fc-27-launch",
      "faq-home-what-is-the-difference-between-the-stand",
      "faq-home-which-platforms-is-ea-sports-fc-27-avail",
      "faq-home-do-i-need-a-new-pc-to-play-ea-sports-fc-",
      "faq-home-where-can-i-pre-order-ea-sports-fc-27",
    ],
    relatedPageIds: [
    ],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-17",
  };