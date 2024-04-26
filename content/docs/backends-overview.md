---
group: Accounts
weight: 1
title: Overview
---

A backend is JavaScript code that allows Decap CMS to communicate with a service that stores content - typically a Git host like GitHub or GitLab. It provides functions that Decap CMS can use to do things like read and update files using API's provided by the service.

## Backend Configuration

Individual backends should provide their own configuration documentation, but there are some configuration options that are common to multiple backends. A full reference is below. Note that these are properties of the `backend` field, and should be nested under that field.

| Field              | Default                                                                                                                                                       | Description                                                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repo`             | none                                                                                                                                                          | **Required** for `github`, `gitlab`, `azure`, `gitea` and `bitbucket` backends; ignored by `git-gateway`. Follows the pattern `[org-or-username]/[repo-name]`. |
| `branch`           | `master`                                                                                                                                                      | The branch where published content is stored. All CMS commits and PRs are made to this branch.                                                                 |
| `api_root`         | `https://api.github.com` (GitHub), `https://gitlab.com/api/v4` (GitLab), `https://try.gitea.io/api/v1` (Gitea) or `https://api.bitbucket.org/2.0` (Bitbucket) | The API endpoint. Only necessary in certain cases, like with GitHub Enterprise or self-hosted GitLab/Gitea.                                                    |
| `site_domain`      | `location.hostname` (or `cms.netlify.com` when on `localhost`)                                                                                                | Sets the `site_id` query param sent to the API endpoint. Non-Netlify auth setups will often need to set this for local development to work properly.           |
| `base_url`         | `https://api.netlify.com` (GitHub, Bitbucket), `https://gitlab.com` (GitLab) or `https://try.gitea.io` (Gitea)                                                | OAuth client hostname (just the base domain, no path). **Required** when using an external OAuth server or self-hosted GitLab/Gitea.                           |
| `auth_endpoint`    | `auth` (GitHub, Bitbucket) or `oauth/authorize` (GitLab)                                                                                                      | Path to append to `base_url` for authentication requests. Optional.                                                                                            |
| `cms_label_prefix` | `decap-cms/`                                                                                                                                                  | Pull (or Merge) Requests label prefix when using editorial workflow. Optional.                                                                                 |

## Creating a New Backend

Anyone can write a backend, but we don't yet have a finalized and documented API. If you would like to write your own backend for a service that does not have one currently, we recommend using the [GitHub backend](https://github.com/decaporg/decap-cms/tree/master/packages/decap-cms-backend-github) as a reference for API and best practices.

## Using Github with an OAuth Proxy

For a lightweight option to get running with Github as your CMS backend, you can setup an edge worker or serverless OAuth handler. The basic steps are:

1. Create a Github OAuth Application
1. Configure a separate domain you can use for the `backend.base_url` Decap configuration option (where you'll host your OAuth proxy)
1. Deploy your proxy

Your proxy should handle the following request paths:

1. `/auth` - when you click "Login with Github", Decap opens a pop-up window directed at the base_url you configured, which handles redirecting the user into Github's Authorization flow for your repo
1. `/callback` - when the user finishes the authorization flow, Github will callback to your OAuth handler with an authorization code that is sent to the Decap caller window from the pop-up using `window.postMessage`.

For more detailed instructions and example code see this [Cloudflare Worker template](https://github.com/sterlingwes/decap-proxy).
