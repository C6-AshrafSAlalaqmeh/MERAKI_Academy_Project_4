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



function App() {
const [ShowHome , setShoeHome]= useState(true)
const [showNavbar , setshowNavbar]= useState(false)
const[token , setToken]=useState("")
const [listidOriginal , setListIdOriginal]= useState("")
const [showcreateProduct , setShowCreateProduct]= useState(false)
const [ProductItem , setProducts]=useState([])
const [message, setMessage] = useState("")
const [showMessage, setShowMessage] = useState(false)


  return (
    <div className="App">
      <Navbar showNavbar={showNavbar} setProducts={setProducts} showcreateProduct={showcreateProduct} setShowCreateProduct={setShowCreateProduct} />
     {ShowHome && <Home/>}
      <Routes>
    <Route path="/login" element={<Login showMessage={showMessage} setShowMessage={setShowMessage} message={message} setMessage={setMessage} setShoeHome={setShoeHome} setshowNavbar={setshowNavbar} setToken={setToken} />}/>
    <Route path="/register" element={<Register showMessage={showMessage} setShowMessage={setShowMessage} message={message} setMessage={setMessage} setShoeHome={setShoeHome}/>}/>
    <Route path="/list" element={<List token={token} setListIdOriginal={setListIdOriginal} />}/>
    <Route path="/product" element={<Products setProducts={setProducts} ProductItem={ProductItem} listidOriginal={listidOriginal} setShowCreateProduct={setShowCreateProduct} showcreateProduct={showcreateProduct}/>}/>
    <Route path="/detalis" element={<Detalis/>}/>
    <Route path="/addProduct" element={<AddProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
