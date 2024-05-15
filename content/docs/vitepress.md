---
group: Guides
weight: 90
title: VitePress
---
This guide will walk you through how to integrate Decap CMS with [VitePress](https://vitepress.dev).
If you are using [VuePress](https://v2.vuepress.vuejs.org) you can also [the VuePress template](https://vuedn.netlify.app/). 

To use the [`vite-plugin-decap-cms` plugin](https://vite-plugin-decap-cms.pages.dev), follow [the plugin setup](#vite-plugin) instructions. The plugin will simplify the configuration for you.

## Setting up VitePress

See [the VitePress prerequisites](https://vitepress.dev/guide/getting-started#prerequisites) for the minimum Node version supported.

Install VitePress using the package manager of your choice:

```sh
npm install -D vitepress
```

Follow the [VitePress documentation](https://vitepress.dev/guide/getting-started#installation) to configure VitePress or use the setup wizard:

```sh
npx vitepress init
```

## Setting up Decap CMS

In the [public directory](https://vitepress.dev/guide/asset-handling#the-public-directory), create a new directory `admin/`. Inside that directory, you will have to create two files, `config.yml` and `index.html`. For this guide you can use the example `index.html` from the [Decap CMS installation]():

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
    <!-- Include the script that enables Netlify Identity on this page. -->
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </head>
  <body>
    <!-- Include the script that builds the page and powers Decap CMS -->
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </body>
</html>
```

For your `config.yml` file, you can put in a starter config:

```yml
backend:
  name: git-gateway
  branch: main # Branch to update (optional; defaults to master)

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

This example only includes the frontmatter included in all themes. You can visit the [default theme reference](https://vitepress.dev/reference/frontmatter-config) for all frontmatter keys for the default theme.

For VitePress you will need to [add `{target="_self}`](https://vitepress.dev/guide/routing#linking-to-non-vitepress-pages) to all admin links since the Decap CMS page is a non-VitePress page. 

### Pushing to GitHub

It's now time to commit your changes and push to GitHub. 

```sh
git init
git add .
git commit -m "Initial Commit"
git remote add origin https://github.com/YOUR_USERNAME/NEW_REPO_NAME.git
git push -u origin main
```

### Deploying with Netlify

Go to Netlify and select 'New Site from Git'. Select GitHub and the repository you just pushed to. Click Configure Netlify on GitHub and give access to your repository. Finish the setup by clicking Deploy Site. Netlify will begin reading your repository and starting building your project.

## Vite plugin

The steps above for VitePress will likely also work for any similar Vite-based SSG, such as VuePress.
To simplify the configuration you can use the [`vite-plugin-decap-cms`](https://vite-plugin-decap-cms.pages.dev).

### Setting up the plugin

The following steps assume that you have only installed a Vite SSG, such as [VitePress](#setting-up-vitepress). You do not need to follow the steps of [setting up Decap CMS](#setting-up-decap-cms)! To install the plugin:

```sh
npm install -D vite-plugin-decap-cms
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

After configuring the plugin, you can [push to GitHub](#pushing-to-github) and [deploy your site](#deploying-with-netlify).
