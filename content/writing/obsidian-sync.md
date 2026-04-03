---
title: Syncing an Obsidian Vault with GitHub and Working Copy in 2026
draft: false
tags:
- obsidian
- software
---

If you have been trying to set up GitHub-based syncing for your Obsidian vault on iOS or iPadOS using Working Copy, you have probably stumbled across some helpful-looking blog posts. You followed the steps carefully, looked for the right menu options, and… found nothing. The buttons described simply are not there anymore. Frustrating? Absolutely. I have been there.

This post exists for one reason: to save you that frustration and point you in the right direction.

## The Old Workflow (and Why Those Blog Posts No Longer Help)

A number of well-written guides describe a workflow that relies on features in Working Copy that have since changed. Specifically, they reference:

- **“Setup Folder Sync”**, as described in:
  - [Setting up iOS git-based syncing with mobile app (using Working Copy)]([https://forum.obsidian.md/t/mobile-setting-up-ios-git-based-syncing-with-mobile-app-using-working-copy/16499](https://forum.obsidian.md/t/mobile-setting-up-ios-git-based-syncing-with-mobile-app-using-working-copy/16499)) on the Obsidian Forum
  - [Obsidian Notes iOS + Working Copy Setup]([https://ryan.himmelwright.net/post/obsidian-ios-setup/](https://ryan.himmelwright.net/post/obsidian-ios-setup/)) by Ryan Himmelwright
- **“Link Repository to”**, as described in:
  - [Using Working Copy to sync Obsidian on iPadOS](https://blog.j370.me/technical/2025/01/22/obsidian/) by J370
  - [Sync your Obsidian Vault on iOS with GitHub, Working Copy, and Apple Shortcuts](https://meganesulli.com/blog/sync-obsidian-vault-iphone-ipad/) by Megan Sullivan

These are all genuinely good posts, and the authors clearly put effort into them. But the Working Copy functionality they describe is now considered the legacy approach. If you are setting things up fresh in 2026, you will not find those options in the same place, or at all.

## The New Workflow

Working Copy has introduced a new way to handle this, documented under **Chapter 6.4: External Repositories** in the official [Working Copy Users‘ Guide](https://workingcopyapp.com/manual/external-repos).

The legacy approach (folder sync and “Link Repository to”) is still documented too, under **Chapter 6.5: Files Synchronisation**, so you can cross-reference if needed. But for a fresh setup, Chapter 6.4 is where you want to start.

Rather than reproduce the steps here and risk becoming yet another outdated blog post in a few years’ time, I will simply point you to the source:

**[Working Copy Manual, Chapter 6.4: External Repositories](https://workingcopyapp.com/manual/external-repos)**

The documentation is clear, up to date, and includes a video walkthrough. Notably, the concrete example shown in that video is an Obsidian vault, so it maps directly to what you are trying to do.

## A Note on Keeping Things Current

The irony of writing about a topic where other posts have become misleading is not lost on me. I have kept this article intentionally light on step-by-step instructions so that it does not age in the same way. The official documentation is the right place for the details, and the Working Copy team will keep it current as the app evolves.

If you are confused, start at the manual. If the manual ever moves, a quick search for “Working Copy external repositories” should get you there.

Good luck with your vault setup.