import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default async function Redirect() {
    const params = useParams()
    const short = params.shortUrl
    console.log(short)
    const url = ("https://zomely.onrender.com/short/"+short)
    console.log(url)
    let response = await axios.get(url)
    let link = response.data;
    window.location.replace(link)

 
  return (
  <div></div>
  )
}
