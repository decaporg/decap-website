---
linkTitle: Overview
title: Decap CMS overview
description: "Decap CMS is a free, open-source, Git-based CMS for static sites. Editors get a web UI with previews, and every change is a commit in your repository. Works with any site generator and host."
group: Intro
weight: 1
aliases:
  - /docs/
---

Decap CMS (formerly Netlify CMS) is an open source content management system for your Git workflow that enables you to provide editors with a friendly UI and intuitive workflows. You can use it with any static site generator to create faster, more flexible web projects. Content is stored in your Git repository alongside your code for easier versioning, multi-channel publishing, and the option to handle content updates directly in Git.

At its core, Decap CMS is an open-source React app that acts as a wrapper for the Git workflow, using the GitHub, GitLab, or Bitbucket API. This provides many advantages, including:

* **Fast, web-based UI:** With rich-text editing, real-time preview, and drag-and-drop media uploads.
* **Platform agnostic:** Works with most static site generators.
* **Easy installation:** Add two files to your site and hook up the backend by including those files in your build process or linking to our Content Delivery Network (CDN).
* **Modern authentication:** Using GitHub, GitLab, or Bitbucket and JSON web tokens.
* **Flexible content types:** Specify an unlimited number of content types with custom fields.
* **Fully extensible:** Create custom-styled previews, UI widgets, and editor plugins.

## Decap CMS and Netlify

Decap CMS started in 2016 as Netlify CMS, created at Netlify to fill a gap in the static site pipeline: an open source, extensible CMS that a community could build on. It was never tied to Netlify's hosting, despite the name. In February 2023 it was [renamed Decap CMS](/docs/migrating-from-netlify-cms/), and it has been independently maintained since.

Decap CMS doesn't need a Netlify account. Deploy your site wherever you already do, with your own CI, hosting and CDN, and pick any [backend](/docs/choosing-a-backend/) for login.

If you hook up Decap CMS to your website, you're basically adding a tool for content editors to make commits to your site repository without touching code or learning Git.

### Find out more

- Get a feel for the UI in the [demo site](https://demo.decapcms.org). (No login required. Click the login button to go straight to the CMS editor UI.)
- [Start with a template](../start-with-a-template/) to make a Decap CMS-enabled site of your own.
- Moving from Netlify CMS? See [Migrating from Netlify CMS](../migrating-from-netlify-cms/).
- Configure your existing site by following a [tutorial](../basic-steps/) or checking [configuration options](../configuration-options).
- Ask questions and share ideas in the Decap CMS [community chat](https://decapcms.org/chat).
- Get involved in new developments and become a [contributor](../contributor-guide/).
