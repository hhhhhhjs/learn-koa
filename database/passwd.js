import crypto from 'crypto'


function getsha256(str){
   const  hash = crypto.createHash('sha256');
   const code = hash.update(str);
   const dirm = hash.digest(code);
   return dirm.toString('hex')
   
}

export default getsha256