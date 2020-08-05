const config = require('../config')

function wakeUpAndUnlock() {
  const keyboard = []

  // wake up
  if (!device.isScreenOn()) {
    device.wakeUp()
    sleep(2000)
  }

  // unlock
  if (!isUnlocked()) {
    gesture(220, [540, 1400], [540, 500])
    sleep(2000)
    for (let i = 0; i < 10; i++) {
      keyboard.push(id('key' + i).findOnce())
    }
    const unlockPassword = config.unlockPassword
    for (let i = 0; i < unlockPassword.length; i++) {
      keyboard[+unlockPassword[i]].click()
      sleep(500)
    }
    sleep(1000)
  }
}

module.exports = wakeUpAndUnlock
