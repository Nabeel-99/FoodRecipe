import recipeModel from "../model/recipeModel.js"


// add to favorites tab
export const addToFavorites =  async (req, res) => {
    const {title, image, recipe, instruction} = req.body
    try {
        const favorites = await recipeModel.create({title,image,recipe,instruction})
        return res.status(201).json(favorites);
    } catch (error) {
        console.log(error)
        return res.status(400).json({error})
        
    }
}

// get recipes
export const getRecipes = async (req, res) => {
    try {
        const recipes = await recipeModel.find({})
        if(recipes != null)
            return res.status(201).json(recipes)
        return res.status(201).json("no recipes added yet")

    } catch (error) {
        return res.status(400).json({error: error})
    }
}

// delete recipe
export const deleteRecipe = async (req, res) => {
    const {id} = req.params
    try {
        const deletedWorkout = await recipeModel.findByIdAndDelete({_id: id})
        return res.status(200).json(deletedWorkout)
    } catch (error) {
        return res.status(400).json({error: "Failed to delete recipe"})
    }
}