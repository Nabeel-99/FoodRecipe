import express from "express"
import { createUser, loginUser, verifyToken} from "../controllers/userController.js";

const router = express.Router()

router.post("/signup", createUser) //user sign up
router.post("/signin", loginUser) //user sign in
router.get('/auth', verifyToken, (req, res) => {
    // verifying userToken and authenticating user
    res.status(200).json({message: 'Authenticated', userId: req.userId})
     
})

export default router