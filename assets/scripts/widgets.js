// Widgets Navigation Script
// Handles tabbed widget interface with hash-based navigation

document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.widgets-nav')
  const buttons = Array.from(document.querySelectorAll('.widgets-nav .button'))
  const widgets = Array.from(document.querySelectorAll('.widgets-content__item'))

  if (!buttons.length || !widgets.length) {
    return
  }

  const showWidget = (widgetTitle) => {
    widgets.forEach((widget) => {
      widget.style.display = widget.id === `widget-${widgetTitle}` ? 'block' : 'none'
    })

    buttons.forEach((button) => {
      const isActive = button.getAttribute('data-widget') === widgetTitle

      button.classList.toggle('button--active', isActive)
      button.classList.toggle('button--primary', isActive)
      button.classList.toggle('button--grey', !isActive)
    })

    window.history.pushState(null, null, `#${widgetTitle}`)
  }

  const activateHashWidget = (shouldScroll = false) => {
    const hash = window.location.hash.replace('#', '')
    const firstWidget = buttons[0]?.getAttribute('data-widget')
    const targetWidget = hash && document.getElementById(`widget-${hash}`)
      ? hash
      : firstWidget

    if (!targetWidget) {
      return
    }

    showWidget(targetWidget)

    if (shouldScroll && hash && nav) {
      nav.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const widgetTitle = this.getAttribute('data-widget')

      if (widgetTitle) {
        showWidget(widgetTitle)
      }
    })
  })

  activateHashWidget(true)

  window.addEventListener('hashchange', function () {
    if (window.location.hash) {
      activateHashWidget()
    }
  })
})
