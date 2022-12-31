{
  'use strict'

  let
    $tableBody = document.querySelector('tbody'),
    originalHTML = $tableBody.innerHTML,
    // by price ascending
    sort = () => {
      let $$rows = Array.from($tableBody.children)
      $$rows.sort(($a, $b) => Number($a.children[1].textContent) - Number($b.children[1].textContent))
      for (let $ of $$rows) $tableBody.append($)
    },
    // only purchases made in march any year
    filter = () => {
      for (let $ of $tableBody.children)
        $.hidden = new Date($.children[2].firstElementChild.getAttribute('datetime')).getMonth() !== 3
    },
    teardown = () => new Promise(res => {
      $tableBody.innerHTML = originalHTML
      setTimeout(res, 1)
    })

  __BENCHMARK(() => new Promise(res => {
    filter()
    sort()
    setTimeout(res, 1, teardown) // allow for repaint
  }))
}
