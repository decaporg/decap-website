function initDocSearch () {
  // Check if both docsearch library and input element are available
  if (!window.docsearch) return

  const searchInput = document.getElementById('algolia-search')
  if (!searchInput) {
    console.warn('DocSearch: Search input not found')
    return
  }

  try {
    window.docsearch({
      appId: '633NBL2XMU',
      apiKey: '2e154688e9f443d6d895c9f226f01833',
      indexName: 'decapcms',
      inputSelector: '#algolia-search',
      debug: false,
    })
  } catch (error) {
    console.error('DocSearch initialization error:', error)
  }
}

// Wait for both DOM and docsearch library to be ready
if (window.docsearch && document.getElementById('algolia-search')) {
  initDocSearch()
} else {
  // Use a more robust initialization approach
  let attempts = 0
  const maxAttempts = 10

  const tryInit = setInterval(() => {
    attempts++
    if (window.docsearch && document.getElementById('algolia-search')) {
      clearInterval(tryInit)
      initDocSearch()
    } else if (attempts >= maxAttempts) {
      clearInterval(tryInit)
      console.warn('DocSearch: Failed to initialize after multiple attempts')
    }
  }, 100)
}
