const maid = getMaid('com.pingan.carowner')

function task() {
  maid.launch()
  waitForActivity('com.pingan.carowner.activity.MainActivity')
  if (id('ad_cancel')) {
    id('ad_cancel').click()
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
