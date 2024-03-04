import recipeModel from "../model/recipeModel.js"


// add to favorites tab
export const addToFavorites =  async (req, res) => {
    const {title, image, recipe, instruction} = req.body
    const userId = req.userId // to identify which user added the recipe
    try {
        const favorites = await recipeModel.create({
            title,
            image,
            recipe,
            instruction,
            user: userId
            
        })
        return res.status(201).json(favorites);
    } catch (error) {
        console.log(error)
        return res.status(400).json({error, user: userId})
        
    }
}

// remove from favorites
export const removeFromFavorites = async (req, res) => {
    const { title } = req.params
    try {
        const removedRecipe = await recipeModel.findOneAndDelete({title: title})
        return res.status(201).json(removedRecipe)
    } catch (error) {
        return res.status(400).json({error: error})
    }
}
// get recipes
export const getUserRecipes = async (req, res) => {
    const userId = req.userId
    try {
        const userRecipes = await recipeModel.find({user: userId})
        if(userRecipes.length  === 0){
            return res.status(204).json({message: 'No recipes added yet'})
        }
        return res.status(200).json(userRecipes)
    } catch (error) {
        return res.status(400).json({error: error})
    }
}

// delete recipe
export const deleteRecipe = async (req, res) => {
    const { id } = req.params
    try {
        const deletedRecipe = await recipeModel.findByIdAndDelete({_id: id})
        return res.status(201).json(deletedRecipe)
    } catch (error) {
        return res.status(400).json({error: "Failed to delete recipe"})
    }
}

// get recipe by id
export const getRecipeById = async(req, res) => {
    const { id } = req.params;
    try {
        const foundRecipe = await recipeModel.findById({_id : id})
        return res.status(201).json(foundRecipe);
    } catch (error) {
        return res.status(400).json({error: error})
    }
}