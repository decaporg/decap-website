---
title: Decap CMS vs Storyblok
linkTitle: Decap CMS vs Storyblok
description: Decap CMS commits Markdown to your Git repository for free; Storyblok is a hosted CMS where marketers build pages visually from nested components.
group: other
weight: 36
date: 2026-11-04
---

We make Decap CMS, so read this with that in mind. Every fact here is sourced, and we say plainly where Storyblok is the better choice. If something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

## In short

- **Decap CMS** is a free, open-source editor that commits Markdown and YAML files to your Git repository. **Storyblok** is a hosted CMS: content lives in its database, and your site fetches it as JSON through its API.
- **Storyblok's strength is its visual editor.** Editors see the real page, click a section to edit it, and assemble pages from nested components ("blocks"). Decap has a form editor with a side-by-side preview, and no click-to-edit.
- **Storyblok's free Starter plan has 1 seat** (2 at most) and is meant "for testing and personal projects". Growth is $99 a month for 5 seats. Decap CMS is free; its optional hosted service, Decap Turbo, has a free plan and Pro at €19 a month for 5 seats.
- **Choose Storyblok** when marketers build and rearrange landing pages themselves from components your developers made. **Choose Decap CMS** when content is mostly articles, docs and pages that fit a fixed structure, and you want it in Git with no subscription.

## At a glance

| | Decap CMS | Storyblok |
|---|---|---|
| **What it is** | Git-based CMS: an admin page in your site | API-first headless CMS with a visual editor (SaaS) |
| **Where content lives** | Markdown, YAML, JSON or TOML files in your Git repository | Storyblok's hosted database, as "stories" in a "space" |
| **What you host or run** | Nothing extra; the admin page ships with your static site | Nothing; Storyblok runs it. Your site calls its API |
| **License** | MIT, open source | Proprietary (its JavaScript SDKs and CLI are MIT) |
| **Price** | Free. Optional [Decap Turbo](/turbo/): Free, Pro €19/month, Enterprise custom | Starter free; Growth $99/month; Growth Plus $349/month; Premium and Elite custom |
| **Free plan** | All features, any use, no limits from us | 1 seat (up to 2), 2 locales, 100 GB traffic, 100,000 API requests a month, 20,000 stories, 2,000 assets; "for testing and personal projects" |
| **Editors' login** | Through your Git host (OAuth), or Decap Turbo | Storyblok accounts, including GitHub login; SSO on Premium and Elite |
| **Roles** | Whatever the editor's Git account may do; org and per-site roles with Turbo | Default Owner, Admin and Editor roles; custom roles on Premium (10) and Elite |
| **Editing** | Form-based editor | Visual editor on your real site, plus a form view |
| **Preview** | Live side-by-side preview, custom templates as React components | Your site in an iframe, updated as editors type |
| **Editorial workflow** | Draft, in review, ready, as branches and pull requests | Default workflow stages on all plans; custom workflows on Premium and Elite |
| **Localisation** | i18n by folder, by file or in a single file | Field-level, folder-level or space-level; 2 locales on Starter and Growth, 10 on Growth Plus |
| **Media** | Files in the repository; Cloudinary and Uploadcare built in | Asset manager with an Image Service for resizing, cropping and WebP |
| **Page building** | List widget with variable types | Nested blocks, the core of the content model |
| **Extensibility** | Custom widgets, previews, backends, media libraries, Remark plugins, event hooks | Field plugins, apps, webhooks, Management API |
| **Works with** | Any static site generator or framework | Any stack that can fetch JSON; SDKs and guides for Next.js, Nuxt, React, Vue and Astro |
| **Maintained by** | PM d.o.o. and contributors | Storyblok GmbH |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} | Continuous (SaaS); CLI `storyblok` {{< stat npm="storyblok" metric="latest" >}} |
| **Adoption signal** | {{< stat github="decaporg/decap-cms" metric="stars" >}} GitHub stars; {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} npm downloads of `decap-cms-app` a week on average in {{< period >}} | {{< stat npm="storyblok-js-client" metric="weekly-downloads" >}} npm downloads of `storyblok-js-client` a week on average in {{< period >}} |

## How they work

Decap CMS is a single-page React app you add to your site as `/admin/index.html` with a `config.yml`. It runs in the editor's browser, reads your content files through the Git host's API and commits changes back. Your static site generator builds the site from those files. There is no Decap server or database, and your content is the Markdown in your repository.

Storyblok stores content in its own database. Developers define components ("blocks") with fields in the Storyblok app. A block can be a content type (a page, an article), a nestable block that sits inside another (a hero, a feature grid, a testimonial) or a universal block that can be either. A page is typically a story with a Blocks field (often named `body`) holding nested blocks, and your front end maps each block type to a component that renders it. Your site fetches stories as JSON from the Content Delivery API, at build time for a static site or on each request for a server-rendered one.

The visual editor loads your site in an iframe from a preview URL you set. Storyblok's SDKs add data attributes to each block's HTML, and a bridge script lets editors click an element to open its block, see unpublished changes as they type, and have the page refresh on save. We found no Storyblok feature that stores or syncs content to a Git repository; its GitHub support is for logging in. For the general trade-off between files in Git and content behind an API, see [Git-based vs API-first vs traditional CMS](/compare/git-based-vs-headless-vs-traditional-cms/).

## Where Storyblok is ahead

- **Visual, in-context editing.** Editors work on the real page, click any section to edit it, and switch between desktop and mobile previews. This is the main reason teams choose Storyblok, and Decap has nothing like it.
- **Page building from components.** Marketers can add, reorder and nest blocks to build new landing pages without a developer, within the components and limits the developers set. Decap can model this with a [list of variable types](/docs/variable-type-widgets/), but editors work in a form, and the preview needs a custom template.
- **Localisation choices.** Field-level translation (one story, several languages), folder-level (a folder per language with its own structure) or space-level (a space per market), with AI translations on every plan.
- **Scheduling and releases.** Growth and Growth Plus can schedule single stories (2 at a time). Release management, custom workflows and language-specific workflows are on Premium and Elite. Decap has no scheduled publishing.
- **Image Service.** Images are resized, cropped and converted to WebP from URL parameters. Decap stores the files you upload.
- **Content for several channels.** The same JSON can feed websites and apps through the API, and GraphQL is available on Premium and Elite.
- **Changes without a rebuild**, for sites that fetch content at request time.

## Where Decap CMS is ahead, or different

- **Free for a team.** Storyblok's free plan has one seat, two at most, and paid seats start with Growth at $99 a month for 5. Decap CMS has no seat limit; Turbo Pro is €19 for 5 seats and €6 for each extra one.
- **No quotas.** No limits from Decap on locales, stories, assets, components, traffic or API requests. Storyblok caps all six per plan; extra locales on Growth are $20 a month each.
- **Your content is plain files.** Markdown and front matter in your repository, readable by any tool and any future CMS. Leaving Storyblok means exporting JSON and converting rich text (see below).
- **Full history.** Every change is a Git commit you can diff and revert, kept for as long as the repository exists. Storyblok keeps content versions and the activity log for 1 day on Starter, 30 days on Growth and Growth Plus, 180 days on Premium and without limit on Elite.
- **Review in pull requests.** Decap's [editorial workflow](/docs/editorial-workflows/) turns drafts into branches and pull or merge requests on GitHub, GitLab, Bitbucket, Azure, Forgejo, Git Gateway and Turbo.
- **Developers and editors share the same files.** Developers keep editing Markdown in their code editor; editors use the CMS. With Storyblok, component schemas and content both live in Storyblok.
- **Nothing to call at runtime.** A Decap site is static: no API tokens in your build, no traffic quota, no dependence on a CMS API being up.
- **As many environments as you have branches.** Every Git branch is a full copy of the content, the content model and the site's code, and your deploy platform can build a preview of each one. Point the CMS at a branch with [`backend.branch`](/docs/configuration-options/#backend). Storyblok's environments are on Premium and Elite.

Decap also lacks things Storyblok has, and we'd rather say so: no visual on-page editing, no scheduled publishing, no on-request image transformations (Decap only resizes and converts on upload), no content API, and very large collections get slow and can hit Git host rate limits.

## Cost

Storyblok's prices are shown in US dollars per space (project), before VAT, which is added at checkout. Paying yearly gives one month free. Decap Turbo is monthly, in euros, tax included. Both cases assume a static site on a host you already pay for, or a free tier.

### A small business site with 1–2 editors

| | Monthly | Yearly |
|---|---:|---:|
| Decap CMS alone | €0 | €0 |
| Decap CMS with Turbo Free (1 seat) | €0 | €0 |
| Decap CMS with Turbo Pro (up to 5 seats) | €19 | €228 |
| Storyblok Starter, 1 seat | $0 | $0 |
| Storyblok Starter, 2 seats (1 extra × $15) | $15 | $180 |
| Storyblok Growth, billed monthly | $99 | $1,188 |
| Storyblok Growth, billed yearly ($90.75 a month) | | $1,089 |

Storyblok describes Starter as a "limited plan for testing and personal projects", with 2 locales, 100 GB of traffic, 100,000 API requests a month and 1 day of version history. A business site will usually be on Growth. With Decap and no Turbo, each editor needs an account on your Git host with write access, and on GitHub you need an OAuth server or proxy (Netlify provides one, or Turbo handles login).

### A team of 10 editors

| | Monthly | Yearly |
|---|---:|---:|
| Decap CMS alone | €0 | €0 |
| Decap CMS with Turbo Pro: €19 + 5 extra seats × €6 | €49 | €588 |
| Storyblok Growth: $99 + 5 extra seats × $15 | $174 | $2,088 |
| Storyblok Growth Plus (15 seats included), billed monthly | $349 | $4,188 |
| Storyblok Growth Plus, billed yearly ($319.91 a month) | | $3,839 |

Growth includes 5 seats and allows 10, so a team of 10 is its ceiling. It includes 2 locales (extra locales $20 a month each), 400 GB of traffic (extra 250 GB for $75) and 1,000,000 API requests (extra 1,000,000 for $10). Growth Plus has no add-ons but includes 15 seats, 10 locales, 1 TB of traffic, 4,000,000 API requests and 100,000 stories. Every new space gets a 45-day trial of Growth Plus without a card. Without Turbo, Decap's cost for 10 editors is whatever your Git host charges for 10 accounts.

## Security and maintenance

**Decap CMS** has no server or database of its own, so there is nothing of ours to patch at runtime. The published site stays static, and the Git host is the gatekeeper: editors can do only what their Git account allows, and every change is a commit you can review and revert. You keep the `decap-cms` package (or script tag) up to date. We publish each fixed vulnerability as a security advisory; see our [security policy](https://github.com/decaporg/decap-cms/security/policy) and [State of Decap](/state-of-decap/).

**Storyblok** runs and patches the platform for you. Your part is the front end and access: keep preview and public tokens apart from Management API tokens, manage who is Admin or Editor, and turn on two-factor authentication (available on every plan) or SSO on Premium and Elite. The visual editor needs your site to allow Storyblok to frame it, which may mean adjusting your Content Security Policy for the preview. If you fetch content at request time, your site depends on Storyblok's API being up; Growth and Growth Plus carry a 97% uptime SLA, Premium 99.9% and Elite 99.99%. Storyblok's SDKs and the bridge script are dependencies in your front end that you keep up to date.

## Moving from Storyblok to Decap CMS

1. **Pull your content.** Install the official CLI (`npm install -g storyblok`), log in with `storyblok login`, then run `storyblok stories pull --space <id>`. It saves each story as a JSON file in `.storyblok/stories/<space-id>/`. `storyblok components pull` saves the component schemas, `storyblok assets pull` the assets and `storyblok datasources pull` the datasources. You can also read everything through the Management API or the Content Delivery API.
2. **Map content types to collections.** Each content-type block usually becomes a Decap [folder collection](/docs/collection-folder/), and each field a [widget](/docs/widgets/): Text to `string`, Textarea to `text`, Markdown to `markdown`, Number to `number`, Boolean to `boolean`, Date/time to `datetime`, Asset to `image` or `file`, Option to `select`, References to `relation`, Group to `object`.
3. **Map nested blocks.** A Blocks field becomes a `list` with [variable types](/docs/variable-type-widgets/), one `object` type per nestable block. Set `typeKey: component` so each item keeps the `component` key that Storyblok's JSON uses for the block name. Your front-end components can often stay as they are, reading the same structure from front matter instead of the API. For a live preview of those pages, register a [preview template](/docs/customization/).
4. **Convert rich text.** Storyblok's Rich Text field is stored as JSON (it's built on the TipTap editor), not Markdown. Render it to HTML with Storyblok's [`@storyblok/richtext`](https://www.npmjs.com/package/@storyblok/richtext), then convert the HTML to Markdown with a library such as [Turndown](https://www.npmjs.com/package/turndown). Blocks embedded in rich text need their own handling, for example as Decap [editor components](/docs/custom-widgets/). Fields of Storyblok's Markdown type are already Markdown.
5. **Move the assets** into your repository's media folder (or a media library) and rewrite asset URLs to file paths. Resizing done through Image Service URLs must move to your site generator's image pipeline.
6. **Handle languages.** Field-level translations come out as one story with translated fields; folder-level translations as separate stories. Map either to a Decap [i18n structure](/docs/i18n/).
7. **Point your site at the files** and add Decap's [admin page](/docs/install-decap-cms/).

What doesn't carry over: the visual editor, scheduling, workflows and their stages, roles (Decap uses Git host permissions, or Turbo roles), version history, comments and webhooks.

**Going the other way**, `@storyblok/richtext` also exports `markdownToStoryblokRichtext`, which converts Markdown to Storyblok rich text, and `storyblok stories push` uploads story files. Storyblok also publishes a guide to [migrating from other platforms](https://www.storyblok.com/tp/data-migration-from-any-platform-to-storyblok). Your Markdown stays in Git as a backup.

## Which to choose

Choose Decap CMS if:

- your site is built by a static site generator or framework from files in Git;
- your content is mostly articles, docs and pages with a fixed structure;
- you have more than two editors and don't want a $99-a-month plan to start;
- developers edit content in their code editor and review changes in pull requests;
- you want content in plain files with full history and no quotas on locales or traffic.

Choose Storyblok if:

- marketers build and rearrange landing pages themselves from developer-made components;
- editors need to see and click the real page while they edit;
- you need scheduling, releases or custom workflows, and can pay for the plan that has them;
- the same content feeds several sites or apps, or must update without a rebuild;
- you manage many languages with field-level or per-market translation.

## Frequently asked questions

### Is Decap CMS a Storyblok alternative?

For content-driven websites, yes: editors get a form-based UI with previews, and content is stored as Markdown in your repository at no cost. It isn't a like-for-like alternative to Storyblok's visual editor, because Decap has no on-page, click-to-edit editing.

### Is Storyblok free?

Storyblok's Starter plan is free, without a card, for 1 seat (2 at most), 2 locales, 100 GB of traffic, 100,000 API requests a month and 20,000 stories. Storyblok describes it as a limited plan for testing and personal projects.

### How much does Storyblok cost?

Growth is $99 a month ($90.75 a month billed yearly) for 5 seats, with extra seats at $15, up to 10. Growth Plus is $349 a month ($319.91 billed yearly) for 15 seats and 10 locales. Premium and Elite are priced by sales. Prices are per space and exclude VAT.

### Does Storyblok store content in Git?

No. Content lives in Storyblok's hosted database and is delivered as JSON through its API. We found no Storyblok feature that syncs content to a Git repository; you can log in with GitHub.

### Can I build pages from components in Decap CMS?

Yes, with a [list widget with variable types](/docs/variable-type-widgets/): editors add, reorder and fill in sections in a form, and your site renders them. Editing happens in the form with a side-by-side preview, not on the page as in Storyblok.

### Can I use Decap CMS with Nuxt, Next.js or Astro?

Yes. Decap CMS works with any static site generator or framework that reads files, including Nuxt, Next.js, Astro, Hugo, Eleventy and Gatsby. See the [install guide](/docs/install-decap-cms/) or [start with a template](/docs/start-with-a-template/).

## Sources

[Storyblok pricing](https://www.storyblok.com/pricing) (plans, limits, add-ons and FAQ); Storyblok docs on [blocks](https://www.storyblok.com/docs/concepts/blocks), [fields](https://www.storyblok.com/docs/concepts/fields), the [visual editor](https://www.storyblok.com/docs/concepts/visual-editor), [internationalisation](https://www.storyblok.com/docs/concepts/internationalization), [roles](https://www.storyblok.com/docs/manuals/roles), the [Image Service](https://www.storyblok.com/docs/api/image-service), [`@storyblok/richtext`](https://www.storyblok.com/docs/libraries/js/rich-text) and the [CLI](https://www.storyblok.com/docs/tooling/cli) including [`stories pull`](https://www.storyblok.com/docs/tooling/cli/stories/pull); Storyblok's announcement of [GitHub login](https://www.storyblok.com/mp/storyblok-figma-github); the CLI source in [`storyblok/monoblok`](https://github.com/storyblok/monoblok); package versions from the npm registry and weekly downloads from the npm downloads API. Decap figures are from [State of Decap](/state-of-decap/) and the [Decap Turbo](/turbo/) page.
