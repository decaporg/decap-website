---
title: Billing and plans
group: Turbo
weight: 60
---

How to manage your plan, add-ons, and payment details. For plan tiers and current pricing, see the [Turbo plans page](/turbo/#plans) — this page covers how to act on that, not what things cost.

## Where billing lives

Billing is managed per-organization, by organization owners only, from your organization's **Billing** page (Plan & add-ons / Billing details / Usage / Invoices / Payment method tabs). Payments are processed by [Paddle](https://www.paddle.com), acting as merchant of record — you'll see Paddle's checkout when upgrading and Paddle's customer portal when updating a payment method.

## Trying Pro

New organizations start on Free. From Plan & add-ons you can turn Pro on at no cost, without entering a card — every feature is unlocked, up to the trial's own caps on sites and users. The page tells you the date it runs until.

During the public preview this is open to every organization you own. Once the preview ends it becomes a 14-day trial, available once per customer on their first organization.

If you don't add a payment method before it ends, you get a week's grace with full access, then the organization moves to Free — see [Downgrading or canceling](#downgrading-or-canceling) for exactly what that changes. We email owners (or your billing address, if you've set one) before the trial ends and again during the grace week. Nothing is ever deleted.

Adding a payment method during a trial doesn't charge you straight away: the first charge falls on the date the trial would have ended. If you're using more sites or seats than Pro includes, the matching add-ons are added for you and the full monthly total is shown before you confirm.

## Upgrading

From Plan & add-ons, upgrading from Free to Pro opens a checkout overlay right on the page — no redirect to a separate site. Once payment completes, your plan updates within a few seconds (the page reloads automatically to reflect it).

Add-ons (extra sites, extra seats, advanced roles, priority support, and others) are managed from the same page once you're on Pro, and take effect immediately.

## Billing details

The Billing details tab holds what appears on your invoices and where they're sent: a billing email, company name, and VAT/tax ID. The company name and tax ID are what make an invoice usable for a VAT-registered business, so it's worth filling them in before your first charge rather than after.

**The billing email is just an address that receives mail.** It doesn't need a Decap Turbo account, it doesn't grant anyone access to your organization, and the same address can serve as the billing contact for several organizations — which is the usual arrangement when one finance team pays for work across a few teams.

Because it receives your financial documents, a new billing address has to be confirmed before we start using it. Saving one sends a confirmation link to that address; until someone opens it, billing mail keeps going to the organization's owners. Saving again resends the link.

With no billing email set, invoices and billing notices go to every owner of the organization.

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

Enterprise agreements are **invoiced directly by PM, poslovni mediji d.o.o.**, not through Paddle, so there's no card on file and no invoice list in the dashboard — invoices come from our accounting to your billing contact. The Billing page shows a short note to that effect instead of plan cards and payment settings. To change your terms, add sites or seats, or ask about an invoice, email us.
