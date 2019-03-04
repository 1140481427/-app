//index.js


Page({
  data: {
    motto: 'Hello World'
  },
  onLoad() {
    var appInstance = getApp()
    console.log(appInstance.courseName);
    this.setData({
      motto: appInstance.courseName
    });
  }
})
