import {Link} from 'react-router-dom'


const Navbar = ()=>{
return (
    <>
    <h2>Food Re</h2>
    <Link to ='/login' >Login</Link>
    <Link to ='/register' >register</Link>
    
    </>
)


}

export default Navbar