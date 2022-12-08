
import express from "express";
import getUserPage from "../controllers/UserController.js";
import getAboutPage from "../controllers/About.Controller.js";
import postUserLogin from "../controllers/UserPost.Controller.js";
import putUserLogin from "../controllers/UserPut.controller.js";
import testImages from "../controllers/test.controller.js";
import libsetup from "../middleware/upload.js";
import fs from "fs"
import path from "path";

const route = express.Router()

route.get('/', function(req, res, next){
    res.send(`Hello my Page Altimate`)
})
route.get('/about/', getAboutPage)
route.get('/userbyId/:_id', getUserPage)

route.post('/postuser', libsetup.upload.single('photo'),(req, res, next)=>{
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
    //console.log(obj)
})

route.put('/edituser/:_id', putUserLogin)

route.post('/testimgpost/', libsetup.testupload,testImages)

export default route