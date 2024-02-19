import { validtoken } from "../jwt/token.js" 
function valid( ctx ,next){
    /**2. ctx即为文档中的context对象 */ 
        //3. ctx.resquest 即为文档中的request对象
        //4. ctx.response 即为文档中的response对象


        //头部字段 ，koa header

        console.log(ctx.get('token'))
      if(validtoken(ctx.get('token'))){
        ctx.body = 'hello world'
        console.log(1)
        next()
      }else{
        ctx.body = '错误'
      }
    }
    export {
        valid
    }