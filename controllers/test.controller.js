import imageTest from "../config/db.Testdb.js";
import libsetup from "../middleware/upload.js";
import fs from "fs"
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function testImages(req, res, next){
    
    const objects = {
        testname: req.body.testname,
        testimg:{
            data:fs.readFileSync(path.join(__dirname + '/upload/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imageTest.create(objects,(err, item)=>{
        if (err) {
            console.log(err);
        }
        else {
            res.json({
                message: "insert success",
                item
            })
        }
    })
    /* const newInsertImg = new imageTest(objects)
        newInsertImg.save().then(data => res.json({
            massege:"insert imgae success fully!!",
            data
        })).catch(errs => console.log(errs)) */
    /* libsetup.testupload(req, res, (err)=>{
        if(err){
            console.log(err)
        }else{
            const newImgtest = new imageTest({
                testname: req.body.testname,
                testimg:{
                    data: req.file.buffer,
                    contentType: "image/png"
                }
                
            })
            console.log(req.file.filename)
            console.log(req.body)
            
            newImgtest.save()
            .then((data)=> res.json({
                massege:"insert imgae success fully!!",
                data
            })).catch(errs => console.log(errs))
        }
    }) */
}

export default testImages