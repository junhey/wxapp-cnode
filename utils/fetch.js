// get请求方法
  function fetchGet(url, callback) {
    // return callback(null, top250)
    wx.request({
      url: url,
      header: { 'Content-Type': 'application/json' },
      success (res) {
        callback(null, res.data)
      },
      fail (e) {
        console.error(e)
        callback(e)
      }
    })
  }

  // post请求方法
  function fetchPost(url, data, callback) {
    wx.request({
      method: 'POST',
      url: url,
      data: data,
      success (res) {
        callback(null, res.data)
      },
      fail (e) {
        console.error(e)
        callback(e)
      }
    })
  }

  module.exports = {
    // METHOD
    fetchGet: fetchGet,
    fetchPost: fetchPost
  }
