const maid = getMaid('com.pingan.carowner')

function task() {
  maid.launch()
  waitForActivity('com.pingan.carowner.activity.MainActivity')
  const adCancel = id('ad_cancel').findOnce()
  if (adCancel) {
    adCancel.click()
  }
  sleep(1000)
  text('签到领积分')
    .findOnce()
    .click()
  waitForActivity('com.pingan.carowner.browser.BaseWebViewActivity')
  sleep(2000)
  maid.close()
}

module.exports = task
