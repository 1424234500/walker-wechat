const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
    , nexs : [
      {"key":"2", "value":""}
      , {"key":"8", "value":""}
      , {"key":"16", "value":""}
      , {"key":"10", "value":""}
    ]
    , nexsMap : {
      "2":""
      , "8" : ""
      , "16" : ""
      , "10" : ""
    }
    , log: ""
    , log1: "123"
  }
  
  , bindViewAction: function() {
    this.log = "res "  + JSON.stringify(this.nexsMap)
    console.log(this.log)
    debugger
    this.log1 = "hhhhhd"
  }
  ,  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }



})
