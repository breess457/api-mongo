import UserLogin from "../config/db.schema.js";

export default function putUserLogin(req, res, next){
    const editId = req.body._id
    const position = UserLogin.findById((val)=>{
        return val._id == editId
    });
    console.log(UserLogin[position])
    UserLogin[position].username = req.body.username;
    UserLogin[position].password = req.body.password;
    UserLogin[position].roll = req.body.roll;
    UserLogin[position].present = req.body.present;
      return res.status(200).json({
          code: 1,
          message: 'OK',
          data:UserLogin
      })
}