import multer from 'multer'
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png': 'png'
}
const Strong = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "uploads")
    },
    filename:(req, file, cb)=>{
        cb(null, file.fieldname + '-' + Date.now())
    }
})
const upload = multer({strong:Strong})



const testStrong = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, ('upload/test'))
    },
    filename:(req, file, cb)=>{
        console.log(file)
        cb(null, `${file.filename}-${Date.now()}`)
    }
})

const testupload = multer({strong:testStrong}).single('testimg')
const libsetup = {
    upload,
    testupload
}
export default libsetup