# Decap CMS Website - AI Development Guide

## Migration Project: Gatsby → Hugo

This workspace is actively **migrating from Gatsby to Hugo**. The dual architecture exists temporarily during the conversion process:

- **Hugo**: Target implementation (`hugo/`) - Hugo 0.148.1 with SCSS/PostCSS pipeline
- **Gatsby**: Source implementation (`gatsby/`) - Gatsby 5.x with Emotion styling (reference only)

**Primary Goal**: Convert Gatsby components, layouts, and styles to Hugo equivalents one by one.

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
