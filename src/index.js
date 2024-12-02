import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import connectDB from"./db/index.js"
import dotenv from "dotenv"


// require('dotenv').config({path: './env'})
dotenv.config({
    path: './.env'
})

connectDB()


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