function valid( ctx ,next){
    /**2. ctx即为文档中的context对象 */ 
        //3. ctx.resquest 即为文档中的request对象
        //4. ctx.response 即为文档中的response对象
      if(true){
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