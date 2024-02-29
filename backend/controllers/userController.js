import Joi from "joi";
import userModel from "../model/userModel.js";
import bcrypt from "bcrypt"
import { response } from "express";
const {validate, User} = userModel
// create user
export const createUser = async (req, res) => {
    try {
        // check if user already exists
        const {email} = req.body
        const user = await User.findOne({email: email})
        if(user){
            return res.status(409).json({message: "User with given email already exist"})
        }
        // validate the data && check any errors
        const {error} = validate(req.body)
        if(error){
            return res.status(400).json({message: error.details[0].message})
        }
        // using SALT for enhanced security and bcrypt for hashed password
        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        // save user
        await new User({...req.body, password: hashPassword}).save()
        return res.status(200).json({message: 'user created successfully'})
    } catch (error) {
        return res.status(400).json({message: "Internal Server Error"})
    }
}

// export authenticate user
export const authenticateUser = async (req, res) => {
    try {
        // check if user exists so we can authenticate
        const {email} = req.body
        const user = await User.findOne({email: email})
        if(!user){
            return res.status(409).json({message: "Invalid Email or Password"})
        }
        // validate userLogin and check errors
        const {error} = validateUser(req.body)
        if(error){
            return res.status(400).json({message: error.details[0].message})
        }
        // compare passwords
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword){
            return res.status(409).json({message: "Invalid Email or Password"})
        }
        // create token for user
        const token = user.generateAuthToken();
        return res.status(200).json({token: token, message: "Logged in successfully"})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
    }
}

// validate user login func
const validateUser = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    })
    return schema.validate(data)
}

// get current user
export const getCurrentUser = async (req, res) => {
    try {
        // retrieve user id based on the authentication middleware
        const userId = req.user.id

        const user = await User.findById(userId)
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        //remove sensitive info of user(password..etc)
        return res.status(200).json({
            user: {
                _id : user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        })
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
    }
}