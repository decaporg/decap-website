---
group: Add
weight: 3
title: 2. Choose a Backend
---

Now that you have your Decap CMS files in place and configured, we have to enable authentication. We will achieve this by connecting to a backend service that will handle user authentication and connecting to repository API. Choose one of the backend options supported by Decap:

- [GitHub](/docs/github-backend)
- [GitLab](/docs/gitlab-backend)
- [Bitbucket](/docs/bitbucket-backend)
- [Azure](/docs/azure-backend)
- [Gitea](/docs/gitea-backend)
- [Git Gateway](/docs/git-gateway-backend) (deprecated)
- [Local Git Repository](/docs/working-with-a-local-git-repository)

If you would like to facilitate your own OAuth authentication rather than use Netlify's service or a client side flow like implicit or PKCE, you can use one of the community-maintained projects from the [External OAuth Clients](/docs/external-oauth-clients) list.

<nav class="pagination-nav">
  <a href="/docs/install-decap-cms/" class="button">
    <div class="pagination-nav__sublabel">Previous</div>
    <div class="pagination-nav__label">1. Install Decap CMS</div>
  </a>
  <a href="/docs/login-to-your-cms/" class="button pagination-nav__next">
    <div class="pagination-nav__sublabel">Next</div>
    <div class="pagination-nav__label">3. Configure Decap CMS</div>
  </a>
</nav>
