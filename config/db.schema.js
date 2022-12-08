import mongoose from "mongoose";
const Schema = mongoose.Schema

const UserLoginSchema = new Schema({
    username:{type:String},
    password:{type: String},
    roll:{
        type: String,
        required:[true, 'Roll field is required']
    },
    present:{
        type: Boolean,
        default: true
    },
    userstatus:{
        type: Number,
        default: 1
    },
    profile:{
        firstname:{type: String},
        lastname:{type: String},
        address:[{type:String},{type:String},{type:String},{type:String},{type:String},{type:String}],
        age:{type:Number},
        sex:{type:String},
        photo:{
            data:Buffer,
            contentType:String
        }
    }
})
const UserLogin = mongoose.model('userlogin', UserLoginSchema)

export default UserLogin