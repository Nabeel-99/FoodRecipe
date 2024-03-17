import express from "express"
import { createUser, loginUser, logout, verifyToken} from "../controllers/userController.js";
import userModel from "../model/userModel.js";

const {User} = userModel

const router = express.Router()

router.post("/signup", createUser) //user sign up
router.post("/signin", loginUser) //user sign in
router.post('/signout', logout)
router.get('/auth', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        if(!user){
            return res.status(404).json({message: 'Invalid token'})
        }  
        // verifying userToken and authenticating user
        return res.status(200).json({message: 'Authenticated', userId: req.userId, firstName: user.firstName})
       
    } catch (error) {
        return res.status(500).json(error);
    }
   
})

export default router