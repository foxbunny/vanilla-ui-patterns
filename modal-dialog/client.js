{
  'use strict'

  let
    $openDialog = document.getElementById('open-dialog'),
    $dialog = document.getElementById('dialog'),
    $closeDialog = document.getElementById('close-dialog'),
    $dialogClickTrap = document.getElementById('dialog-click-trap')

  let
    openDialog = () => {
      $dialog.open = true
      // Focus the dialog content immediately to redirect screen readers'
      // attention to it
      $dialog.querySelector('article').focus()
    },
    closeDialog = () => $dialog.open = false

  Object.assign($openDialog, {
    onclick: openDialog,
    hidden: false,
  })
  $closeDialog.onclick = $dialogClickTrap.onclick = onDialogClose
  window.addEventListener('keyup', ev => {
    if (ev.code !== 'Escape') return
    if (!$dialog.open) return
    closeDialog()
  })
}
