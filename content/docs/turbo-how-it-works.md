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
- **Site membership** — admin or editor on a specific site, layered on top of an org seat. You can't grant someone access to a site without them already being a member of the org that owns it.

This is why billing is per-org-seat rather than per-site-grant: once someone has a seat in your organization, you can give them access to as many of your sites as you like at no extra cost. See [Organizations, sites, and roles](../turbo-roles-and-members/) for the practical side of this.

## Your content still lives in Git

Turbo doesn't replace your Git repository as the source of truth. Every save still becomes a real commit in your GitHub repo, on the branch you configured — exactly like the standard Decap CMS GitHub backend, because that's what it's built on. Turbo changes *how* the CMS talks to GitHub and *how* editors authenticate, not where your content lives.

## Editors never see a GitHub token

Normally, Decap CMS's GitHub backend needs each editor to authenticate directly with GitHub (OAuth or a personal token), and that editor needs real write access to your repo. With Turbo, editors authenticate with their Decap Turbo account instead. GitHub API calls are made server-side, on the editor's behalf, using Turbo's own GitHub App installation — not the editor's own GitHub identity.

Practically, this means:

- Editors don't need a GitHub account at all.
- You don't need to manage repo collaborator access for every editor.
- Access is controlled entirely through Turbo's org/site membership instead.

## Why large collections load faster

Reading a folder collection with hundreds or thousands of entries directly from the GitHub API means listing the folder and then fetching every file — one request per file, against GitHub's rate limits. Turbo mirrors your repository's content into its own database and keeps that mirror in sync as files change, so the CMS can read a large collection back in a handful of queries instead of hundreds of GitHub calls. A save is reflected in that mirror immediately, so you're never looking at stale content right after editing.

## The login flow, end to end

1. Clicking "Login with Turbo" opens a popup pointed at Turbo's hosted login.
2. You authenticate there (or the popup recognizes you're already signed in).
3. Turbo hands your CMS tab a short-lived session, scoped to your account.
4. The CMS uses that session for every subsequent request, refreshing it automatically in the background before it expires.

The security-critical part of this flow is that the CMS only accepts that session handoff from the exact origin it expects — so a malicious page can't impersonate the login popup and hand the CMS a forged session.

## Permission enforcement isn't just a UI filter

If you use per-collection permissions (see [Roles and members](../turbo-roles-and-members/)), a collection an editor can't access is hidden from their CMS UI — but that's a convenience, not the actual security boundary. The real enforcement happens on Turbo's servers: every read and write is checked there regardless of what the CMS UI shows, so hiding a collection client-side is a UX nicety layered on top of server-side access control, not a substitute for it.

## Want the implementation-level detail?

This page intentionally stays conceptual. If you're integrating deeply or just curious about the actual mechanics — the config resolution hook, the database schema behind the content cache, token refresh internals — the [`decap-cms-backend-turbo-github`](https://github.com/decaporg/decap-cms/tree/main/packages/decap-cms-backend-turbo-github) or [`decap-cms-backend-turbo-gitlab`](https://github.com/decaporg/decap-cms/tree/main/packages/decap-cms-backend-turbo-gitlab) README on GitHub is the source of truth.
