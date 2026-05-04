---
title: "Decap CMS | Open-Source Content Management System"
description: "Open source content management for your Git workflow"

# Hero Section
hero:
  headline: "Open&nbsp;source content&nbsp;management for your Git&nbsp;workflow"
  subhead: "Use Decap CMS with any static site generator for faster, more flexible web projects."
  benefits:
    - "Built for static sites and modern frontend workflows"
    - "Open source and self-hosted"
    - "The core CMS is free forever"
  buttons:
    - text: "Go to Docs"
      href: "/docs/"
      class: "primary"
    - text: "Try the demo"
      href: "https://demo.decapcms.org"
      class: "hero-outline"
  image: "/img/hero-scheme.svg"
  imageAlt: "Decap CMS editor interface illustration"
  disclaimer: "Image is a representation and not how the actual Decap CMS looks like."

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
  description: "Decap Turbo is the main path for advanced support and team workflows. Services remain available for onboarding, custom feature development, delivery work, and implementation help."
  features:
    - title: "Onboarding"
      className: "onboarding"
      image: "onboarding.png"
      description: "Get up to speed quickly with a customized onboarding program tailored to your team and project."
      button:
        href: "/services/"
        text: "View services"
    - title: "Custom Features Development"
      className: "development"
      image: "development.png"
      description: "Sponsor the development of custom features or integrations to meet your specific needs."
      button:
        href: "/services/"
        text: "View services"
    - title: "Website Delivery"
      className: "support"
      image: "support.png"
      description: "Work with a partner that can build, launch, and maintain your Decap CMS implementation."
      button:
        href: "/services/"
        text: "View services"

# Support Section
support:
  title: "Assess project trust"
  description: "Decap CMS is independent, open source, and maintained in the EU. Learn how the project is funded, who supports it, and how to contribute to its future."
  options:
    - title: "GitHub Sponsors"
      icon: "github-sponsors"
      description: "Support ongoing maintenance through GitHub's sponsorship program"
      button:
        text: "See how to support"
        href: "/about/"
        class: "primary"
    - title: "Open Collective"
      icon: "opencollective"
      description: "Review funding options, governance signals, and transparent backing for the project"
      button:
        text: "Read about Decap"
        href: "/about/"
        class: "secondary"
    - title: "Exclusive partnership"
      icon: "partnership"
      description: "See how commercial partners and maintainers help sustain long-term development"
      button:
        text: "View About page"
        href: "/about/"
        class: "secondary"

backers:
  partner:
    title: "Main partner"
    text: "PM, poslovni mediji"
    href: "https://p-m.si"
    logo: "/img/pm_logo.png"
  backers:
    title: "Backers"
  fundedBy:
    text: "The investment is co-financed by the Republic of Slovenia and the European Union under the European Regional Development Fund."
    logos:
      - src: "/img/EN_Co-fundedbytheEU_RGB_POS.png"
        alt: "Co-funded by the EU"
      - src: "/img/i_feel_slo.png"
        alt: "I Feel Slovenia"
      - src: "/img/MK_EN.png"
        alt: "Republic of Slovenia - Ministry of Culture"
      - src: "/img/czk-logo.svg"
        alt: "Center za kreativnost"

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
  title: "Get help"
  hook: "Choose the support channel that matches your question"
  text: "Use the Community page to find the right help path: Discord for quick support, GitHub Issues for bugs and feature requests, and GitHub Discussions for questions and ideas."
  image: "community.png"
  button:
    text: "Get support"
    href: "/community/"
---

Welcome to Decap CMS!
