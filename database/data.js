import {createConnection} from 'mysql2/promise'
import { v4 as uuidv4 } from 'uuid'
import getsha256 from './passwd.js'


// 数据库第一天可以查询，但是隔几天会出现报错
// 这时候排查是否是数据库连接断开
const mysql = await createConnection({
    host:'119.45.134.66',
    port:3306,
    user:'tuchuang',
    database:'tuchuang',
    password:'123456'
})

// 添加用户信息
async function createUser(user){
    // password不会直接放到数据库中
    const { username , password } = user
    const result = await mysql.execute('insert into user(uid,username,password) values (?,?,?)',[uuidv4(),username,getsha256(password)])
    console.log(result)
}


// const result  =  await mysql.execute('select * from user')
// console.log(result)

// await createUser({password:'151240',email:'1975800'})

// 打印出来的结果数组中有两个元素，第一个元素是结果集，第二个是对表的描述，即表中含有哪些字段
// createUser({username:'黄瑾',password:'12345688'})

export {
    createUser
}