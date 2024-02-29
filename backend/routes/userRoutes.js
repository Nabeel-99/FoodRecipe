import express from "express"
import { authenticateUser, createUser, getCurrentUser } from "../controllers/userController.js";

const router = express.Router()

router.get("/user",  getCurrentUser)
router.post("/signup", createUser)
router.post("/signin", authenticateUser)

export default router