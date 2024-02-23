import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import HeroSection from "./components/HeroSection.jsx"
import ContentSection from "./components/ContentSection.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleMode = () => {
    setDarkMode(!darkMode)
    document.body.style.backgroundColor = darkMode ? '#EDEDF0' : '#0D1734'
    document.body.style.color = darkMode ? 'black' : 'white'
  }

  return (
    <>
    <Router>
    <div className="flex flex-col gap-5 h-full w-screen">
      <Navbar darkMode={darkMode} toggleMode={toggleMode}/>
      <Routes>
        <Route path="/" element={<HeroSection darkMode={darkMode}/>}/>
        <Route path="/" element={<ContentSection darkMode={darkMode} />} />
      </Routes>
      <Footer darkMode={darkMode}/>
      </div>
    </Router>
      
    </>
  )
}

export default App
