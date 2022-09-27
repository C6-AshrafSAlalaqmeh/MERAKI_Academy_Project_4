import React, { useState } from "react";

const Register = ({setShoeHome}) => {
  setShoeHome(false)
  const [firstName , setFirstName]=useState("")
  const [lastName , setLastName]=useState("")
  const [Phone , setPhone]=useState("")
  const [country , setCountry]=useState("")
  const [email , setEmail]=useState("")
  const [password , setPassword]=useState("")


  return (
  <div className="contanirReg">
    
  <h2>Register :</h2>
    <input type='text' placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}}/>
    <input type='text' placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}}/>
    <input type='text' placeholder="Phone Number" onChange={(e)=>{setPhone(e.target.value)}}/>
    <input type='text' placeholder="Country" onChange={(e)=>{setCountry(e.target.value)}}/>
    <input type='text' placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type='text' placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
    
           <button> Register</button>
    
    
    </div>)
};
export default Register;
