import React from 'react'
import { useEffect} from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Favorites = () => {
  const [favorites, setFavorites] = useState([])
  const fetchFavorites = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/foodrecipe/getrecipes")
      setFavorites(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/foodrecipe/deleterecipe/${id}`)
      .then(() => window.location.reload())
      setFavorites(favorites.filter(recipe => recipe.id !== id))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
   const asyncFetching = async () => {
    await fetchFavorites()
   }
   asyncFetching();
  }, [])
  
  return (
    <>
   
    <div className="text-3xl">Favorite Recipes</div>
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-10">
      {favorites.map((favorite) => (
         <div className="flex flex-col  shadow-2xl rounded-br-xl rounded-bl-xl bg-gray-200"  key={favorite._id}>
            <Link to="/details"><img src={favorite.image} className="object-cover w-[390px] h-[268px] border-r-2 border-l-2 border-t-2 border-white rounded-tl-md rounded-tr-md " alt="food image"/></Link>
            <div className="p-1">
              <p className="font-semibold text-xs text-black">{favorite.title}</p>
            </div>
           
            <div className="py-2">
             <button className="bg-red-500 w-60 p-1 rounded-md mx-auto text-white" onClick={() => handleRemove(favorite._id)}>Remove from favorites</button>
            </div>
         </div>
      
          ))}
      </div>
    </div>
          
   
    </>
  )
}

export default Favorites
{/* <div className="relative h-[300px]  shadow-2xl rounded-bl-2xl rounded-br-2xl md:w-[484px] md:h-[418px]">
          <img src="" className=" object-cover w-[390px] h-[268px] border-r-2 border-l-2 border-t-2 border-white bg-black rounded-tl-md rounded-tr-md md:w-[484px] md:h-[370px]" alt="food Image"/>
           <div className="bg-black absolute bottom-0 right-0 left-0 h-[33px] w-[390px] border rounded-bl-2xl rounded-br-2xl shadow-2xl flex items-center justify-center md:w-[484px] md:h-[47px]">
            <p className="font-semibold text-xs text-white">burger</p>
            </div>
        </div> */}