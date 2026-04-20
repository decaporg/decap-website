---
title: "Decap CMS | Open-Source Content Management System"
description: "Open source content management for your Git workflow"

# Hero Section
hero:
  headline: "Open&nbsp;source content&nbsp;management for your Git&nbsp;workflow"
  subhead: "Use Decap CMS with any static site generator for a faster and more flexible web project"
  buttons:
    - text: "Get started in the docs"
      href: "/docs"
    - text: "Try the interactive demo"
      href: "https://demo.decapcms.org"
      class: "secondary"

# Turbo Banner
turboBanner:
  label: "NEW"
  title: "Introducing Decap Turbo"
  description: "Decap CMS stays free and open source forever. Decap Turbo is an optional extension for advanced teams that need faster CMS performance, centralized access control, and additional collaboration and support capabilities."
  benefits:
    - text: "Faster CMS performance with a database proxy"
      icon: "turbo-speed"
    - text: "Centralized authentication, user management, and roles"
      icon: "turbo-shield"
    - text: "Real-time editing visibility"
      icon: "turbo-collaboration"
    - text: "Secrets storage for advanced workflows"
      icon: "turbo-shield"
  button:
    text: "Learn more about Turbo"
    href: "/turbo/"
  preview:
    editors:
      title: "Active editors"
      status: "8 team members online"
      icon: "turbo-team"
      avatars:
        - initials: "JD"
          tone: "pink"
        - initials: "SM"
          tone: "purple"
        - initials: "AL"
          tone: "blue"
        - initials: "+5"
          tone: "rose"
    collaboration:
      title: "Real-time collaboration"
      description: "See who is editing, avoid conflicts, and work together seamlessly"
    performance:
      title: "CMS performance"
      value: "Up to 60% faster"
      description: "vs. standard Decap CMS"
      icon: "turbo-performance"

# Developers Section
developers:
  title: "For Developers"
  id: "developers"
  link:
    href: "#editors"
    text: "For Editors"
  button:
    text: "All Developer Features"
    href: "/features/developer/"
  features:
    - title: "Integral part of the Jamstack"
      description: "Get the speed, security, and scalability of a static site, while still providing a convenient editing interface for content. Compared to server-side CMS like WordPress, this means better performance, higher security, lower cost of scaling, and a better developer experience. You can learn more about the Jamstack on [jamstack.org](https://jamstack.org)."
      image: "jamstack-scheme.png"
    - title: "Works with most frontend tools"
      description: "You can add Decap CMS to any static site generator, meta-framework, or other tool that stores content in Git."
      image: "frontend-tools.png"
    - title: "Install, configure, and extend with ease"
      description: "Install Decap by adding two files to your site, then configure everything in a YAML file. Extend with ease with React: create custom-styled previews, UI widgets, and editor plugins or add backends to support different Git platform APIs. See Add to your site to get started."
      image: "configure.png"

# Template Banner
templateBanner:
  title: "Getting started is *simple and free.*"
  hook: "Choose a template that's pre-configured with a static site generator and deploys to a global CDN in one click."
  button:
    text: "Start with a template"
    href: "/docs/start-with-a-template/"

# Editors Section
editors:
  title: "For Editors"
  id: "editors"
  link:
    href: "#developers"
    text: "For Developers"
  button:
    text: "All Editor Features"
    href: "/features/editor/"
  features:
    - title: "Editor-friendly user interface"
      description: "The web-based app includes rich-text editing, real-time preview, and drag-and-drop media uploads."
      image: "feature-editor.svg"
    - title: "Intuitive workflow for content teams"
      description: "Writers and editors can easily manage content from draft to review to publish across any number of custom content types."
      image: "feature-workflow.svg"
    - title: "Instant access without GitHub account"
      description: "With [Git Gateway](/docs/git-gateway-backend/#git-gateway-with-netlify-identity), you can add CMS access for any team member — even if they don't have a GitHub account."
      image: "feature-access.svg"

# Values Section
values:
  title: "Built on principles that matter"
  description: "Decap CMS is an independent open-source project. We are maintained in the EU with the help of contributors from around the world."
  items:
    - title: "Free & Open Source, Forever"
      description: "Decap CMS is MIT-licensed. It is free today and will remain free for everyone, always."
      icon: "heart"
    - title: "Own Your Content"
      description: "Your content lives in your own Git repository — not locked to any provider's database. You are always in control."
      icon: "feature-access"
    - title: "Independent & EU-Maintained"
      description: "No big tech ownership. Decap is maintained in the EU with contributors from across the world."
      icon: "bow"
    - title: "Privacy & the Open Web"
      description: "We believe in privacy, democracy, and the open internet. We build tools that help editors and publishers launch and maintain their independent platforms."
      icon: "feature-workflow"

# Awards Section
awards:
  title: "Awards"
  description: "Decap was recognized with these awards"
  items:
    - title: "Software Reviews Gold Medal 2023"
      href: "https://www.softwarereviews.com/categories/content-marketing?entitlement=gold_medal_Decap_CMS_%28formerly_Netlify%29_data_quadrant_awards_2023_content_marketing&utm_medium=badge&utm_source=netlify"
      image: "/img/sr-gold_medal-2023.png"

# Services Section
services:
  title: "Need implementation support?"
  description: "Decap Turbo is our main offering for advanced support and team workflows. Professional services remain available for onboarding and custom feature development, and standalone monthly support remains available during the Turbo transition."
  features:
    - title: "Priority Support (Transition)"
      className: "support"
      image: "support.png"
      description: "Standalone monthly support is still available now and will move to Decap Turbo support plans as Turbo becomes available."
      button:
        href: "/services/"
        text: "Find out more"
    - title: "Onboarding"
      className: "onboarding"
      image: "onboarding.png"
      description: "Get up to speed quickly with a customized onboarding program tailored to your team and project."
      button:
        href: "/services/"
        text: "Find out more"
    - title: "Custom Features Development"
      className: "development"
      image: "development.png"
      description: "Sponsor the development of custom features or integrations to meet your specific needs."
      button:
        href: "/services/"
        text: "Find out more"

# Support Section
support:
  title: "Support Our Mission"
  description: "Help us maintain and improve Decap CMS for the entire community. Your support enables us to keep developing new features, fixing bugs, and providing documentation. Decap CMS is maintained by volunteers in their free time. Every contribution helps us dedicate more time to improving the project."
  options:
    - title: "GitHub Sponsors"
      icon: "github-sponsors"
      description: "Donate to us through GitHub's sponsorship program"
      button:
        text: "Sponsor on GitHub"
        href: "https://github.com/sponsors/decaporg"
        class: "primary"
        external: true
    - title: "Open Collective"
      icon: "opencollective"
      description: "Support the project through Open Collective with transparent funding and expense tracking"
      button:
        text: "Support on Open Collective"
        href: "https://opencollective.com/decap"
        class: "secondary"
        external: true
    - title: "Exclusive partnership"
      icon: "partnership"
      description: "We are looking for a strategic partner to help us take Decap CMS to the next level"
      button:
        text: "Contact Us"
        href: "mailto:decap@p-m.si"
        class: "secondary"

backers:
  partner:
    title: "Main partner"
    text: "PM, poslovni mediji"
    href: "https://p-m.si"
    logo: "/img/pm_logo.png"
  backers:
    title: "Backers"

# Blog Section
blog:
  title: "From the Blog"
  hook: "Why Git-based CMS is the future of content management"
  text: |
    * Utilize the power of Git versioning and history. No backup needed

    * Work on the same branching and environments system as your code.

    * No need for a database and server - get this from your existing Git provider.
  image: "blog.png"
  button:
    text: "More on our blog"
    href: "/blog/git-based-cms-definition-features-best-practices/"

# Community Section
community:
  title: "Community"
  hook: "A community-driven project you can help evolve"
  text: "Decap CMS is built by a community of more than 100 contributors — and you can help. Read the [contributing guide](/docs/contributor-guide) to join in."
  image: "community.png"
  button:
    text: "About the community"
    href: "/community/"
---

Welcome to Decap CMS!
