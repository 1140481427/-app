//app.js
App({
  onLaunch(options) {
    console.log("触发onLaunch方法");
  },
  onShow(options) {
    console.log("触发onShow方法");
  },
  onHide() {
    console.log("触发onHide方法");
  },
  onError(msg) {
    console.log(msg)
  },
  globalData: 'I am global data',
  courseName:'实战课程'
})