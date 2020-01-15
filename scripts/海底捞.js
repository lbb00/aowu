const maid = getMaid('com.haidilao')

function task() {
  maid.launch()
  waitForActivity('com.haidilao.hailehui.biz.impl.activity.MainActivity')
  sleep(2000)
  click(953 + 5, 272 + 5)
  waitForActivity('com.haidilao.hailehui.biz.impl.activity.SecondActivity')
  sleep(4000)
  maid.close()
}

module.exports = task
