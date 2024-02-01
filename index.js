import Koa from 'koa'

const server = new Koa()

server.use((ctx) => {
    ctx.body = 'hello world'
}) 
server.listen(8080,'127.0.0.1', () => {
    console.log('成功启动服务器')
})