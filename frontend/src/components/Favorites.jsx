import React from 'react'
import { useEffect} from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Favorites = () => {
  const [favorites, setFavorites] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
 

  // search items
  const filteredFavorites = Array.isArray(favorites) ? favorites.filter((favorite) => {
    return favorite.title.toLowerCase().includes(searchTerm.toLowerCase());
  }) : [];
  
  //fetch user's favorites
  const fetchFavorites = async () => {
    try {
      const token = sessionStorage.getItem('token')
      const response = await axios.get(`http://localhost:8000/api/foodrecipe/getuserrecipes`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setFavorites(response.data)
      console.log(response.data) 
    } catch (error) {
      console.log(error)
    }
  }
// sort items
  const handleSort = (e) => {
    const selectedValue = e.target.value
    if (selectedValue === 'ascending'){
      sortAscending()
    } else if (selectedValue === 'descending'){
      sortDescending()
    }else if (selectedValue === 'dateAdded') {
      sortByDateAdded()
    } 
   setInputValue(selectedValue)

  }
  // ascending order
  const sortAscending = () => {
     // sort the items
     const sortedRecipes = [...favorites]
     sortedRecipes.sort((a,b) => {
       return a.title.localeCompare(b.title)
     })
     setFavorites(sortedRecipes);
  }

  // sort by descending order
  const sortDescending = () => {
    const sortedRecipes = [...favorites]
    sortedRecipes.sort((a, b) => {
      return b.title.localeCompare(a.title)
    })
    setFavorites(sortedRecipes)
  }

  // sort by date added
  const sortByDateAdded = () => {
    const sortedRecipes = [...favorites]
    sortedRecipes.sort((a,b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    })
  }
  // handleRemove item
  const handleRemove = async (id) => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.delete(`http://localhost:8000/api/foodrecipe/deleterecipe/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if(response.status === 201){
        console.log('removed successfully')
        setFavorites(favorites.filter(recipe => recipe.id !== id))
        window.location.reload();
      }else{
        console.log("Error removing recipe", response.data)
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
   fetchFavorites()
  }, [])
  
  return (
    <>
   
    <div className="text-4xl  tracking-tight">Favorite Recipes</div>
    <div className="flex items-center gap-2 justify-center mx-auto md:gap-5 ">
      <div className="bg-white p-1 py-2 rounded-md border border-black text-left text-black">
      <label htmlFor="search-recipe"><FontAwesomeIcon icon={faMagnifyingGlass} className="px-2"/></label>
      <input type="text" placeholder="Search saved recipe..." id="search-recipe" className="px-1 w-64 outline-none md:w-96 b"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
        <select name="Sort" className="w-16 h-10 bg-white p-1 py-2 rounded-md text-black border border-black cursor-pointer md:w-36" 
        value={inputValue} onChange={handleSort} >
          <option value="" disabled hidden>Sort</option>
          <option value="ascending">A-Z</option>
          <option value="descending">Z-A</option>
          <option value="dateAdded">Date added</option>
        </select>
    </div>
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col p-3 items-center justify-center md:grid md:grid-cols-3 gap-10">
        {filteredFavorites.length > 0 ? filteredFavorites.map((favorite) => (
          <div className="flex flex-col shadow-2xl rounded-br-xl rounded-bl-xl bg-gray-200"  key={favorite._id}>
            <Link to={`/details/${favorite._id}`}><img src={favorite.image} className="object-cover w-[390px] h-[268px] border-r-2 border-l-2 border-t-2 border-white rounded-tl-md rounded-tr-md " alt="food image"/></Link>
              <div className="p-1">
                <p className="font-semibold text-xs text-black">{favorite.title}</p>
              </div>
              <div className="py-2">
                <button className="bg-red-500 w-60 p-1 rounded-md mx-auto text-white" onClick={() => handleRemove(favorite._id)}>Remove from favorites</button>
              </div>
          </div>
         )) : (
          <div className="">No items in favorites yet</div>
        )}
     </div>
   </div>
    </>
  )
}

export default Favorites
