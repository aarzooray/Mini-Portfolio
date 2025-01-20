import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
const app = express();

dotenv.config({
    path:'/.env'
})

app.use(cors({
    origin:process.env.ORIGIN,
    credentials:true
}))



app.use(express.json({limit:"17KB"}))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


import clientInfo from "./controllers/client.controllers.js";
import client from "./models/client.models.js";
const clientName = "";


function clientFun(req,res){

}
app.post('/clientInfo',
    async (req,res)=>{
    const {name,phonenumber,email,companyagencyname,aboutwork} = req.body;
    if([name,email,aboutwork].some((field)=> field?.trim==="")){
        res.status(400)
        .message("Name, Email and About Work is must")
    }


   const user = await  client.create({
        name:name,
        phonenumber:phonenumber,
        email:email,
        companyName:companyagencyname,
        message:aboutwork
    })


    if(!user){ res.status(500).message("Data didn't sent")}

    res.redirect('/message')



    // export {name}
}
);

app.get('/api',(req,res)=>{

})
export {app}