import React, { useEffect,useState } from 'react'
import axios from 'axios';
import './LinkList.css';


export default function LinkList() {

  const[links ,setLinks] = useState([])

  useEffect(() =>{
    //axios.get("https://zomely.onrender.com/short/")
    axios.get("http://localhost:5000/short/")

    .then((d) => {
      setLinks(d.data)
    })
    .catch((e) =>{console.log(e)})
  },[])

  return (
    <div className='tblbox'>
      
      <table className='tbl'>
        <thead>
          <tr>
            <th>Full URL</th>
            <th>Short URL</th>

          </tr>
        </thead>
        <tbody>
          {
            links.map((item, key)=>
            
            {  
                return  <tr key={item._id}>
                  <td className='tdf'><a href={item.full}>{item.full}</a></td>
                  <td><a href={item.short}>{item.short}</a></td>

                </tr>
                
            })
          }
        </tbody>
      </table>
    </div>
  );
}
