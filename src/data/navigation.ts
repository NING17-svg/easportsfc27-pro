import type { SiteLocaleConfig } from "@/types/localization";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release-info/", labels: { "en-US": "Release Date" } },
  { href: "/editions/", labels: { "en-US": "Editions" } },
  { href: "/system-requirements/", labels: { "en-US": "System Requirements" } },
  { href: "/career-mode/", labels: { "en-US": "Career Mode" } },
  { href: "/ultimate-team/", labels: { "en-US": "Ultimate Team" } },
  { href: "/clubs/", labels: { "en-US": "Clubs" } },
  { href: "/trailers/", labels: { "en-US": "Trailers" } },
  { href: "/new-features/", labels: { "en-US": "New Features" } },
  { href: "/tips/", labels: { "en-US": "Tips" } },
  { href: "/reviews/", labels: { "en-US": "Reviews" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(item: LocalizedNavigationItem, locale: string): string {
  return item.labels[locale] || item.labels["en-US"] || Object.values(item.labels)[0];
}
