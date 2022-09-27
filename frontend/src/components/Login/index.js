import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";




const Login = ({setShoeHome,setshowNavbar,setToken}) => {
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
  console.log(result.data.Token)
  setToken(result.data.Token)
  console.log(result.data.message)
 navigate('/list')
 setshowNavbar(true)
  })
  .catch((err)=>{
    console.log(err.response.data.message)
  })
}


return(
     <div className="containerLogin">
     
  <h1>Login :</h1>
  <div className="inputLogin">
<input type='email' placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
<input type='Password' placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
</div>
<button onClick={buttLogin}> Login</button>

  </div>
  )
};
export default Login;
