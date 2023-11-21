import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { useAuthContext } from './hooks/useAuthContext'
import { useLogout } from "./hooks/useLogout"

export default function Layout({ children }) {
  const { user } = useAuthContext()
  const logout = useLogout()

  const handleClick = () => {
    logout()
  }

  return (
  <>
  <header>
    <Link to="/">
      <h1 className='logo'>Fitness Tracker </h1>
    </Link>
    <nav>
      {!user ? 
        <div className='nav-container'>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
        :
        <div className='nav-container'>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/exercises">Exercises</NavLink>
        <NavLink to="/goals">Goals</NavLink>
        <button onClick={handleClick}>Log Out</button>
      </div>
      }
    </nav>
  </header>
  <main>
    {children}
  </main>
 
  </>
  )
}
