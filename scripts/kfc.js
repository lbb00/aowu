const maid = getMaid('com.yek.android.kfc.activitys')

function task() {
  maid.launch()
  waitForActivity('com.yum.android.superkfc.ui.v2.HomeV2Activity')
  sleep(1000)
  const modelCancelBtn = id('common_iv_back')
  if (modelCancelBtn) {
    modelCancelBtn.click()
  }
  sleep(1000)
  id('homev2_view_me_iv_12').click()
  waitForActivity('com.yum.android.superkfc.reactnative.ReactActivity')
  sleep(5000)
  const upBtn = text('签到').findOnce()
  if (upBtn) {
    clickWidget(upBtn)
    console.log('肯德基签到成功')
  }
  maid.close()
}

module.exports = task
