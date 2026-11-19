---
group: Guides
weight: 70
title: Gridsome
description: "Add Decap CMS to a Gridsome site with its CMS plugin: the admin files, a config.yml with the GitHub backend, local editing with decap-server, and deployment."
---
This guide will help you get started using Decap CMS and Gridsome.

## How to install Gridsome
### 1. Install Gridsome CLI tool

```bash
# Using Yarn
yarn global add @gridsome/cli

# Using NPM
npm install --global @gridsome/cli
```

## Create a new Gridsome website

```bash
# To create a new project run
gridsome create my-gridsome-blog

# Then navigate to the project folder
cd my-gridsome-blog

# To start local dev server at http://localhost:8080
gridsome develop
```

### Install Decap CMS the required dependencies to your project

```bash

# Using Yarn
yarn add decap-cms gridsome-plugin-netlify-cms @gridsome/source-filesystem @gridsome/transformer-remark

# Using NPM
npm add decap-cms gridsome-plugin-netlify-cms @gridsome/source-filesystem @gridsome/transformer-remark
```

Now that the plugins are installed, it's time to setup the configuration. Open the `gridsome.config.js` file and update its content to:

```js
module.exports = {
  siteName: 'Gridsome',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link'
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post'
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
  ]
}
```

Please read [gridsome-plugin-netlify-cms](https://gridsome.org/plugins/gridsome-plugin-netlify-cms), [transformer-remark](https://gridsome.org/plugins/@gridsome/transformer-remark) for more information.

## Decap CMS setup

1. Create an `admin` directory inside the `src`
2. Create an `uploads` directory inside the root of your project
3. Add `index.html`, `index.js` and a `config.yml` file to your `admin` directory

Your `index.html` should look like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Decap CMS</title>
  </head>
  <body>
    <script src="index.js" type="module"></script>
  </body>
</html>
```

Your `index.js` should look like this:

```js
import CMS from "decap-cms"
```

Your `config.yml` for GitHub should look like this. Replace `your-name/your-repo` with the GitHub repository you'll push the site to:

```yml
backend:
  name: github
  repo: your-name/your-repo # Path to your GitHub repository
  branch: main # Branch to update (optional; defaults to master)
  base_url: https://auth.example.com # Your OAuth client, see below
local_backend: true # Edit local files while `npx decap-server` runs

media_folder: "static/uploads"
public_folder: "/uploads"

collections:
  - name: "posts"
    label: "Posts"
    folder: "posts"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Excerpt", name: "excerpt", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Body", name: "body", widget: "markdown"}
```

## Editing content locally

To edit content on your computer, keep `gridsome develop` running and start the Decap CMS proxy server in a second terminal, in the root of your project:

```bash
npx decap-server
```

Open `http://localhost:8080/admin/`. Because of `local_backend: true`, Decap CMS reads and writes the files in your project directly, with no login.

## Push to GitHub

It's now time to commit your changes and push to GitHub.

```bash
git init
git add .
git commit -m "Initial Commit"
git remote add origin https://github.com/YOUR_USERNAME/NEW_REPO_NAME.git
git push -u origin main
```

## Deploying and logging in

Deploy the site from your repository with your hosting provider of choice. The build command is `gridsome build` and the publish directory is `dist`. Decap CMS is a static page in your site, so any static hosting provider works.

On your live site, editors log in with the `github` backend. GitHub's login needs a small server, an OAuth client: deploy one of the [external OAuth clients](/docs/external-oauth-clients/) and set `base_url` in `config.yml` to its address. If you'd rather not run one, or want editors to log in without a GitHub account, switch the `backend` to [Decap Turbo](/docs/turbo-overview/), the optional hosted backend by the Decap maintainers. For GitLab and other Git hosts, see [Choosing a Backend](/docs/choosing-a-backend/).

Then open `/admin/` on your live site and log in.

**Using Git Gateway?** Earlier versions of this guide used the `git-gateway` backend with Netlify Identity. Sites that already use it can keep that setup, described on the [Git Gateway](/docs/git-gateway-backend/) page.

{{< git-gateway-deprecated >}}

## Start publishing

It's time to create your first blog post. Login to your site's `/admin/` page and create a new post by clicking New Blog. Add a title, a date and some text. When you click Publish, a new commit will be created in your GitHub repo with this format `Create Blog “year-month-date-title”`. 

If your hosting provider builds your site on every commit, it rebuilds your project now. When your project is deployed you'll be able to see the post you created.

Your basic blog scaffold is done, now you can query data from the GraphQL server just like you're working with the filesystem. For more info read [querying data](https://gridsome.org/docs/querying-data).
