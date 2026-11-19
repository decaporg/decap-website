---
title: External OAuth Clients
description: "The servers that complete GitHub or GitLab login for Decap CMS: the hosted Decap Turbo backend, or a community OAuth client you deploy yourself, such as a Cloudflare Worker or an Astro integration."
group: Accounts
weight: 60
---
The `github` backend, and the `gitlab` and `bitbucket` backends with the authorization code flow, need an OAuth client: a small server that holds your OAuth app's client secret, completes the Git host's login, and passes the access token back to Decap CMS. You point Decap CMS at it with `base_url` (and, if its paths differ, `auth_endpoint`) in the `backend` block of your `config.yml`:

```yaml
backend:
  name: github
  repo: owner-name/repo-name
  base_url: https://auth.example.com
```

GitLab, Gitea and Forgejo can log in from the browser with PKCE instead, without a server. See [Choosing a Backend](/docs/choosing-a-backend/).

## Hosted

[Decap Turbo](/docs/turbo-overview/) is the optional hosted backend by the Decap maintainers. It handles login for GitHub and GitLab repositories, so there's no OAuth client to deploy, and editors don't need a Git host account. It uses its own `turbo-github` and `turbo-gitlab` backends instead of `base_url`, and has a Free plan. See [Connecting a site](/docs/turbo-connecting-a-site/).

If your site is hosted on Netlify, Netlify's authentication provider can also act as the OAuth client. It is the default `base_url` of the `github` and `bitbucket` backends. See the [GitHub](/docs/github-backend/), [GitLab](/docs/gitlab-backend/) and [Bitbucket](/docs/bitbucket-backend/) backend pages.

## Self-hosted

These community-maintained projects run on your own infrastructure. Feel free to hit the "Edit this page" button if you'd like to add yours!

| Author                                                       | Supported Git hosts               | Language(s)/Platform(s)                   | Link                                                                                                                                                           |
| ------------------------------------------------------------ | --------------------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@dorukgezici](https://github.com/dorukgezici)               | GitHub                            | Astro integration, TypeScript             | [Repo](https://github.com/dorukgezici/astro-decap-cms-oauth)                                                                                                   |
| [@adrian-ub](https://github.com/adrian-ub)                   | GitHub, GitLab                    | TypeScript                                | [Repo](https://github.com/ublabs/netlify-cms-oauth)                                                                                                            |
| [@loteoo](https://github.com/loteoo)                         | GitHub, GitLab                    | Node.js                                   | [GitHub](https://github.com/decapbridge), [Website](https://decapbridge.com/)                                                                                  |
| [@sterlingwes](https://github.com/sterlingwes)               | GitHub                            | Cloudflare Workers, TypeScript            | [Repo](https://github.com/sterlingwes/decap-proxy)                                                                                                             |
| [@njfamirm](https://github.com/njfamirm)                     | GitHub                            | Node.js, Typescript                       | [Repo](https://github.com/njfamirm/decap-cms-github-backend), [Blog](https://medium.com/@njfamirm/a-step-by-step-guide-to-self-hosting-decap-cms-5425ab44abca) |
| [@davidejones](https://github.com/davidejones)               | GitHub, GitHub Enterprise         | Python                                    | [Repo](https://github.com/davidejones/netlify-cms-oauth-provider-python)                                                                                       |
| [@BTx123](https://github.com/BTx123)                         | GitHub, GitHub Enterprise, GitLab | Firebase V2 Cloud Function                | [Repo](https://github.com/BTx123/decap-cms-oauth-firebase)                                                                                                     |
| [@alukovenko](https://github.com/alukovenko/)                | GitHub                            | Go                                        | [Repo](https://github.com/alukovenko/decapcms-oauth2)                                                                                                          |
| [@igk1972](https://github.com/igk1972)                       | GitHub, GitHub Enterprise         | Go                                        | [Repo](https://github.com/igk1972/netlify-cms-oauth-provider-go)                                                                                               |
| [@nuzulul](https://github.com/nuzulul)                       | GitHub                            | Google Apps Script                        | [Repo](https://github.com/nuzulul/decap-cms-google-apps-script)                                                                                                |
| [@daisuke-awaji](https://github.com/daisuke-awaji)           | GitHub                            | TypeScript, AWS Lambda, Amazon APIGateway | [Repo](https://github.com/daisuke-awaji/decapcms-lambda-oauth2-backend)                                                                                        |
| [@augustogunsch](https://github.com/augustogunsch)           | GitHub, GitHub Enterprise, GitLab | Rust                                      | [Repo](https://github.com/augustogunsch/decap_oauth)                                                                                                           |
| [@i40west](https://github.com/i40west)                       | GitHub                            | Cloudflare Pages                          | [Repo](https://github.com/i40west/netlify-cms-cloudflare-pages)                                                                                                |
| [@vencax](https://github.com/vencax)                         | GitHub, GitHub Enterprise         | Node.js                                   | [Repo](https://github.com/vencax/netlify-cms-github-oauth-provider)                                                                                            |
| [@abcalderon3](https://github.com/abcalderon3)               | GitHub, GitHub Enterprise         | Google Cloud Function with Python         | [Repo](https://github.com/abcalderon3/netlify-cms-oauth-client-cloud-function)                                                                                 |
| [@bericp1](https://github.com/bericp1)                       | GitHub, GitHub Enterprise         | Node.js, Vercel Serverless                | [Repo](https://github.com/bericp1/netlify-cms-oauth-provider-node)                                                                                             |
| [@TSV-Zorneding-1920](https://github.com/TSV-Zorneding-1920) | GitHub, GitHub Enterprise         | PHP                                       | [Repo](https://github.com/TSV-Zorneding-1920/netlify-cms-oauth-provider-php)                                                                                   |
| [@Herohtar](https://github.com/Herohtar)                     | GitHub, GitHub Enterprise         | Firebase Cloud Function                   | [Repo](https://github.com/Herohtar/netlify-cms-oauth-firebase)                                                                                                 |

Projects whose repository is archived, or that haven't been updated in several years, are left out. Older projects in the list may still work, since the OAuth flow they implement hasn't changed, but check that a project is maintained before you depend on it.

Check each project's documentation for instructions on installation and usage.
