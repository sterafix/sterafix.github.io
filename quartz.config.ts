import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "Space Grotesk",   // technisch, aber persönlich
    body: "Inter",             // klar und lesbar
    code: "JetBrains Mono",   // das Standard für Code
  },
  colors: {
    lightMode: {
      light: "#f7f6f3",        // leicht warmes Off-White, kein hartes Weiß
      lightgray: "#e8e6e0",    // subtile Trennlinien
      gray: "#9a9590",         // sekundärer Text, Icons
      darkgray: "#3d3a36",     // Fließtext
      dark: "#1a1815",         // Überschriften
      secondary: "#4a6fa5",    // Links – gedämpftes Blau, nicht schreiend
      tertiary: "#2d5a8e",     // Hover
      highlight: "rgba(74, 111, 165, 0.08)",
      textHighlight: "#f0e68c88",
    },
    darkMode: {
      light: "#111110",        // fast-Schwarz, minimal warm
      lightgray: "#222220",    // Borders
      gray: "#555550",         // sekundäre Elemente
      darkgray: "#a8a49e",     // Fließtext – nicht zu hell
      dark: "#e8e4de",         // Überschriften
      secondary: "#7aa2c8",    // Links – gedämpftes Hellblau
      tertiary: "#9bbdd9",     // Hover
      highlight: "rgba(122, 162, 200, 0.1)",
      textHighlight: "#b59a3c55",
    },
  },
},
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
