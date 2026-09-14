---
title: Decap Turbo overview
linkTitle: Overview
group: Turbo
weight: 10
---

[Decap Turbo](/turbo/) is a hosted backend for Decap CMS. Editors log in with a Turbo account instead of a Git host account, and API calls to GitHub or GitLab go through a server-side proxy that caches your repository's content — so large collections load in a handful of requests instead of one per entry.

Your content stays in your own Git repository. Every save is still a commit on the branch you configure.

Decap Turbo is in public preview. [Sign up](https://turbo.decapcms.org/signup) to get an account.

## In this section

- **[Getting started](../turbo-getting-started/)** — create an organization, connect your Git provider, create a site.
- **[Connecting a site](../turbo-connecting-a-site/)** — point an existing `config.yml` at Turbo.
- **[How it works](../turbo-how-it-works/)** — the org/site model, the proxy, and the login flow.
- **[Deploy status](../turbo-deploy-status/)** — tell editors when their change is live. GitHub repositories only.
- **[Deploy status setup](../turbo-deploy-status-setup/)** — the webhook, for hosts that don't report to GitHub.
- **[Organizations, sites, and roles](../turbo-roles-and-members/)** — access control and invitations.
- **[Media library](../turbo-media-proxy/)** — S3-compatible storage for uploads. Pro and above.
- **[Billing and plans](../turbo-billing/)** — upgrading, downgrading, invoices, and request limits.
- **[Troubleshooting & FAQ](../turbo-troubleshooting-faq/)** — common errors.

Pricing and the plan comparison live on the [product page](/turbo/).
