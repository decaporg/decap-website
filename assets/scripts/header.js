// Cache DOM elements
const header = document.getElementById('header')
const mobileMenuBtn = document.getElementById('mobile-menu-btn')
const mobileSearchBtn = document.getElementById('mobile-search-btn')
const headerMenu = document.getElementById('header-menu')
const headerSearch = document.getElementById('header-search')

let scrolled = false
let ticking = false

// Toggle menu
function toggleMenu () {
  if (!headerMenu || !mobileMenuBtn) return

  const isOpen = headerMenu.classList.contains('open')
  headerMenu.classList.toggle('open')

  const menuIcon = mobileMenuBtn.querySelector('.menu-icon')
  const closeIcon = mobileMenuBtn.querySelector('.close-icon')

  if (isOpen) {
    menuIcon.style.display = 'inline'
    closeIcon.style.display = 'none'
    mobileMenuBtn.setAttribute('aria-expanded', 'false')
  } else {
    menuIcon.style.display = 'none'
    closeIcon.style.display = 'inline'
    mobileMenuBtn.setAttribute('aria-expanded', 'true')

    // Close search and reset its button
    headerSearch.classList.remove('open')
    resetSearchButton()
  }
}

// Reset search button icons
function resetSearchButton () {
  if (!mobileSearchBtn) return
  const searchIcon = mobileSearchBtn.querySelector('.search-icon')
  const closeIcon = mobileSearchBtn.querySelector('.close-icon')
  if (searchIcon) searchIcon.style.display = 'inline'
  if (closeIcon) closeIcon.style.display = 'none'
  mobileSearchBtn.setAttribute('aria-expanded', 'false')
}

// Reset menu button icons
function resetMenuButton () {
  if (!mobileMenuBtn) return
  const menuIcon = mobileMenuBtn.querySelector('.menu-icon')
  const closeIcon = mobileMenuBtn.querySelector('.close-icon')
  if (menuIcon) menuIcon.style.display = 'inline'
  if (closeIcon) closeIcon.style.display = 'none'
  mobileMenuBtn.setAttribute('aria-expanded', 'false')
}

// Toggle search
function toggleSearch () {
  if (!headerSearch || !mobileSearchBtn) return

  const isOpen = headerSearch.classList.contains('open')
  headerSearch.classList.toggle('open')

  const searchIcon = mobileSearchBtn.querySelector('.search-icon')
  const closeIcon = mobileSearchBtn.querySelector('.close-icon')

  if (isOpen) {
    searchIcon.style.display = 'inline'
    closeIcon.style.display = 'none'
    mobileSearchBtn.setAttribute('aria-expanded', 'false')
  } else {
    searchIcon.style.display = 'none'
    closeIcon.style.display = 'inline'
    mobileSearchBtn.setAttribute('aria-expanded', 'true')

    // Close menu and reset its button
    headerMenu.classList.remove('open')
    resetMenuButton()

    const searchInput = headerSearch.querySelector('input[type="search"], .search-input')
    if (searchInput) setTimeout(() => searchInput.focus(), 100)
  }
}

// Handle scroll
function handleScroll () {
  if (!header) return

  const currentWindowPos = document.documentElement.scrollTop || document.body.scrollTop
  const isScrolled = currentWindowPos > 0

  if (isScrolled !== scrolled) {
    scrolled = isScrolled
    header.classList.toggle('scrolled', scrolled)
  }
}

// Throttled scroll
function onScroll () {
  if (!ticking) {
    requestAnimationFrame(() => {
      handleScroll()
      ticking = false
    })
    ticking = true
  }
}

// Event listeners
if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMenu)
if (mobileSearchBtn) mobileSearchBtn.addEventListener('click', toggleSearch)
window.addEventListener('scroll', onScroll)

// Close on outside click
document.addEventListener('click', (e) => {
  if (header && !header.contains(e.target)) {
    if (headerMenu) {
      headerMenu.classList.remove('open')
      resetMenuButton()
    }
    if (headerSearch) {
      headerSearch.classList.remove('open')
      resetSearchButton()
    }
  }
})

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (headerMenu) {
      headerMenu.classList.remove('open')
      resetMenuButton()
    }
    if (headerSearch) {
      headerSearch.classList.remove('open')
      resetSearchButton()
    }
  }
})
