import Koa from 'koa'
import router from './src/middleware/router.js'
import { valid } from './src/middleware/valid.js'

// 1. server即为文档中的application对象
const server = new Koa()




//一、验证用户是否合法
server.use(valid) 
//二、处理业务逻辑
server.use(router.routes()/**所有的路由示例 */)
      .use(router.allowedMethods()/**响应的时候给头部增加字 */)


server.listen(8080,'127.0.0.1', () => {
    console.log('成功启动服务器')
})