const maid = getMaid('com.smzdm.client.android')

function task() {
  maid.launch()
  waitForActivity('com.smzdm.client.android.activity.HomeActivity')
  sleep(2000)
  const cancelUpdateBtn = id('iv_content_cancel').findOnce()
  if (cancelUpdateBtn) {
    cancelUpdateBtn.click()
  }
  sleep(2000)
  if (upEntry) {
    clickWidget(upEntry)
    waitForActivity('com.smzdm.client.android.user_center.signin.SignInActivity')
    sleep(2000)
  }

  maid.close()
}

module.exports = task
