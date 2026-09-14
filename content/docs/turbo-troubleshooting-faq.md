---
title: Troubleshooting & FAQ
group: Turbo
weight: 70
---

## Loading the CMS

**"Unknown site_id"** — `turbo_site_id` doesn't match a site in your organization. Check it against the Overview tab; it's easy to copy the wrong one when you manage several.

**"This site has been locked"** — the organization is over its site limit, usually after a downgrade or cancellation. Upgrade, or unlock the site if you have a free slot. See [site locking](../turbo-roles-and-members/#site-locking).

**"This organization has hit its daily GitHub request limit"** (or GitLab) — you've used the plan's [daily ceiling](../turbo-billing/#daily-request-ceilings). The response carries `Retry-After`; the counter resets on a 24-hour boundary. Nothing is charged or locked. Tell us if you hit it during ordinary editorial work.

**`requested repo does not match`** — the `repo` in `config.yml` disagrees with the site row, and the site row is authoritative. Change it in the dashboard; see [`repo` and `branch`](../turbo-connecting-a-site/#repo-and-branch).

**`use_graphql: true` is rejected on `turbo-gitlab`** — GraphQL requests would bypass per-site scoping, so the backend refuses to start. Remove it; the plain `gitlab` backend supports it, `turbo-gitlab` doesn't.

## Logging in

**The popup closes and nothing happens / "origin not allowed"** — the site's admin interface URL must match where your CMS is actually served from, exactly: protocol, host and path. Check the Overview tab, including any staging domains.

**"Session expired. Please log in again."** — the refresh token expired or was invalidated. Log in again. A brief pause with no error is a refresh retry succeeding in the background, not a problem.

## Managing organizations and sites

**"Only organization owners can create new sites"** — ask an owner to create it, or to promote you.

**"This organization has no GitHub connection yet"** — connect the provider before creating sites. See [Connect your Git provider](../turbo-getting-started/#connect-your-git-provider).

**"This organization has reached its site limit" / "…seat limit"** — free up a slot, or add capacity from [Billing](../turbo-billing/).

## Editors are never told when a change is live

Deploy status needs something reporting your builds. Most hosts do it through the Decap GitHub App; **Netlify doesn't**, for branch or production deploys, and no Netlify setting changes that. Open the site's Deploys tab — if nothing is recorded, [add the webhook](../turbo-deploy-status-setup/#netlify). Other causes are in [Deploy status](../turbo-deploy-status/#nothing-arrives).

## Reporting a bug

Organization owners can report issues from the **Feedback** page — bugs and feature requests about Turbo itself, not your site's content. A duplicate is added as a comment on the existing report rather than opening a second one, and you can follow status and reply from the same page.

## FAQ

**Does Turbo change how my content is stored?**
No. Content is committed to your repository exactly as the standard backends do. See [How it works](../turbo-how-it-works/#content-stays-in-git).

**Can I move off Turbo later?**
Yes — your content is already in Git, so switching to the plain [GitHub](../github-backend/) or [GitLab](../gitlab-backend/) backend is a `config.yml` change.

**Can I self-host instead?**
Yes. Decap CMS is free and open source either way; self-hosting means running your own auth — a Git provider's OAuth, [Git Gateway](../git-gateway-backend/), or [decap-proxy](../decap-proxy/) — instead of Turbo's hosted auth and proxy.

**Do editors need GitHub or GitLab accounts?**
No. See [How it works](../turbo-how-it-works/#editors-dont-need-a-git-host-account).

**Can editors sign in with Google or GitHub?**
Not yet — email and password today. Other providers will be added during the preview.

**Is deploy status available on GitLab?**
Not yet. It's `turbo-github` only.

**How do I ask about Enterprise?**
From the [plans page](/turbo/#plans) or your organization's Billing page. It's custom-quoted and handled outside self-serve checkout.
