import React, { useContext } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';
import Navbar from './components/layouts/Navbar.js';
import AuthContext from './context/authContext.js';
import Home from './components/Home.js';
import Redirect from './components/Redirect.js'


export default function Router() {

  const {loggedIn} = useContext(AuthContext); 

  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
        <Route path="/:shortUrl" element ={<div>{<Redirect/>}</div>}/>
        <Route exact path="/" element={<div>{<Home />}</div>} />

          {
            loggedIn === false &&
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<div>{<Login />}</div>} />
            </>
          }
         
            
           
        </Routes>
    </BrowserRouter>
  )
}
