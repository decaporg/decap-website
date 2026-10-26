---
label: UUID
title: UUID
group: Widgets
weight: 170
---

<span class="version-tag">3.15</span>

The UUID widget generates a unique identifier when an entry is created, for example to give an entry a stable ID that doesn't change when its title or file name does. The value is generated once, the first time the field is shown without a value, and is kept on later edits.

**Name:** `uuid`

**UI:** read-only text input

**Data type:** string

**Options:**

- `read_only`: *(default: `true`)* set to `false` to let editors change the generated value
- `prefix`: a string added in front of the generated UUID; defaults to an empty string
- `use_b32_encoding`: *(default: `false`)* when `true`, saves the UUID as unpadded, lowercase Base32 ([RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648)) instead of the usual hexadecimal form with dashes, which gives a shorter value

With [i18n](/docs/i18n/), the value is generated in the default locale. Other locales get their own value only when the field has `i18n: translate`.

**Example**

```yaml
- {label: "ID", name: "id", widget: "uuid"}
```

This saves a value such as `7c9e6679-7425-40de-944b-e07fc1f90ae7`.

```yaml
- {label: "ID", name: "id", widget: "uuid", prefix: "post-", use_b32_encoding: true}
```

For the same UUID, this saves `post-pspgm6luevan5fcl4b74d6ik44`.
