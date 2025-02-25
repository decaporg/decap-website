---
label: "String"
title: string
---

The string widget translates a basic text input to a string value. For larger textarea inputs, use the text widget.

- **Name:** `string`
- **UI:** text input
- **Data type:** string
- **Options:**
  - `default`: accepts a string; defaults to an empty string
  - `required`: specify as `false` to make a field optional; defaults to `true`
- **Example:**
    ```yaml
    - {label: "Title", name: "title", widget: "string"}
    ```
