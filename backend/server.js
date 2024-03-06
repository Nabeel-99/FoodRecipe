import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import recipeRoutes from "./routes/recipeRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import path from "path"


dotenv.config()
const __dirname = path.dirname(new URL(import.meta.url).pathname)
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))



// routes
app.use("/api/foodrecipe", recipeRoutes)
app.use("/api/users", userRoutes)


// database connection
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("database connected")
    // listen to port
    app.listen(process.env.PORT, () => {
        console.log(`Listening to port on ${process.env.PORT} `)
    })
}).catch(err => console.error(err))
