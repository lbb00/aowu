const maid = getMaid('com.sinovatech.unicom.ui')

function task() {
  maid.launch()
  waitForActivity('com.sinovatech.unicom.basic.ui.activity.MainActivity')
  id('main_tab_user_layout').click()
  sleep(2000)
  const upEntry = text('我的金币').findOnce()
  if (upEntry) upEntry.parent().click()
  sleep(2000)
  maid.close()
}

module.exports = task
