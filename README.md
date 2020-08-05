# 嗷呜

> 基于 [AUTO.JS 8 PRO](https://pro.autojs.org/) 的安卓自动化脚本
>
> pro 版本需要购买，支持一下作者吧

version: 0.5.0

## 恶龙咆哮

由于精力有限，并没有提供打包好的安卓包可以用，也没有界面。需要使用的小伙伴需要自己有一定的编程和动手能力，欢迎开源大佬们贡献脚本。

!> 本软件仅供学习交流，请勿用与非法灰产，后果自负。

## 特点

- MIUI12 息屏状态下点亮屏幕，9 宫格键盘自动解锁（需要配置密码）
- 完成单个 APP 任务后强制结束 APP，避免占用过多的内存

### 支持系统

- MIUI12 - 小米 10 pro 亲测有效

若运行在非小米机型上，需要移除解锁屏幕的代码

### 目前可以执行的任务

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

## 如何使用

1. 手机上下载并登陆 autojs8 pro。需要给 autojs8 pro 设置后台启动、无障碍等权限（权限非常重要）
2. 将本仓库下载，使用 VSCode 等工具打开，在项目目录中建立 config.js 文件，并配置（配置内容在下方）
3. 根据自己的需要在 main.js 中修改需要执行的任务，也可以自己开发更多脚本
4. 在 VSCode 上安装 `Auto.js-Pro-Ext` 插件，并连接到手机，具体的使用教程请参考插件文档
5. 愉快的 run

```javascript
// config.js
module.exports = {
  unlockPassword: '123456', // 锁屏密码
}
```

## 开发小技巧

1. 通过 Android Studio 的 Device Monitor 来查看当前 activity 的布局，可以更精准的开发脚本
2. 进入 adb shell，使用`dumpsys activity | grep "mResu"`命令查看当前的 activity 名称

## 基于本项目开发更多脚本

### 注意项

1. better.js 文件是对 autojs 一些 API 的扩展、优化
2. autojs 对 es6 语法支持有限

### Script Example

```javascript
// 通过 getMaid(packageName) 来创建一个 APP 女仆，负责启动 APP、关闭 APP 等
const maid = getMaid('com.hundsun.winner.pazq')

function task() {
  // 启动 APP
  maid.launch()

  // 等待主页加载出来
  waitForActivity('com.hundsun.winner.pazq.ui.web.WebViewActivity')
  sleep(2000)

  // 寻找签到按钮并点击
  const upBtn = textMatches(/^签到.*/).clickable(true).findOnce()
  if (upBtn) {
    upBtn.click()
    sleep(1000)
    if (text('恭喜您获得').findOnce()) {
      log('平安证券 - 签到成功')
      return
    }
  }

  // 关闭APP，减少内存压力
  maid.close()
}

module.exports = task
```
