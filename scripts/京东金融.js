const maid = getMaid('com.jd.jrapp')

function task () {
  maid.launch()
  waitForActivity('com.jd.jrapp.bm.youth.ui.YouthMainActivity')
  sleep(1000)
  const upEntry = id('rl_card_container').findOnce()
  upEntry && upEntry.click()
  waitForActivity('com.jd.jrapp.bm.common.web.ui.WebActivity')
  sleep(3000)
  const upBtn = desc('今天').findOnce()
  if (upBtn) {
    upBtn.click()
    sleep(10000)
  }
  const cells = descMatches(/\+\d+/)
    .find()
    .find(clickable(true))
  for (let i = 0; i < cells.length; i++) {
    cells[i].click()
    sleep(1000)
  }
  sleep(1000)
  maid.close()
}

module.exports = task
