# 嗷呜

恶龙咆哮

> 基于 [AUTO.JS 8 PRO] 的自动化脚本

version: 0.4.1

## 支持

- 小米息屏状态下，9宫格键盘自动解锁

### APP

- 京东商城
  - 签到
- 京东金融-学生版
  - 签到领成长值
- LYNK&CO
  - 分享送 co 币
- 平安证券
  - 签到（需开启打开后自动进入签到）
- 壹钱包
  - 签到
- 云闪付
  - 签到
- KFC
  - 签到
- 中国联通
  - 签到
- 大众点评
  - 签到
- 平安好车主
  - 签到
- 苏宁
  - 签到
- 美团
  - 签到
- 海底捞
  - 签到
- 什么值得买
  - 签到

### 机型

- 小米 8 MIUI11

## 如何使用

1. 下载 autojs8 pro，pro 版本需要购买，支持一下作者吧
2. 将本仓库下载解压到手机中的 autojs 项目目录
3. 需要给 autojs8 pro 设置后台启动、无障碍等权限
4. 在项目目录中建立 config.js 文件，并导出配置

```
module.exports = {
  unlockPassword: '123456' // 锁屏密码
}
```

5. 愉快的 run

## 开发过程中的小技巧

1. 通过 Android Studio 的 Device Monitor 来查看当前 activity 的布局
2. 进入 adb shell，使用`dumpsys activity | grep "mResu"`命令查看当前的 activity 名称

## 开发更多脚本

### 注意项

1. better.js 文件是对 autojs 一些 API 的扩展、优化
2. autojs 对部分 es6 语法支持有限

### Script Example

```javascript
const maid = getMaid('com.hundsun.winner.pazq') // 通过 getMaid(packageName) 来创建一个 APP 女仆，负责启动 APP、关闭 APP 等

function task() {
  maid.launch()
  waitForActivity('com.hundsun.winner.pazq.ui.web.WebViewActivity')
  sleep(2000)
  let upBtn = textMatches(/^签到.*/)
    .clickable(true)
    .findOnce()
  if (upBtn) {
    upBtn.click()
    sleep(1000)
    if (text('恭喜您获得').findOnce()) {
      log('平安证券 - 签到成功')
      return
    }
  }
}

module.exports = task
```
