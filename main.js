require('./common/better')
require('./common/maid')
require('./common/unlock')

const yunshanfu = require('./scripts/云闪付')
const yiqianbao = require('./scripts/壹钱包')
const pinganzhengquan = require('./scripts/平安证券')
const liantong = require('./scripts/联通营业厅')
const jd = require('./scripts/京东')
const jdWallet = require('./scripts/京东金融')
const kfc = require('./scripts/kfc')
const lynkco = require('./scripts/lynkco')
const dazhong = require('./scripts/大众点评')
const pahcz = require('./scripts/平安好车主')

function start(taskArr) {
  const total = taskArr.length
  for (let i = 0; i < total; i++) {
    // 返回autojs pro以便启动其他app，注意赋予autojs后台启动权限
    launch('org.autojs.autojspro')
    waitForPackage('org.autojs.autojspro')
    sleep(2000)
    log('执行任务 - 编号 %d', i + 1)
    taskArr[i]()
    sleep(2000)
  }
  log('全部任务执行完毕')
}

start([yunshanfu, pinganzhengquan, jd, liantong, kfc, jdWallet, yiqianbao, dazhong, pahcz, lynkco])
