---
title: Deprecating Git Gateway and Netlify Identity
description: >-
  Netlify Identity is being deprecated by Netlify
date: 2024-06-28T08:00:00.000Z
author: Martin Jagodic
---
Today, Netlify announced that it's deprecating Netlify Identity. This change impacts Decap CMS users who rely on Netlify Identity for user authentication and authorization. Because it relies on this service, we are also deprecating the Git Gateway backend.

We realize that this is a significant proportion of Decap users, but fortunately, there are many other options available and it will be some time before this change affects anyone.

This is just a notice, there will be no changes for now. According to Netlify, it will not be possible to enable Indentity for new sites later this year. The service will keep running for existing sites for the foreseeable future.

We've updated the docs to reflect this change. We are looking for ideas on transitioning away from Netlify and making new easy-to-follow tutorials for other backends. If you have any ideas, please share them with us on [Discord](/chat) or open a pull request on [Decap website repository](https://github.com/decaporg/decap-website/).
