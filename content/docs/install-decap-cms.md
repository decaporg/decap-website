---
group: Add
weight: 2
title: 1. Install Decap CMS
---

A static `admin` folder contains all Decap CMS files, stored at the root of your published site. Where you store this folder in the source files depends on your static site generator. Expand to see some examples:

<details>
  <summary>Static folder location for popular site generators</summary>
  <table>
    <tr><th>These generators</th><th>store static files in</th><th></th></tr>
    <tr><td>Jekyll, GitBook</td><td>`/` (project root)</td><td></td></tr>
    <tr><td>Hugo, Gatsby, Nuxt 2, Gridsome, Zola, Sapper, SvelteKit</td><td>`/static`</td><td></td></tr>
    <tr><td>Next, Nuxt 3, Astro</td><td>`/public`</td><td></td></tr>
    <tr><td>Hexo, Middleman, Jigsaw</td><td>`/source`</td><td></td></tr>
    <tr><td>Wyam</td><td>`/input`</td><td></td></tr>
    <tr><td>Pelican</td><td>`/content`</td><td></td></tr>
    <tr><td>Spike</td><td>`/views`</td><td></td></tr>
    <tr><td>VuePress</td><td>`/.vuepress/public`</td><td></td></tr>
    <tr><td>Elmstatic</td><td>`/_site`</td><td></td></tr>
    <tr><td>11ty</td><td>`/_site`</td><td></td></tr>
    <tr><td>preact-cli</td><td>`/src/static`</td><td></td></tr>
    <tr><td>Docusaurus</td><td>`/static`</td><td></td></tr>
    <tr><td>MkDocs</td><td>`/site`</td><td></td></tr>
    <tr><td>Lume</td><td>`/_site`</td><td></td></tr>
  </table>
</details>

If your generator isn't listed here, you can check its documentation. When you've found the location, feel free to add it to the above list by [filing a pull request](https://github.com/decaporg/decap-cms/blob/master/CONTRIBUTING.md#pull-requests).

Inside the `admin` folder, you'll create two files:

```bash
admin
 ├ index.html
 └ config.yml
```

The first file, `admin/index.html`, is the entry point for the Decap CMS admin interface. This means that users navigate to `yoursite.com/admin/` to access it. On the code side, it's a basic HTML starter page that loads the Decap CMS JavaScript file.

The second file, `admin/config.yml`, is the heart of your Decap CMS installation, and a bit more complex. The [Configuration](/docs/configuration-options) section covers the details.

In this example, we pull the `admin/index.html` file from a public CDN.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <title>Content Manager</title>
  </head>
  <body>
    <!-- Include the script that builds the page and powers Decap CMS -->
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </body>
</html>
```

In the code above the `script` is loaded from the `unpkg` CDN. Should there be any issue, `jsDelivr` can be used as an alternative source. Simply set the `src` to `https://cdn.jsdelivr.net/npm/decap-cms@^3.0.0/dist/decap-cms.js`

### Installing with npm

You can also use Decap CMS as an npm module. Wherever you import Decap CMS, it automatically runs, taking over the current page. Make sure the script that imports it only runs on your CMS page.

First install the package and save it to your project:

```bash
npm install decap-cms-app --save
```

Then import it (assuming your project has tooling for imports):

```js
import CMS from "decap-cms-app";
// Initialize the CMS object
CMS.init();
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate("my-template", MyTemplate);
```

<nav class="pagination-nav">
 <a href="/docs/basic-steps/" class="button">
    <div class="pagination-nav__sublabel">Previous</div>
    <div class="pagination-nav__label">Basic Steps</div>
  </a>
  <a href="/docs/choose-a-backend/" class="button pagination-nav__next">
    <div class="pagination-nav__sublabel">Next</div>
    <div class="pagination-nav__label">2. Choose A Backend</div>
  </a>
</nav>
