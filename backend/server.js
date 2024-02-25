import * as dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import userModel from "./model/clientModel.js"


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

// login authentication
app.post('/signin',(req, res) => {
    const {loginEmail, loginPassword} = req.body
    if(!loginEmail || !loginPassword){
        return res.status(400).json({error: "Missing fields"})
    }
    userModel.findOne({email: loginEmail})
    .then(user => {
        if(user){
            if(user.password === loginPassword){
                res.json("Success!")
            }else{
                res.json("Wrong password!")
            }
        }else {
            res.json("No record exists")
        }
    })
})

// signup authentication
app.post('/signup', (req, res) => {
    // destructed the input
    const {firstName, lastName, email, password} = req.body
    if(!email || !firstName || !lastName || !password){
        return res.status(400).json({error: "All fields are required"})
    }
    userModel.create({firstName, lastName, email, password})
    .then(user => res.json(`user created successfully: ${user}`))
    .catch(err => res.json(`error creating user: ${err}`))
    
})
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("database connected")
    app.listen(process.env.PORT, () => {
        console.log(`Listening to port on: ${process.env.PORT}`)
    }) 
}).catch(err => console.log(err))