---
title: Middleman
description: "Add Decap CMS to a Middleman blog: the admin files in source/admin, a config.yml with the GitHub backend, local editing with decap-server, and deployment."
group: Guides
weight: 60
---
This guide will help you get started using Decap CMS and Middleman.

## Installation
To get up and running with Middleman, you need both the Ruby language runtime and RubyGems installed on your computer. Check out the [Middleman installation docs](https://middlemanapp.com/basics/install/) for more details. If you already have your environment set up, use the following command to install Middleman:

```bash
gem install middleman
```

## Create a new Middleman site
Let's create a new site from scratch. Run the following commands in the terminal, in the folder where you'd like to create the blog:

```bash
middleman init blog
cd blog
```

### Add the Middleman blog extension
Middleman has an official extension to support blogging, articles and tagging. `middleman-blog` ships as an extension and must be installed to use. Simply specify the gem in your Gemfile:

```bash
gem "middleman-blog"
```
Install the dependencies and run Middleman with the following commands:

```bash
bundle install
middleman server
```

## Get started with Middleman

Now we have our site up and running let's open up a code editor and create a new folder `source/posts` and add your first article named `2019-01-01-example-article.html.md` with the following content:


```yml
---
title: Example Article
date: 2019-01-01
---

This is an example article. You probably want to delete it and write your own articles once you finished this guide!
```

### Activate the blog extension
We can then activate the blog in `config.rb`. Be sure to check out the [Middleman blogging docs](https://middlemanapp.com/basics/blogging/) for all the configuration options.

```bash
activate :blog do | blog |
  blog.permalink = "blog/{title}.html"
  blog.sources = "posts/{year}-{month}-{day}-{title}.html"
  blog.layout = "blog-layout"
end
```

### Load the articles
Time to load our articles in `index.html.erb`.

```ruby
<h1>Recent articles</h1>

<% blog.articles.each do | article | %>
  <article>
    <h2>
      <%= article.title %>
    </h2>

    <%= link_to 'Read more', article %>
  </article>

<% end %>
```

### Add an article layout
In the last step before we add Decap CMS, we add a layout for the article page. Create a new layout `source/layouts/blog-layout.html.erb`. For now we will get the title and the content:
```ruby
<h1>
  <%= current_page.data.title %>
</h1>

<%= yield %>
```

Now that we have a functioning blog, let's get started with Decap CMS!

## Add Decap CMS to your site

Create two files in a new folder called `admin`, `index.html` and `config.yml`. Also add an `upload` folder in the images directory that will function as our `media_folder`.
```bash
├── source
│   ├── admin
│   │   ├── index.html
│   │   ├── config.yml
│   │
│   ├── images
│   │   ├── uploads
```


In the newly created `index.html` we add the script for Decap CMS:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Decap CMS</title>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/decap-cms@^3.0.0/dist/decap-cms.js" type="text/javascript"></script>
  </body>
</html>

```

### Configuration

This guide uses a GitHub repository with the `github` backend. In `config.yml` file paste the following code, and replace `your-name/your-repo` with the GitHub repository you'll push the site to:

```yml
backend:
  name: github
  repo: your-name/your-repo # Path to your GitHub repository
  branch: main # Branch to update (optional; defaults to master)
  base_url: https://auth.example.com # Your OAuth client, see below
local_backend: true # Edit local files while `npx decap-server` runs

media_folder: source/images/uploads
public_folder: /images/uploads

collections:
  - name: blog
    label: Blog
    folder: source/posts/
    extension: .html.md
    format: frontmatter
    create: true
    slug: '{{year}}-{{month}}-{{day}}-{{title}}'
    fields:
      - {label: Title, name: title, widget: string}
      - {label: Publish Date, name: date, widget: datetime}
      - {label: Body, name: body, widget: markdown}
```

### Editing content locally

To edit content on your computer, keep `bundle exec middleman server` running and start the Decap CMS proxy server in a second terminal, in the root of your project:

```bash
npx decap-server
```

Open `http://localhost:4567/admin/`. Because of `local_backend: true`, Decap CMS reads and writes the files in your project directly, with no login.

### Push to GitHub
It's now time to commit your changes and push to GitHub. 

```bash
git init
git add .
git commit -m "Initial Commit"
git remote add origin https://github.com/YOUR_USERNAME/NEW_REPO_NAME.git
git push -u origin main
```

### Deploying and logging in

Deploy the site from your repository with your hosting provider of choice. The build command is `bundle exec middleman build` and the publish directory is `build`. Decap CMS is a static page in your site, so any static hosting provider works.

On your live site, editors log in with the `github` backend. GitHub's login needs a small server, an OAuth client: deploy one of the [external OAuth clients](/docs/external-oauth-clients/) and set `base_url` in `config.yml` to its address. If you'd rather not run one, or want editors to log in without a GitHub account, switch the `backend` to [Decap Turbo](/docs/turbo-overview/), the optional hosted backend by the Decap maintainers. For GitLab and other Git hosts, see [Choosing a Backend](/docs/choosing-a-backend/).

Then open `/admin/` on your live site and log in.

**Using Git Gateway?** Earlier versions of this guide used the `git-gateway` backend with Netlify Identity. Sites that already use it can keep that setup, described on the [Git Gateway](/docs/git-gateway-backend/) page.

{{< git-gateway-deprecated >}}

## Start publishing

It's time to create your first blog post. Login to your site's `/admin/` page and create a new post by clicking New Blog. Add a title, a date and some text. When you click Publish, a new commit will be created in your GitHub repo with this format `Create Blog “year-month-date-title”`. 

If your hosting provider builds your site on every commit, it rebuilds your project now. When your project is deployed you'll be able to see the post you created.
