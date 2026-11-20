---
title: Two copies of React
description: "NotFoundError: Failed to execute 'removeChild' on 'Node'"
group: Issues
weight: 10
---

```
NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed
is not a child of this node.
```

Your app loads more than one copy of React, so two Reacts manage the same DOM nodes and neither recognizes what the other did. In a React app that embeds Decap CMS this usually shows up the moment you open the route that initializes the CMS. The same cause produces `Invalid hook call. Hooks can only be called inside of the body of a function component.`

## Why it happens

`decap-cms-app` declares `react` and `react-dom` as peer dependencies (`^19.1.0`), and Decap CMS renders itself with its own React root. If your app resolves a different React (because you're on React 18, or your package manager hoisted two versions), both end up in the bundle, and React's internal bookkeeping is per-copy.

## How to fix it

Check what you have with `npm ls react react-dom` (or `pnpm why react`, `yarn why react`). If more than one version shows up, pin a single one in `package.json`: `overrides` for npm and bun, `pnpm.overrides` for pnpm, `resolutions` for yarn. Then delete `node_modules` and reinstall so the stale tree is rebuilt.

With Vite, also set `resolve.dedupe: ['react', 'react-dom']` and `optimizeDeps.include: ['decap-cms-app']`, so the dev server doesn't serve a second copy out of its dependency cache.

## Still getting the error?

One React can also lose track of the DOM if your own components render `<div id="nc-root" />`. Decap CMS [creates that element itself](/docs/custom-mounting/) when it doesn't exist, so let it: if your React owns the node while Decap's root renders into it, the next re-render or unmount (a route change, or `StrictMode` in development) throws the same error. Have your admin route show and hide Decap's own root instead, and guard `CMS.init()` so it only runs once.

Set [`window.CMS_MANUAL_INIT`](/docs/manual-initialization/) before importing `decap-cms-app` as well, or the CMS initializes on import and the login screen takes over every page. [decap-examples/vite-react-router-typescript](https://github.com/sempostma/decap-examples/tree/main/vite-react-router-typescript) is a complete working setup.

If the CMS doesn't need to share custom previews, custom widgets, or styles with your app, don't embed it at all: serve `/admin/index.html` as a plain static page with a `<script>` tag, as in [Install Decap CMS](/docs/install-decap-cms/). A separate page can't collide with your app's React.
