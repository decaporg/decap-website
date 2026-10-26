---
title: Registering to CMS Events
weight: 80
group: Customization
---

You can execute a function when a specific CMS event occurs.

Example usage:

```javascript
CMS.registerEventListener({
  name: 'prePublish',
  handler: ({ author, entry }) => console.log(JSON.stringify({ author, data: entry.get('data') })),
});
```

Supported events are `prePublish`, `postPublish`, `preUnpublish`, `postUnpublish`, `preSave` and `postSave`. The `preSave` hook can be used to modify the entry data like so:

```javascript
CMS.registerEventListener({
  name: 'preSave',
  handler: ({ entry }) => {
    return entry.get('data').set('title', 'new title');
  },
});
```

The handler can return either the entry's new `data`, as above, or the whole entry. Return the whole entry to change something outside `data`, such as a translation when the collection uses [i18n](/docs/i18n/): <span class="version-tag">3.17.2</span>

```javascript
CMS.registerEventListener({
  name: 'preSave',
  handler: ({ entry }) => {
    return entry.setIn(['i18n', 'de', 'data', 'title'], 'neuer Titel');
  },
});
```
