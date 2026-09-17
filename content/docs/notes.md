---
group: Workflow
weight: 30
title: Notes
---

<span class="version-tag">3.15.0</span>

Notes let editors leave comments on an entry without touching its content. A *note* is a short message attached to an entry, shown in a pane next to the editor, and stored in your repository host rather than in the entry file. Use notes to ask a colleague for a second opinion, record why a wording was chosen, or leave a reminder for whoever picks the draft up next.

## Requirements

* Using the [GitHub backend](/docs/github-backend/), the [GitLab backend](/docs/gitlab-backend/), or [Decap Turbo](/docs/turbo-overview/). All three store notes the same way. Other backends do not store notes — the pane stays empty and adding a note fails.
* Using the [editorial workflow](/docs/editorial-workflows/).
* The entry has been saved at least once. Notes are not available while creating a new entry.
* Permission to read and write issues on the repository: the signed-in user on the GitHub and GitLab backends, or the Decap Turbo GitHub App on Turbo.
* On GitLab, the project must have issues enabled. A project with issues turned off cannot store notes.

## Enabling notes

Notes are off by default. Set `notes` to true under the [`editor`](/docs/configuration-options/#editor) option:

```yaml
editor:
  notes: true
```

Set as a top level option, this enables notes for every collection. To enable notes for a single collection, or for a single file in a files collection, set the option there instead:

```yaml
collections:
  - name: blog
    label: Blog
    folder: content/blog
    editor:
      notes: true
    fields:
      - { name: title, label: Title }
      - { name: body, label: Body, widget: markdown }
```

A collection or file setting overrides the top level one, so you can enable notes everywhere and turn them off for a collection that does not need them:

```yaml
editor:
  notes: true

collections:
  - name: settings
    label: Settings
    editor:
      notes: false
```

## Using the notes pane

When notes are enabled, the editor toolbar shows a notes toggle next to the preview toggle. The notes pane, the preview pane and the [i18n](/docs/i18n/) pane share one space to the right of the form, so opening one closes whichever was open. Selecting the pane that is already showing closes it and leaves the form full width. Decap CMS remembers your choice for the next entry you open.

The pane header shows the number of unresolved notes, or the total number of notes once they are all resolved, and a link to the entry's notes on your repository host.

To add a note, type into the field at the bottom of the pane and select **Add Note**. Press Ctrl+Enter to add the note without leaving the keyboard. Notes are saved as soon as you add them, independently of the entry itself — you do not need to save the entry for a note to persist.

Each note shows its author and the time it was written. The author of a note can:

* **Edit** it, while it is unresolved.
* **Resolve** it once the point has been addressed. A resolved note stays in the pane, dimmed and marked as resolved, and can be reopened with **Unresolve**.
* **Delete** it. Deleting a note removes it for everyone and cannot be undone.

Editors can read every note on an entry, but they can only act on their own. To respond to someone else's note, add a new one.

The pane checks for new notes every 15 seconds while the editor is open, so notes added by other editors appear without a page reload. Polling pauses while the browser tab is in the background.

## How notes are stored

Notes live in an issue on your repository host, not in your content files, so publishing an entry never writes a note into the repository content.

The first time a note is added to an entry, Decap CMS opens an issue in the repository configured in `backend`, titled after the entry and labeled `decap-cms-notes` along with a `collection:<collection-name>` label. Each note is a comment on that issue, and its resolution status and author are kept in an HTML comment at the top of the comment body, where they stay out of the way when the issue is read on the host:

```
<!-- DecapCMS Note {"resolved":false,"author":"Ada Lovelace","authorId":"a1b2c3d4"} -->
Should this section mention the new pricing?
```

The author is recorded in the note because the account that writes the comment is not always the person who wrote it. On Decap Turbo, comments are posted by the Decap Turbo GitHub App, so the host attributes every note to the app rather than to the editor. `authorId` is what the CMS compares to decide whose notes you can act on; it is an opaque identifier, not an email address.

The GitHub and GitLab backends record neither field, because the account that posts a note is the editor who wrote it. A note with no recorded author — including a comment written directly on the issue — is attributed to the account that posted it.

The issue follows the entry through the editorial workflow:

| Action on the entry        | What happens to the issue                            |
| -------------------------- | ---------------------------------------------------- |
| Publish                    | Closed and labeled `entry-published`                 |
| Unpublish                  | Reopened, with the `entry-published` label removed   |
| Delete the unpublished entry | Closed and labeled `entry-deleted`                 |

Notes remain readable in the CMS after an entry is published, and a note added to a published entry is appended to the same issue, which stays closed until the entry is unpublished.

Because notes are issue comments, anyone with access to the repository can read them on the host, and a note is as public as the repository is. Edits and deletions made on the host show up in the CMS on the next poll, and a comment written directly on the issue appears in the pane as an unresolved note.
