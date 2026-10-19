// Tags every link to Decap Turbo with where it was clicked, so a signup can be
// traced back to the page and button that sent it (Turbo stores this in its
// signup_attribution table; decap-turbo docs/funnel-plan.md B1-B2).
//
// - utm_source/utm_medium name decapcms.org; utm_content is the placement:
//   the page, plus the section when the template marks one with
//   data-cta-placement or the link is a plan card (turbo-hero,
//   turbo-plan-pro, docs-turbo-getting-started, ...).
// - intent=pro|free on the plan cards, so Turbo knows what the button promised.
// - ref=<host> when the visitor arrived on this page from another site, the
//   most common path being search -> /turbo/ -> Sign up. Host only.
// - A Plausible "Turbo CTA" event with the placement, on click.
//
// It reads and sets no cookies or storage, so it runs for every visitor,
// whatever they chose in the cookie banner. Utm values already on a link win.

const TURBO_HOST = 'turbo.decapcms.org'

function pageKey () {
  const path = window.location.pathname.replace(/^\/|\/$/g, '')
  return path ? path.replace(/\//g, '-') : 'home'
}

function externalReferrerHost () {
  try {
    const host = new URL(document.referrer).hostname.replace(/^www\./, '')
    return host && host !== window.location.hostname.replace(/^www\./, '') ? host : null
  } catch {
    return null
  }
}

function placementOf (link) {
  const section = link.dataset.planId
    ? `plan-${link.dataset.planId}`
    : link.closest('[data-cta-placement]')?.dataset.ctaPlacement
  return [pageKey(), section].filter(Boolean).join('-')
}

function tagTurboLinks () {
  const ref = externalReferrerHost()

  Array.from(document.links)
    .filter((link) => link.hostname === TURBO_HOST)
    .forEach((link) => {
      const url = new URL(link.href)
      const placement = placementOf(link)
      const params = {
        utm_source: 'decapcms.org',
        utm_medium: 'website',
        utm_content: placement,
      }
      if (link.dataset.planId === 'pro' || link.dataset.planId === 'free') params.intent = link.dataset.planId
      if (ref) params.ref = ref

      Object.entries(params).forEach(([key, value]) => {
        if (!url.searchParams.has(key)) url.searchParams.set(key, value)
      })
      link.href = url.toString()

      link.addEventListener('click', () => {
        if (typeof window.plausible === 'function') {
          window.plausible('Turbo CTA', { props: { placement, target: url.pathname.replace(/^\//, '') } })
        }
      })
    })
}

tagTurboLinks()
