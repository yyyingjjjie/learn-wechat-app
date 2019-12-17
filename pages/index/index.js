// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serviceName: "",
    serviceFirstName: "",
    serviceUrlList: [],
    paths: [],
    name: "Jay",
    count: 0,
    ip: "http://117.25.182.74:38641/",
    serviceTitleList: [{
      flag: 'basic',
      module_name: "基础服务",
      urlList: ["authorityservice/v2/api-docs", "searchservice/v2/api-docs"],
      children: [{
        childName: '权限服务',
        childEName: 'authorityservice',
      }, {
        childName: '搜索服务',
        childEName: 'elasticsearch-controller'
      }]
    }, {
      flag: 'assetservice',
      module_name: "电网资产中心",
      urlList: ["assetservice/v2/api-docs"],
      children: [{
        childName: '资产维护服务',
        childEName: 'AssetMaintenanceService'
      }, {
        childName: '资产查询服务',
        childEName: 'AssetQueryService'
      }]
    }, {
      flag: 'Resource',
      module_name: "电网资源中心",
      urlList: ["queryservice/v2/api-docs", "dataservice/v2/api-docs"],
      children: [{
        childName: '资源编辑服务',
        childEName: 'version'
      }, {
        childName: '资源查询服务',
        childEName: 'ResourceQueryService'
      }, {
        childName: '资源关系服务',
        childEName: 'ResourceRelationService'
      }]
    }, {
      flag: 'powergridtoposervice',
      module_name: "电网拓扑中心",
      urlList: ["powergridtoposervice/v2/api-docs"],
      children: [{
        childName: '拓扑关系服务',
        childEName: 'TopologyRelationalServices'
      }, {
        childName: '拓扑分析服务',
        childEName: 'TopologyAnalysisService'
      }]
    }, {
      flag: 'gisgraphicsservice',
      module_name: "GIS图形中心",
      urlList: ["gisgraphicsservice/v2/api-docs"],
      children: [{
        childName: '图形查询服务',
        childEName: 'MapService'
      }, {
        childName: '图形数据服务',
        childEName: 'GraphicDataService'
      }, {
        childName: '图形空间分析服务',
        childEName: 'SpatialAnalyService'
      }]
    }, {
      flag: 'metadataservice',
      module_name: "模型管理中心",
      urlList: ["metadataservice/v2/api-docs"],
      children: [{
        childName: '模型查询服务',
        childEName: 'ModelQueryService'
      }, {
        childName: '模型校检服务',
        childEName: 'ModelCheckingService'
      }, {
        childName: '模型定义服务',
        childEName: 'ModelDefinitionService'
      }, {
        childName: '模型转换服务',
        childEName: 'ModelTransferService'
      }]
    }, {
      flag: 'measurpointservice',
      module_name: "测点管理中心",
      urlList: ["measurpointservice/v2/api-docs"],
      children: [{
        childName: '测点信息编辑服务',
        childEName: 'MeasurPointInfoEditService'
      }, {
        childName: '测点信息查询服务',
        childEName: 'MeasurPointInfoQueryService'
      }, {
        childName: '测点信息分析服务',
        childEName: 'MeasurPointInfoAnalyService'
      }]
    }, {
      flag: 'powergridanalyservice',
      module_name: "电网分析中心",
      urlList: ["powergridanalyservice/v2/api-docs"],
      children: [{
        childName: '电网运行方式分析服务',
        childEName: 'PowerOperModeAnalyService'
      }, {
        childName: '电网运行状态分析服务',
        childEName: 'PowerOperStatusAnalyService'
      }, {
        childName: '电网可靠性分析服务',
        childEName: 'PowerReliabilityAnalyService'
      }, {
        childName: '综合能源接入服务',
        childEName: 'IntegratedEnergyAccessService'
      }, {
        childName: '电网经济运行分析服务',
        childEName: 'PowerEconomicOperAnalyService'
      }]
    }, {
      flag: 'equipstatusservice',
      module_name: "设备状态中心",
      urlList: ["equipstatusservice/v2/api-docs"],
      children: [{
        childName: '设备本体状态评价服务',
        childEName: 'EquipOntologyStatusEvaluService'
      }, {
        childName: '设备运行状态分析服务',
        childEName: 'EquipOperStatusAnalyService'
      }, {
        childName: '设备状态综合分析服务',
        childEName: 'EquipStateCompreAnalyService'
      }, {
        childName: '设备状态辅助分析服务',
        childEName: 'EquipStatusAssistedService'
      }]
    }, {
      flag: 'operresourceservice',
      module_name: "作业资源中心",
      urlList: ["operresourceservice/v2/api-docs"],
      children: [{
        childName: '车辆资源服务',
        childEName: 'VehicleResManagementService'
      }, {
        childName: '工器具仪器仪表资源服务',
        childEName: 'ToolsAndInstrumentsResManagementService'
      }, {
        childName: '作业机器人资源服务',
        childEName: 'OperRobotResManagementService'
      }, {
        childName: '作业人员资源服务',
        childEName: 'OperPersonResManagementService'
      }, {
        childName: '作业无人机资源服务',
        childEName: 'OperUAVResManagementService'
      }]
    }, {
      flag: 'opermanagementservice',
      module_name: "作业管理中心",
      urlList: ["opermanagementservice/v2/api-docs"],
      children: [{
        childName: '带电作业记录管理服务',
        childEName: 'LiveJobRecordManagementService'
      }, {
        childName: '检修计划管理服务',
        childEName: 'MaintenancePlanManagementService'
      }, {
        childName: '抢修信息管理服务',
        childEName: 'RepairInforManagementService'
      }, {
        childName: '试验报告管理服务',
        childEName: 'TestReportManagementService'
      }, {
        childName: '修试记录管理服务',
        childEName: 'TrialRecordManagementService'
      }, {
        childName: '两票信息管理服务',
        childEName: 'TwoTicketsInfoManagementService'
      }, {
        childName: '操作术语生成服务',
        childEName: 'OperTerminologyGenerService'
      }, {
        childName: '检测记录管理服务',
        childEName: 'DetectRecordManagementService'
      }, {
        childName: '缺陷记录管理服务',
        childEName: 'DefectRecordManagementService'
      }, {
        childName: '巡视记录管理服务',
        childEName: 'PatrolRecordManagementService'
      }, {
        childName: '隐患记录管理服务',
        childEName: 'HiddenRecordManagementService'
      }]
    }]
  },
  searchAllService() {
    let urlLength = new Array();
    let obj = {};
    let _this = this;
    this.data.serviceTitleList.forEach((item, index) => {
      urlLength = urlLength.concat(item.urlList);
    })
    urlLength.forEach((it, ix) => {
      wx.request({
        url: this.data.ip + it,
        success: res => {
          if (res.statusCode == 200) {
            obj = Object.assign(obj, res.data.paths);
            _this.setData({
              paths: obj
            })
          }
        }
      })
    })
  },
  getUrlByService(getdata) {
    let eName = getdata.currentTarget.dataset.ename;
    let name = getdata.currentTarget.dataset.name;
    let pName = getdata.currentTarget.dataset.pname;

    let _this = this;
    let values = Object.values(this.data.paths);
    let keys = Object.keys(this.data.paths);
    new Promise((resolve, reject) => {
      let ss = [];
      values.forEach((item, index) => {
        if (Object.values(item)[0].tags[0] == eName) {
          Object.values(item)[0].url = keys[index];
          ss.push(item)
        }
      })
      resolve(ss)
    }).then(res => {
      let urlValues = new Array();
      res.forEach((item, index) => {
        let o = {}
        o.method = Object.keys(item)[0].toUpperCase();
        o.url = Object.values(item)[0].url;
        o.summary = Object.values(item)[0].summary;
        o.parameters = Object.values(item)[0].parameters;
        if (Object.values(item)[0].description) {
          o.number = Object.values(item)[0].description.split("_")[0];
          o.version = Object.values(item)[0].description.split("_")[1];
        }
        urlValues.push(o);
      })
      _this.data.serviceName = name;
      _this.data.serviceFirstName = pName;
      _this.data.serviceUrlList = urlValues;
      wx.navigateTo({
        url: '../about/about?serviceName=' + name + '&serviceFirstName=' + pName + '&serviceUrlList=' + JSON.stringify(urlValues)
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.searchAllService()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})