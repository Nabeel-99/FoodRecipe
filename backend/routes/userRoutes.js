import express from "express"
import { authenticateUser, createUser} from "../controllers/userController.js";

const router = express.Router()

router.post("/signup", createUser)
router.post("/signin", authenticateUser)

export default router