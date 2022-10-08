import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Login = ({
  setHideNavbarUser,
  setshowNavbargeneral,
  setHidenavbaradmin,
  setshowAdmin,
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
  useEffect(()=>{
     setShowMessage(false);
  },[])
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
          
          setUserId(result.data.userId);
          setToken(result.data.Token);

          setshowNavbar(true);
          setstoredName(result.data.firstName);

          setShowName(true);
          
          setshowNavbargeneral(false);
          setHidenavbaradmin(false);
          setHideNavbarUser(true);
          navigate("/list");
        }
      })
      .catch((err) => {
        // console.log(err.response.data.message);
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
        <h1 className="wordReg">Login:</h1>
      </div>
      <div className="inputLogin">
      <div className="svgAndinputemail">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
        </svg>
        <input
          className="inputEmail"
          type="email"
          placeholder="Email"
          
          onChange={(e) => {
            setEmail(e.target.value)
            
          }}
        />
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
        </svg>
        <input
          className="inputPassword"
          type="Password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        </div>
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
