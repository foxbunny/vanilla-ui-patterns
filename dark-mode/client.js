{
  'use strict'

  let
    $header = document.querySelector('header'),
    $darkModeToggle = Object.assign(document.createElement('button'), {
      id: 'dark-mode-toggle',
      innerHTML: `
        <span>toggle dark mode</span>
        <svg viewBox="0 0 32 32" aria-hidden="true"><use href="icons.svg#moon"/></svg>
        <svg viewBox="0 0 32 32" aria-hidden="true"><use href="icons.svg#sun"/></svg>
      `,
    })

  let
    // Note: return value of the toggleAttribute() method is true if the attribute got toggled on
    toggleDarkMode = () => localStorage.darkMode = document.body.classList.toggle('dark'),
    restoreDarkMode = () => document.body.classList.toggle('dark', localStorage.darkMode === 'true'),
    enableAnimation = () => document.body.setAttribute('data-animation-enabled', 'true'),
    disableAnimation = () => document.body.removeAttribute('data-animation-enabled')

  // Disable transitions during page load and page transitions
  window.addEventListener('beforeunload', disableAnimation)
  // We enable animations after the browser is finished with layout/paint. The
  // callback with 0 time out will still not run until those are done.
  setTimeout(enableAnimation)

  // Add the button to the page
  $header.append(Object.assign($darkModeToggle, { onclick: toggleDarkMode }))

  restoreDarkMode()
}
