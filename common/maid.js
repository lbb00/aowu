function getMaid(packageName) {
  if (!packageName) toast('缺少包名')
  return {
    launch() {
      launch(packageName)
      sleep(1000)
      if (currentPackage() === 'com.miui.securitycenter') {
        click('允许')
      }
    },
    close() {}
  }
}

global.getMaid = getMaid

module.exports = getMaid
