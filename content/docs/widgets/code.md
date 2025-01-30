---
title: code
label: 'Code'
---

The code widget provides a code editor (powered by [Codemirror](https://codemirror.net)) with optional syntax awareness. Can output the raw code value or an object with the selected language and the raw code value.

- **Name:** `code`
- **UI:** code editor
- **Data type:** string
- **Options:**
  - `required`: specify as `false` to make a field optional; defaults to `true`
  - `default_language`: optional; default language to use
  - `allow_language_selection`: optional; defaults to `false`: allows syntax to be changed
  - `keys`: optional; sets key names for code and lang if outputting an object; defaults to `{ code: 'code', lang: 'lang' }`
  - `output_code_only`: set to `true` to output the string value only, defaults to `false`

- **Example:**
  ```yaml
  - label: 'Code'
    name: 'code'
    widget: 'code'
  ```
