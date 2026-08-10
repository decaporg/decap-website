---
linkTitle: Decap Turbo
title: Decap Turbo — managed hosting for Decap CMS
description: Managed hosting for Decap CMS — hosted auth, GitHub rate-limit shielding, a database-backed content store, roles, and secrets storage.
hero:
  badge: Decap Turbo — closed beta
  cta:
    text: Join the waitlist
    href: '/turbo/join-early-access/'
intro: "Decap CMS is a free, open-source, Git-based content management system — you can self-host it yourself, for free, forever. Decap Turbo is a paid layer on top of it: we run the infrastructure for you."
features:
  title: What you get
  items:
    - title: Hosted auth & user management
      icon: shield
      description: Invite editors, manage roles, no auth server to run yourself.
    - title: GitHub rate-limit shielding
      icon: lightning
      description: A request proxy between your editors and GitHub's API.
    - title: Database-backed content store
      icon: database
      description: Faster admin loading than reading straight from Git on every request.
    - title: Role-based access control
      icon: check-circle
      description: Org-level owner/member roles and per-site admin/editor roles.
    - title: Site variables & secrets
      icon: lock
      description: Store API credentials your site config needs, without committing them to the repo.
plans:
  title: Choose your plan
  description: "Decap CMS is and will remain free and open source. Decap Turbo is an optional managed layer for teams that want us to run the infrastructure for them. We're in closed beta — join the waitlist and we'll invite you when a spot opens up."
  items:
    - id: free
      icon: check-circle
      name: Free
      description: Try the real product before paying anything
      price_label: "€0"
      subtext: Free forever
      cta_text: Join the waitlist
      cta_href: '/turbo/join-early-access/?plan=free'
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
      additional_seat_price: "€6"
      additional_project_price: "€10"
      cta_text: Join the waitlist
      cta_href: '/turbo/join-early-access/?plan=pro'
      features:
        - 1 site, 3 seats included
        - GitHub request shielding
        - Database-backed content store
        - Basic roles, site variables
        - Standard email support
    - id: enterprise
      icon: business
      name: Enterprise
      description: Agencies and orgs running many sites
      price_label: Custom
      cta_text: Talk to us
      cta_href: 'https://decapcms.org/turbo/contact/?topic=enterprise'
      features:
        - Fair-use "unlimited" sites & seats
        - Custom/granular roles
        - SSO/SAML
        - Dedicated support & SLA
billing_note: "All prices are in EUR, billed monthly, tax included. There's no yearly self-serve option — Free and Pro are both month-to-month. Payments are processed by [Paddle.com](https://www.paddle.com), our reseller and merchant of record. See our [Terms](/turbo/terms/), [Privacy Policy](/turbo/privacy/), and [Refund Policy](/turbo/refunds/)."
faq:
  title: Frequently asked questions
  items:
    - q: How is this different from self-hosting Decap CMS?
      a: "Decap CMS is free and open source — you self-host it with your own Git backend and auth. Decap Turbo is a managed layer on top: we run the infrastructure (auth, request proxying, content store, roles, secrets) so you don't have to."
    - q: Does Turbo replace Decap CMS?
      a: "No — Turbo runs alongside Decap CMS, it doesn't fork or replace it. You still get the same open-source editing experience; Turbo just removes the operational burden of hosting the supporting infrastructure."
    - q: Is the Free plan actually free, or is it a trial?
      a: "It's free, not a trial. Self-hosted Decap CMS is free because it's open source — you bring your own Git backend and auth, and run the infrastructure yourself. The Decap Turbo Free plan is free because we run the managed infrastructure for you, capped to one site and one seat. Neither one is a trial of the other, and paying for Decap Turbo never means paying for Decap CMS itself."
    - q: How does billing work?
      a: "Plans are billed monthly with no long-term commitment. Payments are processed by Paddle.com, our reseller and merchant of record."
    - q: Can I add more sites or seats without upgrading plans?
      a: "Yes, on Pro you can add extra sites and seats beyond what's included for a per-unit monthly fee. Enterprise includes fair-use \"unlimited\" sites and seats."
    - q: Is custom feature development included in Decap Turbo plans?
      a: "No. Custom feature development remains a separate offering. Turbo plans include product features and support tiers, while custom builds are handled independently through our services offering."
cta_section:
  title: Ready to get started?
  description: Decap Turbo is in closed beta. Join the waitlist and we'll invite you as we open up capacity.
  button_text: Join the waitlist
  button_href: '/turbo/join-early-access/'
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
          values: ["1", "3", "Unlimited (fair use)"]
        - feature: Hosted auth & user management
          values: [true, true, true]
        - feature: GitHub rate-limit shielding
          values: [false, true, true]
        - feature: Database-backed content store
          values: [false, true, true]
    - title: Access control
      rows:
        - feature: Basic roles
          values: [false, true, true]
        - feature: Custom/granular roles
          values: [false, false, true]
        - feature: SSO/SAML
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
        - feature: Media/asset proxy
          values: [false, "€9/mo per org", "Included"]
---
