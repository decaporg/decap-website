---
group: Accounts
weight: 30
title: GitHub
description: "Connect Decap CMS to a GitHub repository with the github backend. Editors log in with GitHub through an OAuth client or Decap Turbo."
---
For repositories stored on [GitHub](https://github.com), the `github` backend allows CMS users to log in directly with their GitHub account. Note that all users must have push access to your content repository for this to work.

Because GitHub [requires a server](https://github.com/decaporg/decap-cms/issues/663#issuecomment-335023723) for authentication, the `github` backend needs an OAuth client: a small server that completes GitHub's login. You can:

* Deploy one of the [external OAuth clients](/docs/external-oauth-clients/), for example a Cloudflare Worker, and set `base_url` to its address.
* Use [Decap Turbo](/docs/turbo-overview/), the optional hosted backend by the Decap maintainers, which handles login and shields your GitHub API rate limit. It uses the `turbo-github` backend instead.
* If your site is hosted on Netlify, use Netlify's [authentication provider](https://docs.netlify.com/manage/security/secure-access-to-sites/oauth-provider-tokens/). It is the default `base_url`, so you don't need to set one.

Then add the following lines to your Decap CMS `config.yml` file:

```yaml
backend:
  name: github
  repo: owner-name/repo-name # Path to your GitHub repository
  # optional, defaults to master
  # branch: main
  # your OAuth client, if you deployed one
  # base_url: https://auth.example.com
```

## Specifying a status for deploy previews

The GitHub backend supports [deploy preview links](../deploy-preview-links). Decap CMS checks the
`context` of a commit's [statuses](https://help.github.com/articles/about-status-checks/) and infers
one that seems to represent a deploy preview. If you need to customize this behavior, you can
specify which context to look for using `preview_context`:

```yaml
backend:
  name: github
  repo: my/repo
  preview_context: my-provider/deployment
```

The above configuration would look for the status whose `"context"` is `"my-provider/deployment"`.

## Git Large File Storage (LFS)

Please note that the GitHub backend **does not** support [git-lfs](https://git-lfs.github.com/), see [this issue](https://github.com/decaporg/decap-cms/issues/1206) for more information.


## GraphQL API

**Note: not compatible with `git-gateway`**

GraphQL allows to retrieve data using less individual API requests compared to a REST API. GitHub's GraphQL API still does not support all mutations necessary to completely replace their REST API, so this feature only calls the new GraphQL API where possible.

You can use the GraphQL API for the GitHub backend by setting `backend.use_graphql` to `true` in your CMS config:

```yml
backend:
  name: github
  repo: owner/repo # replace this with your repo info
  use_graphql: true
```

Learn more about the benefits of GraphQL in the [GraphQL docs](https://graphql.org).
