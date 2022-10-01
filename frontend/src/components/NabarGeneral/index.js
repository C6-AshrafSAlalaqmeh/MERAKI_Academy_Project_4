import React from 'react'
import { Link } from 'react-router-dom'

const NavbarGeneral = ({setHideNavbarUser,setHidenavbaradmin}) => {

   
return ( <>
    <div>NavbarGeneral</div>
    <Link to='/login'> Login</Link>
    <Link to='/register'> Register</Link>


    </>
  )
}

export default NavbarGeneral