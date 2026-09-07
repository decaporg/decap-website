---
title: Decap Turbo — Data Processing Agreement
description: "Last updated: 2026-09-07."
---

This Data Processing Agreement ("DPA") applies where we process personal data **on your behalf** — as your processor, under Article 28 of the GDPR. It forms part of the [Terms of Service](/turbo/terms/) between you and PM, poslovni mediji d.o.o., and it takes effect when you accept those terms.

It is written to be read. Where we state a legal position rather than a fact about how the Service works, we say so.

## 1. When this applies, and when it doesn't

Decap Turbo involves two different relationships, and only one of them is covered here. Section 2 of our [Privacy Policy](/turbo/privacy/) explains the split in full.

- **We are the controller** — and this DPA does *not* apply — for the data we need to run our own business: your account, your organization's billing details, security logs, and product-usage data. Our own obligations for that data are in the Privacy Policy.
- **We are your processor** — and this DPA *does* apply — for the content your organization stores in the Service and the personal data of the editors you invite. You decide what goes in, who may see it, and how long it stays.

In this DPA, "you" and "Customer" mean the organization that is the controller; "we", "us" and "Processor" mean PM, poslovni mediji d.o.o.

If you require a separately signed and countersigned copy of this agreement for your procurement process, [contact us](/contact/) and we will provide one.

## 2. Subject matter, nature, purpose and duration

**Subject matter.** Our processing of personal data contained in the content and configuration you store in Decap Turbo, and of the personal data of your organization's members, for the purpose of providing the Service to you.

**Nature and purpose.** Hosting and serving content through a managed layer on top of your Git repository: storing and caching content and configuration, proxying requests to your Git host, authenticating your members, enforcing the roles you assign, recording activity in your organization so that you can see it, and sending transactional email about your organization.

**Duration.** For as long as your organization exists and these terms are in force, plus the deletion period in section 9. Our retention rules — including the 12-month dormancy deletion — are in section 7 of the Privacy Policy.

## 3. Categories of data subject and personal data

**Data subjects**

- Your organization's owners and members (your staff, contractors, or clients).
- People whose personal data appears in the content you store — for example authors credited in an entry, or people named or pictured in the content your editors publish.
- People you have invited but who have not yet accepted.

**Categories of personal data**

- **Identity and contact data** for your members: email address, name, and their role and permissions in your organization.
- **Authentication data**: credentials held by our authentication provider so your members can sign in.
- **Activity data**: which member saved which entry, in which collection and site, and when. This is what powers your organization's Activity log — your owners can see it, which is the point of it, and our Privacy Policy tells your editors so.
- **Content**: whatever your editors put into your entries, media and site variables. We do not control or inspect this, so we cannot enumerate it — you can, and you should assume it may contain personal data if your editors put personal data into it.
- **Technical data** incidental to providing the Service: IP addresses and request metadata for your members' sessions.

**Special categories.** The Service is not designed for, and we ask you not to use it for, special-category data under Article 9 (health, biometrics, political opinions, and so on) or criminal-conviction data. If you choose to store such data in your content anyway, you do so as controller and on your own assessment; we do not apply any additional safeguards specific to it.

## 4. Your instructions, and what we do without them

We process personal data only on your instructions, and only for the purposes in section 2.

**Your standing instruction** is the Service itself: by configuring your organization, connecting a repository, assigning roles and inviting members, you instruct us to process personal data as the Service does when configured that way. Using a feature is an instruction to run it.

**Additional instructions** — anything outside the Service's normal operation — should be sent in writing via [our contact page](/contact/). We will follow a documented instruction unless doing so would breach the GDPR or other applicable law, in which case we will tell you promptly and without acting on it.

**What we will not do.** We will not use your content, or your members' personal data, to train machine-learning models, to market to your members, or for any purpose of our own beyond providing and securing the Service. We will not sell it. We will not disclose it to a third party except to the sub-processors in section 6, or where law compels us — and where we are legally compelled, we will tell you first unless we are prohibited from doing so.

## 5. Confidentiality

We treat your content and your members' personal data as confidential. Access is limited to those of our personnel who need it to operate or support the Service, and those people are bound by confidentiality obligations that survive the end of their engagement with us. We do the same for our sub-processors' obligations to us — see section 6.

## 6. Sub-processors

You give us general written authorisation to engage sub-processors, subject to the conditions in this section.

**The authorised list is [section 4 of our Privacy Policy](/turbo/privacy/#4-sub-processors-and-recipients).** That table — who each provider is, what it processes, and where — is the single authoritative list for both documents. We deliberately do not repeat it here, so that there is one list to keep accurate rather than two that drift apart.

**Our obligations.** Each sub-processor is engaged under a written contract imposing data-protection obligations no less protective than those in this DPA. Where a sub-processor fails to meet those obligations, we remain liable to you for its performance as if it were our own.

**Changes.** Where we intend to add or replace a sub-processor, we will notify your organization's owners by email at least **30 days** before the change takes effect. If you have a reasonable, data-protection-based objection, tell us within those 30 days and we will work with you to find a resolution — for example a configuration that avoids the provider for your organization, where that is technically possible. If we cannot resolve it, you may terminate the affected part of the Service without penalty and receive a pro-rata refund of fees paid for the unused period. Your continued use after the notice period, without objection, is acceptance of the change.

## 7. Security measures (Article 32)

The measures below are what the Service actually does today, not an aspiration. They are appropriate to the risk in our assessment; **you should form your own view** as controller, and section 10 is how you verify them.

**Encryption**

- All traffic to the Service and between the Service and its sub-processors is encrypted in transit (TLS).
- Site variables flagged as secrets are encrypted at rest, using our database provider's managed key store. Site variables **not** flagged as secret are stored as plain text — mark anything sensitive as a secret.
- The underlying database is encrypted at rest by our provider.

**Access control**

- Every member's access to your organization is governed by the role you assign, enforced in the database by row-level security policies as well as in the application, so a member cannot read your data by going around the interface.
- Git host credentials are proxied on your behalf and never exposed to your members or to other customers.
- Administrative access to production systems is limited to named personnel and uses separate credentials from any customer account.

**Authentication.** Sign-in is by email address and password. **We do not currently offer multi-factor authentication, single sign-on, or SAML.** If your own security policy requires MFA on services holding your data, take that into account before storing sensitive content here — we would rather tell you plainly than let you assume otherwise.

**Resilience and recovery.** The database is backed up by our provider on its managed schedule, and the Service's infrastructure is redundant at the provider level. We do not currently offer a contractual recovery-time or recovery-point objective.

**Monitoring.** Application errors and failed requests are logged and retained for 180 days, and are reviewed as part of operating the Service.

**Segregation.** Customer data is logically separated per organization and per site, enforced by the access controls above. The Service is multi-tenant: your data shares infrastructure with other customers' data and is kept apart by those controls rather than by physical separation.

## 8. Assisting you

**Data-subject requests.** If a data subject contacts us with a request that concerns data we hold as your processor, we will not act on it ourselves. We will tell them to approach you, and we will tell you about the request without undue delay. We will then help you answer it — locating, correcting, exporting or deleting the data in question — using the Service's own functionality where it can do the job, and by hand where it cannot. We do not charge for reasonable assistance of this kind.

**Personal data breaches.** If we become aware of a personal data breach affecting personal data we process for you, we will notify you **without undue delay** and in any event within **48 hours** of becoming aware of it. The notification will describe what we know: the nature of the breach, the categories and approximate number of data subjects and records affected, the likely consequences, the measures we have taken or propose, and a contact point for further information. Where we do not have all of it at once, we will send what we have and follow up rather than wait. Notifying your supervisory authority is your obligation as controller; we will give you what you need to do it in time.

**Impact assessments.** We will provide reasonable assistance with your data protection impact assessments and any prior consultation with a supervisory authority, to the extent the processing we do for you is what needs assessing.

## 9. Deletion and return

**During the contract.** You can delete your content, sites, members and organization through the Service at any time. Deleting an organization removes what we hold for it, as described in section 7 of the Privacy Policy.

**At the end.** When these terms end, you may export your content and configuration; the Service's export functionality and your own Git repository are both routes to it, and we will help if neither is enough. **Your Git repository is not affected by anything in this section** — Decap Turbo is a layer on top of it, and your content and its history stay with your Git host under your own account.

After termination we delete the personal data we hold as your processor within **30 days**, together with existing copies, except where EU or Slovenian law requires us to keep it — principally billing and transaction records, which we retain for the tax period stated in section 7 of the Privacy Policy. Backups age out on our provider's rotation schedule and are not selectively edited; anything still in a backup is deleted when that backup expires and is not restored or used for any other purpose in the meantime.

## 10. Audit rights

You have the right to verify that we are doing what this DPA says.

On reasonable written notice, we will make available the information necessary to demonstrate our compliance — our security documentation, our sub-processor terms, and answers to a security questionnaire. This is normally enough, and it is the route we ask you to use first.

Where it genuinely is not enough, you may audit our processing, or appoint an independent auditor to do so, no more than once a year unless a breach or a supervisory authority's requirement makes another necessary. Audits happen during business hours, on at least 30 days' notice, under confidentiality, and in a way that does not disrupt the Service or compromise other customers' data. Each party bears its own costs.

**We do not currently hold an ISO 27001 or SOC 2 certification.** If your procurement process requires one, tell us early — it is better discussed than discovered.

## 11. International transfers

Some of our sub-processors are outside the EU/EEA, as the list in section 4 of the Privacy Policy shows.

Where we or a sub-processor transfer personal data out of the EU/EEA or the UK, the transfer is made under a safeguard recognised by Chapter V of the GDPR: the European Commission's **Standard Contractual Clauses** (Decision 2021/914), with the UK International Data Transfer Addendum where UK data is involved, or an applicable **adequacy decision** — including certification under the EU-US Data Privacy Framework where the recipient holds it.

By accepting this DPA you authorise us to enter into those clauses with sub-processors on your behalf, as your agent, for transfers arising from the Service. We will give you a copy of the relevant clauses for a specific sub-processor on request. Where required, we carry out a transfer impact assessment and apply supplementary measures.

## 12. Order of precedence, changes and liability

Where this DPA conflicts with the [Terms of Service](/turbo/terms/) on a matter of data protection, **this DPA prevails**. Where it conflicts with the Standard Contractual Clauses, the Clauses prevail.

We may update this DPA — to reflect a change in the Service, in our sub-processors, or in the law. Material changes are notified by email or through the Service before they take effect, on the same basis as changes to the Terms of Service. Sub-processor changes follow the 30-day notice in section 6.

Each party's liability under this DPA is subject to the limitations in section 14 of the Terms of Service, except where applicable data-protection law does not permit those limitations — in which case the law governs.

## 13. Contact

For data-protection matters, including anything in this DPA, [contact us](/contact/) or write to us at our registered office: PM, poslovni mediji d.o.o., Igriška ulica 5, 1000 Ljubljana, Slovenia.

We have not appointed a Data Protection Officer, as we are not required to under Article 37. Data-protection questions go to the contact route above and reach the people who run the Service.
