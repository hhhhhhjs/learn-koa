import Koarouter from 'koa-router'

const router = Koarouter()
//注册路由表
router.get('/login',(ctx) => {
    ctx.body = '登录'
})
router.get('/home',(ctx) => {
    ctx.body = '主页'
})
export default router