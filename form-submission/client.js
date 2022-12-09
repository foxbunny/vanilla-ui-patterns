{
  'use strict'

  let
    VALID_CHARS_CONDITIONS = [ // Naive password validation
      /[a-z]/, // lower-case
      /[A-Z]/, // upper-case
      /[0-9]/, // number
      /[`~!@#$%^&*()\-_=+\[\];:'"\\|,<.>/?]/, // special character
    ]

  let
    $form = document.getElementById('sign-up'),
    $password = $form.querySelector('[name=password]'),
    $json = document.getElementById('json')

  let
    validatePassword = () => {
      let
        text = $password.value,
        isValidPasswordCharacterMix = VALID_CHARS_CONDITIONS.every(r => r.test(text))
      if (!isValidPasswordCharacterMix) $password.setCustomValidity('Please use at least one lower-case and upper-case letter, a number, and a special character')
      else $password.setCustomValidity('')
      $password.reportValidity()
    },
    isFormValid = () => $form.checkValidity(),
    submitForm = () => {
      let formData = new FormData($form)
      $json.innerText = JSON.stringify(Object.fromEntries(formData.entries()), null, 2)
    },
    togglePasswordInputUnmasking = ($input, isShown = $input.type === 'password') =>
      $input.type = isShown ? 'text' : 'password',
    toggleUnmaskButton = ($button, isShown = $button.getAttribute('aria-checked') !== 'true') => {
      // Update the ARIA and visible labels
      $button.setAttribute('aria-label', isShown ? 'hide password' : 'show password')
      $button.textContent = isShown ? 'hide' : 'show'
      // Update the live region to announce the (de)masking of the password
      $button.nextElementSibling.textContent = 'your password is ' + (isShown ? 'shown' : 'hidden')
    }

  let
    onSubmit = () => {
      // Trigger custom validation
      validatePassword()
      // Test form validity (affected by custom validators)
      if (isFormValid()) {
        // Re-mask the password
        togglePasswordInputUnmasking($password, false)
        toggleUnmaskButton($password.nextElementSibling, false)
        submitForm()
      }
      else {
        // Start validating on input after first unsuccessful submission
        $password.oninput = validatePassword
      }
    },
    onToggleShowHide = ($button, $input) => {
      togglePasswordInputUnmasking($input)
      toggleUnmaskButton($button)
    }

  $form.onsubmit = ev => {
    ev.preventDefault()
    onSubmit()
  }
  $form.onclick = ev => {
    if (!ev.target.matches('button[value=reveal]')) return
    ev.preventDefault()
    onToggleShowHide(ev.target, ev.target.previousElementSibling)
  }
  $json.hidden = false
  document.querySelectorAll('button[hidden]').forEach($ => $.hidden = false)
}
