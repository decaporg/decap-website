---
group: Add
weight: 5
title: 4. Access Your Content
description: "Open /admin/ on your site and log in with your Git host account or Decap Turbo account, and how the CMS reads and writes your repository."
---

Your site CMS is now configured and ready for login. Deploy your site as usual, open `yoursite.com/admin/`, and log in:

* With a Git host backend such as `github` or `gitlab`, editors log in with their own Git host account. Give each of them write access to the repository.
* With [Decap Turbo](/docs/turbo-overview/), editors log in with a Turbo account. Invite them from your organization in Turbo, as described in [Organizations, sites, and roles](/docs/turbo-roles-and-members/).
* With [Git Gateway](/docs/git-gateway-backend/) on an existing site, editors log in with Netlify Identity, and you invite them from the Identity settings of your Netlify site.

**Note:** No matter where you access Decap CMS (running locally, in a staging environment, or on your published site), it always fetches and commits files in your hosted repository (for example, on GitHub), on the branch you configured in your Decap CMS `config.yml` file.

This means:

- Content fetched in the admin UI matches the content in the repository, which may be different from your locally running site.
- Content saved using the admin UI saves directly to the hosted repository, even if you're running the UI locally or in staging.

The exception is the [local backend](/docs/decap-proxy/): with `local_backend: true` and `npx decap-server` running, Decap CMS on `localhost` reads and writes the files on your computer instead.

{{< pagination-nav prevUrl="/docs/configure-decap-cms/" prevLabel="3. Configure Decap CMS" >}}
