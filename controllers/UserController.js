import UserLogin from "../config/db.schema.js"


export default function getUserPage(req, res){
    console.log(req.params._id)
   *  UserLogin.findById({_id: req.params._id}).then((data)=>{
        res.send(data)
    })
}