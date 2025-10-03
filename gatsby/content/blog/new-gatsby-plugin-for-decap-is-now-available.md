---
title: New Gatsby plugin for Decap is now available
author: Martin Jagodic
description: The deprecated gatsby-plugin-netlify-cms that corresponds to the
  old Netlify CMS package is now deprecated and replaced by
  gatsby-plugin-decap-cms
image: /img/gatsby-plugin-decap-cms.png
date: 2024-02-05T14:04:50.781Z
---
The deprecated [gatsby-plugin-netlify-cms](https://www.npmjs.com/package/gatsby-plugin-netlify-cms) that corresponds to the old Netlify CMS package is now deprecated and replaced by [gatsby-plugin-decap-cms](https://www.npmjs.com/package/gatsby-plugin-decap-cms).

To migrate you Gatsby site from Netlify CMS 2 to Decap CMS 3:

1. uninstall gatsby-plugin-netlify-cms and netlify-cms-app
2. install gatsby-plugin-netlify-cms and decap-cms-app
3. replace the import `import CMS from "netlify-cms-app"` with `import CMS from "decap-cms-app"`
4. in gatsby config replace `resolve: "gatsby-plugin-netlify-cms"` with `resolve: "gatsby-plugin-decap-cms"`

An example of a migration can be found in [this PR on the Decap-Gatsby starter template](https://github.com/decaporg/gatsby-starter-decap-cms/commit/0b102651c68fd6fda064d30e032717cdcd74e9ce).

[Plugin on npmjs.com](https://www.npmjs.com/package/gatsby-plugin-decap-cms)

[Plugin on gatsbyjs.com](https://www.gatsbyjs.com/plugins/gatsby-plugin-decap-cms/)
