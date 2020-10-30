module.exports = {
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
