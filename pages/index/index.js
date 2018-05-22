//index.js
//获取应用实例
var app = getApp()
Page({

  data: {
    motto: '天航',
    userInfo: {},
    defaultSize: 'default',
    disabled: false,
    iconType: 'info_circle',
    
    src: '/pages/index/logo.png'

  
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toCalc: function () {
    wx.navigateTo({
      url: '../calc/calc'
    })
  },
  toForm: function () {
    wx.navigateTo({
      url: '../form/form'
    })
  },
  toJD: function () {
    wx.navigateTo({
      url: '../jiaodao/jiaodao'
    })
  },
  toGFN: function () {
    wx.navigateTo({
      url: '../gfn/gfn'
    })
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '天航滨海公司小程序',
      path: '/page/index/index',
      desc: '计算',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }


})
