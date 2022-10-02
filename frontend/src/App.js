import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { useState } from "react";
import List from "./components/List";
import Products from "./components/Products";
import Detalis from "./components/Detalis";
import AddProduct from "./components/AddProduct";
import NameUser from "./components/NameUser";
import Favorite from "./components/Favorite";
import Admin from "./components/Admin";
import NavbarAdmin from "./components/NavbarAdmin";
import NavbarGeneral from "./components/NabarGeneral";

function App() {
  const [ShowHome, setShoeHome] = useState(true);
  const [showNavbar, setshowNavbar] = useState(false);
  const [token, setToken] = useState("");
  const [listidOriginal, setListIdOriginal] = useState("");
  const [showcreateProduct, setShowCreateProduct] = useState(false);
  const [ProductItem, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [productDetalis, setProductDetalis] = useState([]);
  const [titleList, setTitleList] = useState("");
  const [storedName, setstoredName] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [UserId, setUserId] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [showName, setShowName] = useState(false);
  const [idFavorite, setidFavorite] = useState("");
  const [admin, setAdmin] = useState("63320180e54c7d861089cd17");
  const [showAdmin, setshowAdmin] = useState(false);
  const [showNavbargeneral, setshowNavbargeneral] = useState(true);
  const [hidenavbaradmin, setHidenavbaradmin] = useState(false);
  const [hideNavbarUser, setHideNavbarUser] = useState(false);

  return (
    <div className="App">
      {showNavbargeneral && (
        <NavbarGeneral
          setHideNavbarUser={setHideNavbarUser}
          setHidenavbaradmin={setHidenavbaradmin}
        />
      )}
      {hidenavbaradmin && (
        <NavbarAdmin
          setshowNavbargeneral={setshowNavbargeneral}
          setHideNavbarUser={setHideNavbarUser}
          setHidenavbaradmin={setHidenavbaradmin}
          setShowCreateProduct={setShowCreateProduct}
          showcreateProduct={showcreateProduct}
          setToken={setToken}
          setShowName={setShowName}
          setProducts={setProducts}
        />
      )}
      {hideNavbarUser && (
        <Navbar
          setshowNavbargeneral={setshowNavbargeneral}
          setHidenavbaradmin={setHidenavbaradmin}
          setHideNavbarUser={setHideNavbarUser}
          showAdmin={showAdmin}
          setshowNavbar={setshowNavbar}
          setToken={setToken}
          setShowName={setShowName}
          showNavbar={showNavbar}
          setProducts={setProducts}
          showcreateProduct={showcreateProduct}
          setShowCreateProduct={setShowCreateProduct}
        />
      )}
      {ShowHome && <Home />}

      {showName && <NameUser storedName={storedName} />}
      <Routes>
        <Route
          path="/admin"
          element={<Admin setHidenavbaradmin={setHidenavbaradmin} />}
        />

        <Route path="/home" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login
              setHideNavbarUser={setHideNavbarUser}
              setshowNavbargeneral={setshowNavbargeneral}
              setHidenavbaradmin={setHidenavbaradmin}
              setshowAdmin={setshowAdmin}
              UserId={UserId}
              admin={admin}
              setShowName={setShowName}
              setUserId={setUserId}
              setstoredName={setstoredName}
              showMessage={showMessage}
              setShowMessage={setShowMessage}
              message={message}
              setMessage={setMessage}
              setShoeHome={setShoeHome}
              setshowNavbar={setshowNavbar}
              setToken={setToken}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              showMessage={showMessage}
              setShowMessage={setShowMessage}
              message={message}
              setMessage={setMessage}
              setShoeHome={setShoeHome}
            />
          }
        />
        <Route
          path="/list"
          element={
            <List
              setTitleList={setTitleList}
              setShoeHome={setShoeHome}
              token={token}
              setListIdOriginal={setListIdOriginal}
            />
          }
        />
        <Route
          path="/product"
          element={
            <Products
              admin={admin}
              setidFavorite={setidFavorite}
              setTitleProduct={setTitleProduct}
              UserId={UserId}
              token={token}
              setFavorite={setFavorite}
              titleList={titleList}
              setProductDetalis={setProductDetalis}
              setProducts={setProducts}
              ProductItem={ProductItem}
              listidOriginal={listidOriginal}
              setShowCreateProduct={setShowCreateProduct}
              showcreateProduct={showcreateProduct}
            />
          }
        />
        <Route
          path="/detalis"
          element={
            <Detalis
              titleProduct={titleProduct}
              setTitleProduct={setTitleProduct}
              productDetalis={productDetalis}
            />
          }
        />
        <Route
          path="/addProduct"
          element={
            <AddProduct
              message={message}
              showMessage={showMessage}
              setShowMessage={setShowMessage}
              setMessage={setMessage}
              token={token}
            />
          }
        />
        <Route
          path="/favorite"
          element={
            <Favorite
              idFavorite={idFavorite}
              UserId={UserId}
              token={token}
              favorite={favorite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
