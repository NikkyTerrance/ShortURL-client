import React, { useState } from 'react';
import axios from 'axios';
import AuthContext from '../../context/authContext'
import  { useContext } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css'



export default function Register() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordverify, setPasswordverify] = useState("");

    const {getloggedIn} = useContext(AuthContext);
    const navigate = useNavigate();


    async function register(e){
        e.preventDefault();
        try{
            const registerData ={
                name,password,passwordverify
            };
            console.log(registerData);
            await axios.post("https://zomely.onrender.com/auth/", registerData);
            getloggedIn();
            navigate("/");


        }
        catch(err){
            console.error(err);
        }
    }

    return (
        <div className='rgbox'>
            <h1>Register new account</h1>
            <form className='rgfrm' onSubmit={register}>
                <input className='input' type="String" placeholder="User Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name} />
                <input className='input' type="password" placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <input className='input' type="password" placeholder='Verify your Password'
                    onChange={(e) => setPasswordverify(e.target.value)}
                    value={passwordverify} />
                <button className='button' type='submit'>Register</button>
            </form>
        </div>
    )
}

