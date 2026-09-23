# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.

## 2026-09-17 — Adsterra six-unit integration
- Replaced empty placeholders in `src/data/ads.ts` with the fixed six Adsterra units (Native Banner, 728x90, 468x60, 320x50, 160x600, Smartlink) for `easportsfc27.pro`; values written via the adsterra-integrator private tool, no new ad components or layout changes.

### 2026-09-22 - FC 27 My Club Membership four-tier programme

- Task: Add a new `/club-membership` page anchored to the EA Pitch Notes FC 27 Club Membership article, with back-links from the existing editions, career-mode, the-grounds, and ultimate-team hubs.
- Files changed: `src/data/pages/guide-pages.ts` (new `fixed-club-membership-en-US` page; back-links added on `fixed-editions-en-US`, `fixed-career-mode-en-US`, `fixed-the-grounds-en-US`, `fixed-ultimate-team-en-US`), `src/data/faq.ts` (13 new FAQ entries for the club-membership page), `src/data/navigation.ts` (added `/club-membership/` to primary navigation), `CONTENT_INDEX.md` (new URL row + cross-link updates).
- URLs added/updated: `/club-membership` (new); `/editions`, `/career-mode`, `/the-grounds`, `/ultimate-team` (lastReviewed bumped to 2026-09-22 and relatedPageIds extended).
- SEO/GEO changed: lastReviewed bumped to 2026-09-22 on the four hub pages; new primary keyword "FC 27 My Club Membership four-tier programme" for /club-membership; the new page cross-links to /career-mode, /the-grounds, /ultimate-team, /clubs; the four existing hubs now back-link to /club-membership.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify were run before commit.

### 2026-09-20 - Career Mode deep dive, Defending and Crossing reworks, FUT systems and The Grounds

- Task: Publish four launch-window FC 27 content updates anchored to the EA Pitch Notes launch window.
- Files changed: `src/data/pages/guide-pages.ts` (career-mode, tips, ultimate-team, new-features, the-grounds), `src/data/pages/wiki-pages.ts` (player-ratings), `src/data/faq.ts` (new Career, FUT, Player Ratings, and The Grounds entries), `src/data/navigation.ts` (added /the-grounds), `CONTENT_INDEX.md` (new URL row + internal-link roles).
- URLs added/updated: `/career-mode`, `/tips`, `/ultimate-team`, `/player-ratings`, `/new-features`, `/the-grounds` (new).
- SEO/GEO changed: lastReviewed bumped to 2026-09-20 on the four reworked pages and the new The Grounds page; new primary keywords for /the-grounds; career-mode cross-link to /player-ratings and /ultimate-team; ultimate-team cross-link to /player-ratings; player-ratings cross-link to /career-mode and /ultimate-team; the-grounds cross-link to /new-features and /clubs.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify were run before commit.
