import express from "express"
import { addToFavorites, deleteRecipe, getRecipeById, getRecipes, removeFromFavorites } from "../controllers/recipeController.js"

const router = express.Router()

// routes
router.get("/getrecipes", getRecipes)
router.post("/addtofavorites", addToFavorites)
router.get("/getrecipe/:id", getRecipeById)
router.delete("/removefromfavorites/:title", removeFromFavorites)
router.delete("/deleterecipe/:id", deleteRecipe)

export default router