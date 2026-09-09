---
title: Decap Turbo — Terms of Service
description: "Last updated: 2026-09-09."
---

## 1. Who you're contracting with

Decap Turbo is operated by PM, poslovni mediji d.o.o., a company registered in Slovenia (registration number 2146215000, VAT ID SI27901181), with its registered office at Igriška ulica 5, 1000 Ljubljana, Slovenia ("we", "us", "our"). By creating an account or using Decap Turbo ("the Service"), you're contracting with PM, poslovni mediji d.o.o. for the Service itself, separately from your payment relationship with Paddle described in section 6.

## 2. Acceptance of terms

By creating an account or using the Service, you agree to be bound by these Terms of Service. If you don't agree, don't use the Service.

## 3. What the Service is

Decap Turbo is a managed hosting layer built on top of the open-source Decap CMS project. It provides hosted authentication, a Git hosting API request proxy, a database-backed content store, role-based access control, and site variable storage. Decap CMS itself remains free and open source and can always be self-hosted independently of this Service.

Some parts of the Service are labelled as preview or beta features. Those may change, break, or be removed without notice, and we don't guarantee the same stability or support level for them as for the rest of the Service. We'll try to give reasonable notice before removing a preview feature you're actively relying on.

If you store content or invite editors into the Service, you are the controller of that personal data and we process it on your behalf. Our [Data Processing Agreement](/turbo/dpa/) sets out those obligations and forms part of these terms.

## 4. Third-party services we depend on

The Service depends on third-party infrastructure we don't control, including GitHub's and GitLab's APIs, our hosting and email providers, [Supabase](https://supabase.com), and [Paddle](https://www.paddle.com). We're not responsible for outages, rate limits, API changes, or service interruptions caused by these third parties, though we'll work to minimize their impact on you where we reasonably can.

Section 4 of our [Privacy Policy](/turbo/privacy/) lists every provider that processes personal data for us, what each one processes, and how we notify you of changes. That list is the single authoritative one, referenced by our [Data Processing Agreement](/turbo/dpa/) as well as by this section.

## 5. Accounts and organizations

You're responsible for the accuracy of your account information and for maintaining the security of your credentials. Organizations ("orgs") have owners and members, and each site within an org has its own set of members with a role scoped to that site; the org owner is responsible for managing membership and access to connected sites and repositories.

## 6. Billing

Paid plans are billed monthly. Payments are processed by [Paddle.com](https://www.paddle.com), who acts as our reseller and merchant of record. That means Paddle — not us — is the seller of record for the transaction itself, handles payment collection, tax, and is your contractual counterparty for the payment under [Paddle's Buyer Terms](https://www.paddle.com/legal/buyer-terms). These Terms of Service instead govern your separate relationship with us regarding use of the Service itself. See our [Refund Policy](/turbo/refunds/) for cancellation and refund terms.

## 7. Plans, limits and fair use

### 7.1 Site and seat limits

Every organization has a plan, and every plan has a hard limit on how many **sites** it may hold and how many **seats** it may fill. A seat is a named person: accepted memberships and pending invitations both count against the seat limit.

| Plan | Sites | Seats |
|---|---|---|
| **Free** | 1 | 1 (the organization's owner) |
| **Pro** | 1, plus one for each extra-site add-on you buy | 5, plus one for each extra-seat add-on you buy |
| **Enterprise** | Fair use, per your agreement with us | Fair use, per your agreement with us |

These limits are enforced by the Service: at the limit, creating another site or inviting another person is refused until you raise the plan, buy the matching add-on, or free up a slot. They are not billed as overage — you are never charged for going over, because you cannot go over.

Enterprise organizations are not metered against a published number. They are subject to a high internal ceiling that exists only as a backstop against bots and runaway automation, not as a quota a real customer would encounter.

### 7.2 Fair use

Plans aren't metered — your invoice doesn't change based on request volume or storage. Beyond the site and seat limits above, each plan is subject to fair use: normal editorial use of the Service, at the scale implied by your plan's limits, is never a problem.

Traffic patterns clearly outside normal editorial use — for example sustained automated scraping, bot traffic against the Git hosting API proxy, or request rates no human editorial team could produce — may trigger a **manual review** rather than an automatic charge. We'll contact you before taking any action on your account. We may suspend an organization whose traffic threatens the Service or other customers; section 12 governs suspension.

**How fair use is enforced.** Every organization has a **daily ceiling on requests through the Git hosting API proxy**, set by its plan. It is a backstop against bursts, sized well above what editorial work produces: it exists so that one compromised account or one runaway script cannot exhaust the capacity the rest of your organization is sharing. Past the ceiling, further proxy requests are refused for the remainder of the day and resume automatically. Nothing is charged for going over, and nothing is deleted. We apply short-window rate limits to individual accounts on the same basis and for the same reason, and we may add technical limits of that kind where they are needed to protect the Service and other customers.

**The current ceilings are published in [our documentation](/docs/turbo-billing/#daily-request-ceilings), not here.** That is deliberate — keeping the numbers in the docs means we can raise one without amending your contract. It has to cut both ways to be fair, so: **we will give notice before lowering a ceiling**, on the same footing as any other materially adverse change to these terms (section 15).

Creating Free organizations at scale in order to multiply free sites or seats is outside fair use, and we may consolidate or suspend such organizations after contacting you.

## 8. The Pro trial

### 8.1 What it is

An organization's owner can turn on a **Pro trial** from the organization's billing page. The trial is **opt-in** — no organization is placed on it automatically — and it requires **no credit card**. Nothing is charged, and no payment method is collected, unless you choose to subscribe.

### 8.2 How long it lasts

A trial runs until **the later of two dates**: **15 October 2026** (the end of our public-preview promotion) and **14 days** from the day you turn it on.

In practice that means:

- **Start well before 15 October 2026** and your trial runs until that date — which is more than 14 days, and the earlier you start the longer you get.
- **Start close to it, or after it**, and your trial runs a full **14 days** from the day you started. Nobody gets a one-day trial for opting in on the last day of the promotion.

Once 15 October 2026 has passed, only the 14-day rule is left, and that is the ordinary trial from then on.

We may extend the promotional end date. If we do, trials already running are extended with it — you will never get less time than you had.

### 8.3 How many you get

**During the promotional period, every organization you own can turn Pro on free** — there is no per-customer limit, and a second or third organization is as welcome to it as the first. This is deliberate: a public preview exists to be tried.

**Once the promotional period ends**, the trial becomes **one per customer, ever**: a single 14-day trial per person, keyed to your account email address, on the **first** organization you own. An organization you create after that starts on Free, and reaching Pro means subscribing.

### 8.4 What the trial includes

A trialing organization gets Pro, more generously than paid Pro:

| | While trialing | Paid Pro |
|---|---|---|
| Sites | **5** | 1, plus extra-site add-ons |
| Seats | **25** | 5, plus extra-seat add-ons |
| Add-ons | **All included**, at no cost | Bought individually |

Advanced roles and priority support are both switched on for the duration. The trial is deliberately roomier than paid Pro so that a real multi-site, multi-editor setup can be evaluated properly.

Add-ons included with a trial are included *for the trial*. If you subscribe, you get what you buy: the paid plan's allowance plus whatever add-ons you choose. Custom roles you configured during the trial remain stored, but you will need the advanced-roles add-on to keep editing them.

### 8.5 What happens when it ends

If you add a payment method before the trial ends, the organization becomes a paying Pro customer and nothing changes for you but the invoice.

If you don't, the trial ends and the organization gets a **7-day grace period at full Pro access**. We email the organization's owners before the trial ends and again during grace. Nothing is restricted during grace — it exists so that a missed renewal doesn't interrupt anyone's work.

At the end of the grace period, the organization **drops to the Free plan**:

- **One site stays fully editable.** The owner chooses which one during the grace period; if nobody chooses, we keep the **oldest** site.
- **Every other site becomes read-only.** The content stays visible and stays in place.
- **Memberships other than the owner's are locked.** Those people keep their accounts but lose access to the organization until it has seats for them again.
- **Pending invitations are revoked.** An invitation nobody accepted before the drop is withdrawn, and the owner sends it again when there is a seat for it.
- **Nothing is deleted.** No site, no entry, no membership record, no stored variable. The drop restricts access; it does not destroy data. Your Git repository is untouched throughout.

### 8.6 Coming back

Subscribing to Pro (or being moved to Enterprise) restores access **as far as the new plan reaches**, oldest first:

- **Sites** are unlocked up to the plan's site limit — one on paid Pro, plus one for each extra-site add-on. An organization that ran five sites on trial and subscribes to plain Pro gets one back, not five; the rest stay read-only until you buy the slots. Which one is live is then yours to change from the site's settings.
- **Memberships** are unlocked up to the plan's seat limit, oldest membership first, and the rest stay locked until you buy the seats.
- **Revoked invitations stay revoked.** We don't quietly re-open an invitation to someone you may since have decided against — and it would spend a seat the moment it was accepted. Send it again.

This is a restoration of access, not a restoration of the trial's allowance. If you need all of it back, the add-ons are what buy it.

## 9. Acceptable use

You agree not to use the Service to:

- violate any applicable law or regulation;
- send spam, phishing content, or fraudulent communications;
- infringe on the intellectual property rights of others;
- interfere with, probe, scan, or scrape the infrastructure that supports the Service (including the Git hosting API proxy), or attempt to bypass its rate limits or access controls;
- introduce malware or otherwise compromise the security of the Service.

## 10. Intellectual property

We (PM, poslovni mediji d.o.o.) own and retain all right, title, and interest in and to the Service and its underlying software, infrastructure, documentation, and branding, excluding the open-source Decap CMS codebase itself, which remains separately licensed under the MIT License. You retain all rights to your own content and site data. Using the Service doesn't grant you any ownership interest in the Service beyond the limited right to use it as described in these terms.

## 11. Service level

We aim to keep the Service available and reliable, but on the Free and Pro plans we don't commit to a specific level of availability, and we don't guarantee uninterrupted or error-free performance. The Service may be unavailable from time to time for maintenance, upgrades, or issues outside our reasonable control.

Any availability commitment we make to an Enterprise customer is the one written into that customer's own agreement with us. Where such an agreement exists, it prevails over this section for that customer. Absent a signed commitment, no specific uptime figure is promised by these terms or by anything on our website.

## 12. Termination, suspension and dormant organizations

You may cancel your account at any time. Deleting an organization ends its subscription **immediately** rather than at the end of the billing period — section 5 of our [Refund Policy](/turbo/refunds/#5-downgrades-add-on-changes-and-cancellations) explains why, and what we do about the part of the period you had already paid for. We may suspend or terminate accounts that materially breach these terms, that fail to pay applicable fees, that we reasonably believe pose a security or fraud risk to the Service, or that repeatedly or seriously violate our acceptable use policy.

If your account is suspended or terminated, we'll give you a reasonable opportunity to export your site content, configuration, and org data before deletion, except where we terminate for fraud, security risk, or unlawful use, in which case we may restrict access immediately. Your site's underlying Git repository is unaffected either way — Decap Turbo is a layer on top of it, not a replacement for it.

### Dormant organizations

**We delete an organization that has shown no activity for 12 months.** Activity means any of: a member of the organization signing in, a change to one of its sites, or a content commit landing through the Service. Any one of those resets the clock, and signing in is the simplest.

Before deleting, we email the organization's owners **30 days** and **7 days** in advance, at the addresses on their accounts. Keeping an organization is therefore as simple as signing in when you get the warning.

Deletion removes the organization and everything we hold for it — its sites, memberships, pending invitations, stored site variables, and cached content — and **cannot be undone**. Billing and transaction records are retained separately where tax law requires it.

**Your Git repository is not affected.** Your content, its history and your repository stay with GitHub or GitLab under your own account. What we delete is our copy and our configuration. This is why we are comfortable applying the rule to a free, unused organization: the cost of keeping it running indefinitely is real, and the content itself does not live only with us.

**A paying organization is never deleted for dormancy.** An organization on a paid plan, or one that still has a live subscription with our payment provider, is exempt from this rule outright — not "counted as recently active", but excluded from the sweep before it is even looked at. We are not going to delete something we are still charging you for, and no warning email should ever be the only thing standing between a paid organization and deletion.

**If you stop paying, the twelve months start when the billing relationship ended** — not from whenever somebody last happened to sign in. An organization that ran on Pro for two years and then lapsed gets a full twelve months from the lapse, however long it had been since anyone logged in during it. This is the point of measuring from the end of billing rather than from the last sign-in: otherwise a former customer's deletion date could already be in the past on the day they stopped being a customer.

Our [Privacy Policy](/turbo/privacy/) describes the same rule as a retention period, with the other retention periods alongside it.

## 13. Indemnification

**This section applies only if you are using the Service for purposes relating to your trade, business, craft or profession** — that is, if you are not a consumer. If you are a consumer, this section does not apply to you at all, and your liability to us is whatever the applicable law provides and no more.

If you are a business customer, you agree to indemnify and hold us harmless from any claims, damages, or expenses (including reasonable legal fees) arising from your content, your breach of these terms, or your misuse of the Service, including misuse of the Git hosting API proxy that causes GitHub, GitLab, or another third party to bring a claim against us.

That indemnity does not extend to claims arising from our own breach of these terms, our negligence, or our failure to provide the Service as described.

An indemnity is only fair if the person who has to pay for a defence is the person who gets to run it. So three conditions come with this one. If a claim covered by this section is brought against us, we will **tell you promptly**, and in enough detail for you to judge it for yourself; we will **let you take control of the defence**, with counsel of your choosing; and we will **not settle without your consent**. We will cooperate with you in defending the claim.

Those are not housekeeping we could skip when it suited us. They are what stops this section from being a blank cheque — so if we fail to give you prompt notice, or fail to hand you the defence, and that failure costs you money, the difference is ours and not yours.

## 14. Warranties and limitation of liability

### 14.1 If you are a consumer

**Nothing in these terms takes away your statutory rights.** If you use the Service outside your trade, business, craft or profession, you have rights under consumer law that we cannot disclaim and are not trying to — including, in the EU/EEA, the right to have digital content and digital services supplied in conformity with the contract, and to a remedy if they are not. In Slovenia those rights come from the Consumer Protection Act (ZVPot-1), implementing Directive (EU) 2019/770.

So, plainly: the "as is" wording in section 14.2 and the liability cap in section 14.3 **do not limit** the statutory conformity warranty or any other right consumer law gives you. Where they conflict with your statutory rights, your statutory rights win.

### 14.2 Warranties

Subject to section 14.1, and to the maximum extent permitted by law, the Service is provided "as is". We don't warrant that it will be uninterrupted, error-free, or fit for a particular purpose you have in mind, and we exclude implied warranties to the extent the law allows us to.

### 14.3 Limitation of liability

Subject to section 14.1, and to the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from your use of the Service, including loss of data, profits, or business opportunity.

Where liability can't be excluded, our total liability for direct damages arising from these terms or your use of the Service is limited to **the greater of: the total fees you paid us in the 12 months before the claim arose, or €100**. The floor is there because "what you paid us" is no cap at all on a Free organization — it would be zero, and a cap of zero is not a limitation of liability, it is the absence of one. This limitation doesn't apply to liability that can't be limited under applicable law — for example liability for our gross negligence, willful misconduct, death or personal injury we cause, or, for consumers, the statutory rights described in section 14.1.

## 15. Changes to these terms

We may update these Terms of Service from time to time. Every version is published on this page carrying the date it was last updated, and the published version is the current one. That is how a change reaches you, and it is a commitment we can keep for every change we ever make.

**Where a change is materially adverse to you** — it takes something away, it costs you more, or it narrows what you may do — we will also tell you before it takes effect, by email to the address on your account or through the Service. We have deliberately not promised an email for every edit: a corrected typo and a price rise are not the same event, and a promise we would quietly break on the small ones is worth less to you than a narrower one we actually keep on the ones that matter.

**If you don't accept a material change, you can leave before it takes effect.** Cancel from your organization's billing page, or delete the organization, at any time before the effective date. **You will not be charged for a period you did not want:** if a change takes effect part-way through a period you have already paid for and you leave because of it, tell us and we will refund the unused remainder through Paddle — the same route as section 5 of our [Refund Policy](/turbo/refunds/#5-downgrades-add-on-changes-and-cancellations).

Continuing to use the Service after a material change takes effect means you accept the updated terms.

## 16. Force majeure

Neither party is liable for delays or failures to perform caused by events beyond its reasonable control, including internet or infrastructure outages, natural disasters, war, or governmental action.

## 17. Governing law

These Terms of Service are governed by the laws of the Republic of Slovenia, and any dispute arising from them is subject to the exclusive jurisdiction of the courts of Ljubljana, Slovenia, without prejudice to any mandatory consumer-protection rights you may have under the law of your own country of residence if you are a consumer in the EU/EEA.

This is separate from the governing law that applies to the payment transaction itself, which is handled by Paddle as merchant of record under [Paddle's Buyer Terms](https://www.paddle.com/legal/buyer-terms) (generally the law of England, unless a country-specific variant applies to you).

## 18. Contact

Questions about these terms? [Contact us](/contact/), or write to us at the registered office address in section 1.
