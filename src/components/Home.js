import LinkForm from './Links/LinkForm';
import Linklist from './Links/Linklist';
import React , { useContext }from 'react'
import AuthContext from '../context/authContext.js';




export default function Home() {
 
  const {loggedIn} = useContext(AuthContext); 
  console.log(loggedIn)

  return (
    <div>
        <LinkForm />
        {
            loggedIn === true &&(
            <> 
              <Linklist /> 

            </>)}
    </div>
  );
 

  

}
