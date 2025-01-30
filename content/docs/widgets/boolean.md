---
title: boolean
label: "Boolean"
---

The boolean widget translates a toggle switch input to a true/false value.

- **Name:** `boolean`
- **UI:** toggle switch
- **Data type:** boolean
- **Options:**
  - `default`: accepts `true` or `false`; defaults to `false` when `required` is set to `false`
  - `required`: specify as `false` to make a field optional; defaults to `true`
- **Example:**
    ```yaml
    - {label: "Draft", name: "draft", widget: "boolean", default: true}
    ```
