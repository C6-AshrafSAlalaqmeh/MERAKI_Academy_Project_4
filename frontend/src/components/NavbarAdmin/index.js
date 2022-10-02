import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const axios = require("axios");

const NavbarAdmin = ({
  setShowName,
  setshowNavbargeneral,
  setHidenavbaradmin,
  setHideNavbarUser,
  setShowCreateProduct,
  showcreateProduct,
  setToken,
  setProducts,
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
    setShowName(false)
    // setshowNavbar(false)
    setShowCreateProduct(false)
    setHideNavbarUser(false)
    setHidenavbaradmin(false)
    setshowNavbargeneral(true)
    
    setToken('')
navigate('/home')
  };

  return (
    <>
      <div className="containNav">
        <div className="divnavGood">
          <h2 className="navGood">
            Welcome <span>Admin</span>
          </h2>
        </div>
        <div className="allLink">
          <div className="logoutAndHomeAndCreat">
            <Link className="home" to="/list">
              Home
            </Link>
            <Link className="addPro" to="/addProduct">
              Create Product
            </Link>
            <button onClick={()=>logout()} className="logout">
              Logout
            </button>
          </div>

          {showcreateProduct && (
            <div className="searchAndinput">
              <input
                className="search"
                type="text"
                placeholder="Search Name Food"
                aria-label="Search"
                onChange={(e) => {
                  setInputSearch(e.target.value);
                }}
              ></input>
              <button onClick={buttonSearch}>Search</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavbarAdmin;
