import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import recipeRoutes from "./routes/recipeRoutes.js"

dotenv.config()

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// routes
app.use("/api/foodrecipe", recipeRoutes)

// database connection
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("database connected")
    // listen to port
    app.listen(process.env.PORT, () => {
        console.log(`Listening to port on ${process.env.PORT} `)
    })
}).catch(err => console.error(err))

