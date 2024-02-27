import mime from 'mime'
function getMimetype(filename){
    return mime.getType(filename)
}1

export{
    getMimetype
}