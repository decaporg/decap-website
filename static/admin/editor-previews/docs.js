/* global CMS, createClass, h */

CMS.registerPreviewStyle('/styles/style.min.css')

const DocsPreview = createClass({
  render: function () {
    const { widgetFor } = this.props
    return h('div', { className: 'container size-lg' },
      h('div', { className: 'page' },
        h('h1', {}, widgetFor('title')),
        h('div', { className: 'markdown' },
          h('div', {}, widgetFor('body'))
        )
      )
    )
  }
})

const BlogPreview = createClass({
  render: function () {
    const { entry, widgetFor } = this.props
    const data = entry.getIn(['data']).toJS()
    const { author, date } = data
    return h('div', { className: 'container size-sm' },
      h('div', { className: 'page' },
        h('h1', {}, widgetFor('title')),
        h('p', { className: 'meta-info' },
          `By ${author} on ${date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`
        ),
        h('div', { className: 'markdown' },
          h('div', {}, widgetFor('body'))
        )
      )
    )
  }
})

const docsCollections = ['docs_intro', 'docs_add', 'docs_accounts', 'docs_configuration', 'docs_media', 'docs_workflow', 'docs_collections', 'docs_fields', 'docs_guides', 'docs_customization', 'docs_contributing', 'widget_docs']
docsCollections.forEach(c => CMS.registerPreviewTemplate(c, DocsPreview))
CMS.registerPreviewTemplate('blog', BlogPreview)
