---
title: Editor Tooling
weight: 60
group: Customization
aliases:
  - custom-formatters
---

## Linting via remark

If you want to lint your Markdown files as part of your development workflow through your code editor, pre-commit hooks, and/or CI, we recommend using the Remark ecosystem.

Since Decap CMS uses `remark` internally for Markdown processing, using it in your development workflow will help avoid formatting/style differences between files edited through Decap and files edited locally.

To set this up, you will need to install and set up both of these npm packages in your project:

- remark-cli: https://github.com/remarkjs/remark/tree/main/packages/remark-cli
- remark-frontmatter: https://github.com/remarkjs/remark-frontmatter

Example installation command:

`npm install --save-dev remark-cli remark-frontmatter`

Example remark setup in `package.json`:

```json
{
  "scripts": {
    "remark:check": "remark .",
    "remark:write": "remark . --output"
  },
  "remarkConfig": {
    "plugins": ["remark-frontmatter"]
  }
}
```

## Custom Formatters

To manage content with other file formats than the built-in ones, you can register a custom formatter:

```js
const JSON5 = require("json5");

CMS.registerCustomFormat("json5", "json5", {
  fromFile: (text) => JSON5.parse(text),
  toFile: (value) => JSON5.stringify(value, null, 2),
});
```

Then include `format: json5` in your collection configuration. See the [Collection docs](https://www.decapcms.org/docs/configuration-options/#collections) for more details.

You can also override the built-in formatters. For example, to change the YAML serialization method from [`yaml`](https://npmjs.com/package/yaml) to [`js-yaml`](https://npmjs.com/package/js-yaml):

```js
const jsYaml = require("js-yaml");

CMS.registerCustomFormat("yml", "yml", {
  fromFile: (text) => jsYaml.load(text),
  toFile: (value) => jsYaml.dump(value),
});
```
