import express from "express"
import { addToFavorites, deleteRecipe, getRecipeById, getUserRecipes, removeFromFavorites } from "../controllers/recipeController.js"
import { verifyToken } from "../controllers/userController.js"


const router = express.Router()

// routes
router.get("/getuserrecipes", verifyToken, getUserRecipes) //get logged in users recipe list
router.post("/addtofavorites", verifyToken, addToFavorites) //allow authenticated users to add to favorites
router.get("/getrecipe/:id", verifyToken, getRecipeById) // view the recipe's details
router.delete("/removefromfavorites/:title", verifyToken, removeFromFavorites) //allow authenticated users to remove/toggle from favorites
router.delete("/deleterecipe/:id", verifyToken, deleteRecipe) // allow authenticated users to delete item from favorites

export default router