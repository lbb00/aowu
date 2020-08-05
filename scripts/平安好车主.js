const maid = getMaid('com.pingan.carowner')

function task () {
  maid.launch()
  waitForActivity('com.pingan.carowner.activity.MainActivity')
  sleep(2000)
  const adCancel = id('ad_cancel').findOnce()
  if (adCancel) {
    adCancel.click()
    sleep(1000)
  }
  const upEntry = text('去签到').findOnce()
  if (upEntry) {
    upEntry.click()
    waitForActivity('com.pingan.carowner.browser.BaseWebViewActivity')
    sleep(2000)
  }
  maid.close()
}

module.exports = task
