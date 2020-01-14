const maid = getMaid('com.dianping.v1')

function task() {
  maid.launch()
  waitForActivity('com.dianping.v1.NovaMainActivity')
  sleep(2000)
  const cancelUpdateBtn = id('update_cross_icon').findOnce()
  if (cancelUpdateBtn) {
    cancelUpdateBtn.click()
    sleep(1000)
  }
  const upEntry = desc('每日福利hot').findOnce()
  if (upEntry) {
    upEntry.click()
    waitForActivity('com.dianping.base.web.ui.NovaTitansActivity')
    sleep(3000)
    const upBtn = text('签到领奖').findOnce()
    upBtn && upBtn.click()
  }
  maid.close()
}

module.exports = task
