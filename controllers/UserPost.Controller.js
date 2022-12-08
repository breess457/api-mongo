import UserLogin from "../config/db.schema.js";
import libsetup from "../middleware/upload.js"
import fs from "fs"
import path from "path";

export default function postUserLogin(req, res, next){
    
    const obj = {
        username: req.body.username,
        password: req.body.password,
        roll: req.body.roll,
        present: req.body.present,
        userstatus: req.body.userstatus,
        profile:{
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address:["59/1","m5","bana","city","pattani","94000"],
            age: req.body.age,
            sex: req.body.sex,
            photo: {
                data: fs.readFileSync(path.join(__dirname + "/uploads/" + req.file.filename)),
                contentType: "image/png"
            }
        }
    }
    console.log()
    UserLogin.create(obj, function (err, item){
        if(err){
            console.log(err)
        }else{
            res.json({ data: item })
            console.log(item)
        }
    })

}