const maid = getMaid('com.jingdong.app.mall')

function task () {
  maid.launch()
  waitForActivity('com.jingdong.app.mall.MainFrameActivity')
  sleep(2000)
  const couponBtn = text('领券').findOnce()
  couponBtn && couponBtn.parent().click()
  waitForActivity('com.jd.lib.newcoupon.activity.NewCouponCenterActivity')
  sleep(2000)
  const upBtn = text('立即签到').findOnce()
  upBtn && upBtn.click()
  maid.close()
}

module.exports = task
