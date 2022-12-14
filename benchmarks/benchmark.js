{
  'use strict'

  let
    WARMUP_TIME_MS = 5000,
    RUN_TIME_MS = 30000

  let
    Timer = class {
      constructor(timeLimit) {
        this.timeLimit = timeLimit
        this.samples = 0
        this.sampleStart = 0
        this.elapsed = 0
        this.sampleTimes = []
      }

      start() {
        this.sampleStart = performance.now()
      }

      sample() {
        let elapsed = performance.now() - this.sampleStart
        this.elapsed += elapsed
        if (this.elapsed > this.timeLimit) return true
        this.sampleTimes.push(elapsed)
        this.samples++
      }
    },
    doRun = (fn, timer) => {
      timer.start()
      return fn(timer.samples).then(() => {
        if (timer.sample()) return timer
        return doRun(fn, timer)
      })
    },
    writeResults = timer => {
      let minTime = Math.min.apply(null, timer.sampleTimes)
      let maxTime = Math.max.apply(null, timer.sampleTimes)
      let avgTime = timer.elapsed / timer.samples
      let sps = timer.samples / timer.elapsed * 1000

      document.body.innerHTML = `
        <table>
          <body>
            <tr>
              <th scope="row">min time</th>
              <td>${minTime.toFixed(2)}ms</td>
            </tr>
            <tr>
              <th scope="row">max time</th>
              <td>${maxTime.toFixed(2)}ms</td>
            </tr>
            <tr>
              <th scope="row">avg time</th>
              <td>${avgTime.toFixed(2)}ms</td>
            </tr>
            <tr>
              <th scope="row">speed</th>
              <td>${sps.toFixed(2)}ops/s</td>
            </tr>
          </body>
        </table>
      `
    }

  window.__BENCHMARK = fn => {
    let
      warmupTimer = new Timer(WARMUP_TIME_MS),
      runTimer = new Timer(RUN_TIME_MS)

    doRun(fn, warmupTimer)
      .then(() => doRun(fn, runTimer))
      .then(writeResults)
  }
}
