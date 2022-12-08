import UserLogin from "../config/db.schema.js"

export default function getAboutPage(req, res, next){
    UserLogin.find({}).then((user)=>{
        res.send(user)
    }).catch(next)
}
