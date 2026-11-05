---
title: Decap CMS vs TinaCMS
linkTitle: Decap CMS vs TinaCMS
description: Decap is a free form-based CMS for any Git host and static site generator. TinaCMS adds visual editing and a GraphQL API, on GitHub. Costs and migration.
group: git-based
weight: 12
date: 2026-11-04
---

We make Decap CMS, so read this with that in mind. Every fact about TinaCMS below comes from its own website, docs, pricing page, GitHub repository or npm, with links at the end; if something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

TinaCMS prices are in US dollars, Decap Turbo prices in euros.

## In short

- **Both keep your content as Markdown, MDX, JSON or YAML files in Git.** The difference is what sits in between: Decap CMS talks to your Git host straight from the browser, while TinaCMS indexes your files into a database and serves them through a GraphQL API, hosted by TinaCloud or by you.
- **TinaCMS is ahead on visual editing and developer tooling:** click-to-edit previews on React and Astro sites, a TypeScript schema, a generated, typed GraphQL client, and MDX components in the rich-text editor.
- **Decap CMS is ahead on reach and price:** it works with GitHub, GitLab, Bitbucket, Gitea, Forgejo, Azure DevOps and Git Gateway, and with any static site generator without a build step, and its editorial workflow is free. TinaCloud supports GitHub only, and its editorial workflow starts on the Team plan ($24 per project per month, billed yearly).
- **Choose TinaCMS** for a Next.js or Astro site on GitHub where editors want to see the page change as they type. **Choose Decap CMS** for Hugo, Jekyll or Eleventy sites, for GitLab, Bitbucket, Gitea, Forgejo or Azure DevOps, or when you don't want a backend or a per-project bill.

## At a glance

| | Decap CMS | TinaCMS |
|---|---|---|
| **What it is** | Git-based CMS: a single-page app added to your site as `/admin/` | Git-based CMS with a GraphQL content API and a React admin built into your site |
| **Where content lives** | Files in your Git repository | Files in your Git repository, indexed into a database that acts as a cache |
| **What you host or run** | Nothing beyond your static site (an OAuth proxy on GitHub, unless you use Netlify or Decap Turbo) | TinaCloud, or your own Node.js backend function, a database and an auth provider |
| **Configuration** | `config.yml` (or a JavaScript object) | `tina/config.ts` in TypeScript, plus a `tinacms build` step in your site's build |
| **License** | MIT | Apache-2.0 |
| **Price** | Free. Optional [Decap Turbo](/turbo/): Free, or Pro €19/month | Free software. TinaCloud: Free, Team $24 per project per month billed yearly ($29 monthly), Business $249 ($299 monthly), Enterprise custom |
| **Free plan** | Whole CMS, no limits. Turbo Free: 1 site, 1 seat | TinaCloud Free: 2 users, 3 roles, 100 GB bandwidth a month, no editorial workflow |
| **Git hosts** | GitHub, GitLab, Bitbucket, Gitea, Forgejo, Azure DevOps, Git Gateway | TinaCloud: GitHub (GitHub Enterprise on the Enterprise plan). Self-hosted: GitHub provider included, others need a custom provider |
| **Editors' login** | Git host account (OAuth), Netlify Identity, or Turbo | TinaCloud account (no GitHub account needed), or your own auth when self-hosting |
| **Roles** | Git permissions; CMS roles with Turbo | 3 roles on self-serve plans; unlimited roles (beta) on Enterprise |
| **Editing** | Forms with a live side-by-side preview | Forms, plus visual editing on React-based and Astro sites |
| **Editorial workflow** | Free, on six backends plus Turbo | Team plan and above, GitHub only |
| **Content API** | No | GraphQL with filtering, sorting and pagination, and a generated client |
| **i18n** | Built in: folder, file or single-file per locale | Documented patterns: one folder per locale, or localized fields |
| **Media** | Repository; Cloudinary and Uploadcare built in; S3-compatible via Turbo Pro | Repository (synced through TinaCloud, 100 MB per file); Cloudinary, S3 and DigitalOcean Spaces with a backend handler you host |
| **Frameworks** | Any static site generator or framework | Any for form editing; visual editing on React frameworks and Astro |
| **Maintained by** | PM d.o.o. and contributors | SSW, an Australian software consultancy |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} | {{< stat npm="tinacms" metric="latest" >}} |
| **Stable releases, {{< period >}}** | {{< stat github="decaporg/decap-cms" metric="releases" >}} | {{< stat npm="tinacms" metric="releases" >}} (`tinacms`) |
| **GitHub stars / npm a week** | {{< stat github="decaporg/decap-cms" metric="stars" >}} / {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} (`decap-cms-app`) | {{< stat github="tinacms/tinacms" metric="stars" >}} / {{< stat npm="tinacms" metric="weekly-downloads" >}} (`tinacms`) |

npm downloads are a weekly average over {{< period >}}. TinaCMS is always installed from npm; many Decap sites load it from a CDN with a script tag, which npm doesn't count.

## How they work

**Decap CMS** is a JavaScript app that runs in the editor's browser. When an editor opens `/admin/`, Decap reads your `config.yml`, logs in to your Git host, and reads and writes files through the Git host's API. There is no Decap server and no database; every save is a commit, and with the [editorial workflow](/docs/editorial-workflows/) every draft is a branch and a pull or merge request. You can add it to a Hugo or Jekyll site without installing Node.js, because the admin is a single script.

**TinaCMS** adds a data layer between your files and the editor. Its docs describe it as a GraphQL API that serves Markdown and JSON files "backed by a database", which works as a cache: the files in Git stay the source of truth. You define collections and fields in `tina/config.ts`, and the CLI generates a GraphQL schema and a typed client your site can use to fetch content. The admin is built into your site by running `tinacms build` before your site's own build. In production that data layer runs on **TinaCloud** (Tina's hosted service, which talks to GitHub through a GitHub App) or on **your own backend**.

**Self-hosting TinaCMS** means running three modules yourself, in a single API function on a Node.js serverless platform such as Vercel or Netlify: a **Git provider** (Tina ships one for GitHub, authenticated with a personal access token; for other hosts you write your own), a **database adapter** (Tina provides adapters for MongoDB and for Redis through Vercel KV), and an **auth provider** (Auth.js with users stored in your database by default, or Clerk, TinaCloud, or your own). The `tinacms init backend` command sets this up on Next.js only; other frameworks, Astro included, follow a manual setup. Tina's FAQ lists what you lose when self-hosting: the Git-backed media manager, switching branches at runtime, and search.

## Where TinaCMS is ahead

- **Visual editing.** On React-based sites (Next.js and others), the `useTina` hook re-renders the page as the editor types, and editors can click an element to open its field. Astro sites get the same without React through `@tinacms/astro`, which needs an Astro SSR adapter. Decap has a side-by-side preview with React templates you write, and no click-to-edit.
- **A content API.** Your site can query content through GraphQL with filters (`eq`, `in`, `gt`, `startsWith` and more), sorting and cursor pagination, using a generated client. Decap has no content API; your site reads the files directly.
- **TypeScript schema and types.** The schema lives in code, and the generated client gives typed query results. Decap's `config.yml` is YAML, though you can also pass a JavaScript object with [manual initialisation](/docs/manual-initialization/).
- **MDX components in rich text.** Rich-text fields can embed React components as MDX "templates", and the toolbar offers tables, Mermaid diagrams, highlighting and text colour.
- **Editors don't need Git accounts.** TinaCloud handles logins, and commits can be authored by the Tina GitHub App, by the editor's own GitHub account ("Act as you"), or by the app with the editor as co-author. In Decap, editors log in with a Git host account unless you use Git Gateway or [Decap Turbo](/turbo/).
- **Search in the CMS** with fuzzy matching, on TinaCloud.
- **Release pace and downloads.** In {{< period >}}, `tinacms` had {{< stat npm="tinacms" metric="releases" >}} stable releases and {{< stat npm="tinacms" metric="weekly-downloads" >}} npm downloads a week on average; Decap had {{< stat github="decaporg/decap-cms" metric="releases" >}} releases and {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} downloads a week.

## Where Decap CMS is ahead, or different

- **Git hosts.** Decap works with GitHub, GitLab, Bitbucket, Gitea, Forgejo, Azure DevOps and Git Gateway. TinaCloud's FAQ says it currently works with GitHub repositories only; GitHub Enterprise is an Enterprise-plan feature.
- **Nothing to run, no build step.** Decap needs no database, backend or CLI. TinaCMS needs TinaCloud or a self-hosted backend with a database, plus a Node.js build step that compiles the admin.
- **Free editorial workflow.** Decap's draft, in-review and ready workflow uses branches and pull or merge requests on GitHub, GitLab, Bitbucket, Azure, Forgejo, Git Gateway and Turbo, at no cost. On TinaCloud, the editorial workflow starts on the Team plan; its docs describe it as a TinaCloud feature, and self-hosted Tina can only switch branches at build time. Decap also has [open authoring](/docs/open-authoring/) for contributors without write access.
- **i18n as configuration.** Decap's [i18n](/docs/i18n/) support covers multiple folders, multiple files or a single file per locale, set in the config. Tina documents two patterns (a folder per locale or localized fields) that you wire into your routing; creating a translation means duplicating a document and renaming it.
- **Framework-neutral editing.** Decap's preview and editing work the same way on every generator. TinaCMS visual editing needs React or Astro and pages that fetch content through Tina's client; on Hugo, Jekyll, Eleventy and Vue sites (Vue support is on Tina's backlog), editors get the form editor only.
- **More media options without your own backend.** Cloudinary and Uploadcare are built in, and custom media libraries are possible. Tina's S3 media store needs a media handler function you host.
- **Price for small teams.** Decap is free for any number of editors. TinaCloud Free stops at 2 users, Team at 10.

## Cost

Assumptions: one website, list prices, hosting for the static site not included (it's the same for both). TinaCloud bills per project; Decap Turbo per organization, monthly, with tax included.

**A small business site: a developer and one or two editors.**

- **Decap CMS:** €0. On GitHub, you need an OAuth proxy unless you host on Netlify or use Turbo.
- **Decap CMS with Turbo:** €0 on Free if one person edits (1 seat). With a developer and two editors (3 seats), Pro at €19/month, or €228 a year.
- **TinaCloud:** $0 on Free if no more than 2 people log in to the CMS (a developer can work locally without a TinaCloud login). A third user means Team: $290 a year billed yearly, or $29 a month. The editorial workflow also needs Team.

**A team of 10 editors.**

- **Decap CMS:** €0, editorial workflow included. Each editor needs a Git host account with access to the repository.
- **Decap CMS with Turbo Pro:** 5 seats included plus 5 extra seats at €6: €19 + €30 = €49/month, or €588 a year. An 11th seat (say, the developer) adds €6.
- **TinaCloud Team:** 3 users included plus 7 extra seats at $90 a year: $290 + $630 = **$920 a year** billed yearly. Billed monthly: $29 + 7 × $9 = $92 a month, or $1,104 a year. Team is capped at 10 users, so an 11th person means **Business** at $2,990 a year ($299 billed monthly), which includes 20 users.
- **Self-hosted TinaCMS:** no licence fee, but you pay for and run the serverless backend, the database and the auth provider, and you give up search, the Git-backed media manager and runtime branch switching.

## Security and maintenance

**Decap CMS** has no server or database of its own. Your published site stays static, your Git host enforces who may change what, and every edit is a commit you can review and revert. What you maintain is the Decap version on your site and, on GitHub, an OAuth proxy if you run one. Decap publishes each fixed vulnerability as a security advisory; see [State of Decap](/state-of-decap/#security).

**TinaCMS on TinaCloud** keeps the moving parts on Tina's side: TinaCloud runs on AWS, holds your editors' accounts and connects to your repository through a GitHub App with write access to contents and pull requests. Your site's build uses a read-only token for the content API. You keep the `tinacms` packages updated in your site.

**Self-hosted TinaCMS** puts the backend on you: a serverless function, a database, user passwords (with the default Auth.js provider), and a GitHub personal access token with write access, all to patch and secure. Tina publishes fixed vulnerabilities as [security advisories](https://github.com/tinacms/tinacms/security/advisories), including for the CLI's local dev server, media adapters and the self-hosted auth path, so staying current matters.

## Moving from TinaCMS to Decap CMS

Your content is already in Git, so there is nothing to export. The work is in the schema and in your site's data fetching:

1. **Rewrite the schema.** Turn each Tina collection into a Decap [folder collection](/docs/collection-folder/) and each field into a [widget](/docs/widgets/): `string` to `string` or `text`, `rich-text` with `isBody` to the `markdown` body, `datetime`, `boolean`, `number` and `image` to their namesakes, `object` to `object` or `list`, `reference` to `relation`.
2. **Check references.** Tina stores a reference as the repository path of the other document (for example `author: content/authors/pedro.md`). A Decap relation widget stores the field you choose as `value_field`, so either keep the paths or convert them.
3. **Replace MDX components.** Tina's rich-text "templates" are JSX in MDX. Decap's Markdown widget handles them through [custom editor components](/docs/custom-widgets/#registereditorcomponent), which you register yourself. Test a few complex files first.
4. **Replace Tina's data fetching.** If your Next.js or Astro pages query content through Tina's generated client, switch them to reading the files directly. Static site generators like Hugo already do.
5. **Remove `tinacms build`** from your build, add `/admin/index.html` and `config.yml`, and [choose a backend](/docs/choosing-a-backend/).

What doesn't carry over: visual editing, the GraphQL API, TinaCloud search and TinaCloud user accounts.

## Moving from Decap CMS to TinaCMS

Run `npx @tinacms/cli@latest init` in your site and model your collections in `tina/config.ts`. Tina's CLI imports Forestry settings (`.forestry/settings.yaml`), but we found no importer for Decap or Netlify CMS configs in its docs, so you translate the schema by hand. Your Markdown and front matter files can stay as they are, with a few things to check:

| Decap CMS (`config.yml`) | TinaCMS (`tina/config.ts`) |
|---|---|
| Folder collection, `folder: content/posts` | Collection with `path: "content/posts"` and `format: "md"` (also `mdx`, `json`, `yaml`, `toml`) |
| File collection | Collection with `match.include` for specific files, or `ui.global: true` for a single settings document |
| `string`, `text` widget | `string` field (with the `textarea` component for long text) |
| `markdown` widget as body | `rich-text` field with `isBody: true` |
| `select` widget | `string` field with `options` |
| `list` of strings / `list` with `fields` | `string` with `list: true` / `object` with `list: true` |
| `relation` widget | `reference` field (stores the referenced file's path) |
| `datetime` widget | `datetime` field (saves a full ISO timestamp in UTC) |
| `slug` template | Filename customisation in `ui.filename` |
| `i18n` setting | A folder per locale, or localized fields |

Watch for three things. Tina field names allow only letters, numbers and underscores, so front matter keys with dashes need `nameOverride`. A `datetime` field rewrites a bare date like `2026-10-09` as a full timestamp unless you use a `string` field with the date component. And Tina's rich-text editor doesn't support footnotes or indented code blocks, and normalises some Markdown on save (for example `__bold__` becomes `**bold**`), so test a sample of your files. Then connect a TinaCloud project to your GitHub repository, or set up a self-hosted backend, and add `tinacms build` to your build command.

## Which to choose

Choose Decap CMS if:

- your repository is on GitLab, Bitbucket, Gitea, Forgejo or Azure DevOps, or you use Git Gateway;
- your site is built with Hugo, Jekyll, Eleventy or another generator where Tina offers no visual editing, and you'd rather not add a Node.js build step;
- you want draft and review workflows without a paid plan, for any number of editors;
- you don't want to run or pay for a backend, database or per-project subscription;
- you want hosted logins and roles without running anything: add [Decap Turbo](/turbo/).

Choose TinaCMS if:

- your site is built with Next.js, another React framework or Astro, and editors want to edit on the page;
- you want to query content through a typed GraphQL API, including for server-side rendering;
- your editors use MDX with embedded components;
- your repository is on GitHub and you're happy with TinaCloud's plans, or you have the team to run a self-hosted backend.

If you're choosing between several Git-based CMSs, see [Decap CMS vs other Git-based CMSs](/compare/git-based-cms/), [Decap CMS vs CloudCannon](/compare/decap-cms-vs-cloudcannon/) and [Decap CMS vs Keystatic](/compare/decap-cms-vs-keystatic/).

## Frequently asked questions

### Is Decap CMS a TinaCMS alternative?

Yes. Both are open-source Git-based CMSs that commit Markdown and data files to your repository. Decap is the simpler and cheaper option for form-based editing on any Git host; TinaCMS is the stronger option for visual editing on React and Astro sites on GitHub.

### Is TinaCMS free?

The software is free under the Apache-2.0 licence. TinaCloud, the hosted backend most sites use in production, is free for 2 users; Team costs $24 per project per month billed yearly ($29 monthly) for 3 users, with up to 10. You can self-host the backend for free, but then you run the database and auth yourself.

### Does TinaCMS work with GitLab or Bitbucket?

Not on TinaCloud, which supports GitHub only (and GitHub Enterprise on its Enterprise plan). A self-hosted TinaCMS backend ships with a GitHub provider; for another host you would write your own Git provider. Decap CMS supports GitLab and Bitbucket directly.

### Can I use TinaCMS with Hugo?

Yes, for form-based editing: Tina has a Hugo setup guide, and the admin is built with `tinacms build` alongside `hugo`. Visual editing needs React or Astro, so Hugo sites don't get it. Decap CMS also works with [Hugo](/docs/hugo/), with no Node.js build step.

### Does TinaCMS need a database?

Yes. TinaCloud runs it for you; if you self-host, you provide one through a database adapter (MongoDB or Redis via Vercel KV are provided). Tina's docs describe the database as a cache for indexing, search and references; your files in Git remain the source of truth. Decap CMS has no database.

## Sources

TinaCMS: [pricing](https://tina.io/pricing), [self-hosting overview](https://tina.io/docs/self-hosted/overview), [self-hosted setup](https://tina.io/docs/self-hosted/existing-site), [database adapters](https://tina.io/docs/reference/self-hosted/database-adapter/overview), [auth providers](https://tina.io/docs/reference/self-hosted/auth-provider/overview), [Git providers](https://tina.io/docs/reference/self-hosted/git-provider/overview), [FAQ](https://tina.io/docs/faq), [visual editing in React](https://tina.io/docs/contextual-editing/react), [Vue](https://tina.io/docs/contextual-editing/vue) and [Astro](https://tina.io/docs/frameworks/astro), [Hugo](https://tina.io/docs/frameworks/hugo), [other frameworks](https://tina.io/docs/frameworks/other), [TinaCloud setup](https://tina.io/docs/tinacloud/overview), [editorial workflow](https://tina.io/docs/tinacloud/editorial-workflow), [Git co-authoring](https://tina.io/docs/tinacloud/git-co-authoring), [GitHub Enterprise](https://tina.io/docs/tinacloud/github-enterprise-integration), [search](https://tina.io/docs/reference/search/overview), [media](https://tina.io/docs/reference/media/overview), [repo-based media](https://tina.io/docs/reference/media/repo-based), [S3 media](https://tina.io/docs/reference/media/external/s3), [internationalization](https://tina.io/docs/guides/internationalization), [rich text](https://tina.io/docs/reference/types/rich-text), [Markdown support](https://tina.io/docs/reference/markdown-spec), [collections](https://tina.io/docs/reference/collections), [fields](https://tina.io/docs/reference/fields), [datetime](https://tina.io/docs/reference/types/datetime), [references](https://tina.io/docs/reference/types/reference), [querying](https://tina.io/docs/data-fetching/overview), [Forestry migration](https://tina.io/docs/forestry/migrate) and [Tina's Forestry page](https://tina.io/forestry), the [Next.js starter's sample content](https://github.com/tinacms/tina-nextjs-starter/tree/main/content/posts), the [GitHub repository](https://github.com/tinacms/tinacms) and its [security advisories](https://github.com/tinacms/tinacms/security/advisories), and the [tinacms package on npm](https://www.npmjs.com/package/tinacms). Decap figures from [State of Decap](/state-of-decap/) and the [Decap CMS repository](https://github.com/decaporg/decap-cms). Stars, releases and downloads come from the GitHub API, the npm registry and the npm downloads API, fetched each time the site is built.
