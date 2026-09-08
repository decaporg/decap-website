const turboPlansRoot = document.querySelector('[data-turbo-plans]')

if (turboPlansRoot) {
  const planCtas = Array.from(turboPlansRoot.querySelectorAll('[data-plan-cta]'))

  const pushDataLayerEvent = (eventPayload) => {
    if (!Array.isArray(window.dataLayer)) {
      return
    }

    window.dataLayer.push(eventPayload)
  }

  planCtas.forEach((cta) => {
    cta.addEventListener('click', () => {
      pushDataLayerEvent({
        event: 'turbo_plan_cta_click',
        plan_id: cta.dataset.planId || '',
        plan_name: cta.dataset.planName || '',
        cta_href: cta.getAttribute('href') || '',
      })
    })
  })
}
