# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Template Game guide | Find the best entry point | Open Wiki / Browse Guides | Hub | Replace with the configured game's main hub intent. |
| `/wiki` | `src/data/pages/wiki-pages.ts` | Guide | Template Game wiki | Understand confirmed facts | Guides / FAQ | Hub | Keep official fact base and source context here. |
| `/guides` | `src/data/pages/guide-pages.ts` | Guide | Template Game guides | Find guide topics before launch | Wiki / Release Info | Hub | Do not invent walkthroughs before reliable details exist. |
| `/release-date` | `src/data/pages/release-pages.ts` | Guide | Template Game release date | Check release timing and platforms | FAQ / Wiki | Supporting hub | Must stay tied to official or store sources. |
| `/faq` | `src/data/pages/site-pages.ts` | Guide | Template Game FAQ | Get short answers | Release Info / Contact | Answer hub | FAQ schema enabled. |
| `/career-mode` | `src/data/pages/guide-pages.ts` | Guide | EA SPORTS FC 27 Career Mode deep dive | Plan a Career save using TransferRoom, Dynamic OVR, six Growth Profiles, Manager Live Creator Challenges, Career ICONs, Pre-Order Challenges, Player Career Rivalries | Player Ratings | Hub (Career) | Last reviewed 2026-09-25; cross-links to /player-ratings, /ultimate-team, /club-membership; in-body Club Member section covers Career rewards (headwear + Legend + facial accessories) and the Nov 1, 2026 double-login deadline. |
| `/ultimate-team` | `src/data/pages/guide-pages.ts` | Guide | EA SPORTS FC 27 Ultimate Team FUT systems | Plan a FUT launch path with Holographic Items, Streamlined SBCs, Gallery, Hall of FUT, PlayStyle+ cap, ICON baseline, Post-Match Rewards, Champions CQP, TOTW vote, Rivals Division 1 rewards, pack rarity rename | Player Ratings | Hub (FUT) | Last reviewed 2026-09-25; cross-links to /player-ratings, /club-membership; in-body Club Member section covers the evolving tenure badge and the Nov 1 / Nov 28 deadlines. |
| `/player-ratings` | `src/data/pages/wiki-pages.ts` | Guide | EA SPORTS FC 27 player ratings | Find the cover star (Mbappe), men's and women's top-27 lists, Destined for Glory roster, FC 26 to FC 27 rating deltas | Career Mode / Ultimate Team | Hub (Ratings) | Last reviewed 2026-09-20; cross-links to /career-mode and /ultimate-team. |
| `/tips` | `src/data/pages/guide-pages.ts` | Guide | EA SPORTS FC 27 tips defending corners crosses | Defend under FC 27's Competitive-mode manual-jockey meta, deliver 3-step corners, space-delivered crosses, Shielding, Triggered Curved Runs, Pass & Follow Runs, Limited Manual Run distance | Home | Supporting hub | Last reviewed 2026-09-20. |
| `/the-grounds` | `src/data/pages/guide-pages.ts` | Guide | EA SPORTS FC 27 The Grounds mode | Start The Grounds social hub: districts, Kickabouts, Rush 5v5, House Rules, mentors, Archetype / Mastery / Amp, Signature Amps (Mbappe Tier 3), free Archetype reset, Season 1 Live Events | New Features / Clubs | Hub (The Grounds) | Last reviewed 2026-09-25; cross-links to /new-features, /clubs, /club-membership; in-body Club Member section covers the gear set (gloves + arm sleeves + boots + more) and the PS5 / Xbox Series X|S / PC / Switch 2 platform restriction. |
| `/clubs` | `src/data/pages/guide-pages.ts` | Guide | EA SPORTS FC 27 Clubs Pro Clubs | Online co-op 11v11 cross-platform clubs | Home | Hub (Clubs) | Last reviewed 2026-09-25; cross-link to /club-membership; in-body mention of the FC 24 Founder retention and the evolving tenure badge. |
| `/new-features` | `src/data/pages/guide-pages.ts` | Guide | EA SPORTS FC 27 new features | The Grounds, revamped controls, reduced AI assistance, cross-mode coverage | The Grounds | Hub (Features) | Last reviewed 2026-09-17; cross-links to /the-grounds. |
| `/editions` | `src/data/pages/guide-pages.ts` | Guide | EA SPORTS FC 27 editions | Standard vs Ultimate price, early access, Premium Pass, FC Points | System requirements | Hub (Editions) | Last reviewed 2026-09-25; cross-link to /club-membership; in-body Club Member section covers the four-tier programme overview and FC 24 Founder exemption. |
| `/club-membership` | `src/data/pages/guide-pages.ts` | Guide | EA SPORTS FC 27 My Club Membership four-tier programme | Claim tier (FC 27 / II / III / Founder), meet Nov 1, 2026 double-login deadline, unlock Career / The Grounds / FUT mode rewards, claim Red Bull collaboration kit before Nov 28, 2026 | Career Mode / The Grounds / Ultimate Team / Clubs | Hub (Club Membership) | New launch-window page; cross-links to /career-mode, /the-grounds, /ultimate-team, /clubs. |
| `/system-requirements` | `src/data/pages/wiki-pages.ts` | Guide | EA SPORTS FC 27 system requirements | PC specs, EA Javelin, EA app, 100GB | Home | Supporting hub | Last reviewed 2026-09-17. |
| `/trailers` | `src/data/pages/wiki-pages.ts` | Guide | EA SPORTS FC 27 trailers | Find official reveal, gameplay, deep dive, launch trailer | Home | Hub (Trailers) | Last reviewed 2026-09-17. |
| `/reviews` | `src/data/pages/wiki-pages.ts` | Guide | EA SPORTS FC 27 reviews | ESRB, PEGI, embargoed critic reviews | Home | Hub (Reviews) | Last reviewed 2026-09-17. |
| `/release-info` | `src/data/pages/release-pages.ts` | Guide | EA SPORTS FC 27 release date | Advance Access, full launch, regional restrictions, pre-order | FAQ / Wiki | Supporting hub | Last reviewed 2026-09-17. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Template Game Guide | Trust and editorial policy | Contact | Trust | Explain unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Template Game Guide | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release-date`, `/faq`
- Official facts and safe guide structure: `/wiki`, `/guides`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages.
- Wiki should link to guide and release pages.
- Guides should link to wiki and release pages.
- Release Date should link to FAQ and official sources.
- FAQ should include all current high-demand answer pages.

## Open Questions

- Replace this section with game-specific unknowns during content configuration.
