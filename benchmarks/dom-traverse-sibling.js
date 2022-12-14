{
  'use strict'

  __BENCHMARK(runId => new Promise(res => {
    let $ = document.getElementById('list').firstElementChild
    while ($) {
      $.textContent = runId
      $ = $.nextElementSibling
    }
    setTimeout(res, 1)
  }))
}
