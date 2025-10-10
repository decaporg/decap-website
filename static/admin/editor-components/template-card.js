/* global CMS */

CMS.registerEditorComponent({
  id: 'template-card',
  label: 'Template Card',
  fields: [
    { name: 'logo', label: 'Logo', widget: 'image' },
    { name: 'title', label: 'Title', widget: 'string' },
    { name: 'repo', label: 'Repository', widget: 'string' },
  ],

  pattern: /^{{< template-card logo="(.*?)" title="(.*?)" repo="(.*?)" >}}/,

  fromBlock (match) {
    return {
      logo: match[1] || '',
      title: match[2] || '',
      repo: match[3] || '',
    }
  },

  toBlock (obj) {
    return `{{< template-card logo="${obj.logo || ''}" title="${obj.title || ''}" repo="${obj.repo || ''}" >}}`
  },

  toPreview (obj) {
    return `<div class="template-card">
      <img src="${obj.logo || ''}" alt="${obj.title || ''}" />
      <h4>${obj.title || ''}</h4>
      <p>${obj.repo || ''}</p>

      <div class="template-card__links">
        <a href="https://app.netlify.com/start/deploy?repository=https://github.com/${obj.repo || ''}&stack=cms">
          Deploy to Netlify
        </a>

        <a href="https://github.com/${obj.repo || ''}" class="template-card__repo-link">
          GitHub Repository
        </a>

        <img class="template-card__badge" alt="GitHub last commit" src="https://img.shields.io/github/last-commit/${obj.repo || ''}?style=flat-square&color=lightgray" />
      </div>
    </div>`
  },
})
