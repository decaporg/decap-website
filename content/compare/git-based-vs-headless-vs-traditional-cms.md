---
title: Git-based vs API-first vs traditional CMS
linkTitle: Git-based vs other kinds of CMS
description: Where each kind of CMS keeps your content, what you have to run, and which projects each one suits. Includes when a Git-based CMS like Decap is the wrong choice.
group: overview
weight: 20
date: 2026-11-04
---

There are three common ways to manage a website's content. They differ mostly in **where the content lives**, and most of their strengths and limits follow from that.

- **Git-based CMS** (Decap CMS, Sveltia CMS, TinaCMS, Pages CMS, Keystatic, CloudCannon): content is stored as files (Markdown, YAML, JSON) in your site's Git repository. The CMS is an editing interface that commits those files for you, and a static site generator or framework builds the site from them.
- **API-first headless CMS** (Contentful, Sanity, Storyblok, Hygraph, or self-hosted Strapi, Payload, Directus): content is stored in a database, run by the vendor or by you, and your site or app fetches it through an API.
- **Traditional CMS** (WordPress, Drupal, Joomla): content is stored in a database, and the CMS also renders the pages, using its own themes and plugins.

Git-based and API-first CMSs are both *headless*: neither renders your site. The difference is whether content arrives as files in your repository or through an API at build or request time.

## At a glance

| | Git-based | API-first headless | Traditional |
|---|---|---|---|
| **Where content lives** | Files in your Git repository | The vendor's database, or yours | Your database |
| **What you run** | Nothing extra: an admin page in your static site | Nothing (SaaS), or a server and a database (self-hosted) | A server, a database and PHP, kept patched |
| **Typical cost** | Free CMS; hosting for a static site | Free tiers, then plans priced by seats, records, API calls or locales | Free software; hosting, maintenance, paid plugins |
| **History and rollback** | Every change is a Git commit: full history, diffs, revert | Built-in version history, depth varies by plan | Revisions per post, depending on plugins |
| **Who can work on content** | Editors in the CMS, developers in their code editor, on the same files | Editors in the CMS; developers through the API | Editors and admins in the CMS |
| **Branches and previews** | Content follows your branches and deploy previews | Separate environments or preview APIs | Staging sites, usually set up separately |
| **Content portability** | Plain files; leaving means just stopping using the CMS | An export, mapped into the next system | An export, often tied to themes and plugins |
| **Large amounts of content** | Fine to thousands of entries; slower beyond that | Built for it | Built for it |
| **Relational, structured data** | References between files; no queries | Strong: references, queries, filtering | Through custom fields and plugins |
| **Many channels (web, apps, screens)** | Through your build, or by reading the files | Built for it | Mostly the website it renders |
| **Publishing speed** | A change goes live when the site rebuilds | Instant to the API; a static site still rebuilds | Instant |
| **Security surface** | A static site; nothing to attack at runtime | The vendor's or your API | A public application with plugins to keep updated |

## When a Git-based CMS fits

- **Your site is static or built by a framework** (Hugo, Astro, Eleventy, Next.js, Nuxt, Jekyll) and content changes daily or less often, not every minute.
- **Developers and editors share the content.** Developers keep editing Markdown in their code editor and reviewing changes in pull requests, while editors get a form-based UI with previews. Both work on the same files.
- **You want to own your content in a format that outlives the tool.** Your Markdown and YAML stay in your repository whichever CMS you use later.
- **You don't want another service to run, pay for or secure.** No database, no API keys in your build, no seat-based pricing.
- **Documentation, marketing sites, blogs, portfolios and small business sites** are where Git-based CMSs are used most.

## When it doesn't

Be honest with yourself about these. A Git-based CMS is the wrong choice when:

- **Content must be live within seconds**, such as news, prices or stock. Every change waits for a build.
- **You have tens of thousands of entries, or need to query content** ("all products under 50 € in stock"). Git is a file store, not a database.
- **Many people edit the same entry at the same time.** Git handles this with commits and merges, not live collaboration.
- **The content feeds several apps at once** (a website, mobile apps, in-store screens) that each need an API.
- **Users create content**, such as comments, reviews or sign-ups. That belongs in a database.

In those cases an API-first headless CMS is usually the better fit. If you need a complete website with themes, plugins and e-commerce, and no developers on hand, a traditional CMS or a site builder is. You can also mix them: many sites keep marketing pages and docs in a Git-based CMS and a product catalogue in a database.

## Where Decap CMS fits

[Decap CMS](/docs/intro/) is a free, open-source Git-based CMS: you add an admin page and a `config.yml` to your site, and editors log in through your Git host. It works with GitHub, GitLab, Bitbucket, Gitea and Forgejo, and Azure DevOps, and with any static site generator.

The usual limits of a Git-based CMS appear as sites grow: Git host rate limits on large collections, running an OAuth server for logins, and giving editors access without giving them the whole repository. [Decap Turbo](/turbo/), our optional hosted service, addresses these with hosted login, roles and a faster content proxy. Decap CMS itself doesn't need it.

To choose between Git-based CMSs, see [Decap CMS vs other Git-based CMSs](/compare/git-based-cms/). For more on how a Git-based CMS works, read [Git-based CMS: definition, features, best practices](/blog/git-based-cms-definition-features-best-practices/).
