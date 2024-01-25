import axios from 'axios';
import React, { useState } from 'react'
import './linkform.css'


export default function LinkForm() {

const [fullURL ,setLink] = useState("");

async function saveLink(e) {
    e.preventDefault();
    try {
        const linkData = {
            fullURL: fullURL
        }
        await axios.post("https://zomely.onrender.com/short/", linkData)
    }
    catch(err){
        console.error(err);
    }
}



  return (
    <div className='urlbox'>
        <h1>Url Made SHORT!</h1>
        <form onSubmit={saveLink} className='linkfrm'>
            <input className='input' type="Text" placeholder='Enter your URL here' onChange={(e)=>{
                setLink(e.target.value);

            }}
            value={fullURL}
            />
            <button className='button' type="submit">Shorten</button>
        </form>

    </div>
  )
}
