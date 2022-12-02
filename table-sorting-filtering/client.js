{
  'use strict'

  let
    CHECKED_STATE_TRANSITION = {
      undefined: true,
      false: true,
      true: false,
    }

  let
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
      true: (a, b) => b - a,
      false: (a, b) => a - b,
    },
    compareString = {
      true: (a, b) => b.localeCompare(a),
      false: (a, b) => a.localeCompare(b),
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
    $tbody = document.querySelector('tbody'),
    $$tableRows = Array.from($tbody.children),
    colTypes = $$th.map($ => $.dataset.type)

  let
    filterTable = () => {
      let kwd = $searchInput.value.trim().toLowerCase()
      if (kwd) $$tableRows.forEach($tr => $tr.hidden = !$tr.firstElementChild.textContent.includes(kwd))
      else $$tableRows.forEach($tr => $tr.hidden = false)
    },
    updateSortButtonStates = (colIdx, isDesc) =>
      $$th.forEach(($th, i) => $th.querySelector('button')
        .setAttribute('aria-checked', i === colIdx ? isDesc : 'undefined'),
      ),
    sortTable = (colIdx, isDesc) => {
      let
        colType = colTypes[colIdx],
        compare = comparers[colType][isDesc]
      $$tableRows.sort(($a, $b) => compare($a.values[colIdx], $b.values[colIdx]))
      for (let $tr of $$tableRows) $tbody.append($tr)
    }

  let
    onSort = (colIdx, isDesc) => {
      updateSortButtonStates(colIdx, isDesc)
      sortTable(colIdx, isDesc)
    },
    onFilter = filterTable

  // We store the deserialized values of every cell as an array in each
  // row's 'values' property. It takes about 1~2ms on a good desktop.
  $$tableRows.forEach($tr => {
    let values = $tr.values = []
    for (let i = 0, $td; $td = $tr.children[i]; i++) {
      let type = colTypes[i]
      values.push(valueGetter[type]($td))
    }
  })

  // Cache the button in the TH elements so we don't need to query for it
  // every time
  $$th.forEach($th => {
    $th.$button = $th.querySelector('button')
  })

  // Filtering and sorting are completely independent and can be applied in
  // any order. Therefore, the simplest solution is to apply them in
  // whatever order user happens to performs them. They also do not need
  // to be applied together.
  $searchInput.oninput = debounce(50, onFilter)
  $thead.onclick = ev => {
    let $th = ev.target.closest('th')
    if (!$th?.$button) return
    let colIdx = columnIndex($th)
    let nextState = CHECKED_STATE_TRANSITION[$th.$button.getAttribute('aria-checked')]
    onSort(colIdx, nextState)
  }

  // Activate JavaScript-only features
  document.querySelectorAll(':is(button, label)[hidden]').forEach($ => $.hidden = false)
}
