---
group: Collections
weight: 30
title: Nested Collections (beta)
---
This feature is in beta, please use with discretion.

A nested collection allows a folder collection to show a nested structure of entries and edit the locations of the entries.

It is useful when you have a complex folder structure and may not want to create separate collections for every directory. 

To enable it:

* Add a **`nested`** object to the collection config. Then configure it with these properties:

  * `depth`**:** max depth to show in the collection tree
  * `summary`**:** optional summary for a tree node, defaults to the inferred title field
  * `subfolders`**:** *(default: true)* if set to false, you don't need to have md files in subfolders. <span class="version-tag">3.6</span>
* Add a **`meta`** object with a `path` property. It allows editing the path of entries. Moving an existing entry will move the entire sub tree of the entry to the new location.

Example configuration:

```yaml
collections:
  - name: pages
    label: Pages
    label_singular: Page
    folder: content/pages
    create: true
    fields: [
      {name: title, label: Title, widget: string},
      {name: body, label: Body, widget: markdown},
    ]
    # Add nested and meta objects
    nested:
      depth: 100
      summary: '{{title}}'
      subfolders: true
    meta: { path: { widget: string, label: 'Path', index_file: '_index' } }
```

## Directory structure

Nested collections with `subfolders: true` (default) expect the following directory structure:

```bash
content
└── pages
    ├── _index.md
    ├── authors
    │   ├── _index.md
    │   └── author-1
    │       └── _index.md
    └── posts
        ├── _index.md
        └── hello-world
            └── _index.md
```

With `subfolders: false`, you can do it like this:

```bash
content
└── pages
    ├── _index.md
    ├── authors
    │   ├── _index.md
    │   └── author-1.md
    └── posts
        ├── _index.md
        └── hello-world.md
```
