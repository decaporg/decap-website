---
title: Decap CMS vs Nuxt Studio
linkTitle: Decap CMS vs Nuxt Studio
description: Nuxt Studio is a free visual editor for Nuxt Content sites only. Decap CMS works with any framework and more Git hosts, and has an editorial workflow.
group: git-based
weight: 18
date: 2026-11-05
---

We make Decap CMS, so read this with that in mind. Every fact about Nuxt Studio below comes from its own website, docs, release posts, GitHub repository or npm, with links at the end, and we say plainly where Nuxt Studio is the better choice. If something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

## In short

- **Both are free, MIT-licensed and commit Markdown, YAML and JSON files to your Git repository.** Nuxt Studio is a Nuxt module that only edits Nuxt Content sites, from inside the live site. Decap CMS is a separate admin page that works with any static site generator or framework.
- **If your site is built with Nuxt Content, Nuxt Studio is the natural choice, and we'd tell you to try it first.** It builds its forms from the collection schemas you already have, shows edits on your real pages with your own Vue components, and edits MDC components visually.
- **Decap CMS is for everything else:** Hugo, Astro, Eleventy, Jekyll, Next.js and other sites, Nuxt sites that don't use Nuxt Content or must stay fully static, and repositories on Bitbucket, Gitea, Forgejo or Azure DevOps.
- **Decap has an editorial workflow; Nuxt Studio doesn't yet.** Decap saves drafts as branches and pull requests with review states that the whole team sees. Studio keeps drafts in each editor's own browser and commits straight to one branch.
- **Nuxt Studio needs a host that runs server code** for its login routes, even if your pages are prerendered. Decap needs no server.

## At a glance

| | Decap CMS | Nuxt Studio |
|---|---|---|
| **What it is** | Git-based CMS: a single-page app added to your site as `/admin/` | Git-based CMS as a Nuxt module, opened over your live site at `/_studio` |
| **Works with** | Any static site generator or framework, Nuxt included | Nuxt Content sites only |
| **Where content lives** | Files in your Git repository | Files in your Git repository (the `content/` folder) |
| **What you host or run** | Nothing beyond your static site (an OAuth proxy on GitHub, unless you use Netlify or Decap Turbo) | Your Nuxt app on a platform that supports server-side rendering, plus an OAuth app for logins |
| **Configuration** | `config.yml` (or a JavaScript object) | `studio` options in `nuxt.config.ts`; forms come from your Nuxt Content collection schemas |
| **License** | MIT | MIT |
| **Price** | Free. Optional [Decap Turbo](/turbo/): Free, or Pro €19/month | Free. Optional AI features use your own Vercel AI Gateway key |
| **Git hosts** | GitHub, GitLab, Bitbucket, Gitea, Forgejo, Azure DevOps, Git Gateway | GitHub (including Enterprise Server), GitLab (including self-hosted) |
| **Editors' login** | Git host account (OAuth), Netlify Identity, or Turbo | GitHub or GitLab OAuth, Google OAuth with a shared access token, an SSO server, or your own auth |
| **Roles** | Git permissions; CMS roles with Turbo | An optional list of allowed emails (required for Google); no CMS roles |
| **Editing** | Forms with a rich-text Markdown editor | TipTap visual editor with MDC components, schema forms, and a Monaco code editor |
| **Preview** | Live side-by-side preview with React templates you write | Your real pages, rendered with your drafts, on the live site |
| **Editorial workflow** | Draft, in review, ready, as branches and pull requests | None; commits go to one configured branch |
| **Multilingual content** | Built in: folder, file or single file per locale | Through Nuxt Content's per-locale collections; no translation features in Studio |
| **Media** | Repository; Cloudinary and Uploadcare built in; S3-compatible via Turbo Pro | Repository (`public/`), or S3-compatible storage, Cloudflare R2 or Vercel Blob through NuxtHub |
| **Maintained by** | PM d.o.o. and contributors | The Nuxt team (NuxtLabs, part of Vercel since July 2025) and contributors |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} | {{< stat npm="nuxt-studio" metric="latest" >}}, {{< stat github="nuxt-content/nuxt-studio" metric="latest-release-date" >}} |
| **GitHub stars / npm a week** | {{< stat github="decaporg/decap-cms" metric="stars" >}} / {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} (`decap-cms-app`) | {{< stat github="nuxt-content/nuxt-studio" metric="stars" >}} / {{< stat npm="nuxt-studio" metric="weekly-downloads" >}} (`nuxt-studio`) |

npm downloads are a weekly average over {{< period >}}. Nuxt Studio is always installed from npm; many Decap sites load Decap from a CDN with a script tag, which npm doesn't count.

## How they work

**Nuxt Studio runs inside your Nuxt app.** You add it with `npx nuxt module add nuxt-studio`. In development, a floating button opens the editor and saves straight to your local files, with no Git or login setup. In production, editors open `/_studio` on the live site, log in, and edit the site they are looking at. Studio keeps each editor's changes as drafts in the browser (IndexedDB), merges them into the SQLite database Nuxt Content already loads in the browser, and re-renders the page, so the preview is your real site. When the editor publishes, Studio commits all their drafts in one commit through the GitHub or GitLab API, your host rebuilds the site, and Studio waits until the new deployment is live. It checks drafts against the repository to warn about conflicts.

Studio's docs say it "requires a server-side route for authentication": the OAuth callbacks run on your site at `/__nuxt_studio/auth/...`. Static generation still works with Nuxt's hybrid rendering, so you can prerender every page, but the site "must be deployed on a platform that supports server-side rendering (SSR)". A site built with `nuxt generate` for plain static hosting can still use Studio's development mode on a developer's machine, but not in production; a [request for an official dev-only setup](https://github.com/nuxt-content/nuxt-studio/issues/226) for static sites is open.

**Decap CMS is a separate, static admin page.** You add `/admin/index.html`, which loads the CMS script, and a `config.yml` that describes your collections and fields. Editors open `yoursite.com/admin/`, log in with their Git host, and the CMS runs entirely in their browser, reading and writing files through the Git host's API. It doesn't touch your site's build, and there is no Decap server or database. With the [editorial workflow](/docs/editorial-workflows/), each draft is a branch and a pull or merge request.

### From a hosted platform to a free module

Nuxt Studio started as a hosted, paid platform at nuxt.studio, run by NuxtLabs. On 8 July 2025 Vercel announced that NuxtLabs was joining Vercel, and that Nuxt Studio would become free and open source in the following months. The new Studio, rebuilt from scratch as a self-hosted Nuxt module, shipped its first alpha on 4 November 2025 (code editor only), betas with the visual editor, forms and Google login in December 2025, and 1.0.0 on 5 January 2026. The 1.0 post, "Nuxt Studio is Now Free and Open Source", announced that the hosted platform was being sunset and its subscriptions cancelled; nuxt.studio is now the module's documentation. Older articles describing Studio as a paid hosted service are about that platform.

### Decap CMS on a Nuxt site

Decap works on Nuxt like on any other framework. Put `admin/index.html` and `admin/config.yml` in Nuxt's `public/` folder, point folder collections at your `content/` folders with `format: frontmatter` (or `yaml` and `json` for data files), and set `media_folder: public/images` with `public_folder: /images`. Nuxt Content reads those files as usual, and your site can be fully static with `nuxt generate`, on any host. See the [Nuxt guide](/docs/nuxt/) and the Nuxt 3 starter on [Start with a template](/docs/start-with-a-template/).

What you give up on Nuxt compared with Studio: Decap's preview templates are React components, so they don't render your Vue components, and you describe your fields a second time in `config.yml` instead of reusing your Nuxt Content schemas.

## Where Nuxt Studio is ahead

- **Preview on the real site.** Editors see their drafts on your production pages, with your layout, styles and Vue components, as they type. Decap's preview pane uses React templates you write; with the editorial workflow it can also link to your host's [deploy preview](/docs/deploy-preview-links/) once built.
- **Visual editing of MDC components.** The TipTap editor, "Notion-like" in Studio's docs, inserts your Vue components with `/`, edits their slots in place and their props in a form, and has drag and drop, tables, callouts, images and video. Decap's Markdown editors don't understand MDC syntax; you would register [custom editor components](/docs/custom-widgets/#registereditorcomponent) for each component.
- **One schema.** Forms for front matter, YAML and JSON are generated from your Nuxt Content collection schemas (Zod), with `.editor()` hints for labels, help text, media and icon pickers, and hidden fields. With Decap you maintain `config.yml` alongside `content.config.ts`.
- **Editors without Git accounts, for free.** With Google OAuth, anyone on an email allow-list can edit, and commits go through an access token you provide. A separate [SSO server](https://github.com/nuxt-content/nuxt-studio-sso) shares logins across many Studio sites. Decap's free equivalent is Git Gateway with Netlify Identity; [Turbo](/turbo/)'s Free plan has one seat.
- **Local editing with no setup.** In development, Studio edits your files directly; Decap needs `npx decap-server` running.
- **A code editor and an AI assistant.** Editors can switch any file to a Monaco code editor. With a Vercel AI Gateway key, Studio adds autocompletion (Claude Haiku 4.5, per its docs) and fix, improve, simplify and translate actions (Claude Sonnet 4.5), plus AI-written commit messages since 1.8.0. Decap has no AI assistant.
- **External media storage without a paid plan.** Through NuxtHub's blob storage, Studio can upload to S3 or S3-compatible services, Cloudflare R2 or Vercel Blob instead of the repository. In Decap, S3-compatible storage comes with Turbo Pro or a beta package.

## Where Decap CMS is ahead, or different

- **Any site, not only Nuxt Content.** Studio's setup page says it "allows content edition of Nuxt Content websites only". Decap works with any generator or framework, and with Nuxt sites that don't use Nuxt Content.
- **No server.** Decap's admin is static, so your whole Nuxt site can be a `nuxt generate` export on any static host. Studio needs SSR hosting for its auth routes.
- **More Git hosts.** Decap works with GitHub, GitLab, Bitbucket, Gitea, Forgejo, Azure DevOps and Git Gateway, including GitHub Enterprise and self-hosted GitLab and Gitea. Studio supports GitHub and GitLab; [Forgejo and Gitea support](https://github.com/nuxt-content/nuxt-studio/issues/594) was requested in October 2026.
- **An editorial workflow.** Decap's draft, in review and ready states are branches and pull or merge requests on GitHub, GitLab, Bitbucket, Azure, Forgejo, Git Gateway and Turbo. Studio commits to the branch you configure; its docs suggest a staging branch with its own deployment, and opening the pull request on the Git host yourself. Creating pull requests from Studio is on its roadmap and [requested since March 2026](https://github.com/nuxt-content/nuxt-studio/issues/366).
- **Shared drafts.** A Decap draft lives in the repository, so another editor can pick it up on another device. Studio's docs say drafts "are stored only in your local browser. They are not shared between editors or devices."
- **Open authoring.** Decap lets contributors without write access propose changes through forks on GitHub ([open authoring](/docs/open-authoring/)). For Studio this was [requested in August 2026](https://github.com/nuxt-content/nuxt-studio/issues/542).
- **Multilingual content as configuration.** Decap's [i18n](/docs/i18n/) puts locales in folders, files or a single file per entry, set once in the config. Studio has no translation features beyond the AI translate action: you define a Nuxt Content collection per locale and edit each file separately. An [open issue](https://github.com/nuxt-content/nuxt-studio/issues/245) reports that Studio's preview breaks for the default locale with `@nuxtjs/i18n`'s `prefix_except_default` strategy.
- **More field types and your own.** Decap has relation, map, color, code, uuid, hidden and other [widgets](/docs/widgets/), plus [custom widgets](/docs/custom-widgets/). Studio maps Zod strings, numbers, booleans, dates, enums, arrays and objects to inputs, with media, icon and textarea pickers; we found no reference field and no documented API for your own inputs.
- **Roles and hosted logins.** Without Turbo, Decap uses the Git host's permissions. [Decap Turbo](/turbo/) adds invitations, org and site roles, and login without an OAuth app. Studio's access control is an email allow-list per provider: everyone on it can edit everything.

## Cost

Assumptions: one website, hosting not included (Studio needs a host with server functions; a Decap site can be purely static). Nuxt Studio has no paid plan; optional AI features bill through Vercel AI Gateway after $5 of free credits. Decap Turbo is billed monthly per organization, in euros, tax included.

**A solo developer or small business site with 1–2 editors.**

- **Nuxt Studio:** $0, with a GitHub or GitLab OAuth app, or Google logins plus an access token. On Vercel's free Hobby plan, an [open issue](https://github.com/nuxt-content/nuxt-studio/issues/580) reports that deployments are blocked because Studio adds `Co-authored-by: Nuxt Studio` to every GitHub commit, with no option to turn it off.
- **Decap CMS:** €0. On GitHub you need an OAuth proxy unless you host on Netlify or use Turbo; GitLab logins work without one.
- **Decap CMS with Turbo:** €0 on Free if one person edits (1 seat). With a developer and two editors (3 seats), Pro at €19/month, or €228 a year.

**A team of 10 editors.**

- **Nuxt Studio:** $0 for any number of editors. Everyone on the allow-list can edit everything and publishes straight to the branch.
- **Decap CMS:** €0, editorial workflow included. Each editor needs a Git host account with access to the repository.
- **Decap CMS with Turbo Pro:** 5 seats included plus 5 extra seats at €6: €19 + €30 = **€49/month**, or €588 a year, with roles per site, invitations, deploy status and an activity log.

For a Nuxt Content site, neither tool costs money; the choice turns on hosting, Git host and review.

## Security and maintenance

**Nuxt Studio** is code in your app, updated with the rest of your Nuxt project. Its login routes are live on your production site, and its secrets (OAuth client secrets, and for Google or custom auth an access token with write access to the repository) live in your host's environment. With a shared token, every commit is authored by the token's owner, with the editor as co-author. GitHub logins ask for the `repo` scope by default, as Decap's GitHub backend does; `private: false` narrows it to public repositories. With custom authentication, Studio's docs say you are "fully responsible for securing your authentication flow". We found no security policy file in the Studio repository.

**Decap CMS** has no server or database of its own: the published site stays static, the CMS is a script in the editor's browser, and the Git host decides who may change what. Every change is a commit you can review and revert. On GitHub you run, or borrow, a small OAuth proxy. Fixed vulnerabilities are published as GitHub security advisories under Decap's [security policy](https://github.com/decaporg/decap-cms/security/policy); see [State of Decap](/state-of-decap/).

### Activity

From the GitHub API, the npm registry and the npm downloads API; releases, commits, pull requests, closed issues and downloads are for {{< period >}}.

| | Decap CMS | Nuxt Studio |
|---|---:|---:|
| GitHub stars | {{< stat github="decaporg/decap-cms" metric="stars" >}} | {{< stat github="nuxt-content/nuxt-studio" metric="stars" >}} |
| Stable releases | {{< stat github="decaporg/decap-cms" metric="releases" >}} | {{< stat npm="nuxt-studio" metric="releases" >}} |
| Commits to the default branch | {{< stat github="decaporg/decap-cms" metric="commits" >}} | {{< stat github="nuxt-content/nuxt-studio" metric="commits" >}} |
| Pull requests merged | {{< stat github="decaporg/decap-cms" metric="prs-merged" >}} | {{< stat github="nuxt-content/nuxt-studio" metric="prs-merged" >}} |
| Issues closed | {{< stat github="decaporg/decap-cms" metric="issues-closed" >}} | {{< stat github="nuxt-content/nuxt-studio" metric="issues-closed" >}} |
| Open issues | {{< stat github="decaporg/decap-cms" metric="open-issues" >}} | {{< stat github="nuxt-content/nuxt-studio" metric="open-issues" >}} |
| npm downloads a week, average | {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} (`decap-cms-app`) | {{< stat npm="nuxt-studio" metric="weekly-downloads" >}} (`nuxt-studio`) |

Studio moved fast in January and February 2026, then slowed: no release came between 1.7.0 on 28 April and 1.8.0 on 16 October 2026. Most commits to its `main` branch are by Baptiste Leproux, one of the authors of the release posts. For context, `@nuxt/content` itself had {{< stat npm="@nuxt/content" metric="weekly-downloads" >}} npm downloads a week on average in the same period.

## Moving from Nuxt Studio to Decap CMS

Your content is already in the repository, so there is nothing to export.

1. **Add Decap to the site.** Create `public/admin/index.html` and `public/admin/config.yml`; see [Install Decap CMS](/docs/install-decap-cms/).
2. **Choose a backend.** GitHub or GitLab, as before. On GitHub, set up OAuth through Netlify, your own proxy ([external OAuth clients](/docs/external-oauth-clients/)) or [Turbo](/turbo/); see [Choosing a backend](/docs/choosing-a-backend/).
3. **Translate the schemas.** Each Nuxt Content collection becomes a Decap [folder collection](/docs/collection-folder/) whose `folder` matches the collection's `source`. Zod types map to widgets: `z.string()` to `string` (or `text` for a textarea input), `z.number()` to `number`, `z.boolean()` to `boolean`, `z.enum()` to `select`, dates to `datetime`, `z.object()` to `object`, arrays to `list`, and fields with `input: 'media'` to `image`. The Markdown body becomes a `body` field with the `richtext` or `markdown` widget.
4. **Handle MDC components.** Decap's Markdown editors don't know MDC block syntax (`::component`). Test files that use components before switching. Register [custom editor components](/docs/custom-widgets/#registereditorcomponent) for the ones editors need, or allow only the `raw` mode so the Markdown is edited as plain text.
5. **Point media at `public/`.** Set `media_folder: public` (or a subfolder) and the matching `public_folder`. Files you uploaded to external storage through NuxtHub stay there, referenced by URL.
6. **Multilingual sites.** If your collections are split per locale, Decap's `multiple_folders` i18n structure (`<folder>/<locale>/<slug>.md`) can replace them, with the Nuxt Content collections' `source` paths adjusted to match.
7. **Remove `nuxt-studio`** from `modules`, and delete its OAuth apps and tokens. If nothing else needs a server, you can now build the site with `nuxt generate` and host it statically.

What doesn't carry over: the on-page preview, visual MDC editing, the AI features, and CSV files, which Nuxt Content reads but Decap doesn't edit. We know of no automatic converter in either direction.

## Moving from Decap CMS to Nuxt Studio

This only makes sense if your site is, or will become, a Nuxt site using Nuxt Content; for any other framework you would rebuild the site first. On a Nuxt Content site, run `npx nuxt module add nuxt-studio`, make sure every collection in `content.config.ts` has a Zod `schema` (Studio's forms come from it) with `.editor()` hints where Decap had labels, hints or media fields, create a GitHub or GitLab OAuth app with the callback `https://yourdomain.com/__nuxt_studio/auth/github` (or `gitlab`), and deploy on a host that runs server-side code. Then remove `public/admin/`. You would give up the editorial workflow and open authoring, shared drafts, Decap's i18n configuration, relation and custom widgets, the other Git hosts and Turbo's roles.

## Which to choose

**Choose Decap CMS if:**

- your site uses Hugo, Astro, Eleventy, Jekyll, Next.js or any framework other than Nuxt with Nuxt Content;
- your Nuxt site must stay fully static, with `nuxt generate` on static hosting such as GitHub Pages;
- your repository is on Bitbucket, Gitea, Forgejo or Azure DevOps, or you use Git Gateway;
- content goes through draft and review before publishing, drafts need to be shared between editors, or outside contributors propose changes through forks;
- the site is multilingual and you want translations managed in the CMS;
- you need relation fields or custom widgets, or roles per site through [Decap Turbo](/turbo/).

**Choose Nuxt Studio if:**

- your site is built with Nuxt and Nuxt Content, and is (or can be) deployed on a host that runs server-side code;
- editors want to see changes on the real page, and write with MDC components;
- you want the CMS forms to come straight from your collection schemas;
- your repository is on GitHub or GitLab, and editors publish directly to a branch, with any review happening on the Git host;
- editors without Git accounts should log in with Google, at no cost.

For other Git-based options, see [Decap CMS vs Sveltia CMS and other Git-based CMSs](/compare/git-based-cms/), [Decap CMS vs TinaCMS](/compare/decap-cms-vs-tinacms/) and [Decap CMS vs Keystatic](/compare/decap-cms-vs-keystatic/).

## Frequently asked questions

### Is Nuxt Studio free?

Yes. Since 1.0.0 on 5 January 2026, Nuxt Studio is a free, MIT-licensed Nuxt module you host yourself; the old paid, hosted platform has been discontinued. You pay only for hosting and, optionally, AI usage through Vercel AI Gateway.

### Can I use Nuxt Studio without Nuxt Content?

No. Studio edits Nuxt Content websites only, and relies on Nuxt Content's collections and in-browser database. For any other site, Nuxt or not, Decap CMS works with plain Markdown, YAML and JSON files.

### Does Nuxt Studio work with a static Nuxt site?

Partly. You can prerender every page, but Studio's login needs a server route, so the site must be deployed on a platform that supports server-side rendering. A site exported with `nuxt generate` to purely static hosting can't use Studio in production; Decap CMS can.

### Can I use Decap CMS with Nuxt?

Yes. Put Decap's `admin` folder in Nuxt's `public/` folder and point its collections at your content folders; Nuxt Content reads the files Decap writes. See the [Nuxt guide](/docs/nuxt/). You don't get Studio's on-page preview with your Vue components.

### Does Nuxt Studio have an editorial workflow?

No. Studio commits each editor's drafts straight to the configured branch; you can use a staging branch and open pull requests on the Git host yourself, and pull requests from Studio are on its roadmap. Decap CMS manages drafts, review and publishing as branches and pull requests.

### Is Decap CMS a Nuxt Studio alternative?

Yes, when the site isn't a Nuxt Content site, must stay static, is on another Git host, or needs review before publishing. For a Nuxt Content site on GitHub or GitLab where editors publish directly, Nuxt Studio is usually the better fit.

## Sources

[Nuxt Studio](https://nuxt.studio/) and its docs on [introduction](https://nuxt.studio/introduction), [setup](https://nuxt.studio/setup), [Git providers](https://nuxt.studio/git-providers), [auth providers](https://nuxt.studio/auth-providers), [content editors](https://nuxt.studio/content), [media](https://nuxt.studio/medias), [AI](https://nuxt.studio/ai) and [synchronisation](https://nuxt.studio/advanced), also read from the [docs source](https://github.com/nuxt-content/nuxt-studio/tree/main/docs/content); the release posts [Nuxt Studio Alpha Release](https://content.nuxt.com/blog/studio-module-alpha) and [Nuxt Studio is Now Free and Open Source](https://content.nuxt.com/blog/studio-oss); Vercel's [NuxtLabs joins Vercel](https://vercel.com/blog/nuxtlabs-joins-vercel) and [NuxtLabs](https://nuxtlabs.com/); the [Nuxt Studio repository](https://github.com/nuxt-content/nuxt-studio), its [README](https://github.com/nuxt-content/nuxt-studio#readme), [changelog](https://github.com/nuxt-content/nuxt-studio/blob/main/CHANGELOG.md), the [GitHub provider source](https://github.com/nuxt-content/nuxt-studio/blob/main/src/app/src/utils/providers/github.ts), [GitHub auth route](https://github.com/nuxt-content/nuxt-studio/blob/main/src/module/src/runtime/server/routes/auth/github.get.ts) and issues [#226](https://github.com/nuxt-content/nuxt-studio/issues/226), [#245](https://github.com/nuxt-content/nuxt-studio/issues/245), [#366](https://github.com/nuxt-content/nuxt-studio/issues/366), [#542](https://github.com/nuxt-content/nuxt-studio/issues/542), [#580](https://github.com/nuxt-content/nuxt-studio/issues/580) and [#594](https://github.com/nuxt-content/nuxt-studio/issues/594); [Nuxt Studio SSO](https://github.com/nuxt-content/nuxt-studio-sso); Nuxt Content docs on [static hosting](https://content.nuxt.com/docs/deploy/static), [i18n](https://content.nuxt.com/docs/integrations/i18n), [collections](https://content.nuxt.com/docs/collections/define) and [Markdown and MDC](https://content.nuxt.com/docs/files/markdown); the [nuxt-studio package on npm](https://www.npmjs.com/package/nuxt-studio). Repository numbers come from the GitHub API, release and download numbers from the npm registry and downloads API, fetched each time the site is built. Decap facts from the [Decap CMS docs](/docs/intro/), [Decap Turbo](/turbo/), [State of Decap](/state-of-decap/) and the [Decap CMS repository](https://github.com/decaporg/decap-cms).
