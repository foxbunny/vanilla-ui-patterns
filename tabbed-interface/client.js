{
  'use strict'

  let
    $tablist = document.getElementById('tablist'),
    $$tabs = $tablist.querySelectorAll('a')

  let
    focusNextTab = () => $tablist.querySelector('a:focus')?.nextElementSibling?.focus(),
    focusPrevTab = () => $tablist.querySelector('a:focus')?.previousElementSibling?.focus(),
    unfocusCurrentTab = () => {
      let $currentTab = $tablist.querySelector('a[aria-expanded]')
      if (!$currentTab) return
      $currentTab.removeAttribute('aria-expanded')
      $currentTab.$panel.hidden = true
    },
    focusTab = $tab => {
      $tab.setAttribute('aria-expanded', 'true')
      $tab.$panel.hidden = false
      requestAnimationFrame(() => $tab.$panel.focus())
    }

  let
    onNextTabFocus = focusNextTab,
    onPrevTabFocus = focusPrevTab,
    onFocusTab = $tab => {
      unfocusCurrentTab()
      focusTab($tab)
    }

  // We add ARIA roles and attributes for two reasons. Firstly, we want to avoid
  // bloating the HTML with attributes that only have meaning when JavaScript is
  // activated. Secondly, we can use these attributes in CSS to style the
  // interface only when JavaScript is enabled without adding additional markers
  // for that.
  //
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role
  $tablist.setAttribute('role', 'tablist')
  for (let $tab of $$tabs) {
    let tabPanelId = $tab.getAttribute('href').slice(1)
    $tab.setAttribute('role', 'tab')
    $tab.setAttribute('aria-controls', tabPanelId)
    // We store the reference to the panel element as a property on the tab
    // element. Makes it easier to look it up later. This is cheap: exactly
    // like assigning a property on any other object.
    $tab.$panel = document.getElementById(tabPanelId)
    $tab.$panel.setAttribute('role', 'tabpanel')
    // Make the tab panel focusable with JavaScript but not the normal keyboard
    // navigation (tabindex = -1)
    $tab.$panel.tabIndex = -1
    // Hide all tab panels initially
    $tab.$panel.hidden = true
  }

  {
    // Mark the current tab as active
    let $currentTab = $$tabs[0]
    $currentTab.setAttribute('aria-expanded', 'true')
    $currentTab.$panel.hidden = false
  }

  // Enable keyboard navigation for tabs. The recommended navigation for tabs
  // is to use Up/Down arrows to move within the tabs. Additionally we add
  // Left/Right keys to augment the standard behavior. When Tab is pressed while
  // a tab is focused, we move to the associated tab panel. This is also
  // recommended behavior. We additionally test for shift key, so that
  // Shift-Tab works as usual.
  $tablist.onkeydown = ev => {
    switch (ev.code) {
      case 'ArrowDown':
      case 'ArrowRight':
        ev.preventDefault()
        onNextTabFocus()
        break
      case 'ArrowUp':
      case 'ArrowLeft':
        ev.preventDefault()
        onPrevTabFocus()
        break
      case 'Tab':
        if (ev.shiftKey) return
        ev.preventDefault()
        let $activeTab = document.activeElement
        if (!$activeTab) break
        onFocusTab($activeTab)
        break
    }
  }
  // When a tab is clicked, focus on the associated tab panel.
  $tablist.onclick = ev => {
    let $tab = ev.target.closest('a')
    if (!$tab) return
    ev.preventDefault()
    onFocusTab($tab)
  }
}
