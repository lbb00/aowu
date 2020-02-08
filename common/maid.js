function getMaid (packageName) {
  if (!packageName) toast('缺少包名')
  return {
    launch () {
      launch(packageName)
      sleep(1000)
      if (currentPackage() === 'com.miui.securitycenter') {
        click('允许')
      }
    },
    close () {
      sleep(2000)
      app.openAppSetting(packageName)
      text(app.getAppName(packageName)).waitFor()
      const isSure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne()
      if (isSure.enabled()) {
        textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/)
          .findOne()
          .click()
        textMatches(/(.*确.*|.*定.*)/)
          .findOne()
          .click()
        log(app.getAppName(packageName) + '应用已被关闭')
        sleep(1000)
        back()
      } else {
        log(app.getAppName(packageName) + '应用不能被正常关闭或不在后台运行')
        back()
      }
    }
  }
}

global.getMaid = getMaid

module.exports = getMaid
