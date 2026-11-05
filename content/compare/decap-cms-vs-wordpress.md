---
title: Decap CMS vs WordPress
linkTitle: Decap CMS vs WordPress
description: WordPress runs your whole site on PHP and a database; Decap edits Markdown in Git for a static site. Costs, security, migration, and who each one suits.
group: other
weight: 31
date: 2026-11-04
---

We make Decap CMS, so read this with that in mind. Every fact about WordPress below comes from WordPress.org, WordPress.com, the vendors named, or a dated public report, and is linked in the sources; if something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

Prices are in each vendor's own currency: WordPress.com and most hosts in US dollars excluding tax, WPML and Polylang in euros excluding VAT, Decap Turbo in euros including tax.

## In short

- **They are different kinds of CMS.** WordPress is a complete website system: a PHP application with a database that stores your content and renders every page through themes and plugins. Decap CMS is only an editing interface: it commits Markdown files to your Git repository, and a static site generator such as Hugo, Astro or Eleventy builds the site from them.
- **WordPress powers 39.5% of all websites** (W3Techs), and its plugin directory lists 73,917 plugins. If you need e-commerce, memberships, forms, comments or a site that a non-technical owner runs without a developer, WordPress is the better choice.
- **Decap CMS suits sites a developer builds** with a static site generator: marketing sites, docs, blogs and portfolios. There is no server, database or plugin to patch, and every edit is a Git commit you can review and revert.
- **The cost difference is mostly time, not licences.** Both are free software. WordPress needs hosting that runs PHP (from $4/month on WordPress.com, $30/month on a managed host like Kinsta, billed yearly) and regular updates; a Decap site can sit on a free static hosting tier.
- **Moving from WordPress to Markdown is well trodden.** Free exporters such as `wordpress-export-to-markdown` convert posts and download images. Comments, forms, shortcodes and plugin data don't carry over.

## At a glance

| | Decap CMS | WordPress |
|---|---|---|
| **What it is** | Git-based CMS: a single-page React app added to your site at `/admin/` | Traditional CMS: a PHP application that stores content and renders the site |
| **Where content lives** | Markdown, YAML, JSON or TOML files in your Git repository | A MySQL or MariaDB database, plus uploaded files on the server |
| **What you run** | Nothing; it runs in the editor's browser. The site is static files | A web server with PHP and a database, kept updated, or a hosted plan (WordPress.com, a managed host) |
| **License** | MIT | GPLv2 or later |
| **Price** | Free. Optional [Decap Turbo](/turbo/): Free plan, Pro €19/month | Software free. WordPress.com from $4/month billed yearly ($9 monthly); managed hosts vary |
| **Free plan** | Everything; Turbo Free is 1 site and 1 seat | Self-hosting is free software on your own server. WordPress.com Free: 1 GB storage, no plugins |
| **Editors' login** | Through the Git host (OAuth), or Turbo | WordPress user accounts on the site |
| **Roles** | The editor's Git permissions; CMS roles with Turbo | Administrator, Editor, Author, Contributor, Subscriber (and Super Admin on Multisite), on every install |
| **Editing** | Forms with a live side-by-side preview | The block editor (Gutenberg): visual blocks that look close to the published page; the Site Editor for block themes |
| **Preview** | Live preview pane, custom React templates | Preview of the real page, rendered by your theme |
| **Editorial workflow** | Draft, in review, ready, as pull/merge requests; history as Git commits | Draft, pending review and scheduled posts in core; inline Notes with @mentions (7.1); post revisions |
| **i18n** | Built in | Through plugins: Polylang (free; Pro from €99/year), WPML (from €39/year) |
| **Media** | Files in the repository; Cloudinary, Uploadcare, custom libraries | Media Library on the server, with resized image versions generated on upload |
| **Extensibility** | Custom widgets, previews, backends, media libraries, event hooks | 73,917 plugins and 8,877 themes in the WordPress.org directory, plus commercial ones |
| **Front ends** | Any static site generator or framework that reads files | Its own themes; or headless through the REST API or the WPGraphQL plugin |
| **Maintained by** | PM d.o.o. and contributors | The WordPress open-source project (more than 800 contributors to 7.1); WordPress.com is run by Automattic |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} | 7.1.4, 28 October 2026; 7.2 in beta, planned for December |
| **Usage** | {{< stat github="decaporg/decap-cms" metric="stars" >}} GitHub stars; {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} npm downloads a week on average in {{< period >}} | 39.5% of all websites; 58.2% of sites whose CMS is known (W3Techs) |

## How they work

WordPress is a web application. A visitor requests a page; the server runs PHP, reads the post from the database, renders it through the active theme and any plugins, and sends back HTML. The admin dashboard lives on the same server at `/wp-admin/`. Plugins hook into every part of this: SEO, forms, shops, caching, security, page builders. This is why WordPress can do almost anything, and also why the server, PHP, the database and every plugin must be kept up to date.

Decap CMS is not an application you deploy. It's a JavaScript app that you add to your site as `/admin/index.html` with a `config.yml`. It runs in the editor's browser and talks to your Git host's API: saving an entry commits a Markdown file, and your host rebuilds the static site from the repository. What visitors get is plain HTML, CSS and images from a CDN. There is no database, no PHP and no admin area on the live site.

So the first decision is about the kind of CMS, not the product. [Git-based vs API-first vs traditional CMS](/compare/git-based-vs-headless-vs-traditional-cms/) covers that in detail: when content must be live within seconds, when users create content, or when there is no developer, a traditional CMS like WordPress is the better fit. When a developer builds the site and wants content as files next to the code, a Git-based CMS is.

## Where WordPress is ahead

- **It builds and runs the whole site.** Themes, menus, pages, search and the admin are all included. A non-technical owner can install a theme, add pages and publish without a developer, build step or Git account. Decap needs someone to set up a static site generator, templates, hosting and logins.
- **A plugin for almost everything.** E-commerce (WooCommerce), memberships, forms, events, bookings, LMS, SEO tooling and page builders are an install away. Decap CMS has no e-commerce, forms, comments, analytics or user-generated content; on a static site those come from separate services.
- **Visual block editing.** The block editor shows content much as it will look, with patterns, columns and media blocks, and block themes let you edit templates in the Site Editor. Decap's editor is a form with a preview pane beside it; there is no on-page or click-to-edit editing.
- **Editorial features in core.** Scheduled posts, comments, post revisions with a visual compare and restore screen (improved in 7.0), "pending review" status, and inline Notes with rich text and @mentions (7.1). Decap has no scheduled publishing and no built-in comments; its history is Git history, which developers read more easily than editors.
- **Roles without a Git account.** Five built-in roles, from Subscriber to Administrator, and plugins for finer-grained permissions. Editors only need a WordPress login. With Decap, editors need an account on your Git host, or a [Decap Turbo](/turbo/) invitation, and CMS-level roles need Turbo.
- **Instant publishing.** A published post is live immediately. A Decap change waits for the static site to rebuild, usually a minute or two.
- **Scale and queries.** A database handles hundreds of thousands of posts and queries by category, author or custom field. Decap is fine to thousands of entries per collection; beyond that it gets slow and can hit Git host rate limits.
- **Hosting and help everywhere.** Almost every web host offers WordPress, and finding a WordPress developer or agency is easy anywhere in the world.

## Where Decap CMS is ahead, or different

- **Nothing to patch on the live site.** A static site has no PHP, database, login page or plugins for an attacker to reach. Patchstack's report counted 11,334 new vulnerabilities in the WordPress ecosystem in 2025, 91% of them in plugins (more below). Decap's attack surface is the editor's Git account and the CMS script in their browser.
- **Performance by default.** Pages are pre-built HTML served from a CDN, so there is no PHP or database work per request. WordPress can be made fast with page caching and a CDN, but that is something you set up and maintain.
- **Every change is a Git commit.** Full history, diffs, blame and one-click revert for every field, free. Content follows your branches and deploy previews, and developers can review content changes in pull requests.
- **Your content is plain files.** Markdown with front matter, readable without any CMS. Switching away from Decap means simply not using it any more. Leaving WordPress means exporting from a database and dealing with shortcodes, block markup and plugin data.
- **Developers keep their tools.** Content lives next to the code, so a developer can edit it in a code editor, script bulk changes, or use AI coding tools on it (see [Working with AI](/docs/working-with-ai/)), while editors use the web UI.
- **Any static site generator.** Hugo, Astro, Eleventy, Jekyll, Next.js, Nuxt, Gatsby, Docusaurus and VitePress read the files Decap writes. WordPress themes are PHP; using another front end means running WordPress headless.
- **Free review workflow.** Decap's draft, in review and ready workflow runs as pull or merge requests on GitHub, GitLab, Bitbucket, Azure, Forgejo, Git Gateway and Turbo. WordPress has a "pending review" status, but multi-step approval workflows need plugins.
- **Who controls it.** Decap is MIT-licensed, distributed through npm and CDNs, and maintained by a company with an income of its own ([State of Decap](/state-of-decap/)). WordPress is GPL software anyone can fork, but its update and plugin infrastructure, WordPress.org, is owned by WordPress co-founder Matt Mullenweg, as reported in coverage of the dispute below.

### Headless WordPress, a middle path

You can keep WordPress for editing and build the front end with a framework. WordPress has a REST API in core, and the [WPGraphQL](https://www.wpgraphql.com/) plugin (version {{< stat github="wp-graphql/wp-graphql" metric="latest-release" >}}, released {{< stat github="wp-graphql/wp-graphql" metric="latest-release-date" >}}, more than 30,000 active installs) adds a GraphQL API. Astro's [WordPress migration guide](https://docs.astro.build/en/guides/migrate-to-astro/from-wordpress/) describes this option. Editors keep the dashboard they know, and visitors get a fast static or server-rendered site. The cost is that you now run two things: WordPress still needs hosting and patching, even though it no longer faces visitors, and many plugins that output HTML (forms, shortcodes, page builders) don't work through the API. If editors are happy to switch, Decap removes the server entirely; if they need the WordPress dashboard, headless WordPress is a reasonable compromise.

### Multilingual sites

WordPress has no multilingual content in core. The two main plugins are [Polylang](https://polylang.pro/pricing/) (free on WordPress.org; Polylang Pro from €99/year, Business Pack from €139/year) and [WPML](https://wpml.org/purchase/) (Multilingual Blog €39/year for 1 production site, Multilingual CMS €99/year for 3, Multilingual Agency €199/year for unlimited sites). WordPress core also has Multisite, which some sites use with one site per language. Decap has [i18n](/docs/i18n/) built in: one entry can hold every locale, stored as multiple folders, multiple files, or a single file per locale, and your static site generator handles the language routing.

### The WordPress.org and WP Engine dispute

This matters for the "who controls it" question, so here is what happened, as neutrally as we can put it. On 20 September 2024, WordPress co-founder Matt Mullenweg, who is also CEO of Automattic, publicly criticised the hosting company WP Engine. WordPress.org then blocked WP Engine's access to its plugin and theme servers, and in early October WP Engine sued Automattic and Mullenweg. On 12 October 2024 the WordPress security team forked WP Engine's Advanced Custom Fields plugin as Secure Custom Fields and switched its WordPress.org listing to the fork. On 10 December 2024 a US federal court granted WP Engine a preliminary injunction that restored its access to WordPress.org and to the plugin's listing. In September 2026 the court let WP Engine's antitrust claims proceed and dismissed some other claims on both sides; the case is ongoing.

What it shows: WordPress the software is GPL and can't be taken away from anyone, but WordPress.org, where most sites get core, plugin and theme updates, is owned by Mullenweg (as TechCrunch reported in its coverage of the case), and its policies can change quickly. For most site owners nothing changed day to day. Whether that risk matters for your project is your call.

## Cost

Assumptions: one site, with modest traffic; domain names left out of every case. WordPress.com prices are per site, in US dollars excluding tax, and its pricing page lists no per-user charge. For a managed WordPress host we use Kinsta's list prices as one example; cheaper shared hosting exists, and prices vary widely. For Decap we assume a free static hosting tier, such as Cloudflare Pages (500 builds a month on the free plan). Premium themes and plugins are optional and left out unless noted. Decap Turbo is billed monthly in euros, tax included.

### A solo developer or small business site, 1 to 2 editors

| Option | Cost | Notes |
|---|---|---|
| Decap CMS on a free static host | €0 | Editors log in with their Git host account. On GitHub you need an OAuth proxy, unless you use Netlify's or Turbo |
| Decap CMS + Turbo Free | €0 | 1 site, 1 seat |
| Decap CMS + Turbo Pro | €19/month | 1 site, up to 5 seats; needed for the second editor if both log in through Turbo |
| WordPress.com Personal | $4/month billed yearly ($48/year), or $9 monthly | 6 GB storage; plugins allowed on all paid plans |
| WordPress.com Business | $25/month billed yearly ($300/year), or $40 monthly | 50 GB storage |
| Self-hosted WordPress on Kinsta | $350/year, or $35 monthly | Kinsta's cheapest plans (e.g. Single 35k: 1 site, 35,000 visits a month) |
| Add multilingual | +€39 to €99/year | WPML Multilingual Blog, or Polylang Pro; free Polylang also works |

### A team of 10 editors

| Option | Cost | Arithmetic |
|---|---|---|
| Decap CMS on a free static host | €0 | Each editor needs write access on your Git host |
| Decap CMS + Turbo Pro | €49/month | €19 (5 seats) + 5 × €6 extra seats |
| WordPress.com Business | $25/month billed yearly | Same as for one editor; no per-user price |
| Self-hosted WordPress on Kinsta | from $350/year | Same hosting; more editors usually means more plugins (workflow, roles, SEO) rather than more hosting |

In money, WordPress for a team is cheap: users are free. The larger cost on either side is people's time. With WordPress that is updates, plugin licences, backups and fixing what breaks after an update; with Decap it is a developer setting up templates and the build, and helping editors with Git logins if you don't use Turbo.

## Security and maintenance

**What you run with self-hosted WordPress:** the operating system or hosting account, a web server, PHP (WordPress recommends PHP 8.3 or greater), MySQL 8.0+ or MariaDB 10.11+, HTTPS, WordPress core, every plugin and theme, and backups. Only the latest WordPress version is actively supported; security fixes are backported to older branches as a courtesy. In 2026, 7.1.1 (September) and 7.1.3 (6 October) were security releases. Core can update itself automatically, and managed hosts and WordPress.com take over the server side.

**Plugins are where the risk is.** Patchstack's State of WordPress Security in 2026 report counted 11,334 new vulnerabilities in the WordPress ecosystem in 2025, about 42% more than in 2024: 91% in plugins, 9% in themes, and 6 in WordPress core. 46% had no fix from the developer at the time they were made public, and Patchstack reports a weighted median of 5 hours to first exploitation. So a WordPress site is as safe as its least-maintained plugin, and keeping the plugin list short and updated is the main job.

**With Decap CMS** there is no server or database of its own: the published site is static, the Git host is the gatekeeper, and every change is a commit you can review and revert. You still update the Decap script now and then, keep your static site generator's dependencies current, and on GitHub you may run a small OAuth proxy. Decap publishes each fixed vulnerability as a security advisory; see [State of Decap](/state-of-decap/#security) and our [security policy](https://github.com/decaporg/decap-cms/security/policy).

## Moving from WordPress to Decap CMS

### 1. Export your content

In WordPress, go to Tools → Export and choose **All content**. You get one WXR (XML) file with posts, pages, custom post types, comments, custom fields, categories, tags, custom taxonomies, menus and users. It doesn't contain the media files themselves, only their URLs, so keep the old site online until the images are downloaded.

### 2. Convert it to Markdown

These tools exist and are maintained:

- **[wordpress-export-to-markdown](https://github.com/lonekorean/wordpress-export-to-markdown)** (Node.js, {{< stat github="lonekorean/wordpress-export-to-markdown" metric="stars" >}} GitHub stars): run `npx wordpress-export-to-markdown` in the folder with your export file. It writes one Markdown file per post with front matter (by default title, date, categories, tags, cover image and draft status), includes pages, drafts and custom post types, and downloads images. With `--post-folders=true` (the default) each post gets its own folder with an `index.md` and an `images` folder. Astro's migration guide recommends it.
- **[wordpress-to-hugo-exporter](https://github.com/SchumacherFM/wordpress-to-hugo-exporter)** (a WordPress plugin, also usable from the command line or WP-CLI): exports posts, pages, taxonomies and post meta as Markdown with YAML front matter, plus a Hugo `config.yaml`. Because it runs inside WordPress, content passes through the `the_content` filter first, which expands many shortcodes. Comments need a small code change to export.
- **[jekyll-import](https://import.jekyllrb.com/docs/wordpress/)**: `jekyll-import wordpress` reads a self-hosted WordPress database directly (posts, categories, tags, optionally comments); `jekyll-import wordpressdotcom` reads an export file. It doesn't convert images or styling.
- **[@11ty/import](https://github.com/11ty/eleventy-import)**: `npx @11ty/import wordpress https://your-site.example` imports through the site's REST API, and `wordpressxml` reads an export file. It writes Markdown by default.

Expect to clean up the output. Block markup, embeds and page-builder layouts often come out as HTML inside the Markdown, which works but is awkward to edit.

### 3. What doesn't carry over

- **Comments.** Most exporters skip them or export them as data. A static site needs a separate comments service, or none.
- **Forms.** Contact Form 7, Gravity Forms and the like are server-side plugins. Use your host's form handling or a form service.
- **Shortcodes.** `[gallery]`, `[contact-form]` and plugin shortcodes remain as text unless your exporter expands them. Replace them with your site generator's shortcodes or components, or with [custom editor components](/docs/custom-widgets/) in Decap's Markdown widget.
- **Plugin data.** Custom fields from ACF, SEO titles and descriptions from Yoast or Rank Math, and settings stored by plugins live in post meta or their own tables. Check whether your exporter can include them as front matter (wordpress-to-hugo-exporter exports post meta; the others need configuration or a script), or copy the important ones by hand.
- **Users, roles and passwords.** Editors get Git host accounts, or Turbo invitations with [roles](/docs/turbo-roles-and-members/).
- **Dynamic features**: search, related posts, memberships and shop pages need static equivalents or separate services.

### 4. Keep your URLs

WordPress URLs usually look like `/2024/05/post-slug/` or `/post-slug/`. Either reproduce the same permalink structure in your static site generator, or add redirects on your new host. If you use the [Redirection](https://redirection.me/support/import-export-redirects/) plugin, it can export your redirects as CSV, `.htaccess` or Nginx rules. Don't forget category and tag archives, feeds (`/feed/`) and attachment pages.

### 5. Set up Decap CMS

Add `/admin/index.html` and a `config.yml` to your site ([install guide](/docs/install-decap-cms/)) and [choose a backend](/docs/choosing-a-backend/). Describe each content type as a collection whose fields match your front matter. For the folder-per-post output of `wordpress-export-to-markdown`, a [folder collection](/docs/collection-folder/) with `path: '{{slug}}/index'` and `media_folder: ''` with `public_folder: ''` keeps each post's new uploads in its own folder, next to `index.md`; images the exporter already wrote stay where they are and keep working. Categories and tags become `list` or `select` widgets, custom fields become widgets of the matching type, and the post body uses the `markdown` widget. If you're starting fresh, a [template](/docs/start-with-a-template/) gives you a working site and config.

### Moving the other way

From Decap to WordPress: WordPress's importer reads WXR files and RSS feeds, not Markdown, so the usual route is a short script that reads each Markdown file and its front matter (for example with `gray-matter`), converts the body to HTML, and creates posts through the WordPress REST API with an application password. Upload images to the Media Library first and rewrite their URLs.

## Which to choose

Choose Decap CMS if:

- a developer builds and maintains the site with a static site generator or framework;
- the site is mostly pages, posts and docs that change daily or less often;
- you want no server, database or plugins to patch, and a static site on a CDN;
- you want content as Markdown in Git, with full history and review in pull requests;
- your editors are fine with a form-based editor and a preview pane, and have Git accounts or use Decap Turbo.

Choose WordPress if:

- the person running the site isn't a developer and there's no developer on hand;
- you need e-commerce, memberships, bookings, a forum or other plugin-driven features;
- you need comments, forms and user accounts on the site itself;
- editors want visual block editing, scheduled posts and WordPress roles without Git accounts;
- you have tens of thousands of posts, or content must be live the moment it's published;
- you or your host will keep core, PHP and plugins updated.

Consider headless WordPress if editors must keep the WordPress dashboard but you want a modern front end, and you're willing to run both.

## Frequently asked questions

### Is Decap CMS a WordPress alternative?

For sites a developer builds with a static site generator, yes: blogs, marketing sites, documentation and portfolios. It's not a drop-in replacement, because Decap only edits content; it has no themes, plugins, e-commerce, comments or forms, and someone has to set up the site and the build.

### What is the best WordPress alternative for Hugo?

For editing Hugo content in a browser, Git-based CMSs such as Decap CMS work directly with Hugo's Markdown files and front matter; see our [Hugo guide](/docs/hugo/). To compare Decap with other Git-based options, see [Decap CMS vs other Git-based CMSs](/compare/git-based-cms/). To bring existing content over, `wordpress-to-hugo-exporter` and `wordpress-export-to-markdown` both produce Hugo-ready Markdown.

### Is WordPress free?

The software is free and GPL-licensed, but you pay for hosting that runs PHP and a database. WordPress.com has a free plan with 1 GB of storage and no plugins; paid plans start at $4/month billed yearly ($9 monthly). Many plugins and themes are free, with paid versions or add-ons.

### Can I migrate from WordPress to Markdown?

Yes. Export with Tools → Export, then convert the XML with `wordpress-export-to-markdown`, or export from inside WordPress with `wordpress-to-hugo-exporter`. Posts, pages, categories, tags and images carry over well; comments, forms, shortcodes and plugin data need separate handling.

### Is a static site with Decap more secure than WordPress?

There is much less to attack: no PHP, database or plugins on the live site, and changes go through your Git host's login and permissions. That doesn't make it immune: editors' Git accounts and your build dependencies still need care. WordPress can be run securely too, but it takes ongoing updates, and 91% of WordPress vulnerabilities found in 2025 were in plugins (Patchstack).

### Can I keep WordPress and use a static site generator?

Yes, by running WordPress headless: editors keep using the dashboard, and your site generator fetches content through the REST API or WPGraphQL at build time. You still host and patch WordPress, and plugins that output HTML on the page may not work.

### Does Decap CMS have scheduled posts, comments or revisions?

No scheduled publishing and no comments. Revisions are your Git history: every save is a commit you can compare and revert, but Decap has no revisions screen for editors. Some static sites schedule posts by building on a timer and hiding future-dated entries in the template.

## Sources

[W3Techs WordPress usage](https://w3techs.com/technologies/details/cm-wordpress), [WordPress.com pricing](https://wordpress.com/pricing/) and [plugins on WordPress.com](https://wordpress.com/support/plugins/), [WordPress requirements](https://wordpress.org/about/requirements/), [WordPress license](https://wordpress.org/about/license/), [Roles and Capabilities](https://wordpress.org/documentation/article/roles-and-capabilities/), [Tools Export screen](https://wordpress.org/documentation/article/tools-export-screen/), [WordPress 5.0 release](https://wordpress.org/news/2018/12/bebo/), [WordPress 7.0](https://wordpress.org/news/2026/05/armstrong/), [WordPress 7.1](https://wordpress.org/news/2026/08/mary-lou/), [WordPress 7.1.3 security release](https://wordpress.org/news/2026/10/wordpress-7-1-3-maintenance-and-security-release/), [WordPress 7.1.4](https://wordpress.org/news/2026/10/wordpress-7-1-4/), plugin and theme counts from the WordPress.org plugin and theme APIs, [Patchstack: State of WordPress Security in 2026](https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/), [WPGraphQL](https://wordpress.org/plugins/wp-graphql/), [Polylang pricing](https://polylang.pro/pricing/), [WPML pricing](https://wpml.org/purchase/), [Kinsta pricing](https://kinsta.com/pricing/), [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/), [Redirection import and export](https://redirection.me/support/import-export-redirects/), [wordpress-export-to-markdown](https://github.com/lonekorean/wordpress-export-to-markdown), [wordpress-to-hugo-exporter](https://github.com/SchumacherFM/wordpress-to-hugo-exporter), [jekyll-import WordPress](https://import.jekyllrb.com/docs/wordpress/) and [WordPress.com](https://import.jekyllrb.com/docs/wordpressdotcom/) importers, [@11ty/import](https://github.com/11ty/eleventy-import), [Astro: migrating from WordPress](https://docs.astro.build/en/guides/migrate-to-astro/from-wordpress/). On the WP Engine dispute: [WordPress.org on Secure Custom Fields](https://wordpress.org/news/2024/10/secure-custom-fields/) (12 October 2024), [TechCrunch on the preliminary injunction](https://techcrunch.com/2024/12/10/court-orders-mullenweg-and-automattic-to-restore-wp-engines-access-to-wordpress-org) (10 December 2024), [Search Engine Journal on the September 2026 ruling](https://www.searchenginejournal.com/automattic-matt-mullenweg-fail-to-dismiss-wp-engine-antitrust-claims/591210/). Decap facts from [State of Decap](/state-of-decap/) and the [Decap Turbo](/turbo/) page.
