const maid = getMaid('com.sinovatech.unicom.ui')

function task() {
  maid.launch()
  waitForActivity('com.sinovatech.unicom.basic.ui.activity.MainActivity')
  sleep(2000)
  const cancelBtn = text(
    'oFr5vJX3UQPSC9zxHDaogEvWoQcnnqMLcSRw18J6ZKGBYq3rYYwU+bFUeVgLHba6x4zbn8bzKjtu8Nnnc5p8AAwDgFJ01yE0rBgAAAABJRU5ErkJggg=='
  ).findOnce()
  if (cancelBtn) {
    cancelBtn.click()
    sleep(1000)
  }
  id('main_tab_user_layout').click()
  sleep(2000)
  const upEntry = text('我的金币').findOnce()
  if (upEntry) upEntry.parent().click()
  sleep(2000)
  maid.close()
}

module.exports = task
