---
title: Billing and plans
group: Turbo
weight: 60
---

Managing your plan, add-ons and payment details. Tiers and prices are on the [plans page](/turbo/#plans).

Billing is per organization, owner-only, from the organization's **Billing** page. [Paddle](https://www.paddle.com) is the merchant of record — you'll see Paddle's checkout when upgrading and Paddle's portal when changing a card.

## Trying Pro

New organizations start on Free. From **Plan & add-ons** you can switch Pro on with no card. The page shows the date it runs until.

It unlocks every Pro feature except **priority support**, which needs a payment method on file. Priority support is a service rather than a feature — a response-time commitment backed by people — so it isn't given away with a trial.

During the public preview this is open to every organization you own. Afterwards it becomes a 14-day trial, once per customer, on their first organization.

If no payment method is added before it ends, you get a week's grace at full access, then the organization moves to Free — see [Downgrading](#downgrading-and-cancelling). Owners (or your billing address, if set) are emailed before the trial ends and during the grace week. Nothing is deleted.

Adding a card during a trial doesn't charge immediately: the first charge falls on the date the trial would have ended. If you're over Pro's included sites or seats, the matching add-ons are attached for you and the total is shown before you confirm.

## Upgrading

Upgrading from Free opens a checkout overlay in place, no redirect. The plan updates within seconds and the page reloads.

The four add-ons — extra sites, extra seats, advanced roles, priority support — are managed from the same page once you're on Pro, and take effect immediately.

## Billing details

The **Billing details** tab holds what appears on invoices and where they go: billing email, company name, VAT/tax ID. Fill in the company name and tax ID before your first charge if you need a VAT-usable invoice.

The billing email is only a destination. It needs no Turbo account, grants no access, and one address can serve several organizations. Because it receives financial documents it must be confirmed: saving one sends a link there, and until someone opens it, billing mail keeps going to the owners. With no billing email set, everything goes to every owner.

## Downgrading and cancelling

Downgrading is scheduled for the end of the current billing period — you keep Pro until then, and the page shows the date.

When it takes effect, or if a subscription is cancelled for payment reasons:

- Every site except one is [locked](../turbo-roles-and-members/#site-locking). You choose which to keep active.
- Every organization member other than the owner is locked out.
- Pending invitations are revoked.

Nothing is deleted. Upgrading again unlocks sites and memberships oldest first, as far as the plan reaches — so an organization that had three sites and dropped to Free gets one back on Pro, and the rest stay read-only until you add extra sites. Revoked invitations aren't restored.

## Invoices and payment method

**Invoices** lists them live from Paddle with a PDF each; nothing is mirrored into Turbo. The payment method is read-only here — updating it opens Paddle's portal.

## Usage and fair use

**Usage** shows sites and seats against your limits, with locked sites counted separately.

Turbo doesn't bill on request volume or storage. Your invoice is the same every month apart from add-ons. Instead every plan is subject to the fair-use section of the [Terms](/turbo/terms/#7-plans-limits-and-fair-use); exceeding it triggers a manual review, not a charge.

### Daily request ceilings

One enforced number sits behind fair use: proxy requests per day, per organization.

| Plan | Requests/day |
|---|---|
| Free | 2,500 |
| Pro | 20,000, plus 20,000 per extra-site add-on |
| Enterprise | 100,000 |

A Pro organization with two extra sites gets 60,000. An organization on the Pro trial gets Pro's base 20,000 even though the trial allows five sites — extra-site add-ons are bought, and a trial hasn't bought any.

**Counted:** everything an editor's CMS session sends through the Git proxy — loading collections, opening entries, saving, publishing, and repo-hosted media. Requests Turbo answers from its own store count too, since the ceiling is measured at the proxy's front door.

**Not counted:** the Turbo dashboard itself, and media served through the [media library](../turbo-media-proxy/), which doesn't touch the Git proxy.

It's a burst backstop, sized so a compromised account or runaway script can't exhaust shared capacity. Editorial work sits orders of magnitude below it; the realistic way to hit it is the first sync of a very large repository.

Over the ceiling, the proxy returns **429** with a `Retry-After` header, and saves and loads fail in the CMS. Nothing is charged, locked or deleted, and the counter resets on a 24-hour boundary. There's also a per-user limit of 10,000 requests a minute, which only a runaway loop reaches.

These numbers live here rather than in the Terms so they can be raised without a contract amendment. The Terms commit us to notice before **lowering** one.

## Enterprise

Custom-quoted and handled outside self-serve checkout — contact us from the Billing page or the [plans page](/turbo/#plans).

Enterprise is invoiced directly by PM, poslovni mediji d.o.o., not through Paddle, so there's no card on file and no invoice list in the dashboard. The Billing page shows a note instead of plan cards.
