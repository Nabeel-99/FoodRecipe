import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    recipe: {
        type: [{String}],
        required: true
    },
    instruction: {
        type: [{String}],
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const Recipe = mongoose.model("Recipe", recipeSchema)
export default Recipe