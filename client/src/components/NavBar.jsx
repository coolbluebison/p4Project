import { React} from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar({currentUser}) {

  const loggedOutNavBar = (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/">Cart</NavLink>
      </nav>
    </header>
  )
  const loggedInNavBar = (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/login">Log Out</NavLink>
        <NavLink to="/">Cart</NavLink>
      </nav>
    </header>
  )
  // return currentUser.username ? loggedInNavBar : loggedOutNavBar
  // console.log(user)
  // 

  return (
    currentUser && currentUser['username'] !== undefined ? loggedInNavBar : loggedOutNavBar
  )

}

export default NavBar