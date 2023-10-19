import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import './App.css'
// import NavBar from './components/header/NavBar'
// import Home from './pages/1.home/Home'
// import Login from './pages/2.login/Login'
// import SignUp from './pages/3.signup/SignUp'
// import Contact from './pages/4.contact/Contact'
// import Footer from './components/footer/Footer'
// import Profile from './pages/5.profile/Profile'

// Additional imports

import ItemPage from './components/ItemPage'
import ItemCard from './components/ItemCard'
import DispContainer from './components/DispContainer'
import ChoiceMenu from './components/ChoiceMenu'
import Banner from './components/Banner'
import HomeContainer from './components/HomeContainer'
import Login from './components/Login'



function App() {
  // const [user, setUser] = useState({})
  
  return (  
    
    <BrowserRouter>

      <nav className="nav">
        {/* <NavLink to="OperatingAssumptions" activeclassname="active">Sign Up</NavLink> */}
        <NavLink to="Login" activeclassname="active">Login</NavLink>
        <NavLink to="" activeclassname="active">Home</NavLink>
      </nav>


      <Routes>


        <Route path="" element={<HomeContainer />}/>

        <Route path="login" element={<Login />}/>


        <Route path="banner" element={<Banner />}/>
        <Route path="choice-menu" element={<ChoiceMenu />}/>
        <Route path="disp-container" element={<DispContainer />}/>

        <Route path='item-page' element={<ItemPage />}/>
        <Route path='item-card' element={<ItemCard />}/>

      </Routes> 
    
    </BrowserRouter>
  )
}
  
export default App
  