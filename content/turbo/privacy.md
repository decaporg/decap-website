---
title: Decap Turbo — Privacy Policy
description: "Last updated: 2026-09-09."
---

## 1. Who we are

Decap Turbo is operated by PM, poslovni mediji d.o.o., a company registered in Slovenia (registration number 2146215000, VAT ID SI27901181), with its registered office at Igriška ulica 5, 1000 Ljubljana, Slovenia ("we", "us", "our"). For privacy questions or data requests, [contact us](/contact/) — see section 13.

Whether we are the *controller* or a *processor* of a given piece of data depends on what it is. Section 2 explains the split, because it decides who you should go to.

## 2. Our role: controller for accounts, processor for content

**We are the controller** for the data we need in order to run Decap Turbo as a business: your account details, the organizations and sites you create, billing information, security logs, and product-usage data. We decide what to collect and why, and this policy is our disclosure to you about it.

**We are a processor** for the content an organization stores in Decap Turbo, and for the personal data of the editors an organization invites. If your employer or client invited you into their organization, then *they* decide what content goes in, who may see it, and how long it stays — we hold and process it on their instructions. In that arrangement the organization is the controller and we act on its behalf.

What this means in practice:

- **If you own an organization**, you are the controller for your content and your editors. Our processor obligations to you are set out in our [Data Processing Agreement](/turbo/dpa/), which forms part of your [Terms of Service](/turbo/terms/).
- **If you were invited into someone else's organization**, requests about the *content* you produce, or about your membership of that organization, go to the organization's owner first — we cannot delete a customer's content, or remove you from their organization, on our own initiative. Requests about *your own account* (your login, your email address, closing your account) come to us, and section 11 explains how.

Where we are a processor we still have direct obligations of our own — security, sub-processor management, and breach notification — and we honour those regardless of who the controller is.

## 3. What we collect and why

| Category | Examples | Purpose | Legal basis |
|---|---|---|---|
| Account data | Email address, name | Creating and securing your account | Performance of a contract |
| Organization & role data | Org/site metadata, membership and role assignments | Running multi-user orgs and access control | Performance of a contract |
| Billing profile | Billing email, company name, VAT ID | Invoicing and tax compliance | Performance of a contract and legal obligation |
| Git hosting credentials | GitHub/GitLab access tokens (proxied, not shown to other users) | Operating the Git hosting API request proxy | Performance of a contract |
| Site content and configuration | Entries you save through the CMS, cached repository content, site variables you choose to store with us | Providing the content store and site variable storage | Performance of a contract (as processor for the organization — see section 2) |
| Support communications | Messages sent via our contact form | Responding to inquiries and support requests | Legitimate interest (providing support) |
| Security/technical logs | IP address, request logs, device/browser identifiers, records of failed and errored requests | Fraud prevention, abuse detection, and keeping the Service secure | Legitimate interest (security) and legal obligation, where applicable |
| Organization activity records | Who saved which entry, in which collection and site, and when — including the editor's email address | Showing an organization's owners what happened in their own organization (the Activity log), and supporting our own operations | Performance of a contract |
| Product-usage data | Feature usage events (pages visited, actions taken), tied to your account | Understanding how the Service is used so we can improve it | Legitimate interest (product improvement) |
| Error diagnostics | Records of application errors: the error message and stack, the request path it happened on (stored in templated form — see section 6), and the account, organization or site involved | Finding and fixing faults in the Service | Legitimate interest (keeping the Service working) |

We do not collect payment card details ourselves — see section 4.

**About the Activity log.** The same records that tell us how the Service is used also power the Activity log on an organization's dashboard. If you are an editor in someone's organization, that organization's owners can see **your email address alongside the entries you saved, the collection and site you saved them in, and the time you did it**. This is deliberate: an organization needs to know who changed its content. We are telling you plainly because it is not obvious from the Service itself, and because it means your activity in an organization is not private from that organization's owners.

You can turn off product-usage collection in your profile settings, and an organization's owner can turn it off for the whole organization (both are described in section 6). Doing so does **not** remove you from an organization's Activity log — that record is part of what we provide to the organization under its contract with us, not something we collect for our own product research. If you want to know exactly what an organization can see about you, ask its owner; if you want it changed or removed, they are the ones who can decide that.

## 4. Sub-processors and recipients

We use the following sub-processors. Each one processes personal data on our behalf, under a written agreement and subject to the safeguards in section 5.

| Sub-processor | What it processes | Where |
|---|---|---|
| [Supabase](https://supabase.com) | Authentication and the application database: account data, organizations, sites, cached content, site variables, activity and usage records | Database hosted in the **EU (Ireland)**; vendor support operations may access it from elsewhere |
| [Netlify](https://www.netlify.com) | Hosts the Decap Turbo application. Sees every request to it — IP addresses, session cookies, request logs | US company, global edge network |
| [Cloudflare](https://www.cloudflare.com) | Turnstile bot protection on the signup form: the IP address and browser signals of everyone who loads that page (see section 6) | US company, global edge network |
| [Brevo](https://www.brevo.com) | Transactional email: recipient email addresses and names, organization names, and billing details where an email concerns billing | EU (France-based provider) |
| [GitHub](https://github.com) / [GitLab](https://gitlab.com) | Your repository content, and the access tokens we proxy on your behalf, for whichever host your site is connected to | Per your own account with that host |
| [Paddle](https://www.paddle.com) | Sale of subscriptions, payment collection, subscription management, tax compliance, invoicing | UK company, processing globally; see Paddle's own policy |

Paddle is different from the others: it is our reseller and **merchant of record**, and acts as an **independent controller** of your payment and billing data under its own [privacy policy](https://www.paddle.com/legal/privacy), not as our processor. See also our [Terms of Service](/turbo/terms/).

GitHub and GitLab are also partly independent of us: your repository is *your* account with *them*, governed by your agreement with that host. We process it on your behalf when you use the Service, but we did not put it there and we do not control what else they do with it.

We also share data with **professional advisers** (lawyers, accountants, auditors) where necessary, and with **authorities** where required by law or to protect our rights, safety, or property, or that of our users.

We don't sell your personal data, and we don't use third-party advertising or tracking services. Product-usage data is collected by us, stored only in our own database, and never sent to a third-party analytics provider.

**Changes to this list.** This table is the authoritative sub-processor list for both this policy and our [Data Processing Agreement](/turbo/dpa/) — there is one list, not two. If we add or replace a sub-processor, we will update this table and notify organization owners by email at least **30 days** before the change takes effect, so that a customer who objects has time to raise it with us. The DPA explains what happens if you object.

## 5. International transfers

We and our sub-processors may process personal data outside the EU/EEA and UK — Netlify, Cloudflare, GitHub and GitLab are US companies, Paddle is a UK company, and Supabase's and Brevo's support operations may reach data that itself sits inside the EU. Where personal data leaves the EU/EEA or UK, we rely on safeguards recognized under EU/UK data protection law: the European Commission's **Standard Contractual Clauses** (with the UK Addendum where relevant), or an applicable **adequacy decision** — for US recipients, certification under the EU-US Data Privacy Framework where the recipient holds it. We keep copies of the relevant transfer terms and will describe the basis for a specific sub-processor on request.

## 6. Cookies and similar technologies

**Our own cookies.** We use a session cookie to keep you signed in, and an `active_org_id` cookie to remember which organization you're currently working in. Both are strictly necessary for the Service to function and are set without requiring consent.

**Cloudflare Turnstile on the signup page.** Our signup form is protected against automated abuse by Cloudflare Turnstile. When you load the signup page, Turnstile loads a widget from Cloudflare, and that widget stores its own short-lived state in your browser (a cookie or equivalent local storage, set by Cloudflare) and reads browser and device signals in order to tell a person from a bot. We treat this as **strictly necessary**: open signup without bot protection is an abuse and cost problem, and Turnstile is what stands between the signup form and automated account creation. It is used for that purpose alone. Turnstile appears on the signup page only, not elsewhere in the Service, and Cloudflare states that it does not use Turnstile data to profile or track individuals across sites.

**What we don't use.** We don't use advertising cookies, and we don't embed third-party analytics or tracking services — no Google Analytics, no advertising pixels, no cross-site tracking. Aside from Turnstile on the signup page, the only cookies the Service sets are the two of our own described above.

**Product-usage data.** We record product-usage events (which features you use and which pages you visit) under your account, to help us improve the Service. This data is stored only in our own database (see section 4), is never shared with third parties, and is never used for advertising. It is not collected using cookies or device storage — it is recorded server-side against your authenticated account — so it is not a consent question, but you can still turn it off.

**There are two switches, and they combine.** Product-usage collection can be turned off in either of two places:

- **Per person**, in your own profile settings inside the Service, under the usage-data heading. It covers you, in every organization you belong to.
- **Per organization**, in the organization's settings, by one of its owners. It covers **every member of that organization**, including editors who were invited in and who may never have opened their own profile settings.

**Either switch is enough to stop collection, and neither one can undo the other.** An owner can switch collection off for everyone in their organization. An owner *cannot* switch it back on for a member who has opted out on their own profile. Both are read afresh each time an event would be recorded, and an opt-out on either side suppresses it — so the switches only ever add up, they never override one another.

The organization-level switch exists because of who the Service is for. Where an organization invites editors, that organization is the controller of their personal data and we are its processor (section 2) — and without this switch the controller would have no lever at all over collection about its own people; only each editor individually would.

Turning either switch off stops collection of the product-usage events described in section 3. It does **not** affect the organization activity records that power an organization's Activity log, which is a record we keep for the customer rather than for our own product research — see section 3 for why. Nor does it affect the security logs we keep to protect the Service, or the error diagnostics described next.

**Error logging is kept regardless of the opt-out.** When something in the Service fails, we record the error — its message, its stack, and the request path it happened on — so that we can find the fault and fix it. This is the one category the switches above do not stop, and we would rather say so than let you assume otherwise. The reason is not convenience: gating error collection on the opt-out would blind us to faults affecting precisely the people who opted out, who would then be the users we were least able to help. It sits on the same side of the line as the security logs rather than with the product-usage events — which is why section 3 lists it as a category of its own, with its own purpose, instead of folding it into product-usage data.

Two things bound it, and both are real rather than aspirational. **Paths are stripped of identifiers before they are stored** — a failed request to `/gh/repos/acme/private-site/git/trees/main:content/posts` is written down as `/gh/repos/:owner/:repo/git/trees/:path`, so a repository name or a content path never reaches the table; the same is applied to the message line of a stack trace, which is where an untemplated path used to survive. And these records are **deleted after 180 days**, automatically, on the schedule in section 7.

## 7. Data retention and deletion

We keep personal data only as long as we have a reason to, and the reason differs by category. These are the rules we actually apply:

| Data | How long we keep it |
|---|---|
| Account data | Until you delete your account, which you can do yourself from your profile at any time — deletion is **immediate and permanent**. |
| Organization and site data | For as long as the organization exists. An owner can delete an organization from its settings, which immediately and permanently removes it, its sites, their content, variables and memberships. Otherwise it is deleted under the dormancy rule below. |
| Site content and cached repository content | For as long as the organization holds the site. Deleted with the organization, or when the site is removed from it. Your Git repository is unaffected — see below. |
| Organization activity records and product-usage data | **180 days**, then deleted automatically. |
| Error and security logs | **180 days**, then deleted automatically. |
| Billing and transaction records | Up to **10 years**, as Slovenian tax and accounting law requires. This is the exception that survives account closure and the dormancy rule. |
| Support communications | Up to 2 years after the conversation ends. |

**Deleting your account does not delete your organizations.** They are separate objects, and an organization may have other members, its own content, and a live subscription. If you own an organization and want it gone, delete the organization first, from its settings — then delete your account. If you delete only your account, the organization remains, and — unless it is on a paid plan, which exempts it — it will be deleted under the dormancy rule below once it has been inactive for 12 months.

**Deletion of dormant organizations.** If an organization shows **no activity for 12 months**, we delete it. Activity means any of: a member of the organization signing in, a change to one of its sites, or a content commit landing through the Service. Any one of those resets the clock, and signing in is the simplest. We send warning emails to the organization's owners **30 days** and **7 days** before deletion, so there is time to sign in — signing in resets the clock — or to export what you want to keep.

**A paying organization is never deleted for dormancy.** An organization on a paid plan, or one that still has a live subscription with our payment provider, is exempt from this rule outright — excluded from the sweep rather than merely counted as recently active. We are not going to delete something we are still charging you for.

**If a subscription ends, the twelve months run from when the billing relationship ended**, not from whenever somebody last happened to sign in. An organization that was a paying customer for years and then lapsed gets a full twelve months from the lapse. Measuring it that way is what stops a former customer's deletion date from already being in the past on the day they stopped paying.

Deletion removes the organization and everything we hold for it: its sites, memberships, pending invitations, stored site variables, and cached content. **It cannot be undone.** Billing records are kept for the tax period described above.

**Your Git repository is not affected.** Decap Turbo is a layer on top of your repository at GitHub or GitLab, not a replacement for it. Deleting a dormant organization removes our copy and our configuration; your repository, its history and its content stay with your Git host under your own account. This is also why dormancy deletion is a proportionate rule rather than a destructive one — the content itself lives somewhere we do not control.

This rule is also a term of the [Terms of Service](/turbo/terms/) (section 12), because it decides what happens to a customer's data.

**Where an organization is the controller** (see section 2), these are the periods we apply by default as its processor. A customer can ask us to delete its data sooner, and our [Data Processing Agreement](/turbo/dpa/) sets out deletion and return at the end of the contract.

## 8. Security

We use appropriate technical and organizational measures to protect your data, including encryption in transit, encryption at rest for secret-flagged site variables, access controls limiting who can view account and site data, and credential storage designed so that secrets you store with us aren't exposed to other users. Our [Data Processing Agreement](/turbo/dpa/) describes these measures in more detail, as Article 32 of the GDPR requires.

If we become aware of a personal data breach that's likely to pose a risk to your rights or freedoms, we'll notify the relevant supervisory authority within the timeframe required by law, and notify affected users directly where the breach is likely to result in a high risk to them. Where we are a processor, we notify the affected organization without undue delay so that it can meet its own obligations — see the DPA.

## 9. Children's privacy

The Service isn't directed to children, and we don't knowingly collect personal data from anyone under 16. If you believe a child has provided us with personal data, contact us and we'll delete it.

## 10. Third-party links

Our site and the Service may link to third-party websites (for example, GitHub or Paddle). We aren't responsible for the privacy practices or content of those third-party sites — review their own privacy policies before providing them with personal data.

## 11. Your rights

If you're in the UK or EEA, or otherwise entitled to these rights under the law of your country of residence, you have the right to:

- **Access** the personal data we hold about you;
- **Rectify** inaccurate or incomplete data;
- **Erase** your data ("right to be forgotten"), subject to our retention obligations in section 7;
- **Restrict** or **object** to certain processing;
- **Port** your data to another service in a structured, machine-readable format;
- **Withdraw consent** at any time, where processing is based on consent;
- **Complain** to your local data protection authority (in Slovenia, the [Information Commissioner](https://www.ip-rs.si/)) if you believe we've mishandled your data.

**Where to send the request.** For your own account data, [contact us](/contact/) and we'll handle it directly. For content or membership inside an organization you were invited to, the organization is the controller and we are its processor (section 2) — send the request to the organization's owner. If you send us a request we can only answer as a processor, we'll tell you so and, where we can, tell you who to ask; we won't act on a customer's data without the customer's instruction.

We'll respond within one month, extendable where permitted by law for complex requests.

## 12. Changes to this policy

We may update this Privacy Policy from time to time. Every version is published on this page carrying the date it was last updated, and the published version is the current one. Where a change is **materially adverse to you**, we will also tell you before it takes effect, by email to the address on your account or through the Service — the same commitment, worded the same way, as section 15 of our [Terms of Service](/turbo/terms/). Sub-processor changes follow the specific 30-day notice period in section 4, which is stricter and is unaffected by this.

## 13. Contact

Questions about this policy or a data request? [Contact us](/contact/), or write to us at the registered office address in section 1.
