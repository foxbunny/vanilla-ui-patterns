{
  'use strict'

  let
    $$li = document.querySelectorAll('li')

  __BENCHMARK(runId => new Promise(res => {
    for (let i = 0; i < $$li.length; i++) $$li[i].textContent = runId
    setTimeout(res, 1)
  }))
}
