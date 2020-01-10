const maid = getMaid('com.suning.mobile.ebuy')

function task() {
  maid.launch()
  waitForActivity('com.suning.mobile.ebuy.host.MainActivity')
  sleep(1500)
  const upBtn = desc('签到有礼').findOnce()
  if (upBtn) {
    upBtn.click()
    sleep(4000)
  }
  maid.close()
}

module.exports = task
