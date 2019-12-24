function getMaid(packageName) {
  if (!packageName) toast('缺少包名')
  return {
    launch() {
      launch(packageName)
      sleep(500)
      click('允许')
    },
    close() {}
  }
}

global.getMaid = getMaid

module.exports = getMaid
