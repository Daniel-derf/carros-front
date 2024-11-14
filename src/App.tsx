import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
