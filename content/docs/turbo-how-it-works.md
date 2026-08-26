---
title: How it works
group: Turbo
weight: 40
---

A conceptual look at what Decap Turbo actually does when your editors use it — useful if you're evaluating whether it fits your setup, or just curious what's happening behind "Login with Turbo."

## The org → site → member model

An **organization** is the billing and ownership unit — think "your company" or "your client." An organization can own multiple **sites**, and each site corresponds to one Decap CMS install (one repo, one `config.yml`).

People get access at two levels:

- **Organization membership** — owner or member of the org itself. This is the paid seat.
- **Site membership** — a site role (Full access, or a custom role) on a specific site, layered on top of an org seat. Accepting an invite always grants org membership, even if the invite's only purpose was to give you access to one site.

This is why billing is per-org-seat rather than per-site-grant: once someone has a seat in your organization, you can give them access to as many of your sites as you like at no extra cost. See [Organizations, sites, and roles](../turbo-roles-and-members/) for the practical side of this.

## Your content still lives in Git

Turbo doesn't replace your Git repository as the source of truth. Every save still becomes a real commit in your GitHub or GitLab repo, on the branch you configured — exactly like the standard Decap CMS GitHub/GitLab backends, because that's what it's built on. Turbo changes *how* the CMS talks to your Git host and *how* editors authenticate, not where your content lives.

## Editors never see a Git hosting token

Normally, Decap CMS's GitHub/GitLab backends need each editor to authenticate directly with that Git host (OAuth or a personal token), and that editor needs real write access to your repo. With Turbo, editors authenticate with their Decap Turbo account instead. API calls to your Git hosting platform are made server-side, on the site member's behalf, using Turbo's own app/token installation — not their own Git hosting identity.

Practically, this means:

- Editors don't need an account on your Git hosting platform at all.
- You don't need to manage repo collaborator access for every editor.
- Access is controlled entirely through Turbo's org/site membership instead.

## Why large collections load faster

Reading a folder collection with hundreds or thousands of entries directly from your Git host's API means listing the folder and then fetching every file — one request per file, against that platform's rate limits. A collection of a thousand entries is a thousand-odd requests, every time someone opens it on a new device.

Turbo mirrors your repository's content into its own database and reads the collection back from there in a handful of queries. Three things make that mirror cheap to keep current:

- **Files are stored by content, not by location.** Every file in Git has an identifier derived from its contents, so Turbo stores each distinct version once. Switching branches, or opening two collections that overlap, costs nothing extra — Turbo already has those bytes.
- **Only what changed is fetched.** Turbo compares the repository's current file listing against what it already holds and downloads just the differences. A typical edit means fetching one file, not the collection.
- **Nothing is served without checking.** Before returning a collection, Turbo asks your Git host whether the branch has moved. That check is free — it doesn't count against your rate limits — and it's what lets the mirror be fast without ever being stale.

Saving works the same way in reverse: the commit goes to your repo, and the mirror is brought up to date against it immediately, so you're never looking at stale content right after editing. If someone commits outside the CMS — a `git push`, a build script, another tool — Turbo is notified and refreshes as well.

The content-addressed mirror described above currently applies to GitHub-backed sites. GitLab-backed sites are mirrored too, but without the incremental fetching, so a first load of a very large collection is slower.

## The login flow, end to end

1. Clicking "Login with Turbo" opens a popup pointed at Turbo's hosted login.
2. You authenticate there (or the popup recognizes you're already signed in).
3. Turbo hands your CMS tab a short-lived session, scoped to your account.
4. The CMS uses that session for every subsequent request, refreshing it automatically in the background before it expires.

The security-critical part of this flow is that the CMS only accepts that session handoff from the exact origin it expects — so a malicious page can't impersonate the login popup and hand the CMS a forged session.

## Permission enforcement isn't just a UI filter

If you use per-collection permissions (see [Roles and members](../turbo-roles-and-members/)), a collection a site member can't access is hidden from their CMS UI — but that's a convenience, not the actual security boundary. The real enforcement happens on Turbo's servers: every read and write is checked there regardless of what the CMS UI shows, so hiding a collection client-side is a UX nicety layered on top of server-side access control, not a substitute for it.
