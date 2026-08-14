---
title: Connecting a site
group: Turbo
weight: 30
---

Once you've [created a site in Decap Turbo](../turbo-getting-started/#creating-your-first-site), point your Decap CMS `config.yml` at it by switching your backend to `turbo-github` (or `turbo-gitlab` if your site's repo lives on GitLab).

## Minimal configuration

```yaml
backend:
  name: turbo-github
  repo: owner/repo
  branch: main
  turbo_site_id: your-site-id
```

`turbo_site_id` is the UUID shown on your site's detail page in Decap Turbo — it's the only Turbo-specific value you need to set by hand. Everything else the backend needs (which Supabase project to talk to, which endpoint to proxy Git calls through) is resolved automatically at load time, based on that ID.

This means:

- Rotating credentials or infrastructure changes on Turbo's side never require touching your `config.yml`.
- If the config lookup ever fails, the CMS shows a clear error before you even reach the login screen rather than failing partway through — see [Troubleshooting](../turbo-troubleshooting-faq/) for what those errors mean.

## Logging in

With `backend: turbo-github` (or `turbo-gitlab`) set, your Decap CMS login screen shows a **"Login with Turbo"** button instead of the usual Git provider login. Clicking it opens a popup:

- If you're not already signed in to Decap Turbo, you'll log in there (same account you use for the Turbo dashboard).
- If you're already signed in, the popup completes and closes automatically.

You're then editing as yourself — commits made through the CMS are attributed to your real name/email, not a shared bot account, and your session refreshes automatically in the background so you don't get logged out mid-edit. You'll need to already have [access to this specific site](../turbo-roles-and-members/) (as an admin or editor) for this to work — being able to log in to Decap Turbo isn't enough on its own if you haven't been added to the site.

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

## Advanced: skipping the automatic lookup

For local or offline CMS development against a different Supabase project, you can bypass the automatic config lookup entirely by specifying the underlying values yourself:

```yaml
backend:
  name: turbo-github
  repo: owner/repo
  branch: main
  turbo_site_id: your-site-id
  base_url: https://your-project-ref.supabase.co
  api_root: https://your-project-ref.supabase.co/functions/v1/gh
  supabase_app_id: your-project-ref
  supabase_anon_key: your-supabase-anon-key
```

Whatever you set explicitly always wins over what would otherwise be fetched automatically. This is an advanced/self-hosting path — most sites never need it. If you're running your own Supabase project rather than the shared Decap Turbo one, see the [`decap-cms-backend-turbo-github`](https://github.com/decaporg/decap-cms/tree/main/packages/decap-cms-backend-turbo-github) or [`decap-cms-backend-turbo-gitlab`](https://github.com/decaporg/decap-cms/tree/main/packages/decap-cms-backend-turbo-gitlab) README for the schema and setup it expects.
