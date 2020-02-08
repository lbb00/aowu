const keyguardManager = context.getSystemService(context.KEYGUARD_SERVICE)

global.waitForActivity = function (activity, period, timeout) {
  period = period || 200
  timeout = timeout || 20000
  const startTime = new Date().getTime()
  while (currentActivity() !== activity) {
    if (new Date().getTime() - startTime >= timeout) {
      return false
    }
    sleep(period)
  }
  return true
}

global.waitForPackage = function (packageName, period, timeout) {
  period = period || 200
  timeout = timeout || 10000
  const startTime = new Date().getTime()
  while (currentPackage() !== packageName) {
    if (new Date().getTime() - startTime >= timeout) {
      return false
    }
    sleep(period)
  }
  return true
}

/**
 * 某些组件的clickable为false的情况下使用
 */
global.clickWidget = function (widget) {
  if (widget) {
    click(widget.bounds().centerX(), widget.bounds().centerY())
  }
}

global.isUnlocked = function () {
  return !keyguardManager.isKeyguardLocked()
}
