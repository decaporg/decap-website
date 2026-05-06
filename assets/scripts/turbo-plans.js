const turboPlansRoot = document.querySelector('[data-turbo-plans]')

if (turboPlansRoot) {
  const billingButtons = Array.from(turboPlansRoot.querySelectorAll('[data-billing-cycle]'))

  const setBillingCycle = (cycle) => {
    turboPlansRoot.dataset.billingCycle = cycle

    billingButtons.forEach((button) => {
      const isActive = button.dataset.billingCycle === cycle

      button.classList.toggle('active', isActive)
      button.setAttribute('aria-pressed', String(isActive))
    })

    const plans = turboPlansRoot.querySelectorAll('[data-plan-card]')

    plans.forEach((plan) => {
      const monthlyPrice = plan.querySelector('[data-price-monthly]')
      const yearlyPrice = plan.querySelector('[data-price-yearly]')
      const billingNote = plan.querySelector('[data-billing-note]')
      const showYearly = cycle === 'yearly'

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
