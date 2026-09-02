---
title: Troubleshooting & FAQ
group: Turbo
weight: 70
---

Common errors and questions when setting up or running Decap Turbo.

## Reporting a bug or leaving feedback

Organization owners can report issues via the Feedback page. Use it for bugs, rough edges, or feature requests about Decap Turbo itself — the admin app, not your own site's content or CMS setup. If someone else already reported the same problem, your submission is added as a comment on their existing report instead of opening a duplicate, and you can follow its status and add follow-up comments from the same page.

For issues with your own site's content, contact whoever manages that site directly — the Turbo team has no visibility into what you publish.

## Errors when loading the CMS

**"Unknown site_id"**
The `turbo_site_id` in your `config.yml` doesn't match any site in your Decap Turbo organization. Double-check it against the ID shown on the site's detail page — it's easy to copy the wrong site's ID if you manage several.

**"This site has been locked"**
The site's organization is over its plan's site limit, usually because of a downgrade or a canceled subscription. Log in to Decap Turbo and check the organization's [Billing](../turbo-billing/) page — either upgrade, or unlock this site if you have a free slot (see [site locking](../turbo-roles-and-members/#site-locking)).

## Errors during login

**The login popup closes but nothing happens / "origin not allowed"**
The admin interface URL configured on the site in Decap Turbo needs to *exactly* match the URL your Decap CMS is actually served from (protocol, host, and path) — this is a deliberate security check, not a bug. Go to the site's Overview tab in Decap Turbo and make sure the admin interface URL matches where you're actually loading `/admin` from, including for any staging/preview domains you use.

**"Session expired. Please log in again."**
Your session's refresh failed in a way that can't be recovered automatically (for example, the refresh token itself expired or was invalidated) — just log in again. If instead you occasionally notice a brief pause with no error and everything keeps working, that's a transient refresh retry succeeding in the background, not a problem.

## Errors managing organizations and sites

**"Only organization owners can create new sites"**
Site creation is an owner-only action. Ask an owner of the organization to create the site, or to promote you to owner if that's the intended long-term setup.

**"This organization has reached its site limit" / "...seat limit"**
You're at your plan's included sites or seats. Either free up a slot (delete or lock an existing site, remove a member) or add capacity from [Billing](../turbo-billing/) — extra sites/seats as an add-on, or upgrade plans.

## Frequently asked questions

**Does using Decap Turbo change how my content is stored?**
No — your content is still committed to your GitHub or GitLab repository exactly as it would be with the standard GitHub/GitLab backend. See [How it works](../turbo-how-it-works/#your-content-still-lives-in-git).

**Can I move a site off Turbo later?**
Yes. Since your content already lives in your Git repo, switching back to a standard backend (like the plain [GitHub backend](../github-backend/) or [GitLab backend](../gitlab-backend/)) is just a `config.yml` change — nothing about your content is locked into Turbo.

**Can I self-host instead of using Turbo at all?**
Yes — Decap CMS itself is free and open source regardless of whether you use Turbo. Self-hosting means running your own auth (a Git provider's OAuth, [Git Gateway](../git-gateway-backend/), etc.) instead of Turbo's hosted auth and Git hosting proxy. See the [Decap Turbo product page](/turbo/) for how the two compare.

**Do my editors need GitHub or GitLab accounts?**
No. Editors authenticate with their Decap Turbo account only — see [How it works](../turbo-how-it-works/#editors-never-see-a-git-hosting-token).

**How do I get access if I don't have an account yet?**
Decap Turbo is in public preview — [sign up](https://turbo.decapcms.org/signup) directly, no invite required.

**How do I ask about Enterprise or dedicated infrastructure?**
Contact us from the [Turbo plans page](/turbo/#plans) or your organization's Billing page — Enterprise is a custom-quoted plan handled outside self-serve signup.
