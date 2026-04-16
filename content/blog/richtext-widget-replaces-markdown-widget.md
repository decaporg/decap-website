---
title: Richtext Widget Replaces the Markdown Widget
author: Martin Jagodic
description: Decap CMS introduces a new richtext widget built on Plate editor. The markdown widget remains available but is deprecated and will not be actively maintained.
image: /img/widget-richtext.png
date: 2026-04-16T08:00:00.000Z
aliases:
  - /blog/2026/04/richtext-widget-replaces-markdown-widget/
---
We are introducing a new `richtext` widget in Decap CMS as a replacement for the `markdown` widget. The `markdown` widget is still available for existing projects, but it is now deprecated and will not be actively maintained.

This is great news for everyone that experienced problems with the markdown widget. Your experience will now be much smoother.

**Why a new widget?**

The previous markdown widget had several long-standing problems that we could not solve reliably. Instead of continuing to patch around those limitations, we built a new widget designed to be easier to evolve and maintain.

The richtext widget is marked as Beta because we still expect some edge-case differences compared to the old markdown widget. We encourage everyone to test it in real-world content flows and report issues on [GitHub](https://github.com/decaporg/decap-cms/issues).

**How to replace it**

Switching from markdown to richtext is straightforward:

1. Update your collection field configuration from `widget: markdown` to `widget: richtext`.
2. Keep everything else as is. The richtext widget supports all the same config options as the markdown widget.
3. Test your existing content for edge-case formatting differences, since the new widget is still in Beta.

For full configuration options and examples, see the [Richtext Widget documentation page](/docs/widgets/richtext/).

**How we did it**

The feature was introduced in [this pull request](https://github.com/decaporg/decap-cms/pull/7162). The new widget is built on top of the [Plate editor](https://plate.dev/), which provides a solid foundation for rich text editing and allows us to support a wide range of content types and formatting options.

**Thanks!**

A huge thank you to [@demshy](https://github.com/demshy), who did most of the work, and to [@yanthomasdev](https://github.com/yanthomasdev), who brought it home.
