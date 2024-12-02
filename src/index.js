import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import connectDB from"./db/index.js"
import dotenv from "dotenv"


// require('dotenv').config({path: './env'})
dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`server is running on port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
console.log("MONGO db connectio failed !!!", err);
})


/*import express from "express"
(async()=>{
    try {
     await   mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.error("Error:", error)
        throw err
    }
})()
    */