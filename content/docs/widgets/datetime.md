---
title: datetime
label: DateTime
---

The datetime widget translates a datetime picker to a datetime string.

**Name:** `datetime`

**UI:** datetime-local input / date inupt / time input

**Data type:** [Day.js](https://day.js.org/)-formatted datetime string

**Options:**

  - `default`: accepts a datetime string, or `'{{now}}'` to fill in the current datetime; otherwise defaults to empty string.
    
    <small>Unitl 3.2.1 it defaults to current datetime. To get an empty field, set default to empty string.</small>
  - `format`: sets storage format, displays the full date and time input in the UI. Accepts [Day.js formats](https://day.js.org/docs/en/display/format); defaults to ISO8601 (if supported by output format). If set, `date_format` and `time_format` are not used.
  - `date_format`: sets storage format and UI input type as date picker (without time). Boolean or [Day.js formats](https://day.js.org/docs/en/display/format). 
  - `time_format`: sets storage format and UI input type as time picker (without date). Boolean or [Day.js formats](https://day.js.org/docs/en/display/format). If used together with `date_format`, the UI input will be a full datetime picker.
  - `picker_utc`: _(default: `false`)_ when set to `true`, the datetime picker will display times in UTC. When `false`, the datetime picker will display times in the user's local timezone. When using date-only formats, it can be helpful to set this to `true` so users in all time zones will see the same date in the datetime picker.

  <small>The display format of the input element depends on browser locale.</small>

**Example:**
  ```yaml
  - label: "Start time"
    name: "start"
    widget: "datetime"
    default: "{{now}}"
    date_format: "DD.MM.YYYY" # e.g. 24.12.2021
    time_format: "HH:mm" # e.g. 21:07
    format: "LLL"
    picker_utc: false
  ```
