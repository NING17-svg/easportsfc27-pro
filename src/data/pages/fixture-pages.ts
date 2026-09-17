import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

const RESEARCH_DATE = "2026-09-17";

// ---------------------------------------------------------------
// Reference fixture pages — required by internal layout checks for
// review-date rendering and search-index multilingual tests.
// They live in the page list but are filtered out of the indexable
// set in lib/content.ts so they do not appear in the sitemap or
// homepage "recent updates" section.
// ---------------------------------------------------------------
const fixturePages: PageContent[] = [
  {
    id: "guides",
    translationKey: "guides-fixture",
    locale: "en-US",
    routeKind: "fixed",
    slug: "_guides-fixture",
    url: "/_guides-fixture",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `\${site.gameName} guide index`,
    seoTitle: `\${site.gameName} guide index`,
    metaDescription:
      "Reference fixture page used to validate PageHero review-date rendering for en-US content.",
    summary: "Reference fixture page (not a real indexable page).",
    hero: {
      eyebrow: "Guides",
      subtitle: "Reference fixture page (not a real indexable page).",
      ctas: [],
    },
    quickAnswer: "Reference fixture page.",
    keyFacts: [{ label: "Type", value: "Reference fixture" }],
    modules: [
      {
        id: "fixture-guides-body",
        type: "prose",
        heading: "Guides index fixture",
        body: "Reference fixture page used by internal layout checks.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article"],
    sourceStatus: "internal",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "wiki",
    translationKey: "wiki-fixture",
    locale: "en-US",
    routeKind: "fixed",
    slug: "_wiki-fixture",
    url: "/_wiki-fixture",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `\${site.gameName} wiki index`,
    seoTitle: `\${site.gameName} wiki index`,
    metaDescription:
      "Reference fixture page used to validate PageHero review-date rendering for en-US content.",
    summary: "Reference fixture page (not a real indexable page).",
    hero: {
      eyebrow: "Wiki",
      subtitle: "Reference fixture page (not a real indexable page).",
      ctas: [],
    },
    quickAnswer: "Reference fixture page.",
    keyFacts: [{ label: "Type", value: "Reference fixture" }],
    modules: [
      {
        id: "fixture-wiki-body",
        type: "prose",
        heading: "Wiki index fixture",
        body: "Reference fixture page used by internal layout checks.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article"],
    sourceStatus: "internal",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "faq",
    translationKey: "faq-fixture",
    locale: "en-US",
    routeKind: "fixed",
    slug: "_faq-fixture",
    url: "/_faq-fixture",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `\${site.gameName} FAQ index`,
    seoTitle: `\${site.gameName} FAQ index`,
    metaDescription:
      "Reference fixture page used by internal layout checks to render an FAQ-style page.",
    summary: "Reference fixture page (not a real indexable page).",
    hero: {
      eyebrow: "FAQ",
      subtitle: "Reference fixture page (not a real indexable page).",
      ctas: [],
    },
    quickAnswer: "Reference fixture page.",
    keyFacts: [{ label: "Type", value: "Reference fixture" }],
    modules: [
      {
        id: "fixture-faq-body",
        type: "prose",
        heading: "FAQ index fixture",
        body: "Reference fixture page used by internal layout checks.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["FAQPage"],
    sourceStatus: "internal",
    lastReviewed: RESEARCH_DATE,
  },
];

export default fixturePages;
