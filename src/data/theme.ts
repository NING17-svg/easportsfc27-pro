import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "dark",
  tokens: {
    pageBg: "#0A1020",
    surface1: "#111A2E",
    surface2: "#1A2542",
    surface3: "#243256",
    surfaceInverse: "#F4F6FB",
    textPrimary: "#F2F5FA",
    textMuted: "#9AA6BF",
    textInverse: "#0A1020",
    textOnAccentPrimary: "#FFFFFF",
    textLink: "#FF6E4D",
    focusRing: "#FFB47A",
    line: "#2A3550",
    lineStrong: "#3E4D72",
    accentPrimary: "#E63946",
    accentSecondary: "#FF7A1A",
    accentBright: "#FFD24A",
    statusConfirmed: "#2DD4BF",
    statusCaution: "#FFB47A",
    statusUnknown: "#9AA6BF",
  },
  typography: {
    headingFamily:
      "\"Barlow Condensed\", \"Oswald\", \"Helvetica Neue\", Arial, sans-serif",
    bodyFamily:
      "\"Inter\", \"Segoe UI\", system-ui, -apple-system, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "6px",
    borderWidth: "1px",
    shadow: "0 2px 8px rgba(5, 10, 22, 0.55)",
    hoverLift: "-2px",
  },
  density: "comfortable",
  background: {
    mode: "gradient",
    overlay: 0.18,
    position: "center top",
  },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "panelled",
  },
  decoration: {
    motif: "lines",
    intensity: "low",
  },
} satisfies ThemeConfig;