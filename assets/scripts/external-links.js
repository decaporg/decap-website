function externalLinks () {
  Array.from(document.links).forEach((el) => {
    const link = el
    if (link.hostname && link.hostname !== window.location.hostname) {
      link.classList.add('external')
      link.res = 'noopener'
    }
  })
}

externalLinks()
