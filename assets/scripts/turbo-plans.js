const turboPlansRoot = document.querySelector('[data-turbo-plans]')

if (turboPlansRoot) {
  const billingButtons = Array.from(turboPlansRoot.querySelectorAll('[data-billing-cycle]'))
  const plans = Array.from(turboPlansRoot.querySelectorAll('[data-plan-card]'))

  const setBillingCycle = (cycle) => {
    const showYearly = cycle === 'yearly'

    turboPlansRoot.dataset.billingCycle = cycle

    billingButtons.forEach((button) => {
      const isActive = button.dataset.billingCycle === cycle

      button.classList.toggle('active', isActive)
      button.setAttribute('aria-pressed', String(isActive))
    })

    plans.forEach((plan) => {
      const monthlyPrice = plan.querySelector('[data-price-monthly]')
      const yearlyPrice = plan.querySelector('[data-price-yearly]')
      const billingNote = plan.querySelector('[data-billing-note]')

      if (monthlyPrice && yearlyPrice) {
        monthlyPrice.hidden = showYearly
        yearlyPrice.hidden = !showYearly
      }

      if (billingNote) {
        billingNote.hidden = !showYearly
      }
    })
  }

  billingButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setBillingCycle(button.dataset.billingCycle || 'yearly')
    })
  })

  setBillingCycle('yearly')
}
