---
title: Basic Steps
group: Add
weight: 1
---

This tutorial guides you through the steps for adding Decap CMS to a site that's built with a common [site generator](https://www.staticgen.com/), like Hugo, Jekyll, Hexo, or Gatsby.
Alternatively, you can [start from a template](/docs/start-with-a-template) or dive right into [configuration options](/docs/configuration-options). The process for adding Decap CMS to a static site can be divided into four main steps:

## 1. Install Decap CMS

Add 2 files to the `/admin` route of your website.
Check out the [installation instructions](/docs/install-decap-cms/) to see what the installation process entails.

## 2. Choose a Backend

The most common backends are Git Gateway, GitHub, GitLab, Bitbucket, and Azure. The backend serves two purposes: Secure access to your website's Decap CMS and allows it to read and update content files in your git repo. More information about configuring the backend can be found [here](/docs/backends-overview/).

If you are experimenting with Decap CMS or developing, you can connect to it via a [local Git repository instead](/docs/working-with-a-local-git-repository/) of a remote backend.

## 3. Configure Decap CMS

The basic configuration includes required information like Git backend provider, branch, and collections to save files to.
It is recommended to start simple as possible. Once you've gotten the hang of it, you can edit your `config.yml` file to
build whatever collections and content modeling you want.

Check out the [Configuration Options](/docs/configuration-options/) page for full details about all available options.

## 4. Login to Your CMS

Decap CMS manages your content and provides editorial and admin features via a webpage in a browser, but it doesn't deliver content. Decap CMS only makes your content available through an API. It is up to developers to determine how to build the raw content into something useful and delightful on the frontend within your static site generator.

<nav class="pagination-nav">
  <a href="/docs/install-decap-cms/" class="button pagination-nav__next">
    <div class="pagination-nav__sublabel">Next</div>
    <div class="pagination-nav__label">1. Install Decap CMS</div>
  </a>
</nav>
