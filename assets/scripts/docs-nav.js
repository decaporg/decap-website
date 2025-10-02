function initDocsNav () {
  const toggle = document.getElementById('docs-nav-toggle')
  const content = document.getElementById('docs-nav-content')
  const icon = document.querySelector('.docs-nav__icon')
  const text = document.querySelector('.docs-nav__text')

  if (!toggle || !content) return

  toggle.addEventListener('click', function () {
    const isOpen = content.classList.contains('open')

    if (isOpen) {
      content.classList.remove('open')
      icon.textContent = '☰'
      text.textContent = 'Show'
    } else {
      content.classList.add('open')
      icon.textContent = '×'
      text.textContent = 'Hide'
    }
  })
}

initDocsNav()
