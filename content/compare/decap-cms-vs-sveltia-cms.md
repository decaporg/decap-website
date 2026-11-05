---
title: Decap CMS vs Sveltia CMS
linkTitle: Decap CMS vs Sveltia CMS
description: Decap CMS and Sveltia CMS read the same config.yml. How they differ on Git hosts, fields, i18n, media, size and release model, and how to switch either way.
group: git-based
weight: 11
date: 2026-11-04
---

We make Decap CMS, so read this with that in mind. Every fact here is sourced, and we say plainly where Sveltia CMS is the better choice. If something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

## In short

- **Sveltia CMS is the closest alternative to Decap CMS**: a ground-up rewrite of Netlify CMS in Svelte that reads the same `config.yml`, so most sites can switch between the two with a one-line change and a short config review.
- **Sveltia is lighter and moves faster**: a 0.8 MB main script against Decap's 1.4 MB, {{< stat github="sveltia/sveltia-cms" metric="releases" >}} releases in {{< period >}} against Decap's {{< stat github="decaporg/decap-cms" metric="releases" >}}, and more built-in media storage, field types and i18n options.
- **Decap supports more Git hosts and extension points**: Bitbucket, Azure DevOps and Git Gateway, custom backends, custom media libraries and Remark plugins, none of which Sveltia plans to support.
- **Decap is on a stable, semantically versioned 3.x line, maintained by a company**; Sveltia is a 0.x beta maintained by one developer, with 1.0 expected in late 2026.
- **Teams that need hosted login and roles today** can use Decap with [Decap Turbo](/turbo/). Sveltia's free, self-deployed equivalent, Sveltia CMS Additions, is announced for November 2026.

## At a glance

| | Decap CMS | Sveltia CMS |
|---|---|---|
| **What it is** | Git-based CMS, a React single-page app, MIT license | Git-based CMS, a Svelte single-page app written from scratch, MIT license |
| **Configuration** | `config.yml`, or a JavaScript object with manual initialisation | The same `config.yml`; also TOML, JSON or JavaScript |
| **Where content lives** | Markdown, YAML, JSON or TOML files in your repository | The same |
| **What you host** | An admin page and a config file; an OAuth client for GitHub logins | The same; or editors sign in with a personal access token |
| **Price** | Free. Optional [Decap Turbo](/turbo/): Free plan, Pro €19/month | Free. Additions announced as free, self-deployed edge functions |
| **Git hosts** | GitHub, GitLab, Bitbucket, Gitea, Forgejo, Azure DevOps, Git Gateway, Decap Turbo | GitHub, GitLab, Gitea/Forgejo |
| **Roles** | What each editor's Git account allows; org and per-site roles with Turbo | What each editor's Git account allows; roles planned in Additions |
| **Editing** | Form editor with live side-by-side preview; optional click-in-preview to jump to a field | Form editor with preview; click-to-highlight on by default |
| **Editorial workflow** | GitHub, GitLab, Bitbucket, Azure, Forgejo, Git Gateway, Turbo; open authoring on GitHub | GitHub, GitLab, Gitea/Forgejo since 17 August 2026; open authoring on all three since 22 August 2026 |
| **Field types** | 18 widgets, including UUID and a beta Rich Text widget | 20 field types, adding Compute and KeyValue |
| **i18n** | Multiple folders, multiple files or single file; file collections single file only | All of those plus more structures, per-locale file paths in file collections, localized slugs, built-in machine translation |
| **Media** | Repository; Cloudinary and Uploadcare built in; S3-compatible through Turbo Pro or a beta package | Repository; Amazon S3 and seven named S3-compatible services, Azure Blob Storage, Cloudinary, Uploadcare; stock photos |
| **Local editing** | `decap-server`, a small local proxy, in any browser | Directly through the browser, in Chromium-based browsers only |
| **Extensibility** | Custom widgets, previews, backends, media libraries, Remark plugins, locales, event hooks | Custom field types, previews, editor components, file formats, string transformations, pages, event hooks |
| **Main script, gzipped** | 1.4 MB | 0.8 MB, plus files loaded on demand |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} (stable, 3.x since 2023) | {{< stat github="sveltia/sveltia-cms" metric="latest-release" >}}, {{< stat github="sveltia/sveltia-cms" metric="latest-release-date" >}} (beta) |
| **Maintained by** | PM d.o.o. (about 30 people, six developers) and {{< stat github="decaporg/decap-cms" metric="contributors" >}} contributors in {{< period >}} | Kohei Yoshino, one developer |
| **GitHub stars; npm downloads a week** | {{< stat github="decaporg/decap-cms" metric="stars" >}}; {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} (`decap-cms-app`) | {{< stat github="sveltia/sveltia-cms" metric="stars" >}}; {{< stat npm="@sveltia/cms" metric="weekly-downloads" >}} (`@sveltia/cms`) |

npm counts are weekly averages over {{< period >}}. They include automated installs and miss sites that load either CMS from a CDN with a script tag, which is common for both. Treat them as a rough signal.

## How they work

Both are the same kind of tool. You add an admin page to your site that loads one JavaScript file and points it at a configuration file. The CMS runs entirely in the editor's browser, signs the editor in with your Git host, reads entries straight from the repository and commits changes back. Neither has a server or database of its own, and both work with any static site generator or framework. What differs is the code. Decap CMS is Netlify CMS itself, renamed in February 2023 and maintained since then by PM d.o.o.; it keeps Netlify CMS's React codebase and its plugin interfaces. Sveltia CMS was started in November 2022 by Kohei Yoshino as a rewrite in Svelte, first published in March 2023, and aims to be a drop-in replacement for Netlify/Decap CMS rather than a fork of it.

The shared config format is what makes this comparison unusual. Sveltia's [migration guide](https://sveltiacms.app/en/docs/migration/netlify-decap-cms) says that in most cases switching from Decap is a one-line change to the script tag, and that existing GitHub, GitLab and Gitea/Forgejo sign-ins carry over because Sveltia reuses the token stored in the browser. Sveltia also adds a lot of options of its own, so the compatibility is strongest in one direction: a Decap config usually works in Sveltia, while a config written for Sveltia often uses options Decap doesn't know. The switching section below covers both directions.

Sveltia also loads code differently. Its CDN build is a single script that fetches fonts, interface translations, extra libraries and image decoders from jsDelivr and UNPKG as they are needed, which keeps the first download small. Its npm package bundles all of these instead, but the Sveltia docs say they don't provide support for the npm setup and recommend the CDN build.

### The "successor" question

Sveltia's documentation calls it the "de facto successor" to Netlify CMS and describes Decap CMS as neglected and poorly maintained. You can check that against public numbers for {{< period >}} ({{< period format="long" >}}), explained on [State of Decap](/state-of-decap/):

- **{{< stat github="decaporg/decap-cms" metric="releases" >}} stable releases** of Decap CMS.
- **{{< stat github="decaporg/decap-cms" metric="prs-merged" >}} pull requests merged**, from {{< stat github="decaporg/decap-cms" metric="contributors" >}} people and from automated dependency updates.
- **{{< stat github="decaporg/decap-cms" metric="issues-closed" >}} issues closed.** {{< stat github="decaporg/decap-cms" metric="open-issues" >}} are open now, many of them from the Netlify CMS years.
- **Security fixes published** as [security advisories](https://github.com/decaporg/decap-cms/security/advisories), under a [security policy](https://github.com/decaporg/decap-cms/security/policy).
- **{{< stat github="decaporg/decap-cms" metric="commits" >}} commits** to `main`.

In the same period, Sveltia had {{< stat github="sveltia/sveltia-cms" metric="commits" >}} commits and {{< stat github="sveltia/sveltia-cms" metric="releases" >}} releases. Both projects are actively maintained. They differ in pace, scope and who is behind them, which is what the rest of this page is about.

## Where Sveltia CMS is ahead

### Speed and pace

- **Lighter and faster to load.** Its main script is 0.8 MB gzipped, against 1.4 MB for Decap's (both measured from the published files on jsDelivr; Sveltia loads more code later, on demand). Reducing Decap's bundle size is [work in progress](https://github.com/decaporg/decap-cms/pull/8032).
- **Fewer round trips to GitHub and GitLab.** Sveltia uses their GraphQL APIs by default to fetch many files at once. Decap uses GraphQL on GitHub only if you set `use_graphql: true`, and large collections can hit Git host rate limits, which is one of the problems [Decap Turbo](/turbo/)'s content proxy solves.
- **Release pace.** Sveltia ships several releases a week ({{< stat github="sveltia/sveltia-cms" metric="releases" >}} in {{< period >}}), and its docs say most bug reports are dealt with within hours. It has {{< stat github="sveltia/sveltia-cms" metric="open-issues" >}} open issues, against {{< stat github="decaporg/decap-cms" metric="open-issues" >}} for Decap.

### Fields and editing

- **Two field types Decap doesn't have:** Compute, a read-only value worked out from other fields, and KeyValue, a list of key/value pairs.
- **More string transformations** for summaries, slugs and Compute fields, and an API to register your own. Decap's summary strings support six filters (`upper`, `lower`, `date`, `default`, `ternary`, `truncate`).
- **Extra APIs** for custom pages in the CMS interface and custom file formats.
- **Click-to-highlight in the preview is on by default.** Decap has the same feature as the `visualEditing` option, off by default.

### i18n

- **Fewer i18n limits.** Decap's file collections only support the single-file structure, and List and Object widgets only accept `i18n: true`. Sveltia lifts both limits and adds structures such as `multiple_root_folders`, `{{locale}}` placeholders in folder and file paths (useful for Hugo's translation by content directory), localized slugs linked with Hugo's `translationKey`, per-locale labels and hints, and `required: [en]` to require a field in some locales only.
- **Machine translation in the editor**, with your own API key for Google Cloud Translation or one of several LLM providers, so an editor can fill a locale from another with one click.

### Media

- **More media storage built in, all free:** Amazon S3 and S3-compatible Backblaze B2, Bunny Storage, Cloudflare R2, DigitalOcean Spaces, Neon, Scaleway and Supabase (or any other S3-compatible server), plus Azure Blob Storage, Cloudinary and Uploadcare. Several can be used at once. Decap CMS has Cloudinary and Uploadcare built in; S3-compatible storage is in [Decap Turbo](/turbo/) Pro and a beta package.
- **Stock photo search** (Pexels, Pixabay, Unsplash, Lorem Picsum) and built-in image optimisation that converts raster images to WebP and optimises SVGs. Decap has a `media_processing` option that resizes, crops, compresses and converts JPEG, PNG and WebP uploads in the browser.

### Workflow and local editing

- **Local editing without a proxy server**, in Chromium-based browsers, through the browser's File System Access API. It can also commit each save to your local repository. Decap uses a small local server, `decap-server`, for the same thing, and works in any browser.
- **Open authoring on GitHub, GitLab and Gitea/Forgejo.** Decap's open authoring is GitHub only. Sveltia's editorial workflow can also approve the pull request when an entry is marked Ready, for repositories that require an approval.
- **Sign in with a personal access token**, a quick option for developers that needs no OAuth client.

## Where Decap CMS is ahead, or different

### Git hosts and backends

- **More Git hosts.** Decap supports Bitbucket, Azure DevOps and Git Gateway with Netlify Identity. Sveltia lists all three as "not to be implemented", for performance reasons, and plans a different alternative to Git Gateway.
- **Editorial workflow on more backends.** Decap's draft–review–publish workflow works on GitHub, GitLab, Bitbucket, Azure, Forgejo, Git Gateway and Turbo. Sveltia added it in August 2026 for GitHub, GitLab, Gitea and Forgejo. (On Gitea, Decap's `gitea` backend doesn't support the workflow; its `forgejo` backend does.)
- **Local editing in any browser.** `decap-server` works in Firefox and Safari as well as Chromium-based browsers.

### Stability and extension points

- **Stable versioning.** Decap CMS has been on 3.x with semantic versioning since 2023, so `decap-cms@^3.0.0` in your script tag gets fixes and features without breaking changes. Sveltia is in beta (0.x); its docs say breaking changes may still come in minor versions until 1.0, expected in late 2026. Its unpinned CDN script updates itself, and the docs advise against pinning a version for long.
- **Extension points.** Decap supports custom backends, custom media libraries, Remark plugins, custom locales, editor notes and a Gatsby plugin. Sveltia's migration guide lists these as not implemented: `registerRemarkPlugin` and `registerLocale` are no-ops, and Decap notes are not loaded. Both support custom preview templates and widgets as React components; Sveltia notes they may not be fully compatible with existing ones.
- **More interface languages.** Sveltia lists ten languages that Decap's interface has and it doesn't yet, including Hungarian, Romanian, Slovenian, Spanish (Spain), Norwegian and Thai. Sveltia has some Decap lacks, such as Arabic.

### A hosted option for teams, today

[Decap Turbo](/turbo/) adds hosted login without an OAuth server, invitations by email, organisation and per-site roles, a faster content proxy for large repositories, an activity log, and deploy status for GitHub sites. Editors invited to Turbo don't need their own Git host account. It has a free plan, and Pro is €19/month. Sveltia's equivalent, [Sveltia CMS Additions](https://sveltiacms.app/en/docs/additions), is announced for November 2026 as free, open-source edge functions you deploy yourself on Cloudflare Workers, starting with GitHub. Its first release is planned to include user management with roles, commits without a Git account, post locking, a conversation panel, credential management and multi-tenancy; GitLab, Gitea, Forgejo, other serverless platforms, scheduled posts and per-collection permissions are planned later. It has not been released yet, and its tracking issue is open.

### Who is behind it

Decap CMS is maintained by PM d.o.o., a software company of about 30 people with six developers, and by contributors: {{< stat github="decaporg/decap-cms" metric="contributors" >}} people had pull requests merged in {{< period >}}. Its income from Decap Turbo and sponsors pays for that work, so the project doesn't depend on any one person. Sveltia is maintained by one developer, Kohei Yoshino, who writes nearly all of its code and has shipped it at an impressive pace. Which of these matters more depends on your project; for a site you expect to run for years, it's worth weighing. More on how Decap is funded is on [State of Decap](/state-of-decap/#who-maintains-it-and-how-its-funded).

## Cost

Both CMSs are free and MIT-licensed. What you might pay for is the login service, media storage and, for Decap, the optional Turbo plans (monthly, in euros, tax included).

**A solo developer or small business site with one or two editors:**

- **Decap CMS without Turbo:** €0. Each editor needs a Git host account with write access. On GitHub you need an OAuth client: Netlify's, if the site is on Netlify, or one of the [external OAuth clients](/docs/external-oauth-clients/). GitLab, Gitea and Forgejo can use PKCE with no server.
- **Decap CMS with Turbo:** €0 on the Free plan for one editor (1 site, 1 seat). A second editor needs Pro at €19/month, which includes 5 seats.
- **Sveltia CMS:** €0. Logins through Netlify, through Sveltia CMS Authenticator on the Cloudflare Workers free tier, or with personal access tokens for developers.

**A team of 10 editors on one site:**

- **Decap CMS without Turbo:** €0, plus 10 Git host accounts with write access to the repository.
- **Decap CMS with Turbo Pro:** €19 for 5 seats plus 5 extra seats at €6 each, so €19 + €30 = **€49/month**. Editors don't need Git accounts, and you get roles, invitations and the content proxy.
- **Sveltia CMS:** €0, plus 10 Git host accounts. Once Additions is released, its role and Git-account-free features are designed to run within the Cloudflare Workers free tier "in most cases", per its docs.

External media storage (S3, R2 and so on) is billed by the storage provider in either case; Sveltia's integration is free, Decap's S3-compatible library is part of Turbo Pro.

## Security and maintenance

### Security: the same model

Both are Git-based CMSs that run in the editor's browser, with no server or database of their own, and both can only do what the editor's Git account allows. The architecture makes neither one safer than the other. Decap CMS publishes every fixed vulnerability as a [security advisory](https://github.com/decaporg/decap-cms/security/advisories); see [State of Decap](/state-of-decap/#security) for how we handle security.

Sveltia publishes advisories in the same way, on its [advisories page](https://github.com/sveltia/sveltia-cms/security/advisories). One difference is `decap-server`, Decap's local proxy for editing on your own machine, which has had security fixes of its own. Sveltia has no local proxy, which removes that part of the attack surface; with Decap, keep `decap-server` up to date and run it only on your own machine.

### What you maintain

- **Updates.** With Decap's recommended script tag (`decap-cms@^3.0.0`), sites pick up new 3.x releases automatically and breaking changes only come with a new major version. With Sveltia's unpinned script tag, sites run the latest release automatically, which in a 0.x beta can include breaking changes; the CMS also tells open sessions when a new version is out. With either npm package, updates are yours to apply.
- **Login.** On GitHub, both need an OAuth client unless you use Netlify's or, for Decap, Turbo. If you host one, that is the only server-side piece to keep patched.
- **Third-party requests.** Sveltia's CDN build loads files from jsDelivr and UNPKG at run time, which matters if you have a strict Content Security Policy or privacy rules. Its docs say it doesn't need `unsafe-eval` or `unsafe-inline` in `script-src`.

## Moving from Sveltia CMS to Decap CMS, and back

Your content doesn't move: it stays as files in your repository whichever CMS you use. What changes is the script tag and, sometimes, the config. Try the switch on a branch or a deploy preview first.

### What carries over

- Collections, fields and most widget options, including folder, file and nested collections, relation fields, slug templates and summaries.
- Media folders and files in the repository.
- Custom preview templates and widgets written with `h()` or JSX, usually with some adjustment.
- OAuth apps: the same GitHub or GitLab OAuth app works with both.

### From Decap CMS to Sveltia CMS

1. **Check for blockers.** You can't switch yet if you use Bitbucket, Azure DevOps, Git Gateway or the Turbo backend, custom backends or media libraries, or Remark plugins. Git Gateway sites on Netlify can move to the `github` or `gitlab` backend with Netlify as the OAuth provider; each editor then needs their own Git account.
2. **Swap the script tag** for `https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js`, or install `@sveltia/cms` and change `import CMS from 'decap-cms-app'` to `import CMS from '@sveltia/cms'`.
3. **Remove what Sveltia ignores:** `local_backend` and `decap-server` (use its browser-based local workflow), `locale` and `CMS.registerLocale`, `editor.notes` (existing notes won't load), `search`, `use_graphql`, and `media_processing` (use Sveltia's image optimisation instead). Rename deprecated camelCase options such as `valueField` to snake case, and replace `allow_multiple` with `multiple`.
4. **Check the behaviour differences** listed in Sveltia's guide: uploaded filenames are not slugified unless you set `slugify_filename`; empty optional fields are kept unless you set `omit_empty_optional_fields`; Markdown is saved with soft line breaks; `create` defaults to `true`; the logo shows in the header by default; and with i18n, required fields must be filled in every locale, not just the default one.
5. **Serve the admin page over HTTPS**, and update your Content Security Policy if you have one.

### From Sveltia CMS to Decap CMS

1. **Swap the script tag** for `https://cdn.jsdelivr.net/npm/decap-cms@^3.0.0/dist/decap-cms.js`, or install `decap-cms-app`. See [Install Decap CMS](/docs/install-decap-cms/).
2. **Use YAML.** Decap reads `config.yml`, or a JavaScript object passed to `CMS.init()` with [manual initialisation](/docs/manual-initialization/). Convert a TOML or JSON config.
3. **Replace Sveltia-only fields and options.** Decap shows "No control for widget" for Compute and KeyValue fields; use a list or object widget, or a [custom widget](/docs/custom-widgets/). `required` must be `true` or `false`, so an array of locales fails Decap's config validation. Sveltia-only i18n structures, `{{locale}}` in file collection paths and localized-slug options need to be mapped to one of Decap's three [i18n structures](/docs/i18n/).
4. **Set `create: true`** on every folder collection where editors should be able to add entries; in Decap it defaults to `false`.
5. **Choose a media library.** Decap reads `media_library` (one provider), not `media_libraries`. Keep files in the repository, use Cloudinary or Uploadcare, or use S3-compatible storage through [Decap Turbo](/turbo/) Pro.
6. **Set up local editing** with `local_backend: true` and `npx decap-server`, as in [Decap Proxy](/docs/decap-proxy/).
7. **Check Gitea.** If you used the editorial workflow on Gitea, note that Decap supports it with the `forgejo` backend but not the `gitea` one.
8. **Expect small diffs on the first save** of each entry, because the two CMSs write empty optional fields and Markdown line breaks differently. Review the first commits before merging them.

If your team wants hosted logins at the same time, you can point the backend at `turbo-github` or `turbo-gitlab` instead; see [Connecting a site to Turbo](/docs/turbo-connecting-a-site/).

## Which to choose

**Choose Decap CMS if:**

- Your repository is on Bitbucket or Azure DevOps, or your editors log in with Git Gateway and Netlify Identity.
- You rely on custom backends, custom media libraries, Remark plugins, custom interface locales or the Gatsby plugin.
- You want a stable, semantically versioned release line that won't change behaviour under you between minor versions.
- You need local editing in Firefox or Safari.
- You want hosted login, invitations and roles for editors who don't have Git accounts, without deploying anything yourself, today.
- A company and a group of contributors behind the project matters more to you than release pace.

**Choose Sveltia CMS if:**

- Load time matters most to you and you're on GitHub, GitLab or Gitea/Forgejo.
- You want free built-in S3, R2, Azure Blob or Bunny storage, stock photos or machine translation.
- Your site is multilingual and needs i18n structures or options Decap doesn't have, such as per-locale file paths in file collections.
- You want Compute or KeyValue fields, or open authoring on GitLab or Gitea/Forgejo.
- You're comfortable with a beta that changes quickly and is maintained by one person.

Because both read the same `config.yml`, you can try one without giving up the other.

## Frequently asked questions

### Is Sveltia CMS a drop-in replacement for Decap CMS?

For many sites, yes: Sveltia's guide says most can switch by changing the script tag. It isn't one if you use Bitbucket, Azure DevOps, Git Gateway or Decap Turbo, custom backends or media libraries, or Remark plugins, and a few defaults differ, such as `create` and whether empty optional fields are saved. Read the switching section above before you change production.

### Is Decap CMS still maintained?

Yes. In {{< period >}}, Decap CMS had {{< stat github="decaporg/decap-cms" metric="releases" >}} stable releases and {{< stat github="decaporg/decap-cms" metric="prs-merged" >}} merged pull requests from {{< stat github="decaporg/decap-cms" metric="contributors" >}} people. The latest release is {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, from {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}}. The full numbers and how we counted them are on [State of Decap](/state-of-decap/).

### Can I switch back from Sveltia CMS to Decap CMS?

Yes. Your content is plain files in your repository, so you only change the script tag and remove the Sveltia-only options from your config, such as Compute and KeyValue fields, `media_libraries` and Sveltia-only i18n structures. The steps are in [From Sveltia CMS to Decap CMS](#from-sveltia-cms-to-decap-cms).

### Does Sveltia CMS support Bitbucket, Azure DevOps or Git Gateway?

No. Its documentation lists all three as features not to be implemented, citing performance, and says Bitbucket and Azure DevOps could be added if their APIs allow fetching many entries at once. Decap CMS supports all three.

### Is Sveltia CMS stable? When is 1.0?

Sveltia CMS is in beta; its latest release is {{< stat github="sveltia/sveltia-cms" metric="latest-release" >}}. Its roadmap expects 1.0 in late 2026, after Sveltia CMS Additions ships, and says breaking changes may come in minor versions until then. Many sites already use it in production.

### Which one loads faster?

Sveltia. Its main script is 0.8 MB gzipped against Decap's 1.4 MB, and it fetches content from GitHub and GitLab with fewer API requests. Reducing Decap's bundle size is in progress.

### Do my Decap custom widgets and previews work in Sveltia?

Often, with changes. Sveltia supports `registerWidget` (as an alias of `registerFieldType`), `registerPreviewTemplate`, `registerEditorComponent` and `registerEventListener`, and renders components with its own copy of React 19. Its docs say it doesn't pass undocumented props, so components that rely on them need rework.

## Sources

Sveltia CMS docs on [migrating from Netlify/Decap CMS](https://sveltiacms.app/en/docs/migration/netlify-decap-cms), the [successor page](https://sveltiacms.app/en/docs/successor-to-netlify-cms), [roadmap](https://sveltiacms.app/en/docs/roadmap), [Additions](https://sveltiacms.app/en/docs/additions) and its [tracking issue](https://github.com/sveltia/sveltia-cms/issues/918), [releases and versioning](https://sveltiacms.app/en/docs/releases), [backends](https://sveltiacms.app/en/docs/backends), [media storage](https://sveltiacms.app/en/docs/media), [i18n](https://sveltiacms.app/en/docs/i18n), [local workflow](https://sveltiacms.app/en/docs/workflows/local), [editorial workflow](https://sveltiacms.app/en/docs/workflows/editorial), [JavaScript API](https://sveltiacms.app/en/docs/api), [translation services](https://sveltiacms.app/en/docs/integrations/translations) and [user interface](https://sveltiacms.app/en/docs/ui); the [Sveltia CMS repository](https://github.com/sveltia/sveltia-cms), its [releases](https://github.com/sveltia/sveltia-cms/releases) and [security advisories](https://github.com/sveltia/sveltia-cms/security/advisories); the [Decap CMS repository](https://github.com/decaporg/decap-cms), its [releases](https://github.com/decaporg/decap-cms/releases) and [security advisories](https://github.com/decaporg/decap-cms/security/advisories); the Decap docs on [i18n](/docs/i18n/), [editorial workflows](/docs/editorial-workflows/) and [configuration options](/docs/configuration-options/). Stars, releases, commits and issues from the GitHub API; downloads from the npm downloads API, as a weekly average over {{< period >}}; script sizes measured by gzipping `dist/sveltia-cms.js` (0.258.1) and `dist/decap-cms.js` (3.17.3) from jsDelivr.
