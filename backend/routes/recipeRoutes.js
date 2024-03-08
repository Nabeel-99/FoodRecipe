import express from "express"
import { addToFavorites, deleteFromFavorites, deleteRecipe, getRecipeById, getRecipeDetails, getUserFavorites, getUserRecipes, postRecipe, removeFromFavorites, updateRecipePost } from "../controllers/recipeController.js"
import { verifyToken } from "../controllers/userController.js"
import multer from "multer"


const router = express.Router()

// multer config
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, 'Images')
    },
    filename: function(req, file, cb){
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage})

// routes
router.get("/getuserfavorites", verifyToken, getUserFavorites) //get logged in users recipe list
router.post("/addtofavorites", verifyToken, addToFavorites) //allow authenticated users to add to favorites
router.get("/getrecipe/:id", verifyToken, getRecipeById) // view the recipe's details
router.delete("/removefromfavorites/:title", verifyToken, removeFromFavorites) //allow authenticated users to remove/toggle from favorites
router.delete("/deletefromfavorites/:id", verifyToken, deleteFromFavorites) // allow authenticated users to delete item from favorites



// 
router.get('/getuserrecipes', verifyToken, getUserRecipes); // Get user's recipe list
router.post('/postrecipe', upload.single('recipeImage'), verifyToken, postRecipe) //allow authentictes users to post recipe
router.delete('/deleterecipe/:id', verifyToken, deleteRecipe)//delete recipe
router.get('/getrecipedetails/:id', getRecipeDetails)//get the posted recipe details
router.get('/fetchrecipe/:id', getRecipeDetails)//get recipe to be updated on form
router.patch('/updaterecipe/:id', updateRecipePost) //update recipe Post


export default router