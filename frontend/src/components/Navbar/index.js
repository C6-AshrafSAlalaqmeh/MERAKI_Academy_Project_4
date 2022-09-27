import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Navbar = ({showNavbar , showcreateProduct ,setShowCreateProduct,setProducts})=>{
    const [inputSearch , setInputSearch] = useState('')
     

    const buttonSearch =()=>{
        axios.get(`http://localhost:5000/product/search?name=${inputSearch}`)
        .then((result)=>{
        console.log(result.data.Product)
        setProducts(result.data.Product)
        })
        .catch((err)=>{
         console.log(err)
        })
  


}
        return (
    <>
    <div className='containNav'>
    <h2>Food <span>Recipes</span></h2>
   
   {showcreateProduct && <div >
    <input className="search" type="text" placeholder="Search" aria-label="Search" onChange={(e)=>{setInputSearch(e.target.value)}}></input>
    <button onClick={buttonSearch}>Search</button>
    </div>
}   <div className='allLink'>
   {!showNavbar ?
    <div className='loginAndRedister'>
    <Link to ='/login' >Login</Link>
    <Link to ='/register' >register</Link>
    </div>
    :
    <div className='logoutAndHomeAndCreat'>
    <Link to ='/login' >Logout</Link>
    <Link   to ='/list'>Home</Link>
   {showcreateProduct && <Link to ='/addProduct' >Create Product</Link>}
    
    </div>

}</div>
    </div>
    </>
)


}

export default Navbar