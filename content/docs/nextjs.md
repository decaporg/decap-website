---
group: Guides
weight: 40
title: NextJS
description: "Add Decap CMS to a Next.js site that reads Markdown content: the admin files in public/admin, the GitHub backend, local editing with decap-server, and deployment."
---
This guide will help you get started using Decap CMS with NextJS.

## Creating a new project

Let's repeat some of the basics of setting up a simple NextJS project (check out [nextjs.org/learn](http://nextjs.org/learn) for a more detailed version).

```bash
# Create new directory and navigate into it
mkdir awesome-kitties
cd awesome-kitties

# Initialize a new project
npm init -y

# Install required dependencies
npm install --save react react-dom next

# Install webpack loader for Markdown (Use version 3+)
npm install --save-dev frontmatter-markdown-loader

# If using NextJS v11.0.0 or above, @babel/core and @babel/preset-react has to be installed as dependencies of frontmatter-markdown-loader
npm install --save-dev @babel/core @babel/preset-react

# Create folder for pages (default for NextJS), and add a index file
mkdir pages
touch pages/index.js

# Create a folder for content, and a markdown file:
mkdir content
touch content/home.md

# Create a folder for static assets
mkdir public
```

Next, we need to add some modifications to our `package.json` file to make it easier to run and deploy our new site:

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "export": "npm run build && next export"
  }
}
```

There is a lot of different ways to create and display Markdown content, but to make this as easy as possible we'll be using a webpack-loader that enables us to load markdown files directly in our React components ([frontmatter-markdown-loader](https://www.npmjs.com/package/frontmatter-markdown-loader)).

Add the following content to your `content/home.md` file:

```md
---
title: Awesome kitties
date: 2019-03-17T19:31:20.591Z
cats:
  - description: 'Maru is a Scottish Fold from Japan, and he loves boxes.'
    name: Maru (まる)
  - description: Lil Bub is an American celebrity cat known for her unique appearance.
    name: Lil Bub
  - description: 'Grumpy cat is an American celebrity cat known for her grumpy appearance.'
    name: Grumpy cat (Tardar Sauce)
---
Welcome to my awesome page about cats of the internet.

This page is built with NextJS, and content is managed in Decap CMS
```

Next, we need to tell webpack how to load Markdown files. Create a new `next.config.js` file at the root of your project with the following content:

```js
module.exports = {
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return cfg
    }
}
```

Almost there! The last thing we need to do is to add some content to our `pages/index.js` file. With a little help of our webpack loader, we can now easily import Markdown files:

```js
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md'

export default class Home extends Component {
  render() {
    let { title, cats } = attributes
    return (
      <>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}
```

Great! We now have a page that displays content from our Markdown file. Go ahead and start your development server to test if everything is working:

```bash
npm run dev
```

## Adding Decap CMS

There are many different ways to add Decap CMS to your project. The easiest is probably just to embed it from a CDN, and that's exactly what we're gonna do. To avoid making this guide too complicated, we're just going to add Decap into a subfolder inside the `/public` directory (which is just served as static files by Next):

```bash
# Create and navigate into public/admin folder
mkdir -p public/admin
cd public/admin

# Create index.html and config.yml file
touch index.html
touch config.yml
```

Paste HTML for Decap CMS into your `public/admin/index.html` file (check out [Install Decap CMS](/docs/install-decap-cms/) for more information):

```html
<!doctype html>
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

Paste the following configuration into your `public/admin/config.yml` file:

```yaml
backend:
  name: github
  repo: your-name/your-repo # Path to your GitHub repository
  branch: main # Branch to update (optional; defaults to master)
  base_url: https://auth.example.com # Your OAuth client, see below
local_backend: true # Edit local files while `npx decap-server` runs
media_folder: public/img
public_folder: img
collections:
  - name: "pages"
    label: "Pages"
    files:
    - label: "Home"
      name: "home"
      file: "content/home.md"
      fields:
        - { label: "Title", name: "title", widget: "string"}
        - { label: "Publish Date", name: "date", widget: "datetime" }
        - { label: "Body", name: "body", widget: "markdown"}
        - label: 'Cats'
          name: "cats"
          widget: list
          fields:
            - { label: "Name", name: "name", widget: "string"}
            - { label: "Description", name: "description", widget: "text"}
```

Replace `your-name/your-repo` with the GitHub repository you'll push the project to.

### Editing content locally

To edit content on your computer, keep `npm run dev` running and start the Decap CMS proxy server in a second terminal, in the root of your project:

```bash
npx decap-server
```

Open `http://localhost:3000/admin/index.html`. Because of `local_backend: true`, Decap CMS reads and writes the files in your project directly, with no login. Edit the Home page, publish it, and the change is saved to `content/home.md`.

## Publishing to GitHub

Create a new repository at GitHub (or one of the other supported Git services) and follow the instructions on how to push existing files into your new repository.

Now is probably also a good time to add a `.gitignore` file:

```bash
.next/
node_modules/
/npm-debug.log
.DS_Store
out/
```

## Deploying and logging in

When your project is under version control, deploy it from your repository with your hosting provider of choice. The build command is `npm run export` and the publish directory is `out`. Decap CMS is a static page in your site, so any static hosting provider works.

On your live site, editors log in with the `github` backend. GitHub's login needs a small server, an OAuth client: deploy one of the [external OAuth clients](/docs/external-oauth-clients/) and set `base_url` in `config.yml` to its address. If you'd rather not run one, or want editors to log in without a GitHub account, switch the `backend` to [Decap Turbo](/docs/turbo-overview/), the optional hosted backend by the Decap maintainers. For GitLab and other Git hosts, see [Choosing a Backend](/docs/choosing-a-backend/).

Then open `/admin/` on your live site and log in.

**Using Git Gateway?** Earlier versions of this guide used the `git-gateway` backend with Netlify Identity. Sites that already use it can keep that setup, described on the [Git Gateway](/docs/git-gateway-backend/) page.

{{< git-gateway-deprecated >}}

Congratulations - you can finally manage your new list of cats!
