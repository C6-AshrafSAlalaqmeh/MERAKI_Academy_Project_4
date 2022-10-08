import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";



const Navbar = ({
  setshowNavbargeneral,
  setHidenavbaradmin,
  setHideNavbarUser,
  setshowNavbar,
  setToken,
  setShowName,
  showNavbar,
  showcreateProduct,
  setShowCreateProduct,
  setProducts,
  storedName
}) => {
  const [inputSearch, setInputSearch] = useState("");


   
  

  const navigate = useNavigate();

  const buttonSearch = () => {
    axios
      .get(`http://localhost:5000/product/search?name=${inputSearch}`)
      .then((result) => {
         
        setProducts(result.data.Product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    setShowName(false);
    setshowNavbar(false);
    setShowCreateProduct(false);
    setHideNavbarUser(false);
    setHidenavbaradmin(false);
    

    setToken("");
    navigate("/home");
  };
  return (
    <>
      <div className="containNav">
        <div>
      <div className='nameUser'>
      <h1 className="storedname"><span className="welcome"> Welcome  </span>{`${storedName}`}</h1>
      </div>
        <div className="divnavGood">
          <h2 className="navGood">
            Good <span className="food">Food</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
</svg>
           </h2>
          
        </div>
        </div>
        <div className="allLink">
          {!showNavbar ? (
            <div className="loginAndRedister">
              <Link className="login" to="/login">
                Login
              </Link>
              <Link className="reg" to="/register">
                register
              </Link>
            </div>
          ) : (
            <div className="logoutAndHomeAndCreat">
            <div className="home">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
              <Link className="home" to="/list">
                Home
              </Link>
              </div>
              <div className="fav">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
               <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg>
              <Link className="fav" to="/favorite">
                Favorite
              </Link>
              </div >
              <div className="divlogout">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
             <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>
              <button  onClick={() => logout()} className="logout">
                Logout
              </button>
              </div>
            </div>
          )}
          {showcreateProduct && (
            <div className="searchAndinput">
              <input
                className="search"
                type="text"
                placeholder="Search Name Food"
                aria-label="Search"
                onChange={(e) => {
                  setInputSearch(e.target.value)
                }}
              ></input>
              <button className="buttonsearch" onClick={buttonSearch}>Search</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
