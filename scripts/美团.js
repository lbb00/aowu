const maid = getMaid('com.sankuai.meituan')

function task () {
  maid.launch()
  waitForActivity('com.meituan.android.pt.homepage.activity.MainActivity')
  sleep(2000)

  const updateCancelBtn = id('btn_cancel').findOnce()
  if (updateCancelBtn) {
    updateCancelBtn.click()
    sleep(1000)
  }

  const upEntry = desc('红包签到').findOnce()
  if (upEntry) {
    upEntry.click()
    waitForActivity('com.meituan.android.base.knb.KNBWebViewActivity')
    sleep(3000)
    const reUpBtn = text('45be218d6ed95240cf1c68ec487e62f11556').findOnce()
    if (reUpBtn) {
      clickWidget(reUpBtn)
    } else {
      const upBtn = text('cf1ef851fe4302b10efeb90541e1d6f45595').findOnce()
      if (upBtn) {
        clickWidget(upBtn)
      }
    }
    sleep(2000)
  }

  maid.close()
}

module.exports = task
