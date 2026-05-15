---
title: Svelte/SvelteKit
group: Guides
weight: 100
---
This guide will help you get started using Decap CMS with SvelteKit.

## Creating a new project

Let's create a simple Svelte/SvelteKit project.
Just run the below `sv` command via `npx`.

```
npx sv create --template minimal --types jsdoc --add tailwindcss="plugins:typography" mdsvex sveltekit-adapter="adapter:static" --install npm ./
```

The `sv` command above also adds a tool called `mdsvex`.
It converts Markdown files into Svelte components.
Let's update the config to add this conversion as a build-time preprocess.
Rewrite `svelte.config.js` to the following.

```js
// svelte.config.js
import { mdsvex } from 'mdsvex';                          // Import mdsvex for markdown support
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: { handleUnseenRoutes: 'warn'}              // Only warn about unseen routes during prerendering
	},
	preprocess: [mdsvex({ extensions: ['.svx', '.md'] })],  // Configure mdsvex with .svx and .md extensions
	extensions: ['.svelte', '.svx', '.md']                  // Add .md to the list of recognized file extensions
};

export default config;
```

`src/routes/+layout.js` is the root layout file that serves as the baseline for all pages.
Add a setting here to enable prerendering.
Create `src/routes/+layout.js` and write only this single line.

```js
// src/routes/+layout.js
export const prerender = true;
```

Next, add the logic to display the list of Markdown content and each post.
SvelteKit uses file-based routing.
The directory structure under `src/routes/` maps to URL paths.

```sh
mkdir -p src/routes/blog
touch src/routes/blog/+page.js               # Fetch list of posts
touch src/routes/blog/+page.svelte           # Render post list

mkdir -p 'src/routes/blog/[slug]'
touch 'src/routes/blog/[slug]/+page.js'.     # Fetch each post's data
touch 'src/routes/blog/[slug]/+page.svelte'  # Render each post
```

Open `src/routes/blog/+page.js` and paste the following code.
It fetches metadata for all posts.

```js
// src/routes/blog/+page.js
export const load = async () => {
	const modules = import.meta.glob('../../content/blog/*.md');
	const posts = [];

	for (const [path, resolver] of Object.entries(modules)) {
		const mod = (await resolver());

		const slug = path.split('/').pop()?.replace(/\.md$/, '');
		const meta = mod?.metadata ?? {};

		posts.push({
			slug,
			title: meta.title ?? slug,
			date: meta.date ?? '',
			description: meta.description
		});
	}

	posts.sort((a, b) => (a.date < b.date ? 1 : -1));

	return { posts };
};
```

Open `src/routes/blog/+page.svelte` and paste the following code.
It receives the list data from `+page.js` and renders it to HTML.

```svelte
<!-- src/routes/blog/+page.svelte -->
<script>
	let { data } = $props();
</script>

<main class="mx-auto max-w-5xl p-6">
	<h1 class="text-2xl font-bold">Blog</h1>

	<ul class="mt-6 space-y-4">
		{#each data.posts as post}
			<li class="rounded-lg border p-4">
				<a class="text-lg font-semibold hover:underline" href={`/blog/${post.slug}`}>
					{post.title}
				</a>
				{#if post.date}
					<div class="mt-1 text-sm text-muted-foreground">{post.date}</div>
				{/if}
				{#if post.description}
					<p class="mt-2 text-sm text-muted-foreground">{post.description}</p>
				{/if}
			</li>
		{/each}
	</ul>
</main>
```

Open `src/routes/blog/[slug]/+page.js` and paste the following code.
It loads each post's Markdown as a component.

```js
// src/routes/blog/[slug]/+page.js
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const modules = import.meta.glob('../../../content/blog/*.md');

	const match = Object.entries(modules).find(([path]) => {
		return path.endsWith(`/${params.slug}.md`);
	});

	if (!match) {
		throw error(404, 'Not found');
	}

	const mod = (await match[1]());

	return {
		component: mod.default,
		metadata: mod.metadata ?? {}
	};
};
```

Open `src/routes/blog/[slug]/+page.svelte` and paste the following code.
It renders the individual post page.

```svelte
<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
	let { data } = $props();
	const Post = data.component;
	const meta = data.metadata ?? {};
</script>

<main class="mx-auto max-w-3xl p-6">
	<a class="text-sm text-muted-foreground hover:underline" href="/blog">← Blog</a>
	<article class="prose mt-6">
		{#if meta.title}<h1>{meta.title}</h1>{/if}
		{#if meta.date}<p><small>{meta.date}</small></p>{/if}
		<Post />
	</article>
</main>
```

You now have the minimal logic and configuration to handle content.
Create a sample post.

```sh
mkdir -p src/content/blog
touch src/content/blog/first-post.md
```

Create the `src/content/blog` folder and a `first-post.md` file inside it, then paste the following content.

```md
---
title: "The first post"
date: "2026-01-01"
description: "This is an example post"
---

# Hello

Welcome to my awesome web site.

This page is built with Svelte/SvelteKit, and content woud be managed in Decap CMS.
```

At this point, you've set up a minimal static site with Svelte/SvelteKit that renders Markdown blog posts.
Running `npm run dev` starts the development server.
Open `http://localhost:5173/blog` and you'll see a list page with a single post.
Click the title to view the post.

## Adding Decap CMS

There are several ways to add Decap CMS to a project.
The easiest is to embed it from a CDN.
We'll use that approach here.


```sh
mkdir -p static/admin
touch static/admin/index.html
touch static/admin/config.yml
```

Paste the HTML that loads and runs Decap CMS into `static/admin/index.html`.


```html
<!-- static/admin/index.html -->
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</head>
<body>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</body>
</html>
```

Create the Decap CMS configuration file.
Paste the blog location and front matter settings from the previous section into `static/admin/config.yml`.


```yml
# static/admin/config.yml
backend:
  name: git-gateway
  branch: main
local_backend: true
media_folder: static
public_folder: ''
collections:
  - name: 'blog'
    label: 'Blog'
    folder: 'src/content/blog'
    create: true
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: "Publish Date", name: "date", widget: "datetime" }
      - { label: 'Description', name: 'description', widget: 'text' }
      - { label: 'Bofy', name: 'body', widget: 'markdown' }
```

That completes the Decap CMS setup.
To verify it works, start the proxy server that lets Decap CMS edit local files by opening a new terminal and running `npx decap-server`.
If the dev server is stopped, start it again with `npm run dev`, then open `http://localhost:5173/admin/index.html`.
You'll see the Decap CMS login screen. Since the local proxy is running, you can enter the CMS by clicking the Log in button.

### Another way to install DecapCMS by npm

You can also use Decap CMS as an npm module.

First install the package and save it to your project:

```sh
npm install decap-cms-app --save
```

Then initialize it on client-side.

`src/routes/admin/+page.svelte`

```html
<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		const CMS = await import('decap-cms-app');
		CMS.default.init();
	});
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
	<title>Content Manager</title>
</svelte:head>
```

`src/routes/admin/+page.ts`

```typescript
export const prerender = false;
export const ssr = false;
```

Also, you shold set client-side redering fallback:
e.g.

- Cloudflare: add `adapter: adapter({ fallback: '200.html'}),` to `svelte.config.js`
- Netlify: same as above and also create `static/_redirects` file and add `/admin/*  /200.html` to it.

## Introducing authentication providers

To access this Decap CMS via a Netlify domain instead of a local server, you need to configure an authentication provider.
The provider lets Decap CMS determine whether a user has read and write access.
This section provides a brief explanation of how to implement GitHub and Netlify as an Authentication Provider, respectively.

### Configure GitHub as authentication provider

1. Create a new [GitHub OAuth application](https://github.com/settings/applications/new).
2. Enter your Netlify domain as the **Homepage URL**.
3. Enter https://api.netlify.com/auth/done as the **Authorization callback URL**.
4. Click **Register application**.
5. Click **Generate a new client secret**.
6. Copy the provided client secret and client ID.

### Configure Netlify as authentication providers

1. On Netlify, select your Project, then under Project configuration > Access & security > OAuth > Authentication providers, click **Install provider**.
2. Enter your client secret and client ID from GitHub.
3. Click **Install**.

Congratulations! You can now access the admin UI via your Netlify URL and create or edit posts.
