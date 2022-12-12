{
  'use strict'

  let
    $fakeAction = document.getElementById('fake-action'),
    $fakeActionResult = document.getElementById('fake-action-result')

  let
    doFakeAction = () => new Promise((res, rej) => setTimeout(Math.random() < 0.5 ? res : rej, 3000)),
    clearToasts = () => document.querySelectorAll('[role=alert]').forEach($ => $.remove()),
    announceError = text => {
      $fakeActionResult.textContent = ''
      document.body.append(Object.assign(document.createElement('p'), {
        /**
         * We use the 'alert' role to trigger immediate announcement by the
         * screen readers. Note that alerts are read but not focused
         * automatically. This is because alerts are generally not intended to
         * present interactive interfaces, but just informational text.
         *
         * Generally, if you intend for users to interact with toasts, the
         * functionality is either too complex or too annoying for a toast.
         * Integrating the UI into an appropriate location on the page is a
         * better course of action in this case.
         */
        role: 'alert',
        textContent: text,
        onanimationend: ev => ev.target.remove(), // duration of the toast is controlled through CSS
      }))
    },
    /**
     * For the inline alerts, we simply change the text. Because the element is
     * marked as aria-live=polite, the text is immediately read out to the user.
     * When text is reverted to empty, the change is not announced, so we can
     * silently clear the alert.
     */
    announceProgress = () => {
      $fakeActionResult.textContent = 'Please wait...'
    },
    announceSuccess = () => {
      $fakeActionResult.textContent = 'Completed successfully'
      setTimeout(() => $fakeActionResult.textContent = '', 7000)
    }

  let
    onFakeAction = () => {
      clearToasts()
      announceProgress()
      doFakeAction()
        .then(
          () => announceSuccess(),
          () => announceError('There was an error'),
        )
    }

  Object.assign($fakeAction, {
    hidden: false,
    onclick: onFakeAction,
  })
  $fakeActionResult.hidden = false
}
