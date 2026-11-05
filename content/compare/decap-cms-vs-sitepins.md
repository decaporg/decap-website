---
title: Decap CMS vs Sitepins
linkTitle: Decap CMS vs Sitepins
description: Sitepins is a hosted Git CMS that detects your schema, with live preview, SEO and AI tools, from $12/month. Decap CMS is free and works with seven Git hosts.
group: git-based
weight: 17
date: 2026-11-05
---

We make Decap CMS, so read this with that in mind. Every fact about Sitepins below comes from its own website, docs, pricing page or GitHub repository, with links at the end, and we say plainly where Sitepins is the better choice. If something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

Sitepins prices are shown in dollars, Decap Turbo prices in euros.

## In short

- **Both keep your content as Markdown, MDX, JSON, YAML or TOML files in Git, and every save is a commit.** Sitepins is a hosted web app with its own backend and database for accounts; Decap CMS is an admin page you add to your site, which runs in the editor's browser.
- **Sitepins is ahead on setup and editor comfort:** it reads your repository and builds the forms for you, previews your real site as you type, lets several people edit one file at once, and adds SEO checks, a bring-your-own-key AI assistant and dark mode.
- **Decap CMS is ahead on reach, cost and maturity:** seven Git hosts against GitHub and GitLab.com, free for any number of editors, MIT-licensed, and in production since 2016. Sitepins Cloud has no free plan, its cheapest plan is GitHub-only, and its code went public in July 2026.
- **Choose Sitepins** if you hand Astro, Next.js or Hugo sites on GitHub to clients and want them editing in minutes, without writing a config. **Choose Decap CMS** for GitLab self-managed, Bitbucket, Gitea, Forgejo or Azure DevOps, for teams larger than five per site, or when you don't want a subscription or a server.

## At a glance

| | Decap CMS | Sitepins |
|---|---|---|
| **What it is** | Git-based CMS: a single-page app added to your site as `/admin/` | Git-based CMS as a hosted web app (Sitepins Cloud), or self-hosted |
| **Where content lives** | Files in your Git repository | Files in your Git repository; accounts, organizations and permissions in Sitepins' MongoDB database |
| **What you host or run** | Nothing beyond your static site (an OAuth proxy on GitHub, unless you use Netlify or [Decap Turbo](/turbo/)) | Cloud: nothing. Self-hosted: a Next.js app, an Express API, MongoDB, an S3-compatible bucket and a reverse proxy |
| **Configuration** | `config.yml` (or a JavaScript object) that you write | Detected from your files; settings and schemas saved as JSON in `.sitepins/` by the UI |
| **License** | MIT | AGPL-3.0 |
| **Price** | Free. Optional Turbo: Free, or Pro €19/month | Pro $12/month, Team $29, Agency $49 (billed yearly: $10, $24, $40 a month); lifetime $249, $519, $729. Self-hosting free |
| **Free plan** | Whole CMS, no limits. Turbo Free: 1 site, 1 seat | None on Cloud; 7-day trial with a card |
| **Git hosts** | GitHub, GitLab, Bitbucket, Gitea, Forgejo, Azure DevOps, Git Gateway | GitHub on every plan; GitLab.com on Team and Agency |
| **Editors' login** | Git host account (OAuth), Netlify Identity, or Turbo | Sitepins account by email invitation; no Git account needed |
| **Roles** | Git permissions; org and site roles with Turbo | Owner, Admin and Editor per organization |
| **Editing** | Forms with a Markdown or rich-text editor | Frontmatter form plus a block editor, raw Markdown mode and a code editor for any file; real-time co-editing |
| **Preview** | Live side-by-side preview with your own React templates | Your real site's dev server, run in a sandbox on your own Vercel account |
| **Editorial workflow** | Draft, in review and ready, as branches and pull requests | Direct commits, or a pull request mode; branches and merges from the UI |
| **Multilingual content** | Built in: per folder, per file or single file | Not documented |
| **Media** | Repository; Cloudinary and Uploadcare; S3-compatible through Turbo Pro; in-browser resize on upload | Repository media folder |
| **Frameworks** | Any static site generator or framework | Astro, Next.js, Hugo, Nuxt, SvelteKit, TanStack Start, Eleventy, Jekyll |
| **Maintained by** | PM d.o.o. (about 30 people, six developers) and contributors | Sitepins, a bootstrapped team in Dhaka, Bangladesh, behind Themefisher and Gethugothemes |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} ({{< stat github="decaporg/decap-cms" metric="releases" >}} stable releases in {{< period >}}) | No tagged releases |
| **GitHub stars** | {{< stat github="decaporg/decap-cms" metric="stars" >}} | {{< stat github="sitepins/sitepins" metric="stars" >}} |

## How they work

**Decap CMS** is a JavaScript app that runs in the editor's browser. When an editor opens `yoursite.com/admin/`, Decap reads your `config.yml`, logs in to your Git host and reads and writes files through the Git host's API. There is no Decap server and no database; every save is a commit, and with the [editorial workflow](/docs/editorial-workflows/) every draft is a branch and a pull or merge request. You describe each collection and field in the config before anyone can edit.

**Sitepins** is a web app at `app.sitepins.com`. You sign up, connect a repository through Sitepins' GitHub App (or GitLab OAuth on Team and Agency plans), pick a branch, and Sitepins detects the framework and suggests content, media and public folders. It writes those settings to `.sitepins/config.json` in your repository. Files with front matter get a form straight away; for folders that grow, such as a blog, you click **Create Schema**, pick an existing file, and Sitepins generates the fields, which you then adjust. Schemas are saved as `.sitepins/schema/<folder>.json`. Editors are invited by email and never need a GitHub or GitLab account; their commits are made by the Sitepins bot, with the editor as co-author if they choose.

Behind the app sit a Next.js web app that talks to GitHub or GitLab and an Express API with MongoDB for users, organizations, permissions and activity logs, plus WebSocket servers for co-editing. Content stays in Git; the database holds who may do what. Both products are Git-based in the sense of [Git-based vs API-first vs traditional CMS](/compare/git-based-vs-headless-vs-traditional-cms/): neither serves content through an API, and your site reads the files at build time.

### History

Sitepins comes from the team behind Themefisher and Gethugothemes, which sell Hugo, Astro and Next.js themes; its About page says they built it after Forestry shut down in 2023. The beta opened on 7 July 2025, and the code went public under AGPL-3.0 in July 2026 (first commit, "initial public release", on 27 July). The company says it is bootstrapped, with no outside funding. Decap CMS started at Netlify as Netlify CMS in 2016 and has been maintained by PM d.o.o. since February 2023; see [State of Decap](/state-of-decap/).

## Where Sitepins is ahead

- **No schema to write, and a visual one to edit.** Sitepins reads your front matter, builds the editing form, and auto-detects folders for Astro, Next.js, Hugo and TanStack Start. Admins then change field types, labels, defaults and dropdowns in the UI, committed as JSON. Decap needs a `config.yml` describing every collection and field, edited as YAML.
- **Preview of the real site.** Live Preview runs your site's own dev server (Astro, Next.js, Hugo, SvelteKit, Jekyll and others) in a Vercel Sandbox on your own Vercel account and streams unsaved edits into it. Decap's preview is a React template you write that approximates your page.
- **Real-time co-editing.** Several people can edit the same file at once, with live cursors and avatars, through Yjs. Decap has no co-editing or presence.
- **Logins and roles without running anything, on every plan.** Editors are invited by email into an organization with Owner, Admin or Editor roles. Decap needs Git accounts, Git Gateway with Netlify Identity, or [Decap Turbo](/turbo/) for the same.
- **Several organizations on one account.** Pro has 2, Team 5, Agency 10, and a project can be transferred to a client's organization in one click, which suits agencies.
- **SEO and AI helpers.** A Google search preview, Open Graph card previews and a content check for headings, keyword density, broken links, alt text and reading level, with advanced SEO suggestions on Team and Agency. An AI assistant uses your own key from OpenAI, Anthropic, Google, xAI, Groq or OpenRouter for drafting, rewriting, commit messages and meta descriptions, and an MCP server lets agents such as Claude Code or Cursor edit sites with scoped, expiring tokens. Decap has none of these built in.
- **History and rollback in the UI.** A per-file timeline with visual diffs and a **Restore this version** button that commits the revert. In Decap you revert through your Git host.
- **Branches and any file.** Editors can switch or create branches and open and merge pull requests in Sitepins, and a code editor opens HTML, JSON, YAML, TOML or JavaScript files in the repository. Decap edits one configured branch and only the files in its collections.
- **Templates and interface.** Sitepins says it offers 100+ Astro, Hugo and Next.js templates, forked into your GitHub account ready to edit, including paid Themefisher and Gethugothemes themes. The interface has dark mode and 15 languages, including Arabic with a right-to-left layout.

## Where Decap CMS is ahead, or different

- **Git hosts.** Decap works with GitHub, GitLab (including self-managed), Bitbucket, Gitea, Forgejo, Azure DevOps and Git Gateway. Sitepins supports GitHub, and GitLab.com from the Team plan up; self-managed GitLab is "planned" on its roadmap.
- **Nothing to run, nothing to pay.** Decap is a static admin page, free for any number of editors and sites. Sitepins Cloud has no free plan, and self-hosting it means running two Node.js services, MongoDB, a bucket and a reverse proxy.
- **Team size per site.** Sitepins' self-serve plans allow 3 or 5 members per organization. A site with ten editors needs the Enterprise tier, which appears in the docs with no public price, or self-hosting. Decap has no seat limit; Turbo Pro adds seats at €6 a month.
- **MIT license.** You can modify and host Decap however you like. Sitepins' AGPL-3.0 is free to use and self-host, but if you modify it and offer it over a network, to clients for example, you must publish your modified source under the same licence. Sitepins' open-source announcement says a commercial licence comes with its Agency white-label plan.
- **Editorial workflow with review states.** Decap's free editorial workflow tracks each draft as draft, in review or ready, on six backends plus Turbo, and publishing merges the pull request. [Open authoring](/docs/open-authoring/) lets contributors without write access propose changes through forks. Sitepins has a pull request mode and merges from the UI; we found no review states or fork-based contributions in its docs.
- **Multilingual content.** Decap's [i18n](/docs/i18n/) supports a folder per locale, a file per locale or a single file with all locales. Sitepins' docs cover interface languages only; its roadmap marks "Support adding new language from Sitepins (Hugo)" as completed, but we found no documentation of how translations are managed.
- **Field types and extension points.** Decap has 18 widgets, including code, color, map, relation and uuid, plus [custom widgets](/docs/custom-widgets/), custom preview templates, backends, media libraries, Remark plugins and event hooks. Sitepins documents ten groups of field types, plus snippets; we found no documented API for custom field types.
- **Media libraries.** Cloudinary and Uploadcare are built in, Turbo Pro adds S3-compatible storage, and Decap can resize and convert images to WebP or JPEG in the browser on upload. Sitepins stores uploads in the repository's media folder.
- **Maturity.** Decap has been on 3.x with semantic versioning since 2023, with {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} npm downloads a week on average and {{< stat github="decaporg/decap-cms" metric="contributors" >}} people with merged pull requests in {{< period >}}. Sitepins has no tagged releases or version numbers, and almost all its commits come from three accounts.

Both work on phones and tablets: Sitepins says so, and Decap's interface has been responsive since 3.13 and 3.14 in June 2026.

### Activity

From the GitHub API; releases and commits are for {{< period >}}.

| | Decap CMS | Sitepins |
|---|---:|---:|
| GitHub stars | {{< stat github="decaporg/decap-cms" metric="stars" >}} | {{< stat github="sitepins/sitepins" metric="stars" >}} |
| Public since | 2016 | July 2026 (beta since July 2025) |
| Tagged releases | {{< stat github="decaporg/decap-cms" metric="releases" >}} | None |
| Commits to `main` | {{< stat github="decaporg/decap-cms" metric="commits" >}} | {{< stat github="sitepins/sitepins" metric="commits" >}} |
| Open issues | {{< stat github="decaporg/decap-cms" metric="open-issues" >}} | {{< stat github="sitepins/sitepins" metric="open-issues" >}} |

Almost all of Sitepins' commits on `main` are by three accounts; {{< stat github="sitepins/sitepins" metric="prs-merged" >}} pull requests were merged in {{< period >}}. The cloud service is updated continuously, with a monthly changelog.

## Cost

Assumptions: one website unless stated, static hosting not included (the same for both). Sitepins bills per account, with limits on sites, organizations and members per organization; we assume the owner counts as a member, which its docs don't say. Decap Turbo bills per organization, monthly, with tax included.

**A small business site: a developer and one or two editors, on GitHub.**

- **Decap CMS:** €0. On GitHub you need an OAuth proxy, unless you host on Netlify or use Turbo, and each editor needs a GitHub account.
- **Decap CMS with Turbo:** €0 on Free if one person edits. With a developer and two editors (3 seats), Pro is €19/month, or €228 a year.
- **Sitepins Pro:** $12/month ($144 a year), or $10/month billed yearly ($120 a year), or $249 once for the lifetime deal. Pro includes 3 members per organization and 6 sites. On GitLab you need Team: $29/month, or $24/month billed yearly ($288 a year).
- **Sitepins self-hosted:** no licence fee, but you pay for and run a server for the two Node.js services, MongoDB, an S3-compatible bucket, and a Vercel account if you want Live Preview.

**A team of 10 editors on one site.**

- **Decap CMS:** €0, editorial workflow included. Each editor needs a Git host account with access to the repository, or you use Git Gateway.
- **Decap CMS with Turbo Pro:** 5 seats included plus 5 extra at €6: €19 + €30 = **€49/month**, or €588 a year.
- **Sitepins Cloud:** not possible on the self-serve plans, which stop at 5 members per organization, and we found no way in the docs to share one site across two organizations. The docs list an Enterprise tier with unlimited members and all Git providers, with no price; the pricing page doesn't show it.
- **Sitepins self-hosted:** no limits on members, at the cost of running the stack above.

**An agency with 10 client sites, each client with a couple of editors.** This is the case Sitepins is designed for, and it is cheaper than Turbo. Sitepins Agency is $49/month ($40 billed yearly, or $729 once) for 30 sites and 10 organizations of up to 5 members each, so each client gets a separate workspace. Decap CMS alone costs €0 if the clients use Git accounts or Git Gateway. With Turbo, ten sites in one organization cost €19 + 9 × €10 = €109/month, plus €6 a month for each seat beyond five.

## Security and maintenance

**Decap CMS** has no server or database of its own. Your published site stays static, your Git host enforces who may change what, and every edit is a commit you can review and revert. What you maintain is the Decap version on your site and, on GitHub, an OAuth proxy if you run one. Fixed vulnerabilities are published as GitHub security advisories under Decap's [security policy](https://github.com/decaporg/decap-cms/security/policy); see [State of Decap](/state-of-decap/#security).

**Sitepins Cloud** keeps the moving parts on Sitepins' side. Its GitHub App gets write access to your repository's files, branches and pull requests, and editors' accounts and permissions live in Sitepins' database. For Live Preview you give Sitepins a Vercel access token, stored encrypted. AI keys stay in the editor's browser by default. Your published site stays static, and there is nothing to update on your side.

**Self-hosted Sitepins** puts all of that on you: the web app and API, a MongoDB replica set, an S3-compatible bucket for avatars and project images, a reverse proxy with WebSocket support, a GitHub App and its private key, OAuth apps for sign-in and GitLab, generated secrets, and optionally an email provider. The self-hosting guide asks for the GitHub App to have read and write access to Administration, Code and Pull requests. There are no versioned releases, so you update by pulling `main`. Security reports go to an email address in the repository's [security policy](https://github.com/sitepins/sitepins/blob/main/SECURITY.md), which promises acknowledgement within 72 hours and says fixes land on `main`.

## Moving from Sitepins to Decap CMS

Content and media are already in the repository, so the work is configuration:

1. **Add Decap to your site.** Create `admin/index.html` and `admin/config.yml` in your public folder (`public/` in Astro and Next.js, `static/` in Hugo). See [Install Decap CMS](/docs/install-decap-cms/).
2. **Copy the folder settings.** In `.sitepins/config.json`, `media_dir` and `public_dir` become Decap's `media_folder` and `public_folder`, and `content_dir` tells you where your collections are.
3. **Translate the schemas.** Each `.sitepins/schema/<folder>.json` becomes a [folder collection](/docs/collection-folder/). Text and textarea become `string` and `text`, rich text the `markdown` body, number, boolean, date, image and file their namesakes (`datetime` for dates), select and multi-select `select` (with `multiple: true`), tags `list`, objects and lists of objects `object` and `list`, and relation `relation`.
4. **Model the one-off pages.** Pages Sitepins edited without a schema, such as the homepage, need a [file collection](/docs/collection-file/) with their fields listed.
5. **Rebuild snippets.** Sitepins snippets for MDX components or Hugo shortcodes become [custom editor components](/docs/custom-widgets/#registereditorcomponent) in Decap's Markdown widget. Test a few complex files first.
6. **Choose a backend and logins.** See [Choosing a backend](/docs/choosing-a-backend/). Editors who had Sitepins accounts need Git accounts, Git Gateway, or [Turbo](/turbo/) invitations.
7. **Clean up.** Remove the `.sitepins` folder if you like, and uninstall the Sitepins GitHub App from your account or organization.

What doesn't carry over: the real-site preview, co-editing, the SEO panel, the AI assistant and MCP access, the restore button, and Sitepins accounts and organizations.

**Going the other way** is quick for simple sites, as long as the repository is on GitHub or GitLab.com. Connect the repository in Sitepins, check the suggested folders, and use **Create Schema** on an existing file for each collection. We found no importer for Decap's `config.yml`, so labels, defaults and validation are set again by hand. Merge or close any open editorial workflow pull requests first. You would give up other Git hosts, Decap's i18n structure, custom widgets and previews, and fields such as color, map and code that Sitepins doesn't list.

## Which to choose

Choose Decap CMS if:

- your repository is on Bitbucket, Gitea, Forgejo, Azure DevOps or self-managed GitLab, or you use Git Gateway;
- more than five people edit one site, and you don't want an Enterprise contract or a self-hosted stack;
- you want draft, review and ready states, or outside contributors propose changes through forks;
- the site is multilingual, or you need custom widgets, previews or media libraries such as Cloudinary;
- you don't want a subscription, a server or a database, or you need a permissive MIT licence;
- you want hosted logins and roles without running anything: add [Decap Turbo](/turbo/).

Choose Sitepins if:

- your sites are Astro, Next.js or Hugo on GitHub, and you want editors in within minutes, without writing a config;
- you're an agency handing sites to clients, with up to five people per client, and want separate workspaces for each;
- editors want to see the real site while they type, or work on the same page at the same time;
- built-in SEO checks, an AI assistant with your own key, or AI agents editing through MCP matter to you;
- you start from one of its templates, or from a Themefisher or Gethugothemes theme.

If you're weighing other hosted Git-based editors, see [Decap CMS vs Pages CMS](/compare/decap-cms-vs-pages-cms/), [Decap CMS vs CloudCannon](/compare/decap-cms-vs-cloudcannon/), [Decap CMS vs TinaCMS](/compare/decap-cms-vs-tinacms/) and the [overview of Git-based CMSs](/compare/git-based-cms/).

## Frequently asked questions

### Is Decap CMS a Sitepins alternative?

Yes. Both are open-source Git-based CMSs that commit Markdown and data files to your repository. Decap is the free, self-contained option for seven Git hosts, configured in YAML; Sitepins is the hosted option that needs no config and adds real-site previews, co-editing, SEO and AI tools, for a monthly fee.

### Is Sitepins free?

Self-hosting is free under AGPL-3.0, with every feature unlocked. Sitepins Cloud has no free plan: Pro costs $12 a month ($10 billed yearly) after a 7-day trial that needs a card, and lifetime plans start at $249. Decap CMS is free, and Decap Turbo has a free plan for one site and one seat.

### Is Sitepins open source?

Yes, since July 2026, under AGPL-3.0. If you modify it and let others use it over a network, you must share your modified source. Decap CMS is MIT-licensed, with no such condition.

### Does Sitepins work with GitLab or Bitbucket?

GitLab.com, on the Team and Agency plans; the Pro plan is GitHub only, and self-managed GitLab is on its roadmap. We found no Bitbucket, Gitea, Forgejo or Azure DevOps support. Decap CMS supports all of these.

### Can I use Sitepins with Hugo?

Yes. Sitepins detects Hugo sites automatically, and Live Preview installs Hugo in its sandbox. Decap CMS also works with [Hugo](/docs/hugo/), as a folder in `static/`.

### Does Sitepins need a database?

Yes, for accounts, organizations and permissions, though not for content. On Sitepins Cloud it is Sitepins' MongoDB; if you self-host, you run MongoDB 6.0 or newer as a replica set. Decap CMS has no database.

### Can I migrate from Sitepins to Decap CMS?

Yes. Your files stay where they are; you add Decap's admin page and write a `config.yml` from the schemas in `.sitepins/schema/`. The steps are [above](#moving-from-sitepins-to-decap-cms).

## Sources

[Sitepins](https://sitepins.com/), its [pricing](https://sitepins.com/pricing), [About page](https://sitepins.com/about), [contact page](https://sitepins.com/contact), [privacy policy](https://sitepins.com/privacy-policy), [terms](https://sitepins.com/terms), [open-source announcement](https://sitepins.com/blog/sitepins-cms-is-now-open-source), [roadmap](https://updates.sitepins.com/) and [changelog](https://updates.sitepins.com/changelog); the Sitepins docs on [the overview](https://docs.sitepins.com/getting-started/overview), [adding a site](https://docs.sitepins.com/getting-started/add-new-site), [configuring a site](https://docs.sitepins.com/getting-started/configure-site), [templates](https://docs.sitepins.com/getting-started/start-from-template), [config files](https://docs.sitepins.com/content-structure/config-files), [schemas](https://docs.sitepins.com/content-structure/schemas), [the media library](https://docs.sitepins.com/content-structure/media-library), [live preview](https://docs.sitepins.com/editing/live-preview), [saving and publishing](https://docs.sitepins.com/editing/saving-and-publishing), [SEO tools](https://docs.sitepins.com/editing/seo-tools), [the AI assistant](https://docs.sitepins.com/editing/ai-assistant), [version history](https://docs.sitepins.com/editing/version-history), [snippets](https://docs.sitepins.com/editing/snippets), [team and roles](https://docs.sitepins.com/collaboration/team-and-roles), [real-time collaboration](https://docs.sitepins.com/collaboration/real-time-collaboration), [branches and pull requests](https://docs.sitepins.com/collaboration/branches-and-pull-requests), [AI agents](https://docs.sitepins.com/ai-agents), [organizations](https://docs.sitepins.com/organization/organizations), [sandbox settings](https://docs.sitepins.com/organization/sandbox-settings), [deployment](https://docs.sitepins.com/project-settings/deployment), [preferences](https://docs.sitepins.com/account/preferences), [plans and limits](https://docs.sitepins.com/billing/plans-and-limits), and self-hosting ([overview](https://docs.sitepins.com/self-hosting/overview), [media storage](https://docs.sitepins.com/self-hosting/media-storage), [real-time and preview](https://docs.sitepins.com/self-hosting/realtime-and-preview)); the [Sitepins repository](https://github.com/sitepins/sitepins), its [README](https://github.com/sitepins/sitepins/blob/main/README.md), [app README](https://github.com/sitepins/sitepins/blob/main/app/README.md), [API README](https://github.com/sitepins/sitepins/blob/main/api/README.md), [security policy](https://github.com/sitepins/sitepins/blob/main/SECURITY.md) and [licence](https://github.com/sitepins/sitepins/blob/main/LICENSE). Repository numbers come from the GitHub API, fetched each time the site is built. Decap facts from the [Decap CMS docs](/docs/intro/), [Decap Turbo](/turbo/), [Turbo billing](/docs/turbo-billing/) and [State of Decap](/state-of-decap/).
