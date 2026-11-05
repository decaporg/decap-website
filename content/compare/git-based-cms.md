---
title: Decap CMS vs other Git-based CMSs
linkTitle: Decap CMS vs other Git-based CMSs
description: An honest comparison of Decap CMS with Sveltia CMS, TinaCMS, Pages CMS, Keystatic, CloudCannon, Sitepins, Nuxt Studio, Front Matter CMS and Outstatic, with facts and sources.
group: overview
weight: 10
date: 2026-11-04
---

We make Decap CMS, so read this with that in mind. We've tried to make it a page you could trust anyway: every fact is sourced, the numbers come from public data you can check, and we say where other tools are the better choice. If something here is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

Prices are in each vendor's own currency.

## At a glance

| | How it runs | Git hosts | License | Cost | Maintained by | Latest release |
|---|---|---|---|---|---|---|
| **Decap CMS** | Admin page in your site, any static site generator | GitHub, GitLab, Bitbucket, Gitea, Forgejo, Azure DevOps, Git Gateway | MIT | Free. Optional hosted [Decap Turbo](/turbo/): free plan, Pro from €19/month | A company (PM d.o.o.) and contributors | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} |
| **Sveltia CMS** | Admin page in your site, any static site generator | GitHub, GitLab, Gitea, Forgejo | MIT | Free | One maintainer | {{< stat github="sveltia/sveltia-cms" metric="latest-release" >}}, {{< stat github="sveltia/sveltia-cms" metric="latest-release-date" >}} (beta) |
| **TinaCMS** | React admin with a GraphQL API; TypeScript config | GitHub (TinaCloud); self-hosted needs a Node backend and a database | Apache-2.0 | TinaCloud free for 2 users; Team from $29/month per project | SSW (a company) | {{< stat npm="tinacms" metric="latest" >}} |
| **Pages CMS** | Hosted app, or self-hosted with PostgreSQL | GitHub | MIT | Free | One maintainer | {{< stat github="hunvreus/pagescms" metric="latest-release" >}}, {{< stat github="hunvreus/pagescms" metric="latest-release-date" >}} |
| **Keystatic** | Integration for Astro, Next.js or Remix; TypeScript config | GitHub (needs a Node host), or local | MIT | Free; Keystatic Cloud free for 3 users, Pro from $10/month | Thinkmill (a company) | core {{< stat npm="@keystatic/core" metric="latest" >}} |
| **CloudCannon** | Hosted service | GitHub, GitLab, Bitbucket | Proprietary | From $55/month ($49 billed yearly), 21-day trial | CloudCannon (a company) | Continuous (SaaS) |
| **Sitepins** | Hosted app (Sitepins Cloud), or self-hosted | GitHub; GitLab from the Team plan | AGPL-3.0 | Self-hosted free; Cloud from $12/month ($10 billed yearly), 7-day trial | The team behind Themefisher (a company) | Continuous; no tagged releases |
| **Nuxt Studio** | Nuxt module, for Nuxt Content sites | GitHub, GitLab | MIT | Free | The Nuxt team | {{< stat npm="nuxt-studio" metric="latest" >}}, {{< stat github="nuxt-content/nuxt-studio" metric="latest-release-date" >}} |
| **Front Matter CMS** | VS Code extension | Your local repository | MIT | Free | One maintainer | {{< stat github="estruyf/vscode-front-matter" metric="latest-release" >}}, {{< stat github="estruyf/vscode-front-matter" metric="latest-release-date" >}} |
| **Outstatic** | Inside your Next.js app, or hosted PRO | GitHub | FSL-1.1 (source-available, not OSI open source) | Free self-hosted; PRO $9.99 per user/month | One maintainer | {{< stat github="avitorio/outstatic" metric="latest-release" >}}, {{< stat github="avitorio/outstatic" metric="latest-release-date" >}} |

[Static CMS](https://github.com/StaticJsCMS/static-cms), a fork of Netlify CMS, was archived in September 2024. Its README recommends Decap CMS and TinaCMS instead; see [moving from Static CMS to Decap CMS](/compare/decap-cms-vs-static-cms/).

## Activity, measured the same way for everyone

Activity in {{< period >}} ({{< period format="long" >}}), from the GitHub API and the npm downloads API, fetched every time this site is built. Releases, commits and downloads cover that period; stars and open issues are current. Commits are to each repository's default branch, and downloads are a weekly average over the period.

| | GitHub stars | Releases | Commits | Open issues | npm downloads a week |
|---|---:|---:|---:|---:|---:|
| Decap CMS | {{< stat github="decaporg/decap-cms" metric="stars" >}} | {{< stat github="decaporg/decap-cms" metric="releases" >}} | {{< stat github="decaporg/decap-cms" metric="commits" >}} | {{< stat github="decaporg/decap-cms" metric="open-issues" >}} | {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} (`decap-cms-app`) |
| Sveltia CMS | {{< stat github="sveltia/sveltia-cms" metric="stars" >}} | {{< stat github="sveltia/sveltia-cms" metric="releases" >}} | {{< stat github="sveltia/sveltia-cms" metric="commits" >}} | {{< stat github="sveltia/sveltia-cms" metric="open-issues" >}} | {{< stat npm="@sveltia/cms" metric="weekly-downloads" >}} (`@sveltia/cms`) |
| TinaCMS | {{< stat github="tinacms/tinacms" metric="stars" >}} | {{< stat npm="tinacms" metric="releases" >}} on npm | {{< stat github="tinacms/tinacms" metric="commits" >}} | {{< stat github="tinacms/tinacms" metric="open-issues" >}} | {{< stat npm="tinacms" metric="weekly-downloads" >}} (`tinacms`) |
| Pages CMS | {{< stat github="hunvreus/pagescms" metric="stars" >}} | {{< stat github="hunvreus/pagescms" metric="releases" >}} | {{< stat github="hunvreus/pagescms" metric="commits" >}} | {{< stat github="hunvreus/pagescms" metric="open-issues" >}} | — |
| Keystatic | {{< stat github="Thinkmill/keystatic" metric="stars" >}} | {{< stat npm="@keystatic/core" metric="releases" >}} on npm | {{< stat github="Thinkmill/keystatic" metric="commits" >}} | {{< stat github="Thinkmill/keystatic" metric="open-issues" >}} | {{< stat npm="@keystatic/core" metric="weekly-downloads" >}} (`@keystatic/core`) |
| Sitepins | {{< stat github="sitepins/sitepins" metric="stars" >}} (public since July 2026) | {{< stat github="sitepins/sitepins" metric="releases" >}} | {{< stat github="sitepins/sitepins" metric="commits" >}} | {{< stat github="sitepins/sitepins" metric="open-issues" >}} | — |
| Nuxt Studio | {{< stat github="nuxt-content/nuxt-studio" metric="stars" >}} | {{< stat npm="nuxt-studio" metric="releases" >}} on npm | {{< stat github="nuxt-content/nuxt-studio" metric="commits" >}} | {{< stat github="nuxt-content/nuxt-studio" metric="open-issues" >}} | {{< stat npm="nuxt-studio" metric="weekly-downloads" >}} (`nuxt-studio`) |
| Front Matter CMS | {{< stat github="estruyf/vscode-front-matter" metric="stars" >}} | {{< stat github="estruyf/vscode-front-matter" metric="releases" >}} | {{< stat github="estruyf/vscode-front-matter" metric="commits" >}} | {{< stat github="estruyf/vscode-front-matter" metric="open-issues" >}} | — (87,498 VS Code installs in total) |
| Outstatic | {{< stat github="avitorio/outstatic" metric="stars" >}} | {{< stat github="avitorio/outstatic" metric="releases" >}} | {{< stat github="avitorio/outstatic" metric="commits" >}} | {{< stat github="avitorio/outstatic" metric="open-issues" >}} | {{< stat npm="outstatic" metric="weekly-downloads" >}} (`outstatic`) |

"—" means there is no source for that number: Pages CMS, Sitepins and Front Matter CMS don't publish an npm package. Sitepins doesn't tag releases. Front Matter CMS's install count is the VS Code Marketplace total, which isn't fetched automatically. Releases marked "on npm" are stable versions published on npm: TinaCMS and Keystatic publish many packages from one repository, and Nuxt Studio's GitHub releases include its alpha and beta versions.

npm counts include automated installs and miss sites that load the CMS from a CDN with a script tag, which is common for both Decap and Sveltia. Treat them as a rough signal, not a count of sites. For Decap's own numbers in more detail, see [State of Decap](/state-of-decap/).

## Each alternative in short

- **[Sveltia CMS](https://sveltiacms.app/)** is the **closest alternative to Decap**: a rewrite of Netlify CMS in Svelte that reads the same `config.yml`, so most sites can switch with small changes. It has a lighter script, a very fast release pace, more free built-in media storage and local editing without a proxy in Chromium browsers; Decap has more Git hosts (Bitbucket, Azure DevOps, Git Gateway), a stable 3.x line where Sveltia is still in 0.x beta, more extension points, and hosted login and roles with [Decap Turbo](/turbo/). Sveltia is maintained by one developer; Decap by a company and contributors. More in [Decap CMS vs Sveltia CMS](/compare/decap-cms-vs-sveltia-cms/).
- **[TinaCMS](https://tina.io/)** is the strongest choice for **visual, in-context editing on React sites**: editors click on the page and edit it. Content still lives in Git, but production needs TinaCloud (GitHub only) or a self-hosted backend with a database. The free plan has 2 users and no editorial workflow, which starts on the Team plan. More in [Decap CMS vs TinaCMS](/compare/decap-cms-vs-tinacms/).
- **[Pages CMS](https://pagescms.org/)** is a **simple, free hosted editor for GitHub repositories**, configured with `.pages.yml`, and collaborators don't need a GitHub account. GitHub only. More in [Decap CMS vs Pages CMS](/compare/decap-cms-vs-pages-cms/).
- **[Keystatic](https://keystatic.com/)** suits **Astro, Next.js and Remix projects that want a TypeScript content schema** with typed content in the app. GitHub mode needs a GitHub App and a host that runs Node.js; it has no pull-request review workflow. More in [Decap CMS vs Keystatic](/compare/decap-cms-vs-keystatic/).
- **[CloudCannon](https://cloudcannon.com/)** is a **commercial hosted CMS with visual editing**, support and SSO on its top plan, for agencies and companies that would rather pay than run anything. It has no free plan. More in [Decap CMS vs CloudCannon](/compare/decap-cms-vs-cloudcannon/).
- **[Sitepins](https://sitepins.com/)** is a **hosted visual editor that detects your content structure without a config file**, with SEO and AI helpers and many templates. Its code has been public under AGPL-3.0 since July 2026; the hosted plans start at $12 a month with no free plan, and GitLab needs the Team plan. More in [Decap CMS vs Sitepins](/compare/decap-cms-vs-sitepins/).
- **[Nuxt Studio](https://nuxt.studio/)** is the natural choice for **Nuxt Content sites**, and only for them: a free, MIT-licensed Nuxt module with visual editing on GitHub and GitLab. More in [Decap CMS vs Nuxt Studio](/compare/decap-cms-vs-nuxt-studio/).
- **[Front Matter CMS](https://frontmatter.codes/)** is for **developers who write in VS Code**. It runs in the editor, not in a browser, so it doesn't serve non-technical editors.
- **[Outstatic](https://outstatic.com/)** is a **CMS inside your Next.js app**, for GitHub. Its license (FSL-1.1) restricts competing commercial use, so it isn't open source in the OSI sense.

## How to choose

- **You use a static site generator and want editors to have a web UI**, on any of several Git hosts, at no cost: Decap CMS or Sveltia CMS.
- **Your team needs logins, invitations and roles without running an OAuth server:** Decap CMS with Decap Turbo, Pages CMS (GitHub only), Sitepins, or CloudCannon.
- **You want editors to edit on the page itself** on a React site: TinaCMS, or CloudCannon.
- **Your content schema should live in TypeScript** in an Astro, Next.js or Remix app: Keystatic.
- **Your site is built with Nuxt Content:** Nuxt Studio.
- **Only developers edit the content:** Front Matter CMS, or simply your code editor.

If you aren't sure a Git-based CMS is right at all, see [Git-based vs API-first vs traditional CMS](/compare/git-based-vs-headless-vs-traditional-cms/).

## Sources

Each vendor's own documentation and pricing page: [Sveltia CMS docs](https://sveltiacms.app/en/docs) (including its [roadmap](https://sveltiacms.app/en/docs/roadmap), [migration guide](https://sveltiacms.app/en/docs/migration/netlify-decap-cms) and [Additions](https://sveltiacms.app/en/docs/additions)), [TinaCMS pricing](https://tina.io/pricing) and [self-hosting](https://tina.io/docs/self-hosted/overview), [Pages CMS](https://pagescms.org/docs/), [Keystatic GitHub mode](https://keystatic.com/docs/github-mode) and [Cloud](https://keystatic.com/docs/cloud), [CloudCannon pricing](https://cloudcannon.com/pricing/), [Sitepins pricing](https://sitepins.com/pricing) and [repository](https://github.com/sitepins/sitepins), [Front Matter CMS](https://frontmatter.codes/), [Outstatic](https://outstatic.com/), [Nuxt Studio](https://nuxt.studio/). Repository numbers from the GitHub API, downloads from the npm downloads API, bundle sizes from the published files on jsDelivr.
