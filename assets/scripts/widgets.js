// Widgets Navigation Script
// Handles tabbed widget interface with hash-based navigation

function showWidget (widgetTitle) {
  // Hide all widgets
  document.querySelectorAll('.widgets-content__item').forEach(widget => {
    widget.style.display = 'none'
  })

  // Remove active class from all buttons
  document.querySelectorAll('.widgets-nav .button').forEach(btn => {
    btn.classList.remove('active')
  })

  // Show selected widget
  const selectedWidget = document.getElementById('widget-' + widgetTitle)
  if (selectedWidget) {
    selectedWidget.style.display = 'block'
  }

  // Add active class to selected button
  const selectedButton = document.querySelector(`[data-widget="${widgetTitle}"]`)
  if (selectedButton) {
    selectedButton.classList.add('active')
  }

  // Update URL hash
  window.history.pushState(null, null, '#' + widgetTitle)
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
  const hash = window.location.hash.replace('#', '')
  const firstWidget = document.querySelector('.widgets-nav .button')

  // Attach click event listeners to all widget buttons
  document.querySelectorAll('.widgets-nav .button').forEach(button => {
    button.addEventListener('click', function () {
      const widgetTitle = this.getAttribute('data-widget')
      if (widgetTitle) {
        showWidget(widgetTitle)
      }
    })
  })

  // Show initial widget (from hash or first widget)
  if (hash && document.getElementById('widget-' + hash)) {
    showWidget(hash)
  } else if (firstWidget) {
    showWidget(firstWidget.getAttribute('data-widget'))
  }

  // Scroll to nav on hash change if needed
  if (hash) {
    const nav = document.querySelector('.widgets-nav')
    if (nav) {
      nav.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
})

// Handle hash changes
window.addEventListener('hashchange', function () {
  const hash = window.location.hash.replace('#', '')
  if (hash) {
    showWidget(hash)
  }
})
