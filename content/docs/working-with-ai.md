---
group: Intro
weight: 5
title: Working with AI assistants
description: Point ChatGPT, Claude, Cursor, Copilot or another coding agent at Decap's machine-readable docs, so it sets up Decap CMS from current documentation.
---

AI assistants and coding agents can add Decap CMS to a site and write its `config.yml`. They do it much better when they read the current docs instead of relying on what they remember, which is often from the Netlify CMS years.

## Machine-readable docs

- **[/llms.txt](/llms.txt)**: an index of the documentation with a one-line summary of each page, following the [llms.txt](https://llmstxt.org/) convention.
- **[/llms-full.txt](/llms-full.txt)**: the complete documentation in one Markdown file. Large; best for agents that can read files from a URL.
- **Any docs page as Markdown:** replace the trailing slash with `.md`. For example, [/docs/configuration-options/](/docs/configuration-options/) is also [/docs/configuration-options.md](/docs/configuration-options.md).
- **On every docs page**, above the title: **Copy as Markdown** puts the page on your clipboard to paste into a chat, **View as Markdown** opens that copy, and **Open in ChatGPT** and **Open in Claude** start a chat that reads the page for you.

## Giving your agent the docs

Start your request with a pointer to the docs, for example:

```text
Add Decap CMS to this site. Use the current documentation at
https://decapcms.org/llms.txt and follow its links before writing any config.
Use the GitHub backend, a "posts" folder collection for content/blog,
and put images in static/images/uploads.
```

A few things worth telling the agent, because older material on the web gets them wrong:

- **Decap CMS doesn't need Netlify.** Netlify Identity with Git Gateway is one backend option. See [Backends overview](/docs/backends-overview/) and [Choosing a backend](/docs/choosing-a-backend/).
- **The npm package is `decap-cms-app`**, and the script tag loads `decap-cms` from a CDN, as shown in [Install Decap CMS](/docs/install-decap-cms/). `netlify-cms` packages are the old name and no longer updated.
- **Test the config locally** with the [local backend](/docs/decap-proxy/) before you push: the CMS reports configuration errors when it loads.

## Is something wrong or missing?

If an assistant gives you an answer about Decap CMS that's out of date, or the docs above don't cover what you asked, open an [Issue on GitHub](https://github.com/decaporg/decap-cms/issues/new?template=bug_report.md).
