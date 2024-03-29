import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    try {
        app.listen(process.env.PORT || 8000, () => {
            console.log(` Server is running at port : ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Some Error in server listen", error)
    }
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err)
})





/*
import express from "express"
const app = express()

This is a ifi function -- create a function and exicute imideteli  ;(() => {})()  --; sure that this is a new line

;( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERRR: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERROR: ", error)
        throw err
    }
})()

*/