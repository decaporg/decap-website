---
group: Workflow
weight: 30
title: Notes
---

<span class="version-tag">3.16.3</span>

Notes let editors leave comments on an entry without touching its content. A *note* is a short message attached to an entry, shown in a pane next to the editor, and stored in your repository host as issues rather than in the entry file. Use notes to ask a colleague for a second opinion, record why a wording was chosen, or leave a reminder for whoever picks the draft up next.

## Requirements

* Using the [GitHub backend](/docs/github-backend/), the [GitLab backend](/docs/gitlab-backend/), or [Decap Turbo](/docs/turbo-overview/) on either host.
* Using the [editorial workflow](/docs/editorial-workflows/).
* The entry has been saved at least once. Notes are not available while creating a new entry.
* Permission to read and write issues on the repository. On the GitHub and GitLab backends that is the signed-in user; on Decap Turbo it is the organization's shared credential — the Decap Turbo GitHub App, or a group access token on GitLab.
* On GitLab, the project must have issues enabled. A project with issues turned off cannot store notes.

## Enabling notes

Notes are off by default. Set `notes` to true under the [`editor`](/docs/configuration-options/#editor) option:

```yaml
# on root: enables notes for all collections
editor:
  notes: true 

collections:
  - name: blog
    folder: content/blog
    editor:
      notes: true # toggles notes per-collection
```

## Using the notes pane

The notes pane shares one space with the preview and [i18n](/docs/i18n/) panes, so opening one closes whichever was open, and selecting the pane already showing closes it. Decap CMS remembers the choice for the next entry you open.

The pane header counts unresolved notes — or every note, once none are left unresolved — and links to the entry's thread on your repository host.

A note is saved the moment you add it, independently of the entry: you do not need to save the entry for a note to persist.

You can read every note on an entry but act only on your own. **Edit** a note while it is unresolved, **Resolve** it once the point has been addressed, or **Delete** it — which removes it for everyone and cannot be undone. A resolved note stays in the pane, dimmed, and can be reopened with **Unresolve**. To respond to someone else's note, add your own.

Notes added by other editors appear within about 15 seconds without a reload. Polling pauses while the browser tab is in the background.

## How notes are stored

Notes live in an issue on your repository host, not in your content files.

The first time a note is added to an entry, Decap CMS opens an issue in the repository configured in `backend`, titled after the entry and labeled `decap-cms-notes` along with a `collection:<collection-name>` label. Each note is a comment on that issue, and its resolution status and author are kept in an HTML comment at the top of the comment body, where they stay out of the way when the issue is read on the host:

```
<!-- DecapCMS Note {"resolved":false,"author":"Ada Lovelace","authorId":"a1b2c3d4"} -->
Should this section mention the new pricing?
```

The author is recorded in the note because the account that writes the comment is not always the person who wrote it. On Decap Turbo every comment is posted with the organization's shared credential, so the host attributes each note to that account rather than to the editor who wrote it. `authorId` is what the CMS compares to decide whose notes you can act on; it is an opaque identifier, not an email address.

The GitHub and GitLab backends record neither field, because the account that posts a note is the editor who wrote it. A note with no recorded author — including a comment written directly on the issue — is attributed to the account that posted it.

The issue follows the entry through the editorial workflow:

| Action on the entry        | What happens to the issue                            |
| -------------------------- | ---------------------------------------------------- |
| Publish                    | Closed and labeled `entry-published`                 |
| Unpublish                  | Reopened, with the `entry-published` label removed   |
| Delete the unpublished entry | Closed and labeled `entry-deleted`                 |

Notes remain readable in the CMS after an entry is published, and a note added to a published entry is appended to the same issue, which stays closed until the entry is unpublished.

Because notes are issue comments, anyone with access to the repository can read them on the host, and a note is as public as the repository is. Edits and deletions made on the host show up in the CMS on the next poll, and a comment written directly on the issue appears in the pane as an unresolved note.
