import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Login = ({
  setHideNavbarUser,
  setshowNavbargeneral,
  setHidenavbaradmin,
  setshowAdmin,
  UserId,
  admin,
  setShowName,
  setUserId,
  setstoredName,
  setShowMessage,
  showMessage,
  message,
  setMessage,
  setShoeHome,
  setshowNavbar,
  setToken,
}) => {
  
  setShoeHome(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const buttLogin = () => {
    axios
      .post("http://localhost:5000/user/login", {
        email,
        password,
      })
      .then((result) => {
        if (result.data.userId === "63320180e54c7d861089cd17") {
          setshowAdmin(true);
          setToken(result.data.Token);
          setHidenavbaradmin(true);
          setshowNavbargeneral(false);
          setHideNavbarUser(false);
          setUserId(result.data.userId);
          setstoredName(result.data.firstName);
          setShowName(true);
          navigate("/list");
          
        } else {
          console.log(result.data.userId);
          setUserId(result.data.userId);
          setToken(result.data.Token);

          setshowNavbar(true);
          setstoredName(result.data.firstName);

          setShowName(true);
          console.log(UserId);
          setshowNavbargeneral(false);
          setHidenavbaradmin(false);
          setHideNavbarUser(true);
          navigate("/list");
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setMessage(err.response.data.message);
        setShowMessage(true);
      });
  };

  return (
    <div className="backgroundimg">
      <div className="buttonlogReg">
      <Link className='loginlog' to='/login'> Login</Link>
    <Link className='reginlog' to='/register'> Register</Link>
      </div>
    <div className="containerLogin">
      <div className="titleLogin">
        <h1>Login :</h1>
      </div>
      <div className="inputLogin">
        <input
          className="inputEmail"
          type="email"
          placeholder="Email"
          
          onChange={(e) => {
            setEmail(e.target.value)
            
          }}
        />
        <input
          className="inputPassword"
          type="Password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="divButtonLogin">
        <button className="ButtonLogin" onClick={buttLogin}>
          {" "}
          Login
        </button>
      </div>
     
      {showMessage && <div className="message">{ message}</div>}
      
    </div>
    </div>
  );
};
export default Login;
