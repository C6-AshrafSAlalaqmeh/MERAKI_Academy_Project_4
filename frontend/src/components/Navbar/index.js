import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";



const Navbar = ({
  setshowNavbargeneral,
  setHidenavbaradmin,
  setHideNavbarUser,
  showAdmin,
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
         console.log(result.data.Product);
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
    setshowNavbargeneral(true);

    setToken("");
    navigate("/home");
  };
  return (
    <>
      <div className="containNav">
        <div>
      <div className='nameUser'>
      <h1 className="storedname"><span className="welcome"> Welcome : </span>{`${storedName}`}</h1>
      </div>
        <div className="divnavGood">
          <h2 className="navGood">
            Good <span className="food">Food</span>
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
              <Link className="home" to="/list">
                Home
              </Link>
              <Link className="fav" to="/favorite">
                Favorite
              </Link>
           
              <button  onClick={() => logout()} className="logout">
                Logout
              </button>
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
                  setInputSearch(e.target.value);console.log(e.target.value);
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
