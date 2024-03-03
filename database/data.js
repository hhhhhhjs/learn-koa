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
    return result[0].affectedRows === 1
}


// const result  =  await mysql.execute('select * from user')
// console.log(result)

// await createUser({password:'151240',email:'1975800'})

// 打印出来的结果数组中有两个元素，第一个元素是结果集，第二个是对表的描述，即表中含有哪些字段
// createUser({username:'黄瑾',password:'12345688'})

// 分页获取图片
async function getimglist(ps,pn){
    const [rows] = await mysql.execute('select * from picture order by pid limit ? offset ?',[`${ps}`,`${ps * (pn - 1)}`])
    //这里 limit 和 offset 要给字符串 
    //传过来的参数是一页多少，第几页
    console.log(rows)
    return rows
}

// 插入图片
async function createimg(imgName,size,link){
    await mysql.execute('insert into picture(pid,p_name,size,link) values(?,?,?,?)',[uuidv4(),imgName,size,link])
    // console.log(rows)
}
// for(let i = 0 ;i < 100 ; i++){
//     createimg('测试',100,'https://www.baidu.com')
// }
// await getimglist(10,2)
export {
    createUser,
    getimglist,
    createimg

}