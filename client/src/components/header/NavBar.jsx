import { React} from 'react'
import { NavLink } from 'react-router-dom'
import'../header/NavBar.css'

function NavBar({user, setCurrentUser}) {
  function handleLogout(){
    fetch('/api/logout', {
      method: 'DELETE',
    })
    setCurrentUser({})
  }
  const loggedOutNavBar = (
    <header>
      <nav>
        <NavLink to="/">About Us</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    </header>
  )
  const loggedInNavBar = (
    <header>
      <nav>
        <NavLink to="/">About Us</NavLink>
        <NavLink onClick={handleLogout} to="/">Log Out</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    </header>
  )
  console.log(user)
  return user.username != undefined? loggedInNavBar : loggedOutNavBar

}

export default NavBar