{
  'use strict'

  // We use a custom element for this because it has a clean-up method that can
  // be handily used to remove the listener when no longer needed and thus
  // prevent memory leaks.
  customElements.define('click-boundary', class extends HTMLElement {
    constructor() {
      super()
      // Create a stable reference to this method
      this.documentLevelClickListener = this.documentLevelClickListener.bind(this)
    }

    connectedCallback() {
      this.addEventListener('click', ev => {
        // We mark the click boundary so that we can tell whether the click
        // happened inside the boundary or not. As the event bubbles, this same
        // event object is passed along all the way to the document.body where
        // we have another listener waiting for it.
        ev.clickBoundary = this
      })
      window.addEventListener('click', this.documentLevelClickListener, false)
    }

    disconnectedCallback() {
      window.removeEventListener('click', this.documentLevelClickListener, false)
    }

    documentLevelClickListener(ev) {
      if (ev.clickBoundary === this) return
      // Copy the original mouse event's data and add it to our custom 'clickoutside' event
      let event = Object.assign(new Event('clickoutside'), {
        view: ev.view,
        detail: ev.detail,
        screenX: ev.screenX,
        screenY: ev.screenY,
        clientX: ev.clientX,
        clientY: ev.clientY,
        shiftKey: ev.shiftKey,
        ctrlKey: ev.ctrlKey,
        altKey: ev.altKey,
        metaKey: ev.metaKey,
        button: ev.button,
        relatedTarget: ev.relatedTarget,
      })
      // Having the actual target is more useful
      Object.defineProperty(event, 'target', { value: ev.target, writable: false })
      this.dispatchEvent(event)
      // Handle the onclickoutside method if any so that it behaves more like a native element
      if (this.onclickoutside) this.onclickoutside(event)
    }
  })

  let
    $clickBoundary = document.getElementById('click-boundary')

  $clickBoundary.onclickoutside = $clickBoundary.querySelector('button').onclick = ev => {
    $clickBoundary.firstElementChild.open = false

    // We no longer need to handle these events when the dialog is not open.
    delete $clickBoundary.onclickoutside
  }

}
