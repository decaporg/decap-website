/* global process */

const BREVO_API_BASE = 'https://api.brevo.com/v3'
const OTHER_REASON_PREFIX = 'Other:'
const MAX_OTHER_REASON_LENGTH = 200
const ALLOWED_FEEDBACK_REASONS = new Set([
  'Faster CMS performance',
  'Real-time collaboration with team members',
  'Built-in user management inside Decap CMS',
  'User roles and permission management',
])

const jsonResponse = (statusCode, payload) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
})

const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const readConfig = () => {
  const apiKey = process.env.BREVO_API_KEY || ''
  const listId = Number(process.env.BREVO_LIST_ID)

  if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
    throw new Error('Missing Brevo configuration. Set BREVO_API_KEY and BREVO_LIST_ID.')
  }

  return { apiKey, listId }
}

const brevoRequest = async (apiKey, path, payload) => {
  const response = await fetch(`${BREVO_API_BASE}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Brevo request failed (${response.status}): ${body}`)
  }
}

const upsertContact = async (apiKey, listId, email, attributes) => {
  await brevoRequest(apiKey, '/contacts', {
    email,
    listIds: [listId],
    updateEnabled: true,
    attributes,
  })
}

const normalizeFeedbackReasons = (value) => {
  const reasons = Array.isArray(value)
    ? value.filter((reason) => typeof reason === 'string' && reason.trim().length > 0)
    : []

  if (reasons.length === 0 || reasons.length > 2) {
    throw new Error('Please provide 1 to 2 feedback options.')
  }

  return reasons.map((reason) => {
    const trimmedReason = reason.trim()

    if (ALLOWED_FEEDBACK_REASONS.has(trimmedReason)) {
      return trimmedReason
    }

    if (!trimmedReason.startsWith(OTHER_REASON_PREFIX)) {
      throw new Error('Invalid feedback option provided.')
    }

    const otherReasonText = trimmedReason.slice(OTHER_REASON_PREFIX.length).trim()

    if (!otherReasonText) {
      throw new Error('Please include details after "Other:".')
    }

    if (otherReasonText.length > MAX_OTHER_REASON_LENGTH) {
      throw new Error('Other feedback must be 200 characters or less.')
    }

    return `${OTHER_REASON_PREFIX} ${otherReasonText}`
  })
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed.' })
  }

  let config

  try {
    config = readConfig()
  } catch (error) {
    console.error(error)
    return jsonResponse(500, { error: 'Server is not configured yet.' })
  }

  let payload

  try {
    payload = JSON.parse(event.body || '{}')
  } catch {
    return jsonResponse(400, { error: 'Invalid JSON payload.' })
  }

  const action = String(payload.action || '').trim()
  const email = String(payload.email || '').trim().toLowerCase()

  if (!validateEmail(email)) {
    return jsonResponse(400, { error: 'A valid email is required.' })
  }

  try {
    if (action === 'subscribe') {
      const numberOfSeats = String(payload.numberOfSeats || '').trim()
      const numberOfProjects = String(payload.numberOfProjects || '').trim()
      const planIntent = String(payload.planIntent || '').trim()

      if (!numberOfSeats || !numberOfProjects) {
        return jsonResponse(400, { error: 'Number of seats and projects are required.' })
      }

      const attributes = {
        EARLY_ACCESS: true,
        NUMBER_OF_SEATS: numberOfSeats,
        NUMBER_OF_PROJECTS: numberOfProjects,
      }

      if (planIntent) {
        attributes.PLAN_INTENT = planIntent
      }

      await upsertContact(config.apiKey, config.listId, email, attributes)
      return jsonResponse(200, { ok: true })
    }

    if (action === 'feedback') {
      let reasons

      try {
        reasons = normalizeFeedbackReasons(payload.reasons)
      } catch (error) {
        return jsonResponse(400, { error: error.message })
      }

      await upsertContact(config.apiKey, config.listId, email, {
        EARLY_ACCESS_FEEDBACK: reasons.join(' | '),
      })

      return jsonResponse(200, { ok: true })
    }

    return jsonResponse(400, { error: 'Unknown action.' })
  } catch (error) {
    console.error(error)
    return jsonResponse(502, { error: 'Unable to reach Brevo right now. Please try again.' })
  }
}
