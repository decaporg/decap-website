[![Netlify Status](https://api.netlify.com/api/v1/badges/8b87160b-0a11-4f75-8050-1d21bc1cff8c/deploy-status)](https://app.netlify.com/projects/decap-www/deploys)

# Decap CMS Website & Docs

This repository builds decapcms.org. If you'd like to propose changes to the site or docs, you'll find the source files in here.

## 🏗️ Migration to Hugo

**October 2025**: This site has been migrated from Gatsby to Hugo for improved performance and maintainability.

- **Production site**: Built with Hugo (root directory)
- **Legacy code**: Gatsby implementation preserved in `gatsby/` folder for reference (not actively maintained)

## Installing

You need Hugo installed on your machine: <https://gohugo.io/getting-started/quick-start/>

This repository is set up to be developed with [Visual Studio Code](https://code.visualstudio.com/) editor. Please install reccommended extensions listed in [extensions.json](.vscode/extensions.json)

If this is your first time running the project, run

`npx husky init`

When you have that run one of these commands for local dev server:

`hugo server` or `npm run dev`

and open your local site on http://localhost:1313/

## Development

We use [BEM](http://getbem.com/) naming convention for CSS class names.

We follow the standard Javascript style.

### Linters

There are 3 linters set up:
- [stylelint](https://stylelint.io/) for CSS/SCSS
- [eslint](https://eslint.org/) for JavaScript
- [htmlhint](https://htmlhint.com/) for HTML

#### Linter Configuration Files

- `stylelint.config.js` - Stylelint configuration using ES modules
- `eslint.config.js` - ESLint configuration using ES modules  
- `.htmlhintrc` - HTMLHint configuration

#### Running Linters

```bash
# Run all linters
npm run lint

# Run individual linters
npx stylelint "**/*.scss"
npx eslint .
npx htmlhint 'layouts/**/*.html'
```

#### Auto-fixing

Linters will automatically fix issues when possible:
- **VS Code**: Auto-fixes on save (if recommended extensions are installed)
- **Command line**: Use `--fix` flag with eslint and stylelint
- **Pre-commit hook**: Automatically runs lint-staged which fixes staged files

#### Pre-commit Hook

A pre-commit git hook is configured using [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged). It:
- Runs linters only on staged files for better performance
- Auto-fixes issues when possible
- Prevents commits if there are unfixable errors

The hook configuration is in `.husky/pre-commit` and runs `npx lint-staged`, which uses the `lint-staged` configuration in `package.json`.

## Built With

* [Hugo](https://gohugo.io/)
* [Decap CMS](https://decapcms.org/)
* [Netlify](https://www.netlify.com)

## Dependencies

**Last updated:** July 2025: all dependencies are on their latest versions.

Key development dependencies:
- ESLint 9.13.0 with neostandard configuration
- Stylelint 16.10.0 with SCSS support
- HTMLHint 1.1.4
- Husky 9.1.6 for Git hooks
- lint-staged 16.1.2 for pre-commit linting
- PostCSS 8.5.6 with PurgeCSS and Autoprefixer

The project uses ES modules (`"type": "module"`) for modern JavaScript configuration files.
