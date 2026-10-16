const setupFeaturesFilter = () => {
  const filterRoot = document.querySelector('[data-features-filter]')
  const grids = Array.from(document.querySelectorAll('[data-features-grid]'))

  if (!filterRoot || grids.length === 0) {
    return
  }

  // "filter" hides features outside the chosen role (features page); "sort"
  // moves matches to the front of the homepage slider.
  const mode = filterRoot.dataset.featuresFilter
  const buttons = Array.from(filterRoot.querySelectorAll('[data-persona]'))
  const sections = Array.from(document.querySelectorAll('[data-features-section]'))
  const cardEntries = grids.flatMap((grid) => Array.from(grid.querySelectorAll('[data-personas]'), (card) => ({
    card,
    grid,
    personas: new Set(
      (card.dataset.personas || '')
        .split(',')
        .map((value) => value.trim())
        .filter(Boolean)
    ),
    defaultOrder: Number(card.dataset.defaultOrder || 0),
  })))
  const swiperRoot = document.querySelector('[data-features-swiper]')
  const controlsEl = swiperRoot?.parentElement?.querySelector('.home-features__controls')
  const paginationElement = controlsEl?.querySelector('.swiper-pagination')
  const prevButton = controlsEl?.querySelector('.home-features__nav-btn--prev')
  const nextButton = controlsEl?.querySelector('.home-features__nav-btn--next')
  const swiper = swiperRoot && typeof window.Swiper === 'function'
    ? new window.Swiper(swiperRoot, {
      slidesPerView: 1,
      spaceBetween: 24,
      watchOverflow: true,
      pagination: paginationElement
        ? {
            el: paginationElement,
            clickable: true,
          }
        : undefined,
      navigation: prevButton && nextButton
        ? {
            prevEl: prevButton,
            nextEl: nextButton,
          }
        : undefined,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    })
    : null
  let activeButton = buttons.find((button) => button.getAttribute('aria-pressed') === 'true') || null

  const setActiveButton = (button) => {
    if (activeButton && activeButton !== button) {
      activeButton.classList.remove('button--primary', 'button--active')
      activeButton.classList.add('button--grey')
      activeButton.setAttribute('aria-pressed', 'false')
    }

    button.classList.remove('button--grey')
    button.classList.add('button--primary', 'button--active')
    button.setAttribute('aria-pressed', 'true')
    activeButton = button
  }

  const matchesPersona = (entry, persona) => persona === 'all' || entry.personas.has(persona)

  const filterCards = (persona) => {
    cardEntries.forEach((entry) => {
      entry.card.hidden = !matchesPersona(entry, persona)
    })

    sections.forEach((section) => {
      section.hidden = !section.querySelector('[data-personas]:not([hidden])')
    })
  }

  const sortCards = (persona) => {
    cardEntries
      .sort((a, b) => {
        const aMatches = matchesPersona(a, persona)
        const bMatches = matchesPersona(b, persona)

        if (aMatches !== bMatches) {
          return aMatches ? -1 : 1
        }

        return a.defaultOrder - b.defaultOrder
      })
      .forEach((entry) => {
        entry.card.classList.toggle('is-deprioritized', !matchesPersona(entry, persona))
        entry.grid.appendChild(entry.card)
      })

    if (swiper) {
      swiper.update()
      swiper.slideTo(0)
    }
  }

  const applyPersona = (persona) => {
    if (mode === 'filter') {
      filterCards(persona)
    } else {
      sortCards(persona)
    }
  }

  const params = new URLSearchParams(window.location.search)

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const persona = button.dataset.persona || 'all'

      setActiveButton(button)
      applyPersona(persona)

      // Keep the address shareable, the same way the nav's "For …" links are.
      if (mode === 'filter') {
        const url = new URL(window.location.href)

        if (persona === 'all') {
          url.searchParams.delete('persona')
        } else {
          url.searchParams.set('persona', persona)
        }

        window.history.replaceState(null, '', url)
      }
    })
  })

  const initialButton = buttons.find((button) => button.dataset.persona === params.get('persona')) || buttons[0]

  if (initialButton) {
    setActiveButton(initialButton)
    applyPersona(initialButton.dataset.persona || 'all')
  }

  // The roadmap used to be a stage filter; old ?stage=roadmap links now jump to its section.
  if (params.get('stage') === 'roadmap') {
    document.getElementById('roadmap')?.scrollIntoView()
  }
}

document.addEventListener('DOMContentLoaded', setupFeaturesFilter)
