import express from "express"
import dotenv from "dotenv"
dotenv.config()

import cors from "cors"
import connectDB from "./Database/connectDB.js"
import userRoute from "./routes/userRoutes.js"

const app = express()
app.use(express.json())

app.use(cors())

app.use("/api/user",userRoute)

app.get("/",(req,res) =>{
    res.status(200).json({Message:"Api changed successfully"})
})

app.get("/api/heart-beat", (req,res)=>{
    res.status(200).json({data:"Heart beart was successful"})
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server running successfully at port ${process.env.PORT}`)
})

connectDB()