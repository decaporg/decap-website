---
title: "Decap CMS Website Migrated to Hugo"
description: >-
  We've migrated the Decap CMS website from Gatsby to Hugo, improving build times and maintainability while keeping the same experience.
date: 2025-10-06T10:00:00.000Z
author: Martin Jagodic
image: /img/hugo-migration.png
---

Decap CMS website has been migrated from Gatsby to Hugo. This migration brings significant improvements to our build process and developer experience while maintaining the same look and feel of our docs.

## Why Hugo?

Gatsby seems to be unmaintaned for some time now and working with it became a nightmare. We wanted a simpler, faster, and more maintainable solution for our static site generation needs. We've been fans of Hugo for years now, so it was a natural choice for us. Here's why:

### ⚡ Lightning-Fast Builds

Hugo is blazingly fast. Our site now builds in approximately **400 milliseconds**, compared to several seconds with Gatsby. This dramatic improvement means:

- Faster deployments to production
- Quicker preview builds for pull requests
- More efficient local development workflow

### 🎯 Simpler Architecture

Hugo's approach is refreshingly straightforward:

- **No JavaScript bundling complexity** - Hugo uses native Go templates instead of React components
- **SCSS instead of CSS-in-JS** - We replaced Emotion styled-components with clean, maintainable SCSS using BEM methodology
- **Fewer dependencies** - Significantly smaller `node_modules` footprint
- **No build-time JavaScript required** - Hugo is a single binary with no runtime dependencies

### 🔧 Better Maintainability

The Hugo implementation brings several maintainability improvements:

- **Clearer separation of concerns** - Templates, styles, and content are distinctly organized
- **Native features** - Built-in menu system, taxonomies, and content organization
- **Standard formats** - TOML/YAML configuration instead of JavaScript configs
- **Static site fundamentals** - Hugo embraces static site generation without the complexity of a JavaScript framework

## What Changed?

While the migration was comprehensive, we hope for minimal disruption for our users:

### ✅ Everything Works the Same

- **Identical visual appearance** - The site looks (almost) the same
- **Same URLs** - All existing URLs are preserved through aliases
- **Full functionality** - Docs navigation, search, CMS admin interface - everything works as before

### 🏗️ Under the Hood

The technical architecture was completely rebuilt:

- **Configuration**: Moved to `config/_default/` directory with `hugo.toml` and `menus.yaml`
- **Templates**: React components converted to Hugo templates in `layouts/`
- **Styles**: Emotion CSS-in-JS converted to SCSS with proper BEM naming
- **Navigation**: Custom data structures replaced with Hugo's native menu system
- **Content**: Markdown files remain unchanged, with minor frontmatter additions

### Legacy Code

The original Gatsby implementation is preserved in the `gatsby/` folder for reference. After a successful production run, we'll archive it to a separate repository.

### Performance Improvements

The numbers speak for themselves:

| Metric | Gatsby | Hugo | Improvement |
|--------|--------|------|-------------|
| **Build Time** | ~5-10s | ~400ms | **95% faster** |
| **Dev Server Start** | ~10-15s | ~350ms | **97% faster** |
| **Dependencies** | 2000+ packages | ~50 packages | **98% fewer** |
| **Bundle Size** | Complex webpack bundles | Simple static files | **Simpler** |

## Developer Experience

For contributors and maintainers, the Hugo implementation offers:

### Easier Onboarding

```bash
# Install Hugo (one binary)
brew install hugo

# Install dependencies
npm install

# Start development
hugo server
```

### Cleaner Code

The SCSS architecture uses:

- BEM methodology for consistent naming
- Semantic variables (`--space-4`, `--font-size-lg`)
- Mobile-first responsive design
- Component-based organization

## Try It Yourself

The new Hugo-based site is live now at [decapcms.org](https://decapcms.org). Everything should work exactly as before - but now it's faster and more maintainable.

If you spot any issues or differences, please [open an issue on GitHub](https://github.com/decaporg/decap-website/issues).
