import Koarouter from 'koa-router'
import path from 'node:path'
import fs from 'node:fs'
import { getMimetype } from '../mime/mime.js'
import { createUser } from '../../database/data.js'

const router =  Koarouter()
//注册路由表

//这里koa将路径当中某一个值当作变量，声明叫做userId,这时候koa会将其解析为路径参数
router.post('/api/:userId',(ctx) => {
    ctx.body = '根路径'
    console.log(ctx.params)
    ctx.req.on('api/data',(chunk) => {  //这里是监听req的data事件
        console.log(chunk)
    })
    console.log(ctx.request.body) //这里就直接是请求的数据
    // request是koa封装出来的对象，而req是nodejs原生的对象
    // ctx.request.body用于获取请求体中的数据

    //koa中的req就代表原生nodesjs中的req
    ctx.req.pipe()
})
router.get('/login',(ctx) => {
    ctx.body = '登录'
    // 1.与前端定义出出口处的请求方法，请求路径和请求参数
    // 2.取参数，参数校验(必选参数，参数类型，可选参数)参数校验框架
    // 3.业务逻辑(如果逻辑复杂，做好逻辑拆分)
    // 3.1 操作数据库
    // 4.给前端返回数据(ctx.body = {code:0,data:{},msg:'ok')
    // 4.1 不同错误类型，需要定义错误码
    ctx.req.pipe()  //pipe到本地的可写流
})
router.get('/api/home',(ctx) => {
    ctx.body = '主页'
})
router.get('/:filename',(ctx) => {
    try{
        const filename = ctx.params.filename
        console.log(ctx.params)

        //数据库中有好多文件，这里是用于定位用户想要下载哪个文件,query是查询参数
        //query.file取的是查询参数中的文件
        //用户可以直接在查询参数中写想要的文件名
        const filepath = path.join(process.cwd(),`picture/dist/${filename}`)
        //这里用于拼接文件路径
        console.log(filepath)
        ctx.set('Content-Type',getMimetype(filepath))
        //如果文件是index.html,我们希望预览html文件，那么需要手动设置context-type
        const fileRS = fs.createReadStream(filepath)
        ctx.body = fileRS
    }catch(error){
        ctx.body = {
            code:404,
            msg:'文件不存在'
        }
    }
    
})
router.get('/:filename/:other',(ctx) => {
    const filename = ctx.params.filename
    const othername = ctx.params.other
    console.log(ctx.params)

    const filepath = path.join(process.cwd(),`picture/dist/${filename}/${othername}`)

    console.log(filepath)
    ctx.set('Content-Type',getMimetype(othername))
   
    const fileRS = fs.createReadStream(filepath)
    ctx.body = fileRS
})
router.post('upload',(ctx) => {

})
router.post('/api/register/zhuce',async (ctx) => {
    // 1.获取参数
    const { username , password } = ctx.request.body
    // 2.参数校验
    if(username && password){
        // 保存用户信息
        createUser({usernmae:username,password:password})
        ctx.body = {
            code:0,
            msg:'ok',
            data:null
        }
    }else{
        ctx.body = {
            code:-1,
            msg:'用户名不存在或者密码不正确',
            data:null
        }
    }
})
export default router



/**ctx.body是响应的数据，而不是请求体中的数据，
 * koa中没有做请求体(body)的解析，这是因为body的大小不可控，
 * 如果body是一个文件，那么内存消耗太高*/