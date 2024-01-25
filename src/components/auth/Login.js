import React, { useState } from 'react';
import axios from 'axios';
import AuthContext from '../../context/authContext'
import  { useContext } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';



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
            console.log(loginData);
            await axios.post("http://localhost:5000/auth/login", loginData);
            getloggedIn();
            navigate("/");


        }
        catch(err){
            console.error(err);
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
        </div>
    )
}

