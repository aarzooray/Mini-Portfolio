import { app } from "./app.js";
import dbConn from "./db/index.js";
import path, { dirname } from "path"
import { fileURLToPath } from "url"
import express from "express"



const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = path.join(__dirname,"..");

app.use(express.static(path.join(rootDir,'public')))


dbConn()
    .then(() => {
        app.listen(process.env.PORT || 3405, () => {
            console.log(`Server is listening at http://localhost:${process.env.PORT}`)
        })

        app.get('/',(req,res)=>{
            res.sendFile(path.join(rootDir,'public','html','index.html'))
        })


    })
    .catch((err)=>{
        console.log(`DB not Connected!!`,err)
    })


    app.get('/message',(req,res)=>{
        res.sendFile(path.join(rootDir,'public','html','message.html'))
    })
    app.get('/home',(req,res)=>{
        res.sendFile(path.join(rootDir,'public','html','index.html'))
    })