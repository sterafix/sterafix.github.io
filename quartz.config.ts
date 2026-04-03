import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Jonas Philipps",
    pageTitleSuffix: " · Jonas Philipps",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "sterafix.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    // NACHHER:
theme: {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "Space Grotesk",
    body: "Inter",
    code: "JetBrains Mono",
  },
  colors: {
    lightMode: {
      light: "#f7f6f3",
      lightgray: "#e8e6e0",
      gray: "#9a9590",
      darkgray: "#3d3a36",
      dark: "#1a1815",
      secondary: "#4a6fa5",
      tertiary: "#2d5a8e",
      highlight: "rgba(74, 111, 165, 0.08)",
      textHighlight: "#f0e68c88",
    },
    darkMode: {
      light: "#111110",
      lightgray: "#222220",
      gray: "#555550",
      darkgray: "#a8a49e",
      dark: "#e8e4de",
      secondary: "#7aa2c8",
      tertiary: "#9bbdd9",
      highlight: "rgba(122, 162, 200, 0.10)",
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
