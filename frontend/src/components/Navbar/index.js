import {Link} from 'react-router-dom'
import './style.css'

const Navbar = ({showNavbar})=>{
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
    <>
    <Link to ='/login' >Logout</Link>
    </>
}
    </div>
    </>
)


}

export default Navbar