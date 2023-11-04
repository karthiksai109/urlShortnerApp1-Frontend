import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import image from '../images/img1.avif'
import '../App.css'
import axios from 'axios'


function Geturl(){
  const Navigate=useNavigate()
  const [longUrl,setLongUrl]=useState('')
async function submit(e){
  e.preventDefault()
let x=''

try{
  x=await axios.post('http://localhost:3000/url/shorten',{
  longUrl
},

)

window.alert(`shorturl: http://localhost:5000/${x.data.urlCode}` )
window.location.reload(false);

}
catch(err){
 if(err.response.data.message==='please enter validUrl') {
  window.alert('please provide valid url')
  window.location.reload(false)
 }
 else if(err.response.data.message===`longUrl cant be empty`){
  window.alert('shortUrl cant be generated from empty string')
  window.location.reload(false)
}

}






}

    return(
  
    
   <div>
   <div className="form-1" >
      <h1>Url Shortner</h1>
     
      <form action ='POST'>
      <div className="inp1">
      <input type='text'  onChange={(e)=>{setLongUrl(e.target.value)}} placeholder='longUrl' id='inp'/>
      </div>
      <div className="btn1">
      <input type='submit' value='Short Url' onClick={submit} id='btn'/>
      </div>
      </form>
      </div>
    </div>
  
    )
    
    }
  
  
export default Geturl