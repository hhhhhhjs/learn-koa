import Koarouter from 'koa-router'

const router = Koarouter()
//注册路由表

//这里koa将路径当中某一个值当作变量，声明叫做userId,这时候koa会将其解析为路径参数
router.post('/:userId',(ctx) => {
    ctx.body = '根路径'
    console.log(ctx.params)
    ctx.req.on('data',(chunk) => {  //这里是监听req的data事件
        console.log(chunk)
    })
    console.log(ctx.request.body) //这里就直接是请求的数据
 

    //koa中的req就代表原生nodesjs中的req
    ctx.req.pipe()
})
router.get('/login',(ctx) => {
    ctx.body = '登录'
})
router.get('/home',(ctx) => {
    ctx.body = '主页'
})
export default router



/**ctx.body是响应的数据，而不是请求体中的数据，
 * koa中没有做请求体(body)的解析，这是因为body的大小不可控，
 * 如果body是一个文件，那么内存消耗太高*/