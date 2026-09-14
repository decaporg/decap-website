---
title: Connecting a site
group: Turbo
weight: 30
---

Once you've [created a site](../turbo-getting-started/#create-a-site), switch your backend to `turbo-github`, or `turbo-gitlab` if the repo is on GitLab.

## Install the beta release

The Turbo backends aren't in the stable release yet. They ship on npm under the `beta` dist-tag.

```html
<!-- track the tag -->
<script src="https://unpkg.com/decap-cms@beta/dist/decap-cms.js"></script>

<!-- or pin a version -->
<script src="https://unpkg.com/decap-cms@3.17.0-beta.0/dist/decap-cms.js"></script>
```

```sh
npm install decap-cms-app@beta            # tracks the tag
npm install decap-cms-app@3.17.0-beta.0   # pinned
```

Tracking `@beta` keeps you current; pinning is safer, since a beta can ship breaking changes in a minor version.

## Configuration

```yaml
backend:
  name: turbo-github # or turbo-gitlab
  turbo_site_id: your-site-id
  branch: main # optional
```

`turbo_site_id` is the UUID on the site's Overview tab, and the only value you have to set by hand. Everything else the backend needs — the Supabase project, the proxy endpoint, the repo — is fetched from the control plane at load time, keyed on that ID. Infrastructure changes on Turbo's side never require a `config.yml` edit.

### `repo` and `branch`

These behave differently from every other backend, and differently from each other:

- **`repo` is ignored.** The value on the site row wins. The proxy resolves permissions from it, so a stale local copy is exactly what produces `requested repo does not match`. Change the repo in the dashboard, not here.
- **`branch` wins if you set it**, and falls back to the site row if you don't. That is deliberate: one Turbo site can back several deploys of the same repo, each editing its own branch — production on `main`, staging on `develop` — with the same `turbo_site_id` in both configs.

## Logging in

The login screen shows **Login with Turbo** and opens a popup. You need [access to that specific site](../turbo-roles-and-members/) — a Turbo account alone isn't enough.

Sessions refresh in the background, so editors aren't logged out mid-edit.

## Commit attribution

Different on each backend — check your own `git log` before assuming.

**GitLab** sends your Turbo display name and account email as `author_name` and `author_email`, so you are the commit author. The committer is the GitLab account that authorized the [Git connection](../turbo-getting-started/#connect-your-git-provider).

**GitHub** makes the App the author and credits you on a trailer:

```
Author: decap-turbo[bot] <...>

    Update post "my first post"

    Co-authored-by: Your Name <you@example.com>
```

GitHub's `createCommitOnBranch` authors as whoever holds the token, with no override. The alternative is the multi-step REST sequence, which costs three extra round trips on every save. GitHub renders co-author avatars and counts the commit toward your contributions, so attribution is still visible — on the trailer rather than the author field. Point any tooling that reads `git log --author` at the trailer instead.

## Config path

Turbo reads your collections from the file at the site's **config path** to support [per-collection permissions](../turbo-roles-and-members/#site-roles).

| Generator | Typical path |
|---|---|
| Plain static site / Jekyll | `admin/config.yml` |
| Hugo | `static/admin/config.yml` |
| Next.js | `public/admin/config.yml` |

## Media uploads

To keep uploads out of your repo, see [Media library](../turbo-media-proxy/). Pro and above.
