import { useState, useEffect } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
// import './App.css'
import RootLayout from './components/RootLayout'
import NavBar from './components/header/NavBar'
import Home from './components/pages/1.home/Home'
import Login from './components/pages/2.login/Login'
import Signup from './components/pages/3.signup/Signup'
// import Contact from './components/pages/4.contact/Contact'
// import Footer from './components/components/footer/Footer'
// import Profile from './components/pages/5.profile/Profile'
                                                                                                                                                             

function App() {
  const [user, setCurrentUser] = useState({})
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout setCurrentUser={setCurrentUser} user={user}/>}>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login setCurrentUser={setCurrentUser}/>}/>
        <Route path='/signup' element={<Signup setCurrentUser={setCurrentUser}/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        {/* <Route path='/contact' element={<Contact />} /> */}
        {/* <Route path='/profile' element={<Profile currentUser={currentUser}/>} /> */}
      </Route>
    )
  );

  return <RouterProvider router = {router}/>
}
  
  export default App
  