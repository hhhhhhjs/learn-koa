//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJoaGhoaGhqcyIsImlhdCI6MTcwNjg2OTYzNX0.HiZCd98IS1CsAsy7i3zHiWpgoL3EYOdzg1YagNjZS0w
import jwt from 'jsonwebtoken'
const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
const palyload = 'eyJ1c2VyaWQiOiJoaGhoaGhqcyIsImlhdCI6MTcwNjg2OTYzNX0'
const sign = 'HiZCd98IS1CsAsy7i3zHiWpgoL3EYOdzg1YagNjZS0w'
const sercet = 'HJHJKSDGHKS'

const tt = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJoaGhoaGhqcyIsImlhdCI6MTcwNjg2OTYzNX0.HiZCd98IS1CsAsy7i3zHiWpgoL3EYOdzg1YagNjZS0w`


const Token  = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJoaGhoaGhqcyIsImV4cCI6MTcwNjg3NDc0NywiaWF0IjoxNzA2ODcxMTQ3fQ.dhlq4laMZQFk3bf81tfPxOkfDON48fdZfQXjE
yOymdo`

console.log(Buffer.from(header,'base64').toString())
console.log(Buffer.from(palyload,'base64').toString())
console.log(Buffer.from(sign,'base64').toString())

//给你两个日期，如可计算两个日期之间相差多少天
const data = new Date(1706869635)
console.log(`${data.getFullYear()}-${data.getMonth()}-${data.getDate()}`)
function validToken(token){
    try {
        const decoded = jwt.verify(token,sercet)
    console.log(decoded)
    } catch(err){
        console.log('错误')
    }
}
validToken('yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJoaGhoaGhqcyIsImlhdCI6MTcwNjg2OTYzNX0.HiZCd98IS1CsAsy7i3zHiWpgoL3EYOdzg1YagNjZS0w')