import { useState } from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faBars, faMoon,  faUtensils, faXmark, faCircle, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/logo.png"
import logoWhite from '../assets/logow.png'


const Navbar = ({lightMode, toggleMode}) => {

  const [burgerMenu, setBurgerMenu] = useState(false) 
  const [dropdown, setDropdown] = useState(false)
  const userLoggedIn = sessionStorage.getItem("token") //get token
  const userName = sessionStorage.getItem('username') //get user's FirstName

//  display burger menu
  const displayBurgerMenu = () => {
    setBurgerMenu(!burgerMenu)
  }

// close burger menu on links navigation
 const linkTo = () => {
  setBurgerMenu(false)
 }
// menu dropdown
 const showDropDown = () => {
  setDropdown(!dropdown)
 }
// remove dropdown
 const removeDropdrown = () => {
  setDropdown(false)
 }
//  handle logout
 const handleLogout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem('username')
  sessionStorage.removeItem('userId')
  window.location = '/' //navigate back to default page after logout
  setBurgerMenu(false)
 }
 

  return (
    <div className="flex justify-between items-start w-screen py-6 px-2 md:px-12">
       <div><img src={lightMode ? logo: logoWhite} alt="logo"/></div>
       {/* burger menu */}
       <div>
        <Link><FontAwesomeIcon icon={faGithub} className={lightMode ? "w-7 h-7 mr-3 md:hidden" : '"w-7 h-7 mr-6 md:hidden'}/></Link>
        {lightMode ? <button id="moon" onClick={toggleMode}><FontAwesomeIcon icon={faMoon} className="w-6 h-7 px-3 md:hidden"/></button>: <button id="sun" onClick={toggleMode}><svg className="h-6 w-6 mr-3 fill-current md:hidden" viewBox="0 0 100 100" fill="none"><path d="M50 23.61c-14.55 0-26.388 11.839-26.388 26.388 0 14.55 11.839 26.388 26.388 26.388 14.55 0 26.388-11.838 26.388-26.388 0-14.55-11.839-26.388-26.388-26.388zm0 45.369c-10.466 0-18.98-8.515-18.98-18.98 0-10.463 8.514-18.982 18.98-18.982 10.466 0 18.98 8.519 18.98 18.981 0 10.466-8.514 18.98-18.98 18.98zM50 18.209a3.705 3.705 0 003.704-3.704V3.704a3.704 3.704 0 00-7.407 0v10.801A3.703 3.703 0 0050 18.209zM50 81.786a3.704 3.704 0 00-3.704 3.703v10.804a3.704 3.704 0 007.408 0V85.489A3.706 3.706 0 0050 81.786zM96.296 46.295H85.495a3.704 3.704 0 000 7.407h10.801a3.704 3.704 0 000-7.407zM18.21 49.998a3.702 3.702 0 00-3.703-3.703H3.704a3.704 3.704 0 000 7.407h10.803a3.704 3.704 0 003.703-3.704zM77.716 27.52l7.636-7.64a3.704 3.704 0 000-5.236 3.701 3.701 0 00-5.236 0l-7.637 7.637a3.703 3.703 0 105.237 5.238zM22.282 72.477l-7.638 7.639a3.703 3.703 0 105.237 5.236l7.638-7.635a3.709 3.709 0 000-5.24 3.703 3.703 0 00-5.236 0zM77.718 72.48a3.705 3.705 0 00-5.24 0 3.706 3.706 0 000 5.237l7.64 7.635a3.703 3.703 0 105.236-5.236l-7.636-7.635zM22.282 27.52a3.704 3.704 0 005.237-5.24l-7.638-7.638a3.705 3.705 0 00-5.237 0 3.706 3.706 0 000 5.237l7.638 7.64z" fill="fill-current"></path></svg></button>  }
        <button onClick={displayBurgerMenu} className="transition duration-75 ease-in-out">
          <FontAwesomeIcon icon={burgerMenu ? faXmark : faBars} className="w-6 h-7  mt-3 px-3 md:hidden "/>
        </button>
       </div>
        {/* burger menu dropdown*/}
        <div className={burgerMenu ? "z-20 absolute top-20 border right-5 bg-white text-black h-[27rem] w-72 rounded-md shadow-md md:hidden" : "hidden"}>
          <div className="flex flex-col gap-4"> 
            <div className="flex items-center  border-b-2 p-2">
              <FontAwesomeIcon icon={faUtensils} className="px-2"/>
              <p>MealMate</p>
            </div>
            {userLoggedIn ? (<>
              <div className="text-left flex flex-col gap-3">
              <div className="flex items-center px-5 gap-1">
                <FontAwesomeIcon icon={faCircle} className="w-7 h-8"/>
                <p className="text-xl">{userName}</p>
              </div>
              <div className="flex flex-col gap-3 items-center justify-center text-center">
                <Link to="/" onClick={linkTo} className="px-9 text-xl border border-black w-60 rounded-md ">Home</Link>
                <Link to="/recipes" onClick={linkTo} className="px-9 text-xl border border-black w-60 rounded-md ">Explore recipes</Link>
                <Link to="/recipeform" onClick={linkTo} className="px-9 text-xl border border-black w-60 rounded-md ">Post recipes</Link>
                <Link to="/myrecipes" onClick={linkTo} className="px-9 text-xl border border-black w-60 rounded-md ">My recipes</Link>
                <Link to="/favorites" onClick={linkTo} className="px-9 text-xl border border-black w-60 rounded-md ">Favorites</Link>
                <button className=" border-2 text-white bg-red-500 w-60 p-1 rounded-md">Delete Account</button>
                <button className=" border-2 text-white bg-red-500 w-60 p-1 rounded-md" onClick={handleLogout}>Log out</button>
              </div>
            </div>
          
            </>) : (
              <>
              <div className="text-left flex flex-col gap-3">
              <p className="text-2xl  px-4">Ready to get started?{}</p>
              <p className="text-md text px-4 text-gray-500">Sign in to save your favorite recipes.</p>
            </div>
            <div>
              <Link to="/signin" onClick={linkTo} ><button className="bg-transparent border-2 border-black w-64 p-1 rounded-md">Sign in</button></Link>
            </div>
            <div>
              <FontAwesomeIcon icon={faGithub} className="w-7 h-7"/>
            </div> 
              </>
            )}
            
          </div>
        </div>
        {/* menu */}
       <div className="hidden md:flex items-center gap-10">
        <div>
          {userLoggedIn ? (<>
            <button 
            className={lightMode ? "p-1 w-44 rounded-md bg-gray-300 text-black border border-black" : " bg-[#1E293B] p-1 w-44 rounded-md bg-transparent border border-gray-50" } 
            onClick={showDropDown}>{userName} <FontAwesomeIcon icon={faChevronDown}/></button> 
            <div className={dropdown ? "absolute z-10 top-16 right-30  text-black  w-44 rounded-md border border-gray-50": "hidden"}>
              <div className={"flex flex-col items-center justify-center  text-left  rounded-md " + (lightMode ? 'bg-gray-300 text-black' : 'bg-[#1E293B] text-white')}>
                <Link to="/" onClick={linkTo} className="   border-b-gray-50   border-b w-full px-5 py-2  hover:bg-slate-400 hover:rounded-tl-md hover:rounded-tr-md ">Home</Link>
                <Link to="/recipes" onClick={linkTo} className="  border-b-gray-50   border-b  w-full px-5 py-2  hover:bg-slate-400 ">Explore recipes</Link>
                <Link to="/recipeform" onClick={linkTo} className="   border-b-gray-50   border-b w-full px-5  py-2 hover:bg-slate-400 ">Post recipes</Link>
                <Link to="/myrecipes" onClick={linkTo} className="   border-b-gray-50   border-b  w-full px-5  py-2 hover:bg-slate-400 ">My recipes</Link>
                <Link to="/favorites" onClick={linkTo} className="  border-b-gray-50   border-b  w-full px-5 py-2  hover:bg-slate-400 ">Favorites</Link>
                <button className=" border-b-gray-50   border-b w-full px-5 text-left  text-red-500 py-2 hover:bg-red-200">Delete Account</button>
                <button className=" w-full px-5  text-red-500 text-left  py-2 hover:bg-red-200 hover:rounded-bl-md hover:rounded-br-md" onClick={handleLogout}>Log out</button>
              </div> 
          </div>
          </>) : (
              <Link to="/signin" ><button className={lightMode ? "p-1 w-32 rounded-md bg-transparent border border-black" : "p-1 w-32 rounded-md bg-transparent border border-white"}>Sign in</button></Link>
          )}
        </div>
        <div className="flex gap-5 items-center justify-center justify-items-center">
          {lightMode ? <button id="moon" onClick={toggleMode}><FontAwesomeIcon icon={faMoon} className="w-6 h-6"/></button> :  <button id="sun" onClick={toggleMode}><svg className="h-6 w-6 fill-current" viewBox="0 0 100 100" fill="none"><path d="M50 23.61c-14.55 0-26.388 11.839-26.388 26.388 0 14.55 11.839 26.388 26.388 26.388 14.55 0 26.388-11.838 26.388-26.388 0-14.55-11.839-26.388-26.388-26.388zm0 45.369c-10.466 0-18.98-8.515-18.98-18.98 0-10.463 8.514-18.982 18.98-18.982 10.466 0 18.98 8.519 18.98 18.981 0 10.466-8.514 18.98-18.98 18.98zM50 18.209a3.705 3.705 0 003.704-3.704V3.704a3.704 3.704 0 00-7.407 0v10.801A3.703 3.703 0 0050 18.209zM50 81.786a3.704 3.704 0 00-3.704 3.703v10.804a3.704 3.704 0 007.408 0V85.489A3.706 3.706 0 0050 81.786zM96.296 46.295H85.495a3.704 3.704 0 000 7.407h10.801a3.704 3.704 0 000-7.407zM18.21 49.998a3.702 3.702 0 00-3.703-3.703H3.704a3.704 3.704 0 000 7.407h10.803a3.704 3.704 0 003.703-3.704zM77.716 27.52l7.636-7.64a3.704 3.704 0 000-5.236 3.701 3.701 0 00-5.236 0l-7.637 7.637a3.703 3.703 0 105.237 5.238zM22.282 72.477l-7.638 7.639a3.703 3.703 0 105.237 5.236l7.638-7.635a3.709 3.709 0 000-5.24 3.703 3.703 0 00-5.236 0zM77.718 72.48a3.705 3.705 0 00-5.24 0 3.706 3.706 0 000 5.237l7.64 7.635a3.703 3.703 0 105.236-5.236l-7.636-7.635zM22.282 27.52a3.704 3.704 0 005.237-5.24l-7.638-7.638a3.705 3.705 0 00-5.237 0 3.706 3.706 0 000 5.237l7.638 7.64z" fill="fill-current"></path></svg></button>  }
          <Link><FontAwesomeIcon icon={faGithub} className={lightMode ? 'w-6 h-6 text-black'  : 'w-6 h-6 text-white'} /></Link>
        </div>
       </div>
    </div>
  )
}

export default Navbar
