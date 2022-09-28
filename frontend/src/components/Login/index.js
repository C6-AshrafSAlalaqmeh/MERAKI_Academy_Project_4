import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './style.css'



const Login = ({setUserId,setstoredName,setShowMessage,showMessage,message,setMessage,setShoeHome,setshowNavbar,setToken}) => {
  setShoeHome(false)
 const [email , setEmail]= useState("")
const [password , setPassword] = useState("")
  
const navigate = useNavigate();


const buttLogin=()=>{
  axios.post('http://localhost:5000/user/login',{
    email , 
    password
  })
  .then((result)=>{
  console.log(result.data.userId)
  setToken(result.data.Token)
 navigate('/list')
 setshowNavbar(true)
 setstoredName(result.data.firstNameresult.data.firstName)
 setUserId(result.data.userId)
  })
  .catch((err)=>{
    console.log(err.response.data.message)
    setMessage(err.response.data.message)
    setShowMessage(true)
  })
}


return(
     <div className="containerLogin">
  <div className="titleLogin">
  <h1>Login :</h1>
  </div>
  <div className="inputLogin">
<input className="inputEmail" type='email' placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
<input className="inputPassword" type='Password' placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
</div>
<div className="divButtonLogin">
<button className="ButtonLogin" onClick={buttLogin}> Login</button>
</div>
{showMessage && message}
  </div>
  )
};
export default Login;
