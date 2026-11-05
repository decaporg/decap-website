---
title: Decap CMS vs Contentful
linkTitle: Decap CMS vs Contentful
description: Decap CMS keeps content as Markdown in your Git repository for free; Contentful is a hosted content platform with APIs, scheduled publishing and enterprise governance.
group: other
weight: 32
date: 2026-11-04
---

We make Decap CMS, so read this with that in mind. Every fact here is sourced, and we say plainly where Contentful is the better choice. If something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

Contentful's plans come from its [pricing page](https://www.contentful.com/pricing/). Its usage-limits page refused our automated requests, so the commercial-use rule quoted below comes from that page as archived on 23 July 2026.

## In short

- **Decap CMS** is a free, open-source editor that commits Markdown and YAML files to your Git repository. **Contentful** is a hosted content platform: content lives in its database and your site fetches it through APIs.
- **Contentful's Free plan may not be used for commercial projects.** The first paid plan, Lite, is $300 a month. Decap CMS is free for any use; its optional hosted service, Decap Turbo, has a free plan and Pro at €19 a month.
- **Choose Contentful** when one body of structured content feeds several websites and apps, when you need scheduled publishing and fine-grained governance, or when a large team works on content at scale.
- **Choose Decap CMS** for a static or framework-built website where developers and editors share the same files, you want your content in a format you own, and you don't want another service to run or pay for.

## At a glance

| | Decap CMS | Contentful |
|---|---|---|
| **What it is** | Git-based CMS: an admin page in your site | API-first headless content platform (SaaS) |
| **Where content lives** | Markdown, YAML, JSON or TOML files in your Git repository | Contentful's hosted database, in "spaces" |
| **What you host or run** | Nothing extra; the admin page ships with your static site | Nothing; Contentful runs it. Your site calls its APIs |
| **License** | MIT, open source | Proprietary |
| **Price** | Free. Optional [Decap Turbo](/turbo/): Free, Pro €19/month, Enterprise custom | Free; Lite $300/month; Enterprise custom |
| **Free plan** | All features, any use, no limits from us | 10 users, 2 roles, 2 locales, 100,000 API calls and 50 GB bandwidth a month, 10,000 records; not for commercial use |
| **Editors' login** | Through your Git host (OAuth), or Decap Turbo | Contentful accounts; SSO on Enterprise |
| **Roles** | Whatever the editor's Git account may do; org and per-site roles with Turbo | Free: Admin, Editor. Lite: Admin, Editor, Author. Custom roles on Enterprise |
| **Editing** | Form-based editor | Form-based web app with a visual content modeller |
| **Preview** | Live side-by-side preview, custom templates as React components | Live preview of your site, through the Content Preview API |
| **Editorial workflow** | Draft, in review, ready, as branches and pull requests | Draft and published states, versions, comments, tasks, scheduled publishing; up to 5 workflows with a Lite Space |
| **Localisation** | i18n by folder, by file or in a single file | Field-level locales: 2 on Free, 3 on Lite, custom on Enterprise |
| **Media** | Files in the repository; Cloudinary and Uploadcare built in | Hosted assets with an Images API for resizing and formats |
| **APIs** | None; your site reads the files | Content Delivery, Content Preview, Content Management, GraphQL, Images and Sync APIs |
| **Extensibility** | Custom widgets, previews, backends, media libraries, Remark plugins, event hooks | App Framework, marketplace apps, webhooks, functions |
| **Works with** | Any static site generator or framework | Any stack that can call an API; official SDKs |
| **Maintained by** | PM d.o.o. and contributors | Contentful, owned by Salesforce since 1 September 2026 |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} | Continuous (SaaS); `contentful-cli` {{< stat github="contentful/contentful-cli" metric="latest-release" >}} on {{< stat github="contentful/contentful-cli" metric="latest-release-date" >}} |
| **Adoption signal** | {{< stat github="decaporg/decap-cms" metric="stars" >}} GitHub stars; {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} npm downloads of `decap-cms-app` a week on average in {{< period >}} | {{< stat npm="contentful" metric="weekly-downloads" >}} npm downloads of the `contentful` SDK a week on average in {{< period >}} |

## How they work

Decap CMS is a single-page React app you add to your site as `/admin/index.html` with a `config.yml`. It runs in the editor's browser, reads your content files from the Git host's API and commits changes back. Your static site generator builds the site from those files, as it would if a developer had edited them. There is no Decap server or database. Your content is the Markdown in your repository, and it stays there whatever CMS you use next.

Contentful stores content in its own database. You define content types (fields, validations, references) in its web app or through its Management API. Editors fill in entries in Contentful's web app, and your site or app fetches published content through the Content Delivery API (REST or GraphQL), drafts through the Content Preview API, and images through the Images API. A static site usually fetches at build time and rebuilds on a webhook when someone publishes; a server-rendered app can fetch on every request. Each project is a "space" with its own content model, and each space has "environments": copies of content and model you can change and test before swapping them into production.

This is the difference between the two kinds of CMS, more than between these two products. Our [Git-based vs API-first vs traditional CMS](/compare/git-based-vs-headless-vs-traditional-cms/) page covers when each kind fits. In brief: Contentful is built for content that is queried, shared across channels and managed by many people; Decap is built for websites whose content belongs with their code.

## Where Contentful is ahead

- **One source for many channels.** Contentful's own guidance is to use one space and several API keys to deliver the same content to a website, an iOS app and an Android app. Decap content reaches other channels only through your build, or by reading the files.
- **Structured content at scale.** References between entries, validations, queries over the Delivery API and GraphQL, and a Sync API for incremental updates. Decap's relation widget links files, but there is nothing to query.
- **Scheduled publishing, comments and tasks** are in Contentful's editor. Decap has no scheduling or tasks; its [notes](/docs/notes/) let editors comment on an entry on GitHub, GitLab and Turbo, stored as issue comments.
- **Governance for large organisations.** Custom roles and permissions, SSO, SCIM provisioning, teams and uptime SLAs, all on Enterprise. Decap's roles come from the Git host, or from Decap Turbo's org and per-site roles.
- **Images API.** Contentful resizes and converts images on request. Decap stores the files you upload; resizing is left to your site generator or a media library such as Cloudinary.
- **No builds for instant updates.** An app that reads the Delivery API at request time shows a change as soon as it's published. Decap changes go live when your site rebuilds.
- **Ecosystem.** A marketplace of apps, an App Framework, and a large SDK user base: the `contentful` JavaScript SDK averaged {{< stat npm="contentful" metric="weekly-downloads" >}} npm downloads a week in {{< period >}}.

## Where Decap CMS is ahead, or different

- **Free for commercial use.** Contentful's Free plan "may not be used to support commercial use cases", according to its usage limits. Decap CMS is MIT-licensed and free for anything.
- **No quotas.** No limits on users, locales, records, API calls or bandwidth from Decap. Contentful's plans cap all five; the Starter Space included with Free and Lite allows 10,000 records and 25 content types.
- **You own the content as files.** Markdown with front matter, in your repository, readable by any tool. Leaving Decap means you stop using the admin page. Leaving Contentful means an export and a conversion (see below).
- **Git history and review.** Every change is a commit you can diff, review in a pull request and revert. Decap's [editorial workflow](/docs/editorial-workflows/) turns drafts into branches and pull or merge requests.
- **As many environments as you have branches.** Every Git branch is a full copy of the content, the content model (`config.yml`) and the site's code, and platforms such as Netlify, Vercel and Cloudflare Pages build a preview of each one, so there is no cap. Pointing the CMS at a branch is one setting, [`backend.branch`](/docs/configuration-options/#backend). Contentful counts environments against your plan: 2 in the free Starter Space, 4 in a Lite Space.
- **Developers and editors share the same files.** Developers keep editing Markdown in their code editor; editors use the CMS. With Contentful, developers change content through the web app or the Management API.
- **Nothing to call at runtime.** A Decap site is static: no API tokens in your build, no rate limits at request time, no CDN quota to watch.
- **Works on several Git hosts:** GitHub, GitLab, Bitbucket, Gitea, Forgejo and Azure DevOps, plus Git Gateway and a local backend.

Decap also lacks things Contentful has, and we'd rather say so: no content API, no scheduled publishing, no image delivery API (Decap can resize and convert images in the browser on upload, but doesn't transform them on request), no real-time collaboration, and large collections (many thousands of entries) get slow and can hit Git host rate limits. Decap Turbo's content proxy helps with the last one.

## Cost

Contentful's prices are per month, per organisation. Its pricing page shows Lite as €300 to visitors in Europe and quotes the same figures in US dollars elsewhere, including in its own FAQ; we use dollars below. Decap Turbo is monthly, in euros, tax included. Both cases assume a static site on a host you already pay for, or a free tier.

### A small business site with 1–2 editors

| | Monthly | Yearly |
|---|---:|---:|
| Decap CMS alone | €0 | €0 |
| Decap CMS with Turbo Free (1 seat) | €0 | €0 |
| Decap CMS with Turbo Pro (up to 5 seats) | €19 | €228 |
| Contentful Free | $0, but not allowed for commercial use | |
| Contentful Lite | $300 | $3,600 |

For a business site, Contentful's Free plan is ruled out by its terms, so the realistic comparison is Lite at $300 a month. A personal or non-commercial site could use Contentful Free. With Decap and no Turbo, each editor needs an account on your Git host with write access to the repository, and on GitHub you need an OAuth server or proxy (Netlify provides one, or Turbo handles login).

### A team of 10 editors

| | Monthly | Yearly |
|---|---:|---:|
| Decap CMS alone | €0 | €0 |
| Decap CMS with Turbo Pro: €19 + 5 extra seats × €6 | €49 | €588 |
| Contentful Lite (20 users included) | $300 | $3,600 |
| Contentful Lite + one Lite Space ($850) | $1,150 | $13,800 |

Ten editors fit within Lite's 20 users. You need the extra Lite Space ($850 a month, one allowed) once you pass the Starter Space's 10,000 records or 25 content types, or need more than 2 environments. A Lite Space allows 50,000 records, 50 content types, 4 environments, up to 5 workflows, and adds 2,000,000 API calls and 750 GB of bandwidth a month. Beyond the included usage, Lite charges $5 per 1,000,000 API calls and $0.15 per GB of bandwidth, with no cap. API calls include those from Contentful's own web app and previews (Management, Preview and Delivery), not just your site. Without Turbo, Decap's cost for 10 editors is whatever your Git host charges for 10 accounts.

## Security and maintenance

**Decap CMS** has no server or database of its own, so there is nothing of ours to patch at runtime. The published site stays static. The Git host is the gatekeeper: editors can do only what their Git account allows, and every change is a commit you can review and revert. You keep the `decap-cms` package (or script tag) up to date. We publish each fixed vulnerability as a security advisory; our [security policy](https://github.com/decaporg/decap-cms/security/policy) explains how to report one, and [State of Decap](/state-of-decap/) has the details.

**Contentful** runs and patches the platform for you. Your part is account security: who has which role, keeping Management API tokens (which can change content) out of front-end code, rotating Delivery API tokens, and turning on SSO if you're on Enterprise. If you fetch content at request time, your site depends on Contentful's API being up; Enterprise offers uptime SLAs of up to 99.99%. Contentful is now part of Salesforce, which completed the acquisition on 1 September 2026; if vendor ownership matters to your organisation's procurement, factor that in.

## Moving from Contentful to Decap CMS

1. **Export the space.** Install the official CLI (`npm install -g contentful-cli`), then run `contentful space export --space-id <id> --management-token <token> --download-assets`. It writes one JSON file with your content types, entries, assets, locales, tags, webhooks and roles, and downloads the asset files. Add `--include-drafts` if you want unpublished entries too.
2. **Map content types to collections.** Each content type usually becomes a Decap [folder collection](/docs/collection-folder/), and each field a [widget](/docs/widgets/): Short text to `string`, Long text to `text` or `markdown`, Boolean to `boolean`, Date to `datetime`, references to `relation`, lists to `list`.
3. **Write each entry as a Markdown file.** In the export, every field is keyed by locale (for example `fields.title["en-US"]`). A short Node.js script can turn each entry into front matter plus a body. For several locales, pick the Decap [i18n structure](/docs/i18n/) that suits your site generator: a folder per locale, a file per locale, or all locales in one file.
4. **Convert rich text.** Contentful's Rich Text field is stored as JSON, not Markdown: a tree of nodes (paragraphs, headings, lists, hyperlinks) with embedded entries and assets as references by ID. Render it to HTML with Contentful's [`@contentful/rich-text-html-renderer`](https://github.com/contentful/rich-text), giving it renderers for your embedded entry types, then convert the HTML to Markdown with a library such as [Turndown](https://www.npmjs.com/package/turndown). Long text fields that used Contentful's Markdown editor are already Markdown and need no conversion.
5. **Move the assets** into your repository's media folder (or a media library such as Cloudinary) and rewrite asset references to file paths. Image transformations done through Contentful's Images API URLs must move to your site generator's image pipeline.
6. **Point your site at the files** instead of the API, and add Decap's [admin page](/docs/install-decap-cms/).

What doesn't carry over: version history, scheduled publishing, comments and tasks, roles (Decap uses Git host permissions, or Turbo roles), environments (branches take their place), webhooks and marketplace apps.

**Going the other way** is just as possible. Contentful's [`@contentful/rich-text-from-markdown`](https://www.npmjs.com/package/@contentful/rich-text-from-markdown) converts Markdown to Rich Text, and `contentful space import` loads a JSON file in the export format, or you can write entries through the Management API. Your Markdown files remain in Git as a backup either way.

## Which to choose

Choose Decap CMS if:

- your site is built by a static site generator or framework from files in Git;
- it's a commercial site and $300 a month for Contentful Lite isn't justified by what you need;
- developers edit content in their code editor and want changes reviewed in pull requests;
- you want content in plain files you can take anywhere, with no quotas;
- you have up to a few thousand entries per collection and changes can wait for a rebuild.

Choose Contentful if:

- the same content feeds a website and mobile apps, or several sites;
- you need to query structured content through an API, or update without rebuilding;
- you need scheduled publishing and tasks in the CMS;
- your organisation needs custom roles, SSO, SCIM provisioning and an uptime SLA;
- you have tens of thousands of entries and a team large enough to use them.

## Frequently asked questions

### Is Decap CMS a Contentful alternative?

For websites, yes. Decap CMS gives editors a form-based UI with previews and stores content as Markdown in your Git repository, with no subscription. It is not an alternative for content that must be served to many apps through an API, because Decap has no content API.

### Is Contentful free?

Contentful has a Free plan with 10 users, 2 roles, 2 locales, 100,000 API calls and 50 GB of bandwidth a month and 10,000 records, but its usage limits say it may only be used to test and learn about the product, not for commercial use cases. The Lite plan is $300 a month.

### How much does Contentful cost?

Lite is $300 a month for 20 users, 3 roles, 3 locales, 1,000,000 API calls and 100 GB of bandwidth. A larger Lite Space costs $850 a month on top. Overages are $5 per 1,000,000 API calls and $0.15 per GB. Enterprise is priced by sales.

### How do I convert Contentful rich text to Markdown?

Export your space with `contentful space export`, render each Rich Text field to HTML with `@contentful/rich-text-html-renderer`, then convert the HTML to Markdown with a library like Turndown. Embedded entries and assets need custom renderers, because Rich Text stores them as references by ID.

### Can I use Decap CMS with Next.js, Astro or Nuxt?

Yes. Decap CMS works with any static site generator or framework that reads files, including Next.js, Astro, Nuxt, Hugo, Eleventy, Gatsby and Jekyll. See the [install guide](/docs/install-decap-cms/) or [start with a template](/docs/start-with-a-template/).

### Does Decap CMS have roles and permissions like Contentful?

Without Turbo, an editor can do whatever their Git account may do in the repository; there are no CMS-level roles. [Decap Turbo](/turbo/) adds invitations, org roles and per-site roles, with custom roles as a Pro add-on.

### Did Salesforce buy Contentful?

Yes. Salesforce's press release says it completed its acquisition of Contentful on 1 September 2026.

## Sources

Contentful's [pricing page](https://www.contentful.com/pricing/) and [usage limits](https://web.archive.org/web/20260723033241/https://www.contentful.com/help/admin/usage/usage-limit/) (version of 22 January 2026, as archived on 23 July 2026, because contentful.com returned HTTP 429 to our requests); Salesforce's [acquisition announcement](https://www.salesforce.com/news/press-releases/2026/01/22/salesforce-signs-definitive-agreement-to-acquire-contentful/) with its completion note; the [`contentful-cli` space export documentation](https://github.com/contentful/contentful-cli/tree/main/docs/space/export) and [import documentation](https://github.com/contentful/contentful-cli/tree/main/docs/space/import); Contentful's [rich-text libraries](https://github.com/contentful/rich-text); package versions from the npm registry and weekly downloads from the npm downloads API. Decap figures are from [State of Decap](/state-of-decap/) and the [Decap Turbo](/turbo/) page.
