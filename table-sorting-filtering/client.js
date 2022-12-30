{
  'use strict'

  let
    SORT_ORDER_TRANSITION = {
      none: 'descending',
      ascending: 'descending',
      descending: 'ascending',
    }

  let
    // Data type of the columns are marked using the 'data-type' attribute in
    // the respective column headers.
    //
    // We have generic functions for handling typical scenarios that we may
    // have in our app based on the column type. This is done so that we may
    // add new columns later without having to significantly modify the code.
    //
    // This is not necessary if you do not anticipate changes to the table at
    // a later date as the trade-off is additional complexity. Sometimes
    // hard-coding stuff makes the code simpler.
    valueGetter = {
      number: $td => Number($td.textContent.trim()),
      string: $td => $td.textContent.trim(),
      time: $td => new Date($td.firstElementChild.dateTime).getTime(),
    },
    columnIndex = $col => {
      let colIndex = 0
      while ($col = $col.previousElementSibling) colIndex++
      return colIndex
    },
    compareNumber = {
      ascending: (a, b) => a - b,
      descending: (a, b) => b - a,
    },
    compareString = {
      ascending: (a, b) => a.localeCompare(b),
      descending: (a, b) => b.localeCompare(a),
    },
    comparers = {
      number: compareNumber,
      string: compareString,
      time: compareNumber,
    },
    debounce = (interval, fn) => {
      let timer
      return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(fn, interval, ...args)
      }
    }

  let
    $searchInput = document.querySelector('input[type="search"]'),
    $thead = document.querySelector('thead'),
    $$th = Array.from($thead.querySelectorAll('th')),
    $$colLabels = Array.from($thead.querySelectorAll('th > span > span')),
    $tbody = document.querySelector('tbody'),
    $$tableRows = Array.from($tbody.children),
    $hiddenAnnouncement = document.getElementById('hidden-sort-order-announcement'),
    colTypes = $$th.map($ => $.dataset.type)

  let
    filterTable = () => {
      let kwd = $searchInput.value.trim().toLowerCase()
      // Filtering means simply hiding the elements that do not match. We have
      // two cases here. One is when the keyword is specified, and another
      // when the keyword is blank. When the keyword is specified, we test
      // whether the keyword is contained within the text of the first column
      // (order ID) and hide the rows where this is not the case. In the
      // second case, we unhide all rows.
      if (kwd) for (let $tr of $$tableRows) $tr.hidden = !$tr.firstElementChild.textContent.includes(kwd)
      else $$tableRows.forEach($tr => $tr.hidden = false)
    },
    updateSortOrderMarker = (colIdx, sortOrder) => {
      for (let i = $$th.length; i--;) $$th[i].setAttribute('aria-sort', i === colIdx ? sortOrder : 'none')
    },
    // We use a hidden live region to announce changes in the sort order.
    // If a screen reader user activate the sort button, the text inserted
    // into the live region is automatically read.
    announceSortOrder = (colIdx, sortOrder) =>
      $hiddenAnnouncement.textContent = `sorted ${sortOrder} by ${$$colLabels[colIdx].textContent}`,
    sortTable = (colIdx, sortOrder) => {
      let
        colType = colTypes[colIdx],
        compare = comparers[colType][sortOrder]
      // We first sort the plain array containing table rows based on the
      // specified sort order. Then we append the rows to the <tbody> in correct
      // order. When an element is appended to another element, it is
      // automatically removed from its original position. The final order of
      // the element will therefore match the order in the array once all
      // elements are appended.
      $$tableRows.sort(($a, $b) => compare($a.values[colIdx], $b.values[colIdx]))
      for (let $tr of $$tableRows) $tbody.append($tr)
    }

  // We store the deserialized values of every cell as an array in each
  // row's 'values' property. It takes about 1~2ms on a good desktop.
  for (let $tr of $$tableRows) {
    let values = $tr.values = []
    for (let i = 0, $td; $td = $tr.children[i]; i++) {
      let type = colTypes[i]
      values.push(valueGetter[type]($td))
    }
  }

  // Cache the button in the TH elements so we don't need to query for it
  // every time
  for (let $th of $$th) $th.$button = $th.querySelector('button')

  // Filtering and sorting are completely independent and can be applied in
  // any order. Therefore, the simplest solution is to apply them in
  // whatever order user happens to performs them. They also do not need
  // to be applied together. This works because filtering simply hides the
  // elements, rather than completely removing them from the DOM tree, so they
  // remain sortable even after the filter is applied!
  $searchInput.oninput = debounce(50, filterTable)
  $thead.onclick = ev => {
    let $th = ev.target.closest('th')
    if (!$th?.hasAttribute('aria-sort')) return
    let colIdx = columnIndex($th)
    let nextState = SORT_ORDER_TRANSITION[$th.getAttribute('aria-sort')]

    sortTable(colIdx, nextState)
    updateSortOrderMarker(colIdx, nextState)
    announceSortOrder(colIdx, nextState)
  }

  // Activate JavaScript-only features
  for (let $ of document.querySelectorAll(':is(button, label)[hidden]')) $.hidden = false
}
