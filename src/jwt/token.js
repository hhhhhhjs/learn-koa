import jwt from 'jsonwebtoken'

const sercet = 'HJHJKSDH'

function createToken(id){
    return jwt.sign({
        userid: id,
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 60)
    },sercet)
}
 
console.log(createToken('heihei'))
const t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJoZWloZWkiLCJleHAiOjE3MDkxNjA4NTEsImlhdCI6MTcwODk0NDg1MX0.yzrtFjYbzhv5SV8gzWjssf4N7EV7XIgxHwb-vM8hIvQ'

function validtoken(token){
   try{
    const data = jwt.verify(token,sercet)
    console.log(data)
    return data
   }catch(err){
    console.log(err)
    return null
   }
}
validtoken(t)
export {
    createToken,
    validtoken
}
/**eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJoaGhoaGhqcyIsImV4cCI6MTcwNzAzOTIyOCwiaWF0IjoxNzA3MDM1NjI4fQ.VKfJSaXocMIEh40mzQRxyQRxF-s57HzkeDRJO
uka2pc */