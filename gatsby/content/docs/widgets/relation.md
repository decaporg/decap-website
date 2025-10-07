---
title: relation
label: Relation
---
The relation widget allows you to reference items from another collection. It provides a search input with a list of entries from the collection you're referencing, and the list automatically updates with matched entries based on what you've typed.

* **Name:** `relation`
* **UI:** text input with search result dropdown
* **Data type:** data type of the value pulled from the related collection item
* **Options:**

  * `collection`: (**required**) name of the referenced collection (string)
  * `value_field`: (**required**) name of the field from the referenced collection whose value will be stored for the relation. For nested fields, separate each subfield with a `.` (e.g. `name.first`). For list fields use a wildcard `*` to target all list items (e.g. `categories.*`).
  * `search_fields`: (**required**) list of one or more names of fields in the referenced collection to search for the typed value. Syntax to reference nested fields is similar to that of *value_field*.
  * `file`: allows referencing a specific file when the referenced collection is a files collection (string)
  * `display_fields`: list of one or more names of fields in the referenced collection that will render in the autocomplete menu of the control. Defaults to `value_field`. Syntax to reference nested fields is similar to that of *value_field*.
  * `default`: accepts any widget data type; defaults to an empty string
  * `multiple` : accepts a boolean, defaults to `false`
  * `min`: minimum number of items; ignored if **multiple** is  `false`
  * `max`: maximum number of items; ignored if **multiple** is  `false`
  * `options_length`: accepts integer to override number of options presented to user. Defaults to `20`.
  * `filters`: <a href="https://github.com/decaporg/decap-cms/releases/tag/decap-cms%403.1.5" class="version-tag">3.1.5</a> allows adding filters by which the available options are filtered. You can add filters which are a pair of `field` and the allowed `values`, where the widget will only show options (collection items) that satisfy all the filters. A collection item satisfies a filter if the value of `field` is one of the values in `values`.
* **Referencing a folder collection example** (assuming a separate "authors" collection with "name" and "twitterHandle" fields with subfields "first" and "last" for the "name" field):

```yaml
- label: "Post Author"
  name: "author"
  widget: "relation"
  collection: "authors"
  search_fields: ["name.first", "twitterHandle"]
  value_field: "name.first"
  display_fields: ["twitterHandle", "followerCount"]
```

The generated UI input will search the authors collection by name and twitterHandle, and display each author's handle and follower count. On selection, the author's name is saved for the field.

* **String templates example** (assuming a separate "authors" collection with "name" and "twitterHandle" fields with subfields "first" and "last" for the "name" field):

```yaml
- label: "Post Author"
  name: "author"
  widget: "relation"
  collection: "authors"
  search_fields: ['name.first']
  value_field: "{{slug}}"
  display_fields: ["{{twitterHandle}} - {{followerCount}}"]
```

The generated UI input will search the authors collection by name, and display each author's handle and follower count. On selection, the author entry slug is saved for the field.

* **Referencing a file collection list field example** (assuming a separate "relation_files" collection with a file named "cities" with a list field "cities" with subfields "name" and "id"):

```yaml
- label: "City"
  name: "city"
  widget: "relation"
  collection: "relation_files"
  file: "cities"
  search_fields: ["cities.*.name"]
  display_fields: ["cities.*.name"]
  value_field: "cities.*.id"
```

The generated UI input will search the cities file by city name, and display each city's name. On selection, the city id is saved for the field.

* **Filters example**

```yaml
- label: Posts
  name: posts
  widget: relation
  collection: posts
  multiple: true
  search_fields: [title]
  display_fields: [title]
  value_field: '{{slug}}'
  filters: 
    - field: draft
      values: [false]
```

In this example, the relation widget will only show and allow posts that are not a draft (i.e. `draft` field is `false`). Say, we have 20 posts in the CMS of which 5 have `draft` set to true, then we will only see the other 15 posts as options in the relation widget.

Multiple filters can be added:

```yaml
filters: 
  - field: draft
    values: [false]
  - field: title
     values: ['post about cats', 'post about dogs']
```

In this case only the posts with `draft` set to `false` and a title that is either 'posts about cats' or 'post about dogs' will be options seen in the relation widget.
