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
    }
})

const Recipe = mongoose.model("recipe", recipeSchema)
export default Recipe