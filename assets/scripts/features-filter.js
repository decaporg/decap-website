const setupFeaturesFilter = () => {
  const filterRoot = document.querySelector('[data-features-filter]')
  const cardsContainer = document.querySelector('[data-features-grid]')

  if (!filterRoot || !cardsContainer) {
    return
  }

  const buttons = Array.from(filterRoot.querySelectorAll('[data-persona]'))
  const cards = Array.from(cardsContainer.querySelectorAll('[data-personas]'))
  const filterLabel = filterRoot.querySelector('[data-features-filter-label]')

  const sortCards = (persona) => {
    const scoredCards = cards.map((card) => {
      const personas = (card.dataset.personas || '')
        .split(',')
        .map((value) => value.trim())
        .filter(Boolean)

      const defaultOrder = Number(card.dataset.defaultOrder || 0)
      const matches = persona === 'all' || personas.includes(persona)

      card.classList.toggle('is-deprioritized', persona !== 'all' && !matches)

      return {
        card,
        group: matches ? 0 : 1,
        defaultOrder,
      }
    })

    scoredCards
      .sort((a, b) => {
        if (a.group !== b.group) {
          return a.group - b.group
        }

        return a.defaultOrder - b.defaultOrder
      })
      .forEach((entry) => cardsContainer.appendChild(entry.card))
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

      buttons.forEach((btn) => btn.classList.remove('is-active'))
      button.classList.add('is-active')

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
