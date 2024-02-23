import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import {faBars, faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/logo.png"
import sun from "../assets/Sun.png"

const Navbar = ({darkMode, toggleMode}) => {
  
  return (
    <div className="flex justify-between items-start w-screen py-6 px-2 md:px-12">
       <div><img src={logo}/></div>
       {/* burger menu */}
       <FontAwesomeIcon icon={faBars} className="w-7 h-7 mt-3 px-3 md:hidden "/>
       <div className="hidden md:flex items-center gap-10">
        <div><button className="p-1 w-32 rounded-md bg-transparent border border-black">Sign in</button></div>
        <div className="flex gap-5">
          {darkMode ? <button id="sun" onClick={toggleMode}><img src={sun}/></button>: <button id="moon" onClick={toggleMode}><FontAwesomeIcon icon={faMoon} className="w-6 h-6"/></button>  }
          <Link><FontAwesomeIcon icon={faGithub} className={darkMode ? 'w-6 h-6 text-white' : 'w-6 h-6 text-black'} /></Link>
        </div>
       </div>
    </div>
  )
}

export default Navbar
