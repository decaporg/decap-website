---
title: Getting started
group: Turbo
weight: 20
---

Decap Turbo is invite-only during closed beta. This walks through accepting an invite (or signing up directly, once that opens up), creating your organization, and creating your first site.

## Accepting an invite

If someone invited you to their organization, you'll get an email with an accept link. Opening it takes you to an accept-invitation page:

- If you don't have a Decap Turbo account yet, you'll be walked through creating one (email/password, or one of the sign-in providers your organization has enabled, e.g. Google or GitHub) right there.
- If you already have an account, you just confirm and accept while signed in.

Accepting adds you to the inviting organization — and to any specific sites the invite included — immediately. You don't create your own organization in this path; you land directly on the sites and content the owner scoped you into. If you were only invited to specific sites (a pure editor invite), your [profile page](#your-profile) is really all you need — see below.

If you were invited as a beta participant without an organization attached, you'll go through account creation and then create your own organization (below).

## Creating your organization

Every organization starts on the **Free** plan (1 site, 1 seat) — no payment step required to get going. From your profile, use **"+ Add organization"**, or go directly to the new-organization page. The only field is a name, pre-filled with a suggestion based on your email but fully editable. Submitting makes you the **owner** of a new organization and takes you into it.

You can belong to more than one organization (for example, one per client if you run an agency), and you can create additional ones later the same way.

## Creating your first site

A "site" in Decap Turbo corresponds to one Decap CMS install — one repo, one `config.yml`. Only organization **owners** can create sites, and only up to your plan's site limit.

From your organization's Sites page, start a new site and fill in:

- **Site name** — anything descriptive; this is just a label in Turbo, not used in your CMS config.
- **Admin interface URL(s)** *(optional)* — the URL(s) where your Decap CMS admin actually loads, one per line if you have more than one (e.g. production and staging). This is used later to validate the login flow, so it's worth filling in even though it's optional at creation time.
- **Repo** *(optional)* — your GitHub repo in `owner/name` format.
- **Branch** — defaults to `main`.
- **Config path** — the repo-relative path to your site's `config.yml`, defaulting to `admin/config.yml`. This varies by site generator: Hugo sites often serve it from `static/admin/config.yml`, Next.js from `public/admin/config.yml`. Turbo reads your collections from this file to support per-collection permissions later, so it needs to point at the real file.

Submitting creates the site and makes you a site **admin** on it, then takes you to the site's detail page.

## The site detail page

This is where you'll spend most of your time managing a given site:

- **Overview** — the fields you just set (editable), plus cache stats (which repo/branches/collections are currently cached, how many files) and a **Clear site cache** action if you ever need to force a re-sync from GitHub.
- **Site members** *(site admins only)* — who has access to this specific site and at what role.
- **Variables** *(site admins only)* — a key/value store for anything your site config needs at runtime (see [Roles and members](../turbo-roles-and-members/#site-variables)).
- **Danger zone** — transfer the site to another organization, lock it, or delete it.

Once the site exists, the next step is pointing your actual Decap CMS `config.yml` at it — covered in [Connecting a site](../turbo-connecting-a-site/).

## Your profile

Your profile page is your personal home in Decap Turbo — reachable any time from the nav, and where you land automatically if you belong to no organization. It shows:

- Every organization you're a member of, and lets you switch your active one or create a new one.
- Every site you have direct access to, each with a link straight to that site's admin interface — useful if you're purely an editor and never need to touch organization-level settings at all.
- Account settings: changing your password and deleting your account.

If you were invited as a site editor only, this page — not the organization dashboard — is where you'll come back to each time you want to open the CMS.
