function initPageActions () {
  document.querySelectorAll('[data-markdown-url]').forEach((button) => {
    if (!navigator.clipboard) {
      button.hidden = true
      return
    }

    const label = button.querySelector('span')
    const text = label.textContent

    const showResult = (result) => {
      label.textContent = result
      setTimeout(() => { label.textContent = text }, 2000)
    }

    button.addEventListener('click', () => {
      const markdown = fetch(button.dataset.markdownUrl).then((response) => {
        if (!response.ok) throw new Error(response.statusText)
        return response.text()
      })

      // Safari only allows clipboard writes during the click, so hand it the text while it is still loading
      const write = window.ClipboardItem
        ? navigator.clipboard.write([
          new window.ClipboardItem({
            'text/plain': markdown.then((text) => new Blob([text], { type: 'text/plain' }))
          })
        ])
        : markdown.then((text) => navigator.clipboard.writeText(text))

      write.then(() => showResult('Copied'), () => showResult('Copy failed'))
    })
  })
}

initPageActions()
