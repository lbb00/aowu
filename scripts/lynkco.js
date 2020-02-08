const maid = getMaid('com.lynkco.customer')

function task () {
  maid.launch()
  waitForActivity('com.geely.lynkco.main.activity.LynkCoTabMainActivity')
  sleep(6000)
  swipe(300, 1700, 300, 200, 300)
  sleep(2000)
  let shareCount = 0
  while (shareCount < 3) {
    swipe(300, 1700, 300, 200, 300)
    sleep(2000)
    const list = descMatches(/.*[天时秒]前$/).find()
    for (let i = 0; i < list.length; i++) {
      const obj = list[i]
      if (obj && shareCount < 3) {
        obj
          .parent()
          .parent()
          .parent()
          .child(1)
          .child(3)
          .click()
        sleep(3000)
        clickWidget(desc('微信好友').findOnce())
        shareCount++
        waitForActivity('com.tencent.mm.ui.transmit.SelectConversationUI')
        sleep(2000)
        back()
        waitForActivity('com.geely.lynkco.main.activity.LynkCoTabMainActivity')
        sleep(2000)
      }
    }
  }
  maid.close()
}

module.exports = task
