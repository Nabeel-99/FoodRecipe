import React from 'react'
import { Link } from "react-router-dom"
import burger from "../assets/burger.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const RecipePosts = () => {
  return (
    <>
    <div className="text-3xl">Explore Recipes</div>
    <div className="flex items-center gap-2 justify-center mx-auto md:gap-5 ">
      <div className="bg-white p-1 py-2 rounded-md border border-black text-left text-black">
      <label htmlFor="search-recipe"><FontAwesomeIcon icon={faMagnifyingGlass} className="px-2"/></label>
      <input type="text" placeholder="Search saved recipe..." id="search-recipe" className="px-1 w-64 outline-none md:w-96 b"
        
      />
      </div>
        <select name="Sort" className="w-16 h-10 bg-white p-1 py-2 rounded-md text-black border border-black cursor-pointer md:w-36" 
          >
          <option value="" disabled hidden>Sort</option>
          <option value="ascending">A-Z</option>
          <option value="descending">Z-A</option>
          <option value="dateAdded">Date added</option>
        </select>
    </div>
    <div className="flex flex-col items-center gap-8 justify-center md:grid md:grid-cols-4 md:m-10">
        <div className="flex flex-col items-center rounded-md bg-gray-300 justify-center shadow-lg  border">
            <img src={burger} alt="image" className="object-cover w-80 h-64"/>
            <div className="flex flex-col gap-2 w-full p-2 bg-white items-center rounded-bl-md rounded-br-md">
            <h3 className="mt-2 text-black">Title</h3>
             <Link><button className="p-1 bg-orange-400 w-36 rounded-md hover:bg-orange-300 ">View Recipe</button></Link>
            <div>
              <Link to="" className="text-black">User profile</Link>
            </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default RecipePosts
