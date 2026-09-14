---
title: Deploy status setup
group: Turbo
weight: 48
---

For hosts that don't report deploys to GitHub. See [Deploy status](../turbo-deploy-status/) for whether yours does.

## Netlify

Netlify posts commit statuses and Checks to GitHub **only for deploy previews** — nothing for branch or production deploys, and no Netlify setting changes that. So it has to report to Turbo directly.

1. In the [Turbo dashboard](https://turbo.decapcms.org/sites), open the site's **Deploys** tab and click **Enable the deploy webhook**. You get a URL and a secret.
2. In Netlify: **Project configuration → Notifications → Deploy notifications**.
3. **Add notification → HTTP POST request**.
4. Paste the URL into **URL to notify** and the secret into **JWS secret token**.
5. Repeat for **all three** events — *Deploy started*, *Deploy succeeded*, *Deploy failed* — since Netlify configures one event per notification. Same URL and secret each time.

Only deploys of the branch your site publishes from are recorded; previews and other branches are discarded. Outgoing webhooks are on every Netlify plan.

## GitHub Actions: report failures too

If your workflow builds the site and hands the output to a deploy action — `cloudflare/pages-action`, `actions/deploy-pages`, a Vercel or S3 action — that action creates the deployment record, and it only runs if the build succeeded. A failing build stops the workflow before it and reports nothing.

That gap is one-sided and worse than silence: successes arrive, failures don't, and the Deploys page goes on showing the last success as Live while the site sits broken. The failed workflow run is no substitute — Turbo ignores `github-actions` check runs deliberately, so a green test suite can never tell an editor their change is live.

One step fixes it:

```yaml
permissions:
  deployments: write

steps:
  # ... checkout, build, deploy ...

  - name: Report a failed build to Decap
    if: failure()
    uses: actions/github-script@v7
    env:
      DEPLOY_ENVIRONMENT: production
    with:
      script: |
        const deployment = await github.rest.repos.createDeployment({
          owner: context.repo.owner,
          repo: context.repo.repo,
          ref: context.sha,
          environment: process.env.DEPLOY_ENVIRONMENT,
          auto_merge: false,
          required_contexts: [],
        });
        await github.rest.repos.createDeploymentStatus({
          owner: context.repo.owner,
          repo: context.repo.repo,
          deployment_id: deployment.data.id,
          state: 'failure',
          log_url: `${context.serverUrl}/${context.repo.owner}/${context.repo.repo}/actions/runs/${context.runId}`,
        });
```

Put it last and leave the rest of the workflow alone. `log_url` is what the editor clicks.

- **Don't create a deployment on the success path too** — your deploy action already does, and you'd get two rows per commit. `if: failure()` keeps them from colliding.
- **`if: always()` would report cancelled runs as broken builds.** `if: failure()` excludes them.

To show the build while it runs, open the deployment *before* the build with `state: 'in_progress'` and close it with `success` or `failure`. Drop `gitHubToken` from your deploy action so it stops creating a competing record.

### If you can't change the workflow

The site's **Deploys** tab has **Record failed CI runs as failed deploys**. A GitHub Actions check run that fails on your publishing branch is then recorded as a failed deploy, with no workflow change.

Off by default, and narrow on purpose:

- **Failures only.** A success is never taken from CI, so this can't make a change look live when it isn't.
- **Leave it off if that branch also runs tests** — Turbo can't tell a failing deploy from a failing test suite.
- **Per site.** One repo backing several sites reports to whichever asked.

The workflow step above is still better where you can add it: it reports a known environment with a log link, and extends to showing the build while it runs.

## Any other host

The webhook takes plain JSON from anything that can make an HTTP request:

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

- `state` — one of `pending`, `building`, `success`, `failed`, `canceled`. Anything else is rejected.
- `id` — stable across one build's states, so `building` and `success` collapse into one row.
- `url` — what the editor clicks: the site on success, the build log on failure.

Sign the exact body with the site's secret:

```bash
BODY='{"provider":"My host","commit_sha":"'"$COMMIT_SHA"'","branch":"main","state":"success","id":"'"$BUILD_ID"'"}'
SIG="sha256=$(printf '%s' "$BODY" | openssl dgst -sha256 -hmac "$DECAP_DEPLOY_SECRET" | awk '{print $2}')"

curl -X POST "$DECAP_DEPLOY_HOOK_URL" \
  -H 'Content-Type: application/json' \
  -H "X-Turbo-Signature: $SIG" \
  -d "$BODY"
```

Send `Content-Type: application/json` — a form content type is rejected before the handler sees it.

## Rotating or removing the webhook

Both on the site's **Deploys** tab.

**Generate a new secret** takes effect immediately, so every report is rejected until you paste the new one into your host — all three notifications, on Netlify.

**Disable the webhook** stops reports at that URL. Recorded deploys stay; nothing new is added. Re-enabling issues a fresh URL and secret.

Neither applies to hosts that report through GitHub — they never had a webhook.
