---
title: Gatsby
description: "Add Decap CMS to a Gatsby blog with gatsby-plugin-decap-cms: a config.yml with the GitHub backend, local editing with decap-server, and deployment."
group: Guides
weight: 10
---
This guide will help you get started using Decap CMS and Gatsby.

To get up and running with Gatsby, you’ll need to have [Node.js](https://nodejs.org/) installed on your computer. *Note: Gatsby 5 needs Node.js 18 or newer.*

## Create a new Gatsby site

Let's create a new site using the default Gatsby Starter Blog. Run the following commands in the terminal, in the folder where you'd like to create the blog:

```bash
npm install -g gatsby-cli
gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog
cd blog
```

## Get to know Gatsby

In your favorite code editor, open up the code generated for your "Gatsby Starter Blog" site, and take a look at the `content` directory.

You will see that there are multiple Markdown files that represent blog posts. Open one `.md` file and you will see something like this:

```yml
---
title: New Beginnings
date: "2015-05-28T22:40:32.169Z"
description: This is an optional description for SEO and Open Graph purposes, rather than the default generated excerpt.
---

Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts.
```

We can see above that each blog post has a title, a date, a description and a body. Now, let's recreate this using Decap CMS.

## Add Decap CMS to your site

First let's install some dependencies. We'll need `decap-cms-app` and [`gatsby-plugin-decap-cms`](https://www.npmjs.com/package/gatsby-plugin-decap-cms), which generates the `/admin/` page for you. Run the following command in the terminal at the root of your site:

```bash
npm install --save decap-cms-app gatsby-plugin-decap-cms
```

### Configuration

This guide uses a GitHub repository with the `github` backend.

Create a `config.yml` file in the directory structure you see below:

```bash
├── static
│   ├── admin
│   │   ├── config.yml
```

In your `config.yml` file paste the following configuration:

```yml
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
    create: true
    slug: 'index'
    media_folder: ''
    public_folder: ''
    path: '{{title}}/index'
    editor:
      preview: false
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Publish Date', name: 'date', widget: 'datetime' }
      - { label: 'Description', name: 'description', widget: 'string' }
      - { label: 'Body', name: 'body', widget: 'markdown' }
```

**Note:** The above configuration allows assets to be stored relative to their content. Therefore posts would be stored in the format below as it is in `gatsby-starter-blog`.

```bash
content/
├── blog
│   ├── first-post-title
│   │   ├── index.md
│   │   └── post-image.jpg
└── └── second-post-title
        ├── index.md
        └── post-image.jpg
```

Replace `your-name/your-repo` with the GitHub repository you'll push the site to.

Finally, add the plugin to your `gatsby-config.js`. The plugin loads the Netlify Identity widget unless you turn it off, and this guide doesn't use it:

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-decap-cms`,
    options: {
      enableIdentityWidget: false,
    },
  },
]
```

To register custom widgets or preview templates, point the plugin's `modulePath` option at a JavaScript file that imports `decap-cms-app`; the [plugin's README](https://github.com/decaporg/gatsby-plugin-decap-cms#readme) shows how. If you used the old `gatsby-plugin-netlify-cms`, which is deprecated, see [the switch to the Decap plugin](/blog/new-gatsby-plugin-for-decap-is-now-available/).

### Push to GitHub

It's now time to commit your changes and push to GitHub. The Gatsby starter initializes Git automatically for you, so you only need to do:

```bash
git add .
git commit -m "Initial Commit"
git remote add origin https://github.com/YOUR_USERNAME/NEW_REPO_NAME.git
git push -u origin main
```

### Editing content locally

To edit content on your computer, keep `npm run develop` running and start the Decap CMS proxy server in a second terminal, in the root of your project:

```bash
npx decap-server
```

Open `http://localhost:8000/admin/`. Because of `local_backend: true`, Decap CMS reads and writes the files in your project directly, with no login.

### Deploying and logging in

Deploy the site from your repository with your hosting provider of choice. The build command is `npm run build` and the publish directory is `public`. Decap CMS is a static page in your site, so any static hosting provider works.

On your live site, editors log in with the `github` backend. GitHub's login needs a small server, an OAuth client: deploy one of the [external OAuth clients](/docs/external-oauth-clients/) and set `base_url` in `config.yml` to its address. If you'd rather not run one, or want editors to log in without a GitHub account, switch the `backend` to [Decap Turbo](/docs/turbo-overview/), the optional hosted backend by the Decap maintainers. For GitLab and other Git hosts, see [Choosing a Backend](/docs/choosing-a-backend/).

Then open `/admin/` on your live site and log in.

**Using Git Gateway?** Earlier versions of this guide used the `git-gateway` backend with Netlify Identity. Sites that already use it can keep that setup, described on the [Git Gateway](/docs/git-gateway-backend/) page.

{{< git-gateway-deprecated >}}

## Start publishing

It's time to create your first blog post. Login to your site's `/admin/` page and create a new post by clicking New Blog. Add a title, a date and some text. When you click Publish, a new commit will be created in your GitHub repo with this format `Create Blog “year-month-date-title”`. 

If your hosting provider builds your site on every commit, it rebuilds your project now. When your project is deployed you'll be able to see the post you created.

### Cleanup

It is now safe to remove the default Gatsby blog posts.
