import React from 'react'
import './Navbar.css'
import iconImg from '../assets/images/flat-vintage-car-icon-8bd3aa.png'
import { NavLink } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
  return (
  <nav className='navbar'>
    <div className="navbar-icon">
      <NavLink to="/"><img className='navbar-icon-img' src={iconImg} alt="" /></NavLink>  
    </div>

    <div className='navbar-options'>
      <NavLink to="/">Início</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </div>

  </nav>
  )
}

export default Navbar