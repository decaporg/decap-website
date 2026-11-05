---
title: Decap CMS vs Payload
linkTitle: Decap CMS vs Payload
description: Both are free and MIT-licensed. Payload is a TypeScript framework inside your Next.js app with a database; Decap edits Markdown in Git and runs nothing.
group: other
weight: 35
date: 2026-11-04
---

We make Decap CMS, so read this with that in mind. Every fact about Payload below comes from Payload's own site, docs or repository, or from Figma's, and is linked in the sources; if something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

## In short

- **Both are free and MIT-licensed, but they are different kinds of tool.** Payload is a TypeScript application framework and headless CMS that runs inside a Next.js app, in front of MongoDB, PostgreSQL or SQLite. Decap CMS is an admin page in your site that commits Markdown files to your Git repository. You run a Node.js app and a database for Payload; for Decap you run nothing.
- **Choose Payload** for app-like projects: user accounts, complex relational data, access rules per field, background jobs, or a TypeScript team that wants the CMS in the same codebase as a Next.js front end.
- **Choose Decap CMS** for content websites built by any static site generator or framework, where you want content as plain files in Git, full history in commits, and nothing extra to host, patch or back up.
- **Payload joined Figma in June 2025.** Payload stays open source and self-hosted; Payload Cloud has paused deployment of new projects.

## At a glance

| | Decap CMS | Payload |
|---|---|---|
| **What it is** | Git-based CMS: a single-page React app added to your site at `/admin/` | Open-source TypeScript framework and headless CMS, installed into a Next.js app |
| **Where content lives** | Markdown, YAML, JSON or TOML files in your Git repository | A database: MongoDB, PostgreSQL or SQLite (adapters also exist for Vercel Postgres and Cloudflare D1) |
| **What you run** | Nothing; it runs in the editor's browser | A Next.js app on Node.js, a database, file storage and usually an email provider |
| **Configuration** | `config.yml`, or a JavaScript config | `payload.config.ts` in TypeScript, with generated types |
| **License** | MIT | MIT |
| **Price** | Free. Optional hosted [Decap Turbo](/turbo/): Free plan, Pro €19/month | Free. Enterprise features (SSO, publishing workflows, AI) through sales, no public price. Payload Cloud has paused new projects |
| **Editors' login** | Through the Git host (OAuth), or Turbo | Payload's own authentication: users in your database |
| **Roles** | The editor's Git permissions; CMS roles with Turbo | Access control functions in code, per collection, global, field and operation |
| **Editing** | Forms with a live side-by-side preview | Admin panel forms, Lexical rich text, blocks; custom React components |
| **Preview** | Live preview pane, custom React templates | Preview links and Live Preview of your front end in an iframe, as you type |
| **Workflow and history** | Draft, in review, ready, as pull/merge requests; every change is a Git commit | Versions (100 per document by default), drafts, autosave, scheduled publishing; approval workflows on Enterprise |
| **i18n** | Built in | Field-level localisation, built in |
| **Media** | Files in the repository; Cloudinary, Uploadcare, custom libraries | Upload collections; adapters for S3, Vercel Blob, Google Cloud Storage and others |
| **APIs** | None; your build reads the files | REST, GraphQL, and the Local API inside your server code |
| **Front ends** | Any static site generator or framework that reads files | The admin runs in Next.js (TanStack Start is in the 4.0 beta); any front end can use the APIs |
| **Maintained by** | PM d.o.o. and contributors | The Payload team, part of Figma since June 2025 |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} | {{< stat github="payloadcms/payload" metric="latest-release" >}}, {{< stat github="payloadcms/payload" metric="latest-release-date" >}} ({{< stat github="payloadcms/payload" metric="releases" >}} stable releases in {{< period >}}); 4.0 in beta since 9 October 2026 |
| **Activity** | {{< stat github="decaporg/decap-cms" metric="stars" >}} GitHub stars; {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} npm downloads a week on average in {{< period >}} | {{< stat github="payloadcms/payload" metric="stars" >}} GitHub stars; {{< stat npm="payload" metric="weekly-downloads" >}} npm downloads of `payload` a week on average in {{< period >}} |

## How they work

Since version 3.0 (19 November 2024), Payload installs into a Next.js App Router project. You describe collections, globals, fields, access rules and hooks in `payload.config.ts`, and Payload gives you an admin panel, a database schema with migrations, REST and GraphQL APIs, authentication and file uploads. Its Local API lets server code, such as React Server Components, read and write the database directly, with no HTTP request. The website and the CMS are often one Next.js app, deployed anywhere Next.js runs: Vercel, Netlify, Cloudflare Workers, a Docker container or your own server.

Decap CMS is not an application you deploy. It's a JavaScript app that you add to your site as `/admin/index.html` with a `config.yml`. It runs in the editor's browser and talks to your Git host's API: saving an entry commits a Markdown file, and your site rebuilds from the repository. There is no database, no API and no server of its own, and it works the same with Hugo, Astro, Eleventy, Jekyll, Next.js or Nuxt.

So the deciding question is where your content and logic should live. Payload is a backend you build an application on; Decap is an editor for files in a repository. That is mostly a choice between kinds of CMS, covered in [Git-based vs API-first vs traditional CMS](/compare/git-based-vs-headless-vs-traditional-cms/). If you've decided on a self-hosted database-backed CMS, [Decap CMS vs Strapi](/compare/decap-cms-vs-strapi/) compares the other common choice.

## Where Payload is ahead

- **It's an application framework, not only a CMS.** Authentication (cookies, JWT, API keys, custom strategies), custom endpoints, hooks, a jobs queue with schedules, and plugins for forms, redirects, nested documents, multi-tenancy, import and export, and MCP. You can build a member area, a shop or an internal tool on it. Decap is for editing website content only.
- **Complex, relational data.** A database handles relations, queries, filtering and large numbers of documents. Decap is fine to thousands of entries per collection and has a relation widget, but no queries.
- **Fine-grained access control, free.** Access functions can depend on the user, their role, the document's data or anything else, down to single fields. Decap CMS has no CMS-level roles; editors can do whatever their Git account can, unless you use Turbo.
- **TypeScript end to end.** The config is TypeScript, types are generated from it, and the Local API is typed. For a team that already lives in a Next.js codebase, the CMS is just more code in the same repository.
- **Instant publishing, drafts and scheduling.** A published change is live in the database immediately, versions and autosave are built in, and scheduled publish is a config option. Decap changes wait for a site rebuild, and Decap has no scheduled publishing.
- **Live Preview as you type, in your real front end.** Payload renders your app in an iframe and sends changes through `postMessage`. Decap's preview is a separate pane rendered by preview templates you write in React.
- **Editors need no Git accounts.** Users are records in Payload's database.

## Where Decap CMS is ahead, or different

- **Nothing to run.** No database, no Node.js server, no file storage adapter, no email provider, no backups. Payload's deployment docs say most projects need a database, file storage, an email provider and a CDN.
- **Works with any static site generator.** Hugo, Jekyll or Eleventy read the files Decap writes. Payload's admin needs a Next.js app (or TanStack Start, in the 4.0 beta), and other front ends must call its API.
- **Full history and a review workflow, free.** Every Decap save is a Git commit you can diff and revert, and the draft, in review and ready workflow runs as pull or merge requests on GitHub, GitLab, Bitbucket, Azure, Forgejo, Git Gateway and Turbo. Payload has versions and drafts for free, but approval workflows are listed as an Enterprise feature.
- **Content that outlives the tool.** Your content is Markdown with front matter, editable in any code editor and reviewable in pull requests. Payload's rich text is stored as Lexical JSON in a database, so leaving means exporting and converting.
- **Content follows your branches.** Every branch and deploy preview has its own content. With Payload, staging means another database.
- **No code to configure.** A Decap setup is a YAML file; you don't need to write TypeScript or run migrations to add a field.
- **A slower upgrade cycle.** Decap has been on 3.x with semantic versioning since 2023. Payload moved to Next.js in 3.0 in November 2024, and 4.0 is in beta with its own breaking changes and codemods.

## Cost

Assumptions: Payload is MIT-licensed with no per-user fees, so the cost is hosting. With Payload, the website and the CMS are often one Next.js app, so its hosting covers both. With Decap, you pay only for static hosting of the site, which you would pay without a CMS too, so it's left out. As examples we use DigitalOcean list prices (a Basic Droplet with 4 GiB of RAM is $24/month; the smallest managed PostgreSQL is $15.15/month) and Vercel (Hobby is free but for personal, non-commercial use only; Pro is $20/month per developer seat, with $20 of included usage). Payload doesn't publish hardware minimums. Decap Turbo is billed monthly in euros, tax included.

### A solo developer or small business, 1 to 2 editors

| Option | Monthly cost | Notes |
|---|---|---|
| Decap CMS | €0 | Editors log in with their Git host account. On GitHub you need an OAuth proxy, unless you use Netlify's or Turbo |
| Decap CMS + Turbo Free | €0 | 1 site, 1 seat |
| Decap CMS + Turbo Pro | €19 | 1 site, up to 5 seats; needed for a second editor logging in through Turbo |
| Payload on your own server | about $39 | $24 Droplet + $15.15 managed PostgreSQL; or less with SQLite on the server's disk |
| Payload on Vercel Pro | $20 + database and storage | One developer seat; the database and file storage come from other providers |

### A team of 10 editors

| Option | Monthly cost | Arithmetic |
|---|---|---|
| Decap CMS | €0 | Each editor needs write access on your Git host |
| Decap CMS + Turbo Pro | €49 | €19 (5 seats) + 5 × €6 extra seats |
| Payload, self-hosted | about $39 | Same hosting; editors are free Payload users |
| Payload on Vercel Pro | $20 per developer + database and storage | Editors don't need Vercel seats |
| Payload with SSO or approval workflows | on request | Enterprise |

In money, Payload costs about the same for 2 editors or 10. The larger cost is developer time: Payload is a codebase you build, deploy and maintain, while Decap is a config file.

## Security and maintenance

With Payload you own a public web application: Node.js (the docs require recent 22.x or 24.x releases), Next.js (only certain 15 and 16 releases are compatible), Payload and its plugins, the database, file storage, secrets and backups. Payload published {{< stat github="payloadcms/payload" metric="releases" >}} stable releases in {{< period >}}. Payload publishes fixed vulnerabilities as [security advisories](https://github.com/payloadcms/payload/security/advisories) on GitHub, including for optional plugins. Publishing advisories is good practice; the point is that you need to update your app promptly every time one appears.

Major upgrades are real projects. 3.0 moved Payload into Next.js, with a migration guide from 2.x. The 4.0 beta (from 9 October 2026) redesigns the admin UI, adds TanStack Start support and ships codemods (`npx @payloadcms/codemod@beta upgrade`) for its breaking changes.

With Decap CMS there is no server or database to attack: the published site stays static, the Git host is the gatekeeper, and every change is a reviewable commit. You still update the Decap script now and then, and on GitHub you may run a small OAuth proxy. Decap publishes each fixed vulnerability as a security advisory; see [State of Decap](/state-of-decap/#security).

### What changed with Figma

Payload announced on 17 June 2025 that it was joining Figma. Its CEO, James Mikrut, wrote that Payload stays open source, self-hosting stays available, and the same team keeps running it; in the GitHub announcement he described Figma integrations as the boundary between what is open source and what needs a paid Figma seat. The license on GitHub is still MIT. Payload's page for Cloud customers says deployment of new Payload Cloud projects is paused, existing projects keep running, customers will eventually need to migrate, and no price changes are planned. In October 2026 Figma announced Payload inside Figma Make, where Figma hosts the backend for Make projects (in beta). For a self-hosted project, little has changed in practice, except that there is no official hosting to start a new project on.

## Moving from Payload to Decap CMS

1. **Map the model.** Collections become [folder collections](/docs/collection-folder/), globals become [file collections](/docs/collection-file/). Groups and arrays map to [object](/docs/widgets/object/) and [list](/docs/widgets/list/) widgets, blocks to [variable type lists](/docs/variable-type-widgets/), relationship fields to the [relation widget](/docs/widgets/relation/), and localised fields to Decap's [i18n](/docs/i18n/).
2. **Export the content.** Write a script that uses the Local API (`payload.find`, paging through every document) or the REST API, or use the official Import Export plugin to export JSON or CSV.
3. **Convert rich text.** Payload's Lexical package includes `convertLexicalToMarkdown`, so each rich text field can become Markdown. Write one file per document with the other fields as front matter.
4. **Move the media.** Copy files from your upload storage (local disk, S3 or another adapter) into the repository or your media library, and rewrite the URLs.
5. **Point the front end at files.** If your site stays on Next.js, read the Markdown files at build time instead of calling the Local API; Decap has a [Next.js guide](/docs/nextjs/) and [templates](/docs/start-with-a-template/).

What doesn't carry over: authentication and user accounts, access control functions, hooks, custom endpoints, jobs, version history (your Git history starts at the import), scheduled publishing, and anything your site does at request time.

Going the other way, from Decap to Payload: define the collections in `payload.config.ts`, read the Markdown files with a front matter parser such as `gray-matter`, convert the body with Payload's `convertMarkdownToLexical`, and create documents with the Local API. Payload's docs include a section on migrating existing Markdown content.

## Which to choose

Choose Decap CMS if:

- you're building a content website with any static site generator or framework, and content changes daily or less often;
- you want content as Markdown in Git, reviewed in pull requests and editable in a code editor;
- you don't want to host, patch or back up an app, a database and file storage;
- your team would rather write a YAML config than maintain a TypeScript backend;
- your editors have Git accounts, or you're happy to use Decap Turbo for logins and roles.

Choose Payload if:

- you're building something app-like: user accounts, a member area, a shop, an internal tool;
- your data is relational, large, or queried at request time;
- you need access rules per field or per document, not per repository;
- your team writes TypeScript and Next.js and wants the CMS in the same codebase;
- you have someone to run and update a Node.js app and a database.

## Frequently asked questions

### Is Decap CMS a Payload alternative?

For content websites, yes; for applications, no. Both give editors a web UI, but Payload is a backend framework with a database, authentication and APIs, while Decap commits files to Git. If you need user accounts or request-time queries, Decap isn't a replacement.

### Is Payload free?

Yes. Payload is MIT-licensed and free to self-host, with no limits on users. Enterprise features such as SSO, publishing workflows and AI features are sold through Payload's sales team, without a public price.

### Is Payload still open source after the Figma acquisition?

Yes. The repository is MIT-licensed, and Payload and Figma both said in June 2025 that it stays open source. What changed is hosting: Payload Cloud has paused deployment of new projects.

### Can I use Decap CMS with Next.js?

Yes. Decap works with Next.js like any other framework: the site reads Markdown files from the repository at build time. See the [Next.js guide](/docs/nextjs/).

### Does Payload need Next.js?

In version 3, yes: the admin panel and APIs run inside a Next.js App Router app. The 4.0 beta adds TanStack Start. Your public front end can be anything that calls Payload's REST or GraphQL API.

### Can I migrate from Payload to Markdown?

Yes. Export documents with the Local API, REST API or Import Export plugin, convert rich text with `convertLexicalToMarkdown`, and write each document as a Markdown file with front matter.

## Sources

[What is Payload](https://payloadcms.com/docs/getting-started/what-is-payload), [Installation](https://payloadcms.com/docs/getting-started/installation), [Database](https://payloadcms.com/docs/database/overview), [Production deployment](https://payloadcms.com/docs/production/deployment), [Local API](https://payloadcms.com/docs/local-api/overview), [Access control](https://payloadcms.com/docs/access-control/overview), [Versions](https://payloadcms.com/docs/versions/overview), [Live Preview](https://payloadcms.com/docs/live-preview/overview), [Converting Markdown](https://payloadcms.com/docs/rich-text/converting-markdown), [Import Export plugin](https://payloadcms.com/docs/plugins/import-export), [Payload 4.0 beta docs](https://payloadcms.com/docs/beta/getting-started/what-is-payload) and [4.0.0-beta.0 release notes](https://github.com/payloadcms/payload/releases/tag/v4.0.0-beta.0), [Enterprise](https://payloadcms.com/enterprise), [Payload has joined Figma (Cloud FAQ)](https://payloadcms.com/payload-has-joined-figma), [Payload is joining Figma](https://payloadcms.com/posts/blog/payload-is-joining-figma) and the [GitHub announcement](https://github.com/payloadcms/payload/discussions/12843), [Figma: Welcoming Payload](https://www.figma.com/blog/payload-joins-figma/) and [Payload in Figma Make](https://www.figma.com/blog/websites-with-payload-in-figma/), [Payload security advisories](https://github.com/payloadcms/payload/security/advisories), [DigitalOcean Droplet pricing](https://www.digitalocean.com/pricing/droplets) and [managed database pricing](https://www.digitalocean.com/pricing/managed-databases), [Vercel pricing](https://vercel.com/pricing). Stars, releases and the license from the GitHub API, downloads from the npm downloads API. Decap facts from [State of Decap](/state-of-decap/) and the [Decap Turbo](/turbo/) page.
