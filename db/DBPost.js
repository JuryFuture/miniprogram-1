/*var DBPost = function () {
  this.storageKeyName = 'postList'
}

DBPost.prototype = {
  getAllPostData: function () {
    var res = wx.getStorageSync(this.storageKeyName)
    if (!res) {
      res = require("../data/data.js").postList
      this.execSetStorageSync(res)
    }

    return res
  },

  execSetStorageSync: function (data) {
    wx.setStorageSync(this.storageKeyName, data)
  }
}

module.exports = {
  DBPost: DBPost
}*/

class DBPost {
  constructor(url) {
    this.srorageKeyName = 'postList';
  }

  getAllPostData() {
    var res = wx.getStorageSync(this.srorageKeyName);
    if (!res) {
      res = require("../data/data").postList;
      this.execSetStorageSync(res);
    }

    return res;
  }

  execSetStorageSync(data) {
    wx.setStorageSync(this.srorageKeyName, data)
  }
}

export {
  DBPost
}