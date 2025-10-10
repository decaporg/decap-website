---
label: "Number"
title: number
---

The number widget uses an HTML number input, saving the value as a string, integer, or floating point number.

- **Name:** `number`
- **UI:** HTML [number input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)
- **Data type:** string by default; configured by `value_type` option
- **Options:**
  - `default`: accepts string or number value; defaults to empty string
  - `value_type`: accepts `int` or `float`; any other value results in saving as a string
  - `min`: accepts a number for minimum value accepted; unset by default
  - `max`: accepts a number for maximum value accepted; unset by default
  - `step`: accepts a number for stepping up/down values in the input; 1 by default
  - `prefix`: <a href="https://github.com/decaporg/decap-cms/releases/tag/decap-cms%403.1.6" class="version-tag">3.1.6</a> display a message before the number input; accepts a string; defaults to an empty string
  - `suffix`: display a message after the number input; accepts a string; defaults to an empty string
- **Example:**
    ```yaml
    - label: "Puppy Count"
      name: "puppies"
      widget: "number"
      default: 2
      value_type: "int"
      min: 1
      max: 101
      step: 2
      suffix: "puppies"
    ```
