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
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import AboutUs from './components/AboutUs'



function App() {
  const [currentUser, setCurrentUser] = useState(null)
  
  return (  
    
    <BrowserRouter>

      {/* <nav className="nav"> */}
        {/* <NavLink to="OperatingAssumptions" activeclassname="active">Sign Up</NavLink> */}
        {/* <NavLink to="Login" activeclassname="active">Login</NavLink> */}
        {/* <NavLink to="" activeclassname="active">Home</NavLink> */}
      {/* </nav> */}


      <NavBar currentUser={currentUser} />

      <Routes>


        <Route path="" element={<HomeContainer />}/>

        <Route path="login" element={<Login setCurrentUser={setCurrentUser}/>}/>
        <Route path="signup" element={<Signup />}/>


        <Route path="banner" element={<Banner />}/>
        <Route path="choice-menu" element={<ChoiceMenu />}/>
        <Route path="disp-container" element={<DispContainer />}/>

        <Route path='item-page' element={<ItemPage />}/>
        <Route path='item-card' element={<ItemCard />}/>
        <Route path='about-us' element={<AboutUs />}/>

      </Routes> 
    
    </BrowserRouter>
  )
}
  
export default App
  