---
group: Accounts
weight: 20
title: Bitbucket
---

For repositories stored on [Bitbucket](https://bitbucket.org), the `bitbucket` backend allows CMS users to log in directly with their Bitbucket account. Note that all users must have write access to your content repository for this to work.

To enable it:

1. Follow the authentication provider setup steps in the [Netlify docs](https://www.netlify.com/docs/authentication-providers/#using-an-authentication-provider).
2. Add the following lines to your Decap CMS `config.yml` file:

   ```yaml
   backend:
     name: bitbucket
     repo: owner-name/repo-name # Path to your Bitbucket repository
   ```

### Client-Side Implicit Grant (Bitbucket)

Bitbucket [stopped supporting the OAuth implicit grant](https://community.developer.atlassian.com/t/deprecation-notice-oauth-1-0-and-implicit-grant-flows-for-bitbucket-cloud/97520) on February 27, 2026, so `auth_type: implicit` no longer works. Use the authentication provider setup above instead.
