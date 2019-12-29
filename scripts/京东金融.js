const maid = getMaid('com.jd.jrapp')

function task() {
  maid.launch()
  waitForActivity('com.jd.jrapp.bm.youth.ui.YouthMainActivity')
  sleep(1000)
  const upEntry = id('rl_card_container').findOnce()
  upEntry && upEntry.click()
  waitForActivity('com.jd.jrapp.bm.common.web.ui.WebActivity')
  sleep(2000)
  const upBtn = desc('今天').findOnce()
  if (upBtn) {
    upBtn.click()
    sleep(5000)
  }
  const cells = bounds(0, 243, 1080, 974)
    .descMatches(/\+\d+/)
    .find()
    .find(clickable(true))
  for (let i = 0; i < cells.length; i++) {
    cells[i].click()
    sleep(1000)
  }
}

module.exports = task
