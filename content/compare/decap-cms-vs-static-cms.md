---
title: Decap CMS vs Static CMS
linkTitle: Decap CMS vs Static CMS
description: Static CMS was archived in September 2024. What it changed from Netlify CMS, how to move its config to Decap CMS, and when Sveltia CMS or TinaCMS fits better.
group: git-based
weight: 16
date: 2026-11-04
---

We make Decap CMS, so read this with that in mind. Every fact here is sourced, and we include the other alternatives the Static CMS maintainers pointed to. If something is wrong or out of date, [tell us](https://github.com/decaporg/decap-cms/discussions) and we'll fix it.

## In short

- **Static CMS is archived.** Its repository was archived on 9 September 2024, and its last release, 4.3.0, came out on 26 April 2024. It gets no bug fixes or security fixes.
- **Its maintainers recommend moving on.** The README says Decap CMS "has been revitalized" and that, along with alternatives like TinaCMS, "there are better options out there".
- **Decap CMS is the shortest move back**: Static CMS was a fork of Netlify CMS, and Decap CMS is Netlify CMS renamed. Most of your `config.yml` works as it is; a handful of options Static CMS changed need converting back.
- **Sveltia CMS accepts more of Static CMS's own options as they are**, such as KeyValue fields and default view filters. TinaCMS is a different kind of tool and needs a new schema.

## At a glance

| | Decap CMS | Static CMS |
|---|---|---|
| **Status** | Maintained; {{< stat github="decaporg/decap-cms" metric="releases" >}} stable releases in {{< period >}} | Archived on 9 September 2024 |
| **Latest release** | {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}} | 4.3.0, 26 April 2024 |
| **Origin** | Netlify CMS, renamed in February 2023 | A community fork of Netlify CMS, started in August 2022 |
| **License and price** | MIT, free; optional [Decap Turbo](/turbo/) from €0 | MIT, free |
| **Configuration** | `config.yml` | `config.yml`, with some options restructured |
| **Git hosts** | GitHub, GitLab, Bitbucket, Gitea, Forgejo, Azure DevOps, Git Gateway | GitHub, GitLab, Bitbucket, Gitea, Git Gateway |
| **Editorial workflow** | GitHub, GitLab, Bitbucket, Azure, Forgejo, Git Gateway, Turbo | Beta since 4.0 (January 2024); not on Gitea |
| **Media integrations** | Repository, Cloudinary, Uploadcare; S3-compatible via Turbo Pro or a beta package | Repository only; Cloudinary and Uploadcare removed in 2.0 |
| **Date format tokens** | Day.js (`YYYY-MM-DD`) | date-fns (`yyyy-MM-dd`) |
| **Local editing** | `npx decap-server` | `npx @staticcms/proxy-server` |
| **Security fixes** | Yes, published as security advisories | None since archiving |
| **GitHub stars** | {{< stat github="decaporg/decap-cms" metric="stars" >}} | {{< stat github="StaticJsCMS/static-cms" metric="stars" >}} |
| **npm downloads a week** | {{< stat npm="decap-cms-app" metric="weekly-downloads" >}} (`decap-cms-app`) | {{< stat npm="@staticcms/core" metric="weekly-downloads" >}} (`@staticcms/core`) |

Download counts are weekly averages over {{< period >}}, from the npm downloads API.

## What Static CMS was

Static CMS began in August 2022, when Netlify CMS had gone quiet, as a community fork to keep the project moving. Version 1.0 (17 January 2023) was a rewrite of the app in TypeScript, and the project went on to 2.0 (April 2023), 3.0 (August 2023) and 4.0 (January 2024). It worked the same way as Netlify CMS and Decap CMS: a single-page app at `/admin/` that reads a YAML config and commits Markdown, YAML or JSON files to your Git repository.

Meanwhile Netlify handed Netlify CMS to PM d.o.o., and it became Decap CMS in February 2023. On 9 September 2024 the Static CMS maintainers archived the repository. Its README now opens with: "The project originally started as a way of keeping NetlifyCMS (now Decap CMS) alive, which at the time was abandoned. Since then, Decap CMS has been revitalized. Along with other great alternatives, like Tina CMS, there are better options out there than what StaticCMS provided. Thus the decision was made to cease development." Its documentation is still online at [staticjscms.netlify.app](https://staticjscms.netlify.app/).

### What it changed from Netlify CMS

From the Static CMS migration guides and release notes:

- **Removed:** the Azure DevOps backend, GitLab's implicit-grant login, the Cloudinary, Uploadcare, Algolia and AssetStore integrations, GraphQL for GitHub and GitLab, Remark plugins, dynamic default values, custom mount elements, the deprecated `date` widget and `createClass`.
- **Changed:** React 18 as a minimum; a separate CSS file; `CMS.init()` must be called explicitly, and a config passed to it replaces `config.yml` instead of merging with it; date formats use date-fns tokens; a new Markdown editor with its own shortcode system, so Netlify CMS editor components stopped working; `sortable_fields`, `view_filters` and `view_groups` became objects with a default option; the list widget's `field` option was dropped; nested collections moved `meta.path` into `nested.path`; `defaultLocale` became `default_locale`.
- **Added:** dark mode and custom themes, custom icons, additional links and custom pages, card and field previews in collection views, a table view (`summary_fields`), folder navigation in the media library, conditional fields (`condition`), `prefix` and `suffix` on string, number and boolean fields, `multiple` and `select_folder` on file fields, a KeyValue widget, a UUID widget, YAML parser options, and a mobile layout. The editorial workflow and open authoring returned as beta features in 4.0.

## Why moving matters

Static CMS runs in your editors' browsers with their Git credentials. It has no server of its own, so an unmaintained copy doesn't put your published site at risk the way an unpatched server would. But nothing will fix a vulnerability found in it or in its dependencies from now on, and Git host APIs, browsers and React keep changing under it. The longer a site stays on a frozen CMS, the more a future move costs.

Decap CMS, by contrast, publishes fixed vulnerabilities as [security advisories](https://github.com/decaporg/decap-cms/security/advisories) and has a [security policy](https://github.com/decaporg/decap-cms/security/policy). Its release history, contributors and funding are on [State of Decap](/state-of-decap/).

## Moving from Static CMS to Decap CMS

Your content stays where it is; you change the admin page and parts of `config.yml`. Do it on a branch and test on a deploy preview or with the local backend before merging.

### 1. Swap the admin page

Replace the Static CMS script and stylesheet with Decap's script, and remove the `CMS.init()` call, because Decap starts on its own:

```html
<script src="https://cdn.jsdelivr.net/npm/decap-cms@^3.0.0/dist/decap-cms.js"></script>
```

If you bundle the CMS, uninstall `@staticcms/core` and `@staticcms/app`, install `decap-cms-app`, and change `import CMS from '@staticcms/core'` to `import CMS from 'decap-cms-app'`. If you passed your config to `CMS.init()` from JavaScript, keep doing that with [manual initialisation](/docs/manual-initialization/): set `window.CMS_MANUAL_INIT = true` and add `load_config_file: false` to replace `config.yml` rather than merge with it. On Gatsby, replace `gatsby-plugin-static-cms` with [`gatsby-plugin-decap-cms`](https://github.com/decaporg/gatsby-plugin-decap-cms).

### 2. Convert the restructured options

Decap validates these options and rejects the Static CMS shape, so they need converting:

- **`sortable_fields`**: turn the `fields` list back into a plain list. A Static CMS `default` becomes an object item with `default_sort` (supported since Decap 3.10), for example `- { field: date, default_sort: desc }`.
- **`view_filters` and `view_groups`**: remove the `fields:` or `groups:` wrapper and the `name` of each item, so each is a plain list of `label`, `field` and `pattern`. Decap has no default filter or group, so drop `default`.
- **Nested collections**: move `nested.path` back to `meta: { path: { label: Path, widget: string, index_file: index } }`. Decap requires `label` and `widget` on the path.
- **Dates**: rewrite `format`, `date_format` and `time_format` from date-fns to [Day.js tokens](https://day.js.org/docs/en/display/format), for example `dd.MM.yyyy` to `DD.MM.YYYY` and `yyyy-MM-dd` to `YYYY-MM-DD`.
- **List widgets** with a single subfield: Static CMS used `fields` with one item; Decap also accepts `field` (singular), which saves a plain list of values.

### 3. Replace what Decap doesn't have

- **KeyValue fields**: use a list widget with `key` and `value` string fields, which saves a list of objects instead of a map, or write a [custom widget](/docs/custom-widgets/) that keeps the map.
- **Conditional fields, prefixes and suffixes, `select_folder`**: Decap has no equivalents. Unknown field options are ignored, so remove them to keep the config clear.
- **`multiple` on file and image fields**: use `media_library: { config: { multiple: true } }`.
- **Custom themes, icons, additional links, card and field previews**: there are no equivalents in Decap. Custom preview templates stay (`registerPreviewTemplate`), and Decap still accepts `createClass` as well as function components.
- **Shortcodes** (`CMS.registerShortcode`) become Markdown [editor components](/docs/custom-widgets/#registereditorcomponent) (`CMS.registerEditorComponent`).

### 4. Backends, media and local editing

- **Backends** keep their names: `github`, `gitlab`, `bitbucket`, `gitea` and `git-gateway` work in Decap too, and you can also use `forgejo` and `azure`. On GitHub you still need an OAuth client, or [Decap Turbo](/turbo/) for hosted logins.
- **Media**: files in the repository keep working. You can now also use the built-in Cloudinary or Uploadcare libraries, or S3-compatible storage through Turbo Pro.
- **Local editing**: keep `local_backend: true` and run `npx decap-server` instead of `npx @staticcms/proxy-server`. See [Decap Proxy](/docs/decap-proxy/).

### What you gain

Back on Decap you get the features Static CMS removed (Azure DevOps, Cloudinary and Uploadcare, GraphQL on GitHub, Remark plugins, dynamic default values) and what Decap has added since: a Forgejo backend, the UUID widget, a beta Rich Text widget, a responsive UI for phones and tablets, the editorial workflow on most backends, editor notes, in-browser image processing (`media_processing`), and the optional [Decap Turbo](/turbo/) for logins, roles and large repositories.

## The alternatives

- **[Decap CMS](/docs/intro/)** suits most Static CMS sites best if you want the closest config and the most Git hosts, including Bitbucket, Azure DevOps and Git Gateway, on a stable 3.x release line maintained by a company.
- **[Sveltia CMS](https://sveltiacms.app/)** is a rewrite of Netlify CMS that reads the same kind of `config.yml`, and its [Static CMS migration guide](https://sveltiacms.app/en/docs/migration/static-cms) says it supports several Static CMS options as they are, including KeyValue fields, `multiple` and `select_folder` on file fields, defaults for sorting, filters and groups, and folder navigation in the media library. It supports GitHub, GitLab and Gitea/Forgejo, not Bitbucket or Git Gateway, and is a 0.x beta (latest release {{< stat npm="@sveltia/cms" metric="latest" >}}, {{< stat github="sveltia/sveltia-cms" metric="latest-release-date" >}}) maintained by one developer. It doesn't support date-fns formats either, so dates need the same conversion. See [Decap CMS vs Sveltia CMS](/compare/decap-cms-vs-sveltia-cms/).
- **[TinaCMS](https://tina.io/)**, the other tool the Static CMS README names, offers visual editing on the page for React-based sites, with a TypeScript schema instead of `config.yml`, so the content model must be rewritten. Production needs TinaCloud or a self-hosted backend with a database. TinaCloud is free for 2 users; the Team plan is $29 per project per month billed monthly ($290 a year billed yearly) with 3 users included and an editorial workflow. Latest release {{< stat npm="tinacms" metric="latest" >}}.

## Which to choose

**Choose Decap CMS if:**

- You want to keep your `config.yml` with the fewest changes and keep editing in a form with a side-by-side preview.
- You're on Bitbucket, Azure DevOps or Git Gateway, or want Cloudinary or Uploadcare back.
- You want a stable release line, published security fixes, or hosted logins and roles through Turbo.

**Choose Sveltia CMS if:**

- You rely on Static CMS options such as KeyValue fields or default view filters and want to keep them as they are.
- You're on GitHub, GitLab or Gitea/Forgejo and want a lighter, faster-loading CMS, and a beta is acceptable.

**Choose TinaCMS if:**

- Your site is built with React and your editors want to edit on the page itself, and you're willing to rewrite the content model in TypeScript.

## Frequently asked questions

### Is Static CMS still maintained?

No. Its GitHub repository was archived on 9 September 2024, and the last release, 4.3.0, came out on 26 April 2024. The README says development has ceased and points to Decap CMS and TinaCMS.

### What is the best Static CMS alternative?

It depends on what you used. Decap CMS is the closest in config and Git host support, Sveltia CMS keeps more of Static CMS's own options, and TinaCMS suits React sites that want on-page editing. All three keep your content as files in Git.

### Can I keep using Static CMS?

It still loads from npm and the CDN, so an existing site won't stop working overnight. But it gets no security fixes or updates for changes in Git host APIs and browsers, so plan a move rather than waiting for something to break.

### How long does it take to migrate from Static CMS to Decap CMS?

For a typical site, an afternoon: swap the script tag, convert `sortable_fields`, `view_filters`, `view_groups`, nested collection paths and date formats, and test on a branch. Sites with custom widgets, previews or shortcodes need more time, because those components need adapting.

### Will my content change when I switch?

No content conversion is needed: entries stay as the same Markdown, YAML or JSON files. Check that date fields keep their stored format after you convert the format tokens, and review the first few commits Decap makes.

### Is Decap CMS free?

Yes. Decap CMS is open source under the MIT license and free to use without limits. [Decap Turbo](/turbo/) is an optional hosted service with a free plan and a Pro plan at €19 a month.

## Sources

The [Static CMS repository](https://github.com/StaticJsCMS/static-cms) and its README, [releases](https://github.com/StaticJsCMS/static-cms/releases) (1.0.0, 2.0.0, 3.0.0 and 4.0.0 release notes), and docs on [migrating from Decap/Netlify](https://staticjscms.netlify.app/docs/decap-migration-guide), [upgrading to v4](https://staticjscms.netlify.app/docs/migration-guide-v4), [collections](https://staticjscms.netlify.app/docs/collection-overview) and [beta features](https://staticjscms.netlify.app/docs/beta-features); the archive date from the GitHub API; [Sveltia CMS's Static CMS migration guide](https://sveltiacms.app/en/docs/migration/static-cms); [TinaCMS pricing](https://tina.io/pricing) and the `tinacms` package on npm; the Decap docs on [configuration options](/docs/configuration-options/), [nested collections](/docs/collection-nested/) and the [datetime widget](/docs/widgets/datetime/); the [Decap CMS repository](https://github.com/decaporg/decap-cms) and [State of Decap](/state-of-decap/). Stars, releases and downloads come from the GitHub API, the npm registry and the npm downloads API, fetched each time the site is built.
