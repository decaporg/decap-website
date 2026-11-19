---
title: Basic Steps
description: "Add Decap CMS to an existing site in four steps: install the admin page, choose a backend, write config.yml, and open /admin/. All you need is a site whose source is in a Git repository."
group: Add
weight: 1
aliases:
  - /docs/add-to-your-site/
  - /docs/quick-start/
---

To add Decap CMS to a site, all you need is a site whose source files are in a Git repository on GitHub, GitLab, Gitea, Forgejo, Bitbucket or Azure DevOps. It works with any [static site generator](https://jamstack.org/generators/), such as Hugo, Astro, Eleventy, Jekyll, Next.js or Nuxt, and with any hosting provider. Decap CMS is a single page at `/admin/` on your site, and every change an editor saves becomes a commit in your repository.

You can also [start from a template](/docs/start-with-a-template/), follow a [guide for your framework](/docs/hugo/), or go straight to the [configuration options](/docs/configuration-options/). Adding Decap CMS to a site takes four steps:

**1. Install Decap CMS**

Add an `admin` folder with two files, `index.html` and `config.yml`, to the folder your site generator copies as-is to the published site. The `index.html` loads Decap CMS from a CDN or from npm. See [Install Decap CMS](/docs/install-decap-cms/).

**2. Choose a Backend**

The backend connects Decap CMS to your repository and decides how editors log in. Use your Git host's backend with an [OAuth client](/docs/external-oauth-clients/), or [Decap Turbo](/docs/turbo-overview/), the optional hosted backend by the Decap maintainers. While you develop, `local_backend: true` with `npx decap-server` edits the files on your computer with no login. See [Choosing a Backend](/docs/choosing-a-backend/).

**3. Configure Decap CMS**

The configuration in `config.yml` tells Decap CMS which backend and branch to use, where to store uploaded media, and which content to edit. Start as simple as possible and add collections as you go. See [Configure Decap CMS](/docs/configure-decap-cms/), and the [Configuration Options](/docs/configuration-options/) for every setting.

**4. Access Your Content**

Open `/admin/` on your site, log in, and edit. Decap CMS commits each change to your repository, and your site's usual build turns that content into pages. See [Access Your Content](/docs/access-your-content/).

{{< pagination-nav nextUrl="/docs/install-decap-cms/" nextLabel="1. Install Decap CMS" >}}
