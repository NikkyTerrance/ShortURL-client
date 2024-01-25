import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setloggedIn] = useState(undefined);

    async function getloggedIn (){
        const loggedInRes = await axios.get("https://zomely.onrender.com/auth/loggedin");

        setloggedIn(loggedInRes.data);
    }

    useEffect(()=>{
        getloggedIn(); 
    },[]);

    return <AuthContext.Provider value={{loggedIn, getloggedIn}}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;
export {AuthContextProvider}