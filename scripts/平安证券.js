const maid = getMaid('com.hundsun.winner.pazq')

function task () {
  maid.launch()
  waitForActivity('com.hundsun.winner.pazq.ui.web.WebViewActivity')
  sleep(2000)
  const btnCancel = id('BTN_close').findOnce()
  if (btnCancel) {
    btnCancel.click()
    sleep(1000)
  }

  const me = text('我的').findOnce()
  if (me) {
    clickWidget(me)
    sleep(1000)
    const entryBtn = text('签到').findOnce()
    if (entryBtn) {
      clickWidget(entryBtn)
      waitForActivity('com.hundsun.winner.pazq.ui.web.WebViewActivity')
      sleep(2000)
      const upBtn = textMatches(/^签到.*/).clickable(true).findOnce()
      if (upBtn) {
        clickWidget(upBtn)
        log('平安证券 - 签到成功')
      }
      sleep(2000)
    }
  }

  maid.close()
}

module.exports = task
