/* global CMS */

CMS.registerEditorComponent({
  id: 'pagination-nav',
  label: 'Section Navigation',
  fields: [
    { name: 'prevUrl', label: 'Previous Page URL', widget: 'string', required: false },
    { name: 'prevLabel', label: 'Previous Page Label', widget: 'string', required: false },
    { name: 'nextUrl', label: 'Next Page URL', widget: 'string', required: false },
    { name: 'nextLabel', label: 'Next Page Label', widget: 'string', required: false },
  ],

  pattern: /^{{< pagination-nav(?:\s+prevUrl="(.*?)")?(?:\s+prevLabel="(.*?)")?(?:\s+nextUrl="(.*?)")?(?:\s+nextLabel="(.*?)")?\s+>}}/,

  fromBlock (match) {
    return {
      prevUrl: match[1] || '',
      prevLabel: match[2] || '',
      nextUrl: match[3] || '',
      nextLabel: match[4] || '',
    }
  },

  toBlock (obj) {
    const params = []
    if (obj.prevUrl) params.push(`prevUrl="${obj.prevUrl}"`)
    if (obj.prevLabel) params.push(`prevLabel="${obj.prevLabel}"`)
    if (obj.nextUrl) params.push(`nextUrl="${obj.nextUrl}"`)
    if (obj.nextLabel) params.push(`nextLabel="${obj.nextLabel}"`)

    return `{{< pagination-nav ${params.join(' ')} >}}`
  },

  toPreview (obj) {
    const prevButton = `<a href="${obj.prevUrl || ''}" class="button">
      <span class="pagination-nav__sublabel">Previous</span><br>
      <span class="pagination-nav__label">${obj.prevLabel || ''}</span>
    </a>`

    const nextButton = `<a href="${obj.nextUrl} || ''}" class="button pagination-nav__next">
      <span class="pagination-nav__sublabel">Next</span><br>
      <span class="pagination-nav__label">${obj.nextLabel || ''}</span>
    </a>`

    return `<nav class="pagination-nav">
      ${prevButton}
      ${nextButton}
    </nav>`
  },
})
