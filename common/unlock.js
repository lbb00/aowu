const config = require('../config')
const keyboard = []

if (!device.isScreenOn()) {
  device.wakeUp()
  sleep(2000)
}

if (!isUnlocked()) {
  gesture(320, [540, 1800], [540, 1000])
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
