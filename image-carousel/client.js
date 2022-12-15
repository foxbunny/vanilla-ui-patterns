{
  'use strict'

  // We handle two things in JavaScript, both non-essential.
  //
  // Firstly, we add a small cosmetic improvement to the UX by moving the
  // focused photo into the center of the carousel when using keyboard
  // navigation to tab within the photo list.
  //
  // Secondly, we replace the scrollbar with dots for indicating the portion
  // of the list that's currently visible and allow the user to jump to
  // different parts of the list.

  let
    $photoList = document.getElementById('photo-list'),
    $dotIndicators = document.getElementById('dot-indicators'),
    // We observe the intersection between the visible area of the photo list
    // and the individual list items under it. As the user scrolls, the
    // visibility of each observed item changes, we update the corresponding
    // dot's data-visible attribute. The dots are styled in CSS based on this
    // attribute.
    itemVisibilityObserver = new IntersectionObserver(entries => {
      for (let { target, isIntersecting } of entries) target.$dot.dataset.visible = isIntersecting
    }, {
      root: $photoList,
      threshold: 0.5,
    })

  let
    // Center the focused element inside the carousel. Since scroll-snap is
    // enabled, it is not necessary to account for elements that can't be
    // scrolled to the specified position.
    scrollIntoView = $li => $photoList.scroll($li.offsetLeft - $photoList.offsetLeft - ($photoList.offsetWidth - $li.offsetWidth) / 2, 0)

  for (let $ of $photoList.children) {
    // We cannot use a delegated event handler for focus event because it does
    // not bubble.
    $.firstElementChild.onfocus = () => scrollIntoView($)
    // Create and the cache the dot indicator element for later use in the
    // intersection observer. Since the dot indicator is not intended to be
    // accessible (no need as thumbnails can be tabbed to using the keyboard)
    // we use a span instead of a button or anchor.
    $dotIndicators.append($.$dot = Object.assign(document.createElement('span'), {
      onclick: () => {
        scrollIntoView($)
        $.firstElementChild.focus()
      },
    }))
    // Observe this item for intersection changes
    itemVisibilityObserver.observe($)
  }

  $dotIndicators.hidden = false
  $photoList.dataset.active = 'true'
}
