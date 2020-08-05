// global
require('./common/better')
require('./common/maid')

const unlock = require('./common/unlock')

// scripts
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
const suning = require('./scripts/suning')
const haidilao = require('./scripts/海底捞')
const smzdm = require('./scripts/smzdm')

const APP_PACKAGE_NAME = 'org.autojs.autojspro'

/**
 * 返回主程序以便启动其他APP，注意赋予主程序后台启动权限
 */
function launchMainApp () {
  if (currentPackage() !== APP_PACKAGE_NAME) {
    launch(APP_PACKAGE_NAME)
    waitForPackage(APP_PACKAGE_NAME)
    sleep(2000)
  }
}

function doTasks (taskArr) {
  const total = taskArr.length
  for (let i = 0; i < total; i++) {
    launchMainApp()
    log('执行任务 - 编号 %d', i + 1)
    taskArr[i]()
    sleep(2000)
  }
}

function start (taskArr) {
  unlock()
  doTasks(taskArr)
  log('全部任务执行完毕')
}

start([
  // haidilao,
  // lynkco,
  // liantong,
  // yunshanfu,
  // pinganzhengquan,
  // smzdm,
  // kfc,
  // jd,
  // pahcz,
  // yiqianbao

  // jdWallet,
  // dazhong,
  // suning
])
