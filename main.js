require('./common/better')

const yunshanfu = require('./scripts/云闪付')
const yiqianbao = require('./scripts/壹钱包')
const pinganzhengquan = require('./scripts/平安证券')

function start(taskArr) {
  const total = taskArr.length
  for (let i = 0; i < total; i++) {
    log('执行任务 - 编号 %d', i + 1)
    taskArr[i]()
    sleep(1000)
    // 返回autojs pro以便启动其他app，注意赋予autojs后台启动权限
    launch('org.autojs.autojspro')
    waitForPackage('org.autojs.autojspro')
    sleep(1000)
  }
  log('全部任务执行完毕')
}

start([yunshanfu, yiqianbao, pinganzhengquan])
