import express from "express"
import { addToFavorites, deleteRecipe, getRecipes } from "../controllers/recipeController.js"

const router = express.Router()

// routes
router.get("/getrecipes", getRecipes)
router.post("/addtofavorites", addToFavorites)
router.delete("/deleterecipe/:id", deleteRecipe)

export default router