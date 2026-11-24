# Jonas' personal website (sterafix.github.io)

Quartz v4 site, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to the branch `v4`. Jonas usually works from his phone and asks for new posts, Now page updates or small fixes.

## What you may change

- Only files in `content/` (and `content/images/` for pictures).
- Do not touch Quartz code, `quartz.config.ts`, `quartz.layout.ts`, workflows or `package*.json` unless Jonas asks for it explicitly.

## Where things go

- Posts: `content/writing/<short-slug>.md` (lowercase, hyphens, English slug).
- Now page: `content/now.md`.
- Home page: `content/index.md`.
- Images: `content/images/`, embedded with Obsidian syntax `![[file-name.jpg]]`.

Frontmatter for a new post:

```yaml
---
title: Post title
date: YYYY-MM-DD
draft: true
tags:
  - tag
---
```

- New posts always start with `draft: true`. Set `draft: false` only when Jonas says to publish.
- Keep Obsidian syntax: internal links as `[[now|Now]]` or `[[writing/slug|Text]]`. Quartz renders them.

## Now page

- Describes what Jonas is doing at the moment. Replace outdated points instead of adding a log.
- Put the date of the update as the first heading (`# YYYY-MM-DD`).
- Keep the sections short: in general, on the menu at the moment, upcoming.
- Do not add private details (addresses, family plans, money, health) unless Jonas writes them himself.

## Writing style

Texts must sound like Jonas, not like an AI.

- English, plain words, short sentences. Jonas is not a native speaker and wants simple vocabulary.
- No hype, no evaluative filler ("great", "proper", "rightly", "game changer", "dive into").
- No em dashes or en dashes. Use commas or brackets.
- No rhetorical questions with one-word answers ("Frustrating? Absolutely.").
- Direct and a bit understated. Personal where it fits, first person.
- Do not invent facts, numbers or experiences. If something is missing, ask.

## Workflow

1. Write or change the file and show Jonas the text in the chat.
2. Apply his corrections.
3. When he says it is fine: commit with a short message and open a pull request against `v4` (or push to `v4` directly if he asks for it). Merging the PR publishes the site within one to two minutes.
