import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import {faBars, faMoon, faMagnifyingGlass, faUtensils, faXmark, faX} from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/logo.png"
import logoWhite from '../assets/logow.png'
import sun from "../assets/Sun.png"

const Navbar = ({lightMode, toggleMode, handleCloseForm}) => {
  const [burgerMenu, setBurgerMenu] = useState(false)
  const displayBurgerMenu = () => {
    setBurgerMenu(!burgerMenu)
  }
  return (
    <div className="flex justify-between items-start w-screen py-6 px-2 md:px-12">
       <div><img src={lightMode ? logo: logoWhite}/></div>
       {/* burger menu */}
       <div>
        {lightMode ? <button id="moon" onClick={toggleMode}><FontAwesomeIcon icon={faMoon} className="w-6 h-7 px-3 md:hidden"/></button>: <button id="sun" onClick={toggleMode}><img src={sun} className="w-6 h-6 mr-3 md:hidden"/></button>  }
        <button onClick={displayBurgerMenu} className="transition duration-75 ease-in-out">
          <FontAwesomeIcon icon={burgerMenu ? faXmark : faBars} className="w-6 h-7  mt-3 px-3 md:hidden "/>
        </button>
       </div>
        {/* burger menu */}
        <div className={burgerMenu ? "z-10 absolute top-20 right-5 bg-white text-black h-96 w-72 rounded-md shadow-sm md:hidden" : "hidden"}>
          <div className="flex flex-col gap-7"> 
            <div className="flex items-center  border-b-2 p-2">
              <FontAwesomeIcon icon={faUtensils} className="px-2"/>
              <p>MealMate</p>
            </div>
            <div className="text-left flex flex-col gap-3">
              <p className="text-2xl  px-4">Ready to get started?</p>
              <p className="text-md text px-4 text-gray-500">Sign in to save your favorite recipes.</p>
            </div>
            <div>
              <button onClick={() => {
                setBurgerMenu(false)
                handleCloseForm()
              }} className="bg-transparent border-2 border-black w-56 p-1 rounded-md">Sign in</button>
            </div>
            <div>
              <FontAwesomeIcon icon={faGithub} className="w-7 h-7"/>
            </div>
          </div>
        </div>
       <div className="hidden md:flex items-center gap-10">
        <div><button onClick={handleCloseForm} className={lightMode ? "p-1 w-32 rounded-md bg-transparent border border-black" : "p-1 w-32 rounded-md bg-transparent border border-white"}>Sign in</button></div>
        <div className="flex gap-5 items-center justify-center justify-items-center">
          {lightMode ? <button id="moon" onClick={toggleMode}><FontAwesomeIcon icon={faMoon} className="w-6 h-6"/></button> :  <button id="sun" onClick={toggleMode}><img src={sun} className="object-cover w-6 h-7"/></button>  }
          <Link><FontAwesomeIcon icon={faGithub} className={lightMode ? 'w-6 h-6 text-black'  : 'w-6 h-6 text-white'} /></Link>
        </div>
       </div>
    </div>
  )
}

export default Navbar
