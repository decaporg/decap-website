---
title: State of Decap CMS
description: Is Decap CMS still maintained? Yes. Releases, contributors, issues closed and security fixes over the last four quarters, and how we counted them.
date: 2026-11-04
---

**Decap CMS is actively maintained.** This page shows the evidence: numbers from GitHub and npm that you can check yourself.

## The last four quarters

From {{< period format="long" >}} ({{< period >}}):

| | {{< period >}} |
|---|---:|
| Stable releases | {{< stat github="decaporg/decap-cms" metric="releases" >}} |
| Pull requests merged | {{< stat github="decaporg/decap-cms" metric="prs-merged" >}} |
| People with merged pull requests | {{< stat github="decaporg/decap-cms" metric="contributors" >}} |
| Issues closed | {{< stat github="decaporg/decap-cms" metric="issues-closed" >}} |
| Commits to `main` | {{< stat github="decaporg/decap-cms" metric="commits" >}} |
| Security advisories published | {{< stat github="decaporg/decap-cms" metric="advisories" >}} |

- **The latest release** is {{< stat github="decaporg/decap-cms" metric="latest-release" >}}, from {{< stat github="decaporg/decap-cms" metric="latest-release-date" >}}.
- **{{< stat github="decaporg/decap-cms" metric="prs-merged" >}} merged pull requests** came from {{< stat github="decaporg/decap-cms" metric="contributors" >}} people and from automated dependency updates.
- **Security advisories** are reported privately, fixed and then published. Each one is on the repository's [security advisories](https://github.com/decaporg/decap-cms/security/advisories) page with its fix version.
- **{{< stat github="decaporg/decap-cms" metric="open-issues" >}} issues are open.** Many are old feature requests from the Netlify CMS years, and we are working through them.

## Who uses it

- **{{< stat npm="decap-cms-app" metric="weekly-downloads" >}} npm downloads a week** of `decap-cms-app` on average in {{< period >}}, which the `decap-cms` package also installs. It doesn't count sites that load Decap with a script tag from a CDN.
- **{{< stat github="decaporg/decap-cms" metric="stars" >}} stars** on [GitHub](https://github.com/decaporg/decap-cms).

## What shipped recently

- **A responsive UI** (3.13 and 3.14, June 2026): the header, collection and workflow views and the media library work on phones and tablets.
- **New widgets and options:** the UUID widget, collection size limits, filters in slug templates, special characters in slugs, a Signed-off-by option for commits, and inline custom editor components in the Markdown widget.
- **New languages:** Slovak, Croatian and Serbian.
- **Security:** six advisories fixed and published in September and October 2026, including two critical ones in `decap-server`, the local development proxy.
- **Decap Turbo** became generally available in 3.17.0 (14 October 2026): an optional hosted backend with login, roles, a faster content proxy, and deploy status that tells editors when a saved change is live. It's built into the standard release, and Decap CMS stays free and fully usable without it.

The full list is in the [release notes](https://github.com/decaporg/decap-cms/releases).

## Who maintains it and how it's funded

Netlify created Netlify CMS in 2016. In February 2023 it [became Decap CMS](https://www.netlify.com/blog/netlify-cms-to-become-decap-cms/), with [PM d.o.o.](https://p-m.si) as its maintainer. There was a quiet period around that handover, and the impression that Decap CMS is unmaintained comes from those years. The numbers above show what has happened since.

**A company, not one person.** PM d.o.o. is a software company of about 30 people, six of them developers, and Decap CMS is part of its regular work, with contributors from around the world alongside. The project doesn't depend on any single person: if someone leaves, the work and the funding carry on.

**Funded to last.** The work is paid for by:

- [Decap Turbo](/turbo/), our optional hosted service,
- sponsors on [GitHub Sponsors](https://github.com/sponsors/decaporg) and [Open Collective](https://opencollective.com/decap),
- PM d.o.o., the project's main partner.

**Why Decap Turbo exists.** An open-source project without an income of its own depends on someone else's priorities or on volunteers' spare time, and slows down when those change. That is what happened to Netlify CMS when Netlify moved on. Turbo is how Decap avoids it: teams that want hosted login, roles and a faster backend pay for it, and that income keeps the open-source CMS maintained and independent. Turbo is built on top of Decap CMS, not in place of it. Everything in the open-source CMS stays free.

Decap CMS is MIT-licensed and stays free and open source. Read more on the [About](/about/) page.

## Security

Security is a top priority, and the architecture gives a Git-based CMS a head start:

- **No server or database of its own.** Decap CMS is a JavaScript app that runs in the editor's browser. Your published site stays static, with nothing for an attacker to log in to.
- **Your Git host is the gatekeeper.** Editors sign in with GitHub, GitLab or another Git host, and the CMS can only do what their account is allowed to do in the repository. Every change is a commit you can review and revert.

Every Git-based CMS that works this way, including Sveltia CMS, shares these properties, so the architecture alone makes neither safer than the other. What makes a difference is how bugs are handled once found. Vulnerabilities in Decap CMS are reported privately, fixed, and published as [security advisories](https://github.com/decaporg/decap-cms/security/advisories) with the version that fixes them: {{< stat github="decaporg/decap-cms" metric="advisories" >}} in {{< period >}}. How to report one, and which versions get fixes, is in our [security policy](https://github.com/decaporg/decap-cms/security/policy).

## What's next

Planned and proposed features are on the [features page](/features/), marked by status. Discussion happens on [GitHub Discussions](https://github.com/decaporg/decap-cms/discussions) and in the [community chat](/chat).

## How we counted

All numbers come from public data and are fetched again every time the site is built. The period is the last four completed calendar quarters, now {{< period format="long" >}}, and moves forward each quarter.

- **Releases:** stable GitHub releases (tagged `decap-cms@*`) published in the period. Drafts and prereleases, such as the 3.17.0 beta, aren't counted.
- **Pull requests and issues:** GitHub search on `decaporg/decap-cms` for `is:pr is:merged` and `is:issue is:closed`, with `merged:` and `closed:` limited to the period. People are distinct authors of merged pull requests, excluding bots. Open issues are counted as they are now, not over the period.
- **Commits:** commits on `main` in the period.
- **Security advisories:** published advisories on the repository's security advisories page, by publication date.
- **Downloads:** the npm downloads API, total downloads in the period as a weekly average. We count `decap-cms-app` only, because installing `decap-cms` downloads it too.
- **Stars:** the current count on GitHub.
