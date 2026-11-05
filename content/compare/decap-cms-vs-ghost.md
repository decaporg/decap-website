---
title: Decap CMS vs Ghost
linkTitle: Decap CMS vs Ghost
description: Ghost is a publishing platform with newsletters and paid memberships built in; Decap edits Markdown in Git for static sites. Costs, migration, who each suits.
group: other
weight: 37
date: 2026-11-04
---

We make Decap CMS, so read this with that in mind. Every fact about Ghost below comes from Ghost's own site, docs or repository and is linked in the sources; if something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

Ghost(Pro) prices are in US dollars; Decap Turbo prices are in euros, tax included.

## In short

- **Ghost is a publishing business in a box.** Newsletters, free and paid memberships through Stripe, member-only content, native comments and analytics are built in. Decap CMS has none of these: it edits Markdown files in Git for a static site.
- **Choose Ghost** if you publish a newsletter, sell subscriptions, or want a hosted blog that a writer can run alone. It is the clearly better tool for that.
- **Choose Decap CMS** for a website a developer builds with a static site generator, such as a marketing site, documentation or a blog that is part of a larger site, where you want content as files in Git and nothing to host.
- **Ghost(Pro) is priced by audience size.** From $15/month (Starter, billed yearly) for 1,000 members and one staff user; Publisher, with paid subscriptions and 3 staff users, from $29/month. Self-hosting Ghost is free software but needs a Node.js server, MySQL and Mailgun for newsletters.

## At a glance

| | Decap CMS | Ghost |
|---|---|---|
| **What it is** | Git-based CMS: a single-page React app added to your site at `/admin/` | Publishing platform: a Node.js app with themes, members, newsletters and APIs |
| **Where content lives** | Markdown, YAML, JSON or TOML files in your Git repository | A MySQL database |
| **What you run** | Nothing; it runs in the editor's browser | Ghost(Pro), or your own server: Ubuntu, Node.js 22, MySQL 8, NGINX, at least 1 GB of RAM |
| **License** | MIT | MIT |
| **Price** | Free. Optional [Decap Turbo](/turbo/): Free plan, Pro €19/month | Self-hosted free; Ghost(Pro) from $15/month billed yearly ($18 monthly) |
| **Free plan** | Everything; Turbo Free is 1 site and 1 seat | No free hosted plan; Ghost(Pro) plans offer a free trial |
| **Editors' login** | Through the Git host (OAuth), or Turbo | Ghost staff accounts |
| **Roles** | The editor's Git permissions; CMS roles with Turbo | Contributor, Author, Editor, Administrator, Owner |
| **Editing and preview** | Forms with a live side-by-side preview; custom React preview templates | A rich editor with cards for images, galleries, video, audio, embeds and more; preview in your theme |
| **Editorial workflow** | Draft, in review, ready, as pull/merge requests | Drafts, scheduled posts and newsletters; Contributors submit drafts for others to publish |
| **Newsletters and members** | None | Built in: free and paid members, tiers, newsletters, Stripe payments |
| **i18n** | Built in | We couldn't find multilingual content in Ghost's docs; theme strings can be translated |
| **Media** | Files in the repository; Cloudinary, Uploadcare, custom libraries | Uploaded to Ghost's storage |
| **Extensibility** | Custom widgets, previews, backends, media libraries, event hooks | Handlebars themes, integrations and webhooks, Content and Admin APIs |
| **Front ends** | Any static site generator or framework that reads files | Ghost's own themes; or headless through the Content API |
| **Maintained by** | PM d.o.o. and contributors | The Ghost Foundation, a non-profit with about 42 staff |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} | {{< stat github="TryGhost/Ghost" metric="latest-release" >}}, {{< stat github="TryGhost/Ghost" metric="latest-release-date" >}} |
| **Activity** | {{< stat github="decaporg/decap-cms" metric="stars" >}} GitHub stars; {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} npm downloads a week on average in {{< period >}} | {{< stat github="TryGhost/Ghost" metric="stars" >}} GitHub stars |

## How they work

Ghost is a complete publishing application. It runs as a Node.js service with a MySQL database, renders your site through a Handlebars theme, manages members and their subscriptions, and sends each post as an email newsletter if you want it to. Writers work in Ghost Admin; readers can sign up, log in, pay and comment on the site itself. Ghost 6.0 (4 August 2025) added native analytics and a connection to the social web through ActivityPub, both as services that run alongside Ghost. You can also use Ghost headless: the read-only Content API returns posts, pages, tags, authors, tiers and settings as JSON, with post bodies as HTML.

Decap CMS is not an application you deploy. It's a JavaScript app that you add to your site as `/admin/index.html` with a `config.yml`. It runs in the editor's browser and commits Markdown files to your Git repository through your Git host's API; a static site generator builds the site from those files. There is no database, no reader accounts and no email.

So the products don't compete for the same job. Ghost is for building an audience you publish to and earn from. Decap is for editing the content of a website that is built from files. For the general trade-offs between database-backed and Git-based systems, see [Git-based vs API-first vs traditional CMS](/compare/git-based-vs-headless-vs-traditional-cms/).

## Where Ghost is ahead

- **Newsletters built in.** Every post can go out by email to your members, with multiple newsletters, segments and email analytics. Decap has no email at all; with a static site you'd add a separate newsletter service.
- **Memberships and paid subscriptions.** Free and paid members, monthly and yearly tiers, offers, gift subscriptions and member-only content, with payments through Stripe and 0% transaction fees from Ghost on paid plans (Stripe's own fees apply). Decap has nothing comparable.
- **An audience on the site.** Native comments for members (all members or only paying ones), sign-up and login, and native analytics for web traffic, newsletters and subscriptions. Decap has no comments, analytics or user accounts.
- **A writing-first editor.** Ghost's editor is designed for long-form writing, with cards for galleries, video, audio, bookmarks and embeds. Decap's Markdown widget is good for structured pages and posts, but it's a form field with a preview beside it.
- **Scheduled publishing.** Posts and newsletters can be scheduled for a later date. Decap has no scheduled publishing.
- **Roles without Git accounts.** Five staff roles, from Contributor (writes drafts, can't publish) to Owner. With Decap, editors need an account on your Git host or a [Decap Turbo](/turbo/) invitation, and CMS-level roles need Turbo.
- **Hosted and run for you.** On Ghost(Pro) a writer can start without a developer, a repository or a build step.
- **Instant publishing.** A Ghost post is live as soon as you publish. A Decap change waits for the static site to rebuild.

## Where Decap CMS is ahead, or different

- **Nothing to run.** No Node.js server, MySQL database, NGINX, email provider or backups. Self-hosted Ghost needs all of these; Ghost(Pro) runs them for a monthly fee.
- **Any site generator, any design.** Decap works with Hugo, Astro, Eleventy, Jekyll, Next.js, Nuxt, Gatsby, Docusaurus, VitePress and others, and with whatever templates you write. Ghost sites use Handlebars themes, or the Content API if you build your own front end and keep Ghost running.
- **Structured content of any shape.** Decap collections can model products, team members, landing-page sections, docs and settings, with widgets such as lists, objects, relations, selects and maps. Ghost is built around posts, pages, tags and authors.
- **Multilingual content.** Decap has [i18n](/docs/i18n/) built in, with one entry holding every locale. We couldn't find a built-in way to publish one post in several languages in Ghost's docs.
- **Content as files, history as commits.** Your posts are Markdown in your repository. Every save is a Git commit you can diff and revert, content follows branches and deploy previews, and developers can edit it in a code editor. Leaving Decap means simply not using it any more.
- **Part of a larger site.** Decap edits the blog, the docs and the marketing pages of the same static site together. Ghost is usually its own site, or a subdomain, next to your main one.
- **No per-audience pricing.** Decap and Turbo don't charge by visitors, members or subscribers. Ghost(Pro) prices rise with your member count.

## Cost

Assumptions: Ghost(Pro) prices are in US dollars, per site; the yearly-billed price is shown per month. "Members" are people who sign up on your Ghost site, free or paid; staff users who can publish count towards the plan limit, while Contributors are free. For self-hosted Ghost we quote Ghost's own estimate from its hosting page. For Decap we assume a free static hosting tier and no newsletter, so this isn't a like-for-like comparison: if you need newsletters or paid memberships, add the price of a separate service to the Decap rows.

### Ghost(Pro) plans

| Members | Starter | Publisher | Business |
|---|---|---|---|
| Up to 1,000 | $15 yearly ($18 monthly) | $29 yearly ($35 monthly) | $199 yearly ($239 monthly) |
| Up to 2,500 | — | $46 yearly ($55 monthly) | $199 yearly ($239 monthly) |
| Up to 10,000 | — | $88 yearly ($105 monthly) | $199 yearly ($239 monthly) |
| Up to 25,000 | — | $141 yearly ($169 monthly) | $266 yearly ($319 monthly) |
| Up to 100,000 | — | $274 yearly ($329 monthly) | $399 yearly ($479 monthly) |
| Staff users | 1 | 3 | 15 |
| Custom themes | No (official themes) | Yes | Yes |
| Paid subscriptions | No | Yes | Yes |

Per month, from Ghost's pricing page. Yearly prices are the yearly total divided by 12 (for example, Publisher at 10,000 members is $1,056 a year).

### A solo developer or small business, 1 to 2 editors

| Option | Monthly cost | Notes |
|---|---|---|
| Decap CMS on a free static host | €0 | Editors log in with their Git host account. On GitHub you need an OAuth proxy, unless you use Netlify's or Turbo |
| Decap CMS + Turbo Free | €0 | 1 site, 1 seat |
| Decap CMS + Turbo Pro | €19 | 1 site, up to 5 seats |
| Ghost(Pro) Starter | $15 billed yearly ($18 monthly) | 1 staff user, up to 1,000 members, official themes, no paid subscriptions |
| Ghost(Pro) Publisher | $29 billed yearly ($35 monthly) | 3 staff users, up to 1,000 members, custom themes, paid subscriptions |
| Ghost, self-hosted | from about $25 | Ghost's estimate: from $10/month for a server plus from $15/month for newsletter email; more for a CDN, analytics and backups |

### A team of 10 editors

| Option | Monthly cost | Arithmetic |
|---|---|---|
| Decap CMS on a free static host | €0 | Each editor needs write access on your Git host |
| Decap CMS + Turbo Pro | €49 | €19 (5 seats) + 5 × €6 extra seats |
| Ghost(Pro) Business | $199 billed yearly ($239 monthly) | 15 staff users, up to 10,000 members |
| Ghost(Pro) Publisher with Contributors | $29 billed yearly, up to 1,000 members | 3 staff users who publish, and 7 Contributors (free) who write drafts but can't publish |
| Ghost, self-hosted | from about $25 | Unlimited staff; you run the server, MySQL and Mailgun |

## Security and maintenance

With self-hosted Ghost you run a public web application: Ubuntu (22.04, 24.04 or 26.04 LTS), Node.js 22 LTS, MySQL 8.0 or 8.4, NGINX with TLS, a systemd service, backups, and Mailgun for bulk email (Ghost's docs say it is currently the only supported bulk email provider). Ghost ships often: it published {{< stat github="TryGhost/Ghost" metric="releases" >}} stable releases in {{< period >}}. Its install tooling is changing too: Ghost's docs say Ghost-CLI is being phased out in favour of Docker Compose, which is still a preview. On Ghost(Pro), Ghost runs and updates all of this for you.

Ghost also holds personal data: member email addresses, and through Stripe, your paying subscribers. That data needs protecting and is subject to privacy law wherever your readers are.

With Decap CMS there is no server or database of its own: the published site is static, the Git host is the gatekeeper, and every change is a commit you can review and revert. You still update the Decap script now and then, and on GitHub you may run a small OAuth proxy. Decap holds no reader data. Decap publishes each fixed vulnerability as a security advisory; see [State of Decap](/state-of-decap/#security).

## Moving from Ghost to Decap CMS

1. **Export everything.** In Ghost Admin, go to Settings → Advanced → Import/Export → Export and choose **All data**. You get a zip with your content and settings as JSON, members as CSV, post analytics as CSV, your themes, and `routes.yaml` and `redirects.yaml`. On Ghost(Pro) the export also includes your media files; on a self-hosted site, copy the media from your server.
2. **Convert posts to Markdown.** Two routes:
    - **[@11ty/import](https://github.com/11ty/eleventy-import)**: `npx @11ty/import ghost https://your-site.example` reads your public posts through the Content API (it finds the public key from Ghost's search, or takes `GHOST_CONTENT_API_KEY`) and writes Markdown files. Ghost support is listed as experimental. Despite the name, the output works for any static site generator.
    - **A short script** against the [Content API](https://docs.ghost.org/content-api/), which returns each post's `html`, title, slug, dates, tags, authors, feature image and SEO fields. Convert the HTML with a library such as Turndown and write one file per post with front matter. The Content API only returns published content, so export drafts separately.
    - [ghost-to-md](https://www.npmjs.com/package/ghost-to-md) converts the JSON export directly, but its last release was in June 2022, so check its output against a current export before relying on it.
3. **Move the images.** Download them from the export or your server, put them in your repository (or a media library), and rewrite the URLs in the Markdown.
4. **Rebuild the theme.** Ghost themes are Handlebars templates; recreate the layouts in your static site generator, or start from a [template](/docs/start-with-a-template/).
5. **Keep your URLs.** Ghost's default post URL is `/slug/`. Reproduce it in your site generator, and turn `redirects.yaml` into your new host's redirect rules.
6. **Set up Decap CMS.** Add `/admin/index.html` and a `config.yml` ([install guide](/docs/install-decap-cms/)), and define a [folder collection](/docs/collection-folder/) for posts with fields for your front matter: title, date, tags (a `list` or `relation` widget), feature image (`image`), excerpt and SEO fields (`string`/`text`), and the body (`markdown`).

What doesn't carry over: newsletters and the email list, members and their logins, paid subscriptions, comments, member-only content gating, analytics, scheduled posts and staff roles. Your members CSV can go to a newsletter service; paid subscriptions live in your Stripe account and need a platform that can take them over. If those are central to your site, that's a strong sign to stay on Ghost.

**Moving the other way**, Ghost's docs have migration guides from WordPress, Substack, Medium, Mailchimp and others. For Markdown files, the simplest route is a script that converts each body to HTML and creates posts through the [Admin API](https://docs.ghost.org/admin-api/) with `?source=html`; Ghost notes that the conversion to its editor format is lossy, so check the results.

## Which to choose

Choose Decap CMS if:

- a developer builds the site with a static site generator or framework;
- the content is a website (pages, docs, a blog section, structured data), not a newsletter business;
- you need multilingual content or content types beyond posts and pages;
- you want content as Markdown in Git, with history and review in pull requests;
- you don't want to host Node.js, MySQL and an email provider, or pay by audience size.

Choose Ghost if:

- you publish a newsletter and want posts and emails in one place;
- you sell paid subscriptions or gate content for members;
- you want comments, sign-ups and analytics on the site without extra services;
- a writer runs the publication alone, without a developer;
- you want scheduled posts and a writing-first editor.

## Frequently asked questions

### Is Decap CMS a Ghost alternative?

Only for the website part. If you use Ghost as a blog engine for a site, Decap with a static site generator can replace it. If you use Ghost for newsletters, memberships or paid subscriptions, Decap is not an alternative, because it has none of those.

### Is Ghost free?

Ghost is free, MIT-licensed software if you host it yourself, on a Node.js server with MySQL and Mailgun for newsletters. Ghost(Pro), the hosted service run by the non-profit Ghost Foundation, starts at $15/month billed yearly for up to 1,000 members.

### Can I use Ghost as a headless CMS?

Yes. The read-only Content API serves posts, pages, tags, authors, tiers and settings as JSON to any front end, using a Content API key that is safe to use in browsers. You still run Ghost (or pay for Ghost(Pro)), and member and newsletter features are tied to Ghost's own front end.

### Can I migrate from Ghost to Markdown?

Yes. Export your data from Settings → Advanced → Import/Export, then convert posts with `npx @11ty/import ghost` (experimental) or a short script against the Content API. Images, tags and SEO fields carry over; members, subscriptions, comments and newsletters don't.

### Can I use Decap CMS with Hugo, Astro or Eleventy?

Yes. Decap writes Markdown files that Hugo, Astro, Eleventy, Jekyll, Next.js, Nuxt and other generators read directly; see [installing Decap CMS](/docs/install-decap-cms/) and the [Hugo guide](/docs/hugo/).

### Can I add a newsletter to a site that uses Decap CMS?

Not through Decap itself. A common approach is a separate newsletter service that sends from your site's RSS feed or has its own editor. Ghost does this in one product, which is its main advantage.

## Sources

[Ghost(Pro) pricing](https://ghost.org/pricing/) (including its pricing data), [Ghost features](https://ghost.org/features/), [Hosting Ghost](https://docs.ghost.org/hosting/), [Ubuntu install guide](https://docs.ghost.org/install/ubuntu), [Docker install guide](https://docs.ghost.org/install/docker), [Newsletters and Mailgun](https://docs.ghost.org/newsletters), [Content API](https://docs.ghost.org/content-api/) and [posts](https://docs.ghost.org/content-api/posts), [Admin API: creating a post](https://docs.ghost.org/admin-api/posts/creating-a-post), [themes and Handlebars](https://docs.ghost.org/themes/), [migration guides](https://docs.ghost.org/migration), [exports](https://ghost.org/help/exports/), [commenting](https://ghost.org/help/commenting/), [managing your team](https://ghost.org/help/managing-your-team/), [publishing and scheduling](https://ghost.org/help/publishing-content/), [Ghost 6.0](https://ghost.org/changelog/6/), [about Ghost](https://ghost.org/about/), [Ghost on GitHub](https://github.com/TryGhost/Ghost), [@11ty/import](https://github.com/11ty/eleventy-import), [ghost-to-md on npm](https://www.npmjs.com/package/ghost-to-md). Stars and releases from the GitHub API. Decap facts from [State of Decap](/state-of-decap/) and the [Decap Turbo](/turbo/) page.
