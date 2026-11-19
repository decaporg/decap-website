---
group: Intro
weight: 3
title: Migrating from Netlify CMS
description: "Move a Netlify CMS 2.x site to Decap CMS 3: rename the packages and the CDN URL, keep your config.yml as it is, and optionally move off the deprecated Git Gateway backend."
---
Decap CMS is the continuation of Netlify CMS. The project was renamed in February 2023, and Decap CMS 3.0 was the first release under the new name. It is now independently maintained by the Decap maintainers and a community of contributors.

Decap CMS 3.0 is [very similar to Netlify CMS 2.10.192](/blog/decap-3/), the last Netlify CMS release, and backward compatible with it. Moving a site over is mostly a matter of renaming packages. Your `config.yml`, your content and your collections stay as they are.

## Script tag

If you load the CMS from a CDN, change the script in your `admin/index.html`:

```html
<!-- Before -->
<script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>

<!-- After -->
<script src="https://cdn.jsdelivr.net/npm/decap-cms@^3.0.0/dist/decap-cms.js"></script>
```

The global `window.CMS` object, which you use to register custom widgets, previews and editor components, has the same name and API.

## npm packages

Every package was renamed, mostly from `netlify-cms-*` to `decap-cms-*`. These are the ones most sites use:

| Netlify CMS                           | Decap CMS                            |
| ------------------------------------- | ------------------------------------ |
| `netlify-cms`                         | `decap-cms`                          |
| `netlify-cms-app`                     | `decap-cms-app`                      |
| `netlify-cms-media-library-cloudinary` | `decap-cms-media-library-cloudinary` |
| `netlify-cms-media-library-uploadcare` | `decap-cms-media-library-uploadcare` |
| `netlify-cms-proxy-server`            | `decap-server`                       |
| `gatsby-plugin-netlify-cms`           | `gatsby-plugin-decap-cms`            |

Uninstall the old packages, install the new ones, and update your imports:

```js
// Before
import CMS from 'netlify-cms-app';

// After
import CMS from 'decap-cms-app';
```

The default export is unchanged. If you used the named export `NetlifyCmsApp`, it's now `DecapCmsApp`.

For the local backend, run `npx decap-server` instead of `npx netlify-cms-proxy-server`. The `local_backend` setting is unchanged. See [Decap Proxy](/docs/decap-proxy/).

### Gatsby

Replace `gatsby-plugin-netlify-cms` with [`gatsby-plugin-decap-cms`](https://www.npmjs.com/package/gatsby-plugin-decap-cms) and `netlify-cms-app` with `decap-cms-app`, then change `resolve: "gatsby-plugin-netlify-cms"` to `resolve: "gatsby-plugin-decap-cms"` in your Gatsby config. The [plugin announcement](/blog/new-gatsby-plugin-for-decap-is-now-available/) links an example migration.

## Configuration

`config.yml` is compatible, so you don't need to change it to update.

One change to plan for later: the `markdown` widget still works, but it is [deprecated](/blog/richtext-widget-replaces-markdown-widget/) in favor of the [`richtext` widget](/docs/widgets/richtext/), which takes the same options.

Decap CMS 3.1 moved to React 18. Its [release notes](/blog/decap-3-1/) list no breaking changes, but if you register custom widgets or preview templates, test them after you update. See [Releases and Updating](/docs/releases/) for keeping the CMS up to date afterwards.

## Moving off Git Gateway

Many Netlify CMS sites use the `git-gateway` backend with Netlify Identity. It still works in Decap CMS, so you can update the packages first and change the backend later.

{{< git-gateway-deprecated >}}

Your content is already in Git, so switching backends is a change to the `backend` block in `config.yml`. See [Choosing a Backend](/docs/choosing-a-backend/) for the options, and the [Git Gateway](/docs/git-gateway-backend/#move-to-a-supported-backend) page for what changes for your editors.
