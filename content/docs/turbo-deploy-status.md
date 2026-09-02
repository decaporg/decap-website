---
title: Deploy status
group: Turbo
weight: 45
---
*Currently a GitHub-only Feature*

Saving an entry tells an editor their change was committed. It does not tell
them whether the site has actually rebuilt — and on most sites that takes
another one to ten minutes, during which the change is not on the site yet.

Decap Turbo closes that gap. When a deploy containing an editor's change
succeeds, Decap tells them so, wherever they happen to be in the CMS:

> **Your change to "Spring menu" is live** · View entry

It is deliberately asynchronous. The save toast is short and disappears; the
editor carries on working; the "live" notification arrives later on its own.

Where a collection sets a [`preview_path`](../deploy-preview-links/#configuring-preview-paths),
the link opens the entry's own page on the site rather than the home page. One
deploy carrying several changes produces a single "3 changes are live"
notification, which links to the site.

A **Deploys** item at the end of the header carries the current state — a grey
dot at rest, amber while a save is still publishing, red after a failed build.
It opens a page listing recent deploys, which refreshes itself while you have
it open, so a build finishing is visible without reloading.

On that page, only the most recent successful deploy **of the branch your site
publishes from** is marked **Live** — that is the one being served. Every other
success is marked **Deployed**: earlier ones were live and have since been
superseded, and a build of some other branch was never the live site in the
first place. That second case is the common one under editorial workflow, where
your host will happily branch-deploy every `cms/…` branch the CMS creates.
Commit ids link to the commit on your git host, and the state links to the
deploy itself: the site for a success, the build log for a failure.

Each row also names the **entry that was saved** and **where the deploy
published to** — the branch, plus the host's own environment when it adds
something (`main · production`, `cms/posts/spring-menu · deploy-preview`).

Two things the entry column cannot show: a commit that did not come from the
CMS (a git push, a CI job) has no entry behind it, and where a host batches
several commits into one build, the row names the entry of the commit it
built. Both appear as a dash.

## Does my site need setting up?

It depends entirely on whether your host reports deploys back to your git
provider. Most do. **Netlify does not.**

| Host | What you need to do |
| --- | --- |
| Vercel | Nothing |
| Cloudflare Pages | Nothing |
| GitHub Pages | Nothing |
| GitHub Actions (any host, using an environment) | Nothing |
| **Netlify** | **Add the deploy webhook** — see below |
| Anything else | Add the deploy webhook, or send it yourself |

For the "nothing" hosts, the Decap GitHub App already listens for the deploy
events they publish (`deployment_status`, `check_run`, `status`, `page_build`).
There is no per-site configuration, no URL and no secret.

Two caveats worth knowing:

- **Vercel lets you switch its `deployment_status` webhook off.** If you have
  done that for your repo, Vercel deploys become invisible to Decap and you
  need the webhook below instead.
- **Cloudflare Pages does not report a build it skips** — for CI Skip, build
  watch paths, or branch deployment controls. Those deploys are simply absent
  rather than wrong.

## Netlify: adding the deploy webhook

Netlify posts commit statuses and Checks to GitHub **only for Deploy
Previews**. It reports nothing at all for branch and production deploys, and no
Netlify setting changes this — the commit status and Checks notifications can
all be enabled and GitHub will still show nothing on those commits. So Netlify
has to tell Decap directly.

1. In the [Turbo dashboard](https://turbo.decapcms.org/sites), open your site
   and go to the **Deploys** tab. Click **Enable the deploy webhook**. You get
   a URL and a secret.
2. In Netlify, open your project and go to **Project configuration →
   Notifications → Deploy notifications**.
3. Click **Add notification → HTTP POST request**.
4. Paste the URL into **URL to notify** and the secret into **JWS secret
   token**.
5. **Repeat for all three events.** Netlify configures one event per
   notification, so you need three separate notifications — *Deploy started*,
   *Deploy succeeded* and *Deploy failed* — each with the same URL and the same
   secret.

Only deploys of the branch your site publishes from are recorded. Deploy
Previews and other branches' builds are received and discarded, so previews
never produce a false "your change is live".

Outgoing webhooks are available on every Netlify plan.

## Any other host: sending it yourself

The webhook accepts a plain JSON body from anything that can make an HTTP
request — a CI step, a deploy script, a worker forwarding another host's
notification:

```json
{
  "provider": "My host",
  "commit_sha": "9f2c1a7...",
  "branch": "main",
  "state": "success",
  "id": "build-1234",
  "url": "https://example.com"
}
```

- `state` must be one of `pending`, `building`, `success`, `failed` or
  `canceled`. Anything else is rejected rather than guessed at.
- `id` should be stable for one build across its states, so a build's
  `building` and `success` reports collapse into one entry instead of two.
- `url` is what the editor clicks: the live site on success, the build log on
  failure.

Sign the exact request body with the site's secret and send it as a header:

```bash
BODY='{"provider":"My host","commit_sha":"'"$COMMIT_SHA"'","branch":"main","state":"success","id":"'"$BUILD_ID"'"}'
SIG="sha256=$(printf '%s' "$BODY" | openssl dgst -sha256 -hmac "$DECAP_DEPLOY_SECRET" | awk '{print $2}')"

curl -X POST "$DECAP_DEPLOY_HOOK_URL" \
  -H 'Content-Type: application/json' \
  -H "X-Turbo-Signature: $SIG" \
  -d "$BODY"
```

Send `Content-Type: application/json` — a form content type is rejected before
it reaches the handler.

## Editorial workflow

Deploys of an unpublished entry's own branch — the `cms/…` branches Decap
creates for editorial workflow — are recorded too, and appear on the Deploys
page with their branch and environment. That is how you see whether a change
in review has a working preview.

They are never marked **Live**, however successful and however recent. Only the
branch your site publishes from can be live; a `cms/…` build is a preview of
something nobody has published yet.

They never produce a notification. "Your change is live" is a claim about the
published site, and an entry in review has not been published; for unpublished
work you want [deploy preview links](../deploy-preview-links/), which are shown
in the editor next to the publishing controls.

## Cancelled and skipped builds are not failures

If your host cancels a build in favour of a newer commit — Netlify does this
routinely when saves come in quickly — the change has not been lost. It ships
inside the newer build. Decap treats that as *superseded*, keeps waiting, and
notifies the editor when a deploy that **contains** their commit succeeds.

That is the general rule: the question Decap answers is not "did the deploy of
my exact commit succeed" but "has a deploy containing my commit succeeded".
Several editors saving at once, one editor saving repeatedly, and a host that
batches commits into one build all resolve correctly as a result.

Builds skipped for having no content change, an ignore command or `[skip ci]`
are treated the same way, even though Netlify reports them as errors.

## Turning it off

Deploy status hides itself on sites where no deploy has ever been reported, so
a site whose host tells Decap nothing looks like a CMS without the feature
rather than one with an empty page. To turn it off explicitly, set it in
`config.yml`:

```yaml
backend:
  name: turbo-github
  turbo_site_id: your-site-id
  deploy_status: false
```

Or turn off one surface at a time:

```yaml
backend:
  deploy_status:
    notifications: false   # no "your change is live" toasts
    page: false            # no Deploys nav item or page
```

## Deploying to more than one host

If your repository is deployed to several places, Decap discovers each of them
from the reports it receives and lists them separately on the Deploys page. The
notification fires on the first success and names the host, so an editor sees
"live on Netlify" rather than an unqualified claim.

If one host is the real site and the others are mirrors or staging copies, name
it and only that host's deploys will notify:

```yaml
backend:
  deploy_status:
    primary_target: Cloudflare Pages
```

The name is the one shown in the **Reported by** column on the Deploys page.

## "I never get told anything"

Work through these in order — the Deploys page answers most of it directly.

1. **Open the Deploys page.** If it says nothing has been recorded, your host
   is not reporting to Decap at all. On Netlify, that is expected until you add
   the webhook above.
2. **Check the branch.** Only deploys of the branch the site publishes from are
   recorded. A site configured for `main` hears nothing about `develop`.
3. **Check the GitHub App permissions.** If Decap's GitHub App was installed
   before deploy status shipped, it needs the new read permissions approved by
   an organization owner. Until then, transport-1 hosts report nothing.
4. **Rotated the secret?** The old one stops working immediately, and Netlify
   will keep sending with it. Update all three notifications.
5. **Deploy Previews only?** Preview deploys are deliberately ignored here.
   For unpublished editorial-workflow entries you want
   [deploy preview links](../deploy-preview-links/), which are a different
   feature: previews answer "what would this look like", deploy status answers
   "has what I published actually shipped".
