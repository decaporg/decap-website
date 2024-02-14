---
title: datetime
label: DateTime
---

The datetime widget translates a datetime picker to a datetime string.

- **Name:** `datetime`
- **UI:** datetime picker
- **Data type:** [Day.js](https://day.js.org/)-formatted datetime string
- **Options:**
  - `default`: accepts a datetime string, or an empty string to accept blank input; otherwise defaults to current datetime.
  - `format`: sets storage format; accepts [Day.js formats](https://day.js.org/docs/en/display/format); defaults to ISO8601 (if supported by output format). If set, `date_format` and `time_format` are not used.
  - `date_format`: sets date display format in UI; boolean or [Day.js formats](https://day.js.org/docs/en/display/format). If used without `time_format`, only the date picker is displayed.
  - `time_format`: sets time display format in UI; boolean or [Day.js formats](https://day.js.org/docs/en/display/format). If used without `date_format`, only the time picker is displayed.
  - `picker_utc`: _(default: `false`)_ when set to `true`, the datetime picker will display times in UTC. When `false`, the datetime picker will display times in the user's local timezone. When using date-only formats, it can be helpful to set this to `true` so users in all time zones will see the same date in the datetime picker.
- **Example:**
    ```yaml
    - label: "Start time"
      name: "start"
      widget: "datetime"
      default: ""
      date_format: "DD.MM.YYYY" # e.g. 24.12.2021
      time_format: "HH:mm" # e.g. 21:07
      format: "LLL"
      picker_utc: false
    ```
