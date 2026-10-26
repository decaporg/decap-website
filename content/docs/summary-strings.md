---
group: Collections
weight: 40
title: Summary String Transformations
---

You can apply transformations on fields in a summary string template using filter notation syntax.

Example config:

```yaml
collections:
  - name: 'posts'
    label: 'Posts'
    folder: '_posts'
    summary: "{{title | upper}} - {{date | date('YYYY-MM-DD')}} – {{body | truncate(20, '***')}}"
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Publish Date', name: 'date', widget: 'datetime' }
      - { label: 'Body', name: 'body', widget: 'markdown' }
```

The above config will transform the title field to uppercase and format the date field using `YYYY-MM-DD` format.
Available transformations are `upper`, `lower`, `date('<format>')`, `default('defaultValue')`, `ternary('valueForTrue','valueForFalse')` and `truncate(<number>)`/`truncate(<number>, '<string>')`  

The same transformations also work in the collection [`slug`](/docs/configuration-options/#slug) template. <span class="version-tag">3.13</span>
