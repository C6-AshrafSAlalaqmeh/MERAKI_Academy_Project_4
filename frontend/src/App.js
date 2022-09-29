import "./App.css";
import Navbar from "./components/Navbar";
import {Routes , Route} from 'react-router-dom'
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



function App() {
const [ShowHome , setShoeHome]= useState(true)
const [showNavbar , setshowNavbar]= useState(false)
const[token , setToken]=useState("")
const [listidOriginal , setListIdOriginal]= useState("")
const [showcreateProduct , setShowCreateProduct]= useState(false)
const [ProductItem , setProducts]=useState([])
const [message, setMessage] = useState("")
const [showMessage, setShowMessage] = useState(false)
const [productDetalis , setProductDetalis]=useState([])
const [titleList, setTitleList] = useState('')
const [storedName, setstoredName] = useState('')
const [favorite, setFavorite] = useState([])
const [UserId, setUserId] = useState('')
const [titleProduct, setTitleProduct] = useState('')
const [showHome, setShowHome] = useState(false)


  return (
    <div className="App">
      <Navbar setshowNavbar={setshowNavbar} setToken={setToken} setShowHome={setShowHome} showNavbar={showNavbar} setProducts={setProducts} showcreateProduct={showcreateProduct} setShowCreateProduct={setShowCreateProduct} />
     {ShowHome && <Home/>}
   {showHome &&  <NameUser storedName={storedName} />}
      <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/login" element={<Login setShowHome={setShowHome} setUserId={setUserId} setstoredName={setstoredName} showMessage={showMessage} setShowMessage={setShowMessage} message={message} setMessage={setMessage} setShoeHome={setShoeHome} setshowNavbar={setshowNavbar} setToken={setToken} />}/>
    <Route path="/register" element={<Register showMessage={showMessage} setShowMessage={setShowMessage} message={message} setMessage={setMessage} setShoeHome={setShoeHome}/>}/>
    <Route path="/list" element={<List setTitleList={setTitleList} setShoeHome={setShoeHome} token={token} setListIdOriginal={setListIdOriginal} />}/>
    <Route path="/product" element={<Products setTitleProduct={setTitleProduct} UserId={UserId} token={token} setFavorite={setFavorite} titleList={titleList} setProductDetalis={setProductDetalis}  setProducts={setProducts} ProductItem={ProductItem} listidOriginal={listidOriginal} setShowCreateProduct={setShowCreateProduct} showcreateProduct={showcreateProduct}/>}/>
    <Route path="/detalis" element={<Detalis titleProduct={titleProduct} setTitleProduct={setTitleProduct} productDetalis={productDetalis}/>}/>
    <Route path="/addProduct" element={<AddProduct message={message} showMessage={showMessage} setShowMessage={setShowMessage} setMessage={setMessage} token={token}/>}/>
    <Route path="/favorite" element={<Favorite  favorite={favorite}/>}/>
      </Routes>
    </div>
  );
}

export default App;
