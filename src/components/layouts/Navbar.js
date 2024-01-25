import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import AuthContext from '../../context/authContext'
import LogOutBtn from '../auth/LogOutbtn';
import './Navbar.css';

export default function Navbar() {

  const {loggedIn} =useContext(AuthContext);
  console.log(loggedIn);

  return (
    <div className='navMain'>
      <div className='c1'> <Link to="/">Home</Link></div>
      <div className='c1'>
        {
          loggedIn === false  && (
            <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
          )
        }
       {
        loggedIn === true &&(
          <>
          
          <LogOutBtn />
          
          </>
        )
       }
       </div>
    </div>
      
  )
}
