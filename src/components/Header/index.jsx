import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const style = ({isActive}) => ({color: isActive ? '#FFC300' : ""})

export default function Header() {
  return (
    <main>
      <header className='header'>
        <nav className='nav'>
            <NavLink style={style} to="/">Home</NavLink>
            <NavLink style={style} to="/search">Search</NavLink>
            <NavLink style={style} to="/Saved">Saved</NavLink>
        </nav>
        <Outlet />
      </header>
    </main>
  )
}
