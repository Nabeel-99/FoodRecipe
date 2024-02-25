import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import HeroSection from "./components/HeroSection.jsx"
import ContentSection from "./components/ContentSection.jsx"
import Footer from "./components/Footer.jsx"
import SignIn from "./components/SignIn.jsx"
import SignUp from "./components/SignUp.jsx"

function App() {

  const [signIn, setSignIn] = useState(false) //signin button
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

  return (
    <>
    <Router>
    <div className="flex flex-col gap-5 h-full w-screen">
      <Navbar lightMode={lightMode} toggleMode={toggleMode} signIn={signIn}  toggleSignIn={toggleSignIn} />
      <Routes>
        <Route path="/" element={<HeroSection lightMode={lightMode}/>}/>
        <Route path="/" element={<ContentSection lightMode={lightMode} />} />
        <Route path="/signup" element={<>
          <div>
            <div className="absolute inset-0 bg-black opacity-50 "></div>
            <SignUp />
          </div>
        </>}/>
        <Route path="/signin" element={<>
          <div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <SignIn />
        </div>
        </>}/>
      </Routes>
    
      <Footer lightMode={lightMode}/>
      </div>
    </Router>
      
    </>
  )
}

export default App
