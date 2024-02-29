import mongoose from "mongoose";
import  Jwt  from "jsonwebtoken";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity"

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})
// generate token
userSchema.methods.generateAuthToken = function(){
    const token = Jwt.sign({_id: this._id}, process.env.JWT_PRIVATE_KEY, {
        expiresIn: '1d'
    })
    return token
}

// validate user data
const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().email().label("Email"),
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        password: passwordComplexity().required().label("Password")    
    })
    return schema.validate(data)
}
const User = mongoose.model("user", userSchema)

export default {User, validate}