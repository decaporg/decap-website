---
title: Decap Turbo Is Open to Everyone
author: Martin Jagodic
description: Decap Turbo is in public preview — anyone can sign up. Since we announced it, Turbo also gained deploy notifications, an S3-compatible media library, site variables, an activity log, and GitLab support.
image: /img/turbo-deploys-page.png
date: 2026-09-14T08:00:00.000Z
---

[Decap Turbo](/turbo/) is open. Signups no longer need an invitation, and there is a Free plan, so you can put a real site on it without a credit card.

When we [announced Turbo](/blog/announcing-decap-turbo/) we described three things: hosted auth, roles and permissions, and a database proxy that makes large collections load fast. Those are all avaiable today, plus a few other really useful features.

## Know when your change is live

Saving an entry tells an editor the change was committed. It does not tell them the site has rebuilt, and on most sites that takes another one to ten minutes.

Turbo now closes that gap. When a deploy carrying an editor's change succeeds, the CMS says so:

> **Your change to "Spring menu" is live** · View entry

It arrives on its own, after the fact — the editor carries on working and gets told when it lands. There is also a Deploys page listing recent builds, which is where you look when something has not shipped.

Most hosts need no setup: Vercel, Cloudflare Pages and GitHub Pages already report deploys to GitHub, and Turbo listens. Netlify does not report branch or production deploys, so it needs a webhook — one URL and one secret, set up in a couple of minutes. Any other host can post the same signed JSON from its deploy script.

This is GitHub-only for now. See [Deploy status](/docs/turbo-deploy-status/) for the details.

## An S3-compatible media library

Editors can upload and browse assets in your own bucket — AWS S3, Cloudflare R2, Bunny Storage, or anything else that speaks S3 — without your storage credentials ever reaching the browser. The CMS calls Turbo, Turbo reads the credentials server-side and forwards the request.

Available on Pro and above. See [Media library](/docs/turbo-media-proxy/).

## Site variables and secrets

Each site gets a key/value store for the configuration it needs at runtime, including the media library credentials above. Mark a value as secret and it is encrypted at rest and masked in the interface — it can be replaced, never read back.

Available on Pro and above, on the site's Variables tab.

## An activity log

Every organization has an activity page: who saved which entry, in which collection, on which site, and when.

## GitLab

Turbo started on GitHub only. It now works with GitLab too, through the `turbo-gitlab` backend. Setup is the same — connect your GitLab account once per organization and point `config.yml` at your site.

One caveat worth knowing before you connect: GitLab.com puts group and project access tokens behind a Premium subscription, so Turbo authenticates as the GitLab user who authorizes the connection. That connection can reach every project that account can reach. Turbo has its own "selected projects" setting to narrow it, and on GitLab Free that setting is the only limit available.

## Installing it

The Turbo backends are not in the stable Decap CMS release yet. They ship on npm under the `beta` tag:

```html
<script src="https://unpkg.com/decap-cms@beta/dist/decap-cms.js"></script>
```

Then switch your backend to `turbo-github` or `turbo-gitlab` and add your site ID. The full walkthrough is in [Connecting a site](/docs/turbo-connecting-a-site/).

## Tell us what breaks

Public preview means we expect to find things. If you hit a bug or something feels wrong, use the **Feedback** form inside Turbo — organization owners will find it in the sidebar. It goes straight to us, you can follow the status of what you reported, and if someone already reported the same thing your note is added to theirs instead of opening a duplicate.

That form is the fastest way to reach us about Turbo specifically. Decap CMS itself still lives on [GitHub](https://github.com/decaporg/decap-cms/issues) and [Discord](https://decapcms.org/chat/), and is unchanged by any of this — it remains free, open source, and self-hostable forever.

## Thanks

Developing Decap Turbo was made possible by the [Promoting cultural and creative industries](https://czk.si/program/razpis-spodbujanje-kulturnih-in-kreativnih-industrij-czk/) tender, run by Center za kreativnost (CzK). The investment is co-financed by the Republic of Slovenia and the European Union under the European Regional Development Fund.

And thank you to the beta testers who ran their live sites on an unfinished product for a month and told us what was wrong. That is a real risk to take, and this release is considerably better for it.

[Sign up](https://turbo.decapcms.org/signup) — the Free plan takes a minute and needs no card.
