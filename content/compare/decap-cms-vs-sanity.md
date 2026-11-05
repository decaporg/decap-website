---
title: Decap CMS vs Sanity
linkTitle: Decap CMS vs Sanity
description: Decap CMS commits Markdown to your Git repository for free; Sanity pairs an open-source Studio with a hosted Content Lake, GROQ and real-time editing.
group: other
weight: 33
date: 2026-11-04
---

We make Decap CMS, so read this with that in mind. Every fact here is sourced, and we say plainly where Sanity is the better choice. If something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

## In short

- **Decap CMS** is a free, open-source editor that commits Markdown and YAML files to your Git repository. **Sanity** has two parts: Sanity Studio, an open-source (MIT) editing app you configure in code, and the Content Lake, a hosted database that only Sanity runs.
- **Sanity's Free plan is generous**: up to 20 seats and 10,000 documents. But it has only two roles (Administrator and Viewer) and public datasets. Growth is $15 per seat a month. Decap CMS is free; its optional hosted service, Decap Turbo, has a free plan and Pro at €19 a month for 5 seats.
- **Choose Sanity** for structured content you query with GROQ, several people editing the same document at once, visual click-to-edit previews, and content that feeds more than one site or app.
- **Choose Decap CMS** for a website built from files in Git, where developers and editors share the same Markdown and you want no database, API quota or per-seat bill.

## At a glance

| | Decap CMS | Sanity |
|---|---|---|
| **What it is** | Git-based CMS: an admin page in your site | API-first headless CMS: open-source Studio plus hosted Content Lake |
| **Where content lives** | Markdown, YAML, JSON or TOML files in your Git repository | JSON documents in Sanity's hosted Content Lake, in "datasets" |
| **What you host or run** | Nothing extra; the admin page ships with your static site | The Studio, hosted free by Sanity or on any static host; the Content Lake can't be self-hosted |
| **License** | MIT, open source | Studio: MIT. Content Lake: proprietary hosted service |
| **Price** | Free. Optional [Decap Turbo](/turbo/): Free, Pro €19/month, Enterprise custom | Free; Growth $15 per seat/month; Enterprise custom |
| **Free plan** | All features, any use, no limits from us | 20 seats, 2 roles, 2 public datasets, 10,000 documents, 1M CDN and 250,000 non-CDN API requests, 100 GB bandwidth and 100 GB assets a month |
| **Editors' login** | Through your Git host (OAuth), or Decap Turbo | Sanity accounts; SAML SSO on Enterprise |
| **Roles** | Whatever the editor's Git account may do; org and per-site roles with Turbo | Free: Administrator, Viewer. Growth: adds Editor, Developer, Contributor. Custom on Enterprise |
| **Editing** | Form-based editor | Form-based Studio with real-time co-editing and presence; click-to-edit through the Presentation tool |
| **Preview** | Live side-by-side preview, custom templates as React components | Live preview and visual editing of your real site, on all plans |
| **Editorial workflow** | Draft, in review, ready, as branches and pull requests | Drafts and published documents; comments, tasks and scheduled drafts on Growth; content releases on Enterprise |
| **Rich text** | Markdown | Portable Text (JSON) |
| **Querying** | None; your site reads the files | GROQ, with live queries and GROQ-powered webhooks |
| **Media** | Files in the repository; Cloudinary and Uploadcare built in | Hosted assets with on-the-fly image transformations |
| **Extensibility** | Custom widgets, previews, backends, media libraries, Remark plugins, event hooks | Custom input components, plugins, tools and Studio configuration in TypeScript or JavaScript; Functions |
| **Works with** | Any static site generator or framework | Any stack that can call an API; visual-editing quickstarts for Next.js, React Router, Astro, SvelteKit, Nuxt and React Native |
| **Maintained by** | PM d.o.o. and contributors | Sanity (a company) |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} | Studio {{< stat github="sanity-io/sanity" metric="latest-release" >}}, {{< stat github="sanity-io/sanity" metric="latest-release-date" >}} |
| **GitHub stars / npm** | {{< stat github="decaporg/decap-cms" metric="stars" >}} stars; {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} downloads of `decap-cms-app` a week on average in {{< period >}} | {{< stat github="sanity-io/sanity" metric="stars" >}} stars (`sanity-io/sanity`); {{< stat npm="sanity" metric="weekly-downloads" >}} downloads of `sanity` a week on average in {{< period >}} |

## How they work

Decap CMS is a single-page React app you add to your site as `/admin/index.html` with a `config.yml`. It runs in the editor's browser, reads your content files through the Git host's API and commits changes back. Your static site generator builds the site from those files. There is no Decap server or database, and your content is the Markdown in your repository.

Sanity splits the editor from the storage. Sanity Studio is also a React single-page app, but you configure it in code: document types and fields are TypeScript or JavaScript schemas, and you can replace any input with your own React component. You deploy the Studio to Sanity's free hosting with the CLI, or to any static host. The Studio reads and writes the Content Lake, Sanity's hosted, real-time document store. Each project has datasets (Sanity calls them the equivalent of databases) holding JSON documents, which your site or app queries with GROQ, Sanity's query language. Edits are sent as small patches, so several people can edit one document at the same time and see each other's changes.

So the choice is mostly about the kind of CMS, not just the product: files in Git, or documents in a hosted database queried through an API. Our [Git-based vs API-first vs traditional CMS](/compare/git-based-vs-headless-vs-traditional-cms/) page covers when each kind fits.

## Where Sanity is ahead

- **Real-time collaboration.** Real-time editing and multiplayer presence are on every plan, including Free. Several editors can work in the same document without overwriting each other. Decap has no real-time co-editing; simultaneous edits meet as Git commits.
- **Visual editing.** The Presentation tool shows your real site next to the Studio. Editors click an element to jump to its field, see drafts as they type, and can rearrange page sections by drag and drop. It's included on all plans. Decap has a side-by-side preview, but no click-to-edit.
- **Querying.** GROQ can filter, join references and shape the response in one query, and live queries push updates to the front end. Decap content is files; any querying happens in your site generator.
- **A Studio you can program.** Schemas, inputs, document actions, structure and whole tools are code, with React components where you need them. Decap is configurable in YAML and extensible with custom widgets and previews, but Sanity goes further.
- **Scale.** The Free plan allows 10,000 documents and Growth 25,000, with more on Enterprise. Decap is fine to thousands of entries per collection, then gets slow and can hit Git host rate limits (Turbo's proxy helps).
- **Image transformations.** Sanity's asset CDN resizes, crops (respecting the editor's hotspot) and converts formats from URL parameters. Decap can resize, crop and convert images to WebP or JPEG in the browser when they're uploaded ([`media_processing`](/docs/configuration-options/#media-processing)), then stores the files; it doesn't transform them on request.
- **Content for many channels.** The same documents can feed websites, apps and other services through the API, without a build in between.

## Where Decap CMS is ahead, or different

- **No per-seat price.** Sanity Growth is $15 per non-viewer seat a month, so ten editors cost $150 a month. Decap CMS costs nothing per editor; Turbo Pro is €19 for 5 seats and €6 for each extra seat.
- **Roles on the free tier come from Git, not a paid plan.** On Sanity Free, everyone who edits is an Administrator, because Free has only Administrator and Viewer roles; Editor and Contributor start on Growth. With Decap, editors can do only what their Git account allows, and branch protection and pull requests apply as usual.
- **Your content is plain files.** Markdown and front matter in your repository, readable by any tool and any future CMS. Leaving Sanity means exporting NDJSON and converting Portable Text (see below).
- **Git history and review.** Every change is a commit you can diff, review in a pull request and revert, with no retention limit. Sanity's draft history in Review Changes is kept 3 days on Free, 90 on Growth and 365 on Enterprise.
- **Developers and editors share the same files.** Developers keep editing Markdown in their code editor; editors use the CMS.
- **Nothing to configure in code.** A Decap setup is an HTML page and a YAML file. A Sanity Studio is a JavaScript project you build, deploy and keep up to date.
- **No usage quotas.** No document, request, bandwidth or dataset limits from Decap. Sanity charges for usage above its quotas on Growth, and Free has no paid overage.

Decap also lacks things Sanity has, and we'd rather say so: no content API, no real-time collaboration, no visual on-page editing, no scheduled publishing and no on-request image transformations. Comments on an entry exist as [notes](/docs/notes/) on GitHub, GitLab and Turbo, without tasks.

## Cost

Sanity's prices are in US dollars, billed monthly by card; its pricing FAQ says self-serve plans can't be paid annually. A seat is any member who isn't a Viewer; Viewers are free. Decap Turbo is monthly, in euros, tax included. Both cases assume a static site on a host you already pay for, or a free tier.

### A small business site with 1–2 editors

| | Monthly | Yearly |
|---|---:|---:|
| Decap CMS alone | €0 | €0 |
| Decap CMS with Turbo Free (1 seat) | €0 | €0 |
| Decap CMS with Turbo Pro (up to 5 seats) | €19 | €228 |
| Sanity Free | $0 | $0 |
| Sanity Growth, 2 seats × $15 | $30 | $360 |

Sanity Free covers a small site well, if both editors can be Administrators and a public dataset is acceptable: anyone can read published documents from a public dataset through the API (drafts are never served without a token). Growth adds private datasets, the Editor and Contributor roles, comments, tasks and scheduled drafts. With Decap and no Turbo, each editor needs an account on your Git host with write access, and on GitHub you need an OAuth server or proxy (Netlify provides one, or Turbo handles login).

### A team of 10 editors

| | Monthly | Yearly |
|---|---:|---:|
| Decap CMS alone | €0 | €0 |
| Decap CMS with Turbo Pro: €19 + 5 extra seats × €6 | €49 | €588 |
| Sanity Free (if all 10 can be Administrators) | $0 | $0 |
| Sanity Growth, 10 seats × $15 | $150 | $1,800 |
| Sanity Growth with the Increased quota add-on (+$299) | $449 | $5,388 |

Growth includes 25,000 documents, 1,000,000 CDN API requests, 250,000 non-CDN API requests, 100 GB of bandwidth and 100 GB of assets a month. Beyond that you pay as you go: $1 per 250,000 CDN requests, $1 per 25,000 non-CDN requests, $0.30 per GB of bandwidth and $0.50 per GB of assets. More than 25,000 documents needs the Increased quota add-on ($299 a month for 50,000 documents and higher request and bandwidth limits). Extra datasets are $999 a month each, up to two. Without Turbo, Decap's cost for 10 editors is whatever your Git host charges for 10 accounts.

## Security and maintenance

**Decap CMS** has no server or database of its own, so there is nothing of ours to patch at runtime. The published site stays static, and the Git host is the gatekeeper: every change is a commit you can review and revert. You keep the `decap-cms` package (or script tag) up to date. We publish each fixed vulnerability as a security advisory; see our [security policy](https://github.com/decaporg/decap-cms/security/policy) and [State of Decap](/state-of-decap/).

**Sanity** runs the Content Lake for you. You maintain the Studio: it's an npm project, so you update the `sanity` package ({{< stat npm="sanity" metric="releases" >}} stable versions were published to npm in {{< period >}}) and its plugins, and redeploy. You also manage access. On Free every editor is an Administrator, which Sanity's docs describe as read and write access to all datasets with full access to project settings; the more limited Editor and Contributor roles start on Growth. Sanity's docs advise against putting an access token in browser JavaScript, where anyone can read it, and note that assets are public on the asset CDN even when the dataset is private. Free datasets are public, so anyone can query published documents. SAML SSO and custom access control are on Enterprise.

## Moving from Sanity to Decap CMS

1. **Export the dataset.** Run `sanity dataset export production production.tar.gz` (the docs spell it `sanity datasets export`; both work). Add `--no-drafts` for published documents only. The archive holds `data.ndjson` (one JSON document per line), `assets.json`, and `images/` and `files/` folders with the binaries.
2. **Map document types to collections.** Each Sanity document type usually becomes a Decap [folder collection](/docs/collection-folder/), and each field a [widget](/docs/widgets/): `string` to `string`, `text` to `text`, `boolean`, `datetime`, `number`, `reference` to `relation`, `array` to `list`, `object` to `object`. Arrays that mix block types (page builders) map to a list with [variable types](/docs/variable-type-widgets/).
3. **Write each document as a Markdown file.** A short Node.js script reads `data.ndjson` line by line, skips IDs that start with `drafts.` if you exported drafts, and writes front matter plus a body. Use `slug.current` for file names.
4. **Convert Portable Text.** Sanity stores rich text as Portable Text: a JSON array of blocks and spans with marks, not Markdown. The Portable Text project's [`@portabletext/markdown`](https://www.npmjs.com/package/@portabletext/markdown) (MIT) converts it with `portableTextToMarkdown`. It handles headings, lists, links, code, images and tables; custom block types it doesn't know come out as fenced JSON, so write handlers for your own embeds or turn them into Decap [editor components](/docs/custom-widgets/).
5. **Move the assets** from `images/` and `files/` into your repository's media folder (or a media library) and rewrite image references to file paths. Crops and hotspots applied through Sanity image URLs must move to your site generator's image pipeline.
6. **Point your site at the files** instead of GROQ queries, and add Decap's [admin page](/docs/install-decap-cms/). If you had several languages, choose a Decap [i18n structure](/docs/i18n/).

What doesn't carry over: real-time co-editing, the Presentation tool, document history, comments and tasks, scheduled drafts, roles (Decap uses Git host permissions, or Turbo roles) and GROQ-powered webhooks.

**Going the other way** works too: `markdownToPortableText` in the same package converts Markdown to Portable Text, and `sanity dataset import` loads an NDJSON file. Your Markdown stays in Git as a backup.

## Which to choose

Choose Decap CMS if:

- your site is built by a static site generator or framework from files in Git;
- you'd rather not pay per editor, or want role separation without a paid plan;
- developers edit content in their code editor and review changes in pull requests;
- you want content in plain files with full history and no quotas;
- a form editor with side-by-side preview is enough for your editors.

Choose Sanity if:

- several editors work on the same documents at the same time;
- editors want to click on the page to edit it, or build pages by rearranging sections;
- you query structured content with filters and joins, or feed several sites and apps;
- you want to program the editing experience in React and TypeScript;
- you have tens of thousands of documents, or content changes must appear without a rebuild.

## Frequently asked questions

### Is Decap CMS a Sanity alternative?

For websites built from files, yes: editors get a form-based UI with previews, and content is stored as Markdown in your repository at no cost. It isn't an alternative if you rely on GROQ, real-time co-editing or Sanity's visual editing, which Decap doesn't have.

### Is Sanity free?

Sanity has a Free plan with up to 20 seats, 2 roles (Administrator and Viewer), 2 public datasets, 10,000 documents and monthly quotas of 1,000,000 CDN API requests, 250,000 other API requests and 100 GB of bandwidth. There is no paid overage on Free; you upgrade to Growth for more.

### How much does Sanity cost?

Growth is $15 per seat a month, billed monthly, for up to 50 seats. Viewers are free. Usage above the included quotas is billed as you go, and add-ons include Increased quota ($299 a month), extra datasets ($999 a month each) and dedicated support ($799 a month). Enterprise is priced by sales.

### Is Sanity open source?

Partly. Sanity Studio, the editing app, is open source under the MIT license. The Content Lake, where content is stored and queried, is a hosted service that Sanity says must be hosted by Sanity.

### How do I convert Portable Text to Markdown?

Export the dataset with `sanity dataset export`, read `data.ndjson`, and convert each Portable Text field with `portableTextToMarkdown` from `@portabletext/markdown`. Write handlers for custom block types, which otherwise come out as fenced JSON.

### Can I use Decap CMS with Next.js or Astro?

Yes. Decap CMS works with any static site generator or framework that reads files, including Next.js, Astro, Nuxt, SvelteKit, Hugo, Eleventy and Gatsby. See the [install guide](/docs/install-decap-cms/) or [start with a template](/docs/start-with-a-template/).

## Sources

[Sanity pricing](https://www.sanity.io/pricing) (plans, seats, quotas, add-ons and FAQ); [Visual Editing introduction](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing); [exporting data](https://www.sanity.io/docs/content-lake/exporting-data) and the [datasets CLI reference](https://www.sanity.io/docs/cli-reference/dataset); [Studio hosting and deployment](https://www.sanity.io/docs/studio/deployment); [keeping your data safe](https://www.sanity.io/docs/content-lake/keeping-your-data-safe); [roles](https://www.sanity.io/docs/user-guides/roles); [real-time safe patches](https://www.sanity.io/docs/studio/from-input-components-to-real-time-safe-patches); [image transformations](https://www.sanity.io/docs/apis-and-sdks/image-urls); the [`sanity-io/sanity` repository](https://github.com/sanity-io/sanity) and its releases; [`@portabletext/markdown`](https://github.com/portabletext/editor/tree/main/packages/markdown); package versions from the npm registry and weekly downloads from the npm downloads API. Decap figures are from [State of Decap](/state-of-decap/) and the [Decap Turbo](/turbo/) page.
