---
title: Editor Tooling
weight: 60
group: Customization
---

## Linting via remark

If you want to lint your markdown files as part of your development workflow (in editors, in a pre-commit hook, and/or via CI), then we suggest you use `remark`. Remark is the library used by the Decap markdown widget.

If you were to use a different linter than `remark` (such as `prettier`, etc), then you would end up with formatting conflicts between files. Files edited via the Decap web interface would be formatted differently than files edited via your development workflow.

To set this up, you will need to install and set up both of these npm packages in your project:

- remark: https://remark.js.org/
- remark-frontmatter: https://github.com/remarkjs/remark-frontmatter

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
