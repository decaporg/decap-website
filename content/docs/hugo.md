---
group: Guides
weight: 20
title: Hugo
description: "Add Decap CMS to a Hugo site: the admin files in static/admin, a config.yml with the GitHub backend, local editing with decap-server, and login on your live site."
---
## Introduction

This guide will walk you through how to integrate Decap CMS with Hugo. This is a good place to start if you want to learn from the ground up how these two tools work together. If you want to get up-and-running quicker, you can use one of the pre-existing and amazing [starter templates](/docs/start-with-a-template/)!

## Getting started with Hugo

### Installation

To get started with Hugo, you should first install the command line tool. If you've already got it installed, you can [skip this step](#creating-a-new-site). On MacOS and Linux you can do this with:

```bash
brew install hugo
```

To test that it's successfully installed, you can try this command, to get a list of Hugo's options:

```bash
hugo help
```

### Creating a new site

Create a new Hugo project and start it up using the following commands.

```bash
hugo new site <name-of-your-new-project>
cd <name-of-your-new-project>
hugo server
```

You won't actually see anything, just yet, and that's because you don't have any template files. That's easily resolved. In the `layouts/` directory, create a file `index.html` and put a basic HTML structure in there:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <h1>Nice. It's looking good already.</h1>
  </body>
</html>
```

You'll also add some files to the `content/` and `data/` directories to make sure git tracks them.

```bash
touch content/.keep data/.keep
```

This is as basic as you can get with a Hugo project. There's just enough here now for us to install Decap CMS.

## Getting Started With Decap CMS

### Add the Decap CMS files to Hugo

In Hugo, static files that don't need to be processed by the build commands live in the `static/` directory. You'll install the Decap CMS admin and config files there. Create a directory `admin/` and within it, create two files `index.html` and `config.yml`. In the `index.html`, add the following content:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
  </head>
  <body>
    <!-- Include the script that builds the page and powers Decap CMS -->
    <script src="https://cdn.jsdelivr.net/npm/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </body>
</html>
```

In the `config.yml` file, you can add this basic configuration — you can customize as you see fit, this sample file is just to get you started.

```yaml
backend:
  name: github
  repo: your-name/your-repo # Path to your GitHub repository
  branch: main # Branch to update (optional; defaults to master)
  base_url: https://auth.example.com # Your OAuth client, see below
local_backend: true # Edit local files while `npx decap-server` runs
media_folder: static/img
public_folder: /img
collections:
  - name: 'blog'
    label: 'Blog'
    folder: 'content/blog'
    create: true
    slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
    editor:
      preview: false
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Publish Date', name: 'date', widget: 'datetime' }
      - { label: 'Description', name: 'description', widget: 'string' }
      - { label: 'Body', name: 'body', widget: 'markdown' }
```

Replace `your-name/your-repo` with the GitHub repository you'll push the site to.

### Editing content locally

To edit content on your computer, keep `hugo server` running and start the Decap CMS proxy server in a second terminal, in the root of your project:

```bash
npx decap-server
```

Open `http://localhost:1313/admin/`. Because of `local_backend: true`, Decap CMS reads and writes the files in your project directly, with no login. Create a blog post and publish it, and it shows up in your project at `content/blog/<slugified-blog-post-title>.md`.

### Pushing to GitHub

It's now time to commit your changes and push to GitHub. You can run the following commands to initialize a Git repository and push the changes so far.

```bash
git init # Initialize a Git repository
git add . # Add every file
git commit -m "Initial Commit" # Commit every file with the message 'Initial Commit'
git remote add origin https://github.com/YOUR_USERNAME/NEW_REPO_NAME.git # Create a new repo on GitHub and add it to this project as a remote repository.
git push -u origin main # Push your changes
```

### Deploying and logging in

Deploy the site from your repository with your hosting provider of choice. The build command is `hugo` and the publish directory is `public`. Set the same Hugo version your computer uses, so builds match. Decap CMS is a static page in your site, so any static hosting provider works.

On your live site, editors log in with the `github` backend. GitHub's login needs a small server, an OAuth client: deploy one of the [external OAuth clients](/docs/external-oauth-clients/) and set `base_url` in `config.yml` to its address. If you'd rather not run one, or want editors to log in without a GitHub account, switch the `backend` to [Decap Turbo](/docs/turbo-overview/), the optional hosted backend by the Decap maintainers. For GitLab and other Git hosts, see [Choosing a Backend](/docs/choosing-a-backend/).

Then open `/admin/` on your live site and log in.

**Using Git Gateway?** Earlier versions of this guide used the `git-gateway` backend with Netlify Identity. Sites that already use it can keep that setup, described on the [Git Gateway](/docs/git-gateway-backend/) page.

{{< git-gateway-deprecated >}}

And that's it! From this point on, it's just a matter of following [the Hugo documentation](https://gohugo.io/templates/) for outputting the content from your `content/` directory into templates! For more information on configuring Decap CMS, feel free to check out the [Decap CMS configuration options documentation](/docs/configuration-options/).

## Using Decap CMS content in Hugo

### Creating a list of posts

In your `layouts/index.html` file, you'll create an unordered list element and use a Hugo `range` to output all posts. Inside that range, you can add a list item element with each post title and a link to the post inside it.

**Note:** To learn more about Hugo's `range` function, check out [the Hugo documentation](https://gohugo.io/functions/range).

```html
<body>
  <h1>Nice. It's looking good already.</h1>
  <ul>
    {{ range (where .Pages "Section" "blog") }}
    <li>
      <a href="{{ .RelPermalink }}">
        {{ .Title }}
      </a>
    </li>
    {{ end }}
  </ul>
</body>
```

That link won't work just right just yet. You'll need to make a single page layout for blog posts, so Hugo can create a page for the `.RelPermalink` to link to.

### Creating a single page post layout

Create a file `layouts/blog/single.html`, and put the following content in there:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>{{ .Title }}</title>
  </head>
  <body>
    <h1>{{ .Title }}</h1>
    <p class="date">{{ .Date }}</p>
    <p class="description">{{ .Params.description }}</p>
    <article class="content">
      {{ .Content }}
    </article>
  </body>
</html>
```

You can see this basic template includes all the fields you've specified in your Decap CMS `config.yml` file. You can access any custom front-matter fields with `.Params.<field-name>`!

### Using Hugo shortcodes in the Markdown Editor

Using `registerEditorComponent` we can register a block level component for the Markdown editor. You can use it to add Hugo's inbuilt shortcodes like `gist`,`youtube` and others as block components to the markdown editor.

You can refer to [registering editor components](https://www.decapcms.org/docs/custom-widgets/#registereditorcomponent) for a getting started guide or for creating your own editor components.

**Example**

```javascript
CMS.registerEditorComponent({
    id: "gist",
    label: "Gist",
    fields: [{
            name: "username",
            label: "GitHub Username",
            widget: "string"
        },
        {
            name: "gid",
            label: "Gist ID",
            widget: "string"
        },
    ],
    pattern: /^{{</* gist ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) */>}}/,
    fromBlock: function(match) {
        return {
            username: match[1],
            gid: match[2],
        };
    },
    toBlock: function(obj) {
        return `{{</* gist ${obj.username} ${obj.gid} */>}}`;
    },
    toPreview: function(obj) {
        return '<a href="https://gist.github.com/' + obj.username + '/' + obj.id + '">gist</a>';
    },
});
```

**Result**

![Gist](/img/hugo_shortcode_gist.png "Gist")

For getting started quickly you can refer to this amazing prebuilt resource of [hugo shortcodes editor components](https://github.com/sharadcodes/hugo-shortcodes-netlify-cms)!
