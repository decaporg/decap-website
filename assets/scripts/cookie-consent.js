const CONSENT_STORAGE_KEY = 'decap_cookie_consent'
const GTM_CONTAINER_ID = 'GTM-WQFP7W4H'

function loadGtm () {
  if (window.__gtmLoaded) return
  window.__gtmLoaded = true

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`
  document.head.appendChild(script)

  const noscript = document.createElement('noscript')
  const iframe = document.createElement('iframe')
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`
  iframe.height = '0'
  iframe.width = '0'
  iframe.style.display = 'none'
  iframe.style.visibility = 'hidden'
  noscript.appendChild(iframe)
  document.body.appendChild(noscript)
}

function getStoredConsent () {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY)
  } catch (e) {
    return null
  }
}

function storeConsent (value) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value)
  } catch (e) {
    // Ignore storage failures (e.g. private browsing) - banner will just
    // reappear on the next page load rather than breaking anything.
  }
}

const consent = getStoredConsent()

if (consent === 'accepted') {
  loadGtm()
} else if (consent !== 'rejected') {
  const banner = document.getElementById('cookie-consent')
  const acceptBtn = document.getElementById('cookie-consent-accept')
  const rejectBtn = document.getElementById('cookie-consent-reject')

  if (banner && acceptBtn && rejectBtn) {
    banner.hidden = false

    acceptBtn.addEventListener('click', () => {
      storeConsent('accepted')
      banner.hidden = true
      loadGtm()
    })

    rejectBtn.addEventListener('click', () => {
      storeConsent('rejected')
      banner.hidden = true
    })
  }
}
