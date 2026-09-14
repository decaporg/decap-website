---
title: How it works
group: Turbo
weight: 40
---

What Turbo does behind "Login with Turbo", for evaluating whether it fits your setup.

## Organizations, sites, members

An **organization** owns **sites**; each site is one Decap CMS install. Access is two-layered:

- **Organization membership** — owner or member. This is the paid seat.
- **Site membership** — a role on one site, on top of a seat.

Accepting any invitation grants org membership, even one whose only purpose was site access. That is why billing is per seat, not per site grant: once someone holds a seat you can add them to as many of your sites as you like at no extra cost. See [Organizations, sites, and roles](../turbo-roles-and-members/).

## Content stays in Git

Every save is a real commit in your GitHub or GitLab repo, on the branch you configured — the Turbo backends extend the standard GitHub and GitLab backends. Turbo changes how the CMS reaches your Git host and how editors authenticate, not where content lives.

## Editors don't need a Git host account

The standard backends make each editor authenticate with GitHub or GitLab, which means each editor needs write access to your repo. Turbo authenticates editors against their Turbo account and makes the Git API calls server-side, using the organization's [Git connection](../turbo-getting-started/#connect-your-git-provider).

So: no Git host accounts for editors, no repo collaborator list to maintain, and access governed entirely by Turbo membership.

## Why large collections load faster

Read a folder collection straight from a Git host and you list the folder, then fetch every file — one request each, against that host's rate limit. A thousand entries is a thousand requests, on every new device.

Turbo mirrors the repo into its own database and serves collections from there. Files are stored by content hash, so a version is stored once however many branches or collections contain it; only changed files are fetched; and before answering, Turbo makes one conditional request to check whether the branch has moved, which costs the same whatever the collection's size.

Saves update the mirror in the same call as the commit, so content is never stale right after an edit. Commits made outside the CMS invalidate it through a webhook.

## Login flow

1. **Login with Turbo** opens a popup on Turbo's hosted login.
2. You authenticate, or the popup recognizes an existing session.
3. Turbo hands the CMS tab a short-lived session scoped to your account.
4. The CMS refreshes it in the background before it expires.

The CMS accepts that handoff only from the exact origin it expects, so another page can't impersonate the popup and inject a session.

## Permissions are enforced server-side

With [per-collection permissions](../turbo-roles-and-members/#site-roles), a collection someone can't access is hidden from their CMS UI — that's convenience. The check that matters runs on Turbo's servers on every read and write, whatever the UI showed.
