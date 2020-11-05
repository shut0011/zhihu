const { pathToFileURL } = require('url')

require('events').EventEmitter.defaultMaxListeners = 0
const path = require('path')

module.exports = {
  publicPath: './',
  // index: path.resolve(__dirname, '../dist/index.html'),
  // assetsRoot: path.resolve(__dirname, '../dist'),
  // assetsSubDirectory: 'static',
  // assetsPublicPath: './',
  // //部署应用包时的基本 URL
  // publicPath: process.env.NODE_ENV === "production" ? "././" : "/",
  // //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  // outputDir: 'dist',
  // //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  // assetsDir: 'assets',
  // // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
  // lintOnSave: true,
  // //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
  // runtimeCompiler: true,
  // // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾  
  // productionSourceMap: true,
  // configureWebpack: config => {
  //     if (process.env.NODE_ENV === 'production') {
  //         // 为生产环境修改配置...
  //     } else {
  //         // 为开发环境修改配置...
  //     }
  // },
   
  devServer: {
    proxy: {
      '/users': {
        target: 'http://127.0.0.1:3000'
      },
      '/imgs': {
        target: 'http://127.0.0.1:3000'
      },
      '/articles': {
        target: 'http://127.0.0.1:3000'
      },
      '/statuses': {
        target: 'http://127.0.0.1:3000'
      },
      '/questions': {
        target: 'http://127.0.0.1:3000'
      },
      '/comments': {
        target: 'http://127.0.0.1:3000'
      },
      '/answers': {
        target: 'http://127.0.0.1:3000'
      },
      '/hot-list-web': {
        target: 'https://www.zhihu.com/api/v3/feed/topstory/',
      },
      '/moments': {
        target: 'https://www.zhihu.com/api/v3/',
      },
      '/recommend': {
        target: 'https://www.zhihu.com/api/v3/feed/topstory/'
      }
    }
  }
}
