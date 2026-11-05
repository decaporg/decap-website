---
title: Decap CMS vs Webflow
linkTitle: Decap CMS vs Webflow
description: Webflow is a hosted visual site builder with a CMS; Decap edits Markdown in Git for a static site you own. Prices, CMS limits, lock-in and who each suits.
group: other
weight: 38
date: 2026-11-04
---

We make Decap CMS, so read this with that in mind. Every fact about Webflow below comes from Webflow's own pricing page and help centre and is linked in the sources; if something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

Webflow's prices are in US dollars, per site or per seat, plus tax; Decap Turbo prices are in euros, tax included. Webflow changed its plans on 13 May 2026, so older articles about Webflow pricing are out of date.

## In short

- **Webflow is a visual site builder with hosting and a CMS in one product.** Designers build pages on a canvas without writing code, and editors update content in the same tool. Decap CMS is only an editing interface: it commits Markdown files to your Git repository, and a static site generator builds the site from them.
- **Choose Webflow** if a designer, not a developer, builds and runs the site, and you want visual building, hosting, forms and site search included.
- **Choose Decap CMS** if a developer builds the site with code, you want to own the content and the code as files in Git, and you don't want to pay per editor or by CMS item count.
- **Webflow's CMS starts on the Premium site plan** at $25/month billed yearly ($39 monthly), with 20,000 CMS items. Each content editor needs a Limited seat at $15/month billed yearly ($19 monthly).
- **Leaving Webflow takes work.** Code export leaves out all CMS content, and CMS Collections come out as CSV files, one per Collection and locale. Decap content is plain files in your repository from the start.

## At a glance

| | Decap CMS | Webflow |
|---|---|---|
| **What it is** | Git-based CMS: a single-page React app added to your site at `/admin/` | Hosted visual website builder with a CMS, hosting and forms |
| **Where content lives** | Markdown, YAML, JSON or TOML files in your Git repository | Webflow's database, on Webflow's hosting |
| **What you run** | Nothing; it runs in the editor's browser. The site is static files on any host | Nothing; Webflow hosts the site. It can't be self-hosted with the CMS |
| **License** | MIT | Proprietary |
| **Price** | Free. Optional [Decap Turbo](/turbo/): Free plan, Pro €19/month | Site plans from $15/month billed yearly; CMS from $25/month (Premium); seats extra |
| **Free plan** | Everything; Turbo Free is 1 site and 1 seat | Starter: webflow.io domain, 2 static pages, 50 CMS items, 1 GB bandwidth, 50 form submissions |
| **CMS limits** | No item limit from Decap; fine to thousands of entries per collection | 20,000 items and 40 Collections on Premium; 100 Collections on Team |
| **Editors' login** | Through the Git host (OAuth), or Turbo | Webflow accounts, each on a paid seat (Limited seat for content editors) |
| **Roles** | The editor's Git permissions; CMS roles with Turbo | Workspace and site roles (Admin, Designer, Marketer, Content editor, Reviewer); site-level roles on Growth |
| **Editing** | Forms with a live side-by-side preview | Visual canvas for designers; content editing on the page and in the CMS panel |
| **Preview** | Live preview pane, custom React templates | The real page, as you edit it |
| **Editorial workflow** | Draft, in review, ready, as pull/merge requests | Drafts, per-item and scheduled publishing on Premium; publishing workflows on Team |
| **i18n** | Built in | Webflow Localize add-on, from $9 per locale per month billed yearly |
| **Media** | Files in the repository; Cloudinary, Uploadcare, custom libraries | Webflow's asset library and CDN |
| **Extensibility** | Custom widgets, previews, backends, media libraries, event hooks | Custom code, code components, an MCP server, Data API |
| **Front ends** | Any static site generator or framework that reads files | Webflow's own renderer; CMS content also through its APIs |
| **Maintained by** | PM d.o.o. and contributors | Webflow, Inc. |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} | Continuous (SaaS) |

## How they work

Webflow is a hosted platform. A designer builds pages on a visual canvas that maps to HTML and CSS, connects CMS Collections (blog posts, team members, case studies) to templates, and publishes to Webflow's hosting and CDN. Content editors sign in to the same product and change text, images and Collection items, either on the page or in the CMS panel. Pricing has two parts: a **Site plan** per site (hosting, CMS limits, bandwidth) and a **Workspace plan** for the team (seats, staging, code export, roles). Since 5 October 2026 Webflow's legacy Editor is fully retired, so every editor needs a seat in the Workspace.

Decap CMS is not an application you deploy or a service you subscribe to. It's a JavaScript app that you add to your site as `/admin/index.html` with a `config.yml`. It runs in the editor's browser and commits Markdown files to your Git repository through your Git host's API; a static site generator such as Hugo, Astro or Eleventy builds the site, and any static host serves it. A developer writes the templates in code.

So the real difference is who builds the site and who owns what. With Webflow, a designer builds visually and Webflow holds the content, the hosting and the design tool. With Decap, a developer builds in code, and the content and code live in your repository. For the broader trade-offs, see [Git-based vs API-first vs traditional CMS](/compare/git-based-vs-headless-vs-traditional-cms/).

## Where Webflow is ahead

- **Visual building without code.** Designers lay out pages, styles, interactions and responsive breakpoints on a canvas and see the real result. Decap has no page builder or on-page editing: someone writes templates in code, and editors fill in forms with a preview beside them.
- **Everything in one product.** Hosting with a global CDN, forms (unlimited submissions on paid site plans), site search, backups and password protection are included or a plan away. With Decap you choose a static host and add forms or search from other services.
- **Editing in the design itself.** The Content editor role edits page content and CMS items inside Webflow, on the page as designed, without access to the design. Decap's editing is form-based.
- **Real-time collaboration.** Teammates can work on the same page at the same time. Decap has no real-time co-editing.
- **Scheduled and per-item publishing.** Premium lets you publish, unpublish or schedule individual CMS items. Decap has no scheduled publishing, and changes go live when the site rebuilds.
- **Roles without Git accounts.** Seats with Designer, Marketer, Content editor and Reviewer roles, plus free reviewer seats for comments. With Decap, editors need an account on your Git host or a [Decap Turbo](/turbo/) invitation, and CMS-level roles need Turbo.
- **E-commerce.** Webflow has e-commerce site plans from $29/month billed yearly (500 products, 2% transaction fee). Decap has no e-commerce.
- **No build or developer needed** to launch and change a site once it's designed.

## Where Decap CMS is ahead, or different

- **You own the content and the code.** Content is Markdown in your repository and templates are your own code. You can move host, change site generator or stop using Decap without exporting anything. With Webflow, the CMS and hosting are tied together (see lock-in below).
- **No per-editor or per-item pricing.** Decap is free for any number of editors and entries; Turbo Pro is €19/month for 5 seats plus €6 per extra seat. On Webflow every content editor needs a Limited seat ($15/month billed yearly), and CMS item limits are set by plan.
- **Any static site generator and host.** Hugo, Astro, Eleventy, Jekyll, Next.js, Nuxt, Gatsby, Docusaurus, VitePress, on Netlify, Cloudflare Pages, GitHub Pages, your own server or anywhere else that serves files.
- **Full history and review.** Every change is a Git commit you can diff and revert, content follows branches and deploy previews, and the [editorial workflow](/docs/editorial-workflows/) runs as pull or merge requests, free. Webflow's publishing workflows are on the Team plan.
- **Multilingual content without an add-on.** Decap's [i18n](/docs/i18n/) is built in. Webflow Localize is priced per locale, and code export only includes the primary locale.
- **Developers keep their tools.** Content lives next to the code, so developers edit it in their code editor, script bulk changes and review them in pull requests, while editors use the web UI.
- **Nothing to attack at runtime.** The published site is static files; there is no CMS on the live site at all.

### Lock-in, specifically

Webflow's code export (on paid Workspace plans only) gives you the HTML, CSS, JavaScript and images of your pages, but Webflow's help centre lists what it leaves out: CMS content and Collection lists (they show their empty state), e-commerce, user accounts, localized content (only the primary locale is exported), code components, form processing, site search and password protection. CMS Collections can be exported separately as CSV files, and the CSV only includes the locale you're viewing. So you can leave Webflow, but you rebuild the dynamic parts of the site elsewhere. That's a fair trade for many teams; just know it before you commit a large site.

## Cost

Assumptions: one site with a CMS (a blog or case studies), billed yearly unless noted, US dollars plus tax. On Webflow, the person who builds the site uses the Workspace's included full seat, and each content editor takes a Limited seat; a free Starter Workspace is enough unless you need code export or site-level roles. Freelancer and Agency Workspaces include free client seats (1 or 3 per site), which lowers the cost when an agency builds the site for a client. Premium includes 50 GB of bandwidth a month (100 GB is $20/month more). For Decap we assume a free static hosting tier, such as Cloudflare Pages (500 builds a month on the free plan), and no form or search service.

### A solo developer or small business, 1 to 2 editors

| Option | Monthly cost | Arithmetic and notes |
|---|---|---|
| Decap CMS on a free static host | €0 | Editors log in with their Git host account. On GitHub you need an OAuth proxy, unless you use Netlify's or Turbo |
| Decap CMS + Turbo Free | €0 | 1 site, 1 seat |
| Decap CMS + Turbo Pro | €19 | 1 site, up to 5 seats |
| Webflow Basic | $15 billed yearly ($25 monthly) | No CMS: only for sites without Collections |
| Webflow Premium, owner only | $25 billed yearly ($39 monthly) | 20,000 CMS items, custom domain |
| Webflow Premium, owner + 1 editor | $40 billed yearly ($58 monthly) | $25 + 1 Limited seat at $15 ($39 + $19 monthly) |
| Add code export | +$19 billed yearly ($28 monthly) | Core Workspace plan |

### A team of 10 editors

| Option | Monthly cost | Arithmetic |
|---|---|---|
| Decap CMS on a free static host | €0 | Each editor needs write access on your Git host |
| Decap CMS + Turbo Pro | €49 | €19 (5 seats) + 5 × €6 extra seats |
| Webflow Premium + 10 Limited seats | $175 billed yearly ($229 monthly) | $25 + 10 × $15 ($39 + 10 × $19 monthly) |
| The same with a Growth Workspace | $224 billed yearly | + $49 for site-level roles, publishing permissions and 301 redirects on staging sites |
| Webflow Team plan | $2,500 | Annual contract; 10 seats, Localize, publishing workflows |

To add one more language on Webflow, add Localize Essential at $9 per locale per month billed yearly ($12 monthly; up to 3 locales) or Localize Advanced at $29 per locale ($35 monthly; up to 10 locales, localized URLs). Webflow's price includes hosting, forms and search, which Decap leaves to other services; Decap's price includes no hosting because a static site can be hosted for free.

## Security and maintenance

With Webflow there is nothing for you to run or patch: Webflow hosts the site, the CMS and the editor, and you depend on Webflow for uptime, security and pricing. Your part is managing seats and access: who has a full seat, who can publish, and removing people who leave.

With Decap CMS there is no server or database of its own: the published site is static, the Git host is the gatekeeper, and every change is a commit you can review and revert. You do maintain more yourself: the static site generator and its dependencies, the hosting setup, and on GitHub possibly a small OAuth proxy. Decap publishes each fixed vulnerability as a security advisory; see [State of Decap](/state-of-decap/#security).

## Moving from Webflow to Decap CMS

1. **Export the code, if you want to reuse the design.** On a paid Workspace plan, use Main menu → Code export to download a zip of every page's HTML, CSS, JavaScript and images. Collection template pages come out empty, but the markup and classes are a useful starting point for templates in your static site generator.
2. **Export each CMS Collection as CSV.** In the CMS panel, open the Collection and export it (or select items and use Export). Repeat for every Collection and, on a localized site, for every locale. As an alternative, the [Webflow Data API](https://developers.webflow.com/data/reference/cms/collection-items/staged-items/list-items) lists Collection items as JSON.
3. **Convert rows to Markdown files.** We didn't find a maintained Webflow-to-Markdown converter, so this is a short script: read the CSV with a parser such as `csv-parse`, write one file per row with the fields as front matter, and convert rich text fields from HTML to Markdown with a library such as Turndown. Reference and multi-reference fields become slugs that Decap's [relation widget](/docs/widgets/relation/) can point to.
4. **Download the assets.** Image and file fields in the export are URLs on Webflow, so download the files into your repository (or a media library) and rewrite the paths before you cancel the plan.
5. **Rebuild what Webflow did for you.** Forms (use your host's forms or a form service), site search, password-protected pages, e-commerce and interactions that relied on Webflow's runtime.
6. **Keep your URLs.** Collection pages usually live at `/collection-slug/item-slug`. Reproduce that in your site generator, and recreate any redirects you set up in Webflow on your new host.
7. **Set up Decap CMS.** Add `/admin/index.html` and a `config.yml` ([install guide](/docs/install-decap-cms/)), and define one [folder collection](/docs/collection-folder/) per Webflow Collection, with a [widget](/docs/widgets/) for each field: `string` and `text` for plain text, `markdown` or `richtext` for rich text, `image`, `datetime`, `select` for options, `boolean` for switches and `relation` for references.

What doesn't carry over: interactions and animations built in Webflow's designer, forms and their submissions (export submissions separately), site search, e-commerce, user accounts and Webflow's roles.

**Moving the other way**, Webflow can import CSV files into a Collection. Turn your Markdown files into a CSV with a front matter parser such as `gray-matter`, convert the bodies to HTML, and import; check that your site plan's CMS item limit covers the number of entries.

## Which to choose

Choose Decap CMS if:

- a developer builds the site in code with a static site generator or framework;
- you want content and code as files in your own Git repository, on any host;
- you have many editors and don't want a per-seat price for each;
- you need multilingual content or more than Webflow's CMS item limits, without add-ons;
- you're fine adding forms or search from separate services.

Choose Webflow if:

- a designer builds and maintains the site, and there's no developer on the team;
- you want visual building, on-page editing and real-time collaboration;
- you want hosting, forms, search and backups in one subscription;
- you need scheduled publishing or small-shop e-commerce;
- the seat and plan prices fit your budget, and the export limits are acceptable to you.

## Frequently asked questions

### Is Decap CMS a Webflow alternative?

For the CMS part of a site that developers build, yes. For visual site building, no: Decap has no page builder, design canvas or hosting. Teams usually move from Webflow to Decap when they bring the site's development in-house or want to stop paying per editor.

### How much does Webflow's CMS cost?

The CMS starts on the Premium site plan at $25/month billed yearly ($39 monthly) per site, with 20,000 CMS items and 40 Collections. The free Starter plan includes 50 CMS items on a webflow.io domain. Each content editor needs a Limited seat at $15/month billed yearly ($19 monthly).

### Can I export my Webflow site?

You can export the HTML, CSS, JavaScript and images on a paid Workspace plan, but not the CMS content, e-commerce, user accounts, localized content, forms or site search. CMS Collections export separately as CSV, one locale at a time.

### Can I migrate from Webflow to Markdown?

Yes, with a script. Export each Collection as CSV (or read it through the Data API), write one Markdown file per item with front matter, convert rich text from HTML to Markdown, and download the images, since the export only contains their URLs.

### Does Webflow have a free plan?

Yes, the Starter site plan is free, on a webflow.io domain with 2 static pages, 50 CMS items, 1 GB of bandwidth and 50 form submissions. A custom domain needs a paid site plan, from $15/month billed yearly.

### Can I use Decap CMS with a visual editor?

Decap shows a live preview beside the form, rendered with your own preview templates, but it has no on-page or drag-and-drop editing. If visual editing in a Git-based CMS matters, see [Decap CMS vs other Git-based CMSs](/compare/git-based-cms/), which covers TinaCMS and CloudCannon.

## Sources

[Webflow pricing](https://webflow.com/pricing) (site, Workspace, seat, Localize and e-commerce prices from the page's price data), [Updated pricing and simplified plans for May 2026](https://help.webflow.com/hc/en-us/articles/51059955082387-Updated-pricing-and-simplified-plans-for-May-2026), [How do I export my Webflow site code?](https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code), [Collection items overview](https://help.webflow.com/hc/en-us/articles/33961289539347-Collection-items-overview), [Migrate CMS Collection content to another project](https://help.webflow.com/hc/en-us/articles/33961342531859-Migrate-CMS-Collection-content-to-another-project), [How do I import content into the Webflow CMS?](https://help.webflow.com/hc/en-us/articles/33961290794771-How-do-I-import-content-into-the-Webflow-CMS), [Seats, roles, and permissions overview](https://help.webflow.com/hc/en-us/articles/33961273067411-Seats-roles-and-permissions-overview), [Legacy Editor deprecation FAQ](https://help.webflow.com/hc/en-us/articles/48412420902675-Legacy-Editor-deprecation-FAQ), [Webflow Data API: list Collection items](https://developers.webflow.com/data/reference/cms/collection-items/staged-items/list-items), [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/). Decap facts from [State of Decap](/state-of-decap/) and the [Decap Turbo](/turbo/) page.
