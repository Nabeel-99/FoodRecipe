import axios from "axios"
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const RecipeDetails = () => {
    const [recipeDetails, setRecipeDetails] = useState({
        title: "", 
        recipe: [], 
        image: '', 
        instruction: [],
        comments: ''
    })
    const {id} = useParams() //get th id parameter from url
    // fetch recipe details 
    const fetchRecipeDetails = async () => {
        try {
            const token = sessionStorage.getItem('token')
            const response = await axios.get(`http://localhost:8000/api/foodrecipe/getrecipedetails/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data)
            setRecipeDetails({
                title: response.data.title,
                recipe: response.data.recipes,
                image: response.data.recipeImage,
                instruction: response.data.recipeInstructions,
                comments: response.data.comments
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchRecipeDetails()
    }, [])
    return (
            <>
                <div>
                     <div className="flex flex-col gap-8 justify-center items-center">
                        <div><h2 className="text-2xl md:text-[48px] md:mt-8">Saved Recipes</h2></div>
                        <div className="relative h-[300px]  shadow-2xl rounded-bl-2xl rounded-br-2xl bg-gray-300 md:w-[484px] md:h-[418px]">
                             <img src={`http://localhost:8000/${recipeDetails.image}`} className=" object-cover w-[390px] h-[268px] border-r-2 border-l-2 border-t-2 border-white  rounded-tl-md rounded-tr-md md:w-[484px] md:h-[370px]" alt="food Image"/>
                            <div className="bg-black absolute bottom-0 right-0 left-0 h-[33px] w-[390px] border rounded-bl-2xl rounded-br-2xl shadow-2xl flex items-center justify-center md:w-[484px] md:h-[47px]">
                                 <p className="font-semibold text-xs text-white">{recipeDetails.title}</p>
                            </div>
                        </div>
                      <div className="md:flex gap-60 mt-8">
                       <div className="relative rounded-tl-xl">
                         <div className={"absolute h-[40px] w-[390px]  bg-black top-0 right-0 left-0 rounded-tl-xl rounded-tr-xl flex items-center justify-center" }>
                             <h4 className="text-white">Recipes</h4>
                         </div>
                         <div className="bg-white h-[321px] w-[390px] mt-10 overflow-auto rounded-tl-xl rounded-tr-xl md:h-[478px] md:mt-0">
                             <ul className="list-disc leading-loose text-left text-black px-10 mt-14">
                                {recipeDetails.recipe.map((recipeItem, index) => (
                                    <p key={index} style={{whiteSpace: 'pre-line'}}>{recipeItem}</p>
                                ))}
                             </ul>
                         </div>
                       </div>
                       <div className="relative  md:w-[680px] md:mt-8">
                         <div className="absolute h-[40px] w-[390px] top-0 right-0 left-0 bg-black rounded-tl-xl rounded-tr-xl flex items-center justify-center md:w-[680px]" >
                             <h4 className="text-white">Instructions</h4>
                         </div>
                         <div className="bg-white h-[321px] w-[390px] mt-10 overflow-y-scroll rounded-tl-xl rounded-tr-xl md:w-[680px] md:h-[478px] md:mt-0">
                             <ul className="list-disc leading-loose text-left text-black px-10 mt-14">
                               {recipeDetails.instruction.map((instructionItem, index) => (
                                <p key={index} style={{whiteSpace: 'pre-line'}}>{instructionItem}</p>
                               ))}
                             </ul> 
                         </div>
                        
                       </div>
                       {recipeDetails.comments.length > 0 ? (
                        <div className="relative   md:w-[680px] md:mt-8">
                        <div className="absolute h-[40px] w-[390px] top-0 right-0 left-0 bg-black rounded-tl-xl rounded-tr-xl flex items-center justify-center md:w-[680px]" >
                            <h4 className="text-white">Comments</h4>
                        </div>
                        <div className="bg-white h-40 w-[390px] mt-10 overflow-y-scroll rounded-xl md:w-[680px] md:h-[478px] md:mt-0">
                           <p className="text-black mt-14 text-left px-5">{recipeDetails.comments}</p> 
                        </div>
                      </div>
                       ) : ''}
                    </div>
                      
                     </div>
                </div>   
          </>
        
      )
}

export default RecipeDetails
