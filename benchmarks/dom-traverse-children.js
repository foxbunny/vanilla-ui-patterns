{
  'use strict'

  let
    $root = document.getElementById('list')

  __BENCHMARK(runId => new Promise(res => {
    for (let i = 0; i < $root.children.length; i++) $root.children[i].textContent = runId
    setTimeout(res, 1)
  }))
}
