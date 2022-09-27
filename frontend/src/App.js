import "./App.css";
import Navbar from "./components/Navbar";
import {Routes , Route} from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { useState } from "react";
import List from "./components/List";
import Products from "./components/Products";



function App() {
const [ShowHome , setShoeHome]= useState(true)
const [showNavbar , setshowNavbar]= useState(false)
const[token , setToken]=useState("")


  return (
    <div className="App">
      <Navbar showNavbar={showNavbar}/>
     {ShowHome && <Home/>}
      <Routes>
    <Route path="/login" element={<Login setShoeHome={setShoeHome} setshowNavbar={setshowNavbar} setToken={setToken} />}/>
    <Route path="/register" element={<Register setShoeHome={setShoeHome}/>}/>
    <Route path="/list" element={<List token={token} />}/>
    <Route path="/product" element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
