function externalLinks () {
  Array.from(document.links)
    .filter((link) => link.hostname && link.hostname !== window.location.hostname)
    .forEach((link) => {
      link.classList.add('external')
      link.rel = 'noopener'
    })
}

externalLinks()
