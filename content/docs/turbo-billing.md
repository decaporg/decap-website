---
title: Billing and plans
group: Turbo
weight: 60
---

How to manage your plan, add-ons, and payment details. For plan tiers and current pricing, see the [Turbo plans page](/turbo/#plans) — this page covers how to act on that, not what things cost.

## Where billing lives

Billing is managed per-organization, by organization owners only, from your organization's **Billing** page (Plan & add-ons / Usage / Invoices / Payment method tabs). Payments are processed by [Paddle](https://www.paddle.com), acting as merchant of record — you'll see Paddle's checkout when upgrading and Paddle's customer portal when updating a payment method.

## Upgrading

From Plan & add-ons, upgrading from Free to Pro opens a checkout overlay right on the page — no redirect to a separate site. Once payment completes, your plan updates within a few seconds (the page reloads automatically to reflect it).

Add-ons (extra sites, extra seats, advanced roles, priority support, and others) are managed from the same page once you're on Pro, and take effect immediately.

## Downgrading or canceling

Downgrading from Pro to Free is scheduled for the end of your current billing period — you keep Pro features until then, and the page shows the date it takes effect. It isn't immediate, so you won't lose access mid-cycle.

When the downgrade actually takes effect (or if a subscription is canceled for payment reasons), a few things happen automatically:

- Every site except one is **locked** (read-only). You choose which site to keep active as part of canceling.
- Every organization member other than the owner is locked out.
- Any pending invitations are revoked.

Nothing is deleted — locked sites and memberships come back as soon as you upgrade again and have room under the new plan's limits. If you're planning to downgrade, it's worth deciding in advance which site you want to keep active, since the rest become read-only until you either upgrade again or manually manage slots (see [site locking](../turbo-roles-and-members/#site-locking)).

## Invoices and payment method

Past invoices are listed live from Paddle on the Invoices tab, with a PDF download for each — nothing is duplicated into Turbo's own records, so this always reflects Paddle's records directly. Your payment method is shown read-only (card brand and expiry); updating it opens Paddle's hosted customer portal rather than a form on this page.

## Usage

The Usage tab shows your current site and seat counts against your plan's limits, with a locked-sites count called out separately since locked sites don't count against your limit. Proxied requests and storage aren't metered or shown here — see the next section.

## Fair use, not metered billing

Decap Turbo doesn't bill based on request volume or storage — your invoice is the same every month regardless of usage, aside from add-ons you've added or removed. Instead, every plan is subject to fair use as described in the "Fair use" section of the [Terms of Service](/turbo/terms/); going over it doesn't trigger an automatic charge, it triggers a manual review. In practice this only matters for genuinely unusual traffic patterns — normal editorial use on any plan isn't something you need to watch a meter for.

## Enterprise

Enterprise is a custom-quoted plan handled outside self-serve checkout — contact us (link on the Billing page, or via the [Turbo plans page](/turbo/#plans)) rather than trying to select it from the plan cards.
