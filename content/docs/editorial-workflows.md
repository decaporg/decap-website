---
group: Workflow
weight: 20
title: Editorial Workflows
---


By default, saving a post in the CMS interface pushes a commit directly to the publication branch specified in `backend`. However, you also have the option to edit the [Publish Mode](../configuration-options/#publish-mode), which adds an interface for drafting, reviewing, and approving posts. To do this, add the following line to your Decap CMS `config.yml`:

```yaml
# This line should *not* be indented
publish_mode: editorial_workflow
```

From a technical perspective, the workflow translates editor UI actions into common Git commands:

| Actions in Netlify UI     | Perform these Git actions                                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Save draft                | Commits to a new branch (named according to the pattern `cms/collectionName/entrySlug`), and opens a pull request |
| Edit draft                | Pushes another commit to the draft branch/pull request                                                            |
| Approve and publish draft | Merges pull request and deletes branch                                                                            |

**Note:** Editorial workflow works with GitHub repositories, and supports [GitLab](/docs/gitlab-backend/), [Bitbucket](/docs/bitbucket-backend/), [Azure](/docs/azure-backend/), [Forgejo](/docs/gitea-backend/#forgejo-backend), [Git Gateway](/docs/git-gateway-backend/) and [Decap Turbo](/docs/turbo-overview/). The `gitea` backend doesn't support it.


### Bitbucket Support

In order to track unpublished entries statuses, the Bitbucket implementation uses
[pull requests comments](https://confluence.atlassian.com/bitbucketserver/commenting-on-a-pull-request-1027119882.html).

### GitLab Support

In order to track unpublished entries statuses, the GitLab implementation uses
[merge requests labels](https://docs.gitlab.com/ee/user/project/labels.html).

### Forgejo Support

Editorial workflow on Forgejo needs the [`forgejo` backend](/docs/gitea-backend/#forgejo-backend). In order to track unpublished entries statuses, the Forgejo implementation uses pull request labels, which it creates when they're missing.


## Unpublished entries in collections

<span class="version-tag">3.8</span>

Besides the Workflow page, unpublished entries also appear in their collection. Entries that haven't been published yet are listed below the published ones, under an **Unpublished Entries** heading, and sorted like the rest of the collection. Each entry with unpublished changes, including a published entry that is being edited, shows a badge with its status: **Draft**, **In review** or **Ready**.

Unpublished entries aren't listed when the collection is [grouped](/docs/configuration-options/#view_groups).

## Squash merge GitHub pull requests

When using the **Editorial Workflow** with the `github` or GitHub-connected `git-gateway` backends, Decap CMS creates a pull request for each unpublished entry. Every time the unpublished entry is changed and saved, a new commit is added to the pull request. When the entry is published, the pull request is merged, and all of those commits are added to your project commit history in a merge commit.

The squash merge option causes all commits to be "squashed" into a single commit when the pull request is merged, and the resulting commit is rebased onto the target branch, avoiding the merge commit altogether.

To enable this feature, you can set the following option in your Decap CMS `config.yml`:

```yaml
backend:
  squash_merges: true
```
