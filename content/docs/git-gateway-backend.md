---
title: Git Gateway
description: The git-gateway backend, which Netlify has deprecated. How existing setups work, and how to move a site to a supported backend.
weight: 10
group: Accounts
---

{{< git-gateway-deprecated >}}

[Git Gateway](https://github.com/netlify/git-gateway) is an open source API, made by Netlify, that lets editors change your site's content without direct write access to your GitHub or GitLab repository. Decap CMS supports it through the `git-gateway` backend. (For Bitbucket repositories, use the [Bitbucket backend](../bitbucket-backend/) instead.)

## Move to a supported backend

Your content is already in Git, so moving off Git Gateway is a change to the `backend` block of your `config.yml`. Nothing in the repository has to move.

* To keep editors logging in without a Git host account, use [Decap Turbo](/docs/turbo-overview/). See [Connecting a site](/docs/turbo-connecting-a-site/).
* To have editors log in with their own GitHub or GitLab account, use the [GitHub](/docs/github-backend/) or [GitLab](/docs/gitlab-backend/) backend. Every editor then needs push access to the repository, and GitHub needs an [OAuth client](/docs/external-oauth-clients/).

[Choosing a Backend](/docs/choosing-a-backend/) compares the options.

## Git Gateway with Netlify

On sites that already use it, the [Netlify Identity](https://docs.netlify.com/manage/security/secure-access-to-sites/identity/) service handles authentication and user management, and Git Gateway is enabled in the same Netlify site settings. The `config.yml` needs only:

```yaml
backend:
  name: git-gateway
```

### The Netlify Identity widget

Editors who accept an invitation or reset their password land on your site with a token in the URL. The Netlify Identity widget reads that token, so load it on your CMS page and, if editors register or are invited through your site's home page, there too:

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

To send editors back to the CMS after they log in on the home page, add this before the closing `body` tag of that page:

```html
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", (user) => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
```

If you only invite editors from the Netlify dashboard, you can leave the widget off the home page and instead change the links in Netlify Identity's [email templates](https://docs.netlify.com/security/secure-access-to-sites/identity/identity-generated-emails/) from `{{ siteURL }}/#...` to `{{ siteURL }}/admin/#...`, so every link opens the CMS page.

## Reconnect after Changing Repository Permissions

If you change ownership on your repository, or convert a repository from public to private, you may need to reconnect Git Gateway with proper permissions. Find further instructions in the [Netlify Git Gateway docs](https://www.netlify.com/docs/git-gateway/#reconnect-after-changing-repository-permissions).

## Git Gateway without Netlify

You can use [Git Gateway](https://github.com/netlify/git-gateway) without Netlify by setting up your own Git Gateway server and connecting it with your own instance of [GoTrue](https://www.gotrueapi.org) (the open source microservice that powers Netlify Identity), or with any other identity service that can issue JSON Web Tokens (JWT).

To configure in Decap CMS, use the same `backend` settings in your Decap CMS `config.yml` file as shown in [Git Gateway with Netlify](#git-gateway-with-netlify) above.

## PKCE with custom Git-Gateway

<span class="version-tag">3.8.3</span>

To use a custom Git-Gateway implementation with PKCE authentication, use a configuration similar to the following:
```yaml
backend:
    name: git-gateway
    # Enables PKCE authentication with the git-gateway backend. After auth,
    # sends the access_token for all requests to the git-gateway host.
    auth_type: pkce
    # The base OAuth2 URL. Here is an obfuscated AWS Cognito example.
    base_url: https://your-cognito-instance.auth.us-east-1.amazoncognito.com
    # If you need to customize the authorize or token endpoints for PKCE, do that here
    #auth_endpoint: oauth2/authorize
    #auth_token_endpoint: oauth2/token
    # The OAuth2 client ID
    app_id: your-oauth2-client-id
    # The base URL of your custom git-gateway. Note that the last part of the path
    # should be "bitbucket", "gitlab", or "github", so the implementation can automatically
    # determine which backend API to use when making requests.
    gateway_url: https://your.gitgateway.host/git-gateway/bitbucket/
    # Override the Netlify git-gateway status check
    status_endpoint: https://your.gitgateway.host/api/v2/components.json
    # Optional: defaults to "master"
    branch: main
```
