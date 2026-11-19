---
group: Guides
weight: 90
title: VitePress
description: "Add Decap CMS to a VitePress site, by hand in the public folder or with vite-plugin-decap-cms, using the GitHub backend and decap-server for local editing."
---
This guide will walk you through how to integrate Decap CMS with [VitePress](https://vitepress.dev).

To use the [`vite-plugin-decap-cms` plugin](https://vite-plugin-decap-cms.pages.dev), follow [the plugin setup](#vite-plugin) instructions. The plugin will simplify the configuration for you.

## Setting up VitePress

See [the VitePress prerequisites](https://vitepress.dev/guide/getting-started#prerequisites) for the minimum Node version supported.

Install VitePress using the package manager of your choice:

```bash
npm install --save-dev vitepress
```

Follow the [VitePress documentation](https://vitepress.dev/guide/getting-started#installation) to configure VitePress or use the setup wizard:

```bash
npx vitepress init
```

## Setting up Decap CMS

In the [public directory](https://vitepress.dev/guide/asset-handling#the-public-directory), create a new directory `/admin/`. Inside that directory, you will have to create two files, `config.yml` and `index.html`. For this guide you can use the example `index.html` from the [Decap CMS installation](https://decapcms.org/docs/install-decap-cms/):

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
  </head>
  <body>
    <!-- Include the script that builds the page and powers Decap CMS -->
    <script src="https://cdn.jsdelivr.net/npm/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </body>
</html>
```

For your `config.yml` file, you can put in a starter config:

```yml
backend:
  name: github
  repo: your-name/your-repo # Path to your GitHub repository
  branch: main # Branch to update (optional; defaults to master)
  base_url: https://auth.example.com # Your OAuth client, see below
local_backend: true # Edit local files while `npx decap-server` runs

media_folder: public/img
public_folder: /img

collections:
  - name: 'guide'
    label: 'Guide'
    folder: 'guide'
    create: true
    slug: '{{slug}}'
    editor:
      preview: false
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Description', name: 'description', widget: 'string' }
      - { label: 'Body', name: 'body', widget: 'markdown' }
```

Replace `your-name/your-repo` with the GitHub repository you'll push the site to. This example only includes the frontmatter included in all themes. You can visit the [default theme reference](https://vitepress.dev/reference/frontmatter-config) for all frontmatter keys for the default theme.

For VitePress you will need to [add `{target="_self"}`](https://vitepress.dev/guide/routing#linking-to-non-vitepress-pages) to all admin links since the Decap CMS page is a non-VitePress page. 

### Editing content locally

To edit content on your computer, keep the VitePress development server running and start the Decap CMS proxy server in a second terminal, in the root of your project:

```bash
npx decap-server
```

Open `http://localhost:5173/admin/index.html`. Because of `local_backend: true`, Decap CMS reads and writes the files in your project directly, with no login.

### Pushing to GitHub

It's now time to commit your changes and push to GitHub. 

```bash
git init
git add .
git commit -m "Initial Commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/NEW_REPO_NAME.git
git push -u origin main
```

### Deploying and logging in

Deploy the site from your repository with your hosting provider of choice. Build it with `vitepress build`, which the setup wizard adds as an npm script, and publish the `.vitepress/dist` folder inside your VitePress root. Decap CMS is a static page in your site, so any static hosting provider works.

On your live site, editors log in with the `github` backend. GitHub's login needs a small server, an OAuth client: deploy one of the [external OAuth clients](/docs/external-oauth-clients/) and set `base_url` in `config.yml` to its address. If you'd rather not run one, or want editors to log in without a GitHub account, switch the `backend` to [Decap Turbo](/docs/turbo-overview/), the optional hosted backend by the Decap maintainers. For GitLab and other Git hosts, see [Choosing a Backend](/docs/choosing-a-backend/).

Then open `/admin/` on your live site and log in.

**Using Git Gateway?** Earlier versions of this guide used the `git-gateway` backend with Netlify Identity. Sites that already use it can keep that setup, described on the [Git Gateway](/docs/git-gateway-backend/) page.

{{< git-gateway-deprecated >}}

## Vite plugin

The steps above for VitePress will likely also work for any similar Vite-based SSG (Static Site Generator), such as VuePress.
To simplify the configuration you can use the [`vite-plugin-decap-cms`](https://vite-plugin-decap-cms.pages.dev) Vite plugin.

### Setting up the plugin

The following steps assume that you have only installed a Vite SSG, such as [VitePress](#setting-up-vitepress). You do not need to follow the steps of [setting up Decap CMS](#setting-up-decap-cms)! First, install the plugin:

```bash
npm install --save-dev vite-plugin-decap-cms
```

Instead of adding files to `/admin/`, you need to add the plugin to your Vite configuration and specify the Decap configuration in the plugin options.

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import decap, {
    createFolderCollection,
    createField,
} from 'vite-plugin-decap-cms'

export default defineConfig({
    publicDir: 'public',
    plugins: [
        decap({
            config: {
                backend: {
                    name: 'test-repo',
                },
                mediaFolder: '/src/public/',
                collections: [
                    createFolderCollection({
                        name: 'test',
                        label: 'Test collection',
                        fields: [
                            createField('markdown', { name: 'body' }),
                        ],
                    }),
                ]
            }
        })
    ],
})
```

After configuring the plugin, you can [push to GitHub](#pushing-to-github) and [deploy your site](#deploying-and-logging-in).
