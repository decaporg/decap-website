---
group: Intro
weight: 4
title: Releases and Updating
---
## Latest release

{{< releases-info >}}

## Update Methods

### Semantic Versioning

Decap CMS follows [Semantic Versioning](https://semver.org/). Versions use `MAJOR.MINOR.PATCH` format:

- MAJOR - Breaking changes
- MINOR - New features (backward compatible)
- PATCH - Bug fixes

### Package Manager

If you installed via npm or Yarn, use standard update commands:

```bash
npm update decap-cms-app
# or
yarn upgrade decap-cms-app
```

[View on npm →](https://www.npmjs.com/package/decap-cms-app)

### CDN

If you're using a CDN link in `/admin/index.html`, updates depend on the version range in your URL:

```html
<script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
```

## Version Range Syntax

Whether you're using a package manager (`package.json`) or CDN URL, you can specify version ranges to control automatic updates:

### Caret (^) - Minor and Patch Updates
Recommended for most users.

```json
// Package manager
"decap-cms-app": "^3.0.0"
```

```html
<!-- CDN -->
<script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
```

**Allows:**
- Patch updates: `3.0.0` → `3.0.1`
- Minor updates: `3.0.0` → `3.1.0`, `3.2.0`

**Blocks:**
- Major updates: `3.x.x` → `4.0.0`
- Beta versions

**Use when:** You want new features and bug fixes automatically, but want to control major version upgrades.

### Tilde (~) - Patch Updates Only
A more conservative approach.

```json
// Package manager
"decap-cms-app": "~3.0.0"
```

```html
<!-- CDN -->
<script src="https://unpkg.com/decap-cms@~3.0.0/dist/decap-cms.js"></script>
```

**Allows:**
- Patch updates: `3.0.0` → `3.0.1`, `3.0.2`

**Blocks:**
- Minor updates: `3.0.x` → `3.1.0`
- Major updates: `3.x.x` → `4.0.0`
- Beta versions

**Use when:** You want maximum stability and only want critical bug fixes.

### Exact Version

```json
// Package manager
"decap-cms-app": "3.0.0"
```

```html
<!-- CDN -->
<script src="https://unpkg.com/decap-cms@3.0.0/dist/decap-cms.js"></script>
```

**Use when:** You need complete control and want to test each update manually.
