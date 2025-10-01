// Search functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchBtn = document.getElementById('search-btn');
  const searchBox = document.getElementById('search-box');
  const searchInput = document.getElementById('algolia-search');

  if (searchBtn && searchBox) {
    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      searchBox.classList.toggle('active');
      if (searchBox.classList.contains('active')) {
        searchInput.focus();
      }
    });

    // Close search when clicking outside
    document.addEventListener('click', function(e) {
      if (!searchBtn.contains(e.target) && !searchBox.contains(e.target)) {
        searchBox.classList.remove('active');
      }
    });

    // Close search on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        searchBox.classList.remove('active');
      }
    });
  }
});

// Initialize DocSearch if available
if (window.docsearch) {
  docsearch({
    appId: '633NBL2XMU',
    apiKey: '2e154688e9f443d6d895c9f226f01833',
    indexName: 'decapcms',
    inputSelector: '#algolia-search',
    debug: false
  });
}
