import crypto from 'crypto'
const  hash = crypto.createHash('sha256');

function getsha256(str){
   const code = hash.update(str);
   const dirm = hash.digest(code);
   return dirm.toString('hex')
   
}

export default getsha256