---
group: Guides
weight: 50
title: Nuxt
description: "Add Decap CMS to a Nuxt site with nuxt/content: the admin files, a config.yml with the GitHub backend, local editing with decap-server, and generating blog pages."
---
This guide will walk you through how to integrate Decap CMS with Nuxt.

## Starting With `create-nuxt-app`

Follow the instructions on the [Nuxt documentation](https://nuxtjs.org/guide/installation#using-code-create-nuxt-app-code-) for creating a new project, or run:

```bash
npx create-nuxt-app <name-of-your-new-project>
cd <name-of-your-new-project>
npm run dev
```

## Setting Up Decap CMS

### Add the Decap CMS files to Nuxt

For nuxt 3 apps and above use the \`public/\` folder instead of \`/static\` which is for nuxt 2.

In the `static/` directory, create a new directory `admin/`. Inside that directory you'll create two files, your `index.html` and a `config.yml`. Per the [Decap CMS documentation](/docs/install-decap-cms/), we'll set the content of `static/admin/index.html` to the following:

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

For your `static/admin/config.yml` file, you can put in a basic starter config:

```yaml
backend:
  name: github
  repo: your-name/your-repo # Path to your GitHub repository
  branch: main # Branch to update (optional; defaults to master)
  base_url: https://auth.example.com # Your OAuth client, see below
local_backend: true # Edit local files while `npx decap-server` runs

media_folder: static/img
public_folder: /img

collections:
  - name: 'blog'
    label: 'Blog'
    folder: 'content/blog'
    format: 'frontmatter'
    create: true
    slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
    editor:
      preview: false
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Publish Date', name: 'date', widget: 'datetime' }
      - { label: 'Description', name: 'description', widget: 'string' }
      - { label: 'Body', name: 'body', widget: 'markdown' }
```

Replace `your-name/your-repo` with the GitHub repository you'll push the site to. You can build whatever collections and content modeling you want. The important thing to note is the `format: 'frontmatter'` value on each collection. This is important for consuming content in Nuxt with the [nuxt/content](https://content.nuxtjs.org) module.

### Add the `content/` directory to Nuxt

In your root directory, you can create a new directory `content/`. As you might guess, this is where our content will live. Your filesystem should look about like this, so far:

```bash
root/
├ content/
├ components/
├ layouts/
├ middleware/
├ pages/
├ plugins/
├ static/
│  └ admin/
│     ├ index.html
│     └ config.yml
├ store/
└ // .editorconfig, .gitignore, nuxt.config.js, etc...
```

### Pushing to GitHub

It's now time to commit your changes and push to GitHub. `create-nuxt-app` initializes Git automatically for you, so you only need to do:

```bash
git add .
git commit -m "Initial Commit"
git remote add origin https://github.com/YOUR_USERNAME/NEW_REPO_NAME.git
git push -u origin main
```

### Editing content locally

To edit content on your computer, keep `npm run dev` running and start the Decap CMS proxy server in a second terminal, in the root of your project:

```bash
npx decap-server
```

Open `http://localhost:3000/admin/`. Because of `local_backend: true`, Decap CMS reads and writes the files in your project directly, with no login. Create a blog post and publish it, and it shows up in your project at `content/blog/<slugified-blog-post-title>.md`.

### Deploying and logging in

Deploy the site from your repository with your hosting provider of choice. The build command is `npm run generate` and the publish directory is `dist`. Decap CMS is a static page in your site, so any static hosting provider works.

On your live site, editors log in with the `github` backend. GitHub's login needs a small server, an OAuth client: deploy one of the [external OAuth clients](/docs/external-oauth-clients/) and set `base_url` in `config.yml` to its address. If you'd rather not run one, or want editors to log in without a GitHub account, switch the `backend` to [Decap Turbo](/docs/turbo-overview/), the optional hosted backend by the Decap maintainers. For GitLab and other Git hosts, see [Choosing a Backend](/docs/choosing-a-backend/).

Then open `/admin/` on your live site and log in.

**Using Git Gateway?** Earlier versions of this guide used the `git-gateway` backend with Netlify Identity. Sites that already use it can keep that setup, described on the [Git Gateway](/docs/git-gateway-backend/) page.

{{< git-gateway-deprecated >}}

## Using nuxt/content

Decap CMS and [nuxt/content](https://content.nuxtjs.org) module click together and complement each other to give you best authoring experience and developer experience respectively.

Adding nuxt/content dependency

```javascript
yarn add @nuxt/content
or
npm i @nuxt/content
```

Then, add @nuxt/content to the modules section of nuxt.config.js:

```javascript
{
  modules: [
    '@nuxt/content'
  ],
  content: {
    // Options
  }
}
```

By adding nuxt content module you get `$content` injected into your whole app which you can use to fetch content from your content folder using `simple fetch api` or `nuxt asyncData` option.
<br />
This also gives a `<nuxt-content>` component which helps you display markdown content with ease and also gives option of live editing in dev mode.

### Example Blog Post List

`nuxt/content` module gives us `$content` which we can use to fetch the list of blog posts in `content/blog` directory.

```javascript
<template>
  <div>
    <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
    </li>
  </div>
</template>

<script>
export default {
   async asyncData({ $content }) {
    const posts = await $content("blog").fetch();

    return {
      posts,
    };
  },
};
</script>
```

### Example Blog Post

To generate blog posts create a `_slug.vue` file in the pages folder. By using `$content` you would get a JSON object which you can use to display. But if you are using Markdown to write and store your posts, you can use the [Nuxt Content module](https://content.nuxtjs.org/) which gives you option to edit content on page in dev mode and many more features.

```javascript
<template>
  <div>
    <h2>{{ post.title }}</h2>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
    };
  },
};
</script>
```

### Generating pages with the `generate` property

Since Nuxt 2.13+, nuxt export has a crawler feature integrated which will crawl all your links and generate your routes based on those links. Therefore you do not need to do anything in order for your dynamic routes to be crawled. i.e, if you are on version of nuxt above 2.14 add target as static in nuxt.config.js and use `nuxt generate` to build your static site.

```javascript
// nuxt.config.js
target: 'static'
```

If you are using **nuxt version below 2.14** you have to use generate option in nuxt/content module to generate pages

```javascript
//nuxt.config.js
export default {
  modules: [,
    '@nuxt/content'
  ],
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content().only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  }
}
```

To render your site as a static site, you'll need to create or update the `generate` property in `nuxt.config.js` to create dynamic routes and provide their content as a `payload`. In `generate`, make your `routes` entry a function:

```javascript
export default {
  generate: {
    routes: function() {
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync('./content/blog').map(file => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./content/blog/${file}`),
        };
      });
    },
  },
};
```

To see the generated site, navigate to `/blog` on your live site.
