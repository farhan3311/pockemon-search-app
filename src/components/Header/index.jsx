import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
  return (
    <main>
      <header className='header'>
        <nav className='nav'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/Saved">Saved</NavLink>
        </nav>
        <Outlet />
      </header>
    </main>
  )
}
