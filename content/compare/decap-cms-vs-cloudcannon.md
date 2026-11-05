---
title: Decap CMS vs CloudCannon
linkTitle: Decap CMS vs CloudCannon
description: Decap CMS is free and open source; CloudCannon is a paid hosted CMS with visual editing, builds and hosting included. What each costs, and when to pay.
group: git-based
weight: 15
date: 2026-11-04
---

We make Decap CMS, so read this with that in mind. Every fact about CloudCannon below comes from its own website, pricing page, documentation or changelog, with links at the end; if something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

CloudCannon prices are in US dollars, Decap Turbo prices in euros; we haven't converted between them.

## In short

- **Both edit Markdown and data files in your Git repository.** Decap CMS is a free, open-source admin page you add to your site. CloudCannon is a commercial hosted service that also builds and hosts the site.
- **CloudCannon is ahead on visual editing and on everything around the CMS:** on-page editing for Astro, Eleventy, Hugo, Next.js, Nuxt and SvelteKit, plus builds, hosting, forms, scheduled builds and paid support, from $49 a month billed yearly.
- **Decap CMS is ahead on cost and openness:** free for any number of editors, MIT-licensed, works with seven Git backends, and its draft-and-review workflow is free. CloudCannon puts branching workflows on its Team plan at $300 a month billed yearly.
- **CloudCannon can be the better deal** when you'd otherwise pay separately for hosting, forms and someone's time, or when you run many small sites with few editors. Decap is the better deal as the number of editors grows, or when you don't need visual editing.

## At a glance

| | Decap CMS | CloudCannon |
|---|---|---|
| **What it is** | Open-source Git-based CMS: a single-page app added to your site as `/admin/` | Hosted, proprietary Git-based CMS with builds and hosting |
| **Where content lives** | Files in your Git repository | Files in your Git repository, synced to CloudCannon |
| **What you host or run** | Your static site, wherever you like (and an OAuth proxy on GitHub, unless you use Netlify or Decap Turbo) | Nothing: CloudCannon builds and hosts the site, or you host elsewhere and use it as a CMS only |
| **License** | MIT | Proprietary (its Bookshop, Rosey and Editable Regions libraries are open source) |
| **Price** | Free. Optional [Decap Turbo](/turbo/): Free, or Pro €19/month | Standard $49/month billed yearly ($55 monthly); Team $300 ($350 monthly); Enterprise custom |
| **Free plan** | Whole CMS, no limits. Turbo Free: 1 site, 1 seat | None. 21-day trial of Standard without a card. Lite ($10/month) for agency partners only |
| **Users included** | Unlimited (Turbo Pro: 5 seats, €6 per extra seat) | Standard 3, Team 15; $10/month per extra user |
| **Sites** | Unlimited (Turbo Pro: 1 site, €10/month per extra site) | Unlimited on every plan |
| **Git hosts** | GitHub, GitLab, Bitbucket, Gitea, Forgejo, Azure DevOps, Git Gateway | GitHub, GitLab, Bitbucket; self-hosted GitLab and GitHub Enterprise Server on Enterprise |
| **Editors' login** | Git host account (OAuth), Netlify Identity, or Turbo | CloudCannon account; SSO/SAML on Enterprise |
| **Roles** | Git permissions; org and site roles with Turbo | Default permission groups on Standard; custom groups on Team (10) and Enterprise (unlimited) |
| **Editing** | Forms with a live side-by-side preview | Visual Editor on the built page, plus Content (WYSIWYG), Data (forms) and Source editors |
| **Editorial workflow** | Free: draft, in review, ready, as pull or merge requests | Branching workflows and pull requests on Team and Enterprise |
| **i18n** | Built in: folder, file or single-file per locale | Rosey (open-source, build-time translation) and guides for Hugo's multilingual modes |
| **Media** | Repository; Cloudinary and Uploadcare built in; S3-compatible via Turbo Pro | Repository; DAMs including S3, Cloudflare R2, Cloudinary, Azure, Google Cloud Storage, DigitalOcean Spaces, Bynder and Tenovos; Git LFS |
| **Hosting and builds** | Not included | Included: Cloudflare CDN, 110 GB (Standard) or 700 GB (Team) a month, unlimited build time on both |
| **Support** | Community; priority support as a Turbo add-on | Chat and email (Standard), priority (Team), dedicated Slack channel and uptime SLA (Enterprise) |
| **Maintained by** | PM d.o.o. and contributors | CloudCannon (a company) |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} | Continuous (SaaS) |

## How they work

**Decap CMS** runs in the editor's browser. When an editor opens `/admin/` on your site, Decap reads your `config.yml`, logs in to your Git host and reads and writes files through its API. There's no Decap server or database. Every save is a commit; your existing build and host (Netlify, Cloudflare, GitHub Pages or anything else) publish the change. Decap doesn't build or host your site, and its preview renders the entry inside the CMS (with React templates you can write to match your design), not your built page.

**CloudCannon** is an app you log in to. It connects to a repository on GitHub, GitLab or Bitbucket, syncs your files, and commits every change back. If you turn on building, it runs your install and build commands on its servers, indexes the output, and uses the real built pages for the Visual Editor, for screenshots in the file browser and for a testing domain such as `adjective-noun.cloudvent.net`. Hosting on its Cloudflare CDN is optional: you can keep Netlify or Vercel and let their builds run on CloudCannon's commits. In "Headless Mode" CloudCannon only manages content, but then you lose the Visual Editor, because it needs CloudCannon's build output.

**Visual editing** in CloudCannon works through **Editable Regions**: `data-` attributes and web components you add to your templates to mark text, images, arrays and components as editable. Component Editable Regions, which re-render components in the browser as you type, need an integration: an npm package for Astro and Eleventy, a Hugo module for Hugo, and an `EditableRegions` root component for React, Vue and Svelte sites, including Next.js, Nuxt and SvelteKit. Support for Eleventy, Hugo, Vue, Svelte and those frameworks arrived on 15 October 2026. **Bookshop** is CloudCannon's older, open-source component workflow (Astro, Jekyll, Eleventy, Hugo and SvelteKit); CloudCannon recommends Editable Regions for new Astro projects. Configuration lives in `cloudcannon.config.yml` in your repository.

## Where CloudCannon is ahead

- **Visual, on-page editing** on the real built page, for Astro, Eleventy, Hugo and React, Vue and Svelte frameworks. Decap has a form editor with a side-by-side preview and no click-to-edit.
- **Builds and hosting in one bill.** Standard includes 110 GB of bandwidth a month, five custom domains, automatic HTTPS and unlimited build time; Team 700 GB and ten domains. With Decap you bring your own build and host.
- **Features Decap doesn't have:** scheduled builds (periodic or on a date; more control on Team), form inboxes, password-protected sites on every plan, SAML-protected sites on Enterprise, deploy previews for pull requests (Team), and site mounting to share files between sites.
- **Editors need no Git account.** People get CloudCannon accounts and permission groups; Team adds custom groups with file-level rules, and Enterprise adds SSO/SAML. In Decap, editors use Git host accounts unless you use Git Gateway or [Decap Turbo](/turbo/).
- **More media storage built in**, through its DAM integrations, plus Git LFS on every plan.
- **Paid, named support.** Chat and email on Standard, priority on Team, and on Enterprise a dedicated Slack channel, an uptime SLA and three hours a month of professional services. Decap's support is community-based, with priority support as a Turbo add-on.
- **Unlimited sites on every plan**, which matters for agencies. CloudCannon also runs a partner programme with a $10/month Lite plan for small client sites.

## Where Decap CMS is ahead, or different

- **Price, and how it scales.** Decap is free for any number of editors and sites. CloudCannon counts every person you share a site or organization with, including developers and each site with guest access, at $10 a month beyond the plan's allowance.
- **Editorial workflow without an upgrade.** Decap's draft, in-review and ready workflow, as branches and pull or merge requests, is free on GitHub, GitLab, Bitbucket, Azure, Forgejo, Git Gateway and Turbo. CloudCannon's pricing table doesn't include branching workflows on Standard; they start on Team.
- **More Git hosts.** Decap supports Gitea, Forgejo, Azure DevOps and Git Gateway as well as GitHub, GitLab and Bitbucket. CloudCannon supports the last three, and self-hosted GitLab or GitHub Enterprise Server only on Enterprise.
- **Open source, no vendor.** Decap is MIT-licensed and runs in your site, so no one can change its price or shut it down under you; you can fork it. CloudCannon is proprietary; if you stop paying, it pauses your subscription, though your files stay in Git.
- **You keep your hosting.** Decap works with whatever host and build you already have. CloudCannon works with external hosts too, but its Visual Editor needs CloudCannon to build your site.
- **Extensibility in code.** Custom widgets, preview templates, backends, media libraries and Remark plugins are all JavaScript you control. CloudCannon offers inputs, snippets for shortcodes and MDX components, build hooks and a Visual Editor API, within its platform.
- **Built-in i18n in the editor.** Decap's [i18n](/docs/i18n/) handles folder, file or single-file locales in the config. CloudCannon's current approach, Rosey, translates tagged HTML at build time from JSON locale files.

## Cost

Assumptions: list prices; one organization; developers count as users on CloudCannon and as seats on Turbo; hosting for Decap sites isn't priced here, because it depends on your host (CloudCannon includes it). Turbo prices are monthly and include tax.

**A small business site: a developer and two editors (3 people).**

- **Decap CMS:** €0, plus your hosting. On GitHub you need an OAuth proxy unless you host on Netlify or use Turbo.
- **Decap CMS with Turbo Pro:** €19 a month, or €228 a year (3 of 5 seats).
- **CloudCannon Standard:** 3 users included. $49 × 12 = **$588 a year** billed yearly, or $55 × 12 = $660 billed monthly, hosting included.

**A team of 10 editors (11 people with the developer).**

- **Decap CMS:** €0, editorial workflow included. Each editor needs a Git host account with access to the repository.
- **Decap CMS with Turbo Pro:** 5 seats included plus 6 extra at €6: €19 + €36 = €55 a month, or **€660 a year**.
- **CloudCannon Standard:** 3 users plus 8 extra at $10: $49 + $80 = $129 a month, or $1,548 a year billed yearly. But Standard has no branching or pull-request workflow and only default permissions.
- **CloudCannon Team**, the plan with review workflows: 15 users included, $300 × 12 = **$3,600 a year** billed yearly, or $4,200 billed monthly.

**An agency with 20 small sites, one client editor each (21 people).**

- **Decap CMS:** €0 for the CMS, plus hosting for 20 sites.
- **Decap CMS with Turbo Pro:** €19 + 19 extra sites at €10 + 16 extra seats at €6 = €19 + €190 + €96 = **€305 a month**, hosting not included.
- **CloudCannon Standard:** $49 + 18 extra users at $10 = $229 a month, plus $2 a month for each custom domain beyond five ($30 for 15 more) = **$259 a month**, with hosting for all 20 sites (sharing 110 GB of bandwidth). CloudCannon's partner Lite plan may lower this further for small clients.

The honest reading: for one site with a growing team, Decap with or without Turbo costs far less. For many small sites with one editor each, CloudCannon Standard can cost less than Turbo Pro and also covers hosting. Decap without Turbo stays the cheapest option in every case, if Git-host logins suit your editors.

## Security and maintenance

**Decap CMS** has no server or database of its own. Your published site stays static, your Git host decides who may change what, and every edit is a commit you can review and revert. You update the Decap version on your site and, on GitHub, run or choose an OAuth proxy. Decap publishes each fixed vulnerability as a security advisory; see [State of Decap](/state-of-decap/#security).

**CloudCannon** is run for you: builds, hosting, TLS certificates, CDN and the CMS itself are its responsibility, and its changelog shows regular dependency and security updates (for example, a response on 22 October 2026 to a certificate-authority compromise). In exchange, CloudCannon holds access to your Git provider account, your build environment variables and your editors' accounts. Account security options rise with the plan: MFA enforcement on Team (since June 2026) and SSO/SAML on Enterprise. What you maintain is your site's code and its `cloudcannon.config.yml`.

## Moving from CloudCannon to Decap CMS

Your content is already in your repository, so nothing needs exporting.

1. **Translate `cloudcannon.config.yml` into `config.yml`.** CloudCannon collections become Decap [folder collections](/docs/collection-folder/) or [file collections](/docs/collection-file/); inputs become [widgets](/docs/widgets/). Arrays of components (structures, or Bookshop blocks) map to a [list widget with variable types](/docs/variable-type-widgets/).
2. **Replace snippets.** Shortcodes and MDX components that CloudCannon edits as snippets can be registered as [custom editor components](/docs/custom-widgets/#registereditorcomponent) in Decap's Markdown widget.
3. **Remove or keep the Editable Regions markup.** The `data-` attributes and the Editable Regions integration only matter inside CloudCannon's Visual Editor; you can remove them. Rosey is an open-source tool, so it can keep running in your new build.
4. **Move hosting.** Set up a build on your new host, and replace CloudCannon forms, redirects, password protection and scheduled builds with your host's equivalents.
5. **Add `/admin/`** and [choose a backend](/docs/choosing-a-backend/), and keep your DAM: assets in your own S3, R2 or Cloudinary account stay where they are, and Decap has Cloudinary built in.

What doesn't carry over: on-page visual editing, CloudCannon's permission groups (use Git permissions, or roles in [Decap Turbo](/turbo/)), and its support.

## Moving from Decap CMS to CloudCannon

CloudCannon has a guide for moving from Netlify CMS or Decap CMS. There is no importer for `config.yml`: you connect your repository, CloudCannon detects your static site generator and proposes a configuration from your files, and you move collections, media paths and fields into `cloudcannon.config.yml` yourself. CloudCannon says every default Decap widget except Map has an equivalent input. Your Markdown and front matter stay as they are. You can keep hosting on Netlify by connecting both to the same repository. CloudCannon's migration team does the work for you from $3,000 per project.

**Coming from Forestry?** CloudCannon's Forestry page offers a beta tool that generates a CloudCannon config from your Forestry settings, and 50% off Standard and Team for six months with the code `MIGRATE2CC`; the page gives no end date.

## Which to choose

Choose Decap CMS if:

- your budget for the CMS is zero, or your team of editors is growing;
- your repository is on Gitea, Forgejo or Azure DevOps, or you use Git Gateway;
- you want a draft-and-review workflow without a $300-a-month plan;
- you're happy with form-based editing and a side-by-side preview;
- you want to keep your existing host and build, and an open-source tool you can fork;
- you want hosted logins and roles at a small fixed price: add [Decap Turbo](/turbo/).

Choose CloudCannon if:

- your editors need to edit on the page, and your site is built with Astro, Eleventy, Hugo, Next.js, Nuxt or SvelteKit;
- you want builds, hosting, forms and the CMS from one vendor, with support you can call on;
- you manage many small sites with few editors each, where unlimited sites outweigh per-user pricing;
- you need SSO/SAML, an uptime SLA or a dedicated support channel, and can pay for Enterprise.

For other Git-based options, see [Decap CMS vs other Git-based CMSs](/compare/git-based-cms/) and [Decap CMS vs TinaCMS](/compare/decap-cms-vs-tinacms/). If you're unsure a Git-based CMS is right at all, read [Git-based vs API-first vs traditional CMS](/compare/git-based-vs-headless-vs-traditional-cms/).

## Frequently asked questions

### Is Decap CMS a CloudCannon alternative?

Yes, for the CMS part. Both edit Markdown and data files in Git for static sites. Decap doesn't include visual on-page editing, builds or hosting, so you pair it with a host such as Netlify or Cloudflare.

### Does CloudCannon have a free plan?

No. New organizations get a 21-day trial of the Standard plan with no payment method required; after that, Standard costs $49 a month billed yearly or $55 monthly. A $10-a-month Lite plan exists for members of its agency partner programme.

### How much does CloudCannon cost for a team?

Standard includes 3 users and Team includes 15, with $10 a month for each extra user. Team, at $300 a month billed yearly, is the plan with branching workflows and custom permissions. Decap CMS is free for any number of editors.

### Which static site generators does CloudCannon support?

CloudCannon names Astro, Eleventy, Hugo, Jekyll, Next.js, Nuxt and SvelteKit, among others, and has a "Custom" option for any build command. Visual editing of components is available for Astro, Eleventy, Hugo and React, Vue and Svelte sites. Decap CMS works with any static site generator.

### Can I use CloudCannon with GitLab or Bitbucket?

Yes, on every plan; self-hosted GitLab and GitHub Enterprise Server need Enterprise. Decap CMS also supports Gitea, Forgejo and Azure DevOps.

### Can I move from CloudCannon to Decap CMS?

Yes. Your content is already in Git. You rewrite `cloudcannon.config.yml` as a Decap `config.yml`, re-create snippets as editor components, and move hosting, forms and redirects to your new host.

## Sources

CloudCannon: [pricing](https://cloudcannon.com/pricing/), [choosing a subscription plan](https://cloudcannon.com/documentation/user-guides/subscribe-to-cloudcannon/choose-your-subscription-plan/), [add-ons and overages](https://cloudcannon.com/documentation/user-guides/subscribe-to-cloudcannon/set-up-add-ons-and-overages/), [build time](https://cloudcannon.com/documentation/developer-articles/what-is-build-time/), [building](https://cloudcannon.com/documentation/developer-articles/introduction-to-building/), [hosting](https://cloudcannon.com/documentation/developer-articles/introduction-to-hosting/), [Netlify hosting with CloudCannon editing](https://cloudcannon.com/documentation/developer-articles/netlify-hosting-with-cloudcannon-editing/), [what is visual editing](https://cloudcannon.com/documentation/developer-guides/set-up-visual-editing/what-is-visual-editing/), [component editable regions](https://cloudcannon.com/documentation/developer-guides/set-up-visual-editing/visually-edit-components/), [Rosey](https://cloudcannon.com/documentation/developer-guides/add-internationalization-with-rosey/what-is-rosey/), [Hugo multilingual](https://cloudcannon.com/documentation/developer-guides/hugo-multilingual/), [assets and DAMs](https://cloudcannon.com/documentation/developer-articles/introduction-to-assets-and-dams/), [custom permission groups](https://cloudcannon.com/documentation/developer-articles/what-are-custom-permission-groups/), [publishing](https://cloudcannon.com/documentation/user-guides/editing-in-cloudcannon/publishing-your-changes/), changelog entries for [free trials](https://cloudcannon.com/documentation/changelog/2026/08/11/automatic-free-trials-for-new-organizations/), [component editable regions](https://cloudcannon.com/documentation/changelog/2026/10/15/component-editable-regions-for-more-ssgs/), [bandwidth](https://cloudcannon.com/documentation/changelog/2025/10/09/hosting-bandwidth-changes/), [MFA on Team](https://cloudcannon.com/documentation/changelog/2026/06/11/enforce-mfa-on-the-team-plan/) and [deploy previews](https://cloudcannon.com/documentation/changelog/2026/06/23/deploy-previews-for-pull-requests/), the [changelog](https://cloudcannon.com/documentation/changelog/), its [llms.txt](https://cloudcannon.com/llms.txt), [moving from Netlify CMS or Decap CMS](https://cloudcannon.com/blog/looking-for-an-alternative-to-netlify-cms-or-decap-cms/), [Forestry alternative](https://cloudcannon.com/alternative-to-forestry/), [website migration](https://cloudcannon.com/website-migration/), and the [Bookshop](https://github.com/CloudCannon/bookshop), [Rosey](https://github.com/CloudCannon/rosey) and [Editable Regions](https://github.com/CloudCannon/editable-regions) repositories. Decap figures from [State of Decap](/state-of-decap/), the [Decap Turbo plans](/turbo/) and the [Decap CMS repository](https://github.com/decaporg/decap-cms).
