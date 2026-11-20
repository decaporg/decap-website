---
title: Select
label: Select
group: Widgets
weight: 140
---

The select widget allows you to pick a string value from a dropdown menu.

**Name:** `select`

**UI:** select input

**Data type:** string or array

**Options:**

- `default`: `options` must contain any default values
  - string values: accepts a string; defaults to an empty string. Accepts an array of strings and defaults to an empty array  with `multiple: true` enabled.
  - object with `label` and `value` fields: accepts an object with `label` and `value` field or an array of such objects when `multiple: true` is enable. Defaults to no value
- `options`: (**required**) there are two ways to list of options for the dropdown menu:
  - string values: the dropdown displays the value directly
  - object with `label` and `value` fields: the label displays in the dropdown; the value saves in the file
- `multiple`: accepts a boolean; defaults to `false`
- `min`: minimum number of items; ignored if **multiple** is  `false`
- `max`: maximum number of items; ignored if **multiple** is  `false`
- `filters`: <span class="version-tag">3.18.0</span> list of filters that narrow the options. Each filter is a pair of `field` and the allowed `values`, and an option is offered when it satisfies all the filters. Filters only work with options written as objects: `field` is a key on the option object, and the option satisfies the filter when the value of that key (or any item of it, if it is a list) is one of `values`. A value can be a reference to another field of the entry, such as `'{{fields.category}}'`. See the example below.

**Example** (options as strings):

```yaml
- label: "Align Content"
  name: "align"
  widget: "select"
  options: ["left", "center", "right"]
```

Selecting the `center` option, will save the value as:

```yaml
align: "center"
```

**Example** (options as objects):

```yaml
- label: "City"
  name: "airport-code"
  widget: "select"
  options:
    - { label: "Chicago", value: "ORD" }
    - { label: "Paris", value: "CDG" }
    - { label: "Tokyo", value: "HND" }
```

Selecting the `Chicago` option, will save the value as:

```yaml
airport-code: "ORD"
```

**Example** (multiple):

```yaml
- label: "Tags"
  name: "tags"
  widget: "select"
  multiple: true
  options: ["Design", "UX", "Dev"]
  default: ["Design"]
```

**Example** (min/max):

```yaml
- label: "Tags"
  name: "tags"
  widget: "select"
  multiple: true
  min: 1
  max: 3
  options: ["Design", "UX", "Dev"]
  default: ["Design"]
```

**Example** (options that depend on another field):

```yaml
- label: "Category"
  name: "category"
  widget: "select"
  options: ["sports", "music"]
- label: "Topic"
  name: "topic"
  widget: "select"
  options:
    - { label: "Football", value: "football", category: "sports" }
    - { label: "Jazz", value: "jazz", category: "music" }
    - { label: "Festival", value: "festival", category: ["sports", "music"] }
  filters:
    - field: "category"
      values: ["{{fields.category}}"]
```

The topic select only offers the topics whose `category` matches the picked category. Festival is offered for both.

- While Category is empty, Topic is disabled and shows "Select Category first."
- When Category changes, a selected topic that no longer matches is removed. Opening a saved entry never changes its values.
- Use a dotted path to reference a field inside an object, e.g. `{{fields.meta.category}}`. A path always starts at the top of the entry, so a field inside a list item can't reference another field of the same item.

The [relation widget](/docs/widgets/relation/) supports the same `filters`, matched against the fields of the referenced entries.

**Result**

![toggle switch](/img/widget-select.png)
