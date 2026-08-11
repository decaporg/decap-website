---
title: Organizations, sites, and roles
group: Turbo
weight: 50
---

How access works across your organization and its sites, and how to invite people.

## Organization roles

Every person in an organization is either an **owner** or a **member**:

- **Owners** can create and delete sites, invite and remove organization members, manage billing, and do everything a member can.
- **Members** can be given access to individual sites but can't create sites, manage other members, or touch billing.

An organization needs at least one owner at all times — you can't remove or demote the last one, and you can't leave an organization if you're its only owner while other members remain (promote someone else first).

## Site roles

Access to a specific site is separate from organization role, and comes in two levels:

- **Site admin** — can manage that site's settings, members, and variables.
- **Site editor** — can use the CMS on that site, but can't change its settings or membership.

A site always needs at least one admin — the last one can't be demoted or removed.

Being an organization member doesn't automatically give you access to any site — an org owner or site admin has to explicitly add you to each site you need. This is deliberate: someone can be a paid seat in your organization without having editing access to every site you run.

## Per-collection permissions (advanced roles)

On top of the admin/editor split, you can restrict a specific site member to certain collections only — for example, an editor who should only touch the `blog` collection and not `settings`. This is configured per member, per collection, as edit / view-only / no-access, and it's enforced on Turbo's servers, not just hidden in the CMS UI (see [How it works](../turbo-how-it-works/#permission-enforcement-isnt-just-a-ui-filter)).

This is available as the **advanced/custom roles** add-on — see the [Turbo plans](/turbo/#plans) for pricing. Without it, site members simply have full access to whatever their admin/editor role allows.

## Inviting people

From your organization's Members page (owners only), invite by email and optionally grant access to specific sites at the same time — you don't need a separate step afterward. The invite is a link that's valid for a limited time; if it expires or you need to send it again, you can resend or revoke it from the same page.

The person you invite doesn't need an existing Decap Turbo account — accepting the invite walks them through creating one if needed. If they're only being given site access (not organization membership), they'll land on their [profile page](../turbo-getting-started/#your-profile) with a direct link to open the CMS on their site(s), without needing to touch anything org-level.

You can also add someone who *already* has a Decap Turbo account directly, without sending an invite email, from the same Members page or from a specific site's Members tab.

## Site variables

Each site has its own key/value store, available under that site's **Variables** tab (site admins only). This is meant for values your site's configuration or integrations need — for example, credentials for an optional CDN/media proxy add-on.

Marking a variable as **secret** masks its value in the Turbo UI, but doesn't encrypt it — treat this as "hidden from casual viewing," not as a vault. Don't rely on it for anything where encryption at rest is a hard requirement.

## Site locking

A site can become **locked**, meaning it's read-only for everyone, including its own admins, until an organization owner unlocks it. This happens either:

- **Automatically**, if your organization is downgraded or a subscription is canceled and you have more sites than your new plan allows (one site is retained and stays active; the rest lock).
- **Manually**, if an owner locks a site on purpose — for example, to free up a site slot on your plan without deleting it.

A locked site doesn't count against your plan's site limit, so unlocking one requires having a free slot (either by locking/deleting another site first, or upgrading).

## Transferring a site

An owner or site admin can move a site to a different organization they belong to, from that site's Danger Zone. Members, variables, and access scoping move with it — anyone who wasn't already a member of the destination organization loses their site access as part of the move, since site access requires an org seat in that same organization.

## Leaving or deleting an organization

Both live in your organization's settings, under Danger Zone:

- **Leave** removes only your own membership. Blocked if you're the only member (delete the org instead) or the last owner while others remain (promote someone first).
- **Delete** permanently removes the organization along with every site it owns, and all of those sites' content cache, variables, and memberships. This can't be undone — the confirmation shows how many sites are affected before you commit.

Belonging to zero organizations is a perfectly normal state — you'll land on your profile with a prompt to create a new one whenever you're ready.
