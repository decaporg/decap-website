const turboJoinRoot = document.querySelector('[data-turbo-join]')

if (turboJoinRoot) {
  const stepPanels = {
    1: turboJoinRoot.querySelector('[data-step="1"]'),
    2: turboJoinRoot.querySelector('[data-step="2"]'),
    3: turboJoinRoot.querySelector('[data-step="3"]'),
  }

  const stepOneForm = turboJoinRoot.querySelector('[data-step-one-form]')
  const stepTwoForm = turboJoinRoot.querySelector('[data-step-two-form]')
  const stepOneError = turboJoinRoot.querySelector('[data-step-one-error]')
  const stepTwoError = turboJoinRoot.querySelector('[data-step-two-error]')
  const stepOneSubmit = turboJoinRoot.querySelector('[data-step-one-submit]')
  const stepTwoSubmit = turboJoinRoot.querySelector('[data-step-two-submit]')
  const stepTwoSkip = turboJoinRoot.querySelector('[data-step-two-skip]')
  const emailTarget = turboJoinRoot.querySelector('[data-user-email]')
  const planIntentInput = turboJoinRoot.querySelector('input[name="PLAN_INTENT"]')
  const otherReasonChoice = turboJoinRoot.querySelector('input[name="reasons"][value="Other"]')
  const otherReasonField = turboJoinRoot.querySelector('[data-other-reason-field]')
  const otherReasonInput = turboJoinRoot.querySelector('[data-other-reason-input]')

  const feedbackChoices = Array.from(turboJoinRoot.querySelectorAll('input[name="reasons"]'))
  const maxFeedbackChoices = 2
  const queryParams = new URLSearchParams(window.location.search)

  const state = {
    email: '',
    numberOfSeats: '',
    numberOfProjects: '',
    planIntent: queryParams.get('plan') || '',
  }

  if (planIntentInput) {
    planIntentInput.value = state.planIntent
  }

  const setStep = (nextStep) => {
    Object.entries(stepPanels).forEach(([stepId, panel]) => {
      if (!panel) return

      panel.hidden = Number(stepId) !== nextStep
    })
  }

  const setError = (node, message) => {
    if (node) {
      node.textContent = message
    }
  }

  const setButtonLoading = (button, isLoading, loadingLabel) => {
    if (!button) return

    if (!button.dataset.defaultLabel) {
      button.dataset.defaultLabel = button.textContent
    }

    button.disabled = isLoading
    button.textContent = isLoading ? loadingLabel : button.dataset.defaultLabel
  }

  const selectedFeedbackChoices = () => feedbackChoices
    .filter((choice) => choice.checked)

  const selectedFeedbackReasons = () => selectedFeedbackChoices()
    .map((choice) => {
      if (choice.value !== 'Other') {
        return choice.value
      }

      const otherReason = otherReasonInput ? otherReasonInput.value.trim() : ''
      return otherReason ? `Other: ${otherReason}` : 'Other'
    })

  const syncOtherReasonField = () => {
    if (!otherReasonChoice || !otherReasonField || !otherReasonInput) {
      return
    }

    const isOtherSelected = otherReasonChoice.checked
    otherReasonField.hidden = !isOtherSelected
    otherReasonInput.disabled = !isOtherSelected

    if (!isOtherSelected) {
      otherReasonInput.value = ''
      otherReasonInput.setCustomValidity('')
    }
  }

  const validateOtherReason = () => {
    if (!otherReasonChoice || !otherReasonInput) {
      return true
    }

    if (!otherReasonChoice.checked) {
      otherReasonInput.setCustomValidity('')
      return true
    }

    const otherReason = otherReasonInput.value.trim()
    otherReasonInput.setCustomValidity(otherReason ? '' : 'Please tell us your other reason.')
    return Boolean(otherReason)
  }

  const syncFeedbackLimit = () => {
    const selectedCount = selectedFeedbackChoices().length
    const atLimit = selectedCount >= maxFeedbackChoices

    feedbackChoices.forEach((choice) => {
      choice.disabled = atLimit && !choice.checked
    })
  }

  const validateFeedbackSelection = () => {
    if (feedbackChoices.length === 0) {
      return true
    }

    const selectedCount = selectedFeedbackChoices().length
    const validationTarget = feedbackChoices[0]

    validationTarget.setCustomValidity(
      selectedCount === 0 ? 'Select at least one option or click Skip.' : ''
    )

    const hasValidSelection = selectedCount > 0 && selectedCount <= maxFeedbackChoices
    return hasValidSelection && validateOtherReason()
  }

  const saveSessionState = () => {
    sessionStorage.setItem('turboEarlyAccessEmail', state.email)
    sessionStorage.setItem('turboEarlyAccessNumberOfSeats', state.numberOfSeats)
    sessionStorage.setItem('turboEarlyAccessNumberOfProjects', state.numberOfProjects)
  }

  const loadSessionState = () => {
    state.email = sessionStorage.getItem('turboEarlyAccessEmail') || ''
    state.numberOfSeats = sessionStorage.getItem('turboEarlyAccessNumberOfSeats') || ''
    state.numberOfProjects = sessionStorage.getItem('turboEarlyAccessNumberOfProjects') || ''
  }

  const sendRequest = async (payload) => {
    const response = await fetch('/.netlify/functions/join-early-access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    let body

    try {
      body = await response.json()
    } catch {
      body = {}
    }

    if (!response.ok) {
      throw new Error(body.error || 'Something went wrong. Please try again.')
    }

    return body
  }

  const initializeStepTwo = () => {
    if (emailTarget && state.email) {
      emailTarget.textContent = state.email
    }
  }

  feedbackChoices.forEach((choice) => {
    choice.addEventListener('change', () => {
      syncOtherReasonField()
      syncFeedbackLimit()
      setError(stepTwoError, '')
      validateFeedbackSelection()
    })
  })

  if (otherReasonInput) {
    otherReasonInput.addEventListener('input', () => {
      setError(stepTwoError, '')
      validateOtherReason()
    })
  }

  if (stepTwoSkip) {
    stepTwoSkip.addEventListener('click', () => {
      window.location.href = '/turbo/'
    })
  }

  if (stepOneForm) {
    stepOneForm.addEventListener('submit', async (event) => {
      event.preventDefault()
      setError(stepOneError, '')

      if (!stepOneForm.checkValidity()) {
        stepOneForm.reportValidity()
        return
      }

      const formData = new FormData(stepOneForm)
      const email = String(formData.get('email') || '').trim().toLowerCase()
      const numberOfSeats = String(formData.get('NUMBER_OF_SEATS') || '').trim()
      const numberOfProjects = String(formData.get('NUMBER_OF_PROJECTS') || '').trim()
      const planIntent = String(formData.get('PLAN_INTENT') || '').trim()

      setButtonLoading(stepOneSubmit, true, 'Submitting...')

      try {
        await sendRequest({
          action: 'subscribe',
          email,
          numberOfSeats,
          numberOfProjects,
          planIntent,
        })

        state.email = email
        state.numberOfSeats = numberOfSeats
        state.numberOfProjects = numberOfProjects
        state.planIntent = planIntent
        saveSessionState()
        initializeStepTwo()
        setStep(2)
      } catch (error) {
        setError(stepOneError, error.message)
      } finally {
        setButtonLoading(stepOneSubmit, false)
      }
    })
  }

  if (stepTwoForm) {
    stepTwoForm.addEventListener('submit', async (event) => {
      event.preventDefault()
      setError(stepTwoError, '')

      if (!validateFeedbackSelection() || !stepTwoForm.checkValidity()) {
        stepTwoForm.reportValidity()
        return
      }

      const reasons = selectedFeedbackReasons()

      setButtonLoading(stepTwoSubmit, true, 'Saving...')

      try {
        await sendRequest({
          action: 'feedback',
          email: state.email,
          reasons,
        })

        setStep(3)
      } catch (error) {
        setError(stepTwoError, error.message)
      } finally {
        setButtonLoading(stepTwoSubmit, false)
      }
    })
  }

  loadSessionState()

  if (state.email) {
    initializeStepTwo()
    setStep(2)
  } else {
    setStep(1)
  }

  syncOtherReasonField()
  syncFeedbackLimit()
  validateFeedbackSelection()
}
