global.waitForActivity = function(activity, period, timeout) {
  period = period || 200
  timeout = timeout || 10000
  const startTime = new Date().getTime()
  while (currentActivity() !== activity) {
    if (new Date().getTime() - startTime >= timeout) {
      return false
    }
    sleep(period)
  }
  return true
}

global.waitForPackage = function(packageName, period, timeout) {
  period = period || 200
  timeout = timeout || 5000
  const startTime = new Date().getTime()
  while (currentPackage() !== packageName) {
    if (new Date().getTime() - startTime >= timeout) {
      return false
    }
    sleep(period)
  }
  return true
}
