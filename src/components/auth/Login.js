import React, { useState } from 'react';
import axios from 'axios';
import AuthContext from '../../context/authContext'
import  { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const {getloggedIn} = useContext(AuthContext);
    const navigate = useNavigate();


    async function login(e){
        e.preventDefault();
        try{
            const loginData ={
                name,password
            };

            let res = {}
            console.log(loginData);
            //await axios.post("https://zomely.onrender.com/auth/login", loginData);
            await axios.post("http://localhost:5000/auth/login", loginData, res)
                getloggedIn();
                navigate("/");


        }
        catch(error){
            console.error(error);
            const ee = JSON.stringify(error.response.data.errorMessage, null, 2);
            toast.error(ee, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                });
            
            // alert(ee);
            
            
        }
    }

    return (
        <div className='loginbox'>
            <h1>Login to your account</h1>
            <form className='lgnfrm' onSubmit={login}>
                <input className='input' type="String" placeholder="User Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name} />
                <input className='input' type="password" placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                
                <button className='button' type='submit'>Login</button>
            </form>
            <ToastContainer />
        </div>
    )
}

