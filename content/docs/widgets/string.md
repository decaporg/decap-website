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
  - `prefix`: <a href="https://github.com/decaporg/decap-cms/releases/tag/decap-cms%403.1.6" class="version-tag">3.1.6</a> display a message before the string input; accepts a string; defaults to an empty string
  - `suffix`: display a message after the string input; accepts a string; defaults to an empty string
- **Example:**
    ```yaml
    - {label: "Title", name: "title", widget: "string"}
    ```
