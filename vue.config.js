module.exports = {
  lintOnSave: false,
  devServer: {
    port: 5777,
    proxy:{
      '/api':{
        target: 'http://localhost:4777',
        pathRewrite:{
          "^/api": ""
        }
      }
    },
    open: true
  }
}