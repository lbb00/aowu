const maid = getMaid('com.dianping.v1')

function task() {
  maid.launch()
  waitForActivity('com.dianping.v1.NovaMainActivity')
  sleep(2000)
  desc('每日福利hot')
    .findOnce()
    .click()
  waitForActivity('com.dianping.base.web.ui.NovaTitansActivity')
  sleep(3000)
  text('签到领奖')
    .findOnce()
    .click()
  maid.close()
}

module.exports = task
