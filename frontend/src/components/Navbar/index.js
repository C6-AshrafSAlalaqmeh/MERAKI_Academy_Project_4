import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './style.css'

const Navbar = ({setShowHome,showNavbar , showcreateProduct ,setShowCreateProduct,setProducts})=>{
    const [inputSearch , setInputSearch] = useState('')

    const navigate = useNavigate()
       
    

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

const logout =()=>{
    setShowHome(false)
navigate('/home')
}
        return (
    <>
    <div className='containNav'>
    <h2>Food <span>Recipes</span></h2>
   
   <div className='allLink'>
   {!showNavbar ?
    <div className='loginAndRedister'>
    <Link className='login' to ='/login' >Login</Link>
    <Link className='reg' to ='/register' >register</Link>
    </div>
    :
    <div className='logoutAndHomeAndCreat'>
    
    <Link  className='home' to ='/list'>Home</Link>
    <Link  className='fav' to ='/favorite'>Favorite</Link>
   {showcreateProduct && <Link className='addPro' to ='/addProduct' >Create Product</Link>}
   <button  onClick={()=> logout()} className="logout">Logout</button> 
    </div>

}
{showcreateProduct && <div className='searchAndinput' >
    <input className="search" type="text" placeholder="Search" aria-label="Search" onChange={(e)=>{setInputSearch(e.target.value)}}></input>
    <button onClick={buttonSearch}>Search</button>
    </div>
}  
</div>
    </div>
    </>
)


}

export default Navbar