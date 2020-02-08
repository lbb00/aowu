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
  const upBtn = textMatches(/^签到.*/)
    .clickable(true)
    .findOnce()
  sleep(2000)
  if (upBtn) {
    upBtn.click()
    if (text('恭喜您获得').findOnce()) {
      log('平安证券 - 签到成功')
      return
    }
  }
  maid.close()
}

module.exports = task
