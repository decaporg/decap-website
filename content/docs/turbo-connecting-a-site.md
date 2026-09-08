---
title: Connecting a site
group: Turbo
weight: 30
---

Once you've [created a site in Decap Turbo](../turbo-getting-started/#creating-your-first-site), point your Decap CMS `config.yml` at it by switching your backend to `turbo-github` (or `turbo-gitlab` if your site's repo lives on GitLab).

## Use the beta build

Turbo backends aren't in the npm `decap-cms` release yet — they only exist on the beta build. If you install Decap CMS via `npm install decap-cms` (or `decap-cms-app`), **`turbo-github` and `turbo-gitlab` won't be available**, and your CMS will fail to load with an unrecognized-backend error.

Replace your CMS script tag with the beta build instead:

```html
<script src="https://decap-turbo.cdn.decapcms.org/decap-cms.js"></script>
```

This will be unnecessary once turbo backends ship in a stable npm release.

## Minimal configuration

```yaml
backend:
  name: turbo-github
  repo: owner/repo
  branch: main
  turbo_site_id: your-site-id
```

Or, for a GitLab-hosted repo:

```yaml
backend:
  name: turbo-gitlab
  repo: owner/repo
  branch: main
  turbo_site_id: your-site-id
```

Both backends take the same fields — only `name` and which Git host `repo` points at differ. `turbo_site_id` is the UUID shown on your site's detail page in Decap Turbo — it's the only Turbo-specific value you need to set by hand. Everything else the backend needs (which Supabase project to talk to, which endpoint to proxy Git calls through) is resolved automatically at load time, based on that ID.

This means:

- Rotating credentials or infrastructure changes on Turbo's side never require touching your `config.yml`.
- If the config lookup ever fails, the CMS shows a clear error before you even reach the login screen rather than failing partway through — see [Troubleshooting](../turbo-troubleshooting-faq/) for what those errors mean.

## Logging in

With `backend: turbo-github` (or `turbo-gitlab`) set, your Decap CMS login screen shows a **"Login with Turbo"** button instead of the usual Git provider login. Clicking it opens a popup:

- If you're not already signed in to Decap Turbo, you'll log in there (same account you use for the Turbo dashboard).
- If you're already signed in, the popup completes and closes automatically.

You're then editing as yourself — commits made through the CMS are attributed to your real name/email, not a shared bot account, and your session refreshes automatically in the background so you don't get logged out mid-edit. You'll need to already have [access to this specific site](../turbo-roles-and-members/) for this to work — being able to log in to Decap Turbo isn't enough on its own if you haven't been added to the site.

## The config path field

The **config path** you set when creating the site (default `admin/config.yml`) needs to point at the actual file in your repo, because Turbo reads your collections from it to support per-collection permissions (see [Roles and members](../turbo-roles-and-members/)). Common conventions by generator:

| Generator | Typical config path |
|---|---|
| Plain static site / Jekyll | `admin/config.yml` |
| Hugo | `static/admin/config.yml` |
| Next.js | `public/admin/config.yml` |

If your setup is different, use whatever path your build actually serves the CMS files from.

## Multiple environments

If you list more than one **admin interface URL** on the site (e.g. one line for production, one for staging), the same `turbo_site_id` and login flow work from either — useful if you preview content changes on staging before they go live.

## Media library

Want editors to upload images/files through Decap CMS instead of committing them to your repo? See [Media library (S3-compatible)](../turbo-media-proxy/) — available on all plans.
