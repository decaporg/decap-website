---
group: Add
weight: 3
title: 2. Choosing a Backend
description: "How editors log in and how Decap CMS reaches your Git repository. Use your Git host's backend with an OAuth client, the hosted Decap Turbo backend, or the local backend while developing."
---

The backend connects Decap CMS to the Git repository that holds your content, and decides how editors log in. Decap CMS works with GitHub, GitLab, Gitea, Forgejo, Bitbucket and Azure DevOps, on any hosting provider. Most sites use one of three setups: your Git host's backend with an OAuth client, the hosted Decap Turbo backend, or the local backend while developing.

You set the backend in the `backend` block of your `config.yml`. Your content stays in your repository whichever you choose, so you can switch later by editing that block.

## Your Git host, with an OAuth client

Decap CMS talks to your Git host's API directly from the browser. Editors log in with their own Git host account and need write access to the repository.

```yaml
backend:
  name: github
  repo: owner-name/repo-name # Path to your GitHub repository
  branch: main # Branch to update (optional; defaults to master)
  base_url: https://auth.example.com # Where your OAuth client runs
```

GitHub's login needs a small server, an OAuth client, that holds your OAuth app's secret and hands the token back to Decap CMS. Deploy one of the [external OAuth clients](/docs/external-oauth-clients/), for example a Cloudflare Worker, and set `base_url` to its address. GitLab, Gitea and Forgejo can log in from the browser with PKCE, so they don't need a server.

| Git host       | Backend                                                                            | Login                                                        |
| -------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| GitHub         | [`github`](/docs/github-backend/)                                                  | An [OAuth client](/docs/external-oauth-clients/)             |
| GitLab         | [`gitlab`](/docs/gitlab-backend/)                                                  | PKCE from the browser, or an OAuth client                    |
| Gitea, Forgejo | [`gitea`](/docs/gitea-backend/), [`forgejo`](/docs/gitea-backend/#forgejo-backend) | PKCE from the browser                                        |
| Bitbucket      | [`bitbucket`](/docs/bitbucket-backend/)                                            | An OAuth server, see the Bitbucket page                      |
| Azure DevOps   | [`azure`](/docs/azure-backend/)                                                    | A Microsoft Entra ID application                             |

## Decap Turbo

[Decap Turbo](/docs/turbo-overview/) is an optional hosted backend run by the Decap maintainers, for repositories on GitHub and GitLab. It handles login, so editors don't need a Git host account, adds invitations and roles, and proxies and caches requests to your Git host's API. It has a Free plan. Decap CMS itself is free and works without it.

```yaml
backend:
  name: turbo-github # or turbo-gitlab
  turbo_site_id: your-site-id
```

Start with [Getting started](/docs/turbo-getting-started/), then follow [Connecting a site](/docs/turbo-connecting-a-site/).

## Local backend, for development

`local_backend: true` lets Decap CMS read and write the files in your local repository, with no login. Add it next to the `backend` you use on your live site, run `npx decap-server` in the root of your repository, and open your development server's `/admin/` page. Decap CMS uses it only on `localhost` and `127.0.0.1` while `decap-server` is running. Everywhere else, it uses `backend`.

```yaml
backend:
  name: github
  repo: owner-name/repo-name

local_backend: true
```

See [Decap Proxy](/docs/decap-proxy/) for the options.

## Git Gateway

{{< git-gateway-deprecated >}}

Sites that already use Git Gateway with Netlify Identity can find their setup on the [Git Gateway](/docs/git-gateway-backend/) page, along with how to move to one of the backends above.

{{< pagination-nav 
  prevUrl="/docs/install-decap-cms/" 
  prevLabel="1. Install Decap CMS"
  nextUrl="/docs/configure-decap-cms/"
  nextLabel="3. Configure Decap CMS"
>}}
