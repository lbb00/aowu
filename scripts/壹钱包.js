const getMaid = require('../common/maid')
const maid = getMaid('com.paic.zhifu.wallet.activity')

function task() {
  maid.launch()
  waitForActivity('com.paic.zhifu.wallet.activity.modules.homev6.YiqianbaoActivityV6')
  sleep(2000)
  click('签到')
  waitForActivity('com.paic.zhifu.wallet.activity.control.widget.webview.YQBWebViewActivity')
  sleep(2000)
  const upBtn = text('立 即 签 到').findOnce()
  if (upBtn) {
    upBtn.click()
  }
}

module.exports = task
