module.exports = {
  devServer:{
    port:8000,
    open:true,
    // host:'127.0.0.1',
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        changeOrign:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}