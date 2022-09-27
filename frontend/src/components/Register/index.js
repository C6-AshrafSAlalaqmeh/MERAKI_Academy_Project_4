import axios from "axios";
import React, { useState } from "react";
import './style.css'

const Register = ({showMessage,setShowMessage,message,setMessage,setShoeHome}) => {
  setShoeHome(false)
  const [firstName , setFirstName]=useState("")
  const [lastName , setLastName]=useState("")
  const [Phone , setPhone]=useState("")
  const [country , setCountry]=useState("")
  const [email , setEmail]=useState("")
  const [password , setPassword]=useState("")

const buttonregister =()=>{
  axios.post('http://localhost:5000/user/register',{
    firstName ,
    lastName,
    Phone,
    country,
    email,
    password ,
    // role :""
  })
  .then((result)=>{
  setMessage(result.data.message)
  setShowMessage(true)
  })
  .catch((err)=>{

    setMessage(err.response.data.message)
    setShowMessage(true)
  })

}


  return (
  <div className="contanirReg">
  <div className="titleRegister">
  <h2>Register :</h2>
  </div>
  <div className="inputsRegister">
    <input type='text' placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}}/>
    <input type='text' placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}}/>
    <input type='number' placeholder="Phone Number" onChange={(e)=>{setPhone(e.target.value)}}/>
    <input type='text' placeholder="Country" onChange={(e)=>{setCountry(e.target.value)}}/>
    <input onClick={()=>{setShowMessage(false)}} type='email' placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type='password' placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
    <div >
     <button className="buttonRegister" onClick={buttonregister}> Register</button>
     </div>
    {showMessage && message }
    </div>)
};
export default Register;
