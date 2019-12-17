// pages/about/about.js
const { $Toast } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serviceUrl:[],
    name:"",
    firstName:"",
    ip: "http://117.25.182.74:38641/",
    serviceVersion:"1.0.1"
  },
  chooseDetailByUrl(data){
    let apiNumber = data.currentTarget.dataset.number;
    let urlItem = data.currentTarget.dataset.url;
    let desc = data.currentTarget.dataset.desc;

    let url = this.data.ip + "queryservice/queryJson/findJson?resourcesNum=" + apiNumber;
    let publicData,requestData,responseData,abnormalData,requestSample,responseSample;
    new Promise((resolve,reject)=>{
      wx.request({
        url: url,
        success: res => {
          if (res.data.success == true && res.data.resultValue.length > 0) {
            resolve(res)
          } else {
            $Toast({
              content: '暂无相关配置',
              type: 'warning'
            });
            reject('none')
          }
        }
      })
    }).then(res=>{
      wx.navigateTo({
        url: '../detail/detail?resData=' + encodeURIComponent(JSON.stringify(res)) + '&name=' + this.data.name + '&firstName=' + this.data.firstName + "&number=" + apiNumber
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name:options.serviceName,
      firstName:options.serviceFirstName,
      serviceUrl:JSON.parse(options.serviceUrlList)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})