const maid = getMaid('com.unionpay')
function task() {
  maid.launch()
  waitForActivity('com.unionpay.activity.UPActivityMain')
  sleep(1000)
  const upEntry = id('frog_float_notgif')
  if (upEntry.exists()) {
    upEntry.click()
    waitForActivity('com.unionpay.activity.react.UPReactNativeActivity')
    sleep(2000)
    const upBtn = text('签到').findOnce()
    if (upBtn) {
      clickWidget(upBtn)
    }
  }
  maid.close()
}

module.exports = task
