---
linkTitle: Decap Turbo
title: Decap Turbo — managed hosting for Decap CMS
description: Managed hosting for Decap CMS — hosted auth, Git host rate-limit shielding, a database-backed content store, roles, and site variables.
hero:
  badge: Decap Turbo — public preview
  cta:
    primary:
      text: Sign up
      href: 'https://turbo.decapcms.org/signup'
    secondary:
      text: Log in
      href: 'https://turbo.decapcms.org/login'
intro: "Decap CMS is a free, open-source, Git-based content management system — you can self-host it yourself, for free, forever. Decap Turbo is a paid layer on top of it: we run the infrastructure for you."
features:
  title: What you get
  items:
    - title: Hosted auth & user management
      icon: shield
      description: Invite editors, manage roles, no auth server to run yourself.
    - title: Git host rate-limit shielding
      icon: lightning
      description: A request proxy between your editors and your GitHub or GitLab API.
    - title: Database-backed content store
      icon: database
      description: Faster admin loading than reading straight from Git on every request.
    - title: Role-based access control
      icon: check-circle
      description: Org-level owner/member roles, plus per-site Full access and custom roles.
    - title: Site variables
      icon: lock
      description: Store API credentials your site config needs, without committing them to the repo. Mark sensitive ones as secret to encrypt them at rest and mask them in the dashboard.
    - title: Know when it's live
      icon: rocket
      description: Saving commits a change; it doesn't put it on the site. Decap watches the deploy and tells the editor when their change is actually live, wherever they are in the CMS — plus a Deploys page showing what shipped, where it went, and why a build failed.
plans:
  title: Choose your plan
  description: "Decap CMS is and will remain free and open source. Decap Turbo is an optional managed layer for teams that want us to run the infrastructure for them. Signing up puts you on Free, with no credit card. During the public preview an organization owner can also turn Pro on free until 15 October 2026 — still no card, capped at 5 sites and 25 users."
  items:
    - id: free
      icon: check-circle
      name: Free
      description: Try the real product before paying anything
      price_label: "€0"
      subtext: Free forever
      cta_text: Sign up
      cta_href: 'https://turbo.decapcms.org/signup'
      free: true
      features:
        - 1 site
        - 1 seat
        - Community support
    - id: pro
      icon: rocket
      name: Pro
      featured: true
      description: For single-site teams
      price: €19
      price_monthly: "€19"
      subtext: Free to try until 15 October 2026 — no card
      additional_seat_price: "€6"
      additional_project_price: "€10"
      cta_text: Sign up
      cta_href: 'https://turbo.decapcms.org/signup'
      features:
        - 1 site, 5 seats included
        - Git host request shielding
        - Database-backed content store
        - Basic roles, site variables
        - Standard email support
    - id: enterprise
      icon: business
      name: Enterprise
      description: Agencies and orgs running many sites
      price_label: Custom
      cta_text: Talk to us
      cta_href: '/contact/?topic=enterprise'
      features:
        - Fair-use "unlimited" sites & seats
        - Custom/granular roles
        - Dedicated support & SLA
billing_note: "All prices are in EUR, billed monthly, tax included. There's no yearly self-serve option — Free and Pro are both month-to-month. Payments are processed by [Paddle.com](https://www.paddle.com), our reseller and merchant of record. See our [Terms of Service](/turbo/terms/), [Privacy Policy](/turbo/privacy/), and [Refund Policy](/turbo/refunds/)."
faq:
  title: Frequently asked questions
  items:
    - q: How is this different from self-hosting Decap CMS?
      a: "Decap CMS is free and open source — you self-host it with your own Git backend and auth. Decap Turbo is a managed layer on top: we run the infrastructure (auth, request proxying, content store, roles, site variables) so you don't have to."
    - q: Does Turbo replace Decap CMS?
      a: "No — Turbo runs alongside Decap CMS, it doesn't fork or replace it. You still get the same open-source editing experience; Turbo just removes the operational burden of hosting the supporting infrastructure."
    - q: Is the Free plan actually free, or is it a trial?
      a: "It's free, not a trial. Self-hosted Decap CMS is free because it's open source — you bring your own Git backend and auth, and run the infrastructure yourself. The Decap Turbo Free plan is free because we run the managed infrastructure for you, capped to one site and one seat. Neither one is a trial of the other, and paying for Decap Turbo never means paying for Decap CMS itself."
    - q: Is Decap Turbo really free right now?
      a: "Free, yes — but it's worth being precise about what. Signing up puts your organization on the **Free** plan: 1 site, 1 seat, no credit card, and it stays free indefinitely. Separately, during the public preview an organization owner can **opt in** to a Pro trial from the organization's Billing page, which unlocks every feature free until 15 October 2026, again with no card, capped at **5 sites and 25 users**. Those caps are the trial's own — they are not Enterprise's fair-use \"unlimited\". Nothing is switched on for you: skip the opt-in and you simply stay on Free."
    - q: What happens when the Pro trial ends?
      a: "If you haven't added a payment method by then, you keep a week's grace at full Pro access — we email owners before the trial ends and again during the grace week. After that the organization moves to Free: one site stays editable, every other site becomes read-only, members other than the owner lose access, and pending invitations are revoked. **Nothing is deleted.** Adding a payment method unlocks it all again, oldest sites first, as far as your plan's limits reach. See [Billing and plans](/docs/turbo-billing/) for the detail."
    - q: How does billing work?
      a: "Plans are billed monthly with no long-term commitment. Payments are processed by Paddle.com, our reseller and merchant of record."
    - q: Can I add more sites or seats without upgrading plans?
      a: "Yes, on Pro you can add extra sites and seats beyond what's included for a per-unit monthly fee. Enterprise includes fair-use \"unlimited\" sites and seats."
    - q: Is custom feature development included in Decap Turbo plans?
      a: "No. Turbo plans cover the managed platform itself — hosted auth, Git host request shielding, the database-backed content store, roles, and site variables. They don't include bespoke development work on your site or on Decap CMS."
cta_section:
  title: Ready to get started?
  description: Sign up free — 1 site, 1 seat, no credit card. During the public preview you can turn Pro on free until 15 October 2026, capped at 5 sites and 25 users. Already have an account? Read the [setup docs](/docs/turbo-overview/).
  buttons:
    primary:
      text: Sign up
      href: 'https://turbo.decapcms.org/signup'
    secondary:
      text: Sign in
      href: 'https://turbo.decapcms.org/login'
comparison:
  title: Compare plans
  description: "All add-ons are included at no extra cost on Enterprise."
  columns:
    - name: Free
      price: "€0/mo"
    - name: Pro
      price: "€19/mo"
    - name: Enterprise
      price: Custom
  sections:
    - title: Core
      rows:
        - feature: Sites included
          values: ["1", "1", "Unlimited (fair use)"]
        - feature: Seats included
          values: ["1", "5", "Unlimited (fair use)"]
        - feature: Hosted auth & user management
          values: [true, true, true]
        - feature: Git host rate-limit shielding
          values: [true, true, true]
        - feature: Database-backed content store
          values: [true, true, true]
        - feature: Media/asset proxy (S3-compatible, incl. Bunny & R2)
          values: [true, true, true]
    - title: Access control
      rows:
        - feature: Basic roles
          values: [true, true, true]
        - feature: Custom/granular roles
          values: [false, false, true]
    - title: Support
      rows:
        - feature: Community support
          values: [true, true, true]
        - feature: Standard email support
          values: [false, true, true]
        - feature: Dedicated support & SLA
          values: [false, false, true]
        - feature: Priority support add-on
          values: [false, "€99/mo per org", "Included"]
    - title: Add-ons
      rows:
        - feature: Extra site
          values: [false, "€10/site/mo", "Included"]
        - feature: Extra seat
          values: [false, "€6/seat/mo", "Included"]
        - feature: Advanced/custom roles
          values: [false, "€19/mo per org", "Included"]
---
