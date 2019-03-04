
Page({
  data: {
    motto: 'Hello World',
    color:"red"
  },
  onLoad() {
    var appInstance = getApp()
    console.log(appInstance.courseName);
    this.setData({
      motto: appInstance.courseName
    });
  }
})
