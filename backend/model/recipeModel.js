import mongoose from "mongoose";


const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    recipe: [{
        aisle: String
    }],
    instruction: [{
        instruction: String
    }],
    image: {
        type: String,
        required: true
    },
    userLikedItems: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const Recipe = mongoose.model("recipe", recipeSchema)
export default Recipe