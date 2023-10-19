import { React} from 'react'
import { NavLink } from 'react-router-dom'
import'../header/NavBar.css'

function NavBar({user}) {

  const loggedOutNavBar = (
    <header>
      <nav>
        <NavLink to="/">About Us</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/">Cart</NavLink>
      </nav>
    </header>
  )
  const loggedInNavBar = (
    <header>
      <nav>
        <NavLink to="/">About Us</NavLink>
        <NavLink to="/login">Log Out</NavLink>
        <NavLink to="/">Cart</NavLink>
      </nav>
    </header>
  )
  // return user.username ? loggedInNavBar : loggedOutNavBar
  console.log(user)
  return user.username != undefined? loggedInNavBar : loggedOutNavBar

}

export default NavBar