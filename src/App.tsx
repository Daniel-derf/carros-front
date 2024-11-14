import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'

// components
import Navbar from './components/Navbar'

// pages
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
