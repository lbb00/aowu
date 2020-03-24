// 用本脚本自动测试什么样的参数可以上滑解锁屏幕

const errorMessage = msg => {
  console.error(msg)
  device.isScreenOn() && KeyCode(26)
  exit()
}
let max_try_times_wake_up = 10
while (!device.isScreenOn() && max_try_times_wake_up--) {
  device.wakeUp()
  sleep(500)
}
if (max_try_times_wake_up < 0) errorMessage('点亮屏幕失败')

const keyguard_manager = context.getSystemService(context.KEYGUARD_SERVICE)
const isUnlocked = () => !keyguard_manager.isKeyguardLocked()

let swipe_time = 0
const swipe_time_increment = 80
let max_try_times_swipe = 20
while (!isUnlocked() && max_try_times_swipe--) {
  swipe_time += swipe_time_increment
  gesture(swipe_time, [540, 1800], [540, 1000])
  sleep(1200)
}
if (max_try_times_swipe < 0) errorMessage('上滑屏幕失败')
log('解锁成功')
log('尝试得到最佳滑动时间: ' + swipe_time + '(毫秒)')
log('可修改代码中"swipe_time"赋值并去除测试内容')
exit()
