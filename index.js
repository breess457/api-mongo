import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import Users from "./routes/Users.js";
import mongoose from "mongoose";import path,{dirname} from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname + "xx")

const server = express()
const PORT = process.env.PORT || 3010
const corsOptions = {
    origin:"http://localhost:3011"
}

mongoose.connect('mongodb://127.0.0.1:27017/my_of_user',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    }else {
        console.log('Error in DB connection : ' + err)
    }
})
mongoose.Promise = global.Promise
server.use(function(req, res, next){
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
    next()
})
server.use(cors(corsOptions))
server.use(express.static('public'))
server.use(express.static('uploads'))

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))

server.use((err, req, res, next)=>{
    res.status(422).send({error: err.message})
})

server.use('/', Users)

server.listen(PORT,()=>{
    console.log(`start server on port ${PORT}`)
})