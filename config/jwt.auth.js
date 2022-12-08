import Jwt from "jsonwebtoken";
import UserLogin from "./db.schema";

let xs = {
    secred:"bezkoder-secret-key"
}

const verifyToken = function(req,res, next){
    let token = req.headers["x-access-token"];
     if(!token){
         return res.status(403).send({message:"not token provided!"})  
     }
      Jwt.verify(token,xs.secred,function(err, decoded){
          if(err){
              return res.status(401).send({message: "Unauthorized!"})
          }
          req._id = decoded._id
          next()
      })
}
const isAdmin = function(req, res, next){
    UserLogin.findById(req._id).exec((err, user)=>{
        if(err){
            res.status(500).send({message:err})
            return;
        }
    })
}

const authJWT = {verifyToken, isAdmin}

export default authJWT;