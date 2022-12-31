{
  'use strict'

  let
    $tableBody = document.querySelector('tbody'),
    originalHTML = $tableBody.innerHTML,
    // by price ascending
    sort = () => {
      let $$rows = Array.from($tableBody.children)
      $$rows.sort(($a, $b) => $a.__price - $b.__price)
      for (let $ of $$rows) $tableBody.append($)
    },
    // only purchases made in march any year
    filter = () => {
      for (let $ of $tableBody.children)
        $.hidden = $.__month !== 3
    },
    prepare = () => {
      for (let $ of $tableBody.children) {
        $.__price = Number($.children[1].textContent)
        $.__month = new Date($.children[2].firstElementChild.getAttribute('datetime')).getMonth()
      }
    },
    teardown = () => new Promise(res => {
      $tableBody.innerHTML = originalHTML
      prepare()
      setTimeout(res, 1)
    })

  prepare()
  setTimeout(__BENCHMARK, 1, () => new Promise(res => {
    filter()
    sort()
    setTimeout(res, 1, teardown) // allow for repaint
  }))
}
