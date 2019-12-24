const maid = getMaid('com.sinovatech.unicom.ui')

function task() {
  maid.launch()
  waitForActivity('com.sinovatech.unicom.basic.ui.activity.MainActivity')
  id('main_tab_user_layout').click()
  sleep(1000)
  const upEntry = text('我的金币').findOnce()
  if (upEntry) upEntry.parent().click()
  sleep(1000)
}

module.exports = task
