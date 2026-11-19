---
group: Intro
weight: 2
title: Start with a Template
description: "Official Decap CMS starter repositories for Hugo, Gatsby and Nuxt. Copy one to your GitHub account, set its backend in admin/config.yml, and deploy it anywhere."
---
You can add Decap CMS [to an existing site](/docs/basic-steps/), or start from one of the templates below. Each is a small site with Decap CMS already set up in its `admin` folder. Click **Use this template** to copy it to your own GitHub account, then deploy it with any static hosting provider.

<div class="template-grid">

{{< template-card logo="/img/hugo.svg" title="Hugo Site Starter" repo="decaporg/one-click-hugo-cms" >}}

{{< template-card logo="/img/gatsby.svg" title="Gatsby Site Starter" repo="decaporg/gatsby-starter-decap-cms" >}}

{{< template-card logo="/img/nuxt.svg" title="Nuxt 3 Starter" repo="Sfolkerts89/Nuxt3-starter__Decap-cms" >}}

</div>

The official Hugo and Gatsby starters are being updated to the backends recommended in [Choosing a Backend](/docs/choosing-a-backend/). Until then, these templates still set `backend` to `git-gateway`.

{{< git-gateway-deprecated >}}

## Set up your copy

1. Click **Use this template** to create your copy, and clone it.
2. In the template's `admin/config.yml` file, replace the `backend` block with one from [Choosing a Backend](/docs/choosing-a-backend/). For a GitHub repository:

   ```yaml
   backend:
     name: github
     repo: your-name/your-repo
     branch: main
     base_url: https://auth.example.com # Your OAuth client

   local_backend: true
   ```

3. Run `npx decap-server` and the template's development server, and open its `/admin/` page to edit content on your computer.
4. Deploy the site, then open `/admin/` on it and log in.

## More paths to explore

* To integrate Decap CMS into an existing project, go to [Basic Steps](/docs/basic-steps/), or follow a [guide for your framework](/docs/hugo/).
* Check out other sites using Decap CMS (or share your own!) on the [Examples](/docs/examples/) page.
* To change how editors log in, see [Choosing a Backend](/docs/choosing-a-backend/).
