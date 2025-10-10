# Decap CMS Website & Docs (Legacy Gatsby Implementation)

> ⚠️ **This is legacy code.** The website has been migrated to Hugo (October 2025). 
> This folder is kept for reference only and is no longer actively maintained.
> 
> For active development, see the root directory (Hugo implementation).

---

This folder contains the original Gatsby implementation that built decapcms.org.

## Local development

The site is built with [GatsbyJS](https://gatsbyjs.org/).

To run the site locally, you'll need to have [Node](https://nodejs.org) version 18 or above installed on your computer.

To install dependencies and start the development server, run the following commands:

```bash
npm install
npm run start
```

If you want to see data from GitHub (releases) locally, you need to add `GITHUB_TOKEN` environment variable to the .env file. This is a private access token that you can generate in Github settings.

Then visit http://localhost:8000/ - Gatsby will automatically reload CSS or
refresh the page when stylesheets or content changes.
