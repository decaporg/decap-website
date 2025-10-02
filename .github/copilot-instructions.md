# Decap CMS Website - AI Development Guide

## Migration Project: Gatsby → Hugo

This workspace is actively **migrating from Gatsby to Hugo**. The dual architecture exists temporarily during the conversion process:

- **Hugo**: Target implementation (`hugo/`) - Hugo 0.148.1 with SCSS/PostCSS pipeline
- **Gatsby**: Source implementation (`gatsby/`) - Gatsby 5.x with Emotion styling (reference only)

**Primary Goal**: Convert Gatsby components, layouts, and styles to Hugo equivalents one by one.

### Migration Status (As of October 2025)

#### ✅ Completed Components & Layouts

**Core Infrastructure:**
- Base layout system (`layouts/_default/baseof.html`)
- Header navigation with responsive menu
- Footer with social links and navigation
- Search functionality (DocSearch integration)

**Blog System:**
- Blog list page
- Single blog post template

**Documentation System:**
- Docs list page (category overview)
- Single docs page with navigation
- Sidebar navigation with nested groups
- Table of contents
- Edit on GitHub links
- Version tags

**Styling System:**
- Complete SCSS architecture with partials
- Responsive breakpoint system
- Theme variables (colors, typography)
- Component styles (buttons, containers, cards, alerts)
- Layout styles (blog, docs)

#### 🚧 Remaining Work

**Homepage**
- HTML structure roughly done, but need review
- all CSS and any JS interactions

**Gatsby Components Not Yet Ported (~20 components):**
- `awards.js` - Awards/recognition display
- `carbon-ads.js` - Ad integration
- `community-channels-list.js` - Community channels component
- `contributors.js` - Contributor listing
- `docsearch.js` - Enhanced search features (if beyond basic)
- `event-box.js` - Event display component
- `home-features.js` - Feature highlights (may be complete as developers section)
- `lead.js` - Lead text styling
- `markdown.js` / `markdownify.js` - Custom markdown rendering
- `meta-info.js` / `twitter-meta.js` - SEO meta tags (may exist in baseof)
- `page-hero.js` - Generic page hero component
- `section-label.js` - Section heading component
- `sidebar-layout.js` - Generic sidebar layout
- `table-of-contents.js` - ToC component (may be complete)
- `video-embed.js` - Video embedding
- `whats-new.js` - Changelog/updates component
- `widget-doc.js` / `widgets.js` - Widget documentation components

**Additional Pages:**
- Community page template (content exists, needs full styling verification)
- Services page template (content exists, needs full styling verification)
- Features page templates (content exists, needs templates)


## Key Development Workflows

### Hugo Development (Target)
```bash
cd hugo
npm install && npx husky init  # First time setup
hugo server                    # or npm run dev
# Site runs at http://localhost:1313/
```

### Migration Workflow
1. **Reference Gatsby**: Run `cd gatsby && npm start` to see current implementation
2. **Develop Hugo**: Work in `hugo/` directory to recreate functionality
3. **Compare**: Test both implementations side-by-side during conversion

### Linting & Quality
Hugo uses **ES modules** configuration with 3 linters:
```bash
npm run lint  # Runs all: eslint, stylelint, htmlhint
```

## Styling Architecture

### Hugo SCSS System
- **Theme variables**: `assets/styles/_theme.scss` - defines color palette and design tokens
- **Global styles**: `assets/styles/_global.scss` - contains button styles, grid system, container classes
- **Component imports**: `assets/styles/style.scss` - main import file with clear organization
- **BEM methodology**: Follow BEM naming convention for CSS classes

### Design System Consistency
Both systems share identical color schemes:
- Primary: `#ff0080` (hot pink)
- Primary Dark: `#683bab` (purple)
- Blue: `#3A69C7`
- Typography: IBM Plex Sans + Montserrat

### Key Style Patterns
- **Responsive containers**: `.container` with size variants (`.size-sm`, `.size-md`, `.size-lg`)
- **Grid system**: `.grid.cols-2`, `.grid.cols-3` with `@include mq-md` breakpoint
- **Button variants**: `.btn.primary`, `.btn.secondary`, `.btn.outline`, `.btn.block`

## Content Management

### Shared Content Structure
Both systems use identical content organization:
```
content/
├── docs/          # Documentation pages
├── blog/          # Blog posts  
└── features/      # Feature descriptions
```

### Hugo Front Matter
```yaml
---
title: "Page Title"
group: "Navigation Group"  # For docs organization
weight: 1                  # Ordering within group
---
```

### Data-Driven Configuration
- **Hugo**: `hugo.toml` for site config, menu structure
- **Gatsby**: `gatsby-config.js` + `data/global.yaml` for footer/metadata

## Build & Deployment

### Hugo (Production)
```bash
hugo --gc --minify  # Production build
# Outputs to public/ directory
```

### Gatsby (Legacy)
```bash
gatsby build && rm -rf dist && mv public dist
# Outputs to dist/ directory
```

### Netlify Configuration
Each system has separate `netlify.toml` with different build commands and publish directories.

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
