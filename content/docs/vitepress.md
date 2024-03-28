---
group: Guides
weight: 90
title: VitePress
---
This guide will walk you through how to integrate Decap CMS with [VitePress](https://vitepress.dev).

## Setting up VitePress

Follow the [VitePress documentation](https://vitepress.dev/guide/getting-started#installation) or use the setup wizard:

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

### Pushing to GitHub

### Deploying with Netlify

### Authenticating with Netlify Identity

## Other Vite SSGs

### VuePress v2

### Vite applications


