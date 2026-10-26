---
group: Accounts
weight: 25
title: Gitea / Forgejo
---
For repositories stored on [Gitea](https://gitea.com) or [Forgejo](https://forgejo.org) instances, the `gitea` backend allows CMS users to log in directly with their Gitea/Forgejo account. Note that all users must have push access to your content repository for this to work.

Forgejo instances, such as [Codeberg](https://codeberg.org), can also use the [`forgejo` backend](#forgejo-backend), which adds the editorial workflow and open authoring.

*Note on supported versions* 

* Only Gitea **1.20** and upwards is supported due to API limitations in previous versions
* Only Forgejo **1.21.4** and upwards is supported due to CORS functionality

  * [CORS](https://forgejo.org/docs/latest/admin/config-cheat-sheet/#cors-cors) must be enabled and configured

## Authentication

With PKCE authorization, users can authenticate with Gitea or Forgejo directly from the client. To do this:

1. Create an OAuth2 application in your user or organization settings, or in the site administration panel of your Gitea or Forgejo instance.
2. For the **Redirect URIs**, enter the addresses where you access Decap CMS, for example, `https://www.mysite.com/admin/`.
3. Uncheck the **Confidential Client** checkbox. Decap CMS logs in from the browser and doesn't send a client secret, so login fails with `invalid empty client secret` when the application is confidential.
4. Copy the **Client ID** and add it to your `config.yml` file as `app_id`, along with the other options:

```yaml
backend:
  name: gitea
  repo: owner-name/repo-name # Path to your Gitea repository
  app_id: your-client-id # The Client ID provided by Gitea
  api_root: https://gitea.example.com/api/v1 # API URL of your Gitea instance
  base_url: https://gitea.example.com # Root URL of your Gitea instance
  # optional, defaults to master
  # branch: main
```

The `gitea` backend doesn't support the [editorial workflow](/docs/editorial-workflows/). With `publish_mode: editorial_workflow`, the CMS shows a configuration error instead of loading. On Forgejo, use the `forgejo` backend for the editorial workflow.

## Forgejo backend

<span class="version-tag">3.15</span>

Use Decap CMS 3.16.2 or later for the editorial workflow: with some Forgejo versions, earlier releases don't list new entries. For open authoring with a contributor fork that has a different name than the repository, use 3.17.2 or later.

The `forgejo` backend supports the [editorial workflow](/docs/editorial-workflows/) and [open authoring](/docs/open-authoring/) on Forgejo instances. Create the OAuth2 application as described in [Authentication](#authentication), then use a configuration similar to the following:

```yaml
backend:
  name: forgejo
  repo: owner-name/repo-name # Path to your Forgejo repository
  app_id: your-client-id # The Client ID provided by Forgejo
  api_root: https://codeberg.org/api/v1 # API URL of your Forgejo instance
  # optional, defaults to main
  # branch: main

publish_mode: editorial_workflow
```

It differs from the `gitea` backend in a few ways:

* `api_root` is required. Decap CMS builds the login URLs from it, so `base_url` and `auth_endpoint` aren't used.
* `branch` defaults to `main`.
* With the editorial workflow, Decap CMS tracks entry statuses with pull request labels (`decap-cms/draft`, `decap-cms/pending_review` and `decap-cms/pending_publish`) and creates them when they're missing. To change the `decap-cms/` prefix, set `cms_label_prefix`. With open authoring, contributors can't set labels, so no labels are used.
* Publishing an entry merges its pull request with a merge commit. `squash_merges` isn't supported.
* [Deploy preview links](/docs/deploy-preview-links/) aren't supported.

## Git Large File Storage (LFS)

Please note that the Gitea and Forgejo backends **do not** support [git-lfs](https://git-lfs.github.com/).
