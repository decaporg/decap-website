---
title: Decap CMS vs Pages CMS
linkTitle: Decap CMS vs Pages CMS
description: Pages CMS is a free hosted editor for GitHub repositories; Decap CMS is an admin page you add to your site, for any Git host. How they differ and who each suits.
group: git-based
weight: 13
date: 2026-11-04
---

We make Decap CMS, so read this with that in mind. Every fact below is sourced, and we say plainly where Pages CMS is the better choice. If something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

## In short

- **Both edit Markdown and data files in your Git repository** and have no content database. The difference is where the editor runs: Pages CMS is a web app you sign in to (hosted at app.pagescms.org, or run yourself), while Decap CMS is an admin page you add to your own site.
- **Pages CMS is the simplest free option for a GitHub repository**: nothing to install in your site, and editors without a GitHub account can be invited by email at no cost.
- **Decap CMS covers more ground**: GitHub, GitLab, Bitbucket, Gitea, Forgejo and Azure DevOps, a draft–review–publish workflow, a live preview, multilingual content and custom widgets.
- **Pages CMS's latest release is {{< stat github="hunvreus/pagescms" metric="latest-release" >}}, published {{< stat github="hunvreus/pagescms" metric="latest-release-date" >}}.** In August 2026 its maintainer started rebuilding it on a separate branch.
- **Pick Pages CMS** for a small GitHub site with a few editors and no need for previews, translations or review. **Pick Decap CMS** if you need any of those, use another Git host, or want the editor to live in your own site.

## At a glance

| | Decap CMS | Pages CMS |
|---|---|---|
| **What it is** | An open-source CMS app you add to your site as `/admin/` | An open-source web app that edits GitHub repositories |
| **Where content lives** | Files in your Git repository | Files in your GitHub repository |
| **What you host or run** | An admin page in your static site; for GitHub logins, an OAuth proxy (or Netlify's, or [Decap Turbo](/turbo/)) | Nothing, with the hosted app. Self-hosted: a Next.js app, PostgreSQL and your own GitHub App |
| **License** | MIT | MIT |
| **Price** | Free. Optional Decap Turbo: Free plan, Pro €19/month | Free, hosted or self-hosted |
| **Git hosts** | GitHub, GitLab, Bitbucket, Gitea, Forgejo, Azure DevOps, Git Gateway | GitHub only |
| **Editors' login** | The Git host's account (OAuth), Git Gateway, or Turbo invitations | GitHub, or an email invitation with a one-time code |
| **Roles** | Whatever the Git account may do; org and site roles with Turbo | GitHub users manage everything; invited collaborators edit content and media only |
| **Configuration** | `config.yml` in your admin folder (or a JS object) | `.pages.yml` at the repository root, editable in the app |
| **Editing** | Forms, Markdown and rich-text editor | Forms, rich-text editor (Markdown or HTML), raw and code editors, a grid for CSV files |
| **Preview** | Live side-by-side preview, custom templates | None released; a preview branch is work in progress |
| **Editorial workflow** | Draft, in review, ready, as branches and pull requests | None; saves commit to the branch you're on |
| **Multilingual content** | Built in: per folder, per file or single file | None released (feature request open since March 2024) |
| **Media** | In the repository; Cloudinary, Uploadcare; S3-compatible through Turbo; in-browser resize and conversion on upload | In the repository, with several named media folders; S3 and R2 listed as "soon" |
| **Extensibility** | Custom widgets, previews, backends, media libraries, Remark plugins, event hooks | Custom fields added to the app's source code; buttons that run GitHub Actions workflows |
| **Maintained by** | PM d.o.o. (about 30 people, six developers) and contributors | One maintainer, Ronan Berder |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} | {{< stat github="hunvreus/pagescms" metric="latest-release" >}}, {{< stat github="hunvreus/pagescms" metric="latest-release-date" >}} |
| **GitHub stars** | {{< stat github="decaporg/decap-cms" metric="stars" >}} | {{< stat github="hunvreus/pagescms" metric="stars" >}} |

## How they work

**Pages CMS is an app you sign in to.** You go to app.pagescms.org, sign in with GitHub, and install the Pages CMS GitHub App on the account or organisation that owns your repository. When you open the repository, Pages CMS reads `.pages.yml` from its root, per branch, and shows a form for each collection or file defined there. When you save, the app commits the change to GitHub. Pages CMS keeps its own state in PostgreSQL: sign-ins, collaborators, the parsed configuration and a cache of your repository's files. Your content stays in GitHub. If you self-host, you run that Next.js app and database yourself and create your own GitHub App.

**Decap CMS runs in the editor's browser, from your own site.** You add `/admin/index.html` and a `config.yml` to the site, and editors open `yoursite.com/admin/`. They log in with their Git host, and the browser talks to the Git host's API directly. There is no Decap server or database between them. The cost of that model is the login: on GitHub you need a small OAuth proxy, Netlify's, or [Decap Turbo](/turbo/).

The practical difference is who holds the keys. With hosted Pages CMS, a third-party service holds a GitHub App installation on your repositories and writes on behalf of invited collaborators. With Decap CMS and your own OAuth proxy, nothing but the editor's browser and the Git host touches the repository. Both are Git-based CMSs; for what that means compared with Contentful or WordPress, see [Git-based vs API-first vs traditional CMS](/compare/git-based-vs-headless-vs-traditional-cms/).

### `.pages.yml` and `config.yml`, side by side

The two configurations are close in spirit. A Pages CMS collection:

```yaml
media: media
content:
  - name: posts
    label: Posts
    type: collection
    path: content/posts
    fields:
      - name: title
        type: string
      - name: body
        type: rich-text
```

The same in Decap CMS:

```yaml
media_folder: media
public_folder: /media
collections:
  - name: posts
    label: Posts
    folder: content/posts
    create: true
    fields:
      - { name: title, label: Title, widget: string }
      - { name: body, label: Body, widget: markdown }
```

Field types map like this:

| Pages CMS field | Decap CMS widget |
|---|---|
| `string`, `text`, `number`, `boolean`, `select`, `code`, `uuid` | Same names: `string`, `text`, `number`, `boolean`, `select`, `code`, `uuid` |
| `date` | `datetime` |
| `image`, `file` | `image`, `file` |
| `rich-text` | `markdown` (or `richtext`) |
| `object` | `object` |
| `reference` | `relation` |
| `block` (several object shapes in one list) | `list` with `types` and `typeKey` |
| `list: true` on any field | `list` widget |
| `hidden: true` on any field | `hidden` widget |
| (none) | `color`, `map` |

Pages CMS also has a raw file editor for files without fields (such as `robots.txt` or a redirects file), a code editor and a spreadsheet-style grid for CSV files. Decap CMS edits Markdown with front matter, YAML, TOML and JSON only.

## Where Pages CMS is ahead

- **Nothing to set up in your site.** With the hosted app you sign in, install the GitHub App, add `.pages.yml` (the app offers to create it) and start editing. Decap needs an admin folder in your site and, on GitHub, an OAuth proxy.
- **Collaborators without GitHub accounts, for free.** You invite someone by email; they follow the link and sign in with a one-time code sent to that address. Their saves go through the Pages CMS GitHub App. They can edit content and media but can't change the configuration or invite others. In Decap CMS the free equivalent is Git Gateway with Netlify Identity; otherwise invitations come with [Decap Turbo](/turbo/), whose Free plan has one seat and Pro €19/month includes five.
- **Buttons that run GitHub Actions.** `.pages.yml` can add buttons to the sidebar, a collection, an entry or the media page that dispatch a workflow, with an optional form whose values are passed to it. It also shows build status from GitHub checks. Decap has no equivalent built in.
- **Edits files Decap can't.** Any text file can be opened in a raw or code editor, and CSV files in a grid. Decap only edits files that fit a collection schema in one of its formats.
- **Search and tree views.** Collections can be searched by configured fields and shown as a folder tree.
- **The configuration is editable in the app** and read per branch, so a branch can try a new schema.

## Where Decap CMS is ahead, or different

- **More Git hosts.** Decap works with GitHub, GitLab, Bitbucket, Gitea, Forgejo, Azure DevOps and Git Gateway. Pages CMS supports GitHub only; its FAQ says GitLab and Bitbucket could be added, and welcomes pull requests.
- **Editorial workflow.** Decap's draft, in review and ready states are branches and pull requests, on GitHub, GitLab, Bitbucket, Azure, Forgejo, Git Gateway and Turbo, and [open authoring](/docs/open-authoring/) lets people without write access propose changes through forks. In Pages CMS, saving commits to the branch you have open; you can switch branches, but there is no review step in the app.
- **Live preview.** Decap shows the entry next to the form as you type, with your own [preview templates](/docs/customization/). Pages CMS has no preview in a release; a `feature/preview` branch from June 2026 is marked work in progress, and the [preview request](https://github.com/pages-cms/pages-cms/issues/190) is open.
- **Multilingual content.** Decap has [i18n](/docs/i18n/) built in, with three ways to lay out locales. Pages CMS has none; the [localisation request](https://github.com/pages-cms/pages-cms/issues/48) has been open since March 2024, and an experimental branch exists.
- **Custom widgets without forking.** In Decap you register [custom widgets](/docs/custom-widgets/), previews, backends and media libraries from your own site's JavaScript. In Pages CMS a custom field is a folder added to the app's source code, which means running your own copy.
- **Media services.** Decap has Cloudinary and Uploadcare built in, S3-compatible storage through Turbo (Pro) and a beta package, and can resize, crop and convert images in the browser before saving them. Pages CMS stores media in the repository, with S3 and Cloudflare R2 listed as "soon".
- **No third party in the write path** unless you choose one. See [How they work](#how-they-work).
- **Who maintains it.** Decap is maintained by PM d.o.o. and by contributors: {{< stat github="decaporg/decap-cms" metric="contributors" >}} people had pull requests merged in {{< period >}}. Its work is paid for by [Decap Turbo](/turbo/) and sponsors. Pages CMS is the work of one developer, who started it in December 2023. See [State of Decap](/state-of-decap/) for our numbers.

## Cost

Assumptions: a static site on a host you already pay for or a free tier; GitHub as the Git host; list prices.

**A solo developer or small business with 1–2 editors.**

- **Pages CMS, hosted:** €0. Editors without GitHub accounts are invited by email.
- **Pages CMS, self-hosted:** €0 for the software, plus whatever your host and PostgreSQL provider charge. Free tiers exist at several providers; we didn't price them.
- **Decap CMS, no Turbo:** €0. Editors with GitHub accounts log in through Netlify's OAuth or a proxy you deploy (several free ones exist, see [external OAuth clients](/docs/external-oauth-clients/)). On Netlify, Git Gateway lets editors without Git accounts log in.
- **Decap CMS with Turbo:** Free plan €0 for one editor. For two, Pro is €19/month (one site, five seats, 14-day trial without a card).

**A team of 10 editors.**

- **Pages CMS, hosted:** €0. Its FAQ says the hosted app is free and mentions no limit on collaborators.
- **Decap CMS, no Turbo:** €0, if each editor has a Git account with write access to the repository, or uses Git Gateway.
- **Decap CMS with Turbo Pro:** €19 for five seats plus five extra seats at €6 = **€49/month**, tax included, billed monthly in euros. That buys hosted login, invitations, roles per site, a faster content proxy, deploy status and an activity log.

On price alone Pages CMS wins this comparison for a GitHub team. Decap's free path costs nothing too, but needs editors with Git accounts or Netlify.

## Security and maintenance

**Pages CMS, hosted.** You don't run anything, but you trust a service run by one person with access to your repositories. The GitHub App that the docs tell self-hosters to create asks for read and write access to repository contents, Actions and Administration, read access to checks, commit statuses and metadata, and users' email addresses. Collaborator records live in the service's database. By default, collaborators' commits are attributed to the App, not to the person; setting `commit.identity: user` adds their name and email.

**Pages CMS, self-hosted.** You run a Node.js app with a PostgreSQL database and your GitHub App's secrets, keep its dependencies patched, put HTTPS in front of it, and apply database migrations on upgrades. The coming rewrite targets Cloudflare Workers, so a self-hosted setup will likely change.

**Decap CMS.** Nothing runs on a server: the published site stays static and the CMS is a script in the editor's browser. The Git host is the gatekeeper, and every change is a commit you can review and revert. On GitHub you run, or borrow, a small OAuth proxy. You update Decap by bumping a version or a CDN URL. Decap publishes each fixed vulnerability as a security advisory, under its [security policy](https://github.com/decaporg/decap-cms/security/policy); see [State of Decap](/state-of-decap/#security).

### Activity, and the rewrite in progress

From the GitHub API; releases, commits and closed issues are for {{< period >}}. The repository `pages-cms/pages-cms` now redirects to [`hunvreus/pagescms`](https://github.com/hunvreus/pagescms).

| | Decap CMS | Pages CMS |
|---|---:|---:|
| GitHub stars | {{< stat github="decaporg/decap-cms" metric="stars" >}} | {{< stat github="hunvreus/pagescms" metric="stars" >}} |
| Stable releases | {{< stat github="decaporg/decap-cms" metric="releases" >}} | {{< stat github="hunvreus/pagescms" metric="releases" >}} |
| Latest release | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} | {{< stat github="hunvreus/pagescms" metric="latest-release" >}}, {{< stat github="hunvreus/pagescms" metric="latest-release-date" >}} |
| Commits to `main` | {{< stat github="decaporg/decap-cms" metric="commits" >}} | {{< stat github="hunvreus/pagescms" metric="commits" >}} |
| Open issues | {{< stat github="decaporg/decap-cms" metric="open-issues" >}} | {{< stat github="hunvreus/pagescms" metric="open-issues" >}} |
| Issues closed | {{< stat github="decaporg/decap-cms" metric="issues-closed" >}} | {{< stat github="hunvreus/pagescms" metric="issues-closed" >}} |

Pages CMS 2.0 shipped on 21 March 2026, with PostgreSQL as the expected database, a new auth library and new GitHub App permissions; self-hosters had to update the App and run migrations.

On 20 August 2026 the maintainer started a branch called `overhaul/tanstack-start`. Its README describes "a new TanStack Start application targeting Cloudflare Workers", built "in reviewable migration waves", with the current Next.js app kept in a `_legacy/` folder. The branch's to-do list tracks the remaining cutover work: a staging deployment at staging.pagescms.org, S3-compatible media, and a hosted edition with a Free plan and a paid Pro plan (billed through Stripe, with custom roles and branch restrictions), while production stays at app.pagescms.org until the switch. It lists content localisation and previews as later work. We found no announced release date or prices. If you pick Pages CMS, expect a large upgrade at some point; if you self-host, expect a migration.

## Moving from Pages CMS to Decap CMS

Your content is already in the repository, so moving is a configuration job.

1. **Add Decap to your site.** Create `admin/index.html` and `admin/config.yml` in the folder your site serves as-is (for example `static/` in Hugo or `public/` in Astro and Next.js). See [Install Decap CMS](/docs/install-decap-cms/).
2. **Choose a backend.** For GitHub, set up OAuth (Netlify's, your own proxy, or Turbo). See [Choosing a backend](/docs/choosing-a-backend/).
3. **Translate `.pages.yml`.** `content` entries of type `collection` become folder collections (`folder:` instead of `path:`); type `file` becomes a file collection; `media.input` and `media.output` become `media_folder` and `public_folder`. Use the field table above. `filename` templates become Decap's `slug` setting, and `view` settings become `summary`, `sortable_fields` and `view_filters`.
4. **Check the formats.** Pages CMS `yaml-frontmatter`, `toml-frontmatter` and `json-frontmatter` map to Decap's formats of the same names; `yaml`, `json` and `toml` likewise. Rich-text fields saved as HTML (`format: html`) have no direct Decap equivalent; keep them as Markdown or use a `text` or `code` field.
5. **Replace what doesn't carry over.** GitHub Actions buttons, CSV and raw-file editing and the build status display have no Decap equivalent; run workflows on push instead. Invited collaborators need Git accounts, Git Gateway or [Turbo](/turbo/) invitations.
6. **Remove the Pages CMS GitHub App** from the repository once your editors have moved, and delete `.pages.yml` if you no longer need it.

We know of no automatic converter between `.pages.yml` and `config.yml` in either direction.

**Going the other way** is just as simple for a GitHub site: install the Pages CMS GitHub App, write a `.pages.yml` from your `config.yml` and stop using `/admin/`. You would give up the editorial workflow, previews, i18n and any custom widgets, and you'd need to move to GitHub if you're elsewhere.

## Which to choose

**Choose Decap CMS if:**

- your repository is on GitLab, Bitbucket, Gitea, Forgejo or Azure DevOps, or you might move;
- editors need to preview entries as they write, or content goes through review before publishing;
- the site is multilingual;
- you need custom widgets, preview templates or a media service like Cloudinary, without running your own copy of the CMS;
- you'd rather no third-party service held write access to your repository;
- you want hosted logins and roles for a team, with a company behind it ([Turbo](/turbo/)).

**Choose Pages CMS if:**

- the site is on GitHub, and a handful of editors make direct edits without review;
- some editors don't have GitHub accounts and you don't want to pay for invitations;
- you'd like buttons that run GitHub Actions, or to edit CSV and other raw files;
- you don't want to add anything to your site's build;
- you're comfortable that a rewrite is coming and the project has one maintainer.

## Frequently asked questions

### Is Pages CMS free?

Yes. Its site says Pages CMS is free whether you use the hosted app at app.pagescms.org, deploy it on Vercel or self-host it, and it's MIT-licensed. The rewrite branch's to-do list mentions a future paid Pro plan for the hosted edition, alongside a Free plan; no prices have been published.

### Is Decap CMS a Pages CMS alternative?

Yes. Both edit Markdown, YAML and JSON in your repository with a form-based UI, and the configurations are similar. Decap adds other Git hosts, an editorial workflow, a live preview and multilingual content; Pages CMS is easier to start with on GitHub and lets you invite editors without GitHub accounts for free.

### Does Pages CMS work with GitLab or Bitbucket?

No. Pages CMS supports GitHub only, and its FAQ says this is by design for now. Decap CMS supports GitLab, Bitbucket, Gitea, Forgejo and Azure DevOps as well as GitHub.

### Can editors use Decap CMS without a GitHub account?

Yes, in two ways. On Netlify, Git Gateway with Netlify Identity lets editors log in with an email address. Or [Decap Turbo](/turbo/) invites editors by email and handles login for sites on GitHub or GitLab; its Free plan has one seat, and Pro is €19/month for five.

### Is Pages CMS still maintained?

Its latest release is {{< stat github="hunvreus/pagescms" metric="latest-release" >}}, published {{< stat github="hunvreus/pagescms" metric="latest-release-date" >}}, and its `main` branch had {{< stat github="hunvreus/pagescms" metric="commits" >}} commits in {{< period >}}. In August 2026 the maintainer started a rewrite on a separate branch. Check the [repository](https://github.com/hunvreus/pagescms) for the latest.

### Can I migrate from Pages CMS to Decap CMS?

Yes. Your content files stay where they are; you add Decap's admin page and write a `config.yml` that matches your `.pages.yml`. The steps and a field mapping are [above](#moving-from-pages-cms-to-decap-cms).

### Does Pages CMS work with Hugo, Jekyll or Astro?

Yes. Pages CMS edits files in the repository, so it works with any static site generator whose content is Markdown or data files, and its site lists Jekyll, Hugo, Astro, Eleventy, Next.js and others. The same is true of Decap CMS.

## Sources

[Pages CMS](https://pagescms.org/) (home page and FAQ), its documentation on [configuration](https://pagescms.org/docs/configuration/), [fields](https://pagescms.org/docs/configuration/content/fields/), [media](https://pagescms.org/docs/configuration/media/), [collaborators](https://pagescms.org/docs/configuration/collaborators/), [actions](https://pagescms.org/docs/configuration/actions/), [the GitHub App](https://pagescms.org/docs/guides/installing/github-app/), [self-hosting](https://pagescms.org/docs/guides/installing/self-host/) and [upgrading to 2.x](https://pagescms.org/docs/guides/upgrading-to-2/), read from the [website's source](https://github.com/hunvreus/pagescms-website); the [Pages CMS repository](https://github.com/hunvreus/pagescms), its [releases](https://github.com/hunvreus/pagescms/releases), the [`overhaul/tanstack-start` branch](https://github.com/hunvreus/pagescms/tree/overhaul/tanstack-start) with its README and `TODO.md`, and issues [#48](https://github.com/pages-cms/pages-cms/issues/48) and [#190](https://github.com/pages-cms/pages-cms/issues/190). Repository numbers come from the GitHub API, fetched each time the site is built. Decap facts from the [Decap CMS docs](/docs/intro/), [Decap Turbo](/turbo/) and [State of Decap](/state-of-decap/).
