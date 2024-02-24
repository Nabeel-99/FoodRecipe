import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import HeroSection from "./components/HeroSection.jsx"
import ContentSection from "./components/ContentSection.jsx"
import Footer from "./components/Footer.jsx"
import SignIn from "./components/SignIn.jsx"

function App() {

  const [signIn, setSignIn] = useState(false) //signin button
  const [showForm, setShowForm] = useState(false) //showForm
  const [lightMode, setLightMode] = useState(() => { 
    const savedTheme = JSON.parse(localStorage.getItem('theme'));
    return savedTheme ? savedTheme.lightMode : false
  }) //handle Darkmode
  const toggleMode = () => {
    setLightMode(!lightMode)
    
  }
  //getting theme from localstorage
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify({lightMode: lightMode}))
    document.body.style.backgroundColor = lightMode ? '#EDEDF0' : '#0D1734'
    document.body.style.color = lightMode ? 'black' : 'white'
    document.body.style.transition =  '.5s ease all'
   
  }, [lightMode])

//  signIn
  const toggleSignIn = () => {
    setSignIn(!signIn)
  }
  // handleCloseForm
  const handleCloseForm = () => {
    // blur all background and disable except the form
    
    setShowForm(!showForm)
  }
  return (
    <>
    <Router>
    <div className="flex flex-col gap-5 h-full w-screen">
      <Navbar lightMode={lightMode} toggleMode={toggleMode} signIn={signIn} showForm={showForm} toggleSignIn={toggleSignIn} handleCloseForm={handleCloseForm}/>
      <Routes>
        <Route path="/" element={<HeroSection lightMode={lightMode}/>}/>
        <Route path="/" element={<ContentSection lightMode={lightMode} />} />
        
      </Routes>
      <div>
        <div className={showForm ? "absolute inset-0 bg-black opacity-50" : "hidden"}></div>
        <SignIn signIn={signIn} showForm={showForm} toggleSignIn={toggleSignIn} handleCloseForm={handleCloseForm}/>
      </div>
      <Footer lightMode={lightMode}/>
      </div>
    </Router>
      
    </>
  )
}

export default App
