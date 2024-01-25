import React from 'react'
import  { useContext } from "react";
import axios from "axios";
import AuthContext from '../../context/authContext'
import { useNavigate } from "react-router-dom";
import './LogOutbtn.css'


    
export default function LogOutBtn() {

    const {getloggedIn} = useContext(AuthContext);

    const navigate = useNavigate();

    
    async function logOut() {
        await axios.get("https://zomely.onrender.com/auth/logout");
        await getloggedIn();
        navigate("/");

    }


  return (
    <button className='button' onClick={logOut}> 
        Logout
    </button>
  )
  
}
