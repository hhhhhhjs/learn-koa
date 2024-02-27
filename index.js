import Koa from 'koa'
import router from './src/middleware/router.js'
// import { valid } from './src/middleware/valid.js'
import { koaBody } from 'koa-body'

// 1. server即为文档中的application对象
const server = new Koa()




//一、验证用户是否合法
// server.use(valid)
//二、处理业务逻辑
server.use(koaBody({
    multipart:true, //koa-body 默认的multipart/formdata格式不支持，需要在这里手动打开
    formidable:{
        uploadDir:`${process.cwd()}/picture`, //上传目录,自己随便给,这里为进程的启动目录和文件夹拼接
        maxFieldsSize: 2* 1024 * 1024,  //这里大小为2mb
        keepExtensions:true, //是否保持扩展名
        onFileBegin: (name,file) => {
            //生成新的文件名
            const fileName = `tuchuang${file.newFilename}`


            //filepath:  c:/user/dalina/project/beingthink/learn-koa-03/2220909.png
            //file.newFilename
            file.filepath = `${file.filepath.replace(file.newFilename,fileName)}`
            //这里的newfilename是前端传递文件后koa生成的，可以在file.newfilename中查看
            //就是前端上传文件后又生成的name，也就是上面的filename的最后一个文件名
        }
      }
}))
server.use(router.routes()/**所有的路由示例 */)
      .use(router.allowedMethods()/**响应的时候给头部增加字 */)


server.listen(8080,'127.0.0.1', () => {
    console.log('成功启动服务器')
})