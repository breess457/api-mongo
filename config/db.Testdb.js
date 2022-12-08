import mongoose from "mongoose";
const Schema = mongoose.Schema

const testDb = new Schema({
    testname :{
        type: String,
        required:true
    },
    testimg:{
        data: Buffer,
        contentType:String
    }
})

const imageTest = mongoose.model('testImagedb', testDb)
export default imageTest