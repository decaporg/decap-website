const contactPageRoot = document.querySelector('[data-contact-page]')

if (contactPageRoot) {
  const form = contactPageRoot.querySelector('[data-contact-form]')
  const statusNode = contactPageRoot.querySelector('[data-contact-status]')
  const submitButton = contactPageRoot.querySelector('[data-contact-submit]')
  const topicSelect = contactPageRoot.querySelector('[data-contact-topic]')

  const allowedTopics = new Set(
    Array.from(topicSelect?.options || [])
      .map((option) => option.value.trim().toLowerCase())
      .filter(Boolean)
  )

  const setStatus = (message, variant = '') => {
    if (!statusNode) return

    statusNode.textContent = message
    statusNode.classList.remove('is-success', 'is-error')

    if (variant) {
      statusNode.classList.add(variant)
    }
  }

  const setButtonLoading = (isLoading) => {
    if (!submitButton) return

    if (!submitButton.dataset.defaultLabel) {
      submitButton.dataset.defaultLabel = submitButton.textContent
    }

    submitButton.disabled = isLoading
    submitButton.textContent = isLoading ? 'Sending...' : submitButton.dataset.defaultLabel
  }

  const applyTopicFromQueryParam = () => {
    if (!topicSelect) return

    const queryParams = new URLSearchParams(window.location.search)
    const topic = (queryParams.get('topic') || '').trim().toLowerCase()

    if (allowedTopics.has(topic)) {
      topicSelect.value = topic
    }
  }

  applyTopicFromQueryParam()

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault()

      if (!form.checkValidity()) {
        form.reportValidity()
        return
      }

      setStatus('')
      setButtonLoading(true)

      try {
        const formData = new FormData(form)
        const response = await fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formData).toString(),
        })

        if (!response.ok) {
          throw new Error('Failed to send your message.')
        }

        form.reset()
        setStatus('Message sent successfully. We will get back to you soon.', 'is-success')
      } catch {
        setStatus('Something went wrong. Please try again in a moment.', 'is-error')
      } finally {
        setButtonLoading(false)
      }
    })
  }
}
