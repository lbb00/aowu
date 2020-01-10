const maid = getMaid('com.paic.zhifu.wallet.activity')

function task() {
  maid.launch()
  waitForActivity('com.paic.zhifu.wallet.activity.modules.homev6.YiqianbaoActivityV6')
  sleep(2000)
  click('签到')
  waitForActivity('com.paic.zhifu.wallet.activity.control.widget.webview.YQBWebViewActivity')
  sleep(3000)
  // 关闭弹窗
  const btnClose = id('btn_close').findOnce()
  if (btnClose) {
    btnClose.click()
    sleep(1000)
  }
  const upBtn = text('立即签到').findOnce()
  if (upBtn) {
    upBtn.click()
  }
  maid.close()
}

module.exports = task
