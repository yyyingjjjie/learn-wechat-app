// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    publicData:[],
    requestData:[],
    responseData:[],
    abnormalData:[],
    requestSample:"",
    responseSample:"",
    name:"",
    firstName:"",
    number:"",
    url:"",
    desc:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(JSON.parse(decodeURIComponent(options.resData)))
    let resData = JSON.parse(decodeURIComponent(options.resData)).data.resultValue[0]
    this.setData({
      publicData: JSON.parse(resData.publicData),
      requestData: JSON.parse(resData.requestData),
      responseData: JSON.parse(resData.responseData),
      abnormalData: JSON.parse(resData.abnormalData),
      requestSample: resData.requestSample,
      responseSample: resData.responseSample,
      number: options.number,
    //   url: options.url,
    //   desc: options.desc,
      firstName: options.firstName,
      name: options.name,
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