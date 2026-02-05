---
title: Git Gateway
weight: 10
group: Accounts
---

[Git Gateway](https://github.com/netlify/git-gateway) is a Netlify open source project that allows you to add editors to your site CMS without giving them direct write access to your GitHub or GitLab repository. (For Bitbucket repositories, use the [Bitbucket backend](../bitbucket-backend/) instead.)

## Git Gateway with Netlify

The [Netlify Identity](https://www.netlify.com/docs/identity/) service can handle the authentication and provides a simple interface for user management. The Decap CMS [featured templates](../start-with-a-template) are working examples of this backend.

To use it in your own project stored on GitHub or GitLab, follow these steps:

1. Head over to the [Netlify Identity docs](https://www.netlify.com/docs/identity) and follow the steps to get started.
2. Add the following lines to your Decap CMS `config.yml` file:

```yaml
backend:
  name: git-gateway
```

## Reconnect after Changing Repository Permissions

If you change ownership on your repository, or convert a repository from public to private, you may need to reconnect Git Gateway with proper permissions. Find further instructions in the [Netlify Git Gateway docs](https://www.netlify.com/docs/git-gateway/#reconnect-after-changing-repository-permissions).

## Git Gateway without Netlify

You can use [Git Gateway](https://github.com/netlify/git-gateway) without Netlify by setting up your own Git Gateway server and connecting it with your own instance of [GoTrue](https://www.gotrueapi.org) (the open source microservice that powers Netlify Identity), or with any other identity service that can issue JSON Web Tokens (JWT).

To configure in Decap CMS, use the same `backend` settings in your Decap CMS `config.yml` file as described in Step 2 of the [Git Gateway with Netlify](#git-gateway-with-netlify) instructions above.

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
