function initDocsNav () {
  const toggle = document.getElementById('docs-nav-toggle')
  const content = document.getElementById('docs-nav-content')
  const icon = document.querySelector('.docs-nav__icon')
  const text = document.querySelector('.docs-nav__text')

  if (!toggle || !content) return

  const updateToggleState = (isOpen) => {
    content.classList.toggle('open', isOpen)

    if (icon) {
      icon.textContent = isOpen ? '×' : '☰'
    }

    if (text) {
      text.textContent = isOpen ? 'Hide' : 'Show'
    }
  }

  toggle.addEventListener('click', function () {
    updateToggleState(!content.classList.contains('open'))
  })
}

initDocsNav()
