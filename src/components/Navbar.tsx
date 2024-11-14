import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
  return (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
  </nav>
  )
}

export default Navbar