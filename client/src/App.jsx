import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
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



function App() {
  const [count, setCount] = useState(0)
  
  return (  
    <BrowserRouter>

      <Routes>

        <Route path='ItemPage' element={<ItemPage />}/>
        <Route path='ItemCard' element={<ItemCard />}/>

      </Routes> 
    
    </BrowserRouter>
  )
}
  
export default App
  