---
linkTitle: Decap Turbo
title: Decap Turbo — made for content teams
description: Advanced capabilities for Decap CMS teams that need more speed, control, and support.
hero:
  badge: Just announced
  cta:
    text: Check plans
    href: '#plans'
intro: "Decap Turbo is an optional extension for Decap CMS, built for advanced use cases. Decap CMS remains free and open source forever. Turbo adds centralized authentication and user management, a database proxy for faster CMS loading on larger projects, and additional team features and support options."
features:
  title: What you get
  items:
    - title: Faster CMS performance
      icon: lightning
      description: A Turbo database proxy sits between the editor and your Git provider API to reduce bottlenecks and improve loading speed.
    - title: Centralized authentication and roles
      icon: shield
      description: Manage access and authentication in one place without setting up separate provider-specific auth apps. User roles and permissions are available from the Team plan.
    - title: Real-time editing visibility
      icon: users
      description: See who is editing at the same time so teams can avoid conflicts. Available on Team and above.
    - title: Secrets storage
      icon: lock
      description: Store API keys and integration credentials inside Decap CMS instead of exposing them in environment files or your codebase. Available on Team and above.
pricing_disclaimer: "No payment is required now. Selecting a plan reserves your spot on the early access waitlist. Prices shown are part of an early validation and may be adjusted based on feedback before launch."
plans:
  title: Choose your plan
  description: "Decap CMS is and will remain free and open source. Decap Turbo is an optional extension for advanced teams. Choose the plan that best fits your team so we can prioritize early access and preview rollout." 
  items:
    - id: free
      icon: check-circle
      name: Decap CMS
      description: The current Decap CMS
      price_label: Free
      subtext: Free forever
      cta_text: Get started
      cta_href: /docs/intro/
      free: true
      features:
        - Open source CMS
        - Git-based workflow
        - Editorial workflow
        - Community support
    - id: starter
      icon: rocket
      name: Starter
      description: For freelancers and small projects
      price: "$37"
      price_monthly: "$37"
      price_yearly: "$29"
      yearly_total: "$348 / year"
      cta_text: Join early access
      cta_href: '/turbo/join-early-access/?plan=starter'
      features:
        - Up to 3 users
        - 1 project
        - Database-proxy performance boost
        - Centralized authentication
        - Community support
        - Expedited bug triage
    - id: team
      icon: users
      name: Team
      featured: true
      price: "$112"
      description: For small teams
      price_monthly: "$112"
      price_yearly: "$89"
      yearly_total: "$1,068 / year"
      cta_text: Join early access
      cta_href: '/turbo/join-early-access/?plan=team'
      features:
        - Up to 9 users
        - Up to 3 projects
        - User roles & permissions
        - Real-time editing visibility
        - Secrets storage
        - Everything in Starter
    - id: business
      icon: business
      name: Business
      price: "$374"
      description: For agencies and larger teams
      price_monthly: "$374"
      price_yearly: "$299"
      yearly_total: "$3,588 / year"
      cta_text: Join early access
      cta_href: '/turbo/join-early-access/?plan=business'
      features:
        - Up to 30 users
        - Up to 10 projects
        - Priority support with fastest response targets
        - Dedicated account manager
        - Everything in Team
faq:
  title: Frequently asked questions
  items:
    - q: Will Decap CMS remain free and open source?
      a: "Absolutely! Core Decap CMS will always remain 100% free and open source. Turbo is an optional premium add-on for teams that need advanced collaboration features, enhanced performance, and priority support."
    - q: What is Decap Turbo?
      a: "Decap Turbo is an official extension for Decap CMS. It is designed for advanced use cases where teams need centralized authentication and role management, better performance on large content sets, collaboration visibility, and premium support options."
    - q: Can I upgrade or downgrade my plan later?
      a: "Yes. Once Turbo is generally available, you will be able to upgrade or downgrade between plans at any time. Changes will be prorated and reflected in your next billing cycle. You can also switch back to free Decap CMS at any time. You always remain the owner of your content. Decap Turbo just adds a layer of features and support on top of your existing CMS."
    - q: When will Decap Turbo be available?
      a: "Decap Turbo has just been announced and is currently in preview preparation. Users joining early access now will be first in line when the preview version becomes available."
    - q: How does real-time editing visibility work?
      a: "Real-time editing visibility (available in Team and Business plans) shows which team members are currently active in the CMS so you can coordinate and avoid working on the same entry at the same time. This is a presence indicator — you will not see others' changes in real time like in a shared editor such as Google Docs."
    - q: Why does Decap Turbo offer better performance?
      a: "When a project contains many entries, direct calls from the editor to a Git provider API can become a bottleneck. Decap Turbo introduces a database proxy between the editor and the provider API, which reduces request overhead and speeds up collection loading for larger projects."
    - q: Does Decap Turbo replace Decap CMS?
      a: "No. Decap CMS remains a complete free and open-source product. Decap Turbo is an optional extension for teams that need advanced capabilities."
    - q: Is custom feature development included in Decap Turbo plans?
      a: "No. Custom feature development remains a separate offering. Turbo plans include product features and support tiers, while custom builds are handled independently through our services offering."
    - q: What about standalone monthly support?
      a: "Decap Turbo is the primary path for ongoing monthly support and advanced team capabilities. Our services page remains available for onboarding, custom feature development, implementation work, and partner-led delivery."
    - q: What happens if I exceed my user or project limit?
      a: "For Starter and Team plans, you can add additional seats and additional projects (pricing based on seat/project). Alternatively, you can upgrade to a higher tier plan for better per-user pricing and additional features."
cta_section:
  title: Join the Decap Turbo early-access waitlist
  description: Pick the plan that fits your team and join early access. Early users help us prioritize rollout and will be first to access preview releases.
  button_text: Join early access waitlist
  button_href: '/turbo/join-early-access/'
comparison:
  title: Feature comparison
  description: "These are all Decap Turbo features based on premium plans. The core Decap CMS is and will always remain free. You can always unsubscribe from Decap Turbo and your CMS will continue to function as usual."
  columns:
    - name: Starter
      price: "$37"
    - name: Team
      price: "$112"
    - name: Business
      price: "$374"
  sections:
    - rows:
        - feature: Open source CMS
          values: [true, true, true]
        - feature: Git-based workflow
          values: [true, true, true]
        - feature: Editorial workflow
          values: [true, true, true]
    - title: Performance
      rows:
        - feature: Enhanced speed
          tooltip: "Projects with many entries require multiple GitHub API requests, which can slow down loading. Decap Turbo optimizes these requests for faster content loading and smoother editing."
          values: [true, true, true]
        - feature: Optimized infrastructure
          values: [true, true, true]
    - title: "Users & collaboration"
      rows:
        - feature: User seats (per team)
          tooltip: "User seats define how many people can be managed within Decap Turbo. With Decap Turbo, users and roles can be managed centrally instead of through external providers."
          values: ["Up to 3", "Up to 9", "Up to 30"]
        - feature: Additional user seat
          values: ["€9/seat/month", "€9/seat/month", "€9/seat/month"]
        - feature: "User roles & permissions"
          values: [false, true, true]
        - feature: Real-time editing visibility
          tooltip: "See who is currently active in the CMS to avoid working on the same content at the same time. This is a presence indicator — you will not see others' changes in real time."
          values: [false, true, true]
    - title: Projects
      rows:
        - feature: Number of projects
          tooltip: "Each plan includes a limited number of projects. Additional projects can be added for an extra monthly fee per project."
          values: ["1", "Up to 3", "Up to 10"]
        - feature: Additional project
          values: ["€19/project/month", "€19/project/month", "€19/project/month"]
    - title: Support
      rows:
        - feature: Community support
          values: [true, true, true]
        - feature: Priority bug fixes
          values: [true, true, true]
        - feature: Priority support
          values: [false, false, true]
        - feature: Dedicated account manager
          values: [false, false, true]
---
