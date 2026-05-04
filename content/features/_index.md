---
title: Product features
description: One complete Decap feature map for evaluation. Use the role filter to bring the most relevant capabilities to the top.
personas:
  - id: editor
    label: Editor
  - id: developer
    label: Developer
  - id: team
    label: Team lead
  - id: agency
    label: Agency
features:
  - title: Friendly editor UI with real-time preview
    product: core
    personas: [editor, team, agency]
    description: |-
      Decap provides a web editor with structured fields, rich text, and live preview so non-technical contributors can work confidently.
    visual: Show the editor form and page preview side by side while typing.
    image: screenshot-editor.png
    imageAlt: Decap editor with live preview

  - title: Editorial workflow for draft, review, and publish
    product: core
    personas: [editor, team, agency]
    description: |-
      Content can move through clear statuses before publication, helping teams keep quality controls without adding a separate workflow tool.
    visual: Show a single entry moving from draft to review to publish.
    image: screenshot-editorial.png
    imageAlt: Editorial workflow view

  - title: Media library plus external DAM integrations
    product: core
    personas: [editor, developer, agency]
    description: |-
      Editors can upload and manage assets directly in the CMS, and teams with advanced media needs can integrate tools like Cloudinary and Uploadcare.
    visual: Show asset upload and media selection inside a content entry.
    image: decap-cms-external-media-library.png
    imageAlt: Media integration example

  - title: Flexible content modeling
    product: core
    personas: [developer, team, agency]
    description: |-
      Define collections, nested structures, relation fields, and slug behavior so your content model matches your project rather than forcing a rigid schema.
    visual: Show linked entries and repeatable structured blocks.
    image: widget-relation.png
    imageAlt: Relation widget example

  - title: Works with most static site stacks
    product: core
    personas: [developer, agency, team]
    description: |-
      Decap is designed for Git-backed static and Jamstack architectures, including Hugo, Next.js, Gatsby, and Jekyll workflows.
    visual: Show Decap centered among generator and framework logos.
    image: frontend-tools.png
    imageAlt: Supported frontend tools

  - title: Git-native history and ownership
    product: core
    personas: [developer, team, agency]
    description: |-
      Content stays in your repository with full version history, branch workflows, and deployment checks in the same system your team already uses.
    visual: Show commit history and deployment preview statuses.
    image: github-statuses-deploy-previews.png
    imageAlt: GitHub status checks and previews

  - title: Extensible with custom widgets and previews
    product: core
    personas: [developer, agency]
    description: |-
      Extend editorial UX with custom widgets, preview templates, and plugins when default behavior is not enough for your product requirements.
    visual: Show modular extension components attached to the CMS interface.
    image: widget-object.png
    imageAlt: Structured widget customization

  - title: Local development with decap-server
    product: core
    personas: [developer, agency]
    description: |-
      Use `npx decap-server` for local testing and rapid iteration on content models and editor behavior before pushing to remote environments.
    visual: Show local CMS, local content changes, and local preview loop.
    image: configure.png
    imageAlt: Local development setup concept

  - title: Role-based access and centralized auth
    product: turbo
    personas: [team, agency, editor]
    description: |-
      **Decap Turbo optional feature.** Centralize user management, roles, and authentication for larger organizations that need controlled editorial access.
    visual: Show a team member list with permission levels and role badges.
    image: turbo-shield.svg
    imageAlt: Access control and roles

  - title: Performance database proxy for large content sets
    product: turbo
    personas: [team, developer, agency]
    description: |-
      **Decap Turbo optional feature.** Improve CMS responsiveness on larger repositories by using Turbo's database proxy layer.
    visual: Show baseline vs accelerated CMS response cards.
    image: turbo-performance.svg
    imageAlt: Performance boost indicator

  - title: Real-time editing visibility
    product: turbo
    personas: [team, editor, agency]
    description: |-
      **Decap Turbo optional feature.** See who is editing to avoid collisions and help distributed teams coordinate content work.
    visual: Show active editors with presence indicators on a shared entry.
    image: turbo-team.svg
    imageAlt: Active editors indicator

  - title: Secrets storage for advanced workflows
    product: turbo
    personas: [developer, team, agency]
    description: |-
      **Decap Turbo optional feature.** Store and manage sensitive integration settings for more advanced publishing and operational workflows.
    visual: Show secure secret keys panel connected to automation workflows.
    image: turbo-speed.svg
    imageAlt: Secure settings and integrations
---
