const maid = getMaid('com.haidilao')

function closeIV () {
  if (id('iv_closeevaluate').findOnce()) {
    id('iv_closeevaluate').findOnce().click()
  }
  sleep(1000)
  if (id('iv_close').findOnce()) {
    id('iv_close').findOnce().click()
  }
  sleep(1000)
}

function task () {
  maid.launch()
  waitForActivity('com.haidilao.hailehui.biz.impl.activity.MainActivity')
  sleep(2000)

  closeIV()
  const btn = desc('签到').findOnce()
  if (btn) {
    clickWidget(btn)
    waitForActivity('com.haidilao.hailehui.biz.impl.activity.SecondActivity')
    sleep(5000)
  }
  maid.close()
}

module.exports = task
