import http from 'http'
import https from 'https'

export default {
  // 自定义的请求头
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'fetch',
    'cache-control': 'max-age=0'
    // Authorization: '_zap=68c46751-621a-408e-937d-48c1468c5c01; _xsrf=bLdEGGokrY5bWYoSSwn6Q2NQg2kULYaH; d_c0="ALCgxWDEtA6PTk-bE5LUXEaHWkcSJXIgnvg=|1545429243"; _ga=GA1.2.1037906558.1582793186; tshl=; tst=r; q_c1=f444d23ed8cc47579b7a5880f4944331|1603589985000|1545429347000; SESSIONID=Ka8JY7XmRlrlqwI9rDMtxbJDV6ecPEzrpVE44g31Bfb; JOID=VVATCkioiE7PNTQTTqZzFH-seHde7Od5j2gMRSz-6zKsTkdVeRJ7354-NRJLJ_QbW9Lnq8KrCLIKLe1J7AK1gGw=; osd=VFoUAU6pgknEMzUZSa11FXWrc3Ff5uByiWkGQif46jirRUFUcxVw2Z80MhlNJv4cUNTmocWgDrMAKuZP7Qiyi2o=; capsion_ticket="2|1:0|10:1603597159|14:capsion_ticket|44:ODc0YzZkMjZhNWZlNGI1MTgxOTY3ZjdiYmFhYTQzNjg=|c3f11a80334b50ed4eeaaf0b338f3ac8fbb28fc8defa42c0217dfe7acf089aa6"; z_c0="2|1:0|10:1603597166|4:z_c0|92:Mi4xMkV3NkJ3QUFBQUFBc0tERllNUzBEaVlBQUFCZ0FsVk5ia0dDWUFDZDhQdlU3eVNHNlFsRFdseEdnMmdaelk0RmdB|21d02b1ffdd5db04169305f56b3a66a5f59637384758465593aa70bed11b8397"; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1603593859,1603596255,1603596565,1603597444; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1603597444; KLBRSID=b33d76655747159914ef8c32323d16fd|1603597399|1603589984'
    // 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36'
  },
  // 超时设置
  timeout: 10000,
  // 跨域是否带Token
  withCredentials: true,
  // 响应的数据格式 json / blob /document /arraybuffer / text / stream
  // responseType: 'json',
  // 用于node.js
  httpAgent: new http.Agent({
    keepAlive: true
  }),
  httpsAgent: new https.Agent({
    keepAlive: true
  })
}
