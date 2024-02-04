import jwt from 'jsonwebtoken'

const sercet = 'HJHJKSDGHKS'

function createToken(id){
    return jwt.sign({
        userid: id,
        exp: Math.floor(Date.now() / 1000) + (1)
    },sercet)
}
 
console.log(createToken('huang'))
const t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJodWFuZyIsImV4cCI6MTcwNzAzNzc5NiwiaWF0IjoxNzA3MDM3Nzk1fQ.Kl7SQ8I62YxEacv_zCK8i4hFnEo4A0Shno19JC4WS0M'

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