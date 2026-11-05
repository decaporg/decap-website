---
title: Decap CMS vs Strapi
linkTitle: Decap CMS vs Strapi
description: Both are free and open source. Strapi is a Node.js server with a database and an API; Decap edits Markdown in Git and runs nothing. Which suits which site.
group: other
weight: 34
date: 2026-11-04
---

We make Decap CMS, so read this with that in mind. Every fact about Strapi below comes from Strapi's own site, docs or repository and is linked in the sources; if something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

Strapi's prices are shown in $ on its pricing page and exclude tax.

## In short

- **Both are free and open source (MIT), but they are different kinds of CMS.** Strapi is a Node.js server with a database that serves your content through REST and GraphQL APIs. Decap CMS is an admin page in your site that commits Markdown files to your Git repository. You run a server and a database for Strapi; for Decap you run nothing.
- **Choose Strapi** when content feeds several apps through an API, when you have tens of thousands of entries or need to query them, or when editors need granular roles and must not need Git accounts.
- **Choose Decap CMS** for a static or framework-built website (Hugo, Astro, Eleventy, Next.js and others) where you want content as plain files in Git, full history in commits, and nothing extra to host, patch or back up.
- **Strapi's free Community edition is generous** (unlimited users, roles, i18n), but Live Preview, Releases and Content History start on Growth at $45/month, and Review Workflows, Audit Logs and SSO are Enterprise features.

## At a glance

| | Decap CMS | Strapi |
|---|---|---|
| **What it is** | Git-based CMS: a single-page React app added to your site at `/admin/` | Self-hosted headless CMS: a Node.js server with an admin panel and content APIs |
| **Where content lives** | Markdown, YAML, JSON or TOML files in your Git repository | A SQL database: PostgreSQL, MySQL, MariaDB or SQLite |
| **What you run** | Nothing; it runs in the editor's browser | A Node.js server (2 GB RAM minimum, 4 GB recommended) and a database, or Strapi Cloud |
| **License** | MIT | MIT for the Community edition; code in `ee/` folders is under Strapi's Enterprise licence and needs a licence key |
| **Price** | Free. Optional hosted [Decap Turbo](/turbo/): Free plan, Pro €19/month | Community free; Growth $45/month with 3 users (+$15/month per user); Enterprise on request. Strapi Cloud hosting from $35/month per project, on top |
| **Free plan** | Everything; Turbo Free is 1 site and 1 seat | Community: self-hosted, unlimited users. No free Strapi Cloud plan |
| **Editors' login** | Through the Git host (OAuth), or Turbo | Strapi admin accounts; SSO on Enterprise, or as a Growth add-on |
| **Roles** | The editor's Git permissions; CMS roles with Turbo | Role-based access control with custom roles, on every plan |
| **Editing** | Forms with a live side-by-side preview | Forms in the Content Manager; rich text as Blocks (JSON) or Markdown |
| **Preview** | Live preview pane, custom React templates | Preview of your front end on every plan; Live Preview on Growth and Enterprise |
| **Workflow and history** | Draft, in review, ready, as pull/merge requests; every change is a Git commit | Draft & Publish on every plan; Releases and 14-day Content History on Growth; Review Workflows on Enterprise |
| **i18n** | Built in | Built in, every plan |
| **Media** | Files in the repository; Cloudinary, Uploadcare, custom libraries | Media Library; local disk, S3, Cloudinary and other providers |
| **Extensibility** | Custom widgets, previews, backends, media libraries, event hooks | Plugins, custom fields, controllers, services, lifecycle hooks, a Marketplace, an MCP server |
| **Front ends** | Any static site generator or framework that reads files | Any front end that calls a REST or GraphQL API |
| **Maintained by** | PM d.o.o. and contributors | Strapi Solutions SAS |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} | {{< stat github="strapi/strapi" metric="latest-release" >}}, {{< stat github="strapi/strapi" metric="latest-release-date" >}} ({{< stat github="strapi/strapi" metric="releases" >}} stable releases in {{< period >}}) |
| **Activity** | {{< stat github="decaporg/decap-cms" metric="stars" >}} GitHub stars; {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} npm downloads a week on average in {{< period >}} | {{< stat github="strapi/strapi" metric="stars" >}} GitHub stars; {{< stat npm="@strapi/strapi" metric="weekly-downloads" >}} npm downloads of `@strapi/strapi` a week on average in {{< period >}} |

## How they work

Strapi is an application you deploy. You create a project with `npx create-strapi@latest`, define content types in the Content-Type Builder or in code, and run it as an always-on Node.js service in front of a SQL database. Editors log in to Strapi's admin panel; your website or app fetches the content over REST or GraphQL, at build time or on every request. Strapi's docs say it is not well suited to serverless hosting because it takes several seconds to boot. The Content-Type Builder is available only in the development environment, so schema changes are made locally and deployed as code.

Decap CMS is not an application you deploy. It's a JavaScript app that you add to your site as `/admin/index.html` with a `config.yml`. It runs in the editor's browser and talks directly to your Git host's API: saving an entry commits a Markdown file, and your site rebuilds from the repository. There is no database, no content API and no server of its own.

So the real question is where your content should live: in a database behind an API, or in files next to your code. That is a choice between kinds of CMS more than between products, and [Git-based vs API-first vs traditional CMS](/compare/git-based-vs-headless-vs-traditional-cms/) covers it in detail. If you have decided you want a self-hosted, database-backed CMS, also see [Decap CMS vs Payload](/compare/decap-cms-vs-payload/).

## Where Strapi is ahead

- **A real content API.** REST and GraphQL with filtering, sorting, pagination and relation population, plus API tokens. One Strapi instance can serve a website, mobile apps and other services. Decap has no API; content reaches your site through the build.
- **Scale and queries.** A database handles tens of thousands of entries and queries such as "all products in this category, sorted by price". Decap is fine to thousands of entries per collection, but Git is a file store, not a database.
- **Roles for free.** Strapi's Community edition has role-based access control with custom roles and unlimited users. Decap CMS has no CMS-level roles: editors can do whatever their Git account can. Roles in Decap need [Decap Turbo](/turbo/).
- **Editors need no Git accounts.** Strapi users are its own admin accounts. With Decap, each editor needs an account on your Git host, or a Turbo invitation.
- **Content modelling in a UI.** The Content-Type Builder lets you design types, components and dynamic zones by clicking, in development. Decap's collections are defined in `config.yml`.
- **End-user features.** The Users & Permissions feature gives your app user sign-up, JWT authentication and API permissions, which suits user-generated content. Decap is for editors only.
- **Scheduled publishing and click-to-edit preview, on paid plans.** Releases (Growth) can be scheduled; Live Preview (Growth) highlights editable areas in your front end and opens the field when you double-click one. Decap has neither.
- **Publishing is instant to the API.** A change is live in the API as soon as it's published. A Decap change waits for the site to rebuild.

## Where Decap CMS is ahead, or different

- **Nothing to run.** No server, no database, no backups, no Node.js version to keep supported. Strapi needs at least 1 CPU core, 2 GB of RAM and a supported database version, or a Strapi Cloud subscription.
- **History and rollback for every change, free.** Every Decap save is a Git commit you can diff and revert. Strapi's Content History is a paid feature (14 days on Growth) and only covers edits made in the Content Manager.
- **Review workflow at no cost.** Decap's draft, in review and ready workflow runs as pull or merge requests on GitHub, GitLab, Bitbucket, Azure, Forgejo, Git Gateway and Turbo. Strapi's Review Workflows are Enterprise only.
- **Content you can read without the CMS.** Your content is Markdown with front matter in your repository. Developers edit it in their code editor and review it in pull requests, and leaving Decap means simply stopping using it. Leaving Strapi means exporting from a database.
- **Content follows your branches.** Every branch and deploy preview has its own content. With Strapi, staging means another instance or environment.
- **Fewer forced upgrades.** Decap has been on 3.x with semantic versioning since 2023. Strapi v4 reached end of life on 30 April 2026, and the move to v5 lists 52 breaking changes (more on this below).
- **Works with static site generators directly.** Hugo, Jekyll or Eleventy read the files Decap writes; no API client or build-time fetching is needed.

## Cost

Assumptions: the website itself is hosted the same way in every case, so its hosting is left out. For self-hosted Strapi we use DigitalOcean list prices as one example (a Basic Droplet with 2 GiB of RAM is $12/month and one with 4 GiB is $24/month; the smallest managed PostgreSQL is $15.15/month). Other hosts differ. Strapi CMS plans are billed monthly; Strapi Cloud also offers yearly billing. Decap Turbo is billed monthly in euros, tax included.

### A solo developer or small business, 1 to 2 editors

| Option | Monthly cost | Notes |
|---|---|---|
| Decap CMS | €0 | Editors log in with their Git host account. On GitHub you need an OAuth proxy, unless you use Netlify's or Turbo |
| Decap CMS + Turbo Free | €0 | 1 site, 1 seat |
| Decap CMS + Turbo Pro | €19 | 1 site, up to 5 seats; needed for the second editor if both log in through Turbo |
| Strapi Community, self-hosted | about $12 to $39 | $12 for a 2 GiB server with SQLite; $24 + $15.15 = $39.15 for a 4 GiB server and managed PostgreSQL |
| Strapi Community on Strapi Cloud | $35 | Starter: sleeps when idle, no backups |
| Strapi Growth on Strapi Cloud | $80 | $35 Starter + $45 Growth, for Live Preview, Releases and 14-day history |

### A team of 10 editors

| Option | Monthly cost | Arithmetic |
|---|---|---|
| Decap CMS | €0 | Each editor needs write access on your Git host |
| Decap CMS + Turbo Pro | €49 | €19 (5 seats) + 5 × €6 extra seats |
| Strapi Community, self-hosted | about $39 | $24 server + $15.15 database; unlimited users |
| Strapi Growth, self-hosted | about $189 | $45 (3 users) + 7 × $15 = $150, plus $39.15 hosting |
| Strapi Growth on Strapi Cloud Pro | $240 | $150 Growth + $90 Pro (always on, weekly backups) |
| Strapi with SSO, Review Workflows or Audit Logs | on request | Enterprise; SSO on Growth is an add-on at $150/month plus $50/month per user |

Strapi Community self-hosted is cheap in money; the larger cost is the time to run, patch and back up a server. Strapi Cloud also charges overages above the plan's API requests, storage and bandwidth ($1.50 per 25,000 requests, $0.60 per GB of storage, $30 per 100 GB of bandwidth).

## Security and maintenance

With self-hosted Strapi you own a public web application: the operating system, Node.js (only LTS versions are supported, currently 22, 24 and 26), the Strapi version, the database, a reverse proxy with TLS, backups, and secrets such as API tokens. Strapi ships a new minor version most weeks. It publishes fixed vulnerabilities as [security advisories](https://github.com/strapi/strapi/security/advisories) on GitHub. Publishing advisories is good practice; the point is that you need to apply each fix to your server promptly. On Strapi Cloud, Strapi runs the infrastructure, but you still deploy the Strapi version in your code.

Major upgrades are real projects. Strapi v4 reached end of life on 30 April 2026; the last v4 release was 4.26.2 on 9 June 2026. Moving to v5 uses an upgrade tool with codemods and data migration scripts that run on first start, but the docs list 52 breaking changes, including a new response format, `documentId` replacing numeric IDs, and the Document Service API replacing the Entity Service API. A `Strapi-Response-Format: v4` header lets front ends migrate gradually.

With Decap CMS there is no server or database to attack: the published site stays static, the Git host is the gatekeeper, and every change is a reviewable commit. You still update the Decap script now and then, and on GitHub you may run a small OAuth proxy. Decap publishes each fixed vulnerability as a security advisory; see [State of Decap](/state-of-decap/#security).

## Moving from Strapi to Decap CMS

1. **Map the model.** Collection types become [folder collections](/docs/collection-folder/), single types become [file collections](/docs/collection-file/). Components map to [object](/docs/widgets/object/) and [list](/docs/widgets/list/) widgets, dynamic zones to [variable type lists](/docs/variable-type-widgets/), relations to the [relation widget](/docs/widgets/relation/), and locales to Decap's [i18n](/docs/i18n/) structures.
2. **Export the content.** Either call the REST API with an API token, using `populate` for relations and components and paging through every entry, or run `strapi export --no-encrypt`, which writes JSON Lines files for entities, relations and assets.
3. **Write one file per entry.** A short script turns each entry into Markdown with front matter. Rich Text (Markdown) fields copy over as they are. Rich Text (Blocks) fields are stored as JSON, so you need to convert them to Markdown in your script; we couldn't find an official converter.
4. **Move the media.** Download files from the upload provider (the `public/uploads` folder for the local provider, or your S3 or Cloudinary account), add them to your repository or media library, and rewrite the URLs.
5. **Connect the front end to files.** Replace API calls with your static site generator's content loading. For starting points, see [templates](/docs/start-with-a-template/).

What doesn't carry over: the API itself, Users & Permissions end users, roles (use Git permissions or Turbo roles), Content History (your Git history starts at the import), Releases, review stages beyond Decap's three, webhooks and lifecycle hooks.

Going the other way, from Decap to Strapi, is the same in reverse: create the content types, read the Markdown files with a front matter parser such as `gray-matter`, and create entries through the REST API with an API token, uploading images to Strapi's upload endpoint first.

## Which to choose

Choose Decap CMS if:

- your site is built by a static site generator or framework, and content changes daily or less often;
- you want content as Markdown in Git, reviewed in pull requests and editable in a code editor;
- you don't want to host, patch or back up a server and a database;
- you want a free review workflow and full history;
- your editors have Git accounts, or you're happy to use Decap Turbo for logins and roles.

Choose Strapi if:

- content feeds several front ends or apps through an API;
- you have tens of thousands of entries, or need queries, filtering and relations at request time;
- editors must not need Git accounts, and you want granular roles without paying;
- your app needs end-user sign-up or user-generated content;
- you have someone to run a Node.js server and a database, or the budget for Strapi Cloud.

## Frequently asked questions

### Is Decap CMS a Strapi alternative?

For websites, often yes; for apps, usually not. Both give editors a web UI for structured content, but Strapi stores it in a database and serves it through an API, while Decap commits files to Git. If your project needs an API for several clients, Decap isn't a replacement.

### Is Strapi free?

The Community edition is free and MIT-licensed, with unlimited users, roles, i18n and both APIs, if you host it yourself. Growth costs $45/month with 3 users and can be tried free for 30 days on a self-hosted project; Enterprise is priced on request. Strapi Cloud hosting starts at $35/month per project and has no free plan.

### Is Strapi a Git-based CMS?

No. Strapi stores content in a SQL database (PostgreSQL, MySQL, MariaDB or SQLite). Only the project code and content-type schemas live in your Git repository.

### Can I use Decap CMS and Strapi together?

You can, for different content: for example, marketing pages and docs as Markdown edited in Decap, and a product catalogue in Strapi read through its API. They don't share content or logins.

### Does Strapi work with Hugo or other static site generators?

Yes, if your build fetches content from Strapi's API, or a script writes it to files before the build. Decap writes those files directly, so the generator needs no API client.

### How hard is it to upgrade from Strapi v4 to v5?

Strapi provides an upgrade tool with codemods and automatic data migrations, but its docs list 52 breaking changes, and custom code and plugins need manual work. Strapi v4 reached end of life on 30 April 2026.

### Can I migrate from Strapi to Markdown?

Yes. Export through the REST API or `strapi export`, then write each entry as a Markdown file with front matter. Markdown fields copy directly; Blocks rich text needs converting.

## Sources

[Strapi CMS pricing](https://strapi.io/pricing-cms), [Strapi self-hosted pricing](https://strapi.io/pricing-self-hosted), [Strapi Cloud pricing](https://strapi.io/pricing-cloud), [Features and plans](https://docs.strapi.io/cms/features), [Cloud billing and usage](https://docs.strapi.io/cloud/getting-started/usage-billing), [Deployment requirements](https://docs.strapi.io/cms/deployment), [Database configuration](https://docs.strapi.io/cms/configurations/database), [FAQ on serverless](https://docs.strapi.io/cms/faq), [RBAC](https://docs.strapi.io/cms/features/rbac), [Preview](https://docs.strapi.io/cms/features/preview), [Releases](https://docs.strapi.io/cms/features/releases), [Content History](https://docs.strapi.io/cms/features/content-history), [Content-Type Builder](https://docs.strapi.io/cms/features/content-type-builder), [Data export](https://docs.strapi.io/cms/features/data-management/export), [Upgrading to Strapi 5](https://docs.strapi.io/cms/migration/v4-to-v5/introduction-and-faq), [v5 breaking changes](https://docs.strapi.io/cms/migration/v4-to-v5/breaking-changes), [Strapi license](https://github.com/strapi/strapi/blob/develop/LICENSE), [Strapi security advisories](https://github.com/strapi/strapi/security/advisories), [DigitalOcean Droplet pricing](https://www.digitalocean.com/pricing/droplets) and [managed database pricing](https://www.digitalocean.com/pricing/managed-databases). Stars and releases from the GitHub API, downloads from the npm downloads API. Decap facts from [State of Decap](/state-of-decap/) and the [Decap Turbo](/turbo/) page.
