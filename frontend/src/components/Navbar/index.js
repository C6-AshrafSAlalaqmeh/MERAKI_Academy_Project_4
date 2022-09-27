import {Link} from 'react-router-dom'
import './style.css'

const Navbar = ({showNavbar , showcreateProduct ,setShowCreateProduct})=>{
    
        return (
    <>
    <div className='containNav'>
    <h2>Food Recipes</h2>
   {!showNavbar ?
    <div>
    <Link to ='/login' >Login</Link>
    <Link to ='/register' >register</Link>
    </div>
    :
    <div>
    <Link to ='/login' >Logout</Link>
    <Link   to ='/list'>Home</Link>
   {showcreateProduct && <Link to ='/list' >Create Product</Link>}
    
    </div>
}
    </div>
    </>
)


}

export default Navbar