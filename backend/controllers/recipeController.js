import recipeModel from "../model/recipeModel.js"
import recipePostModel from "../model/recipePostModel.js"



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
// get user favorites
export const getUserFavorites = async (req, res) => {
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

// delete from favorites
export const deleteFromFavorites = async (req, res) => {
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

// post recipe by user
export const postRecipe = async (req, res) => {
   const {title, recipes, recipeInstructions, comments} = req.body
   const userId = req.userId
   const imagePath = req.file ? req.file.path : null
   try {
        const newRecipe = await recipePostModel.create({
             title,
             recipes,
             recipeInstructions,
             recipeImage: imagePath,
             comments,
             user: userId
        })
        return res.status(201).json(newRecipe);
   } catch (error) {
        return res.status(400).status({error: error})
   }
}

// get user recipes
export const getUserRecipes = async (req, res) => {
    try {
       const userId = req.userId
       const foundUserRecipe = await recipePostModel.find({user: userId})
       if(foundUserRecipe.length === 0){
            return res.status(204).json({message: 'No any posted recipes yet.'})
       }
       return res.status(200).json(foundUserRecipe)
    } catch (error) {
       return res.status(400).json({error: error})
    }
}

// delete user recipe
export const deleteRecipe = async (req, res) => {
    const {id} = req.params
    try {
        const deletePost = await recipePostModel.findByIdAndDelete({_id: id})
        return res.status(200).json(deletePost)
    } catch (error) {
        return res.status(400).json({error: error})
    }
}