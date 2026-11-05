---
title: Decap CMS vs Keystatic
linkTitle: Decap CMS vs Keystatic
description: Keystatic lives inside an Astro, Next.js or Remix app with a TypeScript schema; Decap CMS is an admin page for any static site and Git host. How they differ.
group: git-based
weight: 14
date: 2026-11-04
---

We make Decap CMS, so read this with that in mind. Every fact below is sourced, and we say plainly where Keystatic is the better choice. If something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

## In short

- **Both keep content as files in your Git repository.** Keystatic is a library you install into an Astro, Next.js or Remix app, with the schema written in TypeScript. Decap CMS is a self-contained admin page you add to any site, configured in YAML.
- **Keystatic is the better fit for a JavaScript app that wants typed content**: one codebase, one dev server, and a Reader API that returns typed entries.
- **Decap CMS is the better fit for static site generators like Hugo, Jekyll and Eleventy**, and for sites on GitLab, Bitbucket, Gitea, Forgejo or Azure DevOps. Keystatic's admin needs a server-rendered route inside a JavaScript app, and it supports GitHub only.
- **Decap has an editorial workflow, a side-by-side preview and built-in i18n.** Keystatic has branches and a link to open a pull request on GitHub, but no review states, no built-in preview pane and no content localisation.
- **Keystatic Cloud** handles GitHub login and lets editors in without GitHub accounts: free for 3 users per team, Pro from $10/month.

## At a glance

| | Decap CMS | Keystatic |
|---|---|---|
| **What it is** | An open-source CMS app you add to your site as `/admin/` | An open-source CMS library that adds an admin route to your app |
| **Where content lives** | Files in your Git repository | Files on your local disk or in your GitHub repository |
| **What you host or run** | A static admin page; for GitHub logins, an OAuth proxy (or Netlify's, or [Decap Turbo](/turbo/)) | Your app, deployed where server routes run (Node.js, per the docs) |
| **Frameworks** | Any static site generator or framework | Astro, Next.js, Remix |
| **License** | MIT | MIT |
| **Price** | Free. Optional Decap Turbo: Free plan, Pro €19/month | Free. Optional Keystatic Cloud: free for 3 users per team, Pro from $10/month |
| **Git hosts** | GitHub, GitLab, Bitbucket, Gitea, Forgejo, Azure DevOps, Git Gateway | GitHub, or local files |
| **Editors' login** | The Git host's account (OAuth), Git Gateway, or Turbo invitations | A GitHub account with write access (GitHub mode), or a Keystatic Cloud account |
| **Roles** | Whatever the Git account may do; org and site roles with Turbo | Write access to the repository; in Cloud, every team member sees every project in the team |
| **Configuration** | `config.yml` (or a JS object) | `keystatic.config.ts`, a TypeScript `config()` call |
| **Typed content in code** | No; you read files with your framework | Yes, through the Reader API |
| **Preview** | Live side-by-side preview, custom templates | No preview pane; a recipe for Next.js draft mode previews |
| **Editorial workflow** | Draft, in review, ready, as branches and pull requests | Branches, plus a button that opens GitHub's pull request page |
| **Multilingual content** | Built in: per folder, per file or single file | None built in (requested since April 2024) |
| **Rich text** | Markdown, with custom editor components | Markdoc or MDX, with content components |
| **Media** | In the repository; Cloudinary, Uploadcare; S3-compatible through Turbo; in-browser resize and conversion on upload | In the repository; Cloud Images (Pro) with resizing through URL parameters |
| **Maintained by** | PM d.o.o. (about 30 people, six developers) and contributors | Thinkmill, an Australian software company |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} | `@keystatic/core` {{< stat npm="@keystatic/core" metric="latest" >}} |
| **GitHub stars** | {{< stat github="decaporg/decap-cms" metric="stars" >}} | {{< stat github="Thinkmill/keystatic" metric="stars" >}} |

## How they work

**Keystatic is part of your app.** You install `@keystatic/core` and an integration (`@keystatic/astro`, `@keystatic/next` or `@keystatic/remix`), write a `keystatic.config.ts`, and the integration adds two routes: the admin UI at `/keystatic` and its API at `/api/keystatic`. The schema is TypeScript:

```ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
```

The `storage` setting picks one of three modes. **Local** reads and writes files on your disk, for development. **GitHub** commits to a GitHub repository; the first sign-in walks you through creating your own GitHub App, whose secrets go in your environment, and editors need write access to the repository. **Cloud** uses Thinkmill's hosted Keystatic Cloud for sign-in, so you skip the GitHub App and editors don't need GitHub accounts. Your pages read content with the Reader API, which returns typed data from a local directory or from GitHub; in Astro you can use content collections instead.

The admin routes are server routes in every mode. The Astro integration registers both with prerendering turned off, and the docs say that "because Keystatic needs to run serverside code and use Node.js APIs, you will need to add an Astro adapter to deploy your project." Your public pages can stay static.

**Decap CMS is a separate, static admin page.** You add `/admin/index.html`, which loads the CMS script, and a `config.yml`. Editors open `yoursite.com/admin/`, log in with their Git host, and the CMS runs entirely in their browser, talking to the Git host's API. It doesn't touch your site's build or dependencies. On GitHub you need an OAuth proxy, Netlify's, or [Decap Turbo](/turbo/). For the difference between Git-based and other kinds of CMS, see [Git-based vs API-first vs traditional CMS](/compare/git-based-vs-headless-vs-traditional-cms/).

### Can a Hugo, Jekyll or Eleventy site use Keystatic?

Not as Keystatic is designed. Its only integrations are Astro, Next.js and Remix, and the admin is a pair of server routes inside one of those apps. A Hugo, Jekyll or Eleventy site has no such app. To use Keystatic you would create and deploy a separate Next.js or Astro project only to host the admin, on a host that runs server code, in GitHub or Cloud mode, with collection paths pointing at your site's content folders. A Keystatic contributor suggested deploying the admin separately in a [2023 discussion](https://github.com/Thinkmill/keystatic/discussions/826), but there is no official guide.

Formats are a second hurdle. Keystatic writes YAML and JSON data and Markdoc or MDX content (optionally with a `.md` extension) with YAML front matter. We found no TOML support in its docs or code, so Hugo sites with TOML front matter (`+++`) are out.

With Decap you put the `admin` folder in Hugo's `static/`, Jekyll's root or Eleventy's passthrough files, and that's it. Decap has guides for [Hugo](/docs/hugo/) and [Jekyll](/docs/jekyll/) and reads YAML, TOML and JSON front matter.

### Field types

| | Decap CMS widgets | Keystatic fields |
|---|---|---|
| Text | `string`, `text` | `text` (single or multi-line), `slug`, `url` |
| Numbers | `number` | `integer`, `number` |
| Choices | `boolean`, `select` | `checkbox`, `select`, `multiselect` |
| Dates | `datetime` | `date`, `datetime` |
| Files | `image`, `file` | `image`, `file`, `cloudImage` |
| Structure | `object`, `list` (with variable types) | `object`, `array`, `blocks`, `conditional` |
| References | `relation` | `relationship`, `pathReference` |
| Rich text | `markdown`, `richtext` | `markdoc`, `mdx` |
| Other | `code`, `color`, `hidden`, `map`, `uuid` | `child`, `ignored`, `empty` variants |
| Your own | Custom widgets | No documented API for custom fields |

Keystatic's `image` field saves into the repository; by default it creates a folder named after the entry and stores the image there, and `directory` and `publicPath` options change that. The `cloudImage` field stores a reference to an image in Keystatic Cloud's image library.

## Where Keystatic is ahead

- **A TypeScript schema and typed content.** The config is code, with autocompletion and type checking, and the Reader API returns entries typed from that schema. Decap's `config.yml` is YAML (or a JS object), and you read content with your framework's own tools, untyped.
- **One project, one dev server.** The admin runs on your app's dev server at `/keystatic`, and local mode writes straight to your files. Decap's local editing needs a second process, `decap-server`.
- **Editors without GitHub accounts, free for three.** Keystatic Cloud's free plan has 3 users per team, with unlimited teams and projects. Decap's free equivalent is Git Gateway with Netlify Identity; [Turbo](/turbo/)'s Free plan has one seat.
- **Image delivery.** Cloud Images (Pro) stores images outside your repository and serves them resized, cropped or converted through URL parameters. Decap can resize and convert images in the browser before saving them (since 3.16), but relies on Cloudinary or Uploadcare for transformed delivery.
- **Markdoc and MDX.** Five kinds of content components (blocks, wrappers, inline elements, marks and repeating blocks) map to your own components. Decap edits Markdown, with custom editor components.
- **Conditional fields.** A `conditional` field shows different fields depending on a select or checkbox value. Decap has no conditional field type.
- **Real-time co-editing**, marked experimental, on Cloud Pro. Decap has none.
- **Branch handling in the UI.** In GitHub mode editors can switch and create branches, scoped with `branchPrefix`, and when the default branch is protected, Keystatic prompts them to save to a new branch (rulesets support since August 2026).

## Where Decap CMS is ahead, or different

- **Works with any site, not only JavaScript apps.** Hugo, Jekyll, Eleventy, Docusaurus, VitePress and plain HTML sites can use Decap; see [above](#can-a-hugo-jekyll-or-eleventy-site-use-keystatic).
- **No server, in production or anywhere.** Decap's admin is static, so your whole site can stay a static export. Keystatic needs a host that runs its server routes.
- **More Git hosts.** GitHub, GitLab, Bitbucket, Gitea, Forgejo, Azure DevOps and Git Gateway, against GitHub only.
- **Editorial workflow.** Decap's draft, in review and ready states are branches and pull requests, managed in the CMS, on GitHub, GitLab, Bitbucket, Azure, Forgejo, Git Gateway and Turbo. Keystatic's "Create pull request" button opens GitHub's new pull request page, and review happens there. Decap's [open authoring](/docs/open-authoring/), for contributors without write access, is something Keystatic users [have asked for](https://github.com/Thinkmill/keystatic/issues/1433).
- **Side-by-side preview.** Decap shows the entry as you type, with your own React preview templates. Keystatic has a `previewURL` option and a recipe for Next.js draft mode, which you build yourself.
- **Multilingual content.** Decap has [i18n](/docs/i18n/) built in. Keystatic's `locale` option only sets the admin UI's language; content localisation was [requested in April 2024](https://github.com/Thinkmill/keystatic/issues/1080) and a community pull request has been open since July 2026.
- **Stable versioning.** Decap has been on 3.x with semantic versioning since 2023. `@keystatic/core` is still on 0.x versions (latest: {{< stat npm="@keystatic/core" metric="latest" >}}).
- **Media libraries and roles.** Cloudinary and Uploadcare are built in, S3-compatible storage is available through Turbo (Pro), and Turbo adds roles per site. Keystatic Cloud gives every team member access to every project in the team.

## Cost

Assumptions: GitHub as the Git host; a host that runs server functions for Keystatic (free tiers exist; we didn't price them). Keystatic Cloud is priced in US dollars per month, Decap Turbo in euros per month with tax included.

**A solo developer or small business with 1–2 editors.**

- **Keystatic, GitHub mode:** $0. Each editor needs a GitHub account with write access.
- **Keystatic Cloud, free plan:** $0, up to 3 users per team, without GitHub accounts. Cloud Images needs Pro.
- **Decap CMS, no Turbo:** €0. Editors with GitHub accounts log in through Netlify's OAuth or a proxy you deploy (see [external OAuth clients](/docs/external-oauth-clients/)); on Netlify, Git Gateway works without Git accounts.
- **Decap CMS with Turbo:** Free plan €0 for one editor. For two, Pro is €19/month (one site, five seats, 14-day trial without a card).

**A team of 10 editors.**

- **Keystatic, GitHub mode:** $0, if all ten have GitHub accounts with write access.
- **Keystatic Cloud Pro:** the docs say Pro "starts at $10/month" and "adding beyond 3 users to a team costs $5/month per user". We read that as $10 + 7 × $5 = **$45/month** for ten users; Keystatic doesn't publish a worked example, so check the team's billing tab.
- **Decap CMS, no Turbo:** €0, if each editor has a Git account with write access, or uses Git Gateway.
- **Decap CMS with Turbo Pro:** €19 for five seats plus five extra seats at €6 = **€49/month**, including roles per site, a faster content proxy, deploy status and an activity log.

For a ten-person team that needs logins without GitHub accounts, Keystatic Cloud and Decap Turbo cost about the same.

## Security and maintenance

**Keystatic** is code in your app. Its packages and their dependencies are part of your build and your lockfile, and you update them with the rest of your app. In GitHub mode the GitHub App's client secret and `KEYSTATIC_SECRET` live in your host's environment, and the admin routes are live on your production site; Keystatic has recipes for disabling them in production when you only edit locally. In Cloud mode, Thinkmill's service handles sign-in and GitHub access. We found no security policy file in the repository and no advisories for `@keystatic/core` in GitHub's advisory database. That can simply mean nothing has been reported.

**Decap CMS** runs nothing on a server: the published site stays static and the CMS is a script in the editor's browser. The Git host is the gatekeeper, and every change is a commit you can review and revert. On GitHub you run, or borrow, a small OAuth proxy. You update Decap by bumping a version or a CDN URL. Decap publishes each fixed vulnerability as a security advisory, under its [security policy](https://github.com/decaporg/decap-cms/security/policy); see [State of Decap](/state-of-decap/#security).

### Activity

From the GitHub API, the npm registry and the npm downloads API; releases, commits, closed issues and downloads are for {{< period >}}.

| | Decap CMS | Keystatic |
|---|---:|---:|
| GitHub stars | {{< stat github="decaporg/decap-cms" metric="stars" >}} | {{< stat github="Thinkmill/keystatic" metric="stars" >}} |
| Stable releases | {{< stat github="decaporg/decap-cms" metric="releases" >}} | {{< stat npm="@keystatic/core" metric="releases" >}} (`@keystatic/core`) |
| Commits to the default branch | {{< stat github="decaporg/decap-cms" metric="commits" >}} | {{< stat github="Thinkmill/keystatic" metric="commits" >}} |
| Open issues | {{< stat github="decaporg/decap-cms" metric="open-issues" >}} | {{< stat github="Thinkmill/keystatic" metric="open-issues" >}} |
| Issues closed | {{< stat github="decaporg/decap-cms" metric="issues-closed" >}} | {{< stat github="Thinkmill/keystatic" metric="issues-closed" >}} |
| npm downloads a week, average | {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} (`decap-cms-app`) | {{< stat npm="@keystatic/core" metric="weekly-downloads" >}} (`@keystatic/core`) |

**Read the download numbers carefully.** Keystatic is a dependency of the site itself, so every build that installs packages without a cache, on a CI server or a hosting platform, counts as a download. Many Decap sites load Decap from a CDN with a script tag, which npm never sees. The numbers measure installs, not sites. For the integrations, the weekly averages were {{< stat npm="@keystatic/next" metric="weekly-downloads" >}} for `@keystatic/next`, {{< stat npm="@keystatic/astro" metric="weekly-downloads" >}} for `@keystatic/astro` and {{< stat npm="@keystatic/remix" metric="weekly-downloads" >}} for `@keystatic/remix`.

Most commits to Keystatic's `main` are by one Thinkmill developer and the release bot. Keystatic is built as part of Thinkmill Labs, the company's research and development work.

## Moving from Keystatic to Decap CMS

Your content is already in the repository, so most of the work is configuration.

1. **Add Decap to your site.** Create `admin/index.html` and `admin/config.yml` in your public folder (`public/` in Astro and Next.js). See [Install Decap CMS](/docs/install-decap-cms/).
2. **Choose a backend.** For GitHub, set up OAuth (Netlify's, your own proxy, or [Turbo](/turbo/)); see [Choosing a backend](/docs/choosing-a-backend/).
3. **Translate the schema.** Keystatic `collections` become Decap folder collections and `singletons` become file collections. Use the field table above: `relationship` becomes `relation`, `array` becomes `list`, `blocks` becomes `list` with `types`, `checkbox` becomes `boolean`. The `slugField` becomes Decap's `identifier_field` and `slug`.
4. **Match the file layout.** If you used `format: { contentField: ... }`, each entry is one file with YAML front matter, which Decap reads with `format: yaml-frontmatter`; set `extension: mdoc` (or `mdx`) if you kept those extensions. If entries are a data file plus a separate content file, Decap can't treat them as one entry; merge them first. For Keystatic's folder per entry (`posts/my-post/index.yaml`), use Decap's collection `path: '{{slug}}/index'`, and `media_folder: ''` for images stored next to the entry.
5. **Check rich text.** Plain Markdown carries over, but Decap's Markdown widget doesn't know Markdoc tags (`{% ... %}`) or MDX components. Test entries that use them before switching; add [custom editor components](/docs/custom-widgets/) or edit those fields as `text`.
6. **Replace the Reader API.** Read content with your framework instead, for example Astro's content collections, which Keystatic's own Astro guide already uses.
7. **Remove Keystatic** from the app and its routes, and delete the GitHub App if you created one. Cloud Images URLs in your content will keep pointing at Keystatic Cloud until you move those images.

We know of no automatic converter in either direction.

**Going the other way** suits an Astro, Next.js or Remix site on GitHub: install Keystatic, write a `keystatic.config.ts` matching your `config.yml`, and deploy with an adapter that runs server code. You would give up the editorial workflow, the preview pane, i18n, other Git hosts and any custom Decap widgets, and TOML files would need converting.

## Which to choose

**Choose Decap CMS if:**

- your site uses Hugo, Jekyll, Eleventy or another generator that isn't Astro, Next.js or Remix;
- you want the site, admin included, to stay fully static, with no server routes;
- your repository is on GitLab, Bitbucket, Gitea, Forgejo or Azure DevOps;
- content goes through review before publishing, or outside contributors propose changes;
- editors need a side-by-side preview or the site is multilingual;
- you want media libraries such as Cloudinary, or roles per site.

**Choose Keystatic if:**

- your site is an Astro, Next.js or Remix app on GitHub, deployed where server routes run;
- you want the content schema in TypeScript and typed content in your components;
- you write rich content in Markdoc or MDX with your own components;
- up to three editors need access without GitHub accounts, for free, or you want image delivery with on-the-fly resizing;
- editors commit directly or work on branches, and review happens on GitHub.

## Frequently asked questions

### Is Keystatic free?

Yes. Keystatic is MIT-licensed, and local and GitHub modes cost nothing beyond your hosting. Keystatic Cloud is free for up to 3 users per team; Pro starts at $10/month and adds $5/month per user beyond three, plus Cloud Images and experimental real-time co-editing.

### Can I use Keystatic with Hugo or Jekyll?

Not directly. Keystatic's admin runs as server routes inside an Astro, Next.js or Remix app, so a Hugo or Jekyll site would need a separate JavaScript app, deployed on a server, just to host it. Decap CMS needs only a static `admin` folder in your site.

### Does Keystatic need a server?

The admin does. Its routes are server-rendered, and the docs say the host must run Node.js for Keystatic's API routes. Your public pages can still be static. Decap CMS needs no server; on GitHub it needs an OAuth proxy for logins, which Netlify or Decap Turbo can provide.

### Is Decap CMS a Keystatic alternative for Astro or Next.js?

Yes. Decap works with Astro and Next.js as a static admin page in your public folder, and your pages read content with the framework's own tools. You lose the TypeScript schema and Reader API, and gain other Git hosts, an editorial workflow, previews and i18n.

### Does Keystatic have an editorial workflow?

Not as review states. In GitHub mode editors can create and switch branches and open a pull request on GitHub from the admin, and Keystatic prompts for a new branch when the default branch is protected. Reviewing and merging happen on GitHub. Decap CMS manages drafts, review and publishing in the CMS.

### Can I migrate from Keystatic to Decap CMS?

Yes. The files stay in your repository; you add Decap's admin page and write a `config.yml` matching your Keystatic schema. Markdoc and MDX components need extra work. The steps are [above](#moving-from-keystatic-to-decap-cms).

## Sources

[Keystatic](https://keystatic.com/) and its docs on [Keystatic Cloud](https://keystatic.com/docs/cloud) (pricing and plans), [GitHub mode](https://keystatic.com/docs/github-mode), [local mode](https://keystatic.com/docs/local-mode), [configuration](https://keystatic.com/docs/configuration), [the Reader API](https://keystatic.com/docs/reader-api), [format options](https://keystatic.com/docs/format-options), [the Astro integration](https://keystatic.com/docs/installation-astro), [the image field](https://keystatic.com/docs/fields/image) and [real-time previews](https://keystatic.com/docs/recipes/real-time-previews), read from the [docs source](https://github.com/Thinkmill/keystatic/tree/main/docs/src/content/pages); the [Keystatic repository](https://github.com/Thinkmill/keystatic), including the [Astro integration source](https://github.com/Thinkmill/keystatic/blob/main/packages/astro/src/index.ts), pull request [#1601](https://github.com/Thinkmill/keystatic/pull/1601), issues [#1080](https://github.com/Thinkmill/keystatic/issues/1080) and [#1433](https://github.com/Thinkmill/keystatic/issues/1433), pull request [#1553](https://github.com/Thinkmill/keystatic/pull/1553) and discussion [#826](https://github.com/Thinkmill/keystatic/discussions/826); npm data for [`@keystatic/core`](https://www.npmjs.com/package/@keystatic/core). Repository numbers come from the GitHub API, release and download numbers from the npm registry and downloads API, fetched each time the site is built. Decap facts from the [Decap CMS docs](/docs/intro/), [Decap Turbo](/turbo/) and [State of Decap](/state-of-decap/).
