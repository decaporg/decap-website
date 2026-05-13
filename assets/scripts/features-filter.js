const setupFeaturesFilter = () => {
  const filterRoot = document.querySelector('[data-features-filter]')
  const cardsContainer = document.querySelector('[data-features-grid]')

  if (!filterRoot || !cardsContainer) {
    return
  }

  const buttons = Array.from(filterRoot.querySelectorAll('[data-persona]'))
  const cardEntries = Array.from(cardsContainer.querySelectorAll('[data-personas]'), (card) => ({
    card,
    personas: new Set(
      (card.dataset.personas || '')
        .split(',')
        .map((value) => value.trim())
        .filter(Boolean)
    ),
    defaultOrder: Number(card.dataset.defaultOrder || 0),
  }))
  const filterLabel = filterRoot.querySelector('[data-features-filter-label]')
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
  let activeButton = null

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

  const sortCards = (persona) => {
    cardEntries
      .sort((a, b) => {
        const aMatches = persona === 'all' || a.personas.has(persona)
        const bMatches = persona === 'all' || b.personas.has(persona)

        a.card.classList.toggle('is-deprioritized', persona !== 'all' && !aMatches)
        b.card.classList.toggle('is-deprioritized', persona !== 'all' && !bMatches)

        if (aMatches !== bMatches) {
          return aMatches ? -1 : 1
        }

        return a.defaultOrder - b.defaultOrder
      })
      .forEach(({ card, personas }) => {
        const matches = persona === 'all' || personas.has(persona)

        card.classList.toggle('is-deprioritized', persona !== 'all' && !matches)
        cardsContainer.appendChild(card)
      })

    if (swiper) {
      swiper.update()
      swiper.slideTo(0)
    }
  }

  const updateLabel = (persona, buttonText) => {
    if (!filterLabel) {
      return
    }

    if (persona === 'all') {
      filterLabel.textContent = 'Showing all features in their default order.'
      return
    }

    filterLabel.textContent = `Showing ${buttonText.toLowerCase()} priorities first. Turbo features remain marked as optional.`
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const persona = button.dataset.persona || 'all'

      setActiveButton(button)
      sortCards(persona)
      updateLabel(persona, button.textContent || 'selected')
    })
  })

  const urlPersona = new URLSearchParams(window.location.search).get('persona')
  const initialButton = buttons.find((button) => button.dataset.persona === urlPersona) || buttons[0]

  if (initialButton) {
    initialButton.click()
  }
}

document.addEventListener('DOMContentLoaded', setupFeaturesFilter)
