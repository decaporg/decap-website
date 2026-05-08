---
title: Dynamic Default Values
group: Fields
weight: 30
---

When linking to `/admin/#/collections/posts/new` you can pass URL parameters to pre-populate an entry.

For example given the configuration:

```yaml
collections:
  - name: posts
    label: Posts
    folder: content/posts
    create: true
    fields:
      - label: Title
        name: title
        widget: string
      - label: Object
        name: object
        widget: object
        fields:
          - label: Title
            name: title
            widget: string
      - label: body
        name: body
        widget: markdown
```

clicking the following link: `/#/collections/posts/new?title=first&object.title=second&body=%23%20content`

will open the editor for a new post with the `title` field populated with `first`, the nested `object.title` field
with `second` and the markdown `body` field with `# content`.

Here's an example using a multiple relation field. Given the configuration:

```yaml
collections:
  - name: posts
    label: Posts
    folder: content/posts
    create: true
    fields:
      - label: Title
        name: title
        widget: string
      - label: Authors
        name: authors
        widget: relation
        collection: "authors"
        value_field: "name"
        multiple: true
  - name: authors
    label: Authors
    folder: content/authors
    create: true
    fields:
      - label: Name
        name: name
        widget: string
```

clicking the following link: `/#/collections/posts/new?author=first&author=second`

will open the editor for a new post with the `author` field populated with any pre-existing authors whose names match `first` and `second`.

**Note:** URL Encoding might be required for certain values (e.g. in the previous example the value for `body` is URL encoded).
