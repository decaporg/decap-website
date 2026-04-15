# Decap CMS Website - AI Development Guide

## Project Overview

This is the **Decap CMS website** built with **Hugo 0.148.1**.

- **Production**: Hugo implementation (root directory)

## Current Campaign Context

### Decap Turbo Positioning
- **Decap CMS** remains the open source, self-installed product.
- **Decap Turbo** is a SaaS upgrade for advanced Decap users.
- Turbo messaging should focus on:
  - Authentication handling
  - User roles and permissions
  - Database proxy performance improvements for a faster CMS experience

### Visual Direction For Turbo Campaign
- Pink and purple gradients are reserved for **Turbo-related content and visuals only**.
- Non-Turbo Decap content should avoid pink-purple gradients.
- Default Decap pages should be mostly neutral in tone.
- Pink and purple should appear as accent colors on non-Turbo pages, not as dominant backgrounds.
- When adding new styles, prefer neutral foundations first, then add accent usage intentionally.

## Development Workflows

### Initial Setup
```bash
npm install         # Install dependencies
npx husky init      # Set up Git hooks (first time only)
```

### Local Development
```bash
hugo server         # Start development server
# or
npm run dev         # Alternative command

# Site runs at http://localhost:1313/
# Live reload enabled by default
```

### Production Build
```bash
hugo --gc --minify  # Build optimized site
# Output: public/ directory
```

### Linting & Quality
Project uses **ES modules** configuration with 3 linters:
```bash
npm run lint        # Run all linters: eslint, stylelint, htmlhint

# Individual linters:
npx stylelint "**/*.scss"
npx eslint .
npx htmlhint 'layouts/**/*.html'
```

**Auto-fixing:**
- VS Code auto-fixes on save (with recommended extensions)
- Pre-commit hook runs `lint-staged` on staged files
- Command line: Use `--fix` flag with eslint/stylelint

### CMS Development
Access the Decap CMS admin interface:
```bash
# Start Hugo server first
hugo server

# Access CMS at: http://localhost:1313/admin/

# For local backend (edit without committing to Git):
npx decap-server
# Then access: http://localhost:1313/admin/
```

**CMS Architecture:**
- **CDN-based**: No JavaScript bundling required
- **Configuration**: `static/admin/config.yml`
- **Collections**: Docs (organized by section), Blog, Community, Widgets
- **Local backend**: Edit content without Git commits during development

## Styling Architecture

### SCSS System
- **Theme variables**: `assets/styles/_theme.scss` - defines color palette and design tokens
- **Breakpoints**: `assets/styles/_breakpoints.scss` - responsive breakpoint mixins
- **Base styles**: `assets/styles/_base.scss` - global resets and utilities
- **Component imports**: `assets/styles/style.scss` - main import file with clear organization
- **BEM methodology**: Follow BEM naming convention for CSS classes

### Design System
**Color Palette:**
- Accent Pink: `#ff0080` - `var(--color-primary-light)`
- Accent Purple: `#683bab` - `var(--color-primary-dark)`
- Blue: `#3A69C7` - `var(--color-blue)`
- Background: `#fafafa` - `var(--color-background)`
- Dark: `#313d3e` - `var(--color-dark)`

**Color Usage Rules:**
- For regular Decap pages, use neutral backgrounds and surfaces.
- Use pink/purple primarily for accents (highlights, small emphasis, selective CTAs).
- Reserve pink-purple gradients for Turbo pages, sections, and campaign assets.

**Typography:**
- Body: IBM Plex Sans (400, 500, 600 weights)
- Headings: Montserrat (700 weight)
- Code: IBM Plex Mono

**Spacing System:**
- Uses CSS custom properties: `--space-0` (0) through `--space-8` (4rem)
- Example: `padding: var(--space-4)` = 1.5rem = 24px

### Naming Conventions

**Font Sizes** - Use semantic names, not numbers:
- ✅ `var(--font-size-sm)`, `var(--font-size-lg)`, `var(--font-size-xl)`
- ❌ `var(--font-size-2)`, `var(--font-size-4)`, `var(--font-size-6)`

**Breakpoints** - Use full mixin names:
- ✅ `@include breakpoint-up(md)`, `@include breakpoint-down(lg)`
- ❌ `@include mq-md`, `@include mq-lg` (avoid shorthand aliases)

### Key Style Patterns
- **Responsive containers**: `.container` with size variants (`.size-sm`, `.size-md`, `.size-lg`)
- **Grid system**: `.grid.cols-2`, `.grid.cols-3` with `@include breakpoint-up(md)`
- **Button variants**: `.button.primary`, `.button.secondary`, `.button.outline`, `.button.block`
- **BEM components**: `.component__element--modifier` pattern throughout

## Content Management

### Content Structure
```
content/
├── _index.md          # Homepage content
├── blog/              # Blog posts
│   ├── _index.md      # Blog list page
│   └── *.md           # Individual posts
├── docs/              # Documentation
│   ├── _index.md      # Docs landing
│   └── *.md           # Doc pages
├── features/          # Feature pages
│   ├── developer.md   # Developer features
│   └── editor.md      # Editor features
├── community.md       # Community page
└── services.md        # Services page
```

### Front Matter Examples

**Blog Post:**
```yaml
---
title: "Post Title"
description: "Brief description"
date: 2023-08-23T08:00:00.000Z
author: "Author Name"
image: /img/featured.png
aliases:
  - /blog/2023/08/old-url/  # Gatsby-style redirects
---
```

**Documentation Page:**
```yaml
---
title: "Doc Title"
group: "Navigation Group"  # For sidebar organization
weight: 1                  # Ordering within group
---
```

**Features Page:**
```yaml
---
title: "Developer Features"
lead: "Description text"
features:
  - title: "Feature Name"
    description: "Feature description"
---
```

### Configuration Files
- **Site config**: `config/_default/hugo.toml` - Base URL, markup settings
- **Menus config**: `config/_default/menus.yaml` - Docs and main navigation structure
- **CMS config**: `static/admin/config.yml` - Decap CMS collections

## Build & Deployment

### Production Build
```bash
hugo --gc --minify  # Build optimized site
# Outputs to public/ directory
```

### Netlify Configuration
- **File**: `netlify.toml` in root
- **Build command**: `hugo --gc --minify`
- **Publish directory**: `public`
- **Hugo version**: 0.148.1 (extended)

## Development Conventions

### File Organization
- **Hugo Templates**: `layouts/` for pages, `layouts/partials/` for components
- **Styling**: Hugo SCSS in `assets/styles/partials/` organized by component

---