# Decap CMS Website - AI Development Guide

## Project Overview

This is the **Decap CMS website** built with **Hugo**. The site was successfully migrated from Gatsby in October 2025.

- **Production**: Hugo implementation (root directory)
- **Legacy**: Gatsby source code (`gatsby/`) - kept for reference only, not actively maintained

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

### Gatsby Reference (Legacy)
The original Gatsby site is preserved in `gatsby/` for reference:
```bash
cd gatsby
npm install
npm start           # Runs on http://localhost:8000/
```

## Styling Architecture

### SCSS System
- **Theme variables**: `assets/styles/_theme.scss` - defines color palette and design tokens
- **Breakpoints**: `assets/styles/_breakpoints.scss` - responsive breakpoint mixins
- **Base styles**: `assets/styles/_base.scss` - global resets and utilities
- **Component imports**: `assets/styles/style.scss` - main import file with clear organization
- **BEM methodology**: Follow BEM naming convention for CSS classes

### Design System
**Color Palette:**
- Primary: `#ff0080` (hot pink) - `var(--color-primary-light)`
- Primary Dark: `#683bab` (purple) - `var(--color-primary-dark)`
- Blue: `#3A69C7` - `var(--color-blue)`
- Background: `#fafafa` - `var(--color-background)`
- Dark: `#313d3e` - `var(--color-dark)`

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
- **Hugo version**: 0.155.3 (extended)

## Migration Patterns

### Component Conversion Process
1. **Analyze Gatsby component** in `gatsby/src/components/`
2. **Extract styling** from Emotion/styled-components to SCSS
3. **Convert JSX logic** to Hugo template syntax (`layouts/partials/`)
4. **Migrate data flow** from GraphQL queries to Hugo data/front matter

### React → Hugo Template Conversions
- **JSX conditionals**: `{condition && <div>}` → `{{ if condition }}<div>{{ end }}`
- **Loops**: `{items.map()}` → `{{ range .items }}`
- **Props**: `{props.title}` → `{{ .title }}`
- **Components**: `<Header />` → `{{ partial "header.html" . }}`

### Styling Migration: Emotion → SCSS
- **Styled components**: Convert to BEM classes in `assets/styles/partials/`
- **Theme variables**: Use existing Hugo variables from `_theme.scss`
- **Responsive breakpoints**: Replace Emotion queries with `@include mq-md`
- **Component states**: Convert `:hover` props to CSS pseudo-classes

### Data Flow Conversion
- **GraphQL queries**: Replace with Hugo's `.Site.Data` or front matter
- **Context/Props**: Use Hugo's `.` context and `with` statements
- **State management**: Convert to static content or minimal JavaScript

## Development Conventions

### File Organization
- **Hugo Templates**: `layouts/` for pages, `layouts/partials/` for components
- **Gatsby Reference**: `gatsby/src/components/` for original React components
- **Styling**: Hugo SCSS in `assets/styles/partials/` organized by component

### Migration Quality Checks
- **Visual parity**: Compare rendered output between Gatsby and Hugo
- **Responsive behavior**: Ensure breakpoints work identically

## Migration History

### Completed Migration (October 2025)

The site was fully migrated from Gatsby 5.x to Hugo with the following achievements:

#### ✅ **Core Infrastructure (100%)**
- Base layout system (`layouts/_default/baseof.html`)
- Header navigation with responsive menu and mobile hamburger
- Footer with social links and sitemap navigation
- DocSearch integration for site-wide search
- Theme variables and breakpoint system
- Syntax highlighting (Prism Tomorrow theme)
- Page-specific script loading blocks

#### ✅ **Homepage (100%)**
All sections successfully ported:
- Hero section with gradient background and decorative border
- Developers features section (alternating grid layout)
- Template banner (rotated border boxes with animated arrows)
- Editors features section (reuses developers styles)
- Services section (3 cards with unique gradients)
- Blog section (2-column grid in dark background)
- Community section (2-column grid, reversed layout)
- Dark section wrapper with angled border transition

#### ✅ **Documentation System (100%)**
- Docs list page (category overview with group organization)
- Single docs page with 2-column layout (sidebar + content + ads)
- Sidebar navigation with nested groups and expand/collapse
- Table of contents in right sidebar with smooth scrolling
- Edit on GitHub links with SVG pencil icon
- Version tags for beta features
- **Widgets tabbed interface** - Special layout with JavaScript tabs and hash routing

#### ✅ **Blog System (100%)**
- Blog list page with metadata and lead paragraphs
- Single blog post template with author, date, and featured images
- **URL compatibility** - Old Gatsby URLs (`/blog/YYYY/MM/slug/`) redirect to new URLs (`/blog/slug/`)
- 12 blog post aliases created for backward compatibility

#### ✅ **Features Pages (100%)**
- Features page templates (`layouts/features/single.html`)
- Reusable features grid component
- Developer features page (15 features)
- Editor features page (7 features)

#### ✅ **Other Pages (100%)**
- Community page with channels grid layout
- Services page with markdown content rendering
- Custom 404 page

#### ✅ **CMS Integration (100%)**
- Decap CMS admin UI (`static/admin/`)
- CDN-based approach (no JavaScript bundling required)
- Configuration adapted for Hugo content structure
- Collections: docs, blog, community, widgets
- Local backend support for development (`npx decap-server`)

#### ✅ **Styling System (100%)**
Complete SCSS architecture using BEM methodology:
- Theme variables: `assets/styles/_theme.scss`
- Breakpoints: `assets/styles/_breakpoints.scss` 
- Components: buttons, containers, cards, grids, alerts
- Layouts: blog, docs, community, features, home sections
- Typography: IBM Plex Sans + Montserrat
- Spacing system: `--space-0` through `--space-8`

#### ✅ **Third-Party Integrations**
- **Carbon Ads** - CDN integration with fallback styling
- **DocSearch** - Algolia-powered site search
- **GitHub API** - Can be integrated for releases/contributors if needed

### Components NOT Ported (Intentional)

These Gatsby components were **not ported** because they were **unused in the original site**:

- ❌ `awards.js` - Awards/recognition display (data exists but never rendered)
- ❌ `contributors.js` - GitHub contributor listing (no references found)
- ❌ `event-box.js` - Event display component (no usage found)
- ❌ `video-embed.js` - YouTube embed (can use Hugo shortcode if needed)
- ❌ `whats-new.js` - Releases widget (optional enhancement)

These can be implemented in Hugo if needed in the future, but they were not part of the active Gatsby site.

---